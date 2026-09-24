import { useState } from "react";

import OverviewTab from "./OverviewTab";
import EmployeeCompensationTab from "./EmployeeCompensationTab";
import LeaveTab from "./LeaveTab";
import OTUTTab from "./OtUtTab";
import DocumentsTab from "./DocumentsTab";
import ActivityTab from "./ActivityTab";
import EditDrawer from "./EditDrawer";

import { CalendarDays, CalendarPlus, Mail, MapPin, Phone, } from "lucide-react";

// ── SMALL INFO PILL ───────────────────────────────────────────────────────────
function InfoItem({ icon, label, value }) {
  if (!value) return null;

  return (
    <div className="flex items-start gap-3 min-w-0">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
        {icon}
      </div>

      <div className="min-w-0 pt-0.5">
        <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
          {label}
        </p>

        <p
          className="mt-0.5 truncate text-sm font-medium text-gray-800"
          title={value}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

// ── PROFILE PAGE ──────────────────────────────────────────────────────────────
export default function ProfilePage({
  emp,
  onBack,
  // onEdit,
  onUpdateEmp,
  // empComp,
  // onUpdateComp,
  // basicPaySets,
  // contributionSets,
  // benefitsSets,
  gc,
  SS,
  BADGE,
}) {
  const { bg, fg } = emp && emp.role && emp.department_id ? gc(emp.id) : { bg: "#111", fg: "#fff" };
  const [showEditDrawer, setShowEditDrawer] = useState(false);
  const TABS = [
    // "Overview",
    // "Compensation",
    "Leave",
    "OT / UT",
    "Documents",
    "Activity",
  ];
  const [tab, setTab] = useState("Leave");

  const fullName =
    emp.name || `${emp.first_name || ""} ${emp.last_name || ""}`.trim();

  const hireDateLabel = emp.hire_date
    ? new Date(emp.hire_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="px-8 pt-6">
        {/* Back link */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-500 hover:text-black text-sm cursor-pointer transition-colors"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            ← Back to Directory
          </button>
        </div>

        {/* Profile card */}
        <div
          className="rounded-xl p-6"
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
          }}
        >
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="flex items-center gap-5">
              <div
                className="rounded-full flex items-center justify-center font-bold shrink-0"
                style={{
                  width: 72,
                  height: 72,
                  backgroundColor: bg,
                  color: fg,
                  fontFamily: "system-ui,sans-serif",
                  fontSize: 22,
                }}
              >
                {emp.avatar}
              </div>
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h1
                    className="text-2xl font-normal text-black"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {fullName}
                  </h1>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      fontFamily: "system-ui,sans-serif",
                      ...SS[emp.status],
                    }}
                  >
                    {emp.status}
                  </span>
                </div>
                <p
                  className="text-sm text-gray-500 mt-1"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  {emp.role_title || "No job title set"}
                  {emp.dept ? ` · ${emp.dept}` : ""}
                </p>
                {emp.employee_code && (
                  <p
                    className="text-xs text-gray-400 mt-1"
                    style={{ fontFamily: "monospace" }}
                  >
                    {emp.employee_code}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowEditDrawer(true)}
                className="px-4 py-2 rounded text-sm hover:opacity-80 flex items-center gap-2 cursor-pointer transition-opacity"
                style={{
                  fontFamily: "system-ui,sans-serif",
                  backgroundColor: "#f5f5f5",
                  color: "#555",
                  border: "1px solid #e5e7eb",
                }}
              >
                ✏️ Edit Profile
              </button>
            </div>
          </div>

          {/* Quick info strip */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-4 mt-6 pt-6"
            style={{ borderTop: "1px solid #f0f0f0" }}
          >
            <InfoItem icon={<Mail size={16} strokeWidth={1.8} />} label="Email" value={emp.email} /> <InfoItem icon={<Phone size={16} strokeWidth={1.8} />} label="Phone" value={emp.phone} /> <InfoItem icon={<MapPin size={16} strokeWidth={1.8} />} label="Address" value={emp.address} /> <InfoItem icon={<CalendarDays size={16} strokeWidth={1.8} />} label="Schedule" value={emp.schedule} /> <InfoItem icon={<CalendarPlus size={16} strokeWidth={1.8} />} label="Hire Date" value={hireDateLabel} />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mt-6" style={{ borderBottom: "1px solid #e5e7eb" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="px-4 py-2.5 text-sm transition-all cursor-pointer"
              style={{
                fontFamily: "system-ui,sans-serif",
                color: tab === t ? "#000" : "#999",
                fontWeight: tab === t ? 600 : 400,
                borderBottom:
                  tab === t ? "2px solid #000" : "2px solid transparent",
                marginBottom: "-1px",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="px-8 py-6">
        {/* {tab === "Overview" && <OverviewTab emp={emp} />} */}
        {/* {tab === "Compensation" && (
          <EmployeeCompensationTab
            emp={emp}
            onUpdateEmp={onUpdateEmp}
            empComp={empComp}
            onUpdateComp={onUpdateComp}
            basicPaySets={basicPaySets}
            contributionSets={contributionSets}
            benefitsSets={benefitsSets}
          />
        )} */}
        {tab === "Leave" && <LeaveTab BADGE={BADGE} />}
        {tab === "OT / UT" && <OTUTTab BADGE={BADGE} />}
        {tab === "Documents" && <DocumentsTab />}
        {tab === "Activity" && <ActivityTab />}
      </div>

      {showEditDrawer && (
        <EditDrawer
          emp={emp}
          onClose={() => setShowEditDrawer(false)}
          onSave={(updated) => {
            onUpdateEmp(updated);
            setShowEditDrawer(false);
          }}
        />
      )}
    </div>
  );
}