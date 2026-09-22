// InputField.jsx
import { useState } from "react";

export default function InputField({ label, type = "text", value, onChange, placeholder, error, autoFocus = false, rightSlot }) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="space-y-1.5">
      <label
        className="block text-xs font-medium"
        style={{ fontFamily: "system-ui,sans-serif", color: "rgba(15,23,42,0.65)" }}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          autoFocus={autoFocus}
          className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all"
          style={{
            fontFamily: "system-ui,sans-serif",
            color: "#0f172a",
            backgroundColor: "rgba(255,255,255,0.55)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: `1px solid ${
              error ? "rgba(220,38,38,0.5)" : focused ? "rgba(15,23,42,0.4)" : "rgba(15,23,42,0.12)"
            }`,
            boxShadow: focused ? "0 0 0 3px rgba(15,23,42,0.06)" : "none",
            paddingRight: rightSlot ? 44 : undefined,
          }}
          placeholder={placeholder}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
        />
        {rightSlot && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">{rightSlot}</div>
        )}
      </div>
      {error && (
        <p className="text-xs" style={{ fontFamily: "system-ui,sans-serif", color: "#dc2626" }}>
          {error}
        </p>
      )}
    </div>
  );
}