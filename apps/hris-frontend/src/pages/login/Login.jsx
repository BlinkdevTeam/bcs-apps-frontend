import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { logout } from "../../store/authSlice";

import SignInView from "./components/SignInView";
import ForgotPasswordView from "./components/ForgotPasswordView";
import SetPasswordView from "./components/SetPasswordView";
import LoggedInView from "./components/LoggedInView";

export default function LoginPage() {
  // Manual navigation state (user-driven)
  const [manualView, setManualView] = useState("signin");

  const dispatch = useDispatch();

  const [params] = useSearchParams();
  const token = params.get("token");

  // ✅ Derived view (no useEffect → no warning)
  const view = token ? "set-password-reset" : manualView;

  // After login
  function handleLoginSuccess() {
    setManualView("logged-in");
  }

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#ffffff" }}>
      {/* Left panel — branding */}
      <div
        className="hidden lg:flex flex-col justify-between w-96 flex-shrink-0 p-10"
        style={{ backgroundColor: "#f8f9fa", borderRight: "1px solid #e5e7eb" }}
      >
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2.5 mb-16">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#111" }}
            >
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span
              className="text-black font-medium text-sm"
              style={{
                fontFamily: "system-ui,sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              HRIS SYSTEM
            </span>
          </div>

          {/* Feature list */}
          <div className="space-y-8">
            {[
              {
                icon: "👥",
                title: "People Management",
                desc: "Employees, compensation, documents, org chart",
              },
              {
                icon: "💰",
                title: "Payroll",
                desc: "Cutoffs, payslips, adjustments, contributions",
              },
              {
                icon: "⏱",
                title: "Time & Leave",
                desc: "Attendance, breaks, leave, OT/UT, offsets",
              },
              {
                icon: "🎯",
                title: "Recruitment",
                desc: "Job openings, pipeline, interviews, onboarding",
              },
              {
                icon: "✅",
                title: "Task Management",
                desc: "Projects, assignments, time tracking, comments",
              },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <span className="text-lg flex-shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <p
                    className="text-sm text-black font-medium"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    {f.title}
                  </p>
                  <p
                    className="text-xs text-gray-500 mt-0.5 leading-relaxed"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p
          className="text-xs text-gray-400"
          style={{ fontFamily: "system-ui,sans-serif" }}
        >
          © 2026 HRIS System · All rights reserved
        </p>
      </div>

      {/* Right panel — auth form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* SIGN IN */}
          {view === "signin" && (
            <SignInView
              onLogin={handleLoginSuccess}
              onForgotPassword={() => setManualView("forgot")}
            />
          )}

          {/* FORGOT PASSWORD */}
          {view === "forgot" && (
            <ForgotPasswordView onBack={() => setManualView("signin")} />
          )}

          {/* INVITE PASSWORD SET */}
          {view === "set-password-invite" && (
            <SetPasswordView
              mode="invite"
              onComplete={() => setManualView("signin")}
            />
          )}

           {/* RESET PASSWORD */}
          {view === "set-password-reset" && (
            <SetPasswordView
              token={token}
              onComplete={() => {
                // ✅ Clear token from URL and redirect to login
                window.history.replaceState({}, "", "/login");
                window.location.href = "/login";
              }}
            />
          )}

          {/* LOGGED IN STATE */}
          {view === "logged-in" && (
            <LoggedInView
              onLogout={() => {
                dispatch(logout());
                setManualView("signin");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}