"use client";

import { useRef, useState } from "react";
import { JetBrains_Mono } from "next/font/google";
import WorksSection from "./WorkSection";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function WorksPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    if (videoRef.current) videoRef.current.muted = next;
  };

  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{ background: "#161616" }}
    >
      {/* ── FRAME 01 — HERO ── */}
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
            Frame 01 / 04
          </span>
        </div>

        <div className="relative px-6 lg:px-16 py-32 md:py-44">
          <div className="iris max-w-4xl mx-auto text-center">
            <p
              className="text-xs uppercase tracking-[0.25em] font-bold mb-5"
              style={{ color: "#A30A24" }}
            >
              Portfolio
            </p>
            <h1
              className="font-black leading-[0.95]"
              style={{
                color: "#fff",
                fontSize: "clamp(56px, 9vw, 140px)",
                letterSpacing: "-0.02em",
              }}
            >
              Our Works
            </h1>
            <p
              className="mt-6 mx-auto max-w-md text-base md:text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              A collection of moments captured, stories told, and visions
              brought to life.
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
      </section>

      {/* ── FRAME 02 — ABOUT ── */}
      <section
        className="px-6 lg:px-16 py-24 md:py-32"
        style={{ background: "#F7F5F2" }}
      >
        <span
          className={`${mono.className} text-[10px] uppercase tracking-[0.2em] block mb-10`}
          style={{ color: "#A30A24" }}
        >
          Frame 02 — About
        </span>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-20">
          <h2
            className="font-black leading-[0.95]"
            style={{
              color: "#A30A24",
              fontSize: "clamp(44px, 6vw, 96px)",
              letterSpacing: "-0.02em",
            }}
          >
            Storytellers.
          </h2>

          <div className="flex flex-col gap-6" style={{ color: "#5C5650" }}>
            <p className="text-lg md:text-xl leading-relaxed">
              Blink Creative Studio is more than a photography studio — we are
              storytellers, artists, and memory makers. For over 15 years
              we&apos;ve been dedicated to capturing the moments that matter
              most, transforming ordinary occasions into extraordinary visual
              narratives.
            </p>
            <div
              className={`${mono.className} flex flex-wrap gap-x-10 gap-y-3 text-[11px] uppercase tracking-[0.15em] pt-4 border-t`}
              style={{ borderColor: "rgba(0,0,0,0.1)", color: "#8A847D" }}
            >
              <span>Est. 2011</span>
              <span>Events — Portraits — Studio — Graduation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FRAME 03 — BEHIND THE LENS ── */}
      <section
        className="relative px-6 lg:px-16 py-24 md:py-32"
        style={{ background: "#161616" }}
      >
        <span className="sprocket-rail left-0" aria-hidden="true" />
        <span className="sprocket-rail right-0" aria-hidden="true" />

        <span
          className={`${mono.className} text-[10px] uppercase tracking-[0.2em] block mb-10`}
          style={{ color: "#A30A24" }}
        >
          Frame 03 — Process
        </span>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <h2
            className="font-bold leading-tight"
            style={{
              color: "#fff",
              fontSize: "clamp(36px, 5vw, 72px)",
              letterSpacing: "-0.01em",
            }}
          >
            Behind the Lens
          </h2>
          <p
            className="max-w-xs text-sm leading-relaxed md:text-right"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Take a glimpse into our creative process and studio environment.
          </p>
        </div>

        <div
          className="relative w-full overflow-hidden"
          style={{
            height: "min(80vh, 640px)",
            background: "#A30A24",
            borderRadius: "4px",
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted={muted}
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://blinkassets.sgp1.cdn.digitaloceanspaces.com/studio/works/3D%20studio%20animation.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* viewfinder corner brackets */}
          <span
            className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2"
            style={{ borderColor: "#fff" }}
            aria-hidden="true"
          />
          <span
            className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2"
            style={{ borderColor: "#fff" }}
            aria-hidden="true"
          />
          <span
            className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2"
            style={{ borderColor: "#fff" }}
            aria-hidden="true"
          />
          <span
            className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2"
            style={{ borderColor: "#fff" }}
            aria-hidden="true"
          />
        </div>

        <div
          className={`${mono.className} flex items-center justify-between mt-3 text-[10px] uppercase tracking-[0.15em]`}
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          <span>Blink Studio — Studio Reel</span>
          <span>Take 01 — B-Roll</span>
        </div>
      </section>

      {/* ── FRAME 04 divider — flows straight into WorksSection ── */}
      <div
        className={`${mono.className} flex items-center gap-4 px-6 lg:px-16 py-6 border-t`}
        style={{ background: "#0d0d0d", borderColor: "rgba(163,10,36,0.35)" }}
      >
        <span
          className="text-[10px] uppercase tracking-[0.2em]"
          style={{ color: "#A30A24" }}
        >
          Frame 04 — The Work
        </span>
        <span
          className="flex-1 h-px"
          style={{ background: "rgba(255,255,255,0.08)" }}
          aria-hidden="true"
        />
      </div>

      <WorksSection />

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
  );
}
