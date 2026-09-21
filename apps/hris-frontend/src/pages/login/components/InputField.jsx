// InputField.jsx
export default function InputField({ label, type="text", value, onChange, placeholder, error, autoFocus=false, rightSlot }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs uppercase tracking-widest text-gray-500"
        style={{ fontFamily:"system-ui,sans-serif" }}>{label}</label>
      <div className="relative">
        <input
          type={type}
          autoFocus={autoFocus}
          className="w-full px-4 py-3 rounded-lg text-sm text-black placeholder-gray-400 outline-none transition-all"
          style={{
            fontFamily:      "system-ui,sans-serif",
            backgroundColor: "#fff",
            border:          `1px solid ${error ? "#dc262655" : "#d1d5db"}`,
            paddingRight:    rightSlot ? 44 : undefined,
          }}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        {rightSlot && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">{rightSlot}</div>
        )}
      </div>
      {error && (
        <p className="text-xs" style={{ fontFamily:"system-ui,sans-serif", color:"#dc2626" }}>{error}</p>
      )}
    </div>
  );
}