"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { parseLocalDateTime, formatDateTime } from "../../../utils/dateUtils";
import {
  Icon,
  Icons,
  fmtPrice,
  STATUS_STYLES,
  STATUS_DOT,
} from "../data/compData";
import Modal from "./Modal";
import BookingForm from "./BookingForm";
import ViewBooking from "./ViewBooking";
import DeleteConfirm from "./DeleteConfirm";
import CalendarTab from "../CalendarComponents/CalendarTab";
import PackagesTab from "../PackagesComponents/PackagesTab";

// ── Types ─────────────────────────────────────────────────────────────────────
interface Customer {
  name: string;
  email: string;
  phone: string;
  description?: string;
}

interface Service {
  id: number;
  title: string;
  price: number;
}

interface Addon {
  id: number;
  name: string;
  price: number;
}

interface Booking {
  id: string;
  date: string;
  time: string;
  status: "Confirmed" | "Pending" | "Cancelled";
  totalPrice: number;
  customer: Customer;
  service: Service;
  addons: Addon[];
  proof?: string | null;
}

type ModalState =
  | { type: "edit"; booking: Booking }
  | { type: "view"; booking: Booking }
  | { type: "delete"; booking: Booking }
  | {
      type: "statusConfirm";
      booking: Booking;
      newStatus: "Confirmed" | "Cancelled";
    }
  | null;

// ── Sun / Moon icons ──────────────────────────────────────────────────────────
const SunIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

// ── Status Confirm Modal ──────────────────────────────────────────────────────
interface StatusConfirmModalProps {
  booking: Booking;
  newStatus: "Confirmed" | "Cancelled";
  onConfirm: () => void;
  onCancel: () => void;
}

