import { useState, useEffect, useMemo } from "react";
import { updateEmployee } from "../../../services/employeeService";

const EDITABLE = [
  "first_name",
  "middle_name",
  "last_name",
  "email",
  "phone",
  "address",
  "schedule",
  "role_title",
];

// ── Small building blocks ─────────────────────────────────────────────────────
function Field({ label, htmlFor, error, hint, required, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="flex items-center gap-1 text-xs font-medium text-gray-700 mb-1.5"
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} className="text-xs text-red-600 mt-1.5">
          {error}
        </p>
      ) : hint ? (
        <p className="text-xs text-gray-400 mt-1.5">{hint}</p>
      ) : null}
    </div>
  );
}

function TextField({ id, value, onChange, error, icon, ...props }) {
  return (
    <div className="relative">
      {icon && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          {icon}
        </span>
      )}
      <input
        id={id}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-lg bg-white text-sm text-gray-900 placeholder-gray-400 outline-none transition
          border py-2.5 ${icon ? "pl-9" : "pl-3"} pr-3
          ${
            error
              ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100"
              : "border-gray-200 hover:border-gray-300 focus:border-gray-900 focus:ring-4 focus:ring-gray-100"
          }`}
        {...props}
      />
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="space-y-4">
      <h3 className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
        {title}
      </h3>
      {children}
    </section>
  );
}

const Icon = {
  mail: (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  ),
  phone: (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  pin: (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  clock: (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  briefcase: (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  ),
};

// ── EDIT DRAWER ───────────────────────────────────────────────────────────────
export default function EditDrawer({ emp, onClose, onSave }) {
  const [form, setForm] = useState({ ...emp });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [entered, setEntered] = useState(false);

  // slide-in on mount
  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && !saving && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, saving]);

  const dirty = useMemo(
    () => EDITABLE.some((k) => (form[k] ?? "") !== (emp[k] ?? "")),
    [form, emp],
  );

  const initials =
    `${form.first_name?.[0] || ""}${form.last_name?.[0] || ""}`.toUpperCase() ||
    "?";
  const fullName =
    [form.first_name, form.last_name].filter(Boolean).join(" ") || "Employee";

  function set(k, v) {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: null }));
    if (saveError) setSaveError("");
  }

  function validate() {
    const errs = {};
    if (!form.first_name?.trim()) errs.first_name = "First name is required.";
    if (!form.last_name?.trim()) errs.last_name = "Last name is required.";
    if (!form.email?.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email address.";
    if (!form.phone?.trim()) errs.phone = "Phone is required.";
    if (!form.address?.trim()) errs.address = "Address is required.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSave() {
    if (!validate()) return;

    setSaving(true);
    setSaveError("");
    try {
      const payload = {
        first_name: form.first_name,
        middle_name: form.middle_name || "",
        last_name: form.last_name,
        email: form.email,
        phone: form.phone,
        address: form.address,
        schedule: form.schedule || "",
        role_title: form.role_title,
      };

      await updateEmployee(emp.id, payload);
      onSave({ ...form, ...payload });
      onClose();
    } catch (err) {
      console.error("Failed to save employee:", err);
      setSaveError(
        err?.response?.data?.error ||
          err?.response?.data?.message ||
          "Failed to save changes. Please try again.",
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 ${
          entered ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => !saving && onClose()}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Edit employee"
        className={`fixed top-0 right-0 h-full z-[201] flex flex-col bg-white w-[480px] max-w-full
          shadow-[-12px_0_48px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-out ${
            entered ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ fontFamily: "system-ui,sans-serif" }}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-7 py-5 border-b border-gray-100">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold shrink-0">
              {initials}
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                Edit employee
              </p>
              <h2 className="text-base font-semibold text-gray-900 truncate">
                {fullName}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={saving}
            aria-label="Close"
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition cursor-pointer"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </header>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-7 py-6 space-y-8">
          <Section title="Personal">
            <div className="grid grid-cols-2 gap-4">
              <Field label="First name" htmlFor="first_name" error={errors.first_name} required>
                <TextField
                  id="first_name"
                  autoFocus
                  value={form.first_name || ""}
                  error={errors.first_name}
                  onChange={(e) => set("first_name", e.target.value)}
                />
              </Field>
              <Field label="Middle name" htmlFor="middle_name">
                <TextField
                  id="middle_name"
                  value={form.middle_name || ""}
                  onChange={(e) => set("middle_name", e.target.value)}
                />
              </Field>
            </div>
            <Field label="Last name" htmlFor="last_name" error={errors.last_name} required>
              <TextField
                id="last_name"
                value={form.last_name || ""}
                error={errors.last_name}
                onChange={(e) => set("last_name", e.target.value)}
              />
            </Field>
          </Section>

          <Section title="Contact">
            <Field label="Work email" htmlFor="email" error={errors.email} required>
              <TextField
                id="email"
                type="email"
                icon={Icon.mail}
                placeholder="name@company.com"
                value={form.email || ""}
                error={errors.email}
                onChange={(e) => set("email", e.target.value)}
              />
            </Field>
            <Field label="Phone" htmlFor="phone" error={errors.phone} required>
              <TextField
                id="phone"
                type="tel"
                icon={Icon.phone}
                placeholder="+63 900 000 0000"
                value={form.phone || ""}
                error={errors.phone}
                onChange={(e) => set("phone", e.target.value)}
              />
            </Field>
            <Field label="Address" htmlFor="address" error={errors.address} required>
              <TextField
                id="address"
                icon={Icon.pin}
                placeholder="Street, city, province"
                value={form.address || ""}
                error={errors.address}
                onChange={(e) => set("address", e.target.value)}
              />
            </Field>
          </Section>

          <Section title="Work">
            <Field label="Job title" htmlFor="role_title">
              <TextField
                id="role_title"
                icon={Icon.briefcase}
                value={form.role_title || ""}
                onChange={(e) => set("role_title", e.target.value)}
              />
            </Field>
            <Field
              label="Work schedule"
              htmlFor="schedule"
              hint="Shown on the employee's overview."
            >
              <TextField
                id="schedule"
                icon={Icon.clock}
                placeholder="e.g. Mon–Fri, 9am–5pm"
                value={form.schedule || ""}
                onChange={(e) => set("schedule", e.target.value)}
              />
            </Field>
          </Section>
        </div>

        {/* Footer */}
        <footer className="px-7 py-4 border-t border-gray-100 bg-white">
          {saveError && (
            <div
              role="alert"
              className="mb-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700"
            >
              {saveError}
            </div>
          )}
          <div className="flex items-center justify-between gap-3">
            <span
              className={`flex items-center gap-1.5 text-xs transition-opacity ${
                dirty ? "opacity-100 text-amber-600" : "opacity-0"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Unsaved changes
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                disabled={saving}
                className="px-4 py-2.5 rounded-lg text-sm text-gray-600 border border-gray-200 hover:bg-gray-50 transition cursor-pointer disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving || !dirty}
                className="px-5 py-2.5 rounded-lg text-sm font-medium bg-black text-white hover:bg-gray-800 transition cursor-pointer
                  disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {saving && (
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                )}
                {saving ? "Saving…" : "Save changes"}
              </button>
            </div>
          </div>
        </footer>
      </aside>
    </>
  );
}