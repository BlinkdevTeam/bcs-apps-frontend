"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"] });

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ValentinesPromo() {
  return (
    <motion.section
      className="relative overflow-hidden"
      style={{ background: "#A30A24" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      {/* Diagonal texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 1px, transparent 1px, transparent 12px)",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col justify-center items-center gap-10 text-white py-28 px-6">
        <motion.span
          className={`${mono.className} text-[10px] uppercase tracking-[0.25em] bg-white/10 px-4 py-1.5`}
          variants={fadeUp}
        >
          Valentine&apos;s Day Special
        </motion.span>

        <motion.div
          className="max-w-3xl w-full flex flex-col items-center text-center gap-4"
          variants={fadeUp}
        >
          <h2
            className="font-black"
            style={{
              fontSize: "clamp(40px, 7vw, 80px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            30% OFF Couple Portraits
          </h2>
          <p
            className="text-[18px] md:text-[22px]"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Book a couple portrait session and save 30% on your entire package.
            A perfect gift that lasts forever.
          </p>
        </motion.div>

        {/* Bracketed CTA */}
        <motion.div
          className="relative border border-white/20 px-10 py-4"
          variants={fadeUp}
        >
          <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white -translate-x-px -translate-y-px" />
          <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white translate-x-px -translate-y-px" />
          <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white -translate-x-px translate-y-px" />
          <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white translate-x-px translate-y-px" />
          <Link
            href="/book-now"
            className={`${mono.className} text-[13px] uppercase tracking-[0.2em] text-white font-medium`}
          >
            Book Now — Limited Slots
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
