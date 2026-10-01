import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { EmptyState } from "../../components/ui";
import { getDashboardStats } from "../../services/statsService";

const recentActivity = [];

const departments = [
  { name: "Engineering", count: 312, pct: 78 },
  { name: "Sales", count: 204, pct: 51 },
  { name: "Marketing", count: 98, pct: 24 },
  { name: "Operations", count: 187, pct: 47 },
  { name: "HR & Admin", count: 64, pct: 16 },
];

const FONT =
  "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif";

const cardCls =
  "rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.04)]";

export default function Dashboard() {
  /* ---------------- Redux User ---------------- */

  const user = useSelector((state) => state.auth.user);

  const currentUser = user
    ? {
        name: `${user.first_name || ""} ${user.last_name || ""}`.trim(),
      }
    : { name: "User" };

  /* ---------------- State ---------------- */

  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDateTime, setCurrentDateTime] = useState("");

  /* ---------------- Date / Time ---------------- */

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Manila",
      };

      setCurrentDateTime(new Intl.DateTimeFormat("en-PH", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  /* ---------------- Fetch Dashboard Stats ---------------- */

  useEffect(() => {
    async function fetchStats() {
      try {
        setIsLoading(true);

        await new Promise((res) => setTimeout(res, 1500)); // simulate network delay

        const data = await getDashboardStats();

        setStats(data);
      } catch (err) {
        console.error("Failed to fetch stats", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchStats();
  }, []);

  return (
    <div
      className="min-h-screen bg-slate-50 text-slate-900"
      style={{ fontFamily: FONT }}
    >
      <div className="mx-auto max-w-400 px-6 py-8 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
              {currentDateTime}
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Good morning,{" "}
              <span className="bg-linear-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
                {currentUser?.name?.split(" ")[0]}
              </span>
              .
            </h1>
            <p className="mt-1.5 text-sm text-slate-500">
              Here's what's happening across your workspace today.
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className={`${cardCls} h-36 animate-pulse bg-slate-100`}
                />
              ))
            : stats.map((s) => (
                <div
                  key={s.label}
                  className={`${cardCls} p-5 transition-shadow hover:shadow-md`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-xl ring-1 ring-inset ring-indigo-100">
                      {s.icon}
                    </span>

                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${
                        s.positive
                          ? "bg-emerald-50 text-emerald-600 ring-emerald-200"
                          : "bg-rose-50 text-rose-600 ring-rose-200"
                      }`}
                    >
                      {s.positive ? "▲" : "▼"} {s.change}
                    </span>
                  </div>

                  <p className="mb-1 text-3xl font-semibold tracking-tight text-slate-900">
                    {s.value}
                  </p>

                  <p className="text-sm text-slate-500">{s.label}</p>
                </div>
              ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Activity Feed */}
          <div className={`${cardCls} p-6 lg:col-span-2`}>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-base font-semibold tracking-tight text-slate-900">
                Recent Activity
              </h2>

              <button className="rounded-full px-3 py-1 text-xs font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 cursor-pointer">
                View all →
              </button>
            </div>

            <div className="space-y-3">
              {isLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-12 w-full animate-pulse rounded-xl bg-slate-100"
                  />
                ))
              ) : recentActivity.length === 0 ? (
                <EmptyState
                  title="No Recent Activity"
                  description="There have been no actions recently."
                  icon="📝"
                />
              ) : (
                recentActivity.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-xl px-2 py-3 transition-colors hover:bg-slate-50"
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                      style={{ backgroundColor: item.bg, color: item.fg }}
                    >
                      {item.avatar}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-slate-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-slate-500">{item.action}</p>
                    </div>

                    <span className="whitespace-nowrap text-xs text-slate-400">
                      {item.time}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Departments */}
            <div className={`${cardCls} p-6`}>
              <h2 className="mb-5 text-base font-semibold tracking-tight text-slate-900">
                Headcount by Dept.
              </h2>

              <div className="space-y-4">
                {isLoading ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="h-3 w-3/4 animate-pulse rounded bg-slate-200" />
                      <div className="h-1.5 animate-pulse rounded-full bg-slate-100" />
                    </div>
                  ))
                ) : departments.length === 0 ? (
                  <EmptyState
                    title="No Departments"
                    description="There are no departments to display."
                    icon="🏢"
                  />
                ) : (
                  departments.map((d) => (
                    <div key={d.name}>
                      <div className="mb-1.5 flex justify-between">
                        <span className="text-sm font-medium text-slate-700">
                          {d.name}
                        </span>
                        <span className="text-sm tabular-nums text-slate-500">
                          {d.count}
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-linear-to-r from-indigo-500 to-violet-500"
                          style={{
                            width: `${d.pct}%`,
                            transition: "width 1s ease",
                          }}
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}