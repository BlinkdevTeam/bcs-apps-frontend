function Bar({ w, h = 12, className = "" }) {
  return (
    <div
      className={`rounded bg-gray-200 ${className}`}
      style={{ width: w, height: h }}
    />
  );
}

// Varied widths so it reads like real content
const ROWS = [
  { name: 120, email: 170, role: 72, login: 130 },
  { name: 96, email: 150, role: 88, login: 118 },
  { name: 140, email: 180, role: 64, login: 126 },
  { name: 110, email: 160, role: 80, login: 134 },
  { name: 128, email: 175, role: 70, login: 112 },
  { name: 102, email: 142, role: 84, login: 128 },
];

export function UsersStatCardsSkeleton({ count = 4 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-lg px-4 py-3 animate-pulse"
          style={{ border: "1px solid #e5e7eb", backgroundColor: "#fff" }}
          aria-hidden="true"
        >
          <Bar w={64} h={10} className="mb-2.5" />
          <Bar w={36} h={24} className="bg-gray-100" />
        </div>
      ))}
    </>
  );
}

export function UsersRoleFilterSkeleton() {
  return (
    <div className="flex gap-1 animate-pulse" aria-hidden="true">
      {[64, 52, 72, 60].map((w, i) => (
        <Bar key={i} w={w} h={24} className="rounded" />
      ))}
    </div>
  );
}

export function UsersTableSkeletonRows({ count = 6 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const r = ROWS[i % ROWS.length];
        return (
          <tr
            key={i}
            className="animate-pulse"
            style={{
              borderBottom: i < count - 1 ? "1px solid #f0f0f0" : "none",
              backgroundColor: "#fff",
            }}
            aria-hidden="true"
          >
            {/* User */}
            <td className="px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0" />
                <div className="space-y-2">
                  <Bar w={r.name} h={13} />
                  <Bar w={r.email} h={10} className="bg-gray-100" />
                </div>
              </div>
            </td>
            {/* Role pill */}
            <td className="px-4 py-3">
              <Bar w={r.role} h={22} className="rounded-full" />
            </td>
            {/* Status */}
            <td className="px-4 py-3">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                <Bar w={44} h={11} />
              </div>
            </td>
            {/* Last login */}
            <td className="px-4 py-3">
              <Bar w={r.login} h={11} className="bg-gray-100" />
            </td>
            {/* Invite + action columns stay empty */}
            <td className="px-4 py-3" />
            <td className="px-4 py-3" />
          </tr>
        );
      })}
    </>
  );
}