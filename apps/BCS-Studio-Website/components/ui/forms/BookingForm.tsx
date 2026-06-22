"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { format, parseISO, isSameDay, getDay } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import { fetchCalendarData } from "@/lib/postgres/api";
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
interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Module-level components — NEVER inside BookingForm
// ─────────────────────────────────────────────────────────────────────────────

function SectionLabel({ step, label }: { step: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[10px] font-mono tracking-[3px] text-[#6E6E6E] uppercase">
        {step}
      </span>
      <div className="flex-1 border-t border-dashed border-gray-200" />
      <span className="text-[10px] font-mono tracking-[3px] text-[#6E6E6E] uppercase">
        {label}
      </span>
    </div>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5">
      <svg
        className="w-3.5 h-3.5 shrink-0"
        viewBox="0 0 16 16"
        fill="currentColor"
      >
        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 3.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4.5zm0 7a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75z" />
      </svg>
      {message}
    </p>
  );
}

function Field({
  id,
  label,
  required,
  error,
  touched,
  submitted,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  touched: boolean;
  submitted: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="text-xs font-mono tracking-[2px] uppercase text-[#6E6E6E]"
      >
        {label}
        {required && <span className="text-[#A30A24] ml-1">*</span>}
      </label>
      {children}
      {(touched || submitted) && <FieldError message={error} />}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function BookingForm({
  service,
  selectedAddons,
  totalPrice,
}: BookingFormProps) {
  const router = useRouter();

  const [date, setDate] = useState<Date | undefined>(new Date());
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
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

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
        const manualBlocked = data.blockedDates.map((d) => parseISO(d.date));
        const rangeBlocked: Date[] = [];
        data.blockedRanges.forEach((r) => {
          const start = parseISO(r.start_date);
          const end = parseISO(r.end_date);
          for (
            let dt = new Date(start);
            dt <= end;
            dt.setDate(dt.getDate() + 1)
          )
            rangeBlocked.push(new Date(dt));
        });
        setBlackoutDates([...manualBlocked, ...rangeBlocked]);
        setOpenDates(data.openDates?.map((d) => parseISO(d.date)) || []);
        setTimeBlocks(data.timeBlocks || []);
      } catch (err) {
        console.error("Failed to fetch calendar data", err);
      }
    }
    getCalendarData();
  }, []);

  useEffect(() => {
    if (!date) return;
    async function getBookedSlots(d: Date) {
      try {
        const res = await fetch(
          `/api/bookedSlots?date=${format(d, "yyyy-MM-dd")}`,
        );
        setBookedSlots(await res.json());
      } catch (err) {
        console.error("Failed to fetch booked slots", err);
      }
    }
    getBookedSlots(date);
  }, [date]);

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

  const isSlotOccupied = (slot: string) => {
    const [sH, sM] = slot.split(":").map(Number);
    const slotStart = sH * 60 + sM;
    const slotEnd = slotStart + service.duration;
    return bookedSlots.some(({ time, duration }) => {
      const [bH, bM] = time.split(":").map(Number);
      const bookedStart = bH * 60 + bM;
      return slotStart < bookedStart + duration && slotEnd > bookedStart;
    });
  };

  const getMinBookingDate = () => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 2);
    return d;
  };
  const isBeforeMinDate = (d: Date) => d < getMinBookingDate();
  const isToday = (d: Date) => isSameDay(d, new Date());
  const isDayDisabled = (day: Date) => {
    const minDate = getMinBookingDate();
    if (day < minDate) return true;
    const isWeekend = getDay(day) === 0 || getDay(day) === 6;
    const isBlocked = blackoutDates.some((b) => isSameDay(day, b));
    const isOpen = openDates.some((d) => isSameDay(day, d));
    return (isWeekend || isBlocked) && !isOpen;
  };

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Full name is required.";
    if (!form.email.trim()) errs.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Please enter a valid email address.";
    if (!form.phone.trim()) errs.phone = "Contact number is required.";
    else if (form.phone.length < 10)
      errs.phone = "Please enter a valid contact number.";
    if (!date || isBeforeMinDate(date))
      errs.date = "Please select a valid booking date.";
    if (!selectedTime) errs.time = "Please select a time slot.";
    return errs;
  };

  const handleBlur = (field: keyof FormErrors) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate());
  };

  useEffect(() => {
    if (submitted) setErrors(validate());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, selectedTime, date, submitted]);

  const handleNext = () => {
    setTouched({
      name: true,
      email: true,
      phone: true,
      date: true,
      time: true,
    });
    setSubmitted(true);
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    const bookingData = {
      service: {
        slug: service.slug,
        title: service.title,
        price: Number(service.price) || 0,
      },
      addons: selectedAddons.map((a) => ({
        ...a,
        price: Number(a.price) || 0,
      })),
      totalPrice: Number(totalPrice) || 0,
      customer: form,
      date: format(date!, "yyyy-MM-dd"),
      time: selectedTime,
    };
    router.push(
      `/book-now/confirm?data=${encodeURIComponent(JSON.stringify(bookingData))}`,
    );
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full rounded-lg px-4 py-2.5 text-sm border bg-white text-[#191919] placeholder:text-gray-400
     focus:outline-none focus:ring-2 focus:border-transparent transition
     ${
       (touched[field] || submitted) && errors[field]
         ? "border-red-400 focus:ring-red-300 bg-red-50"
         : "border-gray-200 focus:ring-[#A30A24]"
     }`;

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-6 lg:p-8 bg-white">
      <div className="flex flex-col gap-8">
        {/* ── STEP 1: Date + Time ──────────────────────────────────────────── */}
        <div>
          <SectionLabel step="Step 01" label="Schedule" />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4">
            {/* Calendar panel */}
            <div
              className={`rounded-xl border p-4 bg-[#fafafa] ${
                (touched.date || submitted) && errors.date
                  ? "border-red-300"
                  : "border-gray-200"
              }`}
            >
              <p className="text-xs font-mono tracking-[2px] uppercase text-[#6E6E6E] mb-3">
                Select date <span className="text-[#A30A24]">*</span>
              </p>
              <DayPicker
                className="text-[#A30A24] !m-0"
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
                          className="p-1 rounded text-[#A30A24] hover:bg-[#A30A24] hover:text-white transition"
                        >
                          <GrFormPrevious />
                        </button>
                      );
                    if (ariaLabel.includes("Next"))
                      return (
                        <button
                          {...props}
                          className="p-1 rounded text-[#A30A24] hover:bg-[#A30A24] hover:text-white transition"
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
              {(touched.date || submitted) && (
                <FieldError message={errors.date} />
              )}
            </div>

            {/* Time slots panel */}
            <div
              className={`rounded-xl border p-4 bg-[#fafafa] ${
                (touched.time || submitted) && errors.time
                  ? "border-red-300"
                  : "border-gray-200"
              }`}
            >
              <p className="text-xs font-mono tracking-[2px] uppercase text-[#6E6E6E] mb-4">
                Time slot <span className="text-[#A30A24]">*</span>
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {TIME_SLOTS.map((slot) => {
                  const isBooked = isSlotOccupied(slot);
                  const isBlocked = isTimeBlocked(slot);
                  const invalidDate =
                    !date || isToday(date) || isBeforeMinDate(date);
                  const isDisabled = isBooked || isBlocked || invalidDate;
                  const isSelected = selectedTime === slot;
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
                        relative rounded-lg px-3 py-2.5 text-sm font-mono font-medium transition-all
                        border flex flex-col items-center gap-0.5
                        ${
                          isSelected
                            ? "bg-[#A30A24] border-[#A30A24] text-white"
                            : isDisabled
                              ? "bg-gray-50 border-gray-200 text-gray-300 cursor-not-allowed"
                              : "bg-white border-gray-200 text-[#191919] hover:border-[#A30A24] hover:text-[#A30A24]"
                        }
                      `}
                    >
                      {slot}
                      {isBooked && (
                        <span className="text-[9px] tracking-wider uppercase opacity-70">
                          Booked
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="mt-4 pt-3 border-t border-dashed border-gray-200 flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-1.5 text-[10px] text-gray-400 font-mono">
                  <span className="w-3 h-3 rounded-sm bg-[#A30A24] inline-block" />
                  Selected
                </span>
                <span className="flex items-center gap-1.5 text-[10px] text-gray-400 font-mono">
                  <span className="w-3 h-3 rounded-sm bg-gray-100 border border-gray-200 inline-block" />
                  Unavailable
                </span>
              </div>
              {(touched.time || submitted) && (
                <div className="mt-2">
                  <FieldError message={errors.time} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── STEP 2: Contact Info ─────────────────────────────────────────── */}
        <div>
          <SectionLabel step="Step 02" label="Your Details" />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4">
            <div className="rounded-xl border border-gray-200 bg-[#fafafa] p-4 flex flex-col gap-4">
              <Field
                id="name"
                label="Full name"
                required
                error={errors.name}
                touched={!!touched.name}
                submitted={submitted}
              >
                <input
                  id="name"
                  type="text"
                  placeholder="Juan dela Cruz"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onBlur={() => handleBlur("name")}
                  className={inputClass("name")}
                />
              </Field>

              <Field
                id="phone"
                label="Contact number"
                required
                error={errors.phone}
                touched={!!touched.phone}
                submitted={submitted}
              >
                <input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="09123456789"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value.replace(/\D/g, ""),
                    })
                  }
                  onBlur={() => handleBlur("phone")}
                  className={inputClass("phone")}
                />
              </Field>

              <Field
                id="email"
                label="Email address"
                required
                error={errors.email}
                touched={!!touched.email}
                submitted={submitted}
              >
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onBlur={() => handleBlur("email")}
                  className={inputClass("email")}
                />
              </Field>
            </div>

            <div className="rounded-xl border border-gray-200 bg-[#fafafa] p-4 flex flex-col">
              <label className="text-xs font-mono tracking-[2px] uppercase text-[#6E6E6E] mb-2">
                Additional notes
              </label>
              <textarea
                placeholder="Tell us about your event — location, theme, number of guests, special requests..."
                rows={6}
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="flex-1 w-full rounded-lg px-4 py-2.5 text-sm border border-gray-200 bg-white
                           text-[#191919] placeholder:text-gray-400 focus:outline-none focus:ring-2
                           focus:ring-[#A30A24] focus:border-transparent transition resize-none"
              />
            </div>
          </div>
        </div>

        {/* ── STEP 3: Review + Submit ──────────────────────────────────────── */}
        <div>
          <SectionLabel step="Step 03" label="Review" />

          <div className="rounded-xl border border-[#A30A24] bg-[#A30A24]/5 px-5 py-4 mb-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="space-y-0.5">
                <p className="text-xs font-mono tracking-[2px] uppercase text-[#A30A24]/60">
                  Booking summary
                </p>
                <p className="text-sm font-semibold text-[#191919]">
                  {service.title}
                </p>
              </div>
              <div className="text-right space-y-0.5">
                <p className="text-xs font-mono tracking-[2px] uppercase text-[#A30A24]/60">
                  {date ? format(date, "MMM d, yyyy") : "No date"}
                  {selectedTime ? ` · ${selectedTime}` : ""}
                </p>
                <p className="text-lg font-bold text-[#A30A24]">
                  ₱{Number(totalPrice).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

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
            className="w-full h-12 rounded-lg bg-[#A30A24] text-white font-semibold
                       hover:bg-[#8a0820] active:scale-[0.99] transition-all"
          >
            Review Booking →
          </button>

          <p className="mt-3 text-xs text-gray-400 text-center font-mono tracking-wide">
            Fields marked <span className="text-[#A30A24]">*</span> are required
          </p>
        </div>
      </div>
    </div>
  );
}
