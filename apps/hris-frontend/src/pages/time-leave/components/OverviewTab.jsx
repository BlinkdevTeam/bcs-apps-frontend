import React from "react";
import { EMPLOYEES, LEAVE_BALANCES } from "../../../data/compData";

// ── Tokens: match the light app shell (#f8f7f3 / Georgia headings / system-ui body)
const C = {
  ink: "#1c1b18",
  muted: "#77736a",
  line: "#e7e4dc",
  surface: "#ffffff",
  wash: "#f1efe9",
  present: "#2f7d57",
  remote: "#3b6ea8",
  late: "#b7791f",
  absent: "#c0453a",
  leave: "#7a5ea8",
};

const STATUSES = [
  { key: "Present", color: C.present },
  { key: "Remote", color: C.remote },
  { key: "Late", color: C.late },
  { key: "Absent", color: C.absent },
  { key: "On Leave", color: C.leave },
];

// leave type -> which balance bucket it draws from
const BUCKET = {
  "Vacation Leave": "annual",
  "Sick Leave": "sick",
  "Emergency Leave": "emergency",
};

const sans = { fontFamily: "system-ui, sans-serif" };
const fmtHrs = (n) => `${Number(n).toFixed(1)} h`;

function Person({ emp, size = 36 }) {
  if (!emp) return null;
  const hues = [C.present, C.remote, C.late, C.absent, C.leave];
  const color = hues[emp.id % hues.length];
  return (
    <div
      className="rounded-full flex items-center justify-center font-semibold shrink-0"
      style={{
        ...sans,
        width: size,
        height: size,
        fontSize: size < 32 ? 11 : 12,
        color,
        backgroundColor: color + "1a",
      }}
      aria-hidden="true"
    >
      {emp.avatar}
    </div>
  );
}

function Card({ title, aside, children, className = "" }) {
  return (
    <section
      className={`rounded-2xl p-6 ${className}`}
      style={{ backgroundColor: C.surface, border: `1px solid ${C.line}` }}
    >
      {(title || aside) && (
        <header className="flex items-baseline justify-between mb-4">
          <h2 className="text-lg" style={{ color: C.ink }}>
            {title}
          </h2>
          {aside}
        </header>
      )}
      {children}
    </section>
  );
}

// ── Who's in today: one stacked bar instead of five empty boxes
// function TodayStrip({ attendance, onNavigate }) {
//   const total = EMPLOYEES.length;
//   const counts = STATUSES.map((s) => ({
//     ...s,
//     n: attendance.filter((a) => a.status === s.key).length,
//   }));
//   const recorded = counts.reduce((sum, c) => sum + c.n, 0);
//   const inToday = counts[0].n + counts[1].n + counts[2].n;

//   return (
//     <Card>
//       <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
//         <div>
//           <p className="text-3xl" style={{ color: C.ink, letterSpacing: "-0.02em" }}>
//             {recorded === 0 ? "No attendance logged yet" : `${inToday} of ${total} are working today`}
//           </p>
//           <p className="text-sm mt-1" style={{ ...sans, color: C.muted }}>
//             {recorded === 0
//               ? "Records appear here as people clock in."
//               : `${total - recorded > 0 ? `${total - recorded} not yet logged · ` : ""}Click a status to see who.`}
//           </p>
//         </div>
//         <button
//           onClick={() => onNavigate?.("attendance")}
//           className="text-sm px-3 py-1.5 rounded-lg cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2"
//           style={{ ...sans, color: C.ink, border: `1px solid ${C.line}`, backgroundColor: C.surface }}
//         >
//           Open attendance
//         </button>
//       </div>

//       {/* bar */}
//       <div
//         className="flex h-2.5 rounded-full overflow-hidden"
//         style={{ backgroundColor: C.wash }}
//         role="img"
//         aria-label={counts.map((c) => `${c.n} ${c.key}`).join(", ")}
//       >
//         {counts.map(
//           (c) =>
//             c.n > 0 && (
//               <div
//                 key={c.key}
//                 style={{ width: `${(c.n / total) * 100}%`, backgroundColor: c.color }}
//               />
//             ),
//         )}
//       </div>

