import React, { useState, useMemo, useEffect } from "react";
import BalanceBar from "./BalanceBar";
import AssignLeaveBalanceDrawer from "./AssignLeaveBalanceDrawer";
import { getEmployees } from "../../../services/employeeService";
import { getDepartments } from "../../../services/departmentService";

import {
  getLeaveBalances,
  saveLeaveBalance,
} from "../../../services/leaveBalanceService";

const YEAR = new Date().getFullYear();

const AV = ["#5a9af0","#5af07a","#f0c85a","#c07af0","#f05a5a","#f0905a","#50c8c8","#d090f0"];

function avatarColor(id = "") {
  return AV[String(id).split("").reduce((a, c) => a + c.charCodeAt(0), 0) % AV.length];
}

function EmpAvatar({ emp, size = 34 }) {
  const bg = avatarColor(emp.id);
  const initials =
    emp.avatar_initials ||
    `${emp.first_name?.[0] || ""}${emp.last_name?.[0] || ""}`.toUpperCase() ||
    "?";
  return (
    <div className="rounded-full flex items-center justify-center font-bold flex-shrink-0"
      style={{ width:size, height:size, backgroundColor:bg+"28", color:bg, border:`1.5px solid ${bg}50`,
        fontFamily:"system-ui,sans-serif", fontSize: size < 32 ? 11 : 13 }}>
      {initials}
    </div>
  );
}

export default function LeaveBalancesTab() {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("All"); // department id or "All"
  const [balances, setBalances] = useState([]);        // [{ empId (uuid), annual, sick, emergency }]
  const [assignFor, setAssignFor] = useState(undefined); // undefined = closed, "" = open blank, id = prefilled

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [empRes, deptRes, balanceData] = await Promise.all([
  getEmployees(),
  getDepartments(),
  getLeaveBalances(YEAR),
]);
if (cancelled) return;
setEmployees(Array.isArray(empRes.data) ? empRes.data : []);
setDepartments(Array.isArray(deptRes.data) ? deptRes.data : []);
setBalances(balanceData);
      } catch (err) {
        console.error("Failed to load employees:", err);
        if (!cancelled) setError("Failed to load employees. Please try again.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const deptMap = useMemo(() => {
    const m = {};
    departments.forEach(d => { m[d.id] = d.name; });
    return m;
  }, [departments]);

  const filtered = useMemo(() => employees.filter(emp => {
    const q = search.toLowerCase();
    const name = `${emp.first_name} ${emp.last_name}`.toLowerCase();
    return (!q || name.includes(q))
      && (deptFilter === "All" || emp.department_id === deptFilter);
  }), [employees, search, deptFilter]);

async function saveBalance({ empId, annual, sick, emergency }) {
  const saved = await saveLeaveBalance(empId, {
    year: YEAR,
    annual,
    sick,
    emergency,
  });
  setBalances((prev) =>
    prev.some((b) => b.empId === saved.empId)
      ? prev.map((b) => (b.empId === saved.empId ? saved : b))
      : [...prev, saved],
  );
  setAssignFor(undefined);
}

  return (
    <>
      <div className="space-y-5">
        {/* Filters */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 max-w-xs">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">🔍</span>
            <input className="w-full pl-9 pr-4 py-2 rounded text-sm text-white placeholder-gray-600 outline-none"
              style={{ fontFamily:"system-ui,sans-serif", backgroundColor:"#111", border:"1px solid #2a2a2a" }}
              placeholder="Search employee…" value={search} onChange={e=>setSearch(e.target.value)} />
          </div>
          <select className="px-3 py-2 rounded text-sm text-gray-300 outline-none"
            style={{ fontFamily:"system-ui,sans-serif", backgroundColor:"#111", border:"1px solid #2a2a2a" }}
            value={deptFilter} onChange={e=>setDeptFilter(e.target.value)}>
            <option value="All">All Departments</option>
            {departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
          </select>
          <div className="flex-1" />
          <span className="text-gray-600 text-sm mr-2" style={{ fontFamily:"monospace" }}>
            {loading ? "Loading…" : `${filtered.length} employees`}
          </span>
          {/* <button onClick={() => setAssignFor("")} disabled={loading || employees.length === 0}
            className="px-4 py-2 rounded text-sm font-medium bg-white text-black hover:opacity-80 disabled:opacity-40"
            style={{ fontFamily:"system-ui,sans-serif" }}>
            + Assign Balance
          </button> */}
        </div>

        {error && (
          <div className="px-4 py-3 rounded text-sm"
            style={{ backgroundColor:"#1f0a0a", border:"1px solid #3a1010", color:"#f05a5a", fontFamily:"system-ui,sans-serif" }}>
            {error}
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4">
          {filtered.map(emp => {
            const b = balances.find(b => b.empId === emp.id);
            const isLow = b && (b.annual.total - b.annual.used) <= 2;
            return (
              <div key={emp.id} className="rounded-lg p-5"
                style={{ backgroundColor:"#0d0d0d", border:`1px solid ${isLow?"#3a1515":"#1e1e1e"}` }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <EmpAvatar emp={emp} />
                    <div>
                      <p className="text-white text-sm" style={{ fontFamily:"system-ui,sans-serif" }}>
                        {emp.first_name} {emp.last_name}
                      </p>
                      <p className="text-gray-500 text-xs" style={{ fontFamily:"system-ui,sans-serif" }}>
                        {deptMap[emp.department_id] || "No department"}
                      </p>
                    </div>
                  </div>
                  {isLow && <span className="text-xs px-2 py-0.5 rounded-full" style={{ fontFamily:"system-ui,sans-serif", backgroundColor:"#1f0f0f", color:"#f05a5a" }}>Low</span>}
                </div>

                {b ? (
                  <div className="space-y-3">
                    <BalanceBar label="Annual Leave"    used={b.annual.used}    total={b.annual.total} />
                    <BalanceBar label="Sick Leave"      used={b.sick.used}      total={b.sick.total} />
                    <BalanceBar label="Emergency Leave" used={b.emergency.used} total={b.emergency.total} />
                  </div>
                ) : (
                  <div className="flex items-center justify-between rounded px-4 py-3"
                    style={{ border:"1px dashed #2a2a2a" }}>
                    <span className="text-xs text-gray-600" style={{ fontFamily:"system-ui,sans-serif" }}>
                      No leave balance assigned
                    </span>
                    <button onClick={() => setAssignFor(emp.id)}
                      className="text-xs px-3 py-1 rounded hover:opacity-80"
                      style={{ fontFamily:"system-ui,sans-serif", backgroundColor:"#111", color:"#aaa", border:"1px solid #2a2a2a" }}>
                      Assign
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!loading && filtered.length === 0 && !error && (
          <p className="text-center text-gray-600 text-sm py-10" style={{ fontFamily:"system-ui,sans-serif" }}>
            No employees found.
          </p>
        )}
      </div>

      {assignFor !== undefined && (
        <AssignLeaveBalanceDrawer
          employees={employees}
          balances={balances}
          initialEmpId={assignFor}
          onClose={() => setAssignFor(undefined)}
          onSave={saveBalance}
        />
      )}
    </>
  );
}