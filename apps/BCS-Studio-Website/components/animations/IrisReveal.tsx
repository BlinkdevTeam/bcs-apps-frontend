// components/animations/IrisReveal.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface IrisRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Vertical focal point of the circle, e.g. "42%" to match old CSS */
  originY?: string;
  duration?: number;
  delay?: number;
}

export default function IrisReveal({
  children,
  className = "",
  originY = "42%",
  duration = 1.6,
  delay = 0.15,
}: IrisRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(el, { clipPath: `circle(85% at 50% ${originY})` });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { clipPath: `circle(0% at 50% ${originY})` },
        {
          clipPath: `circle(85% at 50% ${originY})`,
          duration,
          delay,
          ease: "power3.out",
        },
      );
    }, ref);

    return () => ctx.revert();
  }, [originY, duration, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
