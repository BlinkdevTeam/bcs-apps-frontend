import { JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Blink Creative Studio collects, uses, and protects your information.",
};
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const privacySections = [
  {
    title: "Information We Collect",
    content:
      "We may collect personal information including your name, email address, phone number, event details, and any information voluntarily submitted through booking forms, inquiries, or other communications.",
  },
  {
    title: "How We Use Your Information",
    content:
      "Your information is used to process bookings, communicate with you, provide photography services, improve our website, and fulfill contractual obligations related to our services.",
  },
  {
    title: "Payment Information",
    content:
      "Payment proof and transaction details are collected solely for booking verification and accounting purposes. Sensitive payment credentials are never stored on our systems.",
  },
  {
    title: "Photography & Media",
    content:
      "Photos, videos, and related media created during our services may be stored for project delivery, backup purposes, quality assurance, and portfolio use where permission has been granted.",
  },
  {
    title: "Data Security",
    content:
      "We implement reasonable administrative and technical safeguards to protect personal information against unauthorized access, disclosure, alteration, or destruction.",
  },
  {
    title: "Third-Party Services",
    content:
      "We may utilize trusted third-party providers for hosting, storage, analytics, payment verification, and communication services. These providers are expected to protect your information appropriately.",
  },
  {
    title: "Your Rights",
    content:
      "You may request access to, correction of, or deletion of your personal information, subject to legal, contractual, and operational requirements.",
  },
  {
    title: "Changes to this Policy",
    content:
      "We may update this Privacy Policy periodically. Updates will be published on this page and become effective immediately upon posting.",
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
              Privacy Policy{" "}
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
              Your Privacy{" "}
            </h1>{" "}
            <p
              className="mt-6 mx-auto max-w-2xl text-base md:text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {" "}
              Learn how Blink Creative Studio collects, uses, stores, and
              protects your personal information.{" "}
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
          Frame 01 — Privacy Commitment{" "}
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
            Your <br /> Privacy.{" "}
          </h2>{" "}
          <div
            className="flex flex-col gap-6 text-lg md:text-xl leading-relaxed"
            style={{ color: "#5C5650" }}
          >
            {" "}
            <p>
              {" "}
              Blink Creative Studio respects your privacy and is committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, store, and safeguard information obtained
              through our website and services.{" "}
            </p>{" "}
            <p>
              {" "}
              By using our website or submitting information through booking
              forms, inquiries, and communications, you acknowledge the
              practices described in this policy.{" "}
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
          Frame 02 — Privacy Practices{" "}
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
              Privacy Framework{" "}
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
            {privacySections.map((section, index) => (
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
            Privacy Questions?{" "}
          </h2>{" "}
          <p
            className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {" "}
            If you have questions regarding this Privacy Policy or how your
            information is handled, please contact Blink Creative Studio through
            our official communication channels.{" "}
          </p>{" "}
          <div
            className={`${mono.className} mt-12 pt-6 border-t text-[11px] uppercase tracking-[0.15em]`}
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            {" "}
            Blink Creative Studio — Privacy Policy{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
}
