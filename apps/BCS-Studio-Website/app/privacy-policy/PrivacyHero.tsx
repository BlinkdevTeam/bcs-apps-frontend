"use client";

import { JetBrains_Mono } from "next/font/google";
import IrisReveal from "@/components/animations/IrisReveal";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function PrivacyHero() {
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
            Privacy Policy
          </p>
          <h1
            className="font-black leading-[0.95]"
            style={{
              color: "#fff",
              fontSize: "clamp(56px, 9vw, 140px)",
              letterSpacing: "-0.02em",
            }}
          >
            Your Privacy
          </h1>
          <p
            className="mt-6 mx-auto max-w-2xl text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Learn how Blink Creative Studio collects, uses, stores, and protects
            your personal information.
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

      <style jsx>{`
        .sprocket-rail {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 14px;
          background-image: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.14) 0px,
            rgba(255, 255, 255, 0.14) 6px,
            transparent 6px,
            transparent 26px
          );
          background-position: center;
          background-repeat: repeat-y;
        }
      `}</style>
    </section>
  );
}
