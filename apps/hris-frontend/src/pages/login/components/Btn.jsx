// Btn.jsx
export default function Btn({ children, onClick, disabled, variant = "primary", type = "button" }) {
  let style = { fontFamily: "system-ui,sans-serif" };

  if (variant === "primary") {
    style.backgroundColor = disabled ? "rgba(15,23,42,0.15)" : "#0f172a";
    style.color = disabled ? "rgba(15,23,42,0.4)" : "#fff";
    style.boxShadow = disabled ? "none" : "0 4px 14px rgba(15,23,42,0.25)";
  } else if (variant === "secondary") {
    style = {
      ...style,
      backgroundColor: "rgba(255,255,255,0.5)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      color: "#334155",
      border: "1px solid rgba(15,23,42,0.12)",
    };
  } else if (variant === "danger") {
    style = {
      ...style,
      backgroundColor: "rgba(254,242,242,0.7)",
      color: "#dc2626",
      border: "1px solid rgba(252,165,165,0.6)",
    };
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full py-2.5 rounded-xl text-sm font-medium transition-all hover:opacity-90 active:opacity-80"
      style={{ ...style, cursor: disabled ? "not-allowed" : "pointer" }}
    >
      {children}
    </button>
  );
}