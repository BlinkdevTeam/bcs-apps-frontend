// app/book-now/page.tsx
"use client";

import { Suspense } from "react";
import ServiceSection from "./Service";
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"] });

export default function BookNow() {
  return (
    <section className="bg-white flex flex-col overflow-hidden">
      {/* Hero */}
      <div className="relative bg-[#A30A24] text-white py-32 px-6 overflow-hidden">
        {/* Sprocket rails */}
        <span
          className="absolute inset-y-0 left-0 w-[14px] sprocket-rail"
          aria-hidden="true"
        />
        <span
          className="absolute inset-y-0 right-0 w-[14px] sprocket-rail"
          aria-hidden="true"
        />

        {/* Diagonal texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 1px, transparent 1px, transparent 12px)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-4xl w-full flex flex-col justify-center items-center mx-auto text-center gap-5">
          <span
            className={`${mono.className} text-[10px] uppercase tracking-[0.25em]`}
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Blink Creative Studio
          </span>
          <h1
            className="font-black"
            style={{
              fontSize: "clamp(44px, 8vw, 96px)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            Book Your Session
          </h1>
          <p
            className="text-[18px] md:text-[22px] max-w-xl"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Choose your service and reserve your perfect time slot.
          </p>
          <span className="block w-12 h-[3px] mt-1 bg-white/30" />
        </div>

        <style jsx>{`
          .sprocket-rail {
            background-image: repeating-linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.15) 0px,
              rgba(255, 255, 255, 0.15) 6px,
              transparent 6px,
              transparent 26px
            );
            background-repeat: repeat-y;
          }
        `}</style>
      </div>

      <Suspense
        fallback={
          <div className="py-24 text-center text-[#808080] text-[16px]">
            Loading services…
          </div>
        }
      >
        <ServiceSection />
      </Suspense>
    </section>
  );
}
