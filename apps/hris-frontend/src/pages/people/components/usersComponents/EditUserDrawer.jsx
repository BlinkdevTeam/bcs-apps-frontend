import { useEffect, useMemo, useState } from "react";
import {
  updateUser,
  getPermissions,
  getUserPermissions,
  updateUserPermissions,
  resendInvite,
} from "../../../../services/userService";

// ── Deterministic color from role UUID ──
const ROLE_PALETTE = [
  { bg: "#1f0a0a", color: "#f05a5a" },
  { bg: "#0a1f0a", color: "#5af07a" },
  { bg: "#0a1020", color: "#5a9af0" },
  { bg: "#1f1a0a", color: "#f0c85a" },
  { bg: "#0f0a1f", color: "#a05af0" },
  { bg: "#0a1f1f", color: "#5af0e0" },
  { bg: "#1f0a1f", color: "#f05ae0" },
];

function getRoleColor(roleId = "") {
  if (!roleId) return { bg: "#1a1a1a", color: "#aaa" };
  const index =
    roleId.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) %
    ROLE_PALETTE.length;
  return ROLE_PALETTE[index];
}

// ── Avatar helpers ──
const AV = [
  "#3a3a3a","#2a2a2a","#1f2a3a","#2a1f3a","#3a1f1f",
  "#1f3a2a","#2a3a1f","#3a2a1f","#1f1f3a","#2a3a3a",
  "#3a1f2a","#1f3a3a",
];

function gc(id) {
  let index = 0;
  if (typeof id === "number") index = id % AV.length;
  else if (typeof id === "string" && id.length > 0)
    index = id.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % AV.length;
  return { bg: AV[index] ?? "#333", fg: "#fff" };
}

