import { useState, useEffect } from "react";
import { IC, IS } from "../../../../data/compData";
import axios from "axios";

function CreateUserDrawer({ onClose, onSave, CURRENT_USER_ROLE }) {
  const [employees, setEmployees] = useState([]);
  const [roles, setRoles] = useState([]);
  const [departments, setDepartments] = useState([]);

const [form, setForm] = useState({
  employeeId: "",
  role: "",
});
  
      const selectedEmployee =
  employees.find(
    (e) => String(e.id) === String(form.employeeId)
  ) || null;
  const selectedRole =
  roles.find((r) => String(r.id) === String(form.role)) || null;
  const [sent, setSent] = useState(false);

    // Fetch employees from API
  useEffect(() => {
  const fetchEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/employees");
      setEmployees(res.data);
    } catch (err) {
      console.error("Failed to fetch employees:", err);
    }
    };

  fetchEmployees();
}, []);

  // Fetch roles from API
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/roles");
        setRoles(res.data);
        // Default role
        if (!form.role && res.data.length > 0) setForm(f => ({ ...f, role: res.data[0].id }));
      } catch (err) {
        console.error("Failed to fetch roles:", err);
      }
    };
    fetchRoles();
  }, []);

  // Fetch departments from API
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/departments");
        setDepartments(res.data);
        // Default department
        if (!form.dept && res.data.length > 0) setForm(f => ({ ...f, dept: res.data[0].id }));
      } catch (err) {
        console.error("Failed to fetch departments:", err);
      }
    };
    fetchDepartments();
  }, []);

  function setField(k, v) {
    setForm(f => ({ ...f, [k]: v }));
  }

  const canSave = form.employeeId && form.role;

function handleSave() {
  if (!canSave) return;

  onSave({
    employeeId: form.employeeId,
    role: form.role,
    dept: form.dept,
  });

  setSent(true);
}

  if (sent)
    return (
      <>
        <div
          className="fixed inset-0 z-20"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          onClick={onClose}
        />
        <div
          className="fixed top-0 right-0 h-full z-30 flex flex-col items-center justify-center px-10"
          style={{ width: 460, backgroundColor: "#080808", borderLeft: "1px solid #222" }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
            style={{ backgroundColor: "#0a1a0a", border: "1px solid #1e3a1e" }}
          >
            <span className="text-2xl">✉️</span>
          </div>
          <h3 className="text-lg font-normal text-white mb-2 text-center">Invite sent</h3>
          <p
            className="text-sm text-gray-500 text-center leading-relaxed mb-6"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            An invite email was sent to{" "}
            <strong className="text-white">
  {selectedEmployee?.email || "—"}
</strong>. The link expires in{" "}
            <strong className="text-white">72 hours</strong>.
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded text-sm bg-white text-black hover:opacity-80"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            Done
          </button>
        </div>
      </>
    );

  return (
    <>
      <div
        className="fixed inset-0 z-[200]"
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        onClick={onClose}
      />
      <div
        className="fixed top-0 right-0 h-full z-[201] flex flex-col"
        style={{
          width: 460,
          backgroundColor: "#080808",
          borderLeft: "1px solid #222",
          boxShadow: "-8px 0 40px rgba(0,0,0,0.8)",
        }}
      >
        <div
          className="flex items-center justify-between px-7 py-5 flex-shrink-0"
          style={{ borderBottom: "1px solid #1a1a1a" }}
        >
          <div>
            <p
              className="text-xs uppercase tracking-widest text-gray-500 mb-0.5"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              User Management
            </p>
            <h2 className="text-lg font-normal text-white">Invite New User</h2>
          </div>
          <button onClick={onClose} className="text-gray-600 hover:text-white text-xl">
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-7 py-6 space-y-5">
          <div
            className="rounded-lg px-4 py-3 flex items-start gap-2"
            style={{ backgroundColor: "#0a1a2a", border: "1px solid #1e3a5a" }}
          >
            <span className="text-blue-400 text-xs flex-shrink-0 mt-0.5">ℹ</span>
            <p
              className="text-xs text-gray-400"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              An invite email will be sent. The employee sets their own password via a
              secure link valid for <strong className="text-white">72 hours</strong>.
            </p>
          </div>

          {/* Name & Email */}
          <div>
  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1.5">
    Select Employee
  </label>

  <select
    className={IC}
    style={IS}
    value={form.employeeId}
    onChange={(e) => setField("employeeId", e.target.value)}
  >
    <option value="">Select employee...</option>

    {employees.map((emp) => (
      <option key={emp.id} value={emp.id}>
        {emp.first_name} {emp.last_name} ({emp.email})
      </option>
    ))}
  </select>
</div>

          {/* Department & Role */}
          <div className="grid grid-cols-2 gap-3">
            <div>
  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1.5">
    Department
  </label>

<div className={IC} style={IS}>
  {departments.find(
    (d) => d.id === selectedEmployee?.department_id
  )?.name || "—"}
</div>
</div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1.5">
                Role
              </label>
              <select
                className={IC}
                style={IS}
                value={form.role}
                onChange={(e) => setField("role", e.target.value)}
                // disabled={CURRENT_USER_ROLE !== "super_admin"}
              >
                {roles.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Permissions Preview */}
          <div className="rounded-lg p-4" style={{ backgroundColor: "#0d0d0d", border: "1px solid #1e1e1e" }}>
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-3">
              Permissions for{" "}
              <span className="text-white">
                {selectedRole?.name || "—"}
              </span>
            </p>
            <div className="space-y-1.5 max-h-40 overflow-y-auto">
              {(selectedRole?.permissions || [])
                .slice(0, 12)
                .map((permission, index) => (
                  <div
                    key={permission.id || permission.name || index}
                    className="flex items-center gap-2"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#4ade80" }}
                    />

                    <span
                      className="text-xs text-gray-500"
                      style={{ fontFamily: "monospace" }}
                    >
                      {permission.name || permission}
                    </span>
                  </div>
              ))}
              {(selectedRole?.permissions?.length || 0) > 12 && (
                <p className="text-xs text-gray-700">
                  +{(selectedRole?.permissions?.length || 0) - 12} more permissions
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div
          className="px-7 py-5 flex items-center justify-between flex-shrink-0"
          style={{ borderTop: "1px solid #1a1a1a" }}
        >
          <button
            onClick={onClose}
            className="px-4 py-2 rounded text-sm"
            style={{ backgroundColor: "#111", color: "#aaa", border: "1px solid #2a2a2a" }}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!canSave}
            className="px-5 py-2 rounded text-sm font-medium hover:opacity-80"
            style={{
              backgroundColor: canSave ? "#fff" : "#1a1a1a",
              color: canSave ? "#000" : "#444",
              cursor: canSave ? "pointer" : "not-allowed",
            }}
          >
            Send Invite ✉
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateUserDrawer;