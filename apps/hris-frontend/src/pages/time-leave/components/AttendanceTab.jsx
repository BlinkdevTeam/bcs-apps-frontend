import { useState, useMemo } from "react";
import TimeCorrectionModal from "./TimeCorrectionModal";

import {
  DEPTS,
  ATTENDANCE_STYLE,
  breakFlags,
  breakMinutes,
  breakDurLabel,
  Avatar,
} from "../../../data/compData";

export default function AttendanceTab({ attendance, employees, onCorrect }) {
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [breakFilter, setBreakFilter] = useState("All"); // "All" | "Flagged"
  const [correcting, setCorrecting] = useState(null);

  const filtered = useMemo(() => {
    return employees.filter((emp) => {
      const q = search.toLowerCase();
      const a = attendance.find((a) => a.empId === emp.id);
      const flags = breakFlags(a?.breakOut, a?.breakIn);
      return (
        (!q ||
          emp.name.toLowerCase().includes(q) ||
          emp.role.toLowerCase().includes(q)) &&
        (deptFilter === "All" || emp.dept === deptFilter) &&
        (statusFilter === "All" || a?.status === statusFilter) &&
        (breakFilter === "All" || flags.length > 0)
      );
    });
  }, [employees, search, deptFilter, statusFilter, breakFilter, attendance]);

  const flaggedCount = attendance.filter(
    (a) => breakFlags(a.breakOut, a.breakIn).length > 0,
  ).length;

  return (
    <>
      <div className="space-y-5">
        {/* Break flags banner */}
        {flaggedCount > 0 && (
          <div
            className="rounded-lg px-5 py-3 flex items-center justify-between"
            style={{ backgroundColor: "#fdf3e8", border: "1px solid #f0d5a8" }}
          >
            <div className="flex items-center gap-3">
              <span style={{ color: "#b8860b" }}>⚠</span>
              <p
                className="text-sm"
                style={{ fontFamily: "system-ui,sans-serif", color: "#8a6414" }}
              >
                {flaggedCount} employee{flaggedCount > 1 ? "s" : ""} with break
                violations pending review
              </p>
            </div>
            <button
              onClick={() =>
                setBreakFilter((f) => (f === "Flagged" ? "All" : "Flagged"))
              }
              className="text-xs px-3 py-1.5 rounded hover:opacity-80 transition-all"
              style={{
                fontFamily: "system-ui,sans-serif",
                backgroundColor: breakFilter === "Flagged" ? "#e8b84a" : "#fff",
                color: breakFilter === "Flagged" ? "#000" : "#b8860b",
                border: "1px solid #f0d5a8",
              }}
            >
              {breakFilter === "Flagged" ? "Show All" : "Show Flagged"}
            </button>
          </div>
        )}

        {/* Filters */}
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
              placeholder="Search employee…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            className="px-3 py-2 rounded text-sm text-gray-700 outline-none"
            style={{
              fontFamily: "system-ui,sans-serif",
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
            }}
            value={deptFilter}
            onChange={(e) => setDeptFilter(e.target.value)}
          >
            {DEPTS.map((d) => (
              <option key={d}>{d === "All" ? "All Departments" : d}</option>
            ))}
          </select>
          <select
            className="px-3 py-2 rounded text-sm text-gray-700 outline-none"
            style={{
              fontFamily: "system-ui,sans-serif",
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
            }}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {["All", "Present", "Remote", "Late", "Absent", "On Leave"].map(
              (s) => (
                <option key={s}>{s === "All" ? "All Statuses" : s}</option>
              ),
            )}
          </select>
          <div className="flex-1" />
          <span
            className="text-gray-500 text-sm"
            style={{ fontFamily: "monospace" }}
          >
            {filtered.length} of {employees.length}
          </span>
        </div>

        {/* Table */}
        <div
          className="rounded-lg overflow-x-auto"
          style={{ border: "1px solid #e5e7eb" }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr
                style={{
                  backgroundColor: "#fafafa",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                {[
                  "Employee",
                  "Dept",
                  "Status",
                  "Time In",
                  "Break Out",
                  "Break In",
                  "Break Dur.",
                  "Time Out",
                  "Net Hours",
                  "",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-3 py-3 text-left font-normal text-gray-500 whitespace-nowrap"
                    style={{
                      fontFamily: "system-ui,sans-serif",
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((emp, i) => {
                const a = attendance.find((a) => a.empId === emp.id);
                const st =
                  ATTENDANCE_STYLE[a?.status] || ATTENDANCE_STYLE.Absent;
                const flags = breakFlags(a?.breakOut, a?.breakIn);
                const dur = breakMinutes(a?.breakOut, a?.breakIn);
                const hasFlag = flags.length > 0;

                return (
                  <tr
                    key={emp.id}
                    className="group"
                    style={{
                      borderBottom:
                        i < filtered.length - 1 ? "1px solid #f0f0f0" : "none",
                      backgroundColor: hasFlag ? "#fdf8ee" : "#fff",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = hasFlag
                        ? "#fbf1da"
                        : "#fafafa")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = hasFlag
                        ? "#fdf8ee"
                        : "#fff")
                    }
                  >
                    {/* Employee */}
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        <Avatar emp={emp} size={28} />
                        <div>
                          <p
                            className="text-gray-900 text-sm"
                            style={{ fontFamily: "system-ui,sans-serif" }}
                          >
                            {emp.name}
                          </p>
                          <p
                            className="text-gray-500 text-xs"
                            style={{ fontFamily: "system-ui,sans-serif" }}
                          >
                            {emp.role}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Dept */}
                    <td
                      className="px-3 py-3 text-gray-500 text-xs"
                      style={{ fontFamily: "system-ui,sans-serif" }}
                    >
                      {emp.dept}
                    </td>

                    {/* Status */}
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-1">
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: st.dot }}
                        />
                        <span
                          className="text-xs px-1.5 py-0.5 rounded-full whitespace-nowrap"
                          style={{
                            fontFamily: "system-ui,sans-serif",
                            backgroundColor: st.bg,
                            color: st.color,
                          }}
                        >
                          {a?.status || "—"}
                        </span>
                        {a?.correctedAt && (
                          <span
                            className="text-gray-400 text-xs"
                            title="Corrected"
                          >
                            ✎
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Time In */}
                    <td
                      className="px-3 py-3 text-gray-700 text-xs whitespace-nowrap"
                      style={{ fontFamily: "monospace" }}
                    >
                      {a?.timeIn || "—"}
                    </td>

                    {/* Break Out */}
                    <td className="px-3 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <span
                          className="text-xs"
                          style={{
                            fontFamily: "monospace",
                            color: flags.includes("early") ? "#b8860b" : "#999",
                          }}
                        >
                          {a?.breakOut || "—"}
                        </span>
                        {flags.includes("early") && (
                          <span
                            title="Before 12PM"
                            style={{ fontSize: 10, color: "#b8860b" }}
                          >
                            ⚠
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Break In */}
                    <td className="px-3 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <span
                          className="text-xs"
                          style={{
                            fontFamily: "monospace",
                            color: flags.includes("exceeded")
                              ? "#dc2626"
                              : "#999",
                          }}
                        >
                          {a?.breakIn || "—"}
                        </span>
                        {flags.includes("exceeded") && (
                          <span
                            title="Exceeded 1hr"
                            style={{ fontSize: 10, color: "#dc2626" }}
                          >
                            ⚠
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Break Duration */}
                    <td className="px-3 py-3">
                      {dur !== null ? (
                        <span
                          className="text-xs px-1.5 py-0.5 rounded whitespace-nowrap"
                          style={{
                            fontFamily: "monospace",
                            backgroundColor:
                              dur > 60
                                ? "#fdecec"
                                : dur === 60
                                  ? "#e9f9ee"
                                  : "#f5f5f5",
                            color:
                              dur > 60
                                ? "#dc2626"
                                : dur === 60
                                  ? "#16a34a"
                                  : "#666",
                          }}
                        >
                          {breakDurLabel(a?.breakOut, a?.breakIn)}
                        </span>
                      ) : (
                        <span className="text-gray-400 text-xs">—</span>
                      )}
                    </td>

                    {/* Time Out */}
                    <td
                      className="px-3 py-3 text-gray-500 text-xs whitespace-nowrap"
                      style={{ fontFamily: "monospace" }}
                    >
                      {a?.timeOut || "—"}
                    </td>

                    {/* Net Hours */}
                    <td
                      className="px-3 py-3 text-gray-500 text-xs whitespace-nowrap"
                      style={{ fontFamily: "monospace" }}
                    >
                      {a?.hours ? `${a.hours}h` : "—"}
                    </td>

                    {/* Actions */}
                    <td className="px-3 py-3">
                      <button
                        onClick={() => setCorrecting({ emp, record: a })}
                        className="text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                        style={{
                          fontFamily: "system-ui,sans-serif",
                          backgroundColor: "#f5f5f5",
                          color: "#555",
                          border: "1px solid #e5e7eb",
                        }}
                      >
                        ✎ Correct
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {correcting && (
        <TimeCorrectionModal
          emp={correcting.emp}
          record={correcting.record}
          onClose={() => setCorrecting(false)}
          onSave={(corrected) => {
            onCorrect(correcting.record?.id, corrected);
            setCorrecting(null);
          }}
        />
      )}
    </>
  );
}
