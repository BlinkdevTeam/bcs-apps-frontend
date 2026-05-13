import { useEffect, useMemo, useState } from "react";
import {
  Avatar,
  ALL_PERMISSIONS,
  ROLE_COLORS,
  ROLE_LABELS,
} from "../../../../data/compData";

import {
  getRoles,
  updateUser,
  getUserPermissions,
  updateUserPermissions,
} from "../../../../services/userService";

export default function EditUserDrawer({
  user,
  onClose,
  onSave,
}) {
  const [roles, setRoles] = useState([]);
  const [loadingRoles, setLoadingRoles] = useState(true);

  const [role, setRole] = useState(user.role || "");
  const [status, setStatus] = useState(
    user.status || "active",
  );

  const [section, setSection] =
    useState("details");

  const [loadingPermissions, setLoadingPermissions] =
    useState(true);

  const [selectedPerms, setSelectedPerms] =
    useState(new Set());

  const [saving, setSaving] = useState(false);

  // ─────────────────────────────────────────────
  // LOAD ROLES
  // ─────────────────────────────────────────────
  useEffect(() => {
    fetchRoles();
  }, []);

  async function fetchRoles() {
    try {
      setLoadingRoles(true);

      const data = await getRoles();

      setRoles(data || []);
    } catch (err) {
      console.error(
        "Failed to load roles:",
        err,
      );
    } finally {
      setLoadingRoles(false);
    }
  }

  // ─────────────────────────────────────────────
  // LOAD USER PERMISSIONS
  // ─────────────────────────────────────────────
  useEffect(() => {
    if (!user?.id) return;

    fetchPermissions();
  }, [user]);

  async function fetchPermissions() {
    try {
      setLoadingPermissions(true);

      const data = await getUserPermissions(
        user.id,
      );

      const perms = data?.permissions || [];

      setSelectedPerms(new Set(perms));
    } catch (err) {
      console.error(
        "Failed to load user permissions:",
        err,
      );
    } finally {
      setLoadingPermissions(false);
    }
  }

  // ─────────────────────────────────────────────
  // GROUP PERMISSIONS
  // ─────────────────────────────────────────────
  const groupedPermissions = useMemo(() => {
    return ALL_PERMISSIONS;
  }, []);

  // ─────────────────────────────────────────────
  // ROLE COLOR
  // ─────────────────────────────────────────────
  const rc = useMemo(() => {
    return (
      ROLE_COLORS[role] || {
        bg: "#1a1a1a",
        color: "#aaa",
      }
    );
  }, [role]);

  // ─────────────────────────────────────────────
  // TOGGLE PERMISSION
  // ─────────────────────────────────────────────
  function togglePerm(perm) {
    setSelectedPerms((prev) => {
      const next = new Set(prev);

      if (next.has(perm)) {
        next.delete(perm);
      } else {
        next.add(perm);
      }

      return next;
    });
  }

  // ─────────────────────────────────────────────
  // SAVE
  // ─────────────────────────────────────────────
  async function handleSave() {
    try {
      setSaving(true);

      // Update basic user info
      await updateUser(user.id, {
        role,
        status,
      });

      // Update permissions
      await updateUserPermissions(user.id, {
        permissions: Array.from(
          selectedPerms,
        ),
      });

      if (onSave) {
        onSave();
      }

      onClose();
    } catch (err) {
      console.error(
        "Failed to update user:",
        err,
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 z-20"
        style={{
          backgroundColor:
            "rgba(0,0,0,0.6)",
        }}
        onClick={onClose}
      />

      {/* DRAWER */}
      <div
        className="fixed top-0 right-0 h-full z-30 flex flex-col"
        style={{
          width: 500,
          backgroundColor: "#080808",
          borderLeft: "1px solid #222",
          boxShadow:
            "-8px 0 40px rgba(0,0,0,0.8)",
        }}
      >
        {/* HEADER */}
        <div
          className="px-7 py-5 flex-shrink-0"
          style={{
            borderBottom:
              "1px solid #1a1a1a",
          }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Avatar user={user} size={40} />

              <div>
                <h2 className="text-base font-normal text-white">
                  {user.name}
                </h2>

                <p
                  className="text-xs text-gray-500 mt-0.5"
                  style={{
                    fontFamily:
                      "system-ui,sans-serif",
                  }}
                >
                  {user.email}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-gray-600 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>

          {/* TABS */}
          <div className="flex gap-1">
            {[
              "details",
              "permissions",
            ].map((s) => (
              <button
                key={s}
                onClick={() =>
                  setSection(s)
                }
                className="px-4 py-1.5 rounded text-xs capitalize"
                style={{
                  fontFamily:
                    "system-ui,sans-serif",

                  backgroundColor:
                    section === s
                      ? "#fff"
                      : "#111",

                  color:
                    section === s
                      ? "#000"
                      : "#555",

                  border:
                    "1px solid #2a2a2a",
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto px-7 py-5">
          {/* DETAILS */}
          {section === "details" && (
            <div className="space-y-5">
              {/* ROLE */}
              <div>
                <label
                  className="block text-xs uppercase tracking-widest text-gray-500 mb-2"
                  style={{
                    fontFamily:
                      "system-ui,sans-serif",
                  }}
                >
                  Role
                </label>

                {loadingRoles ? (
                  <div className="text-sm text-gray-500">
                    Loading roles...
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    {roles.map((r) => {
                      const roleCode =
                        r.code;

                      const c =
                        ROLE_COLORS[
                          roleCode
                        ] || rc;

                      return (
                        <button
                          key={r.id}
                          onClick={() =>
                            setRole(
                              roleCode,
                            )
                          }
                          className="px-3 py-2.5 rounded-lg text-left"
                          style={{
                            fontFamily:
                              "system-ui,sans-serif",

                            backgroundColor:
                              role ===
                              roleCode
                                ? c.bg
                                : "#111",

                            border: `1px solid ${
                              role ===
                              roleCode
                                ? c.color +
                                  "44"
                                : "#2a2a2a"
                            }`,
                          }}
                        >
                          <p
                            className="text-sm"
                            style={{
                              color:
                                role ===
                                roleCode
                                  ? c.color
                                  : "#555",
                            }}
                          >
                            {ROLE_LABELS[
                              roleCode
                            ] ||
                              r.name}
                          </p>

                          <p className="text-xs text-gray-700 mt-0.5">
                            {
                              r.permissions
                                ?.length
                            }{" "}
                            permissions
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
                  style={{
                    fontFamily:
                      "system-ui,sans-serif",
                  }}
                >
                  Account Status
                </label>

                <div className="flex gap-2">
                  {[
                    [
                      "active",
                      "Active",
                      "#5af07a",
                    ],
                    [
                      "inactive",
                      "Inactive",
                      "#f05a5a",
                    ],
                  ].map(
                    ([v, l, c]) => (
                      <button
                        key={v}
                        onClick={() =>
                          setStatus(v)
                        }
                        className="flex-1 py-2.5 rounded text-sm"
                        style={{
                          fontFamily:
                            "system-ui,sans-serif",

                          backgroundColor:
                            status === v
                              ? c + "18"
                              : "#111",

                          color:
                            status === v
                              ? c
                              : "#555",

                          border: `1px solid ${
                            status === v
                              ? c + "44"
                              : "#2a2a2a"
                          }`,
                        }}
                      >
                        {l}
                      </button>
                    ),
                  )}
                </div>
              </div>

              {/* LAST LOGIN */}
              <div
                className="rounded px-4 py-3 flex justify-between"
                style={{
                  backgroundColor:
                    "#0a0a0a",

                  border:
                    "1px solid #1a1a1a",
                }}
              >
                <span
                  className="text-xs text-gray-600"
                  style={{
                    fontFamily:
                      "system-ui,sans-serif",
                  }}
                >
                  Last login
                </span>

                <span
                  className="text-xs text-gray-400"
                  style={{
                    fontFamily:
                      "monospace",
                  }}
                >
                  {user.lastLogin ||
                    "Never"}
                </span>
              </div>
            </div>
          )}

          {/* PERMISSIONS */}
          {section === "permissions" && (
            <>
              {loadingPermissions ? (
                <div className="text-sm text-gray-500">
                  Loading permissions...
                </div>
              ) : (
                <div className="space-y-4">
                  {Object.entries(
                    groupedPermissions,
                  ).map(
                    ([module, perms]) => (
                      <div key={module}>
                        <p
                          className="text-xs uppercase tracking-widest text-gray-600 mb-2"
                          style={{
                            fontFamily:
                              "system-ui,sans-serif",
                          }}
                        >
                          {module}
                        </p>

                        <div className="space-y-1">
                          {perms.map(
                            (perm) => {
                              const has =
                                selectedPerms.has(
                                  perm,
                                );

                              return (
                                <div
                                  key={
                                    perm
                                  }
                                  onClick={() =>
                                    togglePerm(
                                      perm,
                                    )
                                  }
                                  className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer"
                                  style={{
                                    fontFamily:
                                      "system-ui,sans-serif",

                                    backgroundColor:
                                      has
                                        ? "#0d0d0d"
                                        : "#0a0a0a",

                                    border: `1px solid ${
                                      has
                                        ? rc.color +
                                          "33"
                                        : "#141414"
                                    }`,
                                  }}
                                >
                                  <div
                                    className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0"
                                    style={{
                                      backgroundColor:
                                        has
                                          ? "#5af07a22"
                                          : "transparent",

                                      border: `1.5px solid ${
                                        has
                                          ? "#5af07a"
                                          : "#2a2a2a"
                                      }`,
                                    }}
                                  >
                                    {has && (
                                      <span
                                        style={{
                                          fontSize: 8,
                                          color:
                                            "#5af07a",
                                          lineHeight: 1,
                                        }}
                                      >
                                        ✓
                                      </span>
                                    )}
                                  </div>

                                  <span
                                    className="text-xs flex-1"
                                    style={{
                                      fontFamily:
                                        "monospace",

                                      color:
                                        has
                                          ? "#aaa"
                                          : "#3a3a3a",
                                    }}
                                  >
                                    {perm}
                                  </span>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* FOOTER */}
        <div
          className="px-7 py-5 flex items-center justify-between flex-shrink-0"
          style={{
            borderTop:
              "1px solid #1a1a1a",
          }}
        >
          <button
            onClick={onClose}
            className="px-4 py-2 rounded text-sm"
            style={{
              fontFamily:
                "system-ui,sans-serif",

              backgroundColor: "#111",
              color: "#aaa",
              border:
                "1px solid #2a2a2a",
            }}
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={saving}
            className="px-5 py-2 rounded text-sm font-medium bg-white text-black hover:opacity-80"
            style={{
              fontFamily:
                "system-ui,sans-serif",

              opacity: saving ? 0.5 : 1,
            }}
          >
            {saving
              ? "Saving..."
              : "Save Changes ✓"}
          </button>
        </div>
      </div>
    </>
  );
}