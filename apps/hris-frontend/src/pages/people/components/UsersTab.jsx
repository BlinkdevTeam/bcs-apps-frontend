import { useState, useMemo, useEffect } from "react";
import { getEmployees } from "../../../services/employeeService";
import { getRoles } from "../../../services/userService";
import EditUserDrawer from "./usersComponents/EditUserDrawer";

const AV = [
  "#3a3a3a","#2a2a2a","#1f2a3a","#2a1f3a","#3a1f1f",
  "#1f3a2a","#2a3a1f","#3a2a1f","#1f1f3a","#2a3a3a",
  "#3a1f2a","#1f3a3a",
];

// Deterministic color from role UUID
const ROLE_PALETTE = [
  { bg: "#1f0a0a", color: "#f05a5a" },
  { bg: "#0a1f0a", color: "#5af07a" },
  { bg: "#0a1020", color: "#5a9af0" },
  { bg: "#1f1a0a", color: "#f0c85a" },
  { bg: "#0f0a1f", color: "#a05af0" },
  { bg: "#0a1f1f", color: "#5af0e0" },
  { bg: "#1f0a1f", color: "#f05ae0" },
];

function getRoleColor(roleId) {
  if (!roleId) return { bg: "#1a1a1a", color: "#555" };
  const index =
    roleId.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) %
    ROLE_PALETTE.length;
  return ROLE_PALETTE[index];
}

function gc(id) {
  let index = 0;
  if (typeof id === "number") index = id % AV.length;
  else if (typeof id === "string" && id.length > 0)
    index = id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) % AV.length;
  return { bg: AV[index] ?? "#333", fg: "#fff" };
}

function Avatar({ user, size = 36 }) {
  if (!user) return null;
  const { bg, fg } = gc(user.id ?? 0);
  const initials =
    user.avatar ||
    user.name?.split(" ").filter(Boolean).map((n) => n[0]).join("").slice(0, 2).toUpperCase() ||
    "?";
  return (
    <div
      className="rounded-full flex items-center justify-center font-bold flex-shrink-0"
      style={{
        width: size, height: size,
        backgroundColor: bg, color: fg,
        fontFamily: "system-ui,sans-serif",
        fontSize: size < 32 ? 11 : size < 56 ? 13 : 20,
      }}
    >
      {initials}
    </div>
  );
}

function extractArray(res) {
  if (Array.isArray(res)) return res;
  if (Array.isArray(res?.data)) return res.data;
  if (Array.isArray(res?.data?.data)) return res.data.data;
  if (Array.isArray(res?.employees)) return res.employees;
  if (Array.isArray(res?.data?.employees)) return res.data.employees;
  return [];
}

function mapEmployee(emp) {
  if (!emp || typeof emp !== "object") return null;
  return {
    id: emp.id ?? crypto.randomUUID(),
    name: `${emp.first_name ?? ""} ${emp.last_name ?? ""}`.trim() || "Unnamed",
    email: emp.email ?? "—",
    role_id: emp.role_id ?? null,
    role_title: emp.role_title ?? "",
    dept: emp.department?.name ?? "—",
    status: emp.status ?? "inactive",
    lastLogin: emp.last_login_at
      ? new Date(emp.last_login_at).toLocaleString("en-US", {
          month: "short", day: "numeric", year: "numeric",
          hour: "numeric", minute: "2-digit",
        })
      : "Never",
    mustChangePassword: emp.must_change_password ?? false,
    createdOn: emp.created_at ?? null,
    avatar: emp.avatar_initials ?? "",
  };
}

