import { useEffect, useMemo, useState } from "react";
import {
  updateUser,
  getPermissions,
  getUserPermissions,
  updateUserPermissions,
  resendInvite,
} from "../../../../services/userService";

// ── Deterministic color from role UUID (light-theme pills) ──
const ROLE_PALETTE = [
  { bg: "#fdecec", color: "#e02424" },
  { bg: "#e9f9ee", color: "#1d9a4a" },
  { bg: "#eaf1fd", color: "#3a6ee0" },
  { bg: "#fdf3e3", color: "#c98a10" },
  { bg: "#f3eafd", color: "#8b3ee0" },
  { bg: "#e6fbfa", color: "#0f9e97" },
  { bg: "#fdeafb", color: "#c93ec0" },
];

function getRoleColor(roleId = "") {
  if (!roleId) return { bg: "#f3f4f6", color: "#6b7280" };
  const index =
    roleId.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) %
    ROLE_PALETTE.length;
  return ROLE_PALETTE[index];
}

// ── Avatar helpers ──
const AV = [
  "#5a9af0", "#5af07a", "#f0c85a", "#c07af0",
  "#f05a5a", "#f0905a", "#50c8c8", "#d090f0",
  "#8090a8", "#a8a090", "#688cc0", "#c08a68",
];

function gc(id) {
  let index = 0;
  if (typeof id === "number") index = id % AV.length;
  else if (typeof id === "string" && id.length > 0)
    index = id.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % AV.length;
  return { bg: AV[index] ?? "#9ca3af", fg: "#fff" };
}

