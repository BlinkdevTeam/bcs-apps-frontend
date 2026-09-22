import { useState, useMemo, useEffect } from "react";
import CompensationConfigTab from "./CompensationConfigTab";
import { getDepartments } from "../../../services/departmentService";

// import { EMPLOYEES } from "../../../data/compData";

const STATUSES = ["All", "Active", "On Leave", "Inactive"];

function Avatar({ emp, size = 36 }) {
  const { bg, fg } = gc(emp.id);
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
      {emp.avatar || emp.first_name?.[0] + emp.last_name?.[0]}
    </div>
  );
}

const SS = {
  Active: { bg: "#0f1f0f", color: "#5af07a" },
  "On Leave": { bg: "#1f1a0f", color: "#f0c85a" },
  Inactive: { bg: "#1f0f0f", color: "#f05a5a" },
};

const AV = [
  "#ffffff",
  "#cccccc",
  "#999999",
  "#777777",
  "#555555",
  "#444444",
  "#ffffff",
  "#bbbbbb",
  "#888888",
  "#666666",
  "#aaaaaa",
  "#333333",
];

function gc(id) {
  const safeId = id ?? 0; // fallback to 0 if undefined
  const bg = AV[safeId % AV.length] ?? "#333"; // fallback color
  const fg = ["#fff", "#ddd", "#eee", "#ccc", "#bbb"].some((x) =>
    bg.startsWith(x.slice(0, 4)),
  )
    ? "#000"
    : "#fff";
  return { bg, fg };
}

