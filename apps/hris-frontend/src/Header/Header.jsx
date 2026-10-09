import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  LayoutDashboard,
  Users,
  Wallet,
  CalendarClock,
  Briefcase,
  BarChart3, // if your lucide version complains, use ChartColumn
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { logoutUser } from "../services/authServices";
import { logout } from "../store/authSlice";

import BCSLogo from "../assets/logos/BCS_LOGOMARK_RED.png";

import AvatarButton from "./components/AvatarButton";
import DropdownMenu from "./components/DropdownMenu";

const NAV_ITEMS = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "People", path: "/people", icon: Users },
  { label: "Payroll", path: "/payroll", icon: Wallet },
  { label: "Time & Leave", path: "/time-leave", icon: CalendarClock },
  { label: "Recruitment", path: "/recruitment", icon: Briefcase },
  { label: "Reports", path: "/reports", icon: BarChart3 },
];

const STORAGE_KEY = "sidebarCollapsed";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const [open, setOpen] = useState(false);

  // Remember the user's choice across reloads
  const [collapsed, setCollapsed] = useState(
    () => localStorage.getItem(STORAGE_KEY) === "true",
  );
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(collapsed));
  }, [collapsed]);

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

  const onViewProfile = (emp) => {
    navigate(`/people/${emp.id}`);
    setOpen(false);
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
    const handleKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  if (!isAuthenticated || !currentUser) return null;

  return (
    <aside
      className={`relative z-10 sticky top-0 h-screen shrink-0 flex flex-col
        border-r border-slate-200/70 bg-white
        transition-[width] duration-300 ease-in-out
        ${collapsed ? "w-[72px]" : "w-64"}`}
      style={{
        fontFamily:
          "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
      }}
    >
      {/* Collapse / expand toggle, sits on the sidebar edge */}
      <button
        onClick={() => setCollapsed((c) => !c)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        className="absolute -right-3 top-6 z-10 flex h-6 w-6 items-center justify-center
          rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm
          transition hover:text-slate-900 cursor-pointer"
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* Logo */}
      <div className="flex h-16 shrink-0 items-center px-3">
        <button
          onClick={() => navigate("/dashboard")}
          aria-label="Go to dashboard"
          className="flex h-10 w-12 shrink-0 items-center justify-center rounded-xl transition hover:bg-slate-100 cursor-pointer"
        >
          <img src={BCSLogo} alt="BCS" className="h-full w-full object-contain p-1" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1 overflow-y-auto overflow-x-hidden px-3 py-2">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            title={collapsed ? item.label : undefined}
            className={({ isActive }) =>
              `flex h-10 items-center gap-3 overflow-hidden rounded-xl px-[14px]
              text-[13px] font-medium tracking-tight transition-colors ${
                isActive
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              }`
            }
          >
            <item.icon size={20} strokeWidth={1.8} className="shrink-0" />
            <span
              className={`whitespace-nowrap transition-opacity duration-200 ${
                collapsed ? "opacity-0" : "opacity-100"
              }`}
            >
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* User */}
      <div className="relative shrink-0 border-t border-slate-200/70 p-3" ref={containerRef}>
        <AvatarButton
          user={currentUser}
          collapsed={collapsed}
          onClick={() => setOpen((o) => !o)}
          isOpen={open}
        />

        {open && (
          <DropdownMenu
            user={currentUser}
            className="absolute left-full bottom-3 ml-3"
            onClose={() => setOpen(false)}
            onLogout={handleLogout}
            onViewProfile={onViewProfile}
          />
        )}
      </div>
    </aside>
  );
}