function AvatarInline({ user, size = 36 }) {
  if (!user) return null;
  const { bg, fg } = gc(user.id ?? 0);
  const initials =
    user.avatar ||
    user.name
      ?.split(" ")
      .filter(Boolean)
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() ||
    "?";
  return (
    <div
      className="rounded-full flex items-center justify-center font-bold shrink-0"
      style={{
        width: size,
        height: size,
        backgroundColor: bg,
        color: fg,
        fontFamily: "system-ui,sans-serif",
        fontSize: size < 32 ? 11 : size < 56 ? 13 : 20,
      }}
    >
      {initials}
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export default function EditUserDrawer({ user, roles = [], onClose, onSave }) {
  const [roleId, setRoleId] = useState(user.role_id ?? null);
  const [roleName, setRoleName] = useState(user.role_title ?? "");
  const [status, setStatus] = useState(user.status || "active");
  const [section, setSection] = useState("details");

  // All available permissions from DB, grouped
  const [permissionGroups, setPermissionGroups] = useState([]); // [{ id, name, permissions: [...] }]
  const [loadingPermissions, setLoadingPermissions] = useState(true);

  // The user's currently assigned permission IDs (UUIDs)
  const [selectedPerms, setSelectedPerms] = useState(new Set());

  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [resending, setResending] = useState(false);
  const [resendResult, setResendResult] = useState(null);

  // Color derived from selected role UUID
  const rc = useMemo(() => getRoleColor(roleId), [roleId]);

  // ── Load all permissions + this user's assigned permissions in parallel ──
  useEffect(() => {
    if (!user?.id) return;
    let cancelled = false;

    const load = async () => {
      setLoadingPermissions(true);
      try {
        const [allPerms, userPerms] = await Promise.all([
          getPermissions(),
          getUserPermissions(user.id),
        ]);

        if (cancelled) return;

        // Support both flat (group_name on permission) and nested shapes
        const groupMap = {};
        const permsArray = Array.isArray(allPerms)
          ? allPerms
          : (allPerms?.data ?? allPerms?.permissions ?? []);

        permsArray.forEach((p) => {
          const gid = p.group_id ?? p.group?.id ?? "other";
          const gname = p.group_name ?? p.group?.name ?? "Other";
          if (!groupMap[gid]) groupMap[gid] = { id: gid, name: gname, permissions: [] };
          groupMap[gid].permissions.push(p);
        });

        setPermissionGroups(
          Object.values(groupMap).sort((a, b) => a.name.localeCompare(b.name))
        );

        // userPerms expected shape: { permissions: [...] } or an array
        const assigned = userPerms?.permissions ?? userPerms ?? [];
        const ids = assigned.map((p) => (typeof p === "string" ? p : (p.id ?? p.permission_id)));
        setSelectedPerms(new Set(ids));
      } catch (err) {
        console.error("Failed to load permissions:", err);
      } finally {
        if (!cancelled) setLoadingPermissions(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [user.id]);

  function togglePerm(permId) {
    setSelectedPerms((prev) => {
      const next = new Set(prev);
      next.has(permId) ? next.delete(permId) : next.add(permId);
      return next;
    });
  }

  // Select / deselect all permissions in a group
  function toggleGroup(groupPerms, allSelected) {
    setSelectedPerms((prev) => {
      const next = new Set(prev);
      groupPerms.forEach((p) => {
        allSelected ? next.delete(p.id) : next.add(p.id);
      });
      return next;
    });
  }

  async function handleResendInvite() {
    setResending(true);
    setResendResult(null);
    try {
      await resendInvite(user.id);
      setResendResult("ok");
    } catch (err) {
      console.error("Failed to resend invite:", err);
      setResendResult("error");
    } finally {
      setResending(false);
      setTimeout(() => setResendResult(null), 4000);
    }
  }

  async function handleSave() {
    setSaving(true);
    setSaveError(null);
    try {
      await updateUser(user.id, {
        role_id: roleId,
        status,
        is_active: status === "active",
      });

      await updateUserPermissions(user.id, {
        permissions: Array.from(selectedPerms),
      });

      onSave?.({ ...user, role_id: roleId, role_title: roleName, status });
      onClose();
    } catch (err) {
      console.error("[EditUserDrawer] handleSave failed:", err);
      const msg =
        err?.response?.data?.message ??
        err?.response?.data?.error ??
        err?.message ??
        "Failed to save changes. Please try again.";
      setSaveError(msg);
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 z-20"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        onClick={onClose}
      />

      {/* DRAWER */}
      <div
        className="fixed top-0 right-0 h-full z-50 flex flex-col"
        style={{
          width: 500,
          backgroundColor: "#ffffff",
          borderLeft: "1px solid #e5e7eb",
          boxShadow: "-8px 0 40px rgba(0,0,0,0.15)",
        }}
      >
        {/* HEADER */}
        <div className="px-7 py-5 shrink-0" style={{ borderBottom: "1px solid #e5e7eb" }}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <AvatarInline user={user} size={40} />
              <div>
                <h2 className="text-base font-normal text-gray-900">{user.name}</h2>
                <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>
                  {user.email}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-900 text-xl leading-none cursor-pointer transition-colors"
            >
              ✕
            </button>
          </div>

          {/* TABS */}
          <div className="flex gap-1">
            {["details", "permissions"].map((s) => (
              <button
                key={s}
                onClick={() => setSection(s)}
                className="px-4 py-1.5 rounded text-xs capitalize cursor-pointer transition-colors"
                style={{
                  fontFamily: "system-ui,sans-serif",
                  backgroundColor: section === s ? "#111827" : "#f3f4f6",
                  color: section === s ? "#fff" : "#6b7280",
                  border: "1px solid #e5e7eb",
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto px-7 py-5">
          {/* ── DETAILS ── */}
          {section === "details" && (
            <div className="space-y-5">
              {/* ROLE */}
              <div>
                <label
                  className="block text-xs uppercase tracking-widest text-gray-500 mb-2"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  Role
                </label>
                {roles.length === 0 ? (
                  <div className="text-sm text-gray-500" style={{ fontFamily: "system-ui,sans-serif" }}>
                    Loading roles…
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    {roles.map((r) => {
                      const isSelected = roleId === r.id;
                      const c = getRoleColor(r.id);
                      return (
                        <button
                          key={r.id}
                          onClick={() => {
                            setRoleId(r.id);
                            setRoleName(r.name);
                          }}
                          className="px-3 py-2.5 rounded-lg text-left transition-all cursor-pointer"
                          style={{
                            fontFamily: "system-ui,sans-serif",
                            backgroundColor: isSelected ? c.bg : "#fafafa",
                            border: `1px solid ${isSelected ? c.color + "55" : "#e5e7eb"}`,
                          }}
                        >
                          <p className="text-sm font-medium" style={{ color: isSelected ? c.color : "#374151" }}>
                            {r.name}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {r.description || "No description"}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* STATUS */}
              <div>
                <label
                  className="block text-xs uppercase tracking-widest text-gray-500 mb-2"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  Account Status
                </label>
                <div className="flex gap-2">
                  {[
                    ["active", "Active", "#16a34a"],
                    ["inactive", "Inactive", "#dc2626"],
                  ].map(([v, l, c]) => (
                    <button
                      key={v}
                      onClick={() => setStatus(v)}
                      className="flex-1 py-2.5 rounded text-sm font-medium transition-all cursor-pointer"
                      style={{
                        fontFamily: "system-ui,sans-serif",
                        backgroundColor: status === v ? c + "15" : "#fafafa",
                        color: status === v ? c : "#6b7280",
                        border: `1px solid ${status === v ? c + "44" : "#e5e7eb"}`,
                      }}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              {/* RESEND INVITE */}
              <div className="space-y-2 pt-2" style={{ borderTop: "1px solid #e5e7eb" }}>
                {resendResult && (
                  <p
                    className="text-xs px-4 py-1.5 rounded"
                    style={{
                      fontFamily: "system-ui,sans-serif",
                      backgroundColor: resendResult === "ok" ? "#ecfdf3" : "#fef2f2",
                      color: resendResult === "ok" ? "#16a34a" : "#dc2626",
                      border: `1px solid ${resendResult === "ok" ? "#bbf7d0" : "#fecaca"}`,
                    }}
                  >
                    {resendResult === "ok"
                      ? `✓ Email sent to ${user.email}`
                      : "✕ Failed to send email — check server logs"}
                  </p>
                )}
                <button
                  onClick={handleResendInvite}
                  disabled={resending}
                  className="w-full py-2.5 rounded text-sm text-left px-4 hover:opacity-80 cursor-pointer transition-opacity"
                  style={{
                    fontFamily: "system-ui,sans-serif",
                    backgroundColor: "#fafafa",
                    color: resending ? "#9ca3af" : "#374151",
                    border: "1px solid #e5e7eb",
                    opacity: resending ? 0.6 : 1,
                  }}
                >
                  {resending ? "⏳ Sending…" : "📧 Send email to set password"}
                </button>
              </div>

              {/* LAST LOGIN */}
              <div
                className="rounded px-4 py-3 flex justify-between"
                style={{ backgroundColor: "#fafafa", border: "1px solid #e5e7eb" }}
              >
                <span className="text-xs text-gray-500" style={{ fontFamily: "system-ui,sans-serif" }}>
                  Last login
                </span>
                <span className="text-xs text-gray-700" style={{ fontFamily: "monospace" }}>
                  {user.lastLogin || "Never"}
                </span>
              </div>
            </div>
          )}

          {/* ── PERMISSIONS ── */}
          {section === "permissions" && (
            <>
              {loadingPermissions ? (
                <div className="text-sm text-gray-500" style={{ fontFamily: "system-ui,sans-serif" }}>
                  Loading permissions…
                </div>
              ) : (
                <div className="space-y-5">
                  {permissionGroups.map((group) => {
                    const allSelected = group.permissions.every((p) => selectedPerms.has(p.id));
                    const someSelected = group.permissions.some((p) => selectedPerms.has(p.id));

                    return (
                      <div key={group.id}>
                        {/* Group header with select-all toggle */}
                        <div className="flex items-center justify-between mb-2">
                          <p
                            className="text-xs uppercase tracking-widest text-gray-500"
                            style={{ fontFamily: "system-ui,sans-serif" }}
                          >
                            {group.name}
                          </p>
                          <button
                            onClick={() => toggleGroup(group.permissions, allSelected)}
                            className="text-xs px-2 py-0.5 rounded cursor-pointer transition-colors"
                            style={{
                              fontFamily: "system-ui,sans-serif",
                              color: allSelected ? rc.color : someSelected ? rc.color + "cc" : "#9ca3af",
                              border: `1px solid ${allSelected ? rc.color + "55" : "#e5e7eb"}`,
                              backgroundColor: allSelected ? rc.color + "12" : "transparent",
                            }}
                          >
                            {allSelected ? "Deselect all" : "Select all"}
                          </button>
                        </div>

                        <div className="space-y-1">
                          {group.permissions.map((perm) => {
                            const has = selectedPerms.has(perm.id);
                            return (
                              <div
                                key={perm.id}
                                onClick={() => togglePerm(perm.id)}
                                className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors"
                                style={{
                                  fontFamily: "system-ui,sans-serif",
                                  backgroundColor: has ? rc.bg : "#fafafa",
                                  border: `1px solid ${has ? rc.color + "44" : "#f0f0f0"}`,
                                }}
                              >
                                {/* Checkbox */}
                                <div
                                  className="w-4 h-4 rounded flex items-center justify-center shrink-0"
                                  style={{
                                    backgroundColor: has ? rc.color + "22" : "#fff",
                                    border: `1.5px solid ${has ? rc.color : "#d1d5db"}`,
                                  }}
                                >
                                  {has && (
                                    <span style={{ fontSize: 8, color: rc.color, lineHeight: 1 }}>✓</span>
                                  )}
                                </div>

                                {/* Permission name + code */}
                                <div className="flex-1 min-w-0">
                                  <p
                                    className="text-xs"
                                    style={{ color: has ? "#111827" : "#9ca3af", fontFamily: "system-ui,sans-serif" }}
                                  >
                                    {perm.name}
                                  </p>
                                  <p
                                    className="text-xs mt-0.5 truncate"
                                    style={{ color: has ? "#6b7280" : "#d1d5db", fontFamily: "monospace" }}
                                  >
                                    {perm.code}
                                  </p>
                                </div>

                                {/* Scope badge */}
                                {perm.scope && perm.scope !== "all" && (
                                  <span
                                    className="text-xs px-1.5 py-0.5 rounded shrink-0"
                                    style={{
                                      fontFamily: "system-ui,sans-serif",
                                      backgroundColor: "#f3f4f6",
                                      color: "#6b7280",
                                      border: "1px solid #e5e7eb",
                                    }}
                                  >
                                    {perm.scope}
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}

                  {permissionGroups.length === 0 && (
                    <p className="text-sm text-gray-500" style={{ fontFamily: "system-ui,sans-serif" }}>
                      No permissions available.
                    </p>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* FOOTER */}
        <div className="px-7 py-5 shrink-0" style={{ borderTop: "1px solid #e5e7eb" }}>
          {saveError && (
            <p
              className="text-xs px-3 py-2 rounded mb-3"
              style={{
                fontFamily: "system-ui,sans-serif",
                backgroundColor: "#fef2f2",
                color: "#dc2626",
                border: "1px solid #fecaca",
              }}
            >
              {saveError}
            </p>
          )}
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded text-sm cursor-pointer transition-colors"
              style={{
                fontFamily: "system-ui,sans-serif",
                backgroundColor: "#f3f4f6",
                color: "#374151",
                border: "1px solid #e5e7eb",
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-5 py-2 rounded text-sm font-medium bg-gray-900 text-white hover:opacity-80 cursor-pointer transition-opacity"
              style={{ fontFamily: "system-ui,sans-serif", opacity: saving ? 0.5 : 1 }}
            >
              {saving ? "Saving…" : "Save Changes ✓"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}