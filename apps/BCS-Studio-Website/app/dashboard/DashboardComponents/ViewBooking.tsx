"use client";

import React from "react";
import { format } from "date-fns";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

type BookingStatus = "Pending" | "Confirmed" | "Cancelled";

interface ServiceInfo {
  id: number | string;
  slug?: string;
  title: string;
  price: number;
}

interface Addon {
  id: string | number;
  label?: string;
  name?: string;
  price: number | string;
}

interface Customer {
  name: string;
  email: string;
  phone: string;
  description?: string;
}

interface Booking {
  id: string | number;
  customer: Customer;
  service?: ServiceInfo;
  addons?: Addon[];
  date?: string;
  time?: string;
  totalPrice: number;
  status: BookingStatus;
  proof?: string | null;
}

interface ViewBookingProps {
  booking: Booking;
  onClose: () => void;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fmtPrice = (val: number | string): string => {
  const n = typeof val === "string" ? parseFloat(val) : val;
  return `₱${n.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`;
};

const STATUS_CONFIG: Record<
  BookingStatus,
  { label: string; bg: string; text: string; dot: string; icon: string }
> = {
  Confirmed: {
    label: "Confirmed",
    bg: "#ECFDF5",
    text: "#065F46",
    dot: "#10B981",
    icon: "✓",
  },
  Pending: {
    label: "Pending",
    bg: "#FFFBEB",
    text: "#92400E",
    dot: "#F59E0B",
    icon: "◐",
  },
  Cancelled: {
    label: "Cancelled",
    bg: "#FEF2F2",
    text: "#991B1B",
    dot: "#EF4444",
    icon: "×",
  },
};

const ExternalIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// ─── Sub-components ───────────────────────────────────────────────────────────

interface InfoRowProps {
  label: string;
  value: React.ReactNode;
  mono?: boolean;
}

const InfoRow = ({ label, value, mono = false }: InfoRowProps) => (
  <div
    className="flex justify-between items-start gap-4 py-2.5"
    style={{ borderBottom: "1px solid #f0e0e3" }}
  >
    <span
      className="text-[10px] font-bold uppercase tracking-widest shrink-0 pt-0.5"
      style={{
        color: "#b07880",
        fontFamily: "'JetBrains Mono', monospace",
        minWidth: "6.5rem",
      }}
    >
      {label}
    </span>
    <span
      className={`text-sm text-right leading-snug ${mono ? "font-mono" : ""}`}
      style={{ color: "#1a0a0d" }}
    >
      {value}
    </span>
  </div>
);

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <div className="space-y-0.5">
    <div className="flex items-center gap-2 mb-1.5">
      <span
        className="text-[9px] font-bold uppercase tracking-[0.18em]"
        style={{ color: "#A30A24", fontFamily: "'JetBrains Mono', monospace" }}
      >
        {title}
      </span>
      <div className="flex-1 h-px" style={{ background: "#f0dde0" }} />
    </div>
    {children}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ViewBooking({ booking, onClose }: ViewBookingProps) {
  const {
    customer,
    service = { id: 0, slug: "", title: "Service", price: 0 },
    addons = [],
    date,
    time,
    totalPrice,
    status,
    proof,
    id,
  } = booking;

  // ── Date / time formatting ─────────────────────────────────────────────────

  let formattedDate = date ?? "—";
  let formattedTime = time ?? "—";

  try {
    if (date) {
      const [year, month, day] = date.split("-").map(Number);
      if (year && month && day) {
        formattedDate = format(new Date(year, month - 1, day), "MMMM dd, yyyy");
      }
    }
    if (time) {
      const [hStr, mStr] = time.split(":");
      if (hStr !== undefined && mStr !== undefined) {
        const h24 = parseInt(hStr, 10);
        const ampm = h24 >= 12 ? "PM" : "AM";
        const h12 = h24 % 12 || 12;
        formattedTime = `${h12}:${mStr} ${ampm}`;
      }
    }
  } catch (err) {
    console.warn("Failed to format date/time:", err);
  }

  // ── Status ─────────────────────────────────────────────────────────────────

  const statusCfg = STATUS_CONFIG[status] ?? STATUS_CONFIG["Pending"];

  // ── Add-ons total ──────────────────────────────────────────────────────────

  const addonsTotal = addons.reduce(
    (sum, a) =>
      sum + (typeof a.price === "string" ? parseFloat(a.price) : a.price),
    0,
  );

  // ── Initials ───────────────────────────────────────────────────────────────

  const initials = customer.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  // ── Proof type ─────────────────────────────────────────────────────────────

  const isImage = !!proof?.match(/\.(jpg|jpeg|png|webp)$/i);
  const isPdf = !!proof?.match(/\.pdf$/i);

  // ─────────────────────────────────────────────────────────────────────────

  return (
    <div
      className="flex flex-col gap-5 text-sm"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Header ── */}
      <div
        className="relative overflow-hidden rounded-2xl p-4"
        style={{
          background: "linear-gradient(135deg, #A30A24 0%, #7a0019 100%)",
        }}
      >
        {/* Film-grain texture strip */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg, transparent, transparent 2px, rgba(255,255,255,0.15) 2px, rgba(255,255,255,0.15) 3px
            )`,
          }}
        />

        {/* Sprocket holes — top row */}
        <div className="absolute top-0 left-0 right-0 flex justify-around px-2 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-2.5 h-1.5 rounded-sm"
              style={{ background: "rgba(0,0,0,0.35)", marginTop: "-1px" }}
            />
          ))}
        </div>

        <div className="relative flex items-center gap-3 mt-1">
          {/* Avatar */}
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-base shrink-0"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1.5px solid rgba(255,255,255,0.25)",
              fontFamily: "'Georgia', serif",
              letterSpacing: "0.03em",
            }}
          >
            {initials}
          </div>

          {/* Name + ID */}
          <div className="flex-1 min-w-0">
            <p
              className="font-bold text-white text-base leading-tight truncate"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {customer.name}
            </p>
            <p
              className="text-[10px] mt-0.5"
              style={{
                color: "rgba(255,255,255,0.55)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              BK-{String(id).padStart(4, "0")}
            </p>
          </div>

          {/* Status badge */}
          <span
            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-lg shrink-0"
            style={{
              background: statusCfg.bg,
              color: statusCfg.text,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: statusCfg.dot }}
            />
            {statusCfg.label}
          </span>
        </div>
      </div>

      {/* ── Customer ── */}
      <Section title="Customer">
        <InfoRow label="Email" value={customer.email} />
        <InfoRow label="Phone" value={customer.phone} mono />
      </Section>

      {/* ── Service ── */}
      <Section title="Service">
        <InfoRow label="Package" value={service.title} />
        <InfoRow label="Base Price" value={fmtPrice(service.price)} mono />
        <InfoRow label="Date" value={formattedDate} />
        <InfoRow label="Time" value={formattedTime} mono />
        <InfoRow
          label="Session Notes"
          value={
            customer.description ? (
              <span className="block max-w-50 whitespace-pre-wrap wrap-break-word text-right">
                {customer.description}
              </span>
            ) : (
              <span style={{ color: "#c4a0a8", fontStyle: "italic" }}>—</span>
            )
          }
        />
      </Section>

      {/* ── Add-ons ── */}
      {addons.length > 0 && (
        <Section title={`Add-ons · ${addons.length}`}>
          {addons.map((a) => (
            <InfoRow
              key={a.id}
              label={a.label ?? a.name ?? "Add-on"}
              value={`+${fmtPrice(a.price)}`}
              mono
            />
          ))}
          {addons.length > 1 && (
            <div className="pt-1">
              <InfoRow
                label="Add-ons total"
                value={
                  <span style={{ color: "#A30A24", fontWeight: 600 }}>
                    +{fmtPrice(addonsTotal)}
                  </span>
                }
                mono
              />
            </div>
          )}
        </Section>
      )}

      {/* ── Total ── */}
      <div
        className="rounded-xl overflow-hidden"
        style={{ border: "1px solid #f0dde0" }}
      >
        <div
          className="flex items-center justify-between px-4 py-3"
          style={{ background: "#fdf5f6" }}
        >
          <div>
            <p
              className="text-[9px] font-bold uppercase tracking-widest mb-0.5"
              style={{
                color: "#b07880",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Total Amount
            </p>
            {addons.length > 0 && (
              <p className="text-[10px]" style={{ color: "#b07880" }}>
                Base {fmtPrice(service.price)} + add-ons {fmtPrice(addonsTotal)}
              </p>
            )}
          </div>
          <span
            className="text-2xl font-bold"
            style={{ color: "#A30A24", fontFamily: "'Georgia', serif" }}
          >
            {fmtPrice(totalPrice)}
          </span>
        </div>
      </div>

      {/* ── Payment Proof ── */}
      {proof && (
        <Section title="Payment Proof">
          <div className="mt-2 space-y-2.5">
            {isImage && (
              <div
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid #f0dde0", background: "#fdf5f6" }}
              >
                <Image
                  src={proof}
                  alt="Payment proof"
                  width={1200}
                  height={800}
                  className="w-full max-h-72 object-contain"
                />
              </div>
            )}

            {isPdf && (
              <iframe
                src={proof}
                className="w-full h-72 rounded-xl"
                style={{ border: "1px solid #f0dde0" }}
                title="Payment proof PDF"
              />
            )}

            <a
              href={proof}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-opacity hover:opacity-80"
              style={{
                background: "#A30A24",
                color: "#fff",
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.04em",
              }}
            >
              <ExternalIcon />
              Open Full File
            </a>
          </div>
        </Section>
      )}

      {/* ── Actions ── */}
      <div className="flex justify-end pt-1">
        <button
          onClick={onClose}
          className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-opacity hover:opacity-80"
          style={{
            background: "#1a0a0d",
            color: "#fff",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
