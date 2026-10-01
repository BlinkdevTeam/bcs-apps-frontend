import { useState, useEffect } from "react";

import StatCard from "./components/StatCard";

import OverviewTab from "./components/OverviewTab";

import AttendanceTab from "./components/AttendanceTab";

import LeaveManagementTab from "./components/LeaveManagementTab";

import LeaveBalancesTab from "./components/LeaveBalancesTab";

import OTUTTab from "./components/OTUTTab";

import OffsetTab from "./components/OffsetTab";

import {
  getAttendanceRecords,
  correctAttendanceRecord,
} from "../../services/attendanceService";

import { getEmployees } from "../../services/employeeService";

import { getDepartments } from "../../services/departmentService";

import {
  mapAttendanceRecord,
  labelToStatus,
  to24Hour,
} from "../../utils/attendanceFormat";

import {
  EMPLOYEES,
  LEAVE_REQUESTS_SEED,
  LEAVE_BALANCES,
  OT_UT_RECORDS,
  ATTENDANCE_STYLE,
  OFFSET_BANK_SEED,
  OFFSET_REQUESTS_SEED,
} from "../../data/compData";

// ── DESIGN TOKENS ─────────────────────────────────────────────────────────────

function fmt(n) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

// ── DYNAMIC CUTOFF ─────────────────────────────────────────────────────────────

function getDynamicCutoffEnd() { const today = new Date(); const year = today.getFullYear(); const month = today.getMonth(); const getCutoffDate = (year, month, cutoffDay) => { const cutoff = new Date(year, month, cutoffDay); const weekday = cutoff.getDay(); let daysBefore; if (weekday === 1 || weekday === 2) { daysBefore = 4; } else if (weekday === 3 || weekday === 4 || weekday === 5) { daysBefore = 2; } else { daysBefore = 2; } const cutoffDate = new Date(cutoff); cutoffDate.setDate(cutoffDate.getDate() - daysBefore); return { cutoff, cutoffDate, }; }; const cutoff15 = getCutoffDate(year, month, 15); const lastDayOfMonth = new Date(year, month + 1, 0).getDate(); const cutoff30Day = Math.min(30, lastDayOfMonth); const cutoff30 = getCutoffDate(year, month, cutoff30Day); const todayDate = new Date(year, month, today.getDate()); if (todayDate <= cutoff15.cutoffDate) { return cutoff15.cutoffDate.toLocaleDateString("en-US", { month: "short", day: "numeric", }); } if (todayDate <= cutoff30.cutoffDate) { return cutoff30.cutoffDate.toLocaleDateString("en-US", { month: "short", day: "numeric", }); } const nextMonth = month === 11 ? 0 : month + 1; const nextYear = month === 11 ? year + 1 : year; const nextCutoff15 = getCutoffDate(nextYear, nextMonth, 15); return nextCutoff15.cutoffDate.toLocaleDateString("en-US", { month: "short", day: "numeric", }); }

// ── STAT CARD ─────────────────────────────────────────────────────────────────

// <StatCard
//   label="Total Annual Payroll"
//   value={fmt(totalPayroll)}
//   sub="All active employees"
// />

// ── TIME & LEAVE PAGE ─────────────────────────────────────────────────────────

