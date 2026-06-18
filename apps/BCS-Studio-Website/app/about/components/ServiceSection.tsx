// ServiceSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, Variants, useInView } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";
import SkewButton from "../../../components/ui/buttons/SkewButton";
import { PORTRAITS_FEATURES, PORTRAITS_IMAGES } from "../../../data/service";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500", "600"] });

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function Check() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.6666 8L11.9999 22.6667L5.33325 16"
        stroke="#A30A24"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

const STATS = [
  { number: 2500, suffix: "", label: "Happy Clients" },
  { number: 10, suffix: "", label: "Years in the Industry" },
  {
    number: 4,
    suffix: "",
    label: ["Universities Official", "Photographer"] as string[],
  },
  { number: 98, suffix: "%", label: "Satisfactory Rate" },
];

function StatItem({
  number,
  suffix,
  label,
  active,
}: {
  number: number;
  suffix: string;
  label: string | string[];
  active: boolean;
}) {
  const count = useCountUp(number, 1800, active);
  const display = number >= 1000 ? count.toLocaleString() : count.toString();

  return (
    <motion.div className="text-center" variants={fadeUp}>
      <h3
        className="font-black tabular-nums"
        style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
      >
        {display}
        {suffix}
      </h3>
      <p
        className={`${mono.className} text-[11px] uppercase tracking-[0.15em] mt-2`}
        style={{ color: "rgba(255,255,255,0.8)" }}
      >
        {Array.isArray(label)
          ? label.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))
          : label}
      </p>
    </motion.div>
  );
}

