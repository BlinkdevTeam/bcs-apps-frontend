"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  COMPANY_LINKS,
  SERVICE_LINKS,
  LEGAL_LINKS,
  SOCIAL_LINKS,
} from "../../data/footer";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className="relative overflow-hidden pt-16"
      style={{
        background:
          "linear-gradient(to bottom, #ffffff 0%, #fdeef0 55%, #fbdee2 100%)",
      }}
    >
      <div className="px-6 lg:px-16 pt-14 pb-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          <div className="flex flex-col lg:flex-row lg:justify-center gap-10 lg:gap-50">
            {/* Company */}
            <nav className="flex flex-col gap-2.5">
              {COMPANY_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm transition-colors hover:text-[#A30A24] ${
                      active
                        ? "font-semibold underline text-black"
                        : "text-black/75"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Services */}
            {/* <nav className="flex flex-col gap-2.5">
            {SERVICE_LINKS.map((link) => (
              <Link
              key={link.href}
              href={link.href}
              className="text-sm text-black/75 transition-colors hover:text-[#A30A24]"
              >
              {link.label}
              </Link>
              ))}
              </nav> */}

            {/* Legal */}
            <nav className="flex flex-col gap-2.5">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-black/75 transition-colors hover:text-[#A30A24]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social + copyright */}
          <div className="flex flex-col gap-3 lg:items-end lg:text-right">
            <p className="text-base text-[#111]">
              {SOCIAL_LINKS.map((link, i) => (
                <span key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-medium text-[#111] transition-colors hover:text-[#A30A24]"
                  >
                    {link.label}
                  </a>
                  {i < SOCIAL_LINKS.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
            <p className="text-sm text-black/55">
              ©2026 BCS. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Giant wordmark — marquee */}
      <div
        className="relative w-full overflow-hidden select-none"
        aria-hidden="true"
      >
        <div className="marquee-track group">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="font-bold leading-none whitespace-nowrap shrink-0 pr-16"
              style={{
                color: "#1a1a1a",
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