export default function TimeAndLeave() {
  const [activeTab, setActiveTab] = useState("overview");

  const [leaveRequests, setLeaveRequests] = useState(LEAVE_REQUESTS_SEED);

  const [otRecords, setOtRecords] = useState(OT_UT_RECORDS);

  const [attendance, setAttendance] = useState([]);

  const [attendanceEmployees, setAttendanceEmployees] = useState([]);

  const [loadingAttendance, setLoadingAttendance] = useState(true);

  const [offsetBank, setOffsetBank] = useState(OFFSET_BANK_SEED);

  const [offsetRequests, setOffsetRequests] = useState(
    OFFSET_REQUESTS_SEED
  );

  const cutoffEnd = getDynamicCutoffEnd();

  useEffect(() => {
    let cancelled = false;

    async function loadAttendanceData() {
      setLoadingAttendance(true);

      try {
        const today = new Date().toISOString().split("T")[0];

        const [empRes, deptRes, attRes] = await Promise.all([
          getEmployees(),
          getDepartments(),
          getAttendanceRecords({ date: today }),
        ]);

        if (cancelled) return;

        const deptMap = {};

        (deptRes.data || []).forEach((d) => {
          deptMap[d.id] = d.name;
        });

        const mappedEmployees = (empRes.data || []).map((e) => ({
          id: e.id,
          name: `${e.first_name || ""} ${e.last_name || ""}`.trim(),
          avatar_initials: e.avatar_initials,
          dept: deptMap[e.department_id] || "—",
          role: e.role_title || e.role_name || "—",
        }));

        const rawRecords = attRes.data?.data || [];

        setAttendanceEmployees(mappedEmployees);

        setAttendance(rawRecords.map(mapAttendanceRecord));
      } catch (err) {
        console.error("Failed to load attendance data:", err);

        setAttendanceEmployees([]);

        setAttendance([]);
      } finally {
        if (!cancelled) {
          setLoadingAttendance(false);
        }
      }
    }

    loadAttendanceData();

    return () => {
      cancelled = true;
    };
  }, []);

  async function correctAttendance(recordId, corrected) {
    if (!recordId) {
      console.warn(
        "No existing attendance record for this employee today — nothing to correct."
      );

      return;
    }

    try {
      const payload = {
        status: labelToStatus(corrected.status),
        time_in: to24Hour(corrected.timeIn),
        break_out: to24Hour(corrected.breakOut),
        break_in: to24Hour(corrected.breakIn),
        time_out: to24Hour(corrected.timeOut),
      };

      const res = await correctAttendanceRecord(recordId, payload);

      const updated = mapAttendanceRecord(res.data.data);

      setAttendance((prev) =>
        prev.map((a) => (a.id === updated.id ? updated : a))
      );
    } catch (err) {
      console.error("Failed to save attendance correction:", err);
    }
  }

  function approveLeave(id) {
    setLeaveRequests((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              status: "Approved",
            }
          : r
      )
    );
  }

  function rejectLeave(id) {
    setLeaveRequests((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              status: "Rejected",
            }
          : r
      )
    );
  }

  function approveOT(idx) {
    setOtRecords((prev) =>
      prev.map((r, i) =>
        i === idx
          ? {
              ...r,
              status: "Approved",
            }
          : r
      )
    );
  }

  const TABS = [
    {
      key: "overview",
      label: "Overview",
    },
    {
      key: "attendance",
      label: "Attendance",
    },
    {
      key: "leave",
      label: "Leave Requests",
    },
    {
      key: "balances",
      label: "Leave Balances",
    },
    {
      key: "otut",
      label: "OT / UT",
    },
    {
      key: "offset",
      label: "Offset",
    },
  ];

  const pendingLeave = leaveRequests.filter(
    (r) => r.status === "Pending"
  ).length;

  const pendingOffset = offsetRequests.filter(
    (r) => r.status === "Pending"
  ).length;

  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <div className="px-8 pt-8 pb-0 shrink-0">
        <div className="flex items-end justify-between mb-7">
          <div>
            <p
              className="text-[11px] font-medium text-gray-400 uppercase tracking-[0.16em] mb-2"
              style={{
                fontFamily: "system-ui,sans-serif",
              }}
            >
              HR Management
            </p>

            <h1
              className="text-[32px] leading-none font-normal text-gray-950"
              style={{
                letterSpacing: "-0.025em",
              }}
            >
              Time & Leave
            </h1>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Today */}
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2.5 shadow-sm">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-50 border border-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-3.5 w-3.5 text-gray-500"
                  aria-hidden="true"
                >
                  <rect
                    width="18"
                    height="18"
                    x="3"
                    y="4"
                    rx="2"
                    ry="2"
                  />
                  <path
                    strokeLinecap="round"
                    d="M16 2v4M8 2v4M3 10h18"
                  />
                </svg>
              </div>

              <div>
                <p
                  className="text-[10px] uppercase tracking-wider text-gray-400 leading-none mb-1"
                  style={{
                    fontFamily: "system-ui,sans-serif",
                  }}
                >
                  Today
                </p>

                <p
                  className="text-xs font-medium text-gray-800 leading-none"
                  style={{
                    fontFamily: "system-ui,sans-serif",
                  }}
                >
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            {/* Cutoff */}
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2.5 shadow-sm">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-50 border border-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-3.5 w-3.5 text-gray-500"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                  />
                </svg>
              </div>

              <div>
                <p
                  className="text-[10px] uppercase tracking-wider text-gray-400 leading-none mb-1"
                  style={{
                    fontFamily: "system-ui,sans-serif",
                  }}
                >
                  Payroll Cutoff
                </p>

                <p
                  className="text-xs font-medium text-gray-800 leading-none"
                  style={{
                    fontFamily: "system-ui,sans-serif",
                  }}
                >
                  Ends{" "}
                  <span className="text-black font-semibold">
                    {cutoffEnd}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex gap-1"
          style={{
            borderBottom: "1px solid #e5e5e5",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className="px-4 py-2.5 text-sm transition-all cursor-pointer"
              style={{
                fontFamily: "system-ui,sans-serif",
                color: activeTab === t.key ? "#000" : "#888",
                borderBottom:
                  activeTab === t.key
                    ? "2px solid #000"
                    : "2px solid transparent",
              }}
            >
              {t.label}

              {t.key === "leave" && pendingLeave > 0 && (
                <span
                  className="ml-1.5 text-xs px-1.5 py-0.5 rounded-full"
                  style={{
                    fontFamily: "monospace",
                    backgroundColor: "#fdf6e8",
                    color: "#b8860b",
                  }}
                >
                  {pendingLeave}
                </span>
              )}

              {t.key === "offset" && pendingOffset > 0 && (
                <span
                  className="ml-1.5 text-xs px-1.5 py-0.5 rounded-full"
                  style={{
                    fontFamily: "monospace",
                    backgroundColor: "#fdf6e8",
                    color: "#b8860b",
                  }}
                >
                  {pendingOffset}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-8 py-6">
        {activeTab === "overview" && (
          <OverviewTab
            attendance={attendance}
            leaveRequests={leaveRequests}
            otRecords={otRecords}
            employees={EMPLOYEES}
            leaveBalances={LEAVE_BALANCES}
            attendanceStyle={ATTENDANCE_STYLE}
            fmt={fmt}
            onApprove={approveLeave}
            onReject={rejectLeave}
          />
        )}

        {activeTab === "attendance" && (
          <AttendanceTab
            attendance={attendance}
            employees={attendanceEmployees}
            loading={loadingAttendance}
            onCorrect={correctAttendance}
          />
        )}

        {activeTab === "leave" && (
          <LeaveManagementTab
            leaveRequests={leaveRequests}
            onApprove={approveLeave}
            onReject={rejectLeave}
          />
        )}

        {activeTab === "balances" && <LeaveBalancesTab />}

        {activeTab === "otut" && (
          <OTUTTab
            otRecords={otRecords}
            onApproveOT={approveOT}
          />
        )}

        {activeTab === "offset" && (
          <OffsetTab
            bank={offsetBank}
            setBank={setOffsetBank}
            requests={offsetRequests}
            setRequests={setOffsetRequests}
          />
        )}
      </div>
    </div>
  );
}
