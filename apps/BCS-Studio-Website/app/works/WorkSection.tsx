"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import worksData from "../../data/works.json";
import Image from "next/image";

// ── Types ──────────────────────────────────────────────────────────────────────
type WorkCategory = "event" | "portraits" | "studio" | "graduation";

type Work = {
  id: number;
  url: string;
  description: string;
  type: "video" | "photo";
  title: string;
  category: WorkCategory;
};

const WORKS: Work[] = worksData as Work[];

const CATEGORY_LIST: WorkCategory[] = [
  "event",
  "portraits",
  "studio",
  "graduation",
];

const CATEGORY_LABEL: Record<WorkCategory, string> = {
  event: "Event Coverage",
  portraits: "Portraits",
  studio: "Studio Rental",
  graduation: "Graduation",
};

type View = "all" | "categories";

// ── Video/Photo Card ───────────────────────────────────────────────────────────
function WorkCard({
  work,
  // index,
  onClick,
}: {
  work: Work;
  index: number;
  onClick: (work: Work) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    if (work.type === "video") {
      const v = videoRef.current;
      if (v && v.paused) {
        v.play().catch(() => {}); // catch AbortError silently
      }
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (work.type === "video") {
      const v = videoRef.current;
      if (v) {
        const playPromise = v.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              v.pause();
              v.currentTime = 0;
            })
            .catch(() => {
              // play was already interrupted, safe to ignore
            });
        } else {
          v.pause();
          v.currentTime = 0;
        }
      }
    }
  };

  return (
    <div
      className="break-inside-avoid mb-3 group relative overflow-hidden cursor-pointer"
      style={{ borderRadius: "4px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(work)}
    >
      {/* Media */}
      {work.type === "video" ? (
        <video
          ref={videoRef}
          src={work.url}
          muted
          loop
          playsInline
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()}
          className="w-full object-cover block"
          style={{ display: "block" }}
        />
      ) : (
        <Image
          src={work.url}
          alt={work.title}
          width={1200}
          height={800}
          onContextMenu={(e) => e.preventDefault()}
          className="w-full object-cover block"
        />
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-between p-4 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
          opacity: hovered ? 1 : 0,
        }}
      >
        {/* Top: index + category */}
        <div className="flex items-start justify-between">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm"
            style={{ background: "#A30A24", color: "#fff" }}
          >
            {CATEGORY_LABEL[work.category]}
          </span>
        </div>

        {/* Bottom: title + description */}
        <div>
          <h3
            className="text-white font-bold leading-tight"
            style={{
              fontSize: "clamp(14px, 2vw, 20px)",
            }}
          >
            {work.title}
          </h3>
          <p
            className="mt-1 line-clamp-2"
            style={{ color: "rgba(255,255,255,0.65)", fontSize: "12px" }}
          >
            {work.description}
          </p>
          <div
            className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest"
            style={{ color: "#A30A24" }}
          >
            {work.type === "video" ? (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#A30A24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play
              </>
            ) : (
              <>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#A30A24"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                View
              </>
            )}
          </div>
        </div>
      </div>

      {/* Type badge (always visible) */}
      {work.type === "video" && (
        <div
          className="absolute top-3 left-3 flex items-center gap-1 px-2 py-0.5 rounded-sm transition-opacity duration-300"
          style={{
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
            opacity: hovered ? 0 : 1,
          }}
        >
          <svg width="8" height="8" viewBox="0 0 24 24" fill="#fff">
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="text-white text-[9px] font-bold uppercase tracking-widest">
            Video
          </span>
        </div>
      )}
    </div>
  );
}

// ── Category Card (Type of Work tile) ───────────────────────────────────────────
function CategoryCard({
  category,
  count,
  cover,
  onClick,
}: {
  category: WorkCategory;
  count: number;
  cover: Work | undefined;
  onClick: () => void;
}) {
  if (!cover) return null;

  return (
    <div className="cursor-pointer group" onClick={onClick}>
      <div
        className="overflow-hidden relative"
        style={{ aspectRatio: "4 / 3", borderRadius: "4px" }}
      >
        {cover.type === "video" ? (
          <video
            src={cover.url}
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={cover.url}
              alt={CATEGORY_LABEL[category]}
              fill
              onContextMenu={(e) => e.preventDefault()}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        )}
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <h3
          className="font-bold leading-tight transition-opacity group-hover:opacity-70"
          style={{ color: "#fff", fontSize: "clamp(15px, 1.6vw, 19px)" }}
        >
          {CATEGORY_LABEL[category]}
        </h3>
        <span
          className="text-xs font-semibold"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          ({count})
        </span>
      </div>
    </div>
  );
}

// ── Fullscreen Modal ───────────────────────────────────────────────────────────
// Swapped in the simpler modal treatment: dark blurred backdrop, click-outside
// to close, media centered and stopPropagation'd, single close button.
function WorkModal({
  work,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  work: Work;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Media */}
      {work.type === "video" ? (
        <video
          key={work.id}
          src={work.url}
          controls
          autoPlay
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()}
          className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <Image
          key={work.id}
          src={work.url}
          alt={work.title}
          width={1600}
          height={1200}
          onContextMenu={(e) => e.preventDefault()}
          className="max-w-[90%] max-h-[90%] w-auto h-auto object-contain rounded-xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      )}

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl font-bold hover:scale-110 transition"
      >
        ✕
      </button>

      {/* Prev / Next */}
      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer"
          style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer"
          style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}

      {/* Caption */}
      <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center text-center px-6 pointer-events-none">
        <span
          className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm mb-2"
          style={{ background: "#A30A24", color: "#fff" }}
        >
          {CATEGORY_LABEL[work.category]}
        </span>
        <h3
          className="text-white font-bold"
          style={{ fontSize: "clamp(14px, 2vw, 20px)" }}
        >
          {work.title}
        </h3>
      </div>
    </div>
  );
}

