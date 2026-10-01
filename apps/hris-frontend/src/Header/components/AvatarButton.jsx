/* ---------------- LOCAL CONFIG (no compData dependency) ---------------- */

// Deterministic avatar background color, cycled by user id
const AVATAR_COLORS = [
  "#5a9af0", "#5af07a", "#f0c85a", "#c07af0",
  "#f05a5a", "#f0905a", "#50c8c8", "#d090f0",
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
  super_admin: { bg: "#fdecec", color: "#e02424" },
  hr_admin: { bg: "#e9f9ee", color: "#1d9a4a" },
  manager: { bg: "#eaf1fd", color: "#3a6ee0" },
  employee: { bg: "#fdf3e3", color: "#c98a10" },
};

/* ---------------- ROLE NORMALIZER ---------------- */
const normalizeRole = (roleTitle) => {
  if (!roleTitle) return "employee";

  const map = {
    "Super Admin": "super_admin",
    "HR Admin": "hr_admin",
    "Manager": "manager",
    "Employee": "employee",
  };

  return map[roleTitle] || "employee";
};

export default function AvatarButton({ user, onClick, isOpen }) {
  // console.log("USER DATA:", user);
  if (!user) return null;

  const bg = getAvatarColor(user.id);

  // 🔥 FIX: convert backend role_title → frontend key
  const roleKey = normalizeRole(user.role_title);

  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition-all cursor-pointer"
      style={{
        backgroundColor: isOpen ? "#f1f1f1" : "transparent",
        border: `1px solid ${isOpen ? "#ddd" : "transparent"}`,
        outline: "none",
      }}
    >
      {/* Avatar circle */}
      <div className="relative shrink-0">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
          style={{
            backgroundColor: bg + "28",
            color: bg,
            border: `1.5px solid ${bg}50`,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          {user.avatar_initials || "U"}
        </div>

        {/* Online indicator */}
        <div
          className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: "#5af07a", border: "2px solid #fff" }}
        />
      </div>

      {/* Name + role */}
      <div className="text-left hidden sm:block">
        <p
          className="text-xs text-black leading-none mb-0.5 uppercase font-bold"
          style={{ fontFamily: "system-ui, sans-serif" }}
        >
          {user.first_name?.split(" ")[0] || "User"}
        </p>

        <p
          className="text-xs leading-none"
          style={{
            fontFamily: "system-ui, sans-serif",
            color: ROLE_COLORS[roleKey]?.color || "#777",
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
        className="hidden sm:block transition-transform"
        style={{
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          color: "#999",
        }}
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
        <div
          className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-white"
          style={{
            backgroundColor: "#f05a5a",
            fontSize: 9,
            fontFamily: "monospace",
            fontWeight: 700,
          }}
        >
          {user.unreadNotifications > 9
            ? "9+"
            : user.unreadNotifications}
        </div>
      )}
    </button>
  );
}