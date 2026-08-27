"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";
import SkewButton from "@/components/ui/buttons/SkewButton";
import { useSearchParams } from "next/navigation";

const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"] });

type Service = {
  id: string;
  title: string;
  description?: string;
  price: number;
  type: "portrait" | "rental";
};

type ServiceCategory = "portraits" | "studio" | "event";

const FILTERS = [
  { label: "Portraits", value: "portraits" },
  { label: "Studio Rental", value: "studio" },
  { label: "Event Coverage", value: "event" },
] as const;

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.07 } },
};

export default function ServiceSection() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") as ServiceCategory | null;

  const [activeFilter, setActiveFilter] = useState<ServiceCategory>(
    tab === "event" ? "event" : "portraits",
  );

  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadServices() {
      try {
        const res = await fetch("/api/packages");
        const data = await res.json();

        type PackageAPI = {
          id: string;
          title: string;
          description?: string;
          price: number | string;
          type?: "portrait" | "rental";
        };

        const mapped: Service[] = data.map((pkg: PackageAPI) => ({
          id: pkg.id,
          title: pkg.title,
          description: pkg.description,
          price: Number(pkg.price),
          type: pkg.type ?? "portrait",
        }));

        setServices(mapped);
      } catch (err) {
        console.error("Failed to fetch services:", err);
      } finally {
        setLoading(false);
      }
    }

    loadServices();
  }, []);

  const portraitServices = services
    .filter((s) => s.type === "portrait")
    .sort((a, b) => a.title.localeCompare(b.title));

  const rentalServices = services
    .filter((s) => s.type === "rental")
    .sort((a, b) => a.title.localeCompare(b.title));

  const displayedServices =
    activeFilter === "event"
      ? []
      : activeFilter === "portraits"
        ? portraitServices
        : rentalServices;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);
    setError("");

    if (!form.name || !form.email || !form.phone || !form.message) {
      setError("Please fill in all fields.");
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/send-event-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send email.");

      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="px-6 lg:px-16 py-20 bg-[#F7F5F2] min-h-[60vh]">
      {/* Header + Filters */}
      <div className="mb-12">
        <span
          className={`${mono.className} text-[10px] uppercase tracking-[0.25em] mb-3 block`}
          style={{ color: "#A30A24" }}
        >
          Step 01 — Choose a Service
        </span>
        <h2
          className="font-black mb-8"
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            letterSpacing: "-0.01em",
            color: "#161616",
          }}
        >
          Select Service
        </h2>

        {/* Filter tabs */}
        <div className="flex gap-3 flex-wrap">
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`relative px-6 py-2.5 font-bold transition-all duration-200 cursor-pointer ${
                mono.className
              } text-[11px] uppercase tracking-[0.15em] border-2`}
              style={
                activeFilter === filter.value
                  ? {
                      background: "#A30A24",
                      borderColor: "#A30A24",
                      color: "#fff",
                    }
                  : {
                      background: "transparent",
                      borderColor: "#D0C9C0",
                      color: "#6E6E6E",
                    }
              }
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Loading skeleton */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white animate-pulse"
              style={{ height: "200px", border: "1px solid #E8E4DF" }}
            />
          ))}
        </div>
      )}

      {/* Service cards */}
      <AnimatePresence mode="wait">
        {!loading && activeFilter !== "event" && (
          <motion.div
            key={activeFilter}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={stagger}
          >
            {/* Section label */}
            <div
              className="flex items-center gap-4 mb-8 pb-4"
              style={{ borderBottom: "1px solid #E8E4DF" }}
            >
              <h3
                className="font-bold text-[#161616]"
                style={{ fontSize: "clamp(18px, 2vw, 24px)" }}
              >
                {activeFilter === "portraits"
                  ? "Portrait Packages"
                  : "Studio Rental Packages"}
              </h3>
              <span
                className={`${mono.className} text-[11px] uppercase tracking-[0.15em]`}
                style={{ color: "#9E9E9E" }}
              >
                {displayedServices.length} package
                {displayedServices.length !== 1 ? "s" : ""}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {displayedServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={fadeUp}
                  className="bg-white flex flex-col gap-5 p-8 group"
                  style={{ border: "1px solid #E8E4DF" }}
                >
                  {/* Top: title + price */}
                  <div
                    className="flex justify-between items-start gap-4 pb-5"
                    style={{ borderBottom: "1px solid #E8E4DF" }}
                  >
                    <h4
                      className="font-black leading-tight"
                      style={{
                        fontSize: "clamp(20px, 2.5vw, 30px)",
                        letterSpacing: "-0.01em",
                        color: "#161616",
                      }}
                    >
                      {service.title}
                    </h4>
                    <span
                      className="font-black shrink-0"
                      style={{
                        fontSize: "clamp(20px, 2.5vw, 30px)",
                        letterSpacing: "-0.01em",
                        color: "#A30A24",
                      }}
                    >
                      ₱{service.price.toLocaleString()}
                    </span>
                  </div>

                  {/* Description */}
                  {service.description && (
                    <p
                      className="text-[15px] md:text-[17px] leading-relaxed"
                      style={{ color: "#6E6E6E" }}
                    >
                      {service.description.split(" ").length > 13
                        ? service.description
                            .split(" ")
                            .slice(0, 13)
                            .join(" ") + "…"
                        : service.description}
                    </p>
                  )}

                  <div className="mt-auto pt-2">
                    <SkewButton href={`/book-now/services/${service.id}`}>
                      Book Now
                    </SkewButton>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty state */}
            {displayedServices.length === 0 && (
              <motion.div
                variants={fadeUp}
                className="py-20 text-center"
                style={{ border: "1px dashed #D0C9C0" }}
              >
                <p
                  className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`}
                  style={{ color: "#9E9E9E" }}
                >
                  No packages available yet
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Event Coverage — Talk to our team */}
      <AnimatePresence mode="wait">
        {activeFilter === "event" && (
          <motion.div
            key="event"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeUp}
            className="bg-white"
            style={{ border: "1px solid #E8E4DF" }}
          >
            {/* Red header band */}
            <div className="bg-[#A30A24] px-8 py-6 flex items-center gap-4">
              <div>
                <span
                  className={`${mono.className} text-[10px] uppercase tracking-[0.25em]`}
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Event Coverage
                </span>
                <h5
                  className="font-black text-white mt-0.5"
                  style={{
                    fontSize: "clamp(22px, 3vw, 36px)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Talk to Our Team
                </h5>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <p
                className="text-[15px] md:text-[17px] mb-8 max-w-xl"
                style={{ color: "#6E6E6E" }}
              >
                Every event is unique. Tell us about yours and we&apos;ll get
                back to you with a tailored quote and availability.
              </p>

              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                {/* Row: name / phone / email */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {(
                    [
                      {
                        key: "name",
                        label: "Full Name",
                        type: "text",
                        placeholder: "Your full name",
                      },
                      {
                        key: "phone",
                        label: "Contact Number",
                        type: "tel",
                        placeholder: "09123456789",
                      },
                      {
                        key: "email",
                        label: "Email Address",
                        type: "email",
                        placeholder: "you@example.com",
                      },
                    ] as const
                  ).map(({ key, label, type, placeholder }) => (
                    <div key={key} className="flex flex-col gap-1.5">
                      <label
                        className={`${mono.className} text-[10px] uppercase tracking-[0.15em]`}
                        style={{ color: "#A30A24" }}
                      >
                        {label}
                      </label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={form[key]}
                        onChange={(e) =>
                          setForm((f) => ({
                            ...f,
                            [key]:
                              key === "phone"
                                ? e.target.value.replace(/\D/g, "")
                                : e.target.value,
                          }))
                        }
                        className="px-4 py-2.5 text-[15px] text-black placeholder:text-black/30 outline-none focus:border-[#A30A24] transition-colors"
                        style={{ border: "1px solid #D0C9C0" }}
                        required
                      />
                    </div>
                  ))}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className={`${mono.className} text-[10px] uppercase tracking-[0.15em]`}
                    style={{ color: "#A30A24" }}
                  >
                    Event Details
                  </label>
                  <textarea
                    placeholder="Describe your event — date, venue, expected guests, style, anything that helps us picture it."
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="px-4 py-3 text-[15px] text-black placeholder:text-black/30 outline-none focus:border-[#A30A24] transition-colors resize-none"
                    style={{ border: "1px solid #D0C9C0" }}
                    required
                  />
                </div>

                {/* Feedback */}
                {success && (
                  <p
                    className={`${mono.className} text-[11px] uppercase tracking-[0.15em]`}
                    style={{ color: "#2D7A3A" }}
                  >
                    ✓ Message sent — we&apos;ll be in touch soon.
                  </p>
                )}
                {error && (
                  <p
                    className={`${mono.className} text-[11px] uppercase tracking-[0.15em]`}
                    style={{ color: "#A30A24" }}
                  >
                    {error}
                  </p>
                )}

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="relative px-10 py-3 font-bold transition-all duration-200 cursor-pointer"
                    style={{
                      background: submitting ? "#C0515A" : "#A30A24",
                      color: "#fff",
                      letterSpacing: "0.05em",
                      fontSize: "14px",
                    }}
                  >
                    {submitting ? "Sending…" : "Send Enquiry"}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