// ── Main Section ───────────────────────────────────────────────────────────────
export default function WorksSection() {
  const [view, setView] = useState<View>("all");
  const [activeFilter, setActiveFilter] = useState<"all" | WorkCategory>("all");
  const [activeWork, setActiveWork] = useState<Work | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const filtered = useMemo(() => {
    return activeFilter === "all"
      ? WORKS
      : WORKS.filter((w) => w.category === activeFilter);
  }, [activeFilter]);

  const displayed = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  // Modal navigation
  const activeIndex = activeWork
    ? filtered.findIndex((w) => w.id === activeWork.id)
    : -1;
  const handlePrev = () =>
    activeIndex > 0 && setActiveWork(filtered[activeIndex - 1]);
  const handleNext = () =>
    activeIndex < filtered.length - 1 &&
    setActiveWork(filtered[activeIndex + 1]);

  const goToAllWork = () => {
    setView("all");
    setActiveFilter("all");
    setVisibleCount(12);
  };

  const goToCategory = (category: WorkCategory) => {
    setActiveFilter(category);
    setView("all");
    setVisibleCount(12);
  };

  const clearFilter = () => {
    setActiveFilter("all");
    setVisibleCount(12);
  };

  return (
    <>
      <section
        className="min-h-screen"
        style={{
          background: "#0d0d0d",
        }}
      >
        {/* ── Header ── */}
        <div
          className="px-6 lg:px-16 pt-16 pb-10 border-b"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p
                className="text-xs uppercase tracking-[0.25em] font-bold mb-3"
                style={{ color: "#A30A24" }}
              >
                Portfolio
              </p>
              <h1
                className="font-bold leading-none"
                style={{
                  color: "#fff",
                  fontSize: "clamp(40px, 7vw, 96px)",
                  letterSpacing: "-0.02em",
                }}
              >
                Our Works
              </h1>
            </div>
            <p
              className="max-w-sm text-sm leading-relaxed lg:mb-2"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Yes, the work speaks for itself — every frame, every edit, every
              shoot captured through Blink&apos;s lens.
            </p>
          </div>

          {/* ── Tabs ── */}
          <div
            className="mt-8 flex items-center gap-8 border-b"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            <button
              onClick={goToAllWork}
              className="pb-3 text-sm font-bold uppercase tracking-widest transition-colors cursor-pointer"
              style={{
                color: view === "all" ? "#fff" : "rgba(255,255,255,0.4)",
                borderBottom:
                  view === "all"
                    ? "2px solid #A30A24"
                    : "2px solid transparent",
              }}
            >
              All Work
            </button>
            <button
              onClick={() => setView("categories")}
              className="pb-3 text-sm font-bold uppercase tracking-widest transition-colors cursor-pointer"
              style={{
                color: view === "categories" ? "#fff" : "rgba(255,255,255,0.4)",
                borderBottom:
                  view === "categories"
                    ? "2px solid #A30A24"
                    : "2px solid transparent",
              }}
            >
              Type of Work
            </button>

            {view === "all" && (
              <span
                className="ml-auto self-center text-xs pb-3"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                {filtered.length} works
              </span>
            )}
          </div>

          {/* ── Active filter chip (only when a category was picked from the grid) ── */}
          {view === "all" && activeFilter !== "all" && (
            <div className="mt-4 flex items-center gap-2">
              <span
                className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm"
                style={{ background: "#A30A24", color: "#fff" }}
              >
                {CATEGORY_LABEL[activeFilter]}
              </span>
              <button
                onClick={clearFilter}
                className="text-xs cursor-pointer hover:opacity-70"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Clear ×
              </button>
            </div>
          )}
        </div>

        {/* ── Body ── */}
        <div className="px-6 lg:px-16 py-8">
          {view === "categories" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {CATEGORY_LIST.map((category) => {
                const categoryWorks = WORKS.filter(
                  (w) => w.category === category,
                );
                const cover =
                  categoryWorks.find((w) => w.type === "photo") ??
                  categoryWorks[0];
                return (
                  <CategoryCard
                    key={category}
                    category={category}
                    count={categoryWorks.length}
                    cover={cover}
                    onClick={() => goToCategory(category)}
                  />
                );
              })}
            </div>
          ) : displayed.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 gap-3">
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
                No works in this category yet.
              </p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-2 gap-3">
              {displayed.map((work, i) => (
                <WorkCard
                  key={work.id}
                  work={work}
                  index={i}
                  onClick={setActiveWork}
                />
              ))}
            </div>
          )}

          {view === "all" && hasMore && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setVisibleCount((c) => c + 12)}
                className="flex items-center gap-3 px-8 py-3 text-xs font-bold uppercase tracking-widest border transition-all hover:bg-[#A30A24] hover:text-white cursor-pointer"
                style={{
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              >
                Load More
                <span style={{ color: "rgba(255,255,255,0.3)" }}>
                  ({filtered.length - visibleCount} remaining)
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Modal ── */}
      {activeWork && (
        <WorkModal
          work={activeWork}
          onClose={() => setActiveWork(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={activeIndex > 0}
          hasNext={activeIndex < filtered.length - 1}
        />
      )}
    </>
  );
}