export default function UserManagementPage() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);         // ← from DB
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ── Fetch roles + users in parallel ──
  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const [rolesRes, empRes] = await Promise.all([
          getRoles(),
          getEmployees(),
        ]);
        if (cancelled) return;
        setRoles(rolesRes || []);
        const raw = extractArray(empRes);
        setUsers(raw.map(mapEmployee).filter(Boolean));
      } catch (err) {
        if (!cancelled) {
          console.error("Failed to fetch data:", err);
          setError("Failed to load users. Please try again.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => { cancelled = true; };
  }, []);

  // Build a lookup map: role_id → role object
  const roleMap = useMemo(() => {
    const map = {};
    roles.forEach((r) => { map[r.id] = r; });
    return map;
  }, [roles]);

  const filtered = useMemo(
    () =>
      users.filter((u) => {
        if (!u) return false;
        const q = search.toLowerCase();
        return (
          (!q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)) &&
          (roleFilter === "All" || u.role_id === roleFilter) &&
          (statusFilter === "All" || u.status === statusFilter)
        );
      }),
    [users, search, roleFilter, statusFilter],
  );

  function handleSave(updated) {
    if (!updated?.id) return;
    setUsers((prev) =>
      prev.map((u) => (u.id === updated.id ? { ...u, ...updated } : u)),
    );
  }

  // Stats driven by roles from DB
  const stats = roles.map((r) => ({
    id: r.id,
    name: r.name,
    count: users.filter((u) => u.role_id === r.id).length,
    color: getRoleColor(r.id),
  }));
  const inactive = users.filter((u) => u?.status === "inactive").length;

  return (
    <div className="flex-1 overflow-hidden flex flex-col" style={{ backgroundColor: "#000" }}>
      {/* Header */}
      <div className="px-8 pt-8 pb-0 flex-shrink-0">
        {/* Role summary cards — dynamic from DB */}
        <div className="grid gap-3 mb-6" style={{ gridTemplateColumns: `repeat(${roles.length + 1}, 1fr)` }}>
          {[
            ...stats.map((s) => ({
              label: s.name,
              value: s.count,
              color: s.color.color,
            })),
            { label: "Inactive", value: inactive, color: "#555" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-lg px-4 py-3"
              style={{ backgroundColor: "#0d0d0d", border: "1px solid #1e1e1e" }}
            >
              <p className="text-xs uppercase tracking-widest mb-1.5"
                style={{ fontFamily: "system-ui,sans-serif", color: "#444" }}>
                {s.label}
              </p>
              <p className="text-2xl font-light"
                style={{ fontFamily: "monospace", color: s.color }}>
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-8 pb-8">
        {/* Filters */}
        <div className="flex items-center gap-3 mb-5">
          <div className="relative flex-1 max-w-xs">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">🔍</span>
            <input
              className="w-full pl-9 pr-4 py-2 rounded text-sm text-white placeholder-gray-600 outline-none"
              style={{ fontFamily: "system-ui,sans-serif", backgroundColor: "#111", border: "1px solid #2a2a2a" }}
              placeholder="Search users…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Role filter — built from DB roles */}
          <div className="flex gap-1 rounded-lg p-0.5" style={{ backgroundColor: "#111", border: "1px solid #2a2a2a" }}>
            <button
              onClick={() => setRoleFilter("All")}
              className="px-3 py-1.5 rounded text-xs"
              style={{
                fontFamily: "system-ui,sans-serif",
                backgroundColor: roleFilter === "All" ? "#fff" : "transparent",
                color: roleFilter === "All" ? "#000" : "#555",
              }}
            >
              All Roles
            </button>
            {roles.map((r) => (
              <button
                key={r.id}
                onClick={() => setRoleFilter(r.id)}
                className="px-3 py-1.5 rounded text-xs"
                style={{
                  fontFamily: "system-ui,sans-serif",
                  backgroundColor: roleFilter === r.id ? "#fff" : "transparent",
                  color: roleFilter === r.id ? "#000" : "#555",
                }}
              >
                {r.name}
              </button>
            ))}
          </div>

          <div className="flex gap-1 rounded-lg p-0.5" style={{ backgroundColor: "#111", border: "1px solid #2a2a2a" }}>
            {["All", "active", "inactive"].map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className="px-3 py-1.5 rounded text-xs capitalize"
                style={{
                  fontFamily: "system-ui,sans-serif",
                  backgroundColor: statusFilter === s ? "#fff" : "transparent",
                  color: statusFilter === s ? "#000" : "#555",
                }}
              >
                {s === "All" ? "All" : s}
              </button>
            ))}
          </div>

          <div className="flex-1" />
          <span className="text-gray-600 text-sm" style={{ fontFamily: "monospace" }}>
            {loading ? "Loading…" : `${filtered.length} users`}
          </span>
        </div>

        {error && (
          <div className="mb-4 px-4 py-3 rounded text-sm"
            style={{ backgroundColor: "#1f0a0a", border: "1px solid #3a1010", color: "#f05a5a", fontFamily: "system-ui,sans-serif" }}>
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-20 text-gray-600 text-sm"
            style={{ fontFamily: "system-ui,sans-serif" }}>
            Loading users…
          </div>
        ) : (
          <div className="rounded-lg overflow-hidden" style={{ border: "1px solid #1e1e1e" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0a0a0a", borderBottom: "1px solid #1e1e1e" }}>
                  {["User", "Role", "Status", "Last Login", "Invite", ""].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-normal text-gray-600 whitespace-nowrap"
                      style={{ fontFamily: "system-ui,sans-serif", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((user, i) => {
                  if (!user) return null;
                  // Look up role from DB data
                  const role = roleMap[user.role_id];
                  const rc = getRoleColor(user.role_id);

                  return (
                    <tr
                      key={user.id || i}
                      className="group"
                      style={{
                        borderBottom: i < filtered.length - 1 ? "1px solid #141414" : "none",
                        backgroundColor: user.status === "inactive" ? "#080808" : "#0d0d0d",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#111")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = user.status === "inactive" ? "#080808" : "#0d0d0d")}
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <Avatar user={user} size={32} />
                            {user.status === "inactive" && (
                              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-black"
                                style={{ backgroundColor: "#f05a5a" }} />
                            )}
                          </div>
                          <div>
                            <p className="text-white text-sm"
                              style={{ fontFamily: "system-ui,sans-serif", opacity: user.status === "inactive" ? 0.5 : 1 }}>
                              {user.name}
                            </p>
                            <p className="text-gray-600 text-xs" style={{ fontFamily: "system-ui,sans-serif" }}>
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-3">
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ fontFamily: "system-ui,sans-serif", backgroundColor: rc.bg, color: rc.color }}
                        >
                          {role?.name ?? user.role_title ?? "—"}  {/* ← from DB, no hardcoding */}
                        </span>
                      </td>

                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: user.status === "active" ? "#5af07a" : "#333" }} />
                          <span className="text-xs capitalize"
                            style={{ fontFamily: "system-ui,sans-serif", color: user.status === "active" ? "#5af07a" : "#555" }}>
                            {user.status}
                          </span>
                        </div>
                      </td>

                      <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap" style={{ fontFamily: "monospace" }}>
                        {user.lastLogin}
                      </td>

                      <td className="px-4 py-3">
                        {user.mustChangePassword && (
                          <span className="text-xs px-2 py-0.5 rounded"
                            style={{ fontFamily: "system-ui,sans-serif", backgroundColor: "#1f1a0f", color: "#f0c85a", border: "1px solid #3a3010" }}>
                            Pending
                          </span>
                        )}
                      </td>

                      <td className="px-4 py-3">
                        <button
                          onClick={() => setEditing(user)}
                          className="text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:opacity-80"
                          style={{ fontFamily: "system-ui,sans-serif", backgroundColor: "#111", color: "#aaa", border: "1px solid #2a2a2a" }}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}

                {filtered.length === 0 && !loading && (
                  <tr>
                    <td colSpan={6} className="px-4 py-10 text-center text-gray-600 text-sm"
                      style={{ fontFamily: "system-ui,sans-serif" }}>
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {editing && (
        <EditUserDrawer
          user={editing}
          roles={roles}               // ← pass roles down, no second fetch needed
          onClose={() => setEditing(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}