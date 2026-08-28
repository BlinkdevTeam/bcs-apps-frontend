"use client";

import CurrentPromo from "./CurrentPromo";
import PhotoContest from "./PhotoContest";
import ValentinesPromo from "./ValentinesPromo";
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Promotions() {
  return (
    <section className="bg-white flex flex-col overflow-hidden">
      {/* ── FRAME 01 — HERO ── */}
      <div
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
            Frame 01 / 04
          </span>
        </div>

        <div className="relative px-6 lg:px-16 py-32 md:py-44">
          <div className="iris max-w-4xl mx-auto text-center">
            <p
              className="text-xs uppercase tracking-[0.25em] font-bold mb-5"
              style={{ color: "#A30A24" }}
            >
              Limited Time
            </p>
            <h1
              className="font-black leading-[0.95]"
              style={{
                color: "#fff",
                fontSize: "clamp(56px, 9vw, 140px)",
                letterSpacing: "-0.02em",
              }}
            >
              Special Offers
            </h1>
            <p
              className="mt-6 mx-auto max-w-md text-base md:text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Exclusive deals, exciting events, and amazing contests — curated
              for you.
            </p>
          </div>
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
            aria-hidden="true"
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

          .iris {
            clip-path: circle(150% at 50% 42%);
          }
          @media (prefers-reduced-motion: no-preference) {
            .iris {
              clip-path: circle(0% at 50% 42%);
              animation: iris-open 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.15s
                forwards;
            }
          }
          @keyframes iris-open {
            to {
              clip-path: circle(85% at 50% 42%);
            }
          }

          .scroll-cue {
            animation: cue-pulse 2.2s ease-in-out infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .scroll-cue {
              animation: none;
            }
          }
          @keyframes cue-pulse {
            0%,
            100% {
              opacity: 0.25;
              transform: translateY(0);
            }
            50% {
              opacity: 1;
              transform: translateY(6px);
            }
          }
        `}</style>
      </div>

      <ValentinesPromo />
      <CurrentPromo />
      <PhotoContest />
    </section>
  );
}