function StatusConfirmModal({
  booking,
  newStatus,
  onConfirm,
  onCancel,
}: StatusConfirmModalProps) {
  const isConfirm = newStatus === "Confirmed";
  return (
    <div className="space-y-5 text-sm">
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto ${
          isConfirm ? "bg-emerald-950/60" : "bg-[#A30A24]/10"
        }`}
      >
        {isConfirm ? (
          <svg
            className="w-7 h-7 text-emerald-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          <svg
            className="w-7 h-7 text-[#A30A24]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>

      <div className="text-center space-y-1">
        <p
          className="font-bold text-base"
          style={{ color: "var(--text-primary)" }}
        >
          {isConfirm ? "Confirm Booking?" : "Cancel Booking?"}
        </p>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          {isConfirm
            ? "This will mark the booking as confirmed."
            : "This will mark the booking as cancelled. This action cannot be undone."}
        </p>
      </div>

      <div
        className="rounded-xl p-4 space-y-2.5"
        style={{
          background: "var(--bg-raised)",
          border: "1px solid var(--border-input)",
        }}
      >
        {(
          [
            ["Customer", booking.customer?.name || "Unknown"],
            ["Service", booking.service?.title || "Service"],
            [
              "Schedule",
              formatDateTime(parseLocalDateTime(booking.date, booking.time)),
            ],
          ] as [string, string][]
        ).map(([label, val]) => (
          <div key={label} className="flex justify-between">
            <span
              className="text-[10px] font-mono tracking-[2px] uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              {label}
            </span>
            <span
              className="text-xs font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              {val}
            </span>
          </div>
        ))}
        <div
          className="flex justify-between pt-1"
          style={{ borderTop: "1px solid var(--border-input)" }}
        >
          <span
            className="text-[10px] font-mono tracking-[2px] uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            Total
          </span>
          <span className="text-sm font-bold text-[#A30A24]">
            {fmtPrice(booking.totalPrice)}
          </span>
        </div>
      </div>

      <div className="flex gap-3 pt-1">
        <button
          onClick={onCancel}
          className="flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer"
          style={{
            border: "1px solid var(--border-input)",
            color: "var(--text-muted)",
            background: "transparent",
          }}
        >
          Go Back
        </button>
        <button
          onClick={onConfirm}
          className={`flex-1 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer ${
            isConfirm ? "bg-emerald-600" : "bg-[#A30A24]"
          }`}
        >
          {isConfirm ? "Yes, Confirm" : "Yes, Cancel"}
        </button>
      </div>
    </div>
  );
}

// ── Sidebar nav item ──────────────────────────────────────────────────────────
interface NavItemProps {
  label: string;
  icon: string;
  active: boolean;
  open: boolean;
  onClick: () => void;
}

function NavItem({ label, icon, active, open, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all cursor-pointer"
      style={{
        background: active ? "#A30A24" : "transparent",
        color: active ? "#fff" : "var(--text-muted)",
      }}
      onMouseEnter={(e) => {
        if (!active) {
          (e.currentTarget as HTMLButtonElement).style.background =
            "var(--bg-raised)";
          (e.currentTarget as HTMLButtonElement).style.color =
            "var(--text-primary)";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          (e.currentTarget as HTMLButtonElement).style.background =
            "transparent";
          (e.currentTarget as HTMLButtonElement).style.color =
            "var(--text-muted)";
        }
      }}
    >
      <Icon d={icon} size={16} strokeWidth={2} />
      {open && (
        <span className="font-medium font-mono tracking-wide text-xs uppercase">
          {label}
        </span>
      )}
    </button>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────
export default function BookingsDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [modal, setModal] = useState<ModalState>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("Bookings");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const router = useRouter();

  // Persist theme to localStorage
  // sync to <html> on mount
  useEffect(() => {
    const saved = localStorage.getItem("blink-theme") as
      | "dark"
      | "light"
      | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "dark"); // default
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("blink-theme", next);
    document.documentElement.setAttribute("data-theme", next); // ← add this
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/bookings");
        const data = await res.json();
        const safe = Array.isArray(data) ? data : [];
        setBookings(
          safe.map((b: Booking) => ({
            ...b,
            customer: {
              name: b.customer?.name || "Unknown",
              email: b.customer?.email || "",
              phone: b.customer?.phone || "",
              description: b.customer?.description,
            },
            service: {
              id: b.service?.id || 0,
              title: b.service?.title || "Service",
              price: b.service?.price || 0,
            },
            addons: Array.isArray(b.addons) ? b.addons : [],
          })),
        );
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered = bookings.filter((b) => {
    const q = search.toLowerCase();
    const matchQ =
      !q ||
      b.customer.name.toLowerCase().includes(q) ||
      b.id.toLowerCase().includes(q) ||
      b.service.title.toLowerCase().includes(q);
    const matchS = statusFilter === "All" || b.status === statusFilter;
    return matchQ && matchS;
  });

  const stats = {
    total: bookings.length,
    confirmed: bookings.filter((b) => b.status === "Confirmed").length,
    pending: bookings.filter((b) => b.status === "Pending").length,
    revenue: bookings
      .filter((b) => b.status === "Confirmed")
      .reduce((s, b) => s + b.totalPrice, 0),
  };

  const closeModal = () => setModal(null);

  const handleEdit = (data: Booking) => {
    setBookings((p) =>
      p.map((b) =>
        modal && modal.type === "edit" && b.id === modal.booking.id
          ? { ...b, ...data, id: b.id }
          : b,
      ),
    );
    closeModal();
  };

  const handleDelete = () => {
    setBookings((p) =>
      p.filter(
        (b) => !(modal && modal.type === "delete" && b.id === modal.booking.id),
      ),
    );
    closeModal();
  };

  const updateBookingStatus = async (
    id: string,
    newStatus: "Confirmed" | "Cancelled",
  ) => {
    const prev = bookings;
    closeModal();
    setBookings((p) =>
      p.map((b) => (b.id === id ? { ...b, status: newStatus } : b)),
    );
    try {
      const res = await fetch(`/api/bookings/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error();
    } catch {
      setBookings(prev);
      alert("Failed to update booking status");
    }
  };

  const promptStatusChange = (
    booking: Booking,
    newStatus: "Confirmed" | "Cancelled",
  ) => setModal({ type: "statusConfirm", booking, newStatus });

  const isPastBooking = (b: Booking) => {
    if (!b.date) return false;
    return parseLocalDateTime(b.date, b.time) < new Date();
  };

  const byDateAsc = (a: Booking, b: Booking) =>
    parseLocalDateTime(a.date, a.time).getTime() -
    parseLocalDateTime(b.date, b.time).getTime();

  const currentBookings = filtered
    .filter((b) => !isPastBooking(b))
    .sort(byDateAsc);
  const pastBookings = filtered.filter((b) => isPastBooking(b)).sort(byDateAsc);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    router.replace("/login");
  };

  const TABLE_HEADS = [
    "Booking ID",
    "Customer",
    "Service",
    "Schedule",
    "Total",
    "Status",
    "Actions",
  ];

  return (
    <>
      <div
        data-theme={theme}
        className="flex h-screen overflow-hidden font-sans transition-colors duration-200"
        style={{ background: "var(--bg-base)" }}
      >
        {/* ── Sidebar ──────────────────────────────────────────────────── */}
        <aside
          className={`flex flex-col shrink-0 transition-all duration-300 ${sidebarOpen ? "w-56" : "w-17"}`}
          style={{
            background: "var(--bg-surface)",
            borderRight: "1px solid var(--border)",
          }}
        >
          {/* Logo */}
          <div
            className="px-4 py-5"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#A30A24] flex items-center justify-center shrink-0">
                <Icon d={Icons.logo} size={18} stroke="#fff" strokeWidth={2} />
              </div>
              {sidebarOpen && (
                <div>
                  <p
                    className="text-xs font-extrabold tracking-tight leading-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    BLINK
                  </p>
                  <p
                    className="text-[9px] font-mono tracking-[2px] uppercase"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Admin Panel
                  </p>
                </div>
              )}
            </div>
          </div>

          {!sidebarOpen && (
            <div
              className="flex flex-col items-center gap-1.5 py-3"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 rounded-sm"
                  style={{ background: "var(--border)" }}
                />
              ))}
            </div>
          )}

          {/* Nav */}
          <nav className="flex-1 py-4 space-y-1 px-2">
            {[
              { label: "Bookings", icon: Icons.bookings },
              { label: "Calendar", icon: Icons.calendar },
              { label: "Packages", icon: Icons.package },
            ].map((item) => (
              <NavItem
                key={item.label}
                label={item.label}
                icon={item.icon}
                active={activeTab === item.label}
                open={sidebarOpen}
                onClick={() => setActiveTab(item.label)}
              />
            ))}
          </nav>

          {/* Bottom controls */}
          <div
            className="px-2 pb-4 space-y-1 pt-3"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all cursor-pointer"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "var(--bg-raised)";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--text-muted)";
              }}
              title={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              {sidebarOpen && (
                <span className="text-xs font-mono tracking-wide uppercase">
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </span>
              )}
            </button>

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all cursor-pointer"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "var(--bg-raised)";
                (e.currentTarget as HTMLButtonElement).style.color = "#f87171";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--text-muted)";
              }}
            >
              <Icon d={Icons.logout} size={15} />
              {sidebarOpen && (
                <span className="text-xs font-mono tracking-wide uppercase">
                  Logout
                </span>
              )}
            </button>

            <button
              onClick={() => setSidebarOpen((o) => !o)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all cursor-pointer"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "var(--bg-raised)";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--text-muted)";
              }}
            >
              <Icon d={sidebarOpen ? Icons.close : Icons.filter} size={15} />
              {sidebarOpen && (
                <span className="text-xs font-mono tracking-wide uppercase">
                  Collapse
                </span>
              )}
            </button>
          </div>
        </aside>

        {/* ── Main area ──────────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top bar */}
          <header
            className="px-7 py-4 flex items-center justify-between shrink-0"
            style={{
              background: "var(--bg-surface)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div>
              <p className="text-[10px] font-mono tracking-[3px] text-[#A30A24] uppercase mb-0.5">
                ◳ {activeTab}
              </p>
              <h1
                className="text-lg font-extrabold tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                {activeTab === "Bookings"
                  ? "Booking Management"
                  : activeTab === "Calendar"
                    ? "Availability Calendar"
                    : "Service Packages"}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="text-[10px] font-mono tracking-[2px] uppercase hidden md:block"
                style={{ color: "var(--text-muted)" }}
              >
                Blink Creative Studio
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            </div>
          </header>

          <main
            className="flex-1 overflow-y-auto px-7 py-6 space-y-5"
            style={{ background: "var(--bg-base)" }}
          >
            {activeTab === "Calendar" ? (
              <CalendarTab />
            ) : activeTab === "Packages" ? (
              <PackagesTab />
            ) : (
              <div className="space-y-5">
                {/* Stats */}
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                  {[
                    {
                      label: "Total Bookings",
                      value: stats.total,
                      sub: "All time",
                      icon: Icons.bookings,
                      red: true,
                    },
                    {
                      label: "Confirmed",
                      value: stats.confirmed,
                      sub: "Active bookings",
                      icon: Icons.check,
                      red: false,
                    },
                    {
                      label: "Pending",
                      value: stats.pending,
                      sub: "Awaiting confirmation",
                      icon: Icons.calendar,
                      red: false,
                    },
                    {
                      label: "Revenue",
                      value: fmtPrice(stats.revenue),
                      sub: "From confirmed",
                      icon: Icons.money,
                      red: false,
                    },
                  ].map(({ label, value, sub, icon, red }) => (
                    <div
                      key={label}
                      className="rounded-xl p-5 flex items-start justify-between"
                      style={{
                        background: red
                          ? "var(--accent-bg)"
                          : "var(--bg-raised)",
                        border: `1px solid ${red ? "var(--accent-border)" : "var(--border)"}`,
                      }}
                    >
                      <div>
                        <p
                          className="text-[10px] font-mono tracking-[2px] uppercase mb-1"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {label}
                        </p>
                        <p
                          className="text-2xl font-extrabold tracking-tight"
                          style={{
                            color: red ? "#A30A24" : "var(--text-primary)",
                          }}
                        >
                          {value}
                        </p>
                        <p
                          className="text-[10px] font-mono mt-1"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {sub}
                        </p>
                      </div>
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{
                          background: red
                            ? "var(--accent-bg)"
                            : "var(--border)",
                        }}
                      >
                        <Icon
                          d={icon}
                          size={16}
                          stroke={red ? "#A30A24" : "var(--text-muted)"}
                          strokeWidth={2}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* ── Current Bookings table ───────────────────────── */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {/* Filters bar */}
                  <div
                    className="flex flex-wrap items-center gap-3 px-6 py-4"
                    style={{ borderBottom: "1px solid var(--border)" }}
                  >
                    <div className="relative flex-1 min-w-50 max-w-xs">
                      <span
                        className="absolute left-3 top-1/2 -translate-y-1/2"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <Icon d={Icons.search} size={13} />
                      </span>
                      <input
                        className="w-full pl-9 pr-4 py-2 rounded-lg text-sm font-mono focus:outline-none transition"
                        style={{
                          background: "var(--bg-input)",
                          border: "1px solid var(--border-input)",
                          color: "var(--text-primary)",
                        }}
                        placeholder="Search bookings…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>

                    <div className="flex gap-1.5 flex-wrap">
                      {["All", "Confirmed", "Pending", "Cancelled"].map((s) => (
                        <button
                          key={s}
                          onClick={() => setStatusFilter(s)}
                          className="px-3.5 py-1.5 rounded-lg text-[10px] font-mono tracking-[2px] uppercase font-semibold transition-all cursor-pointer"
                          style={{
                            background:
                              statusFilter === s
                                ? "#A30A24"
                                : "var(--bg-input)",
                            border: `1px solid ${statusFilter === s ? "#A30A24" : "var(--border-input)"}`,
                            color:
                              statusFilter === s ? "#fff" : "var(--text-muted)",
                          }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>

                    <span
                      className="ml-auto text-[10px] font-mono tracking-[2px] uppercase"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {filtered.length} record{filtered.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr style={{ borderBottom: "1px solid var(--border)" }}>
                          {TABLE_HEADS.map((h) => (
                            <th
                              key={h}
                              className="text-left px-6 py-3.5 text-[10px] font-mono tracking-[2px] uppercase"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {loading ? (
                          <tr>
                            <td colSpan={7} className="text-center py-16">
                              <div className="flex flex-col items-center gap-3">
                                <Icon
                                  d={Icons.bookings}
                                  size={28}
                                  stroke="var(--border-input)"
                                  strokeWidth={1.5}
                                />
                                <p
                                  className="text-xs font-mono tracking-[2px] uppercase"
                                  style={{ color: "var(--text-faint)" }}
                                >
                                  Loading bookings…
                                </p>
                              </div>
                            </td>
                          </tr>
                        ) : currentBookings.length === 0 ? (
                          <tr>
                            <td colSpan={7} className="text-center py-16">
                              <div className="flex flex-col items-center gap-3">
                                <Icon
                                  d={Icons.bookings}
                                  size={28}
                                  stroke="var(--border-input)"
                                  strokeWidth={1.5}
                                />
                                <p
                                  className="text-xs font-mono tracking-[2px] uppercase"
                                  style={{ color: "var(--text-faint)" }}
                                >
                                  No bookings found
                                </p>
                              </div>
                            </td>
                          </tr>
                        ) : (
                          currentBookings.map((b) => (
                            <tr
                              key={b.id}
                              className="transition-colors group"
                              style={{
                                borderTop: "1px solid var(--border-subtle)",
                              }}
                              onMouseEnter={(e) =>
                                ((
                                  e.currentTarget as HTMLTableRowElement
                                ).style.background = "var(--bg-raised)")
                              }
                              onMouseLeave={(e) =>
                                ((
                                  e.currentTarget as HTMLTableRowElement
                                ).style.background = "transparent")
                              }
                            >
                              <td className="px-6 py-4">
                                <span
                                  className="font-mono text-[10px] font-bold px-2 py-1 rounded tracking-wider"
                                  style={{
                                    background: "var(--accent-bg)",
                                    color: "#A30A24",
                                  }}
                                >
                                  #{b.id}
                                </span>
                              </td>

                              <td className="px-6 py-4">
                                <div className="flex items-center gap-2.5">
                                  <div className="w-8 h-8 rounded-full bg-[#A30A24] flex items-center justify-center text-white text-xs font-bold shrink-0">
                                    {(b.customer?.name || "?")[0].toUpperCase()}
                                  </div>
                                  <div>
                                    <p
                                      className="text-xs font-semibold"
                                      style={{ color: "var(--text-primary)" }}
                                    >
                                      {b.customer?.name || "Unknown"}
                                    </p>
                                    <p
                                      className="text-[10px] font-mono"
                                      style={{ color: "var(--text-muted)" }}
                                    >
                                      {b.customer?.email || "—"}
                                    </p>
                                  </div>
                                </div>
                              </td>

                              <td className="px-6 py-4">
                                <p
                                  className="text-xs font-medium"
                                  style={{ color: "var(--text-primary)" }}
                                >
                                  {b.service?.title || "Service"}
                                </p>
                                {b.addons.length > 0 && (
                                  <p
                                    className="text-[10px] font-mono mt-0.5"
                                    style={{ color: "var(--text-muted)" }}
                                  >
                                    +{b.addons.length} add-on
                                    {b.addons.length > 1 ? "s" : ""}
                                  </p>
                                )}
                              </td>

                              <td className="px-6 py-4">
                                <p
                                  className="text-xs font-mono"
                                  style={{ color: "var(--text-primary)" }}
                                >
                                  {formatDateTime(
                                    parseLocalDateTime(b.date, b.time),
                                  )}
                                </p>
                              </td>

                              <td className="px-6 py-4">
                                <span className="text-sm font-bold font-mono text-[#A30A24]">
                                  {fmtPrice(b.totalPrice)}
                                </span>
                              </td>

                              <td className="px-6 py-4">
                                <span
                                  className={`inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[1px] uppercase px-2.5 py-1 rounded-full font-semibold ${STATUS_STYLES[b.status]}`}
                                >
                                  <span
                                    className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[b.status]}`}
                                  />
                                  {b.status}
                                </span>
                              </td>

                              <td className="px-6 py-4">
                                <div className="flex items-center gap-1">
                                  <button
                                    onClick={() =>
                                      setModal({ type: "view", booking: b })
                                    }
                                    title="View"
                                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                                    style={{ color: "var(--text-muted)" }}
                                    onMouseEnter={(e) => {
                                      (
                                        e.currentTarget as HTMLButtonElement
                                      ).style.background = "var(--accent-bg)";
                                      (
                                        e.currentTarget as HTMLButtonElement
                                      ).style.color = "#A30A24";
                                    }}
                                    onMouseLeave={(e) => {
                                      (
                                        e.currentTarget as HTMLButtonElement
                                      ).style.background = "transparent";
                                      (
                                        e.currentTarget as HTMLButtonElement
                                      ).style.color = "var(--text-muted)";
                                    }}
                                  >
                                    <Icon d={Icons.eye} size={14} />
                                  </button>
                                  <button
                                    onClick={() =>
                                      setModal({ type: "edit", booking: b })
                                    }
                                    title="Edit"
                                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                                    style={{ color: "var(--text-muted)" }}
                                    onMouseEnter={(e) => {
                                      (
                                        e.currentTarget as HTMLButtonElement
                                      ).style.background =
                                        "rgba(59,130,246,0.1)";
                                      (
                                        e.currentTarget as HTMLButtonElement
                                      ).style.color = "#60a5fa";
                                    }}
                                    onMouseLeave={(e) => {
                                      (
                                        e.currentTarget as HTMLButtonElement
                                      ).style.background = "transparent";
                                      (
                                        e.currentTarget as HTMLButtonElement
                                      ).style.color = "var(--text-muted)";
                                    }}
                                  >
                                    <Icon d={Icons.edit} size={14} />
                                  </button>
                                  {b.status !== "Confirmed" && (
                                    <button
                                      onClick={() =>
                                        promptStatusChange(b, "Confirmed")
                                      }
                                      className="px-2.5 py-1 text-[10px] font-mono tracking-[1px] uppercase font-semibold rounded-full
                                                 bg-emerald-950/60 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer"
                                    >
                                      Confirm
                                    </button>
                                  )}
                                  {b.status !== "Cancelled" && (
                                    <button
                                      onClick={() =>
                                        promptStatusChange(b, "Cancelled")
                                      }
                                      className="px-2.5 py-1 text-[10px] font-mono tracking-[1px] uppercase font-semibold rounded-full
                                                 bg-[#A30A24]/10 text-[#A30A24] hover:bg-[#A30A24] hover:text-white transition-colors cursor-pointer"
                                    >
                                      Cancel
                                    </button>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ── Past Bookings ────────────────────────────────── */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="flex items-center gap-3 px-6 py-4"
                    style={{ borderBottom: "1px solid var(--border)" }}
                  >
                    <span
                      className="text-[10px] font-mono tracking-[3px] uppercase"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Past Bookings
                    </span>
                    <div
                      className="flex-1 border-t border-dashed"
                      style={{ borderColor: "var(--border)" }}
                    />
                    <span
                      className="text-[10px] font-mono"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {pastBookings.length} record
                      {pastBookings.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr
                          style={{
                            borderBottom: "1px solid var(--border-subtle)",
                          }}
                        >
                          {[
                            "Booking ID",
                            "Customer",
                            "Service",
                            "Schedule",
                            "Total",
                            "Status",
                            "Actions",
                          ].map((h) => (
                            <th
                              key={h}
                              className="text-left px-6 py-3.5 text-[10px] font-mono tracking-[2px] uppercase"
                              style={{ color: "var(--text-faint)" }}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {pastBookings.length === 0 ? (
                          <tr>
                            <td
                              colSpan={7}
                              className="text-center py-10 text-[10px] font-mono tracking-[2px] uppercase"
                              style={{ color: "var(--text-faint)" }}
                            >
                              No past bookings
                            </td>
                          </tr>
                        ) : (
                          pastBookings.map((b) => (
                            <tr
                              key={b.id}
                              className="transition-opacity"
                              style={{
                                borderTop: "1px solid var(--border-subtle)",
                                opacity: 0.5,
                              }}
                              onMouseEnter={(e) =>
                                ((
                                  e.currentTarget as HTMLTableRowElement
                                ).style.opacity = "0.75")
                              }
                              onMouseLeave={(e) =>
                                ((
                                  e.currentTarget as HTMLTableRowElement
                                ).style.opacity = "0.5")
                              }
                            >
                              <td className="px-6 py-3.5">
                                <span
                                  className="font-mono text-[10px]"
                                  style={{ color: "var(--text-muted)" }}
                                >
                                  #{b.id}
                                </span>
                              </td>
                              <td
                                className="px-6 py-3.5 text-xs"
                                style={{ color: "var(--text-muted)" }}
                              >
                                {b.customer?.name || "Unknown"}
                              </td>
                              <td
                                className="px-6 py-3.5 text-xs"
                                style={{ color: "var(--text-muted)" }}
                              >
                                {b.service?.title}
                              </td>
                              <td
                                className="px-6 py-3.5 text-xs font-mono"
                                style={{ color: "var(--text-muted)" }}
                              >
                                {formatDateTime(
                                  parseLocalDateTime(b.date, b.time),
                                )}
                              </td>
                              <td
                                className="px-6 py-3.5 text-xs font-mono"
                                style={{ color: "var(--text-muted)" }}
                              >
                                {fmtPrice(b.totalPrice)}
                              </td>
                              <td className="px-6 py-3.5">
                                <span
                                  className={`px-2 py-1 rounded text-[10px] font-mono tracking-[1px] uppercase ${STATUS_STYLES[b.status]}`}
                                >
                                  {b.status}
                                </span>
                              </td>
                              <td className="px-6 py-3.5">
                                <button
                                  onClick={() =>
                                    setModal({ type: "view", booking: b })
                                  }
                                  title="View"
                                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                                  style={{ color: "var(--text-muted)" }}
                                  onMouseEnter={(e) => {
                                    (
                                      e.currentTarget as HTMLButtonElement
                                    ).style.background = "var(--accent-bg)";
                                    (
                                      e.currentTarget as HTMLButtonElement
                                    ).style.color = "#A30A24";
                                  }}
                                  onMouseLeave={(e) => {
                                    (
                                      e.currentTarget as HTMLButtonElement
                                    ).style.background = "transparent";
                                    (
                                      e.currentTarget as HTMLButtonElement
                                    ).style.color = "var(--text-muted)";
                                  }}
                                >
                                  <Icon d={Icons.eye} size={14} />
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>

        {/* ── Modals ─────────────────────────────────────────────────── */}
        {modal?.type === "edit" && (
          <Modal title="Edit Booking" onClose={closeModal}>
            <BookingForm
              initial={modal.booking}
              onSave={handleEdit}
              onCancel={closeModal}
            />
          </Modal>
        )}
        {modal?.type === "view" && (
          <Modal title="Booking Details" onClose={closeModal}>
            <ViewBooking booking={modal.booking} onClose={closeModal} />
          </Modal>
        )}
        {modal?.type === "delete" && (
          <Modal title="Confirm Deletion" onClose={closeModal}>
            <DeleteConfirm
              booking={modal.booking}
              onConfirm={handleDelete}
              onCancel={closeModal}
            />
          </Modal>
        )}
        {modal?.type === "statusConfirm" && (
          <Modal
            title={
              modal.newStatus === "Confirmed"
                ? "Confirm Booking"
                : "Cancel Booking"
            }
            onClose={closeModal}
          >
            <StatusConfirmModal
              booking={modal.booking}
              newStatus={modal.newStatus}
              onConfirm={() =>
                updateBookingStatus(modal.booking.id, modal.newStatus)
              }
              onCancel={closeModal}
            />
          </Modal>
        )}
      </div>
    </>
  );
}
