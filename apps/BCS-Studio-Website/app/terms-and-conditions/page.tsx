import { JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the Terms and Conditions for using Blink Creative Studio.",
};
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const termsSections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing and using this website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any part of these terms, please discontinue use of the website immediately.",
  },
  {
    title: "Use of the Website",
    content:
      "You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use and enjoyment of the website.",
  },
  {
    title: "User Responsibilities",
    content:
      "You are responsible for ensuring that any information you provide is accurate and up to date. You agree not to misuse the website, attempt unauthorized access, or interfere with its normal operation.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content, photographs, graphics, branding, logos, text, and other materials displayed on this website are the property of Blink Creative Studio unless otherwise stated and are protected by applicable intellectual property laws.",
  },
  {
    title: "Third-Party Services",
    content:
      "This website may contain links to third-party websites or services. We are not responsible for the content, policies, or practices of any third-party services and encourage users to review their terms independently.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the fullest extent permitted by law, Blink Creative Studio shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the website or reliance on any content provided herein.",
  },
  {
    title: "Termination",
    content:
      "We reserve the right to suspend or terminate access to the website at any time without prior notice if we believe these Terms and Conditions have been violated.",
  },
  {
    title: "Changes to These Terms",
    content:
      "We may update these Terms and Conditions periodically. Any modifications will be posted on this page, and continued use of the website constitutes acceptance of those changes.",
  },
];
export default function TermsAndConditionsPage() {
  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{ background: "#161616" }}
    >
      {" "}
      {/* HERO */}{" "}
      <section
        className="relative overflow-hidden"
        style={{ background: "#161616" }}
      >
        {" "}
        <span className="sprocket-rail left-0" aria-hidden="true" />{" "}
        <span className="sprocket-rail right-0" aria-hidden="true" />{" "}
        <div className="relative flex items-center justify-between px-6 lg:px-16 pt-8">
          {" "}
          <span
            className={`${mono.className} text-[10px] sm:text-[11px] uppercase tracking-[0.2em]`}
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {" "}
            Blink Creative Studio{" "}
          </span>{" "}
          <span
            className={`${mono.className} text-[10px] sm:text-[11px] uppercase tracking-[0.2em]`}
            style={{ color: "#A30A24" }}
          >
            {" "}
            Legal / Terms{" "}
          </span>{" "}
        </div>{" "}
        <div className="relative px-6 lg:px-16 py-32 md:py-44">
          {" "}
          <div className="iris max-w-5xl mx-auto text-center">
            {" "}
            <p
              className="text-xs uppercase tracking-[0.25em] font-bold mb-5"
              style={{ color: "#A30A24" }}
            >
              {" "}
              Terms & Conditions{" "}
            </p>{" "}
            <h1
              className="font-black leading-[0.95]"
              style={{
                color: "#fff",
                fontSize: "clamp(56px, 9vw, 140px)",
                letterSpacing: "-0.02em",
              }}
            >
              {" "}
              Terms of Use{" "}
            </h1>{" "}
            <p
              className="mt-6 mx-auto max-w-2xl text-base md:text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {" "}
              Please read these terms carefully before using Blink Creative
              Studio&apos;s website and services.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="scroll-cue relative flex flex-col items-center gap-2 pb-10">
          {" "}
          <span
            className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`}
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            {" "}
            Scroll{" "}
          </span>{" "}
          <span
            className="w-px h-8"
            style={{ background: "rgba(255,255,255,0.25)" }}
          />{" "}
        </div>{" "}
      </section>{" "}
      {/* FRAME 02 */}{" "}
      <section
        className="px-6 lg:px-16 py-24 md:py-32"
        style={{ background: "#F7F5F2" }}
      >
        {" "}
        <span
          className={`${mono.className} text-[10px] uppercase tracking-[0.2em] block mb-10`}
          style={{ color: "#A30A24" }}
        >
          {" "}
          Frame 01 — Agreement{" "}
        </span>{" "}
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-20">
          {" "}
          <h2
            className="font-black leading-[0.95]"
            style={{
              color: "#A30A24",
              fontSize: "clamp(44px, 6vw, 96px)",
              letterSpacing: "-0.02em",
            }}
          >
            {" "}
            Your <br /> Agreement.{" "}
          </h2>{" "}
          <div
            className="flex flex-col gap-6 text-lg md:text-xl leading-relaxed"
            style={{ color: "#5C5650" }}
          >
            {" "}
            <p>
              {" "}
              By accessing this website, booking our services, submitting
              inquiries, or otherwise interacting with Blink Creative Studio,
              you acknowledge that you have read, understood, and agreed to
              these Terms and Conditions.{" "}
            </p>{" "}
            <p>
              {" "}
              These terms govern your use of our website, digital content,
              photography services, and all related communications.{" "}
            </p>{" "}
            <div
              className={`${mono.className} flex flex-wrap gap-x-10 gap-y-3 text-[11px] uppercase tracking-[0.15em] pt-4 border-t`}
              style={{ borderColor: "rgba(0,0,0,0.1)", color: "#8A847D" }}
            >
              {" "}
              <span>Last Updated 2026</span> <span>Blink Creative Studio</span>{" "}
              <span>Legal Documentation</span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* FRAME 03 */}{" "}
      <section
        className="relative px-6 lg:px-16 py-24 md:py-32"
        style={{ background: "#161616" }}
      >
        {" "}
        <span className="sprocket-rail left-0" aria-hidden="true" />{" "}
        <span className="sprocket-rail right-0" aria-hidden="true" />{" "}
        <span
          className={`${mono.className} text-[10px] uppercase tracking-[0.2em] block mb-10`}
          style={{ color: "#A30A24" }}
        >
          {" "}
          Frame 02 — Legal Terms{" "}
        </span>{" "}
        <div className="max-w-5xl mx-auto">
          {" "}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            {" "}
            <h2
              className="font-bold leading-tight"
              style={{
                color: "#fff",
                fontSize: "clamp(36px, 5vw, 72px)",
                letterSpacing: "-0.01em",
              }}
            >
              {" "}
              Legal Framework{" "}
            </h2>{" "}
            <p
              className="max-w-xs text-sm leading-relaxed md:text-right"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              {" "}
              The following provisions govern the use of this website and our
              services.{" "}
            </p>{" "}
          </div>{" "}
          <div className="space-y-12">
            {" "}
            {termsSections.map((section, index) => (
              <div
                key={section.title}
                className="border-b pb-10"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                {" "}
                <div className="flex flex-col lg:flex-row gap-6">
                  {" "}
                  <div
                    className={`${mono.className} text-[11px] uppercase tracking-[0.2em] min-w-[120px]`}
                    style={{ color: "#A30A24" }}
                  >
                    {" "}
                    {String(index + 1).padStart(2, "0")}{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {" "}
                      {section.title}{" "}
                    </h3>{" "}
                    <p
                      className="text-base md:text-lg leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.65)" }}
                    >
                      {" "}
                      {section.content}{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* FRAME 04 */}{" "}
      <section
        className="px-6 lg:px-16 py-24 md:py-32"
        style={{ background: "#0D0D0D" }}
      >
        {" "}
        <div className="max-w-4xl mx-auto text-center">
          {" "}
          <p
            className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-4`}
            style={{ color: "#A30A24" }}
          >
            {" "}
            Frame 03 — Contact{" "}
          </p>{" "}
          <h2
            className="font-black mb-6"
            style={{
              color: "#fff",
              fontSize: "clamp(40px, 6vw, 80px)",
              letterSpacing: "-0.02em",
            }}
          >
            {" "}
            Questions?{" "}
          </h2>{" "}
          <p
            className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {" "}
            If you have any questions regarding these Terms and Conditions,
            please contact Blink Creative Studio through our official
            channels.{" "}
          </p>{" "}
          <div
            className={`${mono.className} mt-12 pt-6 border-t text-[11px] uppercase tracking-[0.15em]`}
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            {" "}
            Blink Creative Studio — Terms & Conditions{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
}
