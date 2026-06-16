"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { format, parseISO, isSameDay, getDay } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import { fetchBookedSlots, fetchCalendarData } from "@/lib/postgres/api";
import type { Service, ServiceAddon } from "@/data/service";

const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
];

interface BookingFormProps {
  service: Service;
  selectedAddons: ServiceAddon[];
  totalPrice: number;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  description: string;
}

interface CalendarData {
  blockedDates: { id: number; date: string; label: string }[];
  blockedRanges: {
    id: number;
    start_date: string;
    end_date: string;
    label: string;
  }[];
  timeBlocks: {
    id: number;
    date: string;
    start_time: string;
    end_time: string;
    label?: string;
  }[];
  openDates?: { id: number; date: string }[];
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
}

export default function BookingForm({
  service,
  selectedAddons,
  totalPrice,
}: BookingFormProps) {
  const router = useRouter();

  const [date, setDate] = useState<Date | undefined>(new Date());
  // Change state to store objects instead of plain strings
  const [bookedSlots, setBookedSlots] = useState<
    { time: string; duration: number }[]
  >([]);
  const [blackoutDates, setBlackoutDates] = useState<Date[]>([]);
  const [openDates, setOpenDates] = useState<Date[]>([]);
  const [timeBlocks, setTimeBlocks] = useState<
    { date: string; start_time: string; end_time: string }[]
  >([]);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  // -------------------- Fetch Calendar Data --------------------
  useEffect(() => {
    async function getCalendarData() {
      try {
        const data = (await fetchCalendarData()) as unknown as {
          blockedDates: { id: number; date: string; label: string }[];
          blockedRanges: {
            id: number;
            start_date: string;
            end_date: string;
            label: string;
          }[];
          timeBlocks: {
            id: number;
            date: string;
            start_time: string;
            end_time: string;
            label?: string;
          }[];
          openDates?: { id: number; date: string }[];
        };

        const manualBlocked: Date[] = data.blockedDates.map((d) =>
          parseISO(d.date),
        );

        const rangeBlocked: Date[] = [];
        data.blockedRanges.forEach((r) => {
          const start = parseISO(r.start_date);
          const end = parseISO(r.end_date);
          for (
            let dt = new Date(start);
            dt <= end;
            dt.setDate(dt.getDate() + 1)
          ) {
            rangeBlocked.push(new Date(dt));
          }
        });

        const open: Date[] = data.openDates?.map((d) => parseISO(d.date)) || [];

        setBlackoutDates([...manualBlocked, ...rangeBlocked]);
        setOpenDates(open);
        setTimeBlocks(data.timeBlocks || []);
      } catch (err) {
        console.error("Failed to fetch calendar data", err);
      }
    }

    getCalendarData();
  }, []);

  // -------------------- Fetch Booked Slots --------------------
  useEffect(() => {
    if (!date) return;

    async function getBookedSlots(d: Date) {
      try {
        const formattedDate = format(d, "yyyy-MM-dd");
        const res = await fetch(`/api/bookedSlots?date=${formattedDate}`);
        const slots = await res.json(); // [{ time: "13:30", duration: 60 }, ...]
        setBookedSlots(slots);
      } catch (err) {
        console.error("Failed to fetch booked slots", err);
      }
    }

    getBookedSlots(date);
  }, [date]);

  // -------------------- Helper: Check if time slot is blocked --------------------
  const normalizeTime = (t: string) => t.slice(0, 5);

  const isTimeBlocked = (slot: string) => {
    if (!date) return false;
    const selectedDay = format(date, "yyyy-MM-dd");
    return timeBlocks.some((b) => {
      const blockDay = format(parseISO(b.date), "yyyy-MM-dd");
      const start = normalizeTime(b.start_time);
      const end = normalizeTime(b.end_time);
      return blockDay === selectedDay && slot >= start && slot < end;
    });
  };

  // ← ADD THIS RIGHT AFTER
  const isSlotOccupied = (slot: string) => {
    const [sH, sM] = slot.split(":").map(Number);
    const slotStart = sH * 60 + sM;
    const slotEnd = slotStart + service.duration; // current service's duration

    return bookedSlots.some(({ time, duration }) => {
      const [bH, bM] = time.split(":").map(Number);
      const bookedStart = bH * 60 + bM;
      const bookedEnd = bookedStart + duration;

      // Overlap if: slotStart < bookedEnd AND slotEnd > bookedStart
      return slotStart < bookedEnd && slotEnd > bookedStart;
    });
  };

  // -------------------- Validation --------------------
  const validate = (): FormErrors => {
    const errs: FormErrors = {};

    if (!form.name.trim()) errs.name = "Full name is required.";

    if (!form.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      errs.phone = "Contact number is required.";
    } else if (form.phone.length < 10) {
      errs.phone = "Please enter a valid contact number.";
    }

    if (!date || isBeforeMinDate(date)) {
      errs.date = "Please select a valid booking date.";
    }

    if (!selectedTime) errs.time = "Please select a time slot.";

    return errs;
  };

  const markAllTouched = () => {
    setTouched({
      name: true,
      email: true,
      phone: true,
      date: true,
      time: true,
    });
  };

  const handleBlur = (field: keyof FormErrors) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate());
  };

  // Re-validate live once user has submitted once
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) setErrors(validate());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, selectedTime, date, submitted]);

  // -------------------- Handle Next --------------------
  const handleNext = () => {
    markAllTouched();
    setSubmitted(true);

    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;

    const bookingData = {
      service: {
        slug: service.slug,
        title: service.title,
        price: Number(service.price) || 0, // ← coerce to number
      },
      addons: selectedAddons.map((a) => ({
        ...a,
        price: Number(a.price) || 0, // ← same for addons
      })),
      totalPrice: Number(totalPrice) || 0, // ← and total
      customer: form,
      date: format(date!, "yyyy-MM-dd"),
      time: selectedTime,
    };

    router.push(
      `/book-now/confirm?data=${encodeURIComponent(JSON.stringify(bookingData))}`,
    );
  };

  const getMinBookingDate = () => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 2);
    return d;
  };

  // -------------------- Disable Logic --------------------
  const isDayDisabled = (day: Date) => {
    const minDate = getMinBookingDate();
    if (day < minDate) return true;
    const isWeekend = getDay(day) === 0 || getDay(day) === 6;
    const isBlocked = blackoutDates.some((b) => isSameDay(day, b));
    const isOpen = openDates.some((d) => isSameDay(day, d));
    return (isWeekend || isBlocked) && !isOpen;
  };

  const isToday = (d: Date) => isSameDay(d, new Date());

  const isBeforeMinDate = (d: Date) => d < getMinBookingDate();

  // -------------------- Field Error Component --------------------
  const FieldError = ({ message }: { message?: string }) =>
    message ? (
      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
        <svg
          className="w-3.5 h-3.5 shrink-0"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 3.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4.5zm0 7a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75z" />
        </svg>
        {message}
      </p>
    ) : null;

  const inputClass = (field: keyof FormErrors) =>
    `border rounded-lg px-4 py-2.5 text-sm md:text-base focus:outline-none focus:ring-2 focus:border-transparent transition text-[#191919] ${
      (touched[field] || submitted) && errors[field]
        ? "border-red-400 focus:ring-red-300 bg-red-50"
        : "border-gray-300 focus:ring-[#A30A24]"
    }`;

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-6 lg:p-8 bg-white">
      <div className="flex flex-col gap-6 md:gap-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4">
          {/* Calendar */}
          <div className="md:bg-gray-50 md:border rounded-xl p-1 md:p-4">
            <h3 className="text-base font-semibold mb-3 text-[#191919]">
              Select Date{" "}
              <span className="text-[#A30A24]" aria-hidden="true">
                *
              </span>
            </h3>

            <DayPicker
              className="text-[#A30A24]"
              mode="single"
              selected={date}
              onSelect={(d) => {
                setDate(d || undefined);
                setTouched((prev) => ({ ...prev, date: true }));
              }}
              disabled={[{ before: getMinBookingDate() }, isDayDisabled]}
              modifiersClassNames={{
                selected: "bg-[#A30A24] text-white rounded",
                today: "text-[#000000]/50 rounded",
              }}
              components={{
                Button: (
                  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
                ) => {
                  const ariaLabel = props["aria-label"] || "";
                  if (ariaLabel.includes("Previous"))
                    return (
                      <button
                        {...props}
                        className="p-1 rounded text-[#A30A24] hover:bg-[#A30A24] hover:text-white"
                      >
                        <GrFormPrevious />
                      </button>
                    );
                  if (ariaLabel.includes("Next"))
                    return (
                      <button
                        {...props}
                        className="p-1 rounded text-[#A30A24] hover:bg-[#A30A24] hover:text-white"
                      >
                        <GrFormNext />
                      </button>
                    );
                  return <button {...props} />;
                },
              }}
              classNames={{
                caption: "flex items-center justify-between mb-2",
              }}
            />

            {(touched.date || submitted) && errors.date && (
              <FieldError message={errors.date} />
            )}
          </div>

          {/* Time Slots */}
          <div
            className={`bg-gray-50 border rounded-xl p-4 ${
              (touched.time || submitted) && errors.time ? "border-red-300" : ""
            }`}
          >
            <h3 className="text-base font-semibold mb-4 text-[#191919]">
              Available Time Slots{" "}
              <span className="text-[#A30A24]" aria-hidden="true">
                *
              </span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {TIME_SLOTS.map((slot) => {
                const isBooked = isSlotOccupied(slot);
                const isBlocked = isTimeBlocked(slot);
                const invalidDate =
                  !date || isToday(date) || isBeforeMinDate(date);
                const isDisabled = isBooked || isBlocked || invalidDate;

                return (
                  <button
                    key={slot}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => {
                      setSelectedTime(slot);
                      setTouched((prev) => ({ ...prev, time: true }));
                    }}
                    className={`
                      rounded-lg px-3 py-2 text-sm font-medium transition
                      border border-[#A30A24]
                      ${
                        selectedTime === slot
                          ? "bg-[#A30A24] text-white shadow-md"
                          : "bg-white text-[#A30A24]"
                      }
                      ${
                        isDisabled
                          ? "opacity-30 cursor-not-allowed"
                          : "hover:bg-[#A30A24] hover:text-white"
                      }
                    `}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>

            {(touched.time || submitted) && errors.time && (
              <div className="mt-3">
                <FieldError message={errors.time} />
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6">
          {/* Inputs */}
          <div className="bg-gray-50 border rounded-xl p-4 flex flex-col gap-4">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-sm md:text-base font-medium mb-1 text-[#191919]">
                Full Name{" "}
                <span className="text-[#A30A24]" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                onBlur={() => handleBlur("name")}
                className={inputClass("name")}
                required
                aria-invalid={!!(touched.name || submitted) && !!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {(touched.name || submitted) && (
                <span id="name-error">
                  <FieldError message={errors.name} />
                </span>
              )}
            </div>

            {/* Contact Number */}
            <div className="flex flex-col">
              <label className="text-sm md:text-base font-medium mb-1 text-[#191919]">
                Contact Number{" "}
                <span className="text-[#A30A24]" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="e.g. 09123456789"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })
                }
                onBlur={() => handleBlur("phone")}
                className={inputClass("phone")}
                required
                aria-invalid={!!(touched.phone || submitted) && !!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {(touched.phone || submitted) && (
                <span id="phone-error">
                  <FieldError message={errors.phone} />
                </span>
              )}
            </div>

            {/* Email Address */}
            <div className="flex flex-col">
              <label className="text-sm md:text-base font-medium mb-1 text-[#191919]">
                Email Address{" "}
                <span className="text-[#A30A24]" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onBlur={() => handleBlur("email")}
                className={inputClass("email")}
                required
                aria-invalid={!!(touched.email || submitted) && !!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {(touched.email || submitted) && (
                <span id="email-error">
                  <FieldError message={errors.email} />
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-50 border rounded-xl p-4 flex flex-col">
            <label className="text-sm md:text-base font-medium mb-2 text-[#191919]">
              Additional Details
            </label>
            <textarea
              placeholder="Tell us about your event..."
              rows={6}
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="h-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#A30A24] focus:border-transparent transition resize-none text-[#191919]"
            />
          </div>

          {/* Summary + Submit */}
          <div className="col-span-1 lg:col-span-2">
            <div className="bg-[#A30A24]/5 border border-[#A30A24] rounded-lg p-4 mb-4 text-sm md:text-base text-[#A30A24]">
              {date ? format(date, "PPPP") : "No date selected"}
              {selectedTime && ` • ${selectedTime}`}
            </div>

            {/* Summary error banner — only shown after first submit attempt */}
            {submitted && Object.keys(errors).length > 0 && (
              <div
                role="alert"
                className="mb-4 flex items-start gap-2.5 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                <svg
                  className="mt-0.5 w-4 h-4 shrink-0"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 3.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4.5zm0 7a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75z" />
                </svg>
                <span>
                  Please complete all required fields before proceeding.
                </span>
              </div>
            )}

            <button
              type="button"
              onClick={handleNext}
              className="w-full h-12 rounded-lg bg-[#A30A24] text-white font-semibold hover:opacity-90 transition shadow-md"
            >
              Review Booking
            </button>

            <p className="mt-3 text-xs text-gray-400 text-center">
              Fields marked{" "}
              <span className="text-[#A30A24] font-medium">*</span> are
              required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
