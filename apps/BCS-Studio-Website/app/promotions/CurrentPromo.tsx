"use client";

import SkewButton from "@/components/ui/buttons/SkewButton";
import { PROMOS } from "@/data/promo";
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

export default function CurrentPromo() {
  return (
    <section className="bg-[#F7F5F2] px-6 md:px-16 py-24 overflow-hidden">
      <motion.div
        className="flex flex-col items-center text-center gap-4 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.span
          className={`${mono.className} text-[10px] uppercase tracking-[0.25em]`}
          style={{ color: "#A30A24" }}
          variants={fadeUp}
        >
          Frame 01 — Promos
        </motion.span>
        <motion.h2
          className="text-black font-black"
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            letterSpacing: "-0.01em",
          }}
          variants={fadeUp}
        >
          Current Promotions
        </motion.h2>
        <motion.p
          className="max-w-2xl text-[17px] md:text-[20px]"
          style={{ color: "#6E6E6E" }}
          variants={fadeUp}
        >
          Take a glimpse into our creative process and studio environment.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROMOS.map((promo, index) => (
          <motion.div
            key={index}
            className="bg-white overflow-hidden"
            style={{ border: "1px solid #E8E4DF" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
          >
            {/* Image placeholder with corner brackets */}
            <div
              className="relative w-full"
              style={{ aspectRatio: "16/9", background: "#A30A24" }}
            >
              <span className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-white/60" />
              <span className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-white/60" />
              <span className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-white/60" />
              <span className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-white/60" />
            </div>

            <div className="flex flex-col gap-5 p-8 md:p-10">
              <div>
                <h3
                  className="text-black font-black"
                  style={{
                    fontSize: "clamp(24px, 3vw, 36px)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {promo.title}
                </h3>
                <p
                  className="text-[16px] md:text-[18px] mt-2"
                  style={{ color: "#6E6E6E" }}
                >
                  {promo.description}
                </p>
              </div>

              <div
                className="flex flex-wrap justify-between items-center gap-3 py-4"
                style={{ borderTop: "1px solid #E8E4DF" }}
              >
                <span
                  className="font-black"
                  style={{
                    fontSize: "clamp(28px, 3vw, 40px)",
                    color: "#A30A24",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {promo.discount}
                </span>
                <span
                  className={`${mono.className} text-[11px] uppercase tracking-[0.15em]`}
                  style={{ color: "#9E9E9E" }}
                >
                  {promo.validUntil}
                </span>
              </div>

              <SkewButton href={promo.href}>{promo.cta}</SkewButton>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