export default function ServicesSection() {
  const statsRef = useRef<HTMLElement>(null); // ← add
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 }); // ← add
  return (
    <div className="max-w-full mx-auto" style={{ color: "#161616" }}>
      {/* Section intro */}
      <motion.div
        className="flex flex-col items-center text-center px-6 lg:px-16 pt-20 pb-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span
          className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-3`}
          style={{ color: "#A30A24" }}
          variants={fadeUp}
        >
          What We Offer
        </motion.span>
        <motion.h2
          className="font-black"
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            letterSpacing: "-0.01em",
          }}
          variants={fadeUp}
        >
          Our Services
        </motion.h2>
      </motion.div>

      {/* Portraits Section */}
      <motion.section
        className="flex flex-col lg:flex-row px-6 lg:px-16 py-20 md:py-28 gap-12 items-center"
        style={{ background: "#F7F5F2" }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="flex-1 flex flex-col gap-6 order-2 lg:order-1"
          variants={fadeUp}
        >
          <motion.div variants={fadeUp}>
            <span
              className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`}
              style={{ color: "#A30A24" }}
            >
              Frame 02 — Portraits
            </span>
            <h3
              className="font-black mt-2"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                letterSpacing: "-0.01em",
              }}
            >
              Portraits
            </h3>
            <h4 className="text-[22px] md:text-[32px] font-bold mt-1">
              Professional Studio Space
            </h4>
            <p
              className="text-[16px] md:text-[20px] leading-relaxed mt-3"
              style={{ color: "#6E6E6E" }}
            >
              Rent our state-of-the-art studio facilities for your creative
              projects. Our versatile spaces are equipped with professional
              lighting, backdrops, and all the amenities you need for a
              successful shoot.
            </p>
          </motion.div>

          <motion.ul className="flex flex-col gap-2 mt-2" variants={fadeUp}>
            {PORTRAITS_FEATURES.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3"
                variants={fadeUp}
              >
                <Check />
                <span
                  className="text-[16px] md:text-[20px]"
                  style={{ color: "#6E6E6E" }}
                >
                  {feature}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp}>
            <SkewButton href="/book-now">LEARN MORE</SkewButton>
          </motion.div>
        </motion.div>

        <motion.div className="flex-1 order-1 lg:order-2" variants={fadeUp}>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            loop={true}
            modules={[EffectCards, Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="mySwiper w-[280px] md:w-[360px] xl:w-[460px] h-auto mx-auto"
          >
            {PORTRAITS_IMAGES.map((img, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={`https://blinkassets.sgp1.cdn.digitaloceanspaces.com/studio/portraits/${img}`}
                  alt={`Portrait ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.section>

      {/* Studio Rental Section */}
      <motion.section
        className="py-20 md:py-32 px-6 lg:px-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          variants={fadeUp}
        >
          <span
            className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`}
            style={{ color: "#A30A24" }}
          >
            Frame 03 — Studio Rental
          </span>
          <h3
            className="font-black mt-2"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              letterSpacing: "-0.01em",
            }}
          >
            Studio Rental
          </h3>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-12 items-center"
          variants={fadeUp}
        >
          <motion.div
            className="relative flex-1 w-full lg:w-[820px] overflow-hidden"
            style={{ aspectRatio: "4 / 3", background: "#A30A24" }}
            variants={fadeUp}
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

          <motion.div className="flex-1 flex flex-col gap-6" variants={fadeUp}>
            <motion.div className="flex flex-col gap-2" variants={fadeUp}>
              <h4 className="text-[22px] md:text-[32px] font-bold">
                Book the Space by the Hour
              </h4>
              <h4
                className="text-[22px] md:text-[32px] font-bold"
                style={{ color: "#A30A24" }}
              >
                ₱650/hr
              </h4>
              <p
                className="text-[16px] md:text-[20px] leading-relaxed mt-1"
                style={{ color: "#6E6E6E" }}
              >
                Rent our studio for your creative projects. Equipped with
                professional lighting, backdrops, and all the amenities you need
                for a successful shoot.
              </p>
            </motion.div>

            <motion.ul className="flex flex-col gap-2" variants={fadeUp}>
              {PORTRAITS_FEATURES.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  variants={fadeUp}
                >
                  <Check />
                  <span
                    className="text-[16px] md:text-[20px]"
                    style={{ color: "#6E6E6E" }}
                  >
                    {feature}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp}>
              <SkewButton href="/book-now">LEARN MORE</SkewButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Event Coverage Section */}
      <motion.section
        className="relative text-white py-20 md:py-28 px-6 lg:px-16 overflow-hidden"
        style={{ background: "#161616" }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <span className="sprocket-rail left-0" aria-hidden="true" />
        <span className="sprocket-rail right-0" aria-hidden="true" />

        <motion.div
          className="flex flex-col gap-16 items-center text-center"
          variants={fadeUp}
        >
          <motion.div className="flex flex-col gap-6" variants={fadeUp}>
            <span
              className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`}
              style={{ color: "#A30A24" }}
            >
              Frame 04 — Event Coverage
            </span>
            <h3
              className="font-black"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                letterSpacing: "-0.01em",
              }}
            >
              Event Coverage
            </h3>
            <p
              className="text-[18px] md:text-[24px] max-w-2xl mx-auto"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              From weddings to corporate events, we provide comprehensive
              photography coverage that captures every important moment with
              professional expertise and artistic vision.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col lg:flex-row gap-6 text-center"
            variants={fadeUp}
          >
            {["Weddings", "Special events", "Corporate Events"].map(
              (title, index) => (
                <motion.div
                  key={index}
                  className="transition-colors hover:bg-white hover:text-[#A30A24] py-16 px-10 md:py-20 md:px-14"
                  style={{ background: "#A30A24", border: "3px solid #A30A24" }}
                  variants={fadeUp}
                >
                  <h6 className="text-[22px] md:text-[28px] font-bold">
                    {title}
                  </h6>
                  <p className="text-[16px] md:text-[18px] mt-2">
                    {index === 0 &&
                      "Complete wedding day coverage from preparation to reception"}
                    {index === 1 &&
                      "Birthdays, anniversaries, and milestone celebrations"}
                    {index === 2 &&
                      "Conferences, product launches, and business functions"}
                  </p>
                </motion.div>
              ),
            )}
          </motion.div>

          <motion.div variants={fadeUp}>
            <SkewButton href="/works">LEARN MORE</SkewButton>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Numbers Section */}
      <motion.section
        ref={statsRef}
        className="py-16 px-6 lg:px-16"
        style={{ background: "#A30A24" }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="flex flex-col lg:flex-row justify-between gap-12 text-center text-white"
          variants={fadeUp}
        >
          {STATS.map((item, index) => (
            <StatItem
              key={index}
              number={item.number}
              suffix={item.suffix}
              label={item.label}
              active={statsInView}
            />
          ))}
        </motion.div>
      </motion.section>

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
    </div>
  );
}
