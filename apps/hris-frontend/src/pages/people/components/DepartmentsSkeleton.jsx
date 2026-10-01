function Bar({ w, h = 12, className = "" }) {
  return (
    <div
      className={`rounded bg-gray-200 ${className}`}
      style={{ width: w, height: h }}
    />
  );
}

// Varied widths so it reads like real content
const CARDS = [
  { name: 110, desc: 160, members: 56, btn: 92, head: 100, created: 124 },
  { name: 86, desc: 138, members: 62, btn: 96, head: 84, created: 118 },
  { name: 128, desc: 172, members: 52, btn: 88, head: 112, created: 126 },
  { name: 98, desc: 150, members: 60, btn: 94, head: 92, created: 120 },
  { name: 116, desc: 144, members: 58, btn: 90, head: 104, created: 122 },
  { name: 92, desc: 166, members: 54, btn: 96, head: 96, created: 116 },
];

export function DepartmentsHeaderSkeleton() {
  return (
    <div className="space-y-2 animate-pulse" aria-hidden="true">
      <Bar w={104} h={14} />
      <Bar w={208} h={10} className="bg-gray-100" />
    </div>
  );
}

export function DepartmentsGridSkeleton({ count = 6 }) {
  return (
    <div
      className="grid grid-cols-2 gap-4"
      role="status"
      aria-label="Loading departments"
    >
      {Array.from({ length: count }).map((_, i) => {
        const c = CARDS[i % CARDS.length];
        return (
          <div
            key={i}
            className="rounded-lg p-5 animate-pulse"
            style={{ border: "1px solid #e5e7eb", backgroundColor: "#fff" }}
            aria-hidden="true"
          >
            {/* Top row: icon tile + name/desc ... member count + button */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-200 shrink-0" />
                <div className="space-y-2">
                  <Bar w={c.name} h={13} />
                  <Bar w={c.desc} h={10} className="bg-gray-100" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Bar w={c.members} h={11} className="bg-gray-100" />
                <Bar w={c.btn} h={24} />
              </div>
            </div>

            {/* Head row */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-200 shrink-0" />
              <div className="space-y-1.5">
                <Bar w={c.head} h={10} />
                <Bar w={72} h={9} className="bg-gray-100" />
              </div>
            </div>

            {/* Footer */}
            <div className="mt-2 pt-2" style={{ borderTop: "1px solid #e5e7eb" }}>
              <Bar w={c.created} h={10} className="bg-gray-100" />
            </div>
          </div>
        );
      })}
    </div>
  );
}