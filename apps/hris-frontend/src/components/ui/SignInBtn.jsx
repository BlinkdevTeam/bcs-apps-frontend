// SignInBtn.jsx
export default function SignInBtn({
  children,
  onClick,
  disabled,
  variant = "primary",
  type = "button",
}) {
  const base = "w-full py-2.5 rounded-xl text-sm font-medium transition-all";
  const hover = disabled ? "" : "hover:opacity-90 active:opacity-80";

  let variantClasses = "";
  let style = { fontFamily: "system-ui,sans-serif" };

  if (variant === "primary") {
    style.backgroundColor = disabled ? "rgba(15,23,42,0.15)" : "#0f172a";
    style.color = disabled ? "rgba(15,23,42,0.4)" : "#fff";
    style.boxShadow = disabled ? "none" : "0 4px 14px rgba(15,23,42,0.25)";
  } else if (variant === "secondary") {
    variantClasses = "border";
    style.backgroundColor = "rgba(255,255,255,0.5)";
    style.backdropFilter = "blur(8px)";
    style.WebkitBackdropFilter = "blur(8px)";
    style.color = "#334155";
    style.borderColor = "rgba(15,23,42,0.12)";
  } else if (variant === "danger") {
    variantClasses = "border";
    style.backgroundColor = "rgba(254,242,242,0.7)";
    style.color = "#dc2626";
    style.borderColor = "rgba(252,165,165,0.6)";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${hover} ${variantClasses}`}
      style={{ ...style, cursor: disabled ? "not-allowed" : "pointer" }}
    >
      {children}
    </button>
  );
}