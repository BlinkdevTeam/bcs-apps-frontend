"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { WORKS, WorkCategory, Work } from "@/data/works";
import SkewButton from "@/components/ui/buttons/SkewButton";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Event Coverage", value: "event" },
  { label: "Portraits", value: "portraits" },
  { label: "Studio Rental", value: "studio" },
  { label: "Graduation", value: "graduation" },
] as const;

export default function WorksSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | WorkCategory>("all");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  // ── Scroll fade effect ──
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateFades = () => {
      setShowLeftFade(el.scrollLeft > 0);
      setShowRightFade(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };

    updateFades();
    el.addEventListener("scroll", updateFades);
    window.addEventListener("resize", updateFades);

    return () => {
      el.removeEventListener("scroll", updateFades);
      window.removeEventListener("resize", updateFades);
    };
  }, []);

  // ── Shuffle works (FIXED: no useEffect) ──
  const [shuffledWorks] = useState<Work[]>(() => {
    const shuffled = [...WORKS];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  });

  // ── Filter works ──
  const displayedWorks = useMemo(() => {
    return activeFilter === "all"
      ? shuffledWorks
      : shuffledWorks.filter((work) => work.category === activeFilter);
  }, [activeFilter, shuffledWorks]);

  return (
    <section className="px-6 lg:px-24 py-24 bg-white">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-[#A30A24] text-[48px] md:text-[72px] font-bold">
          Behind the Lens
        </h2>
        <p className="text-[#6E6E6E] text-[24px] md:text-[36px]">
          Take a glimpse into our creative process and studio environment
        </p>
      </div>

      {/* Filters */}
      <div className="relative mb-12">
        {showLeftFade && (
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10" />
        )}
        {showRightFade && (
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10" />
        )}

        <div
          ref={scrollRef}
          className="flex gap-4 whitespace-nowrap overflow-x-auto no-scrollbar px-6 md:flex-wrap md:justify-center md:overflow-visible"
        >
          {FILTERS.map((filter) => (
            <SkewButton
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className="flex-shrink-0"
            >
              <span className="text-[18px] md:text-[24px]">{filter.label}</span>
            </SkewButton>
          ))}
        </div>
      </div>

      {/* Works */}
      {shuffledWorks.length === 0 ? (
        <p className="text-center text-[#6E6E6E] mt-12">Loading works...</p>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {displayedWorks.map((work) => (
            <div
              key={work.id}
              className="break-inside-avoid rounded-xl overflow-hidden mb-4"
            >
              {work.image.endsWith(".mp4") ? (
                <video
                  src={work.image}
                  muted
                  loop
                  playsInline
                  className="w-full object-cover rounded-xl shadow-lg cursor-pointer"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                  onClick={() => setActiveVideo(work.image)}
                />
              ) : (
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full object-cover rounded-xl"
                />
              )}

              <div className="p-2 md:p-4 text-black">
                <h3 className="text-[18px] md:text-[24px] font-bold">
                  {work.title}
                </h3>
                {work.category && (
                  <p className="bg-[#A30A24] w-fit px-4 rounded-full text-[12px] md:text-[20px] text-white mt-1">
                    {work.category}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty */}
      {displayedWorks.length === 0 && shuffledWorks.length > 0 && (
        <p className="text-center text-[#6E6E6E] mt-12">
          No works available for this category.
        </p>
      )}

      {/* FULLSCREEN VIDEO MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center"
          onClick={() => setActiveVideo(null)}
        >
          <video
            src={activeVideo}
            controls
            autoPlay
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:scale-110 transition"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
