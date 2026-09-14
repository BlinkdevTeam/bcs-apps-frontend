"use client";

import { JetBrains_Mono } from "next/font/google";
import IrisReveal from "@/components/animations/IrisReveal";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function TermsHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#161616" }}
    >
      <span className="sprocket-rail left-0" aria-hidden="true" />
      <span className="sprocket-rail right-0" aria-hidden="true" />

      <div className="relative flex items-center justify-between px-6 lg:px-16 pt-8">
        <span
          className={`${mono.className} text-[10px] sm:text-[11px] uppercase tracking-[0.2em]`}
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Blink Creative Studio
        </span>
        <span
          className={`${mono.className} text-[10px] sm:text-[11px] uppercase tracking-[0.2em]`}
          style={{ color: "#A30A24" }}
        >
          Legal / Terms
        </span>
      </div>

      <div className="relative px-6 lg:px-16 py-32 md:py-44">
        <IrisReveal className="max-w-5xl mx-auto text-center">
          <p
            className="text-xs uppercase tracking-[0.25em] font-bold mb-5"
            style={{ color: "#A30A24" }}
          >
            Terms & Conditions
          </p>
          <h1
            className="font-black leading-[0.95]"
            style={{
              color: "#fff",
              fontSize: "clamp(56px, 9vw, 140px)",
              letterSpacing: "-0.02em",
            }}
          >
            Terms of Use
          </h1>
          <p
            className="mt-6 mx-auto max-w-2xl text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Please read these terms carefully before using Blink Creative
            Studio&apos;s website and services.
          </p>
        </IrisReveal>
      </div>

      <div className="scroll-cue relative flex flex-col items-center gap-2 pb-10">
        <span
          className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`}
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Scroll
        </span>
        <span
          className="w-px h-8"
          style={{ background: "rgba(255,255,255,0.25)" }}
        />
      </div>
    </section>
  );
}
