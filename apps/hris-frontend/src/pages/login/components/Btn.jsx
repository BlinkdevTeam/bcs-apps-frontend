export default function SignInBtn({
  children,
  onClick,
  disabled,
  variant = "primary",
  type = "button",
}) {
  const base = "w-full py-3 rounded-lg text-sm font-medium transition-all";
  const hover = "hover:opacity-80";

  let variantClasses = "";
  if (variant === "primary") {
    variantClasses = disabled
      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
      : "bg-black text-white";
  } else if (variant === "secondary") {
    variantClasses = "bg-gray-50 text-gray-600 border border-gray-200";
  } else if (variant === "danger") {
    variantClasses = "bg-red-50 text-red-600 border border-red-200";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${hover} ${variantClasses}`}
    >
      {children}
    </button>
  );
}