export default function Directory({
  employees,
  onViewProfile,
  onEditEmployee,
  peopleView,
  onSwitchView,
  basicPaySets,
  contributionSets,
  benefitsSets,
  onUpdateBasicPay,
  onUpdateContributions,
  onUpdateBenefits,
}) {
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedEmp, setSelectedEmp] = useState(null);
  const [departments, setDepartments] = useState([]);

  // Fetch departments from backend
  useEffect(() => {
    let mounted = true;
    getDepartments()
      .then((res) => {
        if (mounted) setDepartments(res.data || []);
      })
      .catch((err) => console.error(err));
    return () => (mounted = false);
  }, []);

  // Map department_id -> name
  const deptMap = useMemo(() => {
    const map = {};
    departments.forEach((d) => {
      map[d.id] = d.name;
    });
    return map;
  }, [departments]);

  // Filter employees based on search and filters
  const filtered = useMemo(
    () =>
      employees.filter((e) => {
        const q = search.toLowerCase();
        return (
          (!q ||
            e.name?.toLowerCase().includes(q) ||
            e.role_title?.toLowerCase().includes(q) ||
            e.department?.toLowerCase().includes(q)) &&
          (deptFilter === "All" || e.department === deptFilter) &&
          (statusFilter === "All" || e.status === statusFilter)
        );
      }),
    [employees, search, deptFilter, statusFilter],
  );

  if (peopleView === "config") {
    return (
      <CompensationConfigTab
        basicPaySets={basicPaySets}
        contributionSets={contributionSets}
        benefitsSets={benefitsSets}
        onUpdateBasicPay={onUpdateBasicPay}
        onUpdateContributions={onUpdateContributions}
        onUpdateBenefits={onUpdateBenefits}
        onSwitchView={onSwitchView}
      />
    );
  }

  return (
    <div className="flex flex-1 overflow-hidden bg-white h-screen">
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px-8 pt-8 pb-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-xs">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                🔍
              </span>

              <input
                className="w-full pl-9 pr-4 py-2 rounded text-sm text-gray-900 placeholder-gray-400 outline-none"
                style={{
                  fontFamily: "system-ui,sans-serif",
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                }}
                placeholder="Search…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              className="px-3 py-2 rounded text-sm text-gray-700 outline-none cursor-pointer"
              style={{
                fontFamily: "system-ui,sans-serif",
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
              }}
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
            >
              <option>All Departments</option>
              {departments.map((d) => (
                <option key={d.id}>{d.name}</option>
              ))}
            </select>

            <select
              className="px-3 py-2 rounded text-sm text-gray-700 outline-none cursor-pointer"
              style={{
                fontFamily: "system-ui,sans-serif",
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
              }}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {STATUSES.map((s) => (
                <option key={s}>
                  {s === "All" ? "All Statuses" : s}
                </option>
              ))}
            </select>

            <div className="flex-1" />

            <span className="text-gray-400 text-sm">
              {filtered.length} of {employees.length}
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-auto px-8 pb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                {[
                  "Employee",
                  "Department",
                  "Role",
                  "Location",
                  "Joined",
                ].map((h) => (
                  <th
                    key={h}
                    className="pb-3 pr-6 text-left font-normal text-gray-500"
                    style={{
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {h}
                  </th>
                ))}
                <th />
              </tr>
            </thead>

            <tbody>
              {filtered.map((emp) => (
                <tr
                  key={emp.id}
                  className="cursor-pointer group transition-colors hover:bg-gray-50"
                  onClick={() =>
                    setSelectedEmp(
                      selectedEmp?.id === emp.id ? null : emp
                    )
                  }
                  style={{
                    borderBottom: "1px solid #f0f0f0",
                    backgroundColor:
                      selectedEmp?.id === emp.id ? "#f8f8f8" : "#fff",
                  }}
                >
                  <td className="py-3 pr-6">
                    <div className="flex items-center gap-3">
                      <Avatar emp={emp} size={34} />

                      <div>
                        <p className="text-gray-900 font-medium">
                          {emp.first_name} {emp.last_name}
                        </p>

                        <p className="text-gray-500 text-xs">
                          {emp.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="py-3 pr-6 text-gray-600">
                    {deptMap[emp.department_id] || "—"}
                  </td>

                  <td className="py-3 pr-6 text-gray-700">
                    {emp.role_title}
                  </td>

                  <td className="py-3 pr-6 text-gray-600">
                    {emp.location}
                  </td>

                  <td className="py-3 pr-6 text-gray-500 text-xs">
                    {emp.hire_date}
                  </td>

                  <td className="py-3">
                    <span className="opacity-0 group-hover:opacity-100 text-gray-400 text-sm">
                      →
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedEmp && (
        <div
          className="w-72 shrink-0 border-l overflow-y-auto"
          style={{
            backgroundColor: "#fff",
            borderColor: "#e5e7eb",
          }}
        >
          <div className="p-6">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setSelectedEmp(null)}
                className="text-gray-400 hover:text-gray-900 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col items-center text-center mb-5">
              <Avatar emp={selectedEmp} size={56} />

              <h2 className="text-lg font-normal text-gray-900 mt-3 mb-1">
                {selectedEmp.first_name} {selectedEmp.last_name}
              </h2>

              <p className="text-gray-500 text-sm">
                {selectedEmp.role_title}
              </p>

              <span
                className="text-xs px-3 py-1 rounded-full mt-2"
                style={{
                  backgroundColor: "#f3f4f6",
                  color: "#4b5563",
                }}
              >
                {selectedEmp.status}
              </span>
            </div>

            <div
              className="border-b mb-4"
              style={{ borderColor: "#e5e7eb" }}
            />

            <div className="space-y-3">
              {[
                ["Department", selectedEmp.department],
                ["Location", selectedEmp.location],
                ["Manager", selectedEmp.manager],
                ["Joined", selectedEmp.hire_date],
                ["Salary", selectedEmp.salary],
                ["Email", selectedEmp.email],
              ].map(([l, v]) => (
                <div key={l}>
                  <p className="text-gray-400 text-xs uppercase tracking-widest">
                    {l}
                  </p>

                  <p className="text-gray-800 text-sm">
                    {v}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="border-b my-4"
              style={{ borderColor: "#e5e7eb" }}
            />

            <div className="space-y-2">
              <button
                onClick={() => onViewProfile(selectedEmp)}
                className="w-full py-2.5 rounded text-sm bg-black text-white hover:opacity-80 font-medium cursor-pointer"
              >
                View Full Profile
              </button>

              <button
                onClick={() => onEditEmployee(selectedEmp)}
                className="w-full py-2.5 rounded text-sm hover:bg-gray-50 cursor-pointer"
                style={{
                  backgroundColor: "#fff",
                  color: "#374151",
                  border: "1px solid #e5e7eb",
                }}
              >
                Edit Employee
              </button>

              <button
                className="w-full py-2.5 rounded text-sm hover:bg-red-50 cursor-pointer"
                style={{
                  backgroundColor: "#fff",
                  color: "#dc2626",
                  border: "1px solid #fecaca",
                }}
              >
                Deactivate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
