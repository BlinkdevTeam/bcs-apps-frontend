import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Learn about Blink Creative Studio's commitment to website accessibility and inclusive user experiences.",
};

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const accessibilitySections = [
  {
    title: "Our Commitment",
    content:
      "Blink Creative Studio is committed to providing a website that is accessible and usable for the widest possible audience, regardless of technology or ability. We believe everyone should be able to access information about our services and complete bookings with ease.",
  },
  {
    title: "Accessible Design",
    content:
      "We strive to maintain clear navigation, readable typography, responsive layouts, sufficient color contrast, and accessibility-conscious design practices throughout our website experience.",
  },
  {
    title: "Keyboard Navigation",
    content:
      "We aim to ensure that important areas of the website can be navigated using a keyboard and that interactive elements remain clear and usable across devices.",
  },
  {
    title: "Images & Media",
    content:
      "Where appropriate, we provide descriptive text and supporting content to improve understanding of visual media and important website information.",
  },
  {
    title: "Continuous Improvement",
    content:
      "Accessibility is an ongoing effort. We regularly review our website and make improvements to enhance usability, accessibility, and overall user experience.",
  },
  {
    title: "Third-Party Content",
    content:
      "Some third-party services, embedded content, or external platforms may not be fully controlled by Blink Creative Studio. We encourage users to contact us if accessibility issues are encountered with these services.",
  },
  {
    title: "Feedback & Assistance",
    content:
      "If you experience difficulty accessing any content, service, or booking feature on this website, please contact us. We will make reasonable efforts to provide assistance and alternative access where possible.",
  },
];

export default function AccessibilityStatementPage() {
  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{ background: "#161616" }}
    >
      {/* HERO */}
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
            Accessibility
          </span>
        </div>

        <div className="relative px-6 lg:px-16 py-32 md:py-44">
          <div className="max-w-5xl mx-auto text-center">
            <p
              className="text-xs uppercase tracking-[0.25em] font-bold mb-5"
              style={{ color: "#A30A24" }}
            >
              Accessibility Statement
            </p>

            <h1
              className="font-black leading-[0.95]"
              style={{
                color: "#fff",
                fontSize: "clamp(56px, 9vw, 140px)",
                letterSpacing: "-0.02em",
              }}
            >
              Accessible
              <br />
              For Everyone
            </h1>

            <p
              className="mt-6 mx-auto max-w-2xl text-base md:text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Our commitment to creating an inclusive digital experience for all
              visitors, regardless of ability or technology.
            </p>
          </div>
        </div>
      </section>

      {/* FRAME 01 */}
      <section
        className="px-6 lg:px-16 py-24 md:py-32"
        style={{ background: "#F7F5F2" }}
      >
        <span
          className={`${mono.className} text-[10px] uppercase tracking-[0.2em] block mb-10`}
          style={{ color: "#A30A24" }}
        >
          Frame 01 — Commitment
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
            Inclusive
            <br />
            Design.
          </h2>

          <div
            className="flex flex-col gap-6 text-lg md:text-xl leading-relaxed"
            style={{ color: "#5C5650" }}
          >
            <p>
              Blink Creative Studio is committed to ensuring our website is
              accessible, inclusive, and easy to use for all visitors.
            </p>

            <p>
              We continuously work to improve accessibility, usability, and
              overall user experience so that everyone can access our services,
              information, and booking features.
            </p>

            <div
              className={`${mono.className} flex flex-wrap gap-x-10 gap-y-3 text-[11px] uppercase tracking-[0.15em] pt-4 border-t`}
              style={{
                borderColor: "rgba(0,0,0,0.1)",
                color: "#8A847D",
              }}
            >
              <span>Accessibility First</span>
              <span>Inclusive Experiences</span>
              <span>Continuous Improvement</span>
            </div>
          </div>
        </div>
      </section>

      {/* FRAME 02 */}
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
          Frame 02 — Accessibility Practices
        </span>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <h2
              className="font-bold leading-tight"
              style={{
                color: "#fff",
                fontSize: "clamp(36px, 5vw, 72px)",
              }}
            >
              Accessibility
              <br />
              Framework
            </h2>

            <p
              className="max-w-xs text-sm leading-relaxed md:text-right"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Measures and practices that support a more inclusive web
              experience.
            </p>
          </div>

          <div className="space-y-12">
            {accessibilitySections.map((section, index) => (
              <div
                key={section.title}
                className="border-b pb-10"
                style={{
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div
                    className={`${mono.className} text-[11px] uppercase tracking-[0.2em] min-w-[120px]`}
                    style={{ color: "#A30A24" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {section.title}
                    </h3>

                    <p
                      className="text-base md:text-lg leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.65)" }}
                    >
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        className="px-6 lg:px-16 py-24 md:py-32"
        style={{ background: "#0D0D0D" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p
            className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-4`}
            style={{ color: "#A30A24" }}
          >
            Frame 03 — Contact
          </p>

          <h2
            className="font-black mb-6"
            style={{
              color: "#fff",
              fontSize: "clamp(40px, 6vw, 80px)",
            }}
          >
            Need Assistance?
          </h2>

          <p
            className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            If you experience difficulty accessing any part of this website,
            please contact Blink Creative Studio and we will make reasonable
            efforts to provide the information or assistance you need.
          </p>

          <div
            className={`${mono.className} mt-12 pt-6 border-t text-[11px] uppercase tracking-[0.15em]`}
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            Blink Creative Studio — Accessibility Statement
          </div>
        </div>
      </section>
    </div>
  );
}
