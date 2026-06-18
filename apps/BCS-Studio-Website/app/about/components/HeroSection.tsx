// HeroSection.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500", "600"] });

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HeroSection() {
  return (
    <section className="w-full bg-white">
      {/* Background video */}
      <motion.div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "16 / 9", background: "#A30A24" }}
        initial={{ opacity: 0, scale: 0.8, borderRadius: "12rem" }}
        whileInView={{ opacity: 1, scale: 1, borderRadius: "0rem" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://blinkassets.sgp1.cdn.digitaloceanspaces.com/studio/works/bcs_ad_10_things.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* viewfinder corner brackets, matches the Works page video framing */}
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
      </motion.div>

      {/* Text content below video */}
      <motion.div
        className="max-w-full mx-auto px-6 lg:px-16 py-16 md:py-24 text-start"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.span
          className={`${mono.className} block text-[10px] uppercase tracking-[0.2em] mb-4`}
          style={{ color: "#A30A24" }}
          variants={fadeUp}
        >
          Frame 01 — About Us
        </motion.span>
        <motion.h1
          className="font-black leading-[0.95] mb-6"
          style={{
            color: "#161616",
            fontSize: "clamp(40px, 7vw, 96px)",
            letterSpacing: "-0.02em",
          }}
          variants={fadeUp}
        >
          We Are Blink.
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg md:text-2xl leading-relaxed"
          style={{ color: "#6E6E6E" }}
          variants={fadeUp}
        >
          Blink Creative Studio is more than just a photography studio — we are
          storytellers, artists, and memory makers. For over 15 years we&apos;ve
          been dedicated to capturing the moments that matter most, transforming
          ordinary occasions into extraordinary visual narratives.
        </motion.p>
      </motion.div>
    </section>
  );
}
