"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import type { BookingData } from "@/lib/postgres/types";

// ── Section eyebrow (matches BookingForm style) ───────────────────────────────
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

// ── Receipt row ───────────────────────────────────────────────────────────────
function Row({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-dashed border-gray-100 last:border-0">
      <span className="text-xs font-mono tracking-[2px] uppercase text-[#6E6E6E]">
        {label}
      </span>
      <span
        className={`text-sm font-semibold ${accent ? "text-[#A30A24]" : "text-[#191919]"}`}
      >
        {value}
      </span>
    </div>
  );
}

function BookingConfirmation() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [booking, setBooking] = useState<BookingData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [proof, setProof] = useState<File | null>(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  useEffect(() => {
    const dataParam = searchParams.get("data");
    if (!dataParam) {
      router.replace("/book-now");
      return;
    }
    try {
      setBooking(JSON.parse(decodeURIComponent(dataParam)) as BookingData);
    } catch {
      router.replace("/book-now");
    }
  }, [searchParams, router]);

  const handleConfirm = async (): Promise<void> => {
    if (loading || !booking) return;
    if (!proof) {
      alert("Please upload payment proof");
      return;
    }
    if (!acceptedTerms) {
      alert("You must accept the Terms & Conditions before proceeding.");
      return;
    }
    if (!booking.service?.slug) {
      alert("Invalid service selected. Please try again.");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("booking", JSON.stringify(booking));
      formData.append("proof", proof);
      formData.append("terms_accepted", String(acceptedTerms));

      const res = await fetch("/api/bookings", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Booking failed");
      router.push("/book-now/success");
    } catch (error) {
      console.error(error);
      alert("Failed to confirm booking.");
    } finally {
      setLoading(false);
    }
  };

  if (!booking) {
    return (
      <div className="min-h-screen bg-[#F7F5F2] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-[#A30A24] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-mono tracking-[2px] uppercase text-[#6E6E6E]">
            Loading booking...
          </p>
        </div>
      </div>
    );
  }

  const { customer, service, addons, date, time, totalPrice } = booking;

  return (
    <>
      <div
        className={`min-h-screen bg-[#F7F5F2] transition-opacity duration-200 ${
          loading ? "pointer-events-none opacity-60 select-none" : ""
        }`}
      >
        {/* ── HERO HEADER ──────────────────────────────────────────────────── */}
        <section className="bg-[#161616] border-b-[3px] border-[#A30A24]">
          {/* Sprocket rail */}
          <div className="bg-[#0d0d0d] px-6 py-2 flex items-center justify-between">
            <div className="flex gap-2">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="w-3 h-3 rounded-sm bg-[#2a2a2a]" />
              ))}
            </div>
            <span className="text-[10px] font-mono tracking-[4px] text-[#6E6E6E] uppercase">
              Frame 03 — Confirm
            </span>
            <div className="flex gap-2">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="w-3 h-3 rounded-sm bg-[#2a2a2a]" />
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 py-12 text-center">
            <p className="text-[10px] font-mono tracking-[4px] text-[#A30A24] uppercase mb-3">
              Almost there
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#F7F5F2] tracking-tight mb-3">
              Confirm Your Booking
            </h1>
            <p className="text-sm text-[#6E6E6E] font-mono">
              Review everything below before submitting.
            </p>
          </div>
        </section>

        {/* ── CONTENT ──────────────────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-4 py-10 space-y-4">
          {/* ── SECTION 1: Customer ─────────────────────────────────────────── */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <SectionLabel step="01" label="Your Information" />
            <Row label="Full Name" value={customer.name} accent />
            <Row label="Email" value={customer.email} accent />
            <Row label="Phone" value={customer.phone} accent />
            {customer.description && (
              <Row label="Notes" value={customer.description} />
            )}
          </div>

          {/* ── SECTION 2: Service ──────────────────────────────────────────── */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <SectionLabel step="02" label="Service Details" />
            <Row label="Service" value={service.title} accent />
            <Row
              label="Base Price"
              value={`₱${Number(service.price).toLocaleString()}`}
            />

            {addons && addons.length > 0 && (
              <>
                <div className="mt-4 mb-2">
                  <p className="text-[10px] font-mono tracking-[2px] uppercase text-[#6E6E6E]">
                    Add-ons
                  </p>
                </div>
                {addons.map((addon) => (
                  <div
                    key={addon.id}
                    className="flex justify-between py-2 border-b border-dashed border-gray-100 last:border-0"
                  >
                    <span className="text-sm text-[#191919]">
                      {addon.label}
                    </span>
                    <span className="text-sm font-mono text-[#A30A24]">
                      +₱{Number(addon.price).toLocaleString()}
                    </span>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* ── SECTION 3: Schedule ─────────────────────────────────────────── */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <SectionLabel step="03" label="Schedule" />
            <Row label="Date" value={date} accent />
            <Row label="Time" value={time} accent />
          </div>

          {/* ── TOTAL ───────────────────────────────────────────────────────── */}
          <div className="bg-[#A30A24] rounded-2xl p-5 flex items-center justify-between border border-[#A30A24]">
            <div>
              <p className="text-[10px] font-mono tracking-[3px] text-[#ffffff] uppercase mb-1">
                Total Amount Due
              </p>
              <p className="text-xs text-[#ffffff] font-mono">
                Inclusive of all selected services
              </p>
            </div>
            <p className="text-3xl font-extrabold text-[#ffffff] tracking-tight">
              ₱{Number(totalPrice).toLocaleString()}
            </p>
          </div>

          {/* ── SECTION 4: Payment Proof ─────────────────────────────────────── */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <SectionLabel step="04" label="Payment Proof" />

            <label
              className={`
              group flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed
              px-6 py-10 cursor-pointer transition-all
              ${
                proof
                  ? "border-[#A30A24] bg-[#A30A24]/5"
                  : "border-gray-200 bg-gray-50 hover:border-[#A30A24]/50 hover:bg-[#A30A24]/5"
              }
            `}
            >
              {/* Icon */}
              {proof ? (
                <div className="w-12 h-12 rounded-full bg-[#A30A24]/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#A30A24]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                    />
                  </svg>
                </div>
              )}

              {proof ? (
                <div className="text-center">
                  <p className="text-sm font-semibold text-[#A30A24]">
                    File attached
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5 truncate max-w-xs">
                    {proof.name}
                  </p>
                  <p className="text-xs text-[#A30A24]/70 font-mono mt-1 tracking-wide">
                    Click to replace
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-sm font-semibold text-[#191919]">
                    Upload Payment Proof
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    JPG, PNG, or PDF — max 5MB
                  </p>
                </div>
              )}

              <input
                type="file"
                disabled={loading}
                accept="image/png,image/jpeg,application/pdf"
                onChange={(e) => {
                  if (loading) return;
                  const file = e.target.files?.[0];
                  if (!file) return;
                  if (file.size > 5 * 1024 * 1024) {
                    alert("File must be 5MB or smaller");
                    return;
                  }
                  setProof(file);
                }}
                className="hidden"
              />
            </label>
          </div>

          {/* ── SECTION 5: Terms ─────────────────────────────────────────────── */}
          <div
            className={`bg-white rounded-2xl border p-5 transition-colors ${
              acceptedTerms ? "border-[#A30A24]" : "border-gray-200"
            }`}
          >
            <label className="flex items-start gap-4 cursor-pointer">
              {/* Custom checkbox */}
              <span
                className={`
                mt-0.5 flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all
                ${acceptedTerms ? "bg-[#A30A24] border-[#A30A24]" : "border-gray-300"}
              `}
              >
                {acceptedTerms && (
                  <svg
                    className="w-3 h-3 text-white"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="2,6 5,9 10,3" />
                  </svg>
                )}
              </span>
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                disabled={loading}
                className="sr-only"
              />
              <div>
                <p className="text-sm text-[#191919] leading-relaxed">
                  I have read and agree to the{" "}
                  <a
                    href="/terms-and-conditions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#A30A24] underline underline-offset-2 hover:opacity-80"
                  >
                    Terms & Conditions
                  </a>
                  . I understand the booking, payment, cancellation, and service
                  policies.
                </p>
                {!acceptedTerms && (
                  <p className="mt-1.5 text-[10px] font-mono tracking-[2px] uppercase text-gray-400">
                    Required before submitting
                  </p>
                )}
              </div>
            </label>
          </div>

          {/* ── ACTIONS ──────────────────────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 pb-10">
            <button
              type="button"
              onClick={() => router.back()}
              disabled={loading}
              className="sm:w-auto px-6 py-3 rounded-xl border border-gray-300 bg-white
                         text-sm font-semibold text-[#191919] hover:bg-gray-50
                         active:scale-[0.99] transition-all disabled:opacity-50"
            >
              ← Back
            </button>

            <button
              type="button"
              onClick={handleConfirm}
              disabled={loading || !acceptedTerms || !proof}
              className="flex-1 py-3 rounded-xl bg-[#A30A24] text-white font-semibold text-sm
                         hover:bg-[#8a0820] active:scale-[0.99] transition-all
                         disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Confirm & Book →"}
            </button>
          </div>
        </div>
      </div>

      {/* ── LOADING OVERLAY ──────────────────────────────────────────────────── */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-[#161616] border border-[#A30A24] rounded-2xl px-10 py-8 text-center space-y-3">
            <div className="w-8 h-8 border-2 border-[#A30A24] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-base font-bold text-[#F7F5F2]">
              Processing your booking
            </p>
            <p className="text-xs font-mono tracking-[2px] uppercase text-[#6E6E6E]">
              Please don&apos;t close this page
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F7F5F2] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#A30A24] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <BookingConfirmation />
    </Suspense>
  );
}
