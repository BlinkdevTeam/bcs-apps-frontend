function Bar({ className = "" }) {
  return <div className={`rounded bg-gray-200 ${className}`} />;
}

export default function EmployeeProfileSkeleton() {
  return (
    <div
      className="flex-1 overflow-y-auto"
      role="status"
      aria-live="polite"
      aria-label="Loading employee"
    >
      <div className="px-8 pt-6 animate-pulse">
        {/* Back link */}
        <Bar className="h-4 w-36 mb-6" />

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
              {/* Avatar */}
              <div className="w-[72px] h-[72px] rounded-full bg-gray-200 shrink-0" />

              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <Bar className="h-6 w-48" />
                  <Bar className="h-5 w-16 rounded-full" />
                </div>
                <Bar className="h-3.5 w-56" />
                <Bar className="h-3 w-20" />
              </div>
            </div>

            {/* Edit button */}
            <Bar className="h-9 w-32 rounded" />
          </div>

          {/* Quick info strip */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-4 mt-6 pt-6"
            style={{ borderTop: "1px solid #f0f0f0" }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-gray-100 shrink-0" />
                <div className="flex-1 space-y-2 pt-0.5">
                  <Bar className="h-2.5 w-12 bg-gray-100" />
                  <Bar className="h-3.5 w-full max-w-[140px]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div
          className="flex gap-6 mt-6 pb-3"
          style={{ borderBottom: "1px solid #e5e7eb" }}
        >
          {[56, 64, 80, 64].map((w, i) => (
            <Bar key={i} className="h-4" style={{ width: w }} />
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="px-8 py-6 animate-pulse">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 space-y-5">
            <div
              className="rounded-lg p-5 space-y-4"
              style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb" }}
            >
              <Bar className="h-4 w-36" />
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between">
                    <Bar className="h-3 w-24" />
                    <Bar className="h-3 w-10" />
                  </div>
                  <Bar className="h-2 w-full rounded-full bg-gray-100" />
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2">
            <div
              className="rounded-lg overflow-hidden"
              style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb" }}
            >
              <div className="h-10 bg-gray-50" style={{ borderBottom: "1px solid #e5e7eb" }} />
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-4 py-3.5"
                  style={{ borderBottom: i < 4 ? "1px solid #f3f4f6" : "none" }}
                >
                  <Bar className="h-3.5 w-28" />
                  <Bar className="h-3 w-20 bg-gray-100" />
                  <Bar className="h-3 w-20 bg-gray-100" />
                  <div className="flex-1" />
                  <Bar className="h-5 w-16 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <span className="sr-only">Loading employee…</span>
    </div>
  );
}