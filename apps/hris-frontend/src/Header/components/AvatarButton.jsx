/* ---------------- LOCAL CONFIG ---------------- */

const AVATAR_COLORS = [
  "#6366f1", "#10b981", "#f59e0b", "#a855f7",
  "#ef4444", "#f97316", "#06b6d4", "#ec4899",
];

function getAvatarColor(id) {
  if (id === undefined || id === null) return AVATAR_COLORS[0];
  const index =
    typeof id === "number"
      ? id % AVATAR_COLORS.length
      : String(id)
          .split("")
          .reduce((acc, c) => acc + c.charCodeAt(0), 0) % AVATAR_COLORS.length;
  return AVATAR_COLORS[index];
}

const ROLE_LABELS = {
  super_admin: "Super Admin",
  hr_admin: "HR Admin",
  manager: "Manager",
  employee: "Employee",
};

const ROLE_COLORS = {
  super_admin: "#e11d48",
  hr_admin: "#059669",
  manager: "#4f46e5",
  employee: "#d97706",
};

const normalizeRole = (roleTitle) => {
  if (!roleTitle) return "employee";
  const map = {
    "Super Admin": "super_admin",
    "HR Admin": "hr_admin",
    Manager: "manager",
    Employee: "employee",
  };
  return map[roleTitle] || "employee";
};

export default function AvatarButton({ user, onClick, isOpen }) {
  if (!user) return null;

  const bg = getAvatarColor(user.id);
  const roleKey = normalizeRole(user.role_title);

  return (
    <button
      onClick={onClick}
      className={`group relative flex items-center gap-2.5 rounded-full py-1 pl-1 pr-3 transition-all duration-200 cursor-pointer outline-none ring-1 ring-inset ${
        isOpen
          ? "bg-slate-100 ring-slate-300"
          : "bg-white ring-slate-200 hover:bg-slate-50 hover:ring-slate-300"
      } focus-visible:ring-2 focus-visible:ring-indigo-500`}
    >
      {/* Avatar */}
      <div className="relative shrink-0">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-semibold text-white shadow-sm"
          style={{
            background: `linear-gradient(135deg, ${bg}, ${bg}cc)`,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          {user.avatar_initials || "U"}
        </div>
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
      </div>

      {/* Name + role */}
      <div className="hidden text-left sm:block">
        <p
          className="mb-0.5 text-[12px] font-semibold leading-none text-slate-900"
          style={{ fontFamily: "system-ui, sans-serif" }}
        >
          {user.first_name?.split(" ")[0] || "User"}
        </p>
        <p
          className="text-[11px] leading-none"
          style={{
            fontFamily: "system-ui, sans-serif",
            color: ROLE_COLORS[roleKey] || "#64748b",
          }}
        >
          {ROLE_LABELS[roleKey] || "Employee"}
        </p>
      </div>

      {/* Chevron */}
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className="hidden text-slate-400 transition-transform duration-200 sm:block"
        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
      >
        <path
          d="M2 4l4 4 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Unread badge */}
      {user.unreadNotifications > 0 && !isOpen && (
        <span
          className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[9px] font-bold text-white ring-2 ring-white"
          style={{ fontFamily: "system-ui, sans-serif" }}
        >
          {user.unreadNotifications > 9 ? "9+" : user.unreadNotifications}
        </span>
      )}
    </button>
  );
}