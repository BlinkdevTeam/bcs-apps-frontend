import { useState, useEffect } from "react";
import StatCard from "./components/StatCard";
import OverviewTab from "./components/OverviewTab";
import AttendanceTab from "./components/AttendanceTab";
import LeaveManagementTab from "./components/LeaveManagementTab";
import LeaveBalancesTab from "./components/LeaveBalancesTab";
import OTUTTab from "./components/OTUTTab";
import OffsetTab from "./components/OffsetTab";

import { getAttendanceRecords, correctAttendanceRecord } from "../../services/attendanceService";
import { getEmployees } from "../../services/employeeService";
import { getDepartments } from "../../services/departmentService";
import { mapAttendanceRecord, labelToStatus, to24Hour } from "../../utils/attendanceFormat";

import {
  EMPLOYEES, LEAVE_REQUESTS_SEED, LEAVE_BALANCES, OT_UT_RECORDS, ATTENDANCE_STYLE, OFFSET_BANK_SEED, OFFSET_REQUESTS_SEED, CURRENT_CUTOFF_END 
} from "../../data/compData";

// ── DESIGN TOKENS ─────────────────────────────────────────────────────────────

function fmt(n){ return n.toLocaleString("en-US",{minimumFractionDigits:1,maximumFractionDigits:1}); }

// ── STAT CARD ─────────────────────────────────────────────────────────────────
<StatCard
    label="Total Annual Payroll"
    // value={fmt(totalPayroll)}
    sub="All active employees"
  />

// ── TIME & LEAVE PAGE ─────────────────────────────────────────────────────────
export default function TimeAndLeave() {
  const [activeTab,     setActiveTab]     = useState("overview");
  const [leaveRequests, setLeaveRequests] = useState(LEAVE_REQUESTS_SEED);
  const [otRecords,     setOtRecords]     = useState(OT_UT_RECORDS);
  const [attendance, setAttendance] = useState([]);
  const [attendanceEmployees, setAttendanceEmployees] = useState([]);
  const [loadingAttendance, setLoadingAttendance] = useState(true);
  const [offsetBank,    setOffsetBank]    = useState(OFFSET_BANK_SEED);
  const [offsetRequests, setOffsetRequests] = useState(OFFSET_REQUESTS_SEED);
  
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
      (deptRes.data || []).forEach((d) => { deptMap[d.id] = d.name; });

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
      if (!cancelled) setLoadingAttendance(false);
    }
  }

  loadAttendanceData();
  return () => { cancelled = true; };
}, []);

async function correctAttendance(recordId, corrected) {
  if (!recordId) {
    console.warn("No existing attendance record for this employee today — nothing to correct.");
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
    setAttendance((prev) => prev.map((a) => (a.id === updated.id ? updated : a)));
  } catch (err) {
    console.error("Failed to save attendance correction:", err);
  }
}

  function approveLeave(id)  { setLeaveRequests(p=>p.map(r=>r.id===id?{...r,status:"Approved"}:r)); }
  function rejectLeave(id)   { setLeaveRequests(p=>p.map(r=>r.id===id?{...r,status:"Rejected"}:r)); }
  function approveOT(idx)    { setOtRecords(p=>p.map((r,i)=>i===idx?{...r,status:"Approved"}:r)); }

  const TABS = [
    { key:"overview",   label:"Overview"      },
    { key:"attendance", label:"Attendance"     },
    { key:"leave",      label:"Leave Requests" },
    { key:"balances",   label:"Leave Balances" },
    { key:"otut",       label:"OT / UT"        },
    { key:"offset",     label:"Offset"         },
  ];

  const pendingLeave  = leaveRequests.filter(r=>r.status==="Pending").length;
  const pendingOffset = offsetRequests.filter(r=>r.status==="Pending").length;

  return (
  <div className="flex-1 overflow-hidden flex flex-col bg-white">
    <div className="px-8 pt-8 pb-0 flex-shrink-0">
      <div className="flex items-end justify-between mb-6">
        <div>
          <p
            className="text-gray-500 text-xs uppercase tracking-widest mb-1"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            HR Management
          </p>
          <h1
            className="text-3xl font-normal text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Time & Leave
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <div
            className="rounded-lg px-4 py-2 flex items-center gap-2 bg-green-50 border border-green-100"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span
              className="text-xs text-gray-600"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              Today · Mon, Mar 2, 2026
            </span>
          </div>

          <div className="rounded-lg px-4 py-2 bg-gray-50 border border-gray-200">
            <span
              className="text-xs text-gray-500"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              Cutoff ends{" "}
              <strong className="text-gray-900">{CURRENT_CUTOFF_END}</strong>
            </span>
          </div>

          {pendingLeave > 0 && (
            <div className="rounded-lg px-4 py-2 bg-amber-50 border border-amber-100">
              <span
                className="text-xs text-amber-600"
                style={{ fontFamily: "system-ui,sans-serif" }}
              >
                ⏳ {pendingLeave} leave pending
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-1 border-b border-gray-200">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className="px-4 py-2.5 text-sm transition-all"
            style={{
              fontFamily: "system-ui,sans-serif",
              color: activeTab === t.key ? "#111827" : "#6b7280",
              borderBottom:
                activeTab === t.key
                  ? "2px solid #111827"
                  : "2px solid transparent",
            }}
          >
            {t.label}

            {t.key === "leave" && pendingLeave > 0 && (
              <span className="ml-1.5 text-xs px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-600">
                {pendingLeave}
              </span>
            )}

            {t.key === "offset" && pendingOffset > 0 && (
              <span className="ml-1.5 text-xs px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-600">
                {pendingOffset}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>

    <div className="flex-1 overflow-y-auto px-8 py-6 bg-white">
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
