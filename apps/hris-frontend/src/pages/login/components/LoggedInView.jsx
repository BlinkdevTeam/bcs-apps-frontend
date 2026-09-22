// LoggedInView.jsx
import { ROLE_COLORS, ROLE_LABELS, ROLE_ACCESS } from "../../../data/compData";
import { SignInBtn } from "../../../components/ui";

export default function LoggedInView({ user, onLogout }) {
  const color = ROLE_COLORS[user?.role] || "#4f46e5";
  const initials = user?.name
    ? user.name.split(" ").map((w) => w[0]).join("").slice(0, 2)
    : "--";

  return (
    <div className="space-y-6">
      <div className="text-center py-2">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-semibold"
          style={{ backgroundColor: color + "15", border: `1px solid ${color}33`, color }}
        >
          {initials}
        </div>
        <h2
          className="text-lg font-semibold text-slate-900 mb-1"
          style={{ letterSpacing: "-0.01em", fontFamily: "system-ui,sans-serif" }}
        >
          Welcome back, {user?.name?.split(" ")[0] || "User"}
        </h2>
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full inline-block"
          style={{ fontFamily: "system-ui,sans-serif", backgroundColor: color + "12", color }}
        >
          {ROLE_LABELS[user?.role] || "Unknown role"}
        </span>
      </div>

      <div className="rounded-lg p-4 space-y-2.5" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
        <p
          className="text-xs font-medium uppercase tracking-wide text-slate-400 mb-1"
          style={{ fontFamily: "system-ui,sans-serif" }}
        >
          Your access level
        </p>
        {ROLE_ACCESS[user?.role]?.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <div
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{
                backgroundColor:
                  item.level === "full" ? "#16a34a" :
                  item.level === "dept" ? "#2563eb" :
                  item.level === "own" ? "#d97706" : "#cbd5e1",
              }}
            />
            <span className="text-sm text-slate-700 flex-1" style={{ fontFamily: "system-ui,sans-serif" }}>
              {item.label}
            </span>
            <span className="text-xs text-slate-400" style={{ fontFamily: "system-ui,sans-serif" }}>
              {item.scope}
            </span>
          </div>
        )) || <p className="text-sm text-slate-500">No access info available</p>}
      </div>

      <SignInBtn onClick={onLogout} variant="secondary">Sign out</SignInBtn>
    </div>
  );
}