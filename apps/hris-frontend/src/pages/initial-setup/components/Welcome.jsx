export default function StepWelcome({ onNext }) {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-black mb-3" style={{ letterSpacing: "-0.03em" }}>
          Welcome to HRIS
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "system-ui,sans-serif" }}>
          This appears to be a fresh installation. Before anyone can log in, you need to create the first administrator account.
        </p>
      </div>

      <div className="space-y-3 mb-8">
        {[
          { icon: "🏢", title: "Set up your company", desc: "Name, industry, and team size" },
          { icon: "🔐", title: "Create the admin account", desc: "The first Super Admin — that's you" },
          { icon: "✅", title: "You're in", desc: "Log in and start inviting your team" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-4 px-4 py-3.5 rounded-lg"
            style={{ backgroundColor: "#f8f9fa", border: "1px solid #e5e7eb" }}
          >
            <span className="text-lg shrink-0 mt-0.5">{item.icon}</span>
            <div>
              <p className="text-sm text-black" style={{ fontFamily: "system-ui,sans-serif" }}>{item.title}</p>
              <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>{item.desc}</p>
            </div>
            <div
              className="ml-auto shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#e5e7eb", color: "#6b7280", fontSize: 10, fontFamily: "monospace" }}
            >
              {i + 1}
            </div>
          </div>
        ))}
      </div>

      <div
        className="rounded-lg px-4 py-3 flex items-start gap-2.5 mb-8"
        style={{ backgroundColor: "#eff6ff", border: "1px solid #bfdbfe" }}
      >
        <span className="text-blue-500 shrink-0 mt-0.5 text-sm">ℹ</span>
        <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: "system-ui,sans-serif" }}>
          This setup screen is shown <strong className="text-black">only once</strong>. Once your admin account is created, this page becomes permanently inaccessible — even to admins.
        </p>
      </div>

      <button
        onClick={onNext}
        className="w-full py-3 rounded-lg text-sm font-medium bg-black text-white hover:opacity-90 transition-all cursor-pointer"
        style={{ fontFamily: "system-ui,sans-serif" }}
      >
        Get Started →
      </button>
    </div>
  );
}