//       {/* legend = filters */}
//       <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-4">
//         {counts.map((c) => (
//           <button
//             key={c.key}
//             onClick={() => onNavigate?.("attendance", c.key)}
//             className="flex items-center gap-2.5 text-left rounded-xl px-3 py-2.5 cursor-pointer transition-colors hover:bg-[#f6f4ee] focus-visible:outline-2 focus-visible:outline-offset-2"
//             style={{ border: `1px solid ${C.line}` }}
//           >
//             <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: c.color }} />
//             <span className="text-xl leading-none" style={{ color: c.n ? C.ink : C.muted }}>
//               {c.n}
//             </span>
//             <span className="text-sm" style={{ ...sans, color: C.muted }}>
//               {c.key}
//             </span>
//           </button>
//         ))}
//       </div>
//     </Card>
//   );
// }

// ── One decision row
function RequestRow({ req, onApprove, onReject }) {
  const emp = EMPLOYEES.find((e) => e.id === req.empId);
  const bucket = BUCKET[req.type];
  const bal = LEAVE_BALANCES.find((b) => b.empId === req.empId)?.[bucket];
  const remaining = bal ? bal.total - bal.used : null;
  const after = remaining !== null ? remaining - req.days : null;
  const over = after !== null && after < 0;

  return (
    <li
      className="flex flex-wrap items-center gap-x-4 gap-y-3 py-4"
      style={{ borderTop: `1px solid ${C.line}` }}
    >
      <Person emp={emp} />

      <div className="flex-1 min-w-[220px]">
        <p className="text-base" style={{ color: C.ink }}>
          {emp?.name}
          <span className="text-sm ml-2" style={{ ...sans, color: C.muted }}>
            {emp?.dept}
          </span>
        </p>
        <p className="text-sm mt-0.5" style={{ ...sans, color: C.ink }}>
          {req.type}, {req.from}
          {req.days > 1 ? ` to ${req.to}` : ""}{" "}
          <span style={{ color: C.muted }}>
            ({req.days} {req.days === 1 ? "day" : "days"})
          </span>
        </p>
        <p className="text-xs mt-1" style={{ ...sans, color: over ? C.absent : C.muted }}>
          {over
            ? `Over balance by ${Math.abs(after)}d`
            : after !== null
              ? `Leaves ${after}d of ${bal.total}d`
              : "No balance tracked for this type"}
          {req.reason ? ` · “${req.reason}”` : ""}
        </p>
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <button
          onClick={() => onReject(req.id)}
          className="px-3.5 py-2 rounded-lg text-sm cursor-pointer transition-colors hover:bg-[#f6f4ee] focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ ...sans, color: C.ink, border: `1px solid ${C.line}` }}
          aria-label={`Decline ${emp?.name}'s ${req.type}`}
        >
          Decline
        </button>
        <button
          onClick={() => onApprove(req.id)}
          className="px-3.5 py-2 rounded-lg text-sm font-medium cursor-pointer transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ ...sans, color: "#fff", backgroundColor: over ? C.late : C.ink }}
          aria-label={`Approve ${emp?.name}'s ${req.type}`}
        >
          {over ? "Approve anyway" : "Approve"}
        </button>
      </div>
    </li>
  );
}

function Queue({ leaveRequests, onApprove, onReject, onNavigate }) {
  const pending = leaveRequests.filter((r) => r.status === "Pending");
  return (
    <Card
      title="Leave requests to review"
      aside={
        pending.length > 0 && (
          <button
            onClick={() => onNavigate?.("leave")}
            className="text-sm cursor-pointer underline-offset-4 hover:underline"
            style={{ ...sans, color: C.muted }}
          >
            {pending.length} waiting
          </button>
        )
      }
    >
      {pending.length === 0 ? (
        <div className="py-10 text-center">
          <p className="text-base" style={{ color: C.ink }}>
            Nothing waiting on you
          </p>
          <p className="text-sm mt-1" style={{ ...sans, color: C.muted }}>
            New leave requests will show up here.
          </p>
        </div>
      ) : (
        <ul className="-mb-4">
          {pending.map((r) => (
            <RequestRow key={r.id} req={r} onApprove={onApprove} onReject={onReject} />
          ))}
        </ul>
      )}
    </Card>
  );
}

