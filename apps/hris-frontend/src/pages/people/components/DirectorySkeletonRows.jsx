// Varied widths so the placeholder looks like real content, not a grid of identical bars.
const ROWS = [
  { name: 120, email: 170, dept: 90, title: 130 },
  { name: 96, email: 150, dept: 70, title: 110 },
  { name: 140, email: 180, dept: 100, title: 150 },
  { name: 110, email: 160, dept: 80, title: 120 },
  { name: 128, email: 175, dept: 96, title: 140 },
  { name: 100, email: 140, dept: 74, title: 100 },
  { name: 132, email: 168, dept: 88, title: 126 },
  { name: 116, email: 156, dept: 84, title: 136 },
];

function Bar({ w, h = 12, className = "" }) {
  return (
    <div
      className={`rounded bg-gray-200 ${className}`}
      style={{ width: w, height: h }}
    />
  );
}

export default function DirectorySkeletonRows({ count = 8 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const r = ROWS[i % ROWS.length];
        return (
          <tr
            key={i}
            className="animate-pulse"
            style={{ borderBottom: "1px solid #f0f0f0", backgroundColor: "#fff" }}
            aria-hidden="true"
          >
            <td className="py-3 pr-6">
              <div className="flex items-center gap-3">
                <div className="w-[34px] h-[34px] rounded-full bg-gray-200 shrink-0" />
                <div className="space-y-2">
                  <Bar w={r.name} h={13} />
                  <Bar w={r.email} h={10} className="bg-gray-100" />
                </div>
              </div>
            </td>
            <td className="py-3 pr-6">
              <Bar w={r.dept} h={12} />
            </td>
            <td className="py-3 pr-6">
              <Bar w={r.title} h={12} />
            </td>
            <td className="py-3" />
          </tr>
        );
      })}
    </>
  );
}