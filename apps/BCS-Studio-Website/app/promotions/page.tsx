"use client";

import CurrentPromo from "./CurrentPromo";
import PhotoContest from "./PhotoContest";
import ValentinesPromo from "./ValentinesPromo";
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

export default function Promotions() {
  return (
    <section className="bg-white flex flex-col overflow-hidden">
      {/* Hero */}
      <div className="relative bg-[#161616] text-white py-32 px-6 overflow-hidden">
        <span
          className="absolute inset-y-0 left-0 w-[14px] sprocket-rail"
          aria-hidden="true"
        />
        <span
          className="absolute inset-y-0 right-0 w-[14px] sprocket-rail"
          aria-hidden="true"
        />

        <motion.div
          className="max-w-4xl w-full flex flex-col justify-center items-center mx-auto text-center gap-6"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span
            className={`${mono.className} text-[10px] uppercase tracking-[0.25em]`}
            style={{ color: "#A30A24" }}
            variants={fadeUp}
          >
            Limited Time
          </motion.span>
          <motion.h1
            className="font-black"
            style={{
              fontSize: "clamp(48px, 8vw, 96px)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
            variants={fadeUp}
          >
            Special Offers
          </motion.h1>
          <motion.p
            className="text-[18px] md:text-[24px] max-w-xl"
            style={{ color: "rgba(255,255,255,0.55)" }}
            variants={fadeUp}
          >
            Exclusive deals, exciting events, and amazing contests — curated for
            you.
          </motion.p>
          <motion.span
            className="block w-12 h-[3px] mt-2"
            style={{ background: "#A30A24" }}
            variants={fadeUp}
          />
        </motion.div>

        <style jsx>{`
          .sprocket-rail {
            background-image: repeating-linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.1) 0px,
              rgba(255, 255, 255, 0.1) 6px,
              transparent 6px,
              transparent 26px
            );
            background-repeat: repeat-y;
          }
        `}</style>
      </div>

      <ValentinesPromo />
      <CurrentPromo />
      <PhotoContest />
    </section>
  );
}
