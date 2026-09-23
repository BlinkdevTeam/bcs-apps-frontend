import { useState } from "react";
import { Avatar, Field, IC, IS } from "../../../data/compData";
import { updateEmployee } from "../../../services/employeeService";

// ── EDIT DRAWER ───────────────────────────────────────────────────────────────
export default function EditDrawer({ emp, onClose, onSave }) {
  const [form, setForm] = useState({ ...emp });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  function set(k, v) {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: null }));
  }

  function validate() {
    const errs = {};
    if (!form.first_name?.trim()) errs.first_name = "First name is required.";
    if (!form.last_name?.trim()) errs.last_name = "Last name is required.";
    if (!form.email?.trim()) errs.email = "Email is required.";
    if (!form.phone?.trim()) errs.phone = "Phone is required.";
    if (!form.address?.trim()) errs.address = "Address is required.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  // ── SAVE CHANGES ─────────────────────────────────────────────────
  async function handleSave() {
    if (!validate()) return;

    setSaving(true);
    try {
      const payload = {
        first_name: form.first_name,
        middle_name: form.middle_name || "",
        last_name: form.last_name,
        email: form.email,
        phone: form.phone,
        address: form.address,
        role_title: form.role_title,
      };

      await updateEmployee(emp.id, payload);

      // Update parent state (frontend)
      onSave({ ...form, ...payload });

      onClose();
    } catch (err) {
      console.error("Failed to save employee:", err);
      alert("Failed to save changes. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-20"
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full z-50 flex flex-col"
        style={{
          width: 480,
          backgroundColor: "#080808",
          borderLeft: "1px solid #222",
          boxShadow: "-8px 0 40px rgba(0,0,0,0.8)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5" style={{ borderBottom: "1px solid #1a1a1a" }}>
          <div className="flex items-center gap-3">
            <Avatar emp={emp} size={38} />
            <div>
              <h2 className="text-base font-normal text-white">Edit Employee</h2>
              <p className="text-gray-500 text-sm" style={{ fontFamily: "system-ui,sans-serif" }}>
                {emp.first_name} {emp.last_name}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-600 hover:text-white text-xl cursor-pointer">✕</button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-7 py-6 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <Field label="First Name">
              <input
                className={IC}
                style={{ ...IS, borderColor: errors.first_name ? "#dc2626" : IS.border }}
                value={form.first_name || ""}
                onChange={(e) => set("first_name", e.target.value)}
              />
              {errors.first_name && <p className="text-xs text-red-500 mt-1">{errors.first_name}</p>}
            </Field>
            <Field label="Middle Name">
              <input
                className={IC}
                style={IS}
                value={form.middle_name || ""}
                onChange={(e) => set("middle_name", e.target.value)}
              />
            </Field>
          </div>

          <Field label="Last Name">
            <input
              className={IC}
              style={{ ...IS, borderColor: errors.last_name ? "#dc2626" : IS.border }}
              value={form.last_name || ""}
              onChange={(e) => set("last_name", e.target.value)}
            />
            {errors.last_name && <p className="text-xs text-red-500 mt-1">{errors.last_name}</p>}
          </Field>

          <Field label="Work Email">
            <input
              className={IC}
              style={{ ...IS, borderColor: errors.email ? "#dc2626" : IS.border }}
              value={form.email || ""}
              onChange={(e) => set("email", e.target.value)}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </Field>

          <Field label="Phone">
            <input
              className={IC}
              style={{ ...IS, borderColor: errors.phone ? "#dc2626" : IS.border }}
              value={form.phone || ""}
              onChange={(e) => set("phone", e.target.value)}
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </Field>

          <Field label="Address">
            <input
              className={IC}
              style={{ ...IS, borderColor: errors.address ? "#dc2626" : IS.border }}
              value={form.address || ""}
              onChange={(e) => set("address", e.target.value)}
            />
            {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
          </Field>

          <Field label="Job Title">
            <input
              className={IC}
              style={IS}
              value={form.role_title || ""}
              onChange={(e) => set("role_title", e.target.value)}
            />
          </Field>
        </div>

        {/* Footer */}
        <div className="px-7 py-5 flex items-center justify-between" style={{ borderTop: "1px solid #1a1a1a" }}>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded text-sm hover:opacity-80 cursor-pointer"
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
            className="px-5 py-2.5 rounded text-sm font-medium bg-white text-black hover:opacity-80 cursor-pointer"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            {saving ? "Saving..." : "Save Changes ✓"}
          </button>
        </div>
      </div>
    </>
  );
}