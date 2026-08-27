"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { JetBrains_Mono } from "next/font/google";
import SkewButton from "../ui/buttons/SkewButton";

const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500", "600"] });

const NAV_ITEMS = [
  { label: "ABOUT", href: "/" },
  { label: "WORKS", href: "/works" },
  { label: "PROMOTIONS", href: "/promotions" },
  { label: "FAQs", href: "/faqs" },
];

const HIDE_THRESHOLD = 100; // px scrolled down before the header is allowed to hide

function BlinkMark({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 43 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#header-logo-clip)">
        <path
          d="M8.47533 54.6794L0.0496521 56.9615V11.6663L8.47533 9.3842V54.6794Z"
          fill="#A30A24"
        />
        <path
          d="M21.1144 17.8968V15.4441L42.9641 9.52566V0.0405731L11.4146 8.58745V30.0093L42.9641 21.4624V11.9783L21.1144 17.8968Z"
          fill="#A30A24"
        />
        <path
          d="M33.2643 38.4802V36.0275L11.4146 41.946V32.4619L42.9641 23.915V45.3368L11.4146 53.8827V44.3986L33.2643 38.4802Z"
          fill="#A30A24"
        />
      </g>
      <defs>
        <clipPath id="header-logo-clip">
          <rect width="43" height="57" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 10);

      if (currentY < lastScrollY.current) {
        // any upward movement, however small, brings it back
        setHeaderHidden(false);
      } else if (currentY > lastScrollY.current && currentY > HIDE_THRESHOLD) {
        setHeaderHidden(true);
      }

      lastScrollY.current = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 motion-reduce:transition-none ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-white shadow-md py-5"
      } ${headerHidden && !sidebarOpen ? "-translate-y-full" : "translate-y-0"}`}
      style={{ borderColor: "rgba(0,0,0,0.08)" }}
    >
      <div className="mx-auto max-w-full px-6 md:px-12 lg:px-24 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Blink Creative Studio — home"
          className={`group flex items-center rounded-sm transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A30A24] ${
            scrolled ? "gap-0" : "gap-3"
          }`}
        >
          <BlinkMark className="h-9 w-auto shrink-0 transition-transform duration-300 group-hover:-rotate-[4deg] md:h-10" />
          <div
            className={`hidden sm:flex flex-col leading-none overflow-hidden transition-all duration-300 ${
              scrolled ? "max-w-0 opacity-0" : "max-w-40 opacity-100"
            }`}
          >
            <span className="whitespace-nowrap font-black tracking-tight text-[18px] text-[#A30A24]">
              BLINK
            </span>
            <span
              className={`${mono.className} whitespace-nowrap text-[9px] tracking-[0.2em] text-[#161616]`}
            >
              Creative Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navbar + Book Now */}
        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex gap-10">
            {NAV_ITEMS.map((item, i) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 rounded-sm py-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A30A24]"
                  >
                    <span
                      className={`${mono.className} text-[10px] tracking-widest`}
                      style={{
                        color: isActive ? "#A30A24" : "rgba(0,0,0,0.25)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-[15px] font-semibold tracking-wide transition-colors ${
                        isActive
                          ? "text-[#161616]"
                          : "text-[#6E6E6E] group-hover:text-[#A30A24]"
                      }`}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`absolute left-0 -bottom-px h-0.5 w-full origin-left bg-[#A30A24] transition-transform duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <SkewButton href="/book-now">BOOK NOW</SkewButton>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
            aria-expanded={sidebarOpen}
            aria-controls="mobile-sidebar"
            className="rounded-sm text-[32px] text-[#161616] transition-colors hover:text-[#A30A24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A30A24] md:text-[40px]"
          >
            <HiMenu />
          </button>

          {/* Mobile Sidebar */}
          <div
            id="mobile-sidebar"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className={`fixed top-0 right-0 z-50 flex h-full w-72 transform flex-col bg-white shadow-2xl transition-transform duration-300 ${
              sidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div
              className="flex items-center justify-between border-b p-6"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
            >
              <BlinkMark className="h-8 w-auto" />
              <button
                onClick={() => setSidebarOpen(false)}
                aria-label="Close menu"
                className="rounded-sm text-2xl text-[#161616] transition-colors hover:text-[#A30A24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A30A24]"
              >
                <HiX />
              </button>
            </div>

            <ul className="mt-4 flex flex-col px-6">
              {NAV_ITEMS.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <li
                    key={item.href}
                    className="border-b"
                    style={{ borderColor: "rgba(0,0,0,0.06)" }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className="flex items-center gap-3 rounded-sm py-4 transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A30A24] hover:translate-x-1"
                    >
                      <span
                        className={`${mono.className} text-[10px] tracking-widest`}
                        style={{
                          color: isActive ? "#A30A24" : "rgba(0,0,0,0.3)",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-[16px] font-semibold tracking-wide ${
                          isActive ? "text-[#161616]" : "text-[#6E6E6E]"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 px-6">
              <SkewButton
                href="/book-now"
                onClick={() => setSidebarOpen(false)}
              >
                BOOK NOW
              </SkewButton>
            </div>
          </div>

          {/* Overlay */}
          {sidebarOpen && (
            <div
              className="sidebar-overlay fixed inset-0 z-40 bg-black/40"
              onClick={() => setSidebarOpen(false)}
              aria-hidden="true"
            />
          )}
        </div>
      </div>

      <style jsx>{`
        .sidebar-overlay {
          animation: overlay-fade 200ms ease-out;
        }
        @media (prefers-reduced-motion: reduce) {
          .sidebar-overlay {
            animation: none;
          }
        }
        @keyframes overlay-fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </header>
  );
}
