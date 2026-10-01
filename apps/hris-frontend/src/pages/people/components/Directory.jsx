import { useState, useMemo, useEffect } from "react";
import CompensationConfigTab from "./CompensationConfigTab";
import { getDepartments } from "../../../services/departmentService";

import DirectorySkeletonRows from "./DirectorySkeletonRows";

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
  loading = false,
  onViewProfile,
  // onEditEmployee,
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
  const [departments, setDepartments] = useState([]);

  const [deptsLoading, setDeptsLoading] = useState(true);

  // Fetch departments from backend
  useEffect(() => {
    let mounted = true;
    getDepartments()
      .then((res) => {
        if (mounted) setDepartments(res.data || []);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        if (mounted) setDeptsLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const isLoading = loading || deptsLoading;

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
      const deptName = deptMap[e.department_id];
      return (
        (!q ||
          e.name?.toLowerCase().includes(q) ||
          e.role_title?.toLowerCase().includes(q) ||
          deptName?.toLowerCase().includes(q)) &&
        (deptFilter === "All" || deptName === deptFilter) &&
        (statusFilter === "All" || e.status === statusFilter)
      );
    }),
  [employees, search, deptFilter, statusFilter, deptMap],
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
    <div className="flex flex-1 overflow-hidden">
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px-8 pt-8 pb-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-xs">
              <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                  />
                </svg>
              </span>

              <input
                disabled={isLoading}
                type="text"
                className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 shadow-sm outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-[#e3e3e3] focus:ring-2 focus:ring-[#dadada]/10"
                placeholder="Search..."
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
              value={deptFilter} onChange={(e) => setDeptFilter(e.target.value)}>
              <option value="All">All Departments</option>
              {departments.map((d) => (
                <option key={d.id} value={d.name}>{d.name}</option>
              ))}
            </select>

            <select
              className="px-3 py-2 rounded text-sm text-gray-700 outline-none cursor-pointer"
              style={{
                fontFamily: "system-ui,sans-serif",
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
              }}
              value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              {STATUSES.map((s) => (
                <option key={s} value={s}>{s === "All" ? "All Statuses" : s}</option>
              ))}
            </select>

            <div className="flex-1" />

            <span className="text-gray-400 text-sm">
              {isLoading ? (
                <span className="inline-block h-3.5 w-14 rounded bg-gray-200 animate-pulse align-middle" />
              ) : (
                `${filtered.length} of ${employees.length}`
              )}
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-auto px-8 pb-8">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <table
              className="w-full text-sm border-collapse"
              aria-busy={isLoading}
            >
              <thead className="bg-gray-50/80">
                <tr className="border-b border-gray-200">
                  {["Employee", "Department", "Job Title"].map((h) => (
                    <th
                      key={h}
                      className="px-5 py-3 text-left font-medium text-gray-500"
                      style={{
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                  <th className="w-12 px-5 py-3" />
                </tr>
              </thead>

              <tbody>
                {isLoading ? (
                  <DirectorySkeletonRows count={8} />
                ) : filtered.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-20 text-center">
                      <div className="mx-auto flex max-w-sm flex-col items-center">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="h-5 w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                            />
                          </svg>
                        </div>

                        <p className="text-sm font-medium text-gray-800">
                          No employees found
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          Try adjusting your search or filters.
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  [...filtered]
                  .sort((a, b) =>
                    `${a.first_name} ${a.last_name}`.localeCompare(
                      `${b.first_name} ${b.last_name}`
                    )
                  )
                  .map((emp) => (
                    <tr
                      key={emp.id}
                      className="group cursor-pointer border-b border-gray-100 bg-white transition-colors duration-150 last:border-b-0 hover:bg-gray-50/80"
                      onClick={() => onViewProfile(emp)}
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3.5">
                          <div className="shrink-0">
                            <Avatar emp={emp} size={38} />
                          </div>
                          <div className="min-w-0">
                            <p className="truncate font-medium text-gray-900">
                              {emp.first_name} {emp.last_name}
                            </p>
                            <p className="mt-0.5 truncate text-xs text-gray-500">
                              {emp.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                          {deptMap[emp.department_id] || "—"}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-sm text-gray-700">
                          {emp.role_title || "—"}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-gray-300 transition-all duration-150 group-hover:bg-gray-100 group-hover:text-gray-600">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m7.5 4 5 6-5 6"
                            />
                          </svg>
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
