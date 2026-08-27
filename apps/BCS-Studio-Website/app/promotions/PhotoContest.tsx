"use client";

import SkewButton from "@/components/ui/buttons/SkewButton";
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

export default function PhotoContest() {
  return (
    <motion.section
      className="bg-[#161616] px-6 md:px-16 py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <div
        className="relative flex flex-col justify-center items-center gap-10 py-20 px-6 text-center"
        style={{ border: "2px solid #A30A24" }}
      >
        {/* White corner brackets over the red border */}
        <span className="absolute -top-px -left-px w-8 h-8 border-t-[3px] border-l-[3px] border-white" />
        <span className="absolute -top-px -right-px w-8 h-8 border-t-[3px] border-r-[3px] border-white" />
        <span className="absolute -bottom-px -left-px w-8 h-8 border-b-[3px] border-l-[3px] border-white" />
        <span className="absolute -bottom-px -right-px w-8 h-8 border-b-[3px] border-r-[3px] border-white" />

        <motion.span
          className={`${mono.className} text-[10px] uppercase tracking-[0.25em]`}
          style={{ color: "#A30A24" }}
          variants={fadeUp}
        >
          Open Call
        </motion.span>

        <motion.div
          className="max-w-3xl flex flex-col items-center gap-4"
          variants={fadeUp}
        >
          <h2
            className="font-black text-white"
            style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Photo Contest
          </h2>
          <p
            className="text-[17px] md:text-[22px]"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Submit your best photograph for a chance to win amazing prizes.
            Theme: &quot;Moments of Joy&quot;
          </p>
        </motion.div>

        {/* Prize banner */}
        <motion.div
          className="bg-[#A30A24] px-8 py-4 text-white text-center"
          variants={fadeUp}
        >
          <span
            className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`}
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Grand Prize
          </span>
          <p className="font-black text-[22px] md:text-[28px] mt-1">
            ₱500 + Free Portrait Session
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-col justify-center items-center gap-4"
          variants={fadeUp}
        >
          <div
            className="flex items-center px-6 py-3"
            style={{ border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <span
              className={`${mono.className} text-[11px] uppercase tracking-[0.15em] text-white`}
            >
              Deadline: March 30, 2026
            </span>
          </div>
          <SkewButton href="#">Submit Your Photo</SkewButton>
        </motion.div>
      </div>
    </motion.section>
  );
}
