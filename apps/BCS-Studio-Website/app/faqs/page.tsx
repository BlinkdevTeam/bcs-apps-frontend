"use client";

import { useState } from "react";
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ_DATA: FAQItem[] = [
  {
    question: "What services does Blink Creative Studio offer?",
    answer:
      "We shoot events, portraits, studio sessions, and graduation photos. Every shoot is tailored to what you're celebrating, whether that's a wedding reception, a corporate launch, a solo portrait sitting, or a full graduation batch.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "For weddings and large events, 2–3 months ahead keeps your preferred date open. Portrait and studio sessions are more flexible — 1–2 weeks is usually enough, though peak graduation season fills up fast.",
  },
  {
    question: "What's included in a typical package?",
    answer:
      "Every package includes a dedicated photographer, full-resolution edited images, and an online gallery for downloads and sharing. Add-ons like second shooters, prints, albums, and same-day previews can be added depending on the package tier.",
  },
  {
    question: "Do you travel outside the city for shoots?",
    answer:
      "Yes. We regularly travel for destination weddings and out-of-town events. A small travel fee may apply depending on distance — let us know your location when you inquire and we'll quote it upfront.",
  },
  {
    question: "How long until we receive our photos?",
    answer:
      "Portrait and studio sessions are typically delivered within 5–7 business days. Full events like weddings take 3–4 weeks, since every frame goes through careful color grading and retouching before it reaches your gallery.",
  },
  {
    question: "Can we request specific shots or a shot list?",
    answer:
      "Absolutely — we encourage it. Send us your must-have shots ahead of time and we'll build them into the shoot plan, alongside the candid, in-between moments we naturally look for behind the lens.",
  },
  {
    question: "What's your rescheduling and cancellation policy?",
    answer:
      "Life happens. You can reschedule free of charge up to 7 days before your session. Cancellations made with less than 48 hours' notice forfeit the booking deposit, which covers the time already blocked for you.",
  },
  {
    question: "Is the studio available to rent without a photographer?",
    answer:
      "Yes, our studio space is available for hourly rental with lighting equipment included, for clients who want to bring their own photographer or shoot self-portraits. Reach out for current rates and availability.",
  },
  {
    question: "What should we wear or bring to a portrait session?",
    answer:
      "Solid colors and simple textures photograph best — avoid busy patterns or logos that pull focus. Bring one or two outfit changes if you'd like variety, and feel free to bring props or items that mean something to you.",
  },
  {
    question: "Do you offer printed photos or albums?",
    answer:
      "Yes, we offer archival-quality prints, framed pieces, and hand-bound albums as add-ons to any package. Every print is color-matched to your edited gallery so what you hang on the wall matches what you saw on screen.",
  },
  {
    question: "What payment methods do you accept, and is a deposit required?",
    answer:
      "We accept cash, bank transfer, and major cards. A 30% deposit secures your date and is deducted from your final balance, which is due on or before the day of the shoot.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
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
            Frame 01 / 02
          </span>
        </div>

        <div className="relative px-6 lg:px-16 py-28 md:py-40">
          <div className="iris max-w-4xl mx-auto text-center">
            <p
              className="text-xs uppercase tracking-[0.25em] font-bold mb-5"
              style={{ color: "#A30A24" }}
            >
              Support
            </p>
            <h1
              className="font-black leading-[0.95]"
              style={{
                color: "#fff",
                fontSize: "clamp(48px, 8vw, 120px)",
                letterSpacing: "-0.02em",
              }}
            >
              FAQ
            </h1>
            <p
              className="mt-6 mx-auto max-w-md text-base md:text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Answers to the questions we hear most, from booking to delivery
              day.
            </p>
          </div>
        </div>
      </section>

      {/* ── FRAME 02 — QUESTIONS ── */}
      <section
        className="px-6 lg:px-16 py-24 md:py-32"
        style={{ background: "#F7F5F2" }}
      >
        <span
          className={`${mono.className} text-[10px] uppercase tracking-[0.2em] block mb-10`}
          style={{ color: "#A30A24" }}
        >
          Frame 02 — Questions
        </span>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-20">
          <div>
            <h2
              className="font-black leading-[0.95]"
              style={{
                color: "#A30A24",
                fontSize: "clamp(36px, 5vw, 72px)",
                letterSpacing: "-0.02em",
              }}
            >
              Common
              <br />
              Questions.
            </h2>
            <p
              className="mt-6 max-w-xs text-sm leading-relaxed"
              style={{ color: "#8A847D" }}
            >
              Can&apos;t find what you&apos;re looking for? Reach out and
              we&apos;ll get back to you directly.
            </p>
          </div>

          <div className="flex flex-col">
            {FAQ_DATA.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.question}
                  className="border-t"
                  style={{ borderColor: "rgba(0,0,0,0.1)" }}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start gap-4 py-6 text-left group"
                  >
                    <span
                      className={`${mono.className} text-[11px] uppercase tracking-[0.15em] pt-1 shrink-0`}
                      style={{ color: isOpen ? "#A30A24" : "#8A847D" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="flex-1 font-bold leading-snug"
                      style={{
                        color: "#161616",
                        fontSize: "clamp(17px, 1.8vw, 21px)",
                      }}
                    >
                      {item.question}
                    </span>
                    <span
                      className="relative shrink-0 w-6 h-6 mt-1"
                      aria-hidden="true"
                    >
                      <span
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-3"
                        style={{ background: "#A30A24" }}
                      />
                      <span
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-3 transition-transform duration-300"
                        style={{
                          background: "#A30A24",
                          transform: isOpen
                            ? "translate(-50%, -50%) scaleY(0)"
                            : "translate(-50%, -50%) scaleY(1)",
                        }}
                      />
                    </span>
                  </button>

                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="pb-6 pl-10 pr-6 text-sm md:text-base leading-relaxed"
                        style={{ color: "#5C5650" }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div
              className="border-t"
              style={{ borderColor: "rgba(0,0,0,0.1)" }}
            />
          </div>
        </div>
      </section>

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
      `}</style>
    </div>
  );
}