function AvatarInline({ user, size = 36 }) {
  if (!user) return null;
  const { bg, fg } = gc(user.id ?? 0);
  const initials =
    user.avatar ||
    user.name
      ?.split(" ").filter(Boolean).map((n) => n[0]).join("").slice(0, 2).toUpperCase() ||
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

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export default function EditUserDrawer({ user, roles = [], onClose, onSave }) {
  const [roleId, setRoleId]     = useState(user.role_id ?? null);
  const [roleName, setRoleName] = useState(user.role_title ?? "");
  const [status, setStatus]     = useState(user.status || "active");
  const [section, setSection]   = useState("details");

  // All available permissions from DB, grouped
  const [permissionGroups, setPermissionGroups] = useState([]); // [{ id, name, permissions: [...] }]
  const [loadingPermissions, setLoadingPermissions]   = useState(true);

  // The user's currently assigned permission IDs (UUIDs)
  const [selectedPerms, setSelectedPerms] = useState(new Set());

  const [saving, setSaving]       = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [resending, setResending]       = useState(false);
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

        // allPerms expected shape: array of permissions each with group_id, group_name (or joined)
        // Group them by group_name / group_id
        const groupMap = {};
        const permsArray = Array.isArray(allPerms)
          ? allPerms
          : allPerms?.data ?? allPerms?.permissions ?? [];

        permsArray.forEach((p) => {
          // Support both flat (group_name on permission) and nested shapes
          const gid   = p.group_id   ?? p.group?.id   ?? "other";
          const gname = p.group_name ?? p.group?.name ?? "Other";
          if (!groupMap[gid]) groupMap[gid] = { id: gid, name: gname, permissions: [] };
          groupMap[gid].permissions.push(p);
        });

        setPermissionGroups(Object.values(groupMap).sort((a, b) => a.name.localeCompare(b.name)));

        // userPerms expected shape: { permissions: ["uuid", "uuid", ...] }
        // Could also be an array of permission objects
        const assigned = userPerms?.permissions ?? userPerms ?? [];
        const ids = assigned.map((p) => (typeof p === "string" ? p : p.id ?? p.permission_id));
        setSelectedPerms(new Set(ids));

      } catch (err) {
        console.error("Failed to load permissions:", err);
      } finally {
        if (!cancelled) setLoadingPermissions(false);
      }
    };

    load();
    return () => { cancelled = true; };
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
    const updateRes = await updateUser(user.id, {
      role_id:   roleId,
      status,
      is_active: status === "active",
    });
    console.log("[EditUserDrawer] updateUser response:", updateRes);

    const permRes = await updateUserPermissions(user.id, {
      permissions: Array.from(selectedPerms),
    });
    console.log("[EditUserDrawer] updateUserPermissions response:", permRes);

    onSave?.({ ...user, role_id: roleId, role_title: roleName, status });
    onClose();
  } catch (err) {
    console.error("[EditUserDrawer] handleSave failed:", err);
    // Show the actual backend error message if available
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
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        onClick={onClose}
      />

      {/* DRAWER */}
      <div
        className="fixed top-0 right-0 h-full z-50 flex flex-col"
        style={{
          width: 500,
          backgroundColor: "#080808",
          borderLeft: "1px solid #222",
          boxShadow: "-8px 0 40px rgba(0,0,0,0.8)",
        }}
      >
        {/* HEADER */}
        <div className="px-7 py-5 flex-shrink-0" style={{ borderBottom: "1px solid #1a1a1a" }}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <AvatarInline user={user} size={40} />
              <div>
                <h2 className="text-base font-normal text-white">{user.name}</h2>
                <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>
                  {user.email}
                </p>
              </div>
            </div>
            <button onClick={onClose} className="text-gray-600 hover:text-white text-xl leading-none">
              ✕
            </button>
          </div>

          {/* TABS */}
          <div className="flex gap-1">
            {["details", "permissions"].map((s) => (
              <button
                key={s}
                onClick={() => setSection(s)}
                className="px-4 py-1.5 rounded text-xs capitalize"
                style={{
                  fontFamily: "system-ui,sans-serif",
                  backgroundColor: section === s ? "#fff" : "#111",
                  color: section === s ? "#000" : "#555",
                  border: "1px solid #2a2a2a",
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
                          onClick={() => { setRoleId(r.id); setRoleName(r.name); }}
                          className="px-3 py-2.5 rounded-lg text-left transition-all"
                          style={{
                            fontFamily: "system-ui,sans-serif",
                            backgroundColor: isSelected ? c.bg : "#111",
                            border: `1px solid ${isSelected ? c.color + "55" : "#2a2a2a"}`,
                          }}
                        >
                          <p className="text-sm" style={{ color: isSelected ? c.color : "#555" }}>
                            {r.name}
                          </p>
                          <p className="text-xs text-gray-700 mt-0.5">
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
                    ["active",   "Active",   "#5af07a"],
                    ["inactive", "Inactive", "#f05a5a"],
                  ].map(([v, l, c]) => (
                    <button
                      key={v}
                      onClick={() => setStatus(v)}
                      className="flex-1 py-2.5 rounded text-sm transition-all"
                      style={{
                        fontFamily: "system-ui,sans-serif",
                        backgroundColor: status === v ? c + "18" : "#111",
                        color: status === v ? c : "#555",
                        border: `1px solid ${status === v ? c + "44" : "#2a2a2a"}`,
                      }}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              {/* RESEND INVITE */}
              <div className="space-y-2 pt-2" style={{ borderTop: "1px solid #1a1a1a" }}>
                {resendResult && (
                  <p
                    className="text-xs px-4 py-1.5 rounded"
                    style={{
                      fontFamily: "system-ui,sans-serif",
                      backgroundColor: resendResult === "ok" ? "#0d2b16" : "#2b0d0d",
                      color:           resendResult === "ok" ? "#5af07a" : "#f05a5a",
                      border: `1px solid ${resendResult === "ok" ? "#1e5c30" : "#5c1e1e"}`,
                    }}
                  >
                    {resendResult === "ok"
                      ? `✓ Invite sent to ${user.email}`
                      : "✕ Failed to send invite — check server logs"}
                  </p>
                )}
                <button
                  onClick={handleResendInvite}
                  disabled={resending}
                  className="w-full py-2.5 rounded text-sm text-left px-4 hover:opacity-80"
                  style={{
                    fontFamily: "system-ui,sans-serif",
                    backgroundColor: "#111",
                    color: resending ? "#555" : "#aaa",
                    border: "1px solid #2a2a2a",
                    opacity: resending ? 0.6 : 1,
                  }}
                >
                  {resending ? "⏳ Sending…" : "📧 Resend invite / reset email"}
                </button>
              </div>

              {/* LAST LOGIN */}
              <div
                className="rounded px-4 py-3 flex justify-between"
                style={{ backgroundColor: "#0a0a0a", border: "1px solid #1a1a1a" }}
              >
                <span className="text-xs text-gray-600" style={{ fontFamily: "system-ui,sans-serif" }}>
                  Last login
                </span>
                <span className="text-xs text-gray-400" style={{ fontFamily: "monospace" }}>
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
                            className="text-xs px-2 py-0.5 rounded"
                            style={{
                              fontFamily: "system-ui,sans-serif",
                              color: allSelected ? rc.color : someSelected ? rc.color + "99" : "#444",
                              border: `1px solid ${allSelected ? rc.color + "44" : "#1e1e1e"}`,
                              backgroundColor: allSelected ? rc.color + "11" : "transparent",
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
                                className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer"
                                style={{
                                  fontFamily: "system-ui,sans-serif",
                                  backgroundColor: has ? "#0d0d0d" : "#0a0a0a",
                                  border: `1px solid ${has ? rc.color + "33" : "#141414"}`,
                                }}
                              >
                                {/* Checkbox */}
                                <div
                                  className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0"
                                  style={{
                                    backgroundColor: has ? rc.color + "22" : "transparent",
                                    border: `1.5px solid ${has ? rc.color : "#2a2a2a"}`,
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
                                    style={{ color: has ? "#ccc" : "#444", fontFamily: "system-ui,sans-serif" }}
                                  >
                                    {perm.name}
                                  </p>
                                  <p
                                    className="text-xs mt-0.5 truncate"
                                    style={{ color: has ? "#555" : "#2a2a2a", fontFamily: "monospace" }}
                                  >
                                    {perm.code}
                                  </p>
                                </div>

                                {/* Scope badge */}
                                {perm.scope && perm.scope !== "all" && (
                                  <span
                                    className="text-xs px-1.5 py-0.5 rounded flex-shrink-0"
                                    style={{
                                      fontFamily: "system-ui,sans-serif",
                                      backgroundColor: "#111",
                                      color: "#444",
                                      border: "1px solid #1e1e1e",
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
                    <p className="text-sm text-gray-600" style={{ fontFamily: "system-ui,sans-serif" }}>
                      No permissions available.
                    </p>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* FOOTER */}
        <div className="px-7 py-5 flex-shrink-0" style={{ borderTop: "1px solid #1a1a1a" }}>
          {saveError && (
            <p
              className="text-xs px-3 py-2 rounded mb-3"
              style={{
                fontFamily: "system-ui,sans-serif",
                backgroundColor: "#2b0d0d",
                color: "#f05a5a",
                border: "1px solid #5c1e1e",
              }}
            >
              {saveError}
            </p>
          )}
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded text-sm"
              style={{
                fontFamily: "system-ui,sans-serif",
                backgroundColor: "#111",
                color: "#aaa",
                border: "1px solid #2a2a2a",
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-5 py-2 rounded text-sm font-medium bg-white text-black hover:opacity-80"
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