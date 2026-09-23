export default function OverviewTab({ emp }) {
  if (!emp) return <p className="text-gray-500 p-8">Loading employee…</p>;

  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Left column: General Info */}
      <div className="col-span-2 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Email", value: emp.email, icon: "📧" },
            { label: "Phone", value: emp.phone, icon: "📞" },
            { label: "Address", value: emp.location, icon: "📍" },
            { label: "Schedule", value: emp.schedule, icon: "🗓️" },
          ].map(({ label, value, icon }) => (
            <div
              key={label}
              className="rounded-lg p-4 flex items-start gap-3"
              style={{ backgroundColor: "#fafafa", border: "1px solid #e5e7eb" }}
            >
              <span className="text-lg">{icon}</span>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest" style={{ fontFamily: "system-ui,sans-serif" }}>
                  {label}
                </p>
                <p className="text-gray-800 text-sm mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>
                  {value || "-"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right column: Compensation & Leave */}
      <div className="space-y-4">
        <div className="rounded-lg p-5" style={{ backgroundColor: "#fafafa", border: "1px solid #e5e7eb" }}>
          <h3 className="text-sm font-normal text-black mb-4">Compensation</h3>
          {[
            ["Annual Salary", emp.salary],
            ["Pay Frequency", emp.payFreq],
            ["Benefits", emp.benefits],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between py-2" style={{ borderBottom: "1px solid #e5e7eb" }}>
              <span className="text-gray-500 text-sm" style={{ fontFamily: "system-ui,sans-serif" }}>{label}</span>
              <span className="text-gray-800 text-sm" style={{ fontFamily: "system-ui,sans-serif" }}>{value || "-"}</span>
            </div>
          ))}
        </div>

        <div className="rounded-lg p-5" style={{ backgroundColor: "#fafafa", border: "1px solid #e5e7eb" }}>
          <h3 className="text-sm font-normal text-black mb-4">Leave Balance</h3>
          {[
            { label: "Annual", used: 8, total: 20 },
            { label: "Sick", used: 2, total: 10 },
            { label: "Personal", used: 1, total: 3 },
          ].map(({ label, used, total }) => (
            <div key={label} className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-gray-500 text-xs" style={{ fontFamily: "system-ui,sans-serif" }}>{label}</span>
                <span className="text-gray-600 text-xs" style={{ fontFamily: "monospace" }}>{used}/{total}d</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ backgroundColor: "#e5e7eb" }}>
                <div className="h-full rounded-full bg-black" style={{ width: `${(used / total) * 100}%`}} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}