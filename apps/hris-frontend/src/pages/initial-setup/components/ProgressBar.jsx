import { TOTAL_STEPS } from "../../../data/compData";

export default function ProgressBar({ step }) {
  return (
    <div className="flex items-center gap-2 mb-10">
      {Array.from({ length: TOTAL_STEPS }).map((_, i) => {
        const num    = i + 1;
        const done   = step > num;
        const active = step === num;
        return (
          <div key={i} className="flex items-center gap-2 flex-1">
            <div className="flex items-center gap-2 flex-shrink-0">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-all"
                style={{
                  backgroundColor: done ? "#16a34a" : active ? "#000" : "#f3f4f6",
                  color:           done ? "#fff"    : active ? "#fff" : "#9ca3af",
                  border:          done || active ? "none" : "1px solid #e5e7eb",
                  fontFamily:      "system-ui,sans-serif",
                }}
              >
                {done ? "✓" : num}
              </div>
            </div>
            {i < TOTAL_STEPS - 1 && (
              <div
                className="flex-1 h-px"
                style={{ backgroundColor: done ? "#86efac" : "#e5e7eb" }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}