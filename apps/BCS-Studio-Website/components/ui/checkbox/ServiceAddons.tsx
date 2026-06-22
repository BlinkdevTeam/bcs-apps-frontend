// components/ui/checkbox/ServiceAddons.tsx

"use client";

import { ServiceAddon } from "@/data/service";

interface Props {
  addons: ServiceAddon[];
  selectedAddons: ServiceAddon[];
  onChange: (addons: ServiceAddon[]) => void;
  basePrice?: number;
}

export default function ServiceAddons({
  addons,
  selectedAddons,
  onChange,
  basePrice,
}: Props) {
  const toggleAddon = (addon: ServiceAddon) => {
    const exists = selectedAddons.some((a) => a.id === addon.id);
    onChange(
      exists
        ? selectedAddons.filter((a) => a.id !== addon.id)
        : [...selectedAddons, addon],
    );
  };

  const addonsTotal = selectedAddons.reduce(
    (sum, a) => sum + Number(a.price),
    0,
  );
  const totalPrice = (basePrice ?? 0) + addonsTotal;

  if (!addons || addons.length === 0) return null;

  return (
    <div className="space-y-3 text-[#191919]">
      {/* ── Eyebrow ── */}
      <div className="flex items-center gap-3">
        <p className="text-[10px] tracking-[3px] uppercase font-mono text-[#6E6E6E]">
          Add-ons
        </p>
        <div className="flex-1 border-t border-dashed border-gray-200" />
        <p className="text-[10px] tracking-[3px] uppercase font-mono text-[#6E6E6E]">
          Optional
        </p>
      </div>

      {/* ── Addon tiles ── */}
      <div className="flex flex-col gap-2">
        {addons.map((addon) => {
          const isSelected = selectedAddons.some((a) => a.id === addon.id);

          return (
            <button
              key={addon.id}
              type="button"
              onClick={() => toggleAddon(addon)}
              className={`
                group w-full flex items-center gap-3 px-4 py-3 rounded-xl
                border transition-all duration-150 text-left
                ${
                  isSelected
                    ? "border-[#A30A24] bg-[#A30A24]/5"
                    : "border-gray-200 bg-white hover:border-[#A30A24]/50 hover:bg-gray-50"
                }
              `}
            >
              {/* Custom checkbox */}
              <span
                className={`
                  flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center
                  transition-all duration-150
                  ${
                    isSelected
                      ? "border-[#A30A24] bg-[#A30A24]"
                      : "border-gray-300 bg-white group-hover:border-[#A30A24]/60"
                  }
                `}
              >
                {isSelected && (
                  <svg
                    className="w-3 h-3 text-white"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="2,6 5,9 10,3" />
                  </svg>
                )}
              </span>

              {/* Label */}
              <span
                className={`flex-1 text-sm font-medium transition-colors ${
                  isSelected ? "text-[#191919]" : "text-gray-700"
                }`}
              >
                {addon.label}
              </span>

              {/* Price badge */}
              <span
                className={`
                  text-xs font-mono font-semibold px-2 py-0.5 rounded-md transition-colors
                  ${
                    isSelected
                      ? "bg-[#A30A24] text-white"
                      : "bg-gray-100 text-[#A30A24]"
                  }
                `}
              >
                +₱{Number(addon.price).toLocaleString()}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Running total ── */}
      {basePrice !== undefined && (
        <div className="mt-4 rounded-xl border border-[#A30A24] bg-[#A30A24]/5 px-4 py-3 space-y-1.5">
          {/* Base */}
          <div className="flex justify-between items-center text-xs text-gray-500 font-mono">
            <span>Base price</span>
            <span>₱{basePrice.toLocaleString()}</span>
          </div>

          {/* Per-addon lines */}
          {selectedAddons.map((a) => (
            <div
              key={a.id}
              className="flex justify-between items-center text-xs text-gray-500 font-mono"
            >
              <span className="truncate max-w-[70%]">+ {a.label}</span>
              <span>₱{Number(a.price).toLocaleString()}</span>
            </div>
          ))}

          {/* Divider */}
          <div className="border-t border-[#A30A24]/20 pt-1.5 flex justify-between items-center">
            <span className="text-xs text-gray-500 font-mono uppercase tracking-widest">
              Total
            </span>
            <span className="text-lg font-bold text-[#A30A24]">
              ₱{totalPrice.toLocaleString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
