"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY_LINKS, LEGAL_LINKS, SOCIAL_LINKS } from "../../data/footer";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="relative overflow-hidden bg-[#0d0d0d] border-t-[3px] border-[#A30A24]">
      {/* ── Sprocket rail ─────────────────────────────────────────────────── */}
      <div className="bg-[#080808] px-6 py-2.5 flex items-center justify-between">
        <div className="flex gap-2">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="w-3 h-3 rounded-sm bg-[#1e1e1e]" />
          ))}
        </div>
        <span className="text-[10px] font-mono tracking-[4px] text-[#6E6E6E] uppercase hidden sm:block">
          Blink Creative Studio · Est. 2010
        </span>
        <div className="flex gap-2">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="w-3 h-3 rounded-sm bg-[#1e1e1e]" />
          ))}
        </div>
      </div>

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <div className="px-6 lg:px-16 pt-14 pb-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          {/* Brand column */}
          <div className="flex flex-col gap-5 max-w-xs">
            <div>
              <h2 className="text-2xl font-extrabold text-[#F7F5F2] tracking-tight leading-tight">
                BLINK
                <br />
                CREATIVE
                <br />
                STUDIO
              </h2>
            </div>
            <p className="text-xs text-[#6E6E6E] font-mono leading-relaxed">
              Photography & videography studio based in the Philippines. We
              capture moments that last.
            </p>

            {/* Social links */}
            <div className="flex flex-col gap-2 pt-1">
              <p className="text-[10px] font-mono tracking-[3px] text-[#6E6E6E] uppercase mb-1">
                Follow Us
              </p>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-[#F7F5F2]/60
                             hover:text-[#A30A24] transition-colors w-fit"
                >
                  <span className="w-1 h-1 rounded-full bg-[#A30A24] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex flex-col sm:flex-row gap-10 lg:gap-20">
            {/* Company */}
            <div>
              <p className="text-[10px] font-mono tracking-[3px] text-[#6E6E6E] uppercase mb-4">
                Company
              </p>
              <nav className="flex flex-col gap-3">
                {COMPANY_LINKS.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-sm transition-colors hover:text-[#A30A24] ${
                        active
                          ? "text-[#A30A24] font-semibold"
                          : "text-[#F7F5F2]/60"
                      }`}
                    >
                      {active && (
                        <span className="mr-1.5 text-[#A30A24]">▸</span>
                      )}
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Legal */}
            <div>
              <p className="text-[10px] font-mono tracking-[3px] text-[#6E6E6E] uppercase mb-4">
                Legal
              </p>
              <nav className="flex flex-col gap-3">
                {LEGAL_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[#F7F5F2]/60 transition-colors hover:text-[#A30A24]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Book CTA */}
            <div className="flex flex-col gap-4">
              <p className="text-[10px] font-mono tracking-[3px] text-[#6E6E6E] uppercase">
                Ready to shoot?
              </p>
              <Link
                href="/book-now"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl
                           bg-[#A30A24] text-white text-sm font-semibold
                           hover:bg-[#8a0820] active:scale-[0.98] transition-all w-fit"
              >
                Book a Session
                <span aria-hidden>→</span>
              </Link>
              <p className="text-[10px] text-[#6E6E6E] font-mono leading-relaxed max-w-[160px]">
                Slots are limited — secure yours today.
              </p>
            </div>
          </div>
        </div>

        {/* ── Divider ───────────────────────────────────────────────────────── */}
        <div className="mt-12 mb-6 border-t border-dashed border-[#2a2a2a]" />

        {/* ── Bottom bar ────────────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] font-mono tracking-[2px] text-[#6E6E6E] uppercase">
            ©2026 BCS. All rights reserved.
          </p>
          <p className="text-[10px] font-mono tracking-[2px] text-[#6E6E6E] uppercase">
            Photography · Videography · Philippines
          </p>
        </div>
      </div>

      {/* ── Giant marquee wordmark ────────────────────────────────────────── */}
      <div
        className="relative w-full overflow-hidden select-none border-t border-[#1a1a1a]"
        aria-hidden="true"
      >
        <div className="marquee-track">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="font-extrabold leading-none whitespace-nowrap shrink-0 pr-16"
              style={{
                color: "#1e1e1e",
                fontSize: "clamp(60px, 11vw, 220px)",
                letterSpacing: "-0.08em",
              }}
            >
              BLINKCREATIVESTUDIO
            </span>
          ))}
        </div>

        <style jsx>{`
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee-scroll 18s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
          @keyframes marquee-scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
      <span className="sr-only">BLINKCREATIVESTUDIO</span>
    </footer>
  );
}
