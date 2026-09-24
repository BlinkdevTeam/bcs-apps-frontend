"use client";
import { useState } from "react";
import { createEmployee } from "../../../services/employeeService";
import { TextInput, Select, DatePicker } from "../../../components/form";

// ── ADD EMPLOYEE DRAWER ───────────────────────────────────────────────────────
export default function AddEmployeeDrawer({ onClose, onSave, departments, employees }) {
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    role: "",
    dept: "",
    department_id: null,
    address: "",
    manager: "",
    manager_id: null,
    joined: "",
    schedule: "",
    empType: "Full-time",
  });
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);

  function set(k, v) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  // Auto-fills manager from the selected department's head
  function handleDeptChange(deptName) {
    const dept = departments.find((d) => d.name === deptName);
    const head = employees.find((e) => e.id === dept?.head_id);

    setForm((prev) => ({
      ...prev,
      dept: deptName,
      department_id: dept?.id || null,
      manager: head
        ? `${head.first_name} ${head.last_name}`
        : "No head assigned",
      manager_id: dept?.head_id || null,
    }));
  }

  async function handleSave() {
    setSaving(true);
    setSaveError(null);

    const hire_date = form.joined
      ? new Date(form.joined).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0];

    const payload = {
      employee_code: `EMP${Date.now()}`,
      first_name: form.firstName,
      middle_name: form.middleName || "",
      last_name: form.lastName,
      email: form.email,
      phone: form.phone || null,
      avatar_initials:
        `${form.firstName?.[0] || ""}${form.lastName?.[0] || ""}`.toUpperCase() ||
        "??",
      department_id: form.department_id,
      role_title: form.role,
      employment_type: form.empType,
      status: "active",
      hire_date,
      end_date: null,
      manager_id: form.manager_id,
      dob: form.dob ? new Date(form.dob).toISOString().split("T")[0] : null,
      address: form.address || null,
      schedule: form.schedule || null,
    };

    try {
      const res = await createEmployee(payload);
      onSave?.(res.data);
      onClose();
    } catch (err) {
      console.error("Error creating employee:", err);
      setSaveError(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Failed to create employee. Please try again."
      );
    } finally {
      setSaving(false);
    }
  }

  const canSave = form.firstName.trim() && form.lastName.trim() && form.email.trim();

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
        {/* Header */}
        <div
          className="flex items-center justify-between px-7 py-5 shrink-0"
          style={{ borderBottom: "1px solid #e5e7eb" }}
        >
          <div>
            <h2 className="text-base font-normal text-gray-900">
              Add New Employee
            </h2>
            <p
              className="text-gray-500 text-sm mt-0.5"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              Fill in the details below
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-900 transition-colors text-xl leading-none cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto px-7 py-6 space-y-5">
          {saveError && (
            <p
              className="text-xs px-3 py-2 rounded"
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

          <p
            className="text-xs uppercase tracking-widest text-gray-500 pb-1"
            style={{
              fontFamily: "system-ui,sans-serif",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            Basic Info
          </p>
          <div className="grid grid-cols-2 gap-4">
            <TextInput
              label="First Name"
              placeholder="Sara"
              value={form.firstName}
              onChange={(e) => set("firstName", e.target.value)}
            />
            <TextInput
              label="Middle Name"
              placeholder="Marie"
              value={form.middleName}
              onChange={(e) => set("middleName", e.target.value)}
            />
          </div>
          <TextInput
            label="Last Name"
            placeholder="Okafor"
            value={form.lastName}
            onChange={(e) => set("lastName", e.target.value)}
          />
          <TextInput
            label="Work Email"
            placeholder="name@company.com"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
          />
          <TextInput
            label="Phone"
            placeholder="+1 212 555 0000"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
          <DatePicker
            label="Date of Birth"
            value={form.dob}
            onChange={(e) => set("dob", e.target.value)}
            maxDate={new Date()}
          />

          <p
            className="text-xs uppercase tracking-widest text-gray-500 pt-2 pb-1"
            style={{
              fontFamily: "system-ui,sans-serif",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            Job Details
          </p>
          <TextInput
            label="Job Title"
            placeholder="Senior Engineer"
            value={form.role}
            onChange={(e) => set("role", e.target.value)}
          />
          <Select
            label="Department"
            value={form.dept}
            onChange={(e) => handleDeptChange(e.target.value)}
            options={departments.map((d) => d.name)}
          />
          <div className="grid grid-cols-2 gap-4">
            <TextInput
              label="Address"
              placeholder="e.g. Los Baños, Laguna"
              value={form.address}
              onChange={(e) => set("address", e.target.value)}
            />
            <TextInput
              label="Manager"
              value={form.manager}
              disabled
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <DatePicker
              label="Start Date"
              value={form.joined}
              onChange={(e) => set("joined", e.target.value)}
            />
            <TextInput
              label="Work Schedule"
              placeholder="e.g. Mon–Fri, 9am–5pm"
              value={form.schedule}
              onChange={(e) => set("schedule", e.target.value)}
            />
          </div>
          <Select
            label="Employment Type"
            value={form.empType}
            onChange={(e) => set("empType", e.target.value)}
            options={["Full-time", "Part-time", "Contractor", "Intern"]}
          />
        </div>

        {/* Footer */}
        <div
          className="px-7 py-5 flex items-center justify-between shrink-0"
          style={{ borderTop: "1px solid #e5e7eb" }}
        >
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded text-sm hover:opacity-80 cursor-pointer transition-opacity"
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
            disabled={!canSave || saving}
            className="px-5 py-2.5 rounded text-sm font-medium bg-gray-900 text-white hover:opacity-80 cursor-pointer transition-opacity"
            style={{
              fontFamily: "system-ui,sans-serif",
              opacity: !canSave || saving ? 0.5 : 1,
              cursor: !canSave || saving ? "not-allowed" : "pointer",
            }}
          >
            {saving ? "Adding…" : "Add Employee ✓"}
          </button>
        </div>
      </div>
    </>
  );
}