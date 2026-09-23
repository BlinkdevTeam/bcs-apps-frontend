"use client";
import { useState } from "react";
import { createEmployee } from "../../../services/employeeService";
import { TextInput, Select, DatePicker } from "../../../components/form";
import { IC, IS } from "../../../data/compData";

// ── ADD EMPLOYEE DRAWER ───────────────────────────────────────────────────────
export default function AddEmployeeDrawer({ onClose, onSave, departments, employees, }) {
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

  function set(k, v) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  // ✅ AUTO SET MANAGER FROM DEPARTMENT
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

  function handleSave() {
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

    createEmployee(payload)
      .then((res) => {
        console.log("Employee created:", res.data);
        onClose();
        if (onSave) onSave(res.data);
      })
      .catch((err) => {
        console.error("Error creating employee:", err);
        alert("Failed to create employee. Check console for details.");
      });
  }

  return (
    <>
      <div
        className="fixed inset-0 z-200"
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        onClick={onClose}
      />
      <div
        className="fixed top-0 right-0 h-full z-201 flex flex-col"
        style={{
          width: 480,
          backgroundColor: "#080808",
          borderLeft: "1px solid #222",
          boxShadow: "-8px 0 40px rgba(0,0,0,0.8)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-7 py-5 shrink-0"
          style={{ borderBottom: "1px solid #1a1a1a" }}
        >
          <div>
            <h2 className="text-base font-normal text-white">
              Add New Employee
            </h2>
            <p
              className="text-gray-500 text-sm mt-0.5"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Fill in the details below
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-white transition-colors text-xl cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto px-7 py-6 space-y-5">
          <p
            className="text-xs uppercase tracking-widest text-gray-600 pb-1"
            style={{
              fontFamily: "system-ui, sans-serif",
              borderBottom: "1px solid #1a1a1a",
            }}
          >
            Basic Info
          </p>
          <div className="grid grid-cols-2 gap-4">
            <TextInput
              label="First Name"
              placeholder="Sara"
              className={IC}
              style={IS}
              value={form.firstName}
              onChange={(e) => set("firstName", e.target.value)}
            />
            <TextInput
              label="Middle Name"
              placeholder="Marie"
              className={IC}
              style={IS}
              value={form.middleName}
              onChange={(e) => set("middleName", e.target.value)}
            />
          </div>
          <TextInput
            label="Last Name"
            placeholder="Okafor"
            className={IC}
            style={IS}
            value={form.lastName}
            onChange={(e) => set("lastName", e.target.value)}
          />
          <TextInput
            label="Work Email"
            placeholder="name@company.com"
            className={IC}
            style={IS}
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
          />
          <TextInput
            label="Phone"
            placeholder="+1 212 555 0000"
            className={IC}
            style={IS}
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
          <DatePicker
            label="Date of Birth"
            value={form.dob}
            onChange={(e) => set("dob", e.target.value)}
            maxDate={new Date()} // prevents future birthdates
            className={IC}
            style={IS}
          />

          <p
            className="text-xs uppercase tracking-widest text-gray-600 pt-2 pb-1"
            style={{
              fontFamily: "system-ui, sans-serif",
              borderBottom: "1px solid #1a1a1a",
            }}
          >
            Job Details
          </p>
          <TextInput
            label="Job Title"
            placeholder="Senior Engineer"
            className={IC}
            style={IS}
            value={form.role}
            onChange={(e) => set("role", e.target.value)}
          />
          {/* ✅ Dynamic Department */}
          <Select
            label="Department"
            value={form.dept}
            onChange={(e) => handleDeptChange(e.target.value)}
            options={departments.map((d) => d.name)}
            className={IC}
            style={IS}
          />
          <div className="grid grid-cols-2 gap-4">
            <TextInput
              label="Address"
              placeholder="e.g. Los Baños, Laguna"
              className={IC}
              style={IS}
              value={form.address}
              onChange={(e) => set("address", e.target.value)}
            />
            {/* ✅ Auto Manager */}
            <TextInput
              label="Manager"
              value={form.manager}
              disabled
              className={IC}
              style={IS}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <DatePicker
              label="Start Date"
              value={form.joined}
              onChange={(e) => set("joined", e.target.value)}
              className={IC}
              style={IS}
            />
            <TextInput
              label="Work Schedule"
              placeholder="e.g. Mon–Fri, 9am–5pm"
              className={IC}
              style={IS}
              value={form.schedule}
              onChange={(e) => set("schedule", e.target.value)}
            />
          </div>
          <Select
            label="Employment Type"
            value={form.empType}
            onChange={(e) => set("empType", e.target.value)}
            options={["Full-time", "Part-time", "Contractor", "Intern"]}
            className={IC}
            style={IS}
          />
        </div>

        {/* Footer */}
        <div
          className="px-7 py-5 flex items-center justify-between shrink-0"
          style={{ borderTop: "1px solid #1a1a1a" }}
        >
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded text-sm hover:opacity-80 cursor-pointer"
            style={{
              fontFamily: "system-ui, sans-serif",
              backgroundColor: "#111",
              color: "#aaa",
              border: "1px solid #2a2a2a",
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2.5 rounded text-sm font-medium bg-white text-black hover:opacity-80 cursor-pointer"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            Add Employee ✓
          </button>
        </div>
      </div>
    </>
  );
}