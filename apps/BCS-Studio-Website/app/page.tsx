// AboutPage.tsx
"use client";

import { JetBrains_Mono } from "next/font/google";
import HeroSection from "./about/components/HeroSection";
import ServicesSection from "./about/components/ServiceSection";
import SkewButton from "../components/ui/buttons/SkewButton";

const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500", "600"] });

export default function AboutPage() {
  return (
    <div className="bg-white overflow-hidden">
      <HeroSection />
      <ServicesSection />

      <section
        className="relative flex flex-col justify-center items-center gap-10 px-6 lg:px-16 py-28 md:py-40 text-center overflow-hidden"
        style={{ background: "#161616" }}
      >
        <span className="sprocket-rail left-0" aria-hidden="true" />
        <span className="sprocket-rail right-0" aria-hidden="true" />

        <span
          className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`}
          style={{ color: "#A30A24" }}
        >
          Frame 06 — Let&apos;s Talk
        </span>

        <h3
          className="font-black leading-[1.05]"
          style={{
            color: "#fff",
            fontSize: "clamp(32px, 6vw, 72px)",
            letterSpacing: "-0.01em",
          }}
        >
          READY TO CREATE
          <br />
          SOMETHING <span style={{ color: "#A30A24" }}>BEAUTIFUL</span>?
        </h3>

        <p
          className={`${mono.className} text-xs md:text-sm uppercase tracking-[0.2em]`}
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Ideas made effective
        </p>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
          <SkewButton href="/book-now">BOOK NOW</SkewButton>
          <SkewButton href="/book-now?tab=event">TALK TO OUR TEAM</SkewButton>
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
    </div>
  );
}
