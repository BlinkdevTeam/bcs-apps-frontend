import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../services/authServices";
import { logout } from "../store/authSlice";

import BCSLogo from "../assets/logos/BCS_LOGOMARK_RED.png";

import AvatarButton from "./components/AvatarButton";
import DropdownMenu from "./components/DropdownMenu";

const NAV_ITEMS = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "People", path: "/people" },
  // { label: "User Management", path: "/users" },
  { label: "Payroll", path: "/payroll" },
  { label: "Time & Leave", path: "/time-leave" },
  { label: "Recruitment", path: "/recruitment" },
  { label: "Reports", path: "/reports" },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const [open, setOpen] = useState(false);

  const { user: currentUser, isAuthenticated } = useSelector(
    (state) => state.auth,
  );

  const handleLogout = async () => {
    try {
      await logoutUser();
      dispatch(logout());
      navigate("/login", { replace: true });
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  if (!isAuthenticated || !currentUser) return null;

  const activeLabel = NAV_ITEMS.find((item) =>
    location.pathname.startsWith(item.path),
  )?.label;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/75 backdrop-blur-xl supports-backdrop-filter:bg-white/60">
      <div className="mx-auto flex h-16 max-w-400 items-center justify-between gap-6 px-6 lg:px-8">
        {/* Left: logo + nav */}
        <div className="flex min-w-0 items-center gap-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition hover:bg-slate-100 cursor-pointer"
            aria-label="Go to dashboard"
          >
            <img
              src={BCSLogo}
              alt="BCS"
              className="h-full w-full object-contain p-1"
            />
          </button>

          <nav className="hidden items-center gap-1 rounded-full bg-slate-100/80 p-1 ring-1 ring-inset ring-slate-200/60 md:flex">
            {NAV_ITEMS.map((item) => {
              const active = activeLabel === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  className={`whitespace-nowrap rounded-full px-4 py-1.5 text-[13px] font-medium tracking-tight transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                  style={{
                    fontFamily:
                      "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right: avatar */}
        <div className="relative shrink-0" ref={containerRef}>
          <AvatarButton
            user={currentUser}
            onClick={() => setOpen((o) => !o)}
            isOpen={open}
          />

          {open && (
            <DropdownMenu
              user={currentUser}
              onClose={() => setOpen(false)}
              onLogout={handleLogout}
            />
          )}
        </div>
      </div>
    </header>
  );
}