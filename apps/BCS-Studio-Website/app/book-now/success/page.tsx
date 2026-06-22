"use client";

import { useRouter } from "next/navigation";

export default function BookingSuccess() {
  const router = useRouter();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#161616] border-b-[3px] border-[#A30A24]">
        {/* Sprocket rail */}
        <div className="bg-[#0d0d0d] px-6 py-2 flex items-center justify-between">
          <div className="flex gap-2">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="w-3 h-3 rounded-sm bg-[#2a2a2a]" />
            ))}
          </div>
          <span className="text-[10px] font-mono tracking-[4px] text-[#6E6E6E] uppercase">
            Frame 04 — Confirmed
          </span>
          <div className="flex gap-2">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="w-3 h-3 rounded-sm bg-[#2a2a2a]" />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-16 flex flex-col items-center text-center">
          {/* Viewfinder checkmark */}
          <div className="relative w-20 h-20 mb-6">
            {/* Corner brackets */}
            <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#A30A24]" />
            <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#A30A24]" />
            <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#A30A24]" />
            <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#A30A24]" />
            {/* Check */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-[#A30A24]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <p className="text-[10px] font-mono tracking-[4px] text-[#A30A24] uppercase mb-3">
            Booking Received
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#F7F5F2] tracking-tight mb-4">
            You&apos;re all set.
          </h1>
          <p className="text-sm text-[#6E6E6E] font-mono max-w-md leading-relaxed">
            We&apos;ve received your booking and payment proof. We&apos;ll
            verify and send a confirmation to your email shortly.
          </p>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <section className="bg-[#F7F5F2] min-h-[40vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full space-y-6">
          {/* What's next card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-mono tracking-[3px] text-[#6E6E6E] uppercase">
                Next Steps
              </span>
              <div className="flex-1 border-t border-dashed border-gray-200" />
            </div>

            <div className="space-y-4">
              {[
                {
                  n: "01",
                  text: "We review your payment proof — usually within 24 hours.",
                },
                {
                  n: "02",
                  text: "You'll receive a confirmation email once your booking is verified.",
                },
                {
                  n: "03",
                  text: "Show up on your scheduled date and let's make something great.",
                },
              ].map(({ n, text }) => (
                <div key={n} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#A30A24] flex items-center justify-center text-[10px] font-mono font-bold text-white">
                    {n}
                  </span>
                  <p className="text-sm text-gray-600 leading-relaxed pt-0.5">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => router.push("/")}
              className="flex-1 py-3 rounded-xl bg-[#A30A24] text-white text-sm font-semibold
                         hover:bg-[#8a0820] active:scale-[0.99] transition-all"
            >
              Back to Home
            </button>
            <button
              onClick={() => router.push("/book-now")}
              className="flex-1 py-3 rounded-xl border border-gray-300 bg-white text-sm font-semibold
                         text-[#191919] hover:bg-gray-50 active:scale-[0.99] transition-all"
            >
              Book Another Session
            </button>
          </div>

          <p className="text-center text-[10px] font-mono tracking-[3px] text-gray-400 uppercase">
            Blink Creative Studio · 2025
          </p>
        </div>
      </section>
    </>
  );
}
