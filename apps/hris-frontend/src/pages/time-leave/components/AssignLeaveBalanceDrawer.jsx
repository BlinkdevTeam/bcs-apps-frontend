import React, { useState } from "react";
import { IC, IS } from "../../../data/compData";

const TYPES = [
  { key: "annual",    label: "Annual Leave" },
  { key: "sick",      label: "Sick Leave" },
  { key: "emergency", label: "Emergency Leave" },
];

const DEFAULTS = { annual: 15, sick: 15, emergency: 5 };

function totalsFor(balance) {
  return balance
    ? { annual: balance.annual.total, sick: balance.sick.total, emergency: balance.emergency.total }
    : { ...DEFAULTS };
}

export default function AssignLeaveBalanceDrawer({ employees, balances, initialEmpId = "", onClose, onSave }) {
  const [empId, setEmpId] = useState(initialEmpId);
  const [totals, setTotals] = useState(() =>
    totalsFor(balances.find(b => b.empId === initialEmpId))
  );

    const existing = balances.find(b => b.empId === empId);
    
    const [saving, setSaving] = useState(false);
const [error, setError] = useState("");

  function handleEmpChange(id) {
    setEmpId(id);
    setTotals(totalsFor(balances.find(b => b.empId === id)));
  }

  const canSave = empId && TYPES.every(t => Number(totals[t.key]) >= 0 && totals[t.key] !== "");

async function handleSave() {
  if (!canSave || saving) return;
  setSaving(true);
  setError("");
  try {
    await onSave({
      empId,
      annual: Number(totals.annual),
      sick: Number(totals.sick),
      emergency: Number(totals.emergency),
    });
  } catch (err) {
    setError(err?.response?.data?.message || "Failed to save leave balance.");
    setSaving(false);
  }
}

  return (
    <>
      <div className="fixed inset-0 z-[200]" style={{ backgroundColor:"rgba(0,0,0,0.6)" }} onClick={onClose} />
      <div className="fixed top-0 right-0 h-full z-[201] flex flex-col"
        style={{ width:440, backgroundColor:"#080808", borderLeft:"1px solid #222", boxShadow:"-8px 0 40px rgba(0,0,0,0.8)" }}>

        <div className="flex items-center justify-between px-7 py-5 flex-shrink-0" style={{ borderBottom:"1px solid #1a1a1a" }}>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-0.5" style={{ fontFamily:"system-ui,sans-serif" }}>Leave Balances</p>
            <h2 className="text-lg font-normal text-white">Assign Leave Balance</h2>
          </div>
          <button onClick={onClose} className="text-gray-600 hover:text-white text-xl">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto px-7 py-6 space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1.5" style={{ fontFamily:"system-ui,sans-serif" }}>Employee</label>
            <select className={IC} style={IS} value={empId} onChange={e => handleEmpChange(e.target.value)}>
              <option value="">Select employee…</option>
              {employees.map(e => {
                const has = balances.some(b => b.empId === e.id);
                return (
                  <option key={e.id} value={e.id}>
                    {e.first_name} {e.last_name}{e.role_title ? ` — ${e.role_title}` : ""}{has ? " (has balance)" : ""}
                  </option>
                );
              })}
            </select>
            {existing && (
              <p className="text-xs mt-1.5 text-gray-600" style={{ fontFamily:"system-ui,sans-serif" }}>
                This employee already has a balance. Saving updates the totals; days already used are kept.
              </p>
            )}
          </div>

          {TYPES.map(t => (
            <div key={t.key}>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1.5" style={{ fontFamily:"system-ui,sans-serif" }}>
                {t.label} <span className="text-gray-700 normal-case">(total days)</span>
              </label>
              <input type="number" min="0" className={IC} style={IS}
                value={totals[t.key]}
                onChange={e => setTotals(p => ({ ...p, [t.key]: e.target.value }))} />
            </div>
          ))}
              </div>
              
              {error && (
  <p className="px-7 pb-3 text-xs" style={{ fontFamily:"system-ui,sans-serif", color:"#f05a5a" }}>
    {error}
  </p>
)}

        <div className="px-7 py-5 flex items-center justify-between flex-shrink-0" style={{ borderTop:"1px solid #1a1a1a" }}>
          <button onClick={onClose} className="px-4 py-2 rounded text-sm hover:opacity-80"
            style={{ fontFamily:"system-ui,sans-serif", backgroundColor:"#111", color:"#aaa", border:"1px solid #2a2a2a" }}>Cancel</button>
          <button onClick={handleSave} disabled={!canSave}
            className="px-5 py-2 rounded text-sm font-medium hover:opacity-80 transition-all"
            style={{ fontFamily:"system-ui,sans-serif", backgroundColor:canSave?"#fff":"#1a1a1a", color:canSave?"#000":"#444", cursor:canSave?"pointer":"not-allowed" }}>
            Save Balance ✓
          </button>
        </div>
      </div>
    </>
  );
}