// ── Side cards
function Hours({ otRecords, onNavigate }) {
  const sum = (f) => otRecords.filter(f).reduce((s, r) => s + r.hours, 0);
  const ot = sum((r) => r.type === "OT" && r.status === "Approved");
  const ut = sum((r) => r.type === "UT");
  const max = Math.max(ot, ut, 1);
  const otPending = otRecords.filter((r) => r.status === "Pending").length;
  const utFlagged = otRecords.filter((r) => r.status === "Flagged").length;

  const bar = (label, value, color) => (
    <div>
      <div className="flex justify-between text-sm mb-1.5" style={sans}>
        <span style={{ color: C.muted }}>{label}</span>
        <span style={{ color: C.ink }}>{fmtHrs(value)}</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ backgroundColor: C.wash }}>
        <div className="h-full rounded-full" style={{ width: `${(value / max) * 100}%`, backgroundColor: color }} />
      </div>
    </div>
  );

  return (
    <Card title="Overtime and undertime">
      <div className="space-y-4">
        {bar("Approved overtime", ot, C.present)}
        {bar("Undertime", ut, C.absent)}
      </div>
      {(otPending > 0 || utFlagged > 0) && (
        <button
          onClick={() => onNavigate?.("otut")}
          className="mt-5 w-full text-left text-sm rounded-xl px-3.5 py-3 cursor-pointer hover:bg-[#f6f4ee] transition-colors"
          style={{ ...sans, color: C.ink, border: `1px solid ${C.line}` }}
        >
          {otPending > 0 && `${otPending} overtime ${otPending === 1 ? "request needs" : "requests need"} approval`}
          {otPending > 0 && utFlagged > 0 && <br />}
          {utFlagged > 0 && (
            <span style={{ color: C.absent }}>
              {utFlagged} undertime {utFlagged === 1 ? "record is" : "records are"} flagged
            </span>
          )}
        </button>
      )}
    </Card>
  );
}

function LowBalance({ onNavigate }) {
  const low = LEAVE_BALANCES.map((b) => ({
    ...b,
    left: b.annual.total - b.annual.used,
    emp: EMPLOYEES.find((e) => e.id === b.empId),
  }))
    .filter((b) => b.left <= 2)
    .sort((a, b) => a.left - b.left);

  return (
    <Card
      title="Low on annual leave"
      aside={
        <button
          onClick={() => onNavigate?.("balances")}
          className="text-sm cursor-pointer underline-offset-4 hover:underline"
          style={{ ...sans, color: C.muted }}
        >
          All balances
        </button>
      }
    >
      {low.length === 0 ? (
        <p className="text-sm" style={{ ...sans, color: C.muted }}>
          Everyone has more than 2 days left.
        </p>
      ) : (
        <ul className="space-y-4">
          {low.map((b) => (
            <li key={b.empId} className="flex items-center gap-3">
              <Person emp={b.emp} size={30} />
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1.5" style={sans}>
                  <span style={{ color: C.ink }}>{b.emp?.name}</span>
                  <span style={{ color: b.left === 0 ? C.absent : C.late }}>
                    {b.left}d of {b.annual.total}d left
                  </span>
                </div>
                <div className="h-1.5 rounded-full" style={{ backgroundColor: C.wash }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(b.annual.used / b.annual.total) * 100}%`,
                      backgroundColor: b.left === 0 ? C.absent : C.late,
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

// ── Page
export default function OverviewTab({
  // attendance,
  leaveRequests,
  otRecords,
  onApprove,
  onReject,
  onNavigate, // optional: (tabKey, filter?) => void
}) {
  return (
    <div className="space-y-6">
      {/* <TodayStrip attendance={attendance} onNavigate={onNavigate} /> */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2">
          <Queue
            leaveRequests={leaveRequests}
            onApprove={onApprove}
            onReject={onReject}
            onNavigate={onNavigate}
          />
        </div>
        <div className="space-y-6">
          <Hours otRecords={otRecords} onNavigate={onNavigate} />
          <LowBalance onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}