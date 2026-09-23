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
            { label: "Address", value: emp.address, icon: "📍" },
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
    </div>
  );
}