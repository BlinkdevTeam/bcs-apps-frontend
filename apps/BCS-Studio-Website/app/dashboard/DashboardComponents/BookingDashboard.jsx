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
import StatCard from "./StatCard";
import Modal from "./Modal";
import BookingForm from "./BookingForm";
import ViewBooking from "./ViewBooking";
import DeleteConfirm from "./DeleteConfirm";
import CalendarTab from "../CalendarComponents/CalendarTab";
import PackagesTab from "../PackagesComponents/PackagesTab";

// ── Status Confirm Modal ──────────────────────────────────────────────────────
function StatusConfirmModal({ booking, newStatus, onConfirm, onCancel }) {
  const isConfirm = newStatus === "Confirmed";
  return (
    <div className="space-y-5 text-sm">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto ${
        isConfirm ? "bg-emerald-950/60" : "bg-[#A30A24]/10"
      }`}>
        {isConfirm ? (
          <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-7 h-7 text-[#A30A24]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </div>

      <div className="text-center space-y-1">
        <p className="font-bold text-base text-[#1D1D1D]">
          {isConfirm ? "Confirm Booking?" : "Cancel Booking?"}
        </p>
        <p className="text-xs text-[#6E6E6E]">
          {isConfirm
            ? "This will mark the booking as confirmed."
            : "This will mark the booking as cancelled. This action cannot be undone."}
        </p>
      </div>

      <div className="rounded-xl p-4 space-y-2.5 bg-[#0d0d0d] border border-[#2a2a2a]">
        {[
          ["Customer", booking.customer?.name || "Unknown"],
          ["Service",  booking.service?.title  || "Service"],
          ["Schedule", formatDateTime(parseLocalDateTime(booking.date, booking.time))],
        ].map(([label, val]) => (
          <div key={label} className="flex justify-between">
            <span className="text-[10px] font-mono tracking-[2px] uppercase text-[#6E6E6E]">{label}</span>
            <span className="text-xs font-semibold text-[#F7F5F2]">{val}</span>
          </div>
        ))}
        <div className="flex justify-between pt-1 border-t border-[#2a2a2a]">
          <span className="text-[10px] font-mono tracking-[2px] uppercase text-[#6E6E6E]">Total</span>
          <span className="text-sm font-bold text-[#A30A24]">{fmtPrice(booking.totalPrice)}</span>
        </div>
      </div>

      <div className="flex gap-3 pt-1">
        <button
          onClick={onCancel}
          className="flex-1 py-2.5 rounded-lg text-sm font-medium border border-[#2a2a2a]
                     text-[#6E6E6E] hover:bg-[#1e1e1e] transition-colors"
        >
          Go Back
        </button>
        <button
          onClick={onConfirm}
          className={`flex-1 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90 ${
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
function NavItem({ label, icon, active, open, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all cursor-pointer ${
        active
          ? "bg-[#A30A24] text-white"
          : "text-[#6E6E6E] hover:bg-[#1e1e1e] hover:text-[#F7F5F2]"
      }`}
    >
      <Icon d={icon} size={16} strokeWidth={2} />
      {open && <span className="font-medium font-mono tracking-wide text-xs uppercase">{label}</span>}
    </button>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────
export default function BookingsDashboard() {
  const [bookings, setBookings]     = useState([]);
  const [loading, setLoading]       = useState(true);
  const [search, setSearch]         = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [modal, setModal]           = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab]   = useState("Bookings");
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const res  = await fetch("/api/bookings");
        const data = await res.json();
        const safe = Array.isArray(data) ? data : [];
        setBookings(safe.map((b) => ({
          ...b,
          customer: { name: b.customer?.name || "Unknown", email: b.customer?.email || "", phone: b.customer?.phone || "" },
          service:  { id: b.service?.id || 0, title: b.service?.title || "Service", price: b.service?.price || 0 },
          addons:   Array.isArray(b.addons) ? b.addons : [],
        })));
      } catch (err) { console.error(err); }
      finally { setLoading(false); }
    })();
  }, []);

  const filtered = bookings.filter((b) => {
    const q = search.toLowerCase();
    const matchQ = !q || b.customer.name.toLowerCase().includes(q) || b.id.toLowerCase().includes(q) || b.service.title.toLowerCase().includes(q);
    const matchS = statusFilter === "All" || b.status === statusFilter;
    return matchQ && matchS;
  });

  const stats = {
    total:     bookings.length,
    confirmed: bookings.filter((b) => b.status === "Confirmed").length,
    pending:   bookings.filter((b) => b.status === "Pending").length,
    revenue:   bookings.filter((b) => b.status === "Confirmed").reduce((s, b) => s + b.totalPrice, 0),
  };

  const closeModal = () => setModal(null);

  const handleCreate = (data) => { setBookings((p) => [...p, { ...data, id: uid(), proof: null }]); closeModal(); };
  const handleEdit   = (data) => { setBookings((p) => p.map((b) => b.id === modal.booking.id ? { ...b, ...data, id: b.id } : b)); closeModal(); };
  const handleDelete = ()     => { setBookings((p) => p.filter((b) => b.id !== modal.booking.id)); closeModal(); };

  const updateBookingStatus = async (id, newStatus) => {
    const prev = bookings;
    closeModal();
    setBookings((p) => p.map((b) => b.id === id ? { ...b, status: newStatus } : b));
    try {
      const res = await fetch(`/api/bookings/${id}/status`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status: newStatus }) });
      if (!res.ok) throw new Error();
    } catch { setBookings(prev); alert("Failed to update booking status"); }
  };

  const promptStatusChange = (booking, newStatus) => setModal({ type: "statusConfirm", booking, newStatus });

  const isPastBooking = (b) => {
  if (!b.date) return false;
  return parseLocalDateTime(b.date, b.time) < new Date();
};

// ── Add this sort helper ──
const byDateAsc = (a, b) =>
  parseLocalDateTime(a.date, a.time).getTime() -
  parseLocalDateTime(b.date, b.time).getTime();

const currentBookings = filtered.filter((b) => !isPastBooking(b)).sort(byDateAsc);
const pastBookings    = filtered.filter((b) =>  isPastBooking(b)).sort(byDateAsc);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    router.replace("/login");
  };

  // ── Table columns ──
  const TABLE_HEADS = ["Booking ID", "Customer", "Service", "Schedule", "Total", "Status", "Actions"];

  return (
    <div className="flex h-screen overflow-hidden bg-[#0d0d0d] font-sans">

      {/* ── Sidebar ──────────────────────────────────────────────────────── */}
      <aside className={`flex flex-col shrink-0 transition-all duration-300 bg-[#111111] border-r border-[#1e1e1e] ${
        sidebarOpen ? "w-56" : "w-[68px]"
      }`}>

        {/* Logo */}
        <div className="px-4 py-5 border-b border-[#1e1e1e]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#A30A24] flex items-center justify-center shrink-0">
              <Icon d={Icons.logo} size={18} stroke="#fff" strokeWidth={2} />
            </div>
            {sidebarOpen && (
              <div>
                <p className="text-xs font-extrabold text-[#F7F5F2] tracking-tight leading-tight">
                  BLINK
                </p>
                <p className="text-[9px] font-mono tracking-[2px] text-[#6E6E6E] uppercase">
                  Admin Panel
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Sprocket dots when collapsed */}
        {!sidebarOpen && (
          <div className="flex flex-col items-center gap-1.5 py-3 border-b border-[#1e1e1e]">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="w-2 h-2 rounded-sm bg-[#1e1e1e]" />
            ))}
          </div>
        )}

        {/* Nav */}
        <nav className="flex-1 py-4 space-y-1 px-2">
          {[
            { label: "Bookings", icon: Icons.bookings },
            { label: "Calendar", icon: Icons.calendar },
            { label: "Packages", icon: Icons.package  },
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
        <div className="px-2 pb-4 space-y-1 border-t border-[#1e1e1e] pt-3">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#6E6E6E]
                       hover:bg-[#1e1e1e] hover:text-red-400 transition-all cursor-pointer"
          >
            <Icon d={Icons.logout} size={15} />
            {sidebarOpen && <span className="text-xs font-mono tracking-wide uppercase">Logout</span>}
          </button>
          <button
            onClick={() => setSidebarOpen((o) => !o)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#6E6E6E]
                       hover:bg-[#1e1e1e] hover:text-[#F7F5F2] transition-all cursor-pointer"
          >
            <Icon d={sidebarOpen ? Icons.close : Icons.filter} size={15} />
            {sidebarOpen && <span className="text-xs font-mono tracking-wide uppercase">Collapse</span>}
          </button>
        </div>
      </aside>

      {/* ── Main area ────────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top bar */}
        <header className="bg-[#111111] border-b border-[#1e1e1e] px-7 py-4 flex items-center justify-between shrink-0">
          <div>
            <p className="text-[10px] font-mono tracking-[3px] text-[#A30A24] uppercase mb-0.5">
              ◳ {activeTab}
            </p>
            <h1 className="text-lg font-extrabold text-[#F7F5F2] tracking-tight">
              {activeTab === "Bookings" ? "Booking Management"
               : activeTab === "Calendar" ? "Availability Calendar"
               : "Service Packages"}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-[2px] text-[#6E6E6E] uppercase hidden md:block">
              Blink Creative Studio
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-[#0d0d0d] px-7 py-6 space-y-5">

          {/* ── Calendar / Packages tabs ───────────────────────────────── */}
          {activeTab === "Calendar" ? (
            <CalendarTab
              bookings={bookings.map((b) => {
                const dt = parseLocalDateTime(b.date, b.time);
                return {
                  id: b.id, status: b.status,
                  customer: b.customer?.name || "Unknown",
                  service:  b.service?.title  || "Service",
                  date: dt.toISOString().slice(0, 10),
                  time: dt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                };
              })}
            />
          ) : activeTab === "Packages" ? (
            <PackagesTab />
          ) : (

            /* ── Bookings tab ─────────────────────────────────────────── */
            <div className="space-y-5">

              {/* Stats */}
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                {[
                  { label: "Total Bookings",  value: stats.total,              sub: "All time",              icon: Icons.bookings, red: true  },
                  { label: "Confirmed",        value: stats.confirmed,          sub: "Active bookings",       icon: Icons.check,    red: false },
                  { label: "Pending",          value: stats.pending,            sub: "Awaiting confirmation", icon: Icons.calendar, red: false },
                  { label: "Revenue",          value: fmtPrice(stats.revenue),  sub: "From confirmed",        icon: Icons.money,    red: false },
                ].map(({ label, value, sub, icon, red }) => (
                  <div key={label} className={`rounded-xl border p-5 flex items-start justify-between ${
                    red ? "bg-[#A30A24]/10 border-[#A30A24]/30" : "bg-[#161616] border-[#1e1e1e]"
                  }`}>
                    <div>
                      <p className="text-[10px] font-mono tracking-[2px] uppercase text-[#6E6E6E] mb-1">{label}</p>
                      <p className={`text-2xl font-extrabold tracking-tight ${red ? "text-[#A30A24]" : "text-[#F7F5F2]"}`}>{value}</p>
                      <p className="text-[10px] text-[#6E6E6E] font-mono mt-1">{sub}</p>
                    </div>
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      red ? "bg-[#A30A24]/20" : "bg-[#1e1e1e]"
                    }`}>
                      <Icon d={icon} size={16} stroke={red ? "#A30A24" : "#6E6E6E"} strokeWidth={2} />
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Current Bookings table ─────────────────────────────── */}
              <div className="bg-[#111111] rounded-2xl border border-[#1e1e1e] overflow-hidden">

                {/* Filters bar */}
                <div className="flex flex-wrap items-center gap-3 px-6 py-4 border-b border-[#1e1e1e]">
                  <div className="relative flex-1 min-w-[200px] max-w-xs">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6E6E6E]">
                      <Icon d={Icons.search} size={13} />
                    </span>
                    <input
                      className="w-full pl-9 pr-4 py-2 rounded-lg text-sm bg-[#0d0d0d] border border-[#2a2a2a]
                                 text-[#F7F5F2] placeholder:text-[#3a3a3a] font-mono
                                 focus:outline-none focus:ring-1 focus:ring-[#A30A24] focus:border-[#A30A24] transition"
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
                        className={`px-3.5 py-1.5 rounded-lg text-[10px] font-mono tracking-[2px] uppercase font-semibold transition-all ${
                          statusFilter === s
                            ? "bg-[#A30A24] text-white"
                            : "bg-[#0d0d0d] border border-[#2a2a2a] text-[#6E6E6E] hover:border-[#A30A24] hover:text-[#A30A24]"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>

                  <span className="ml-auto text-[10px] font-mono tracking-[2px] uppercase text-[#6E6E6E]">
                    {filtered.length} record{filtered.length !== 1 ? "s" : ""}
                  </span>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#1e1e1e]">
                        {TABLE_HEADS.map((h) => (
                          <th key={h} className="text-left px-6 py-3.5 text-[10px] font-mono tracking-[2px] uppercase text-[#6E6E6E]">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {currentBookings.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="text-center py-16">
                            <div className="flex flex-col items-center gap-3">
                              <Icon d={Icons.bookings} size={28} stroke="#2a2a2a" strokeWidth={1.5} />
                              <p className="text-xs font-mono tracking-[2px] uppercase text-[#3a3a3a]">
                                No bookings found
                              </p>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        currentBookings.map((b) => (
                          <tr key={b.id} className="border-t border-[#1a1a1a] hover:bg-[#161616] transition-colors group">

                            {/* ID */}
                            <td className="px-6 py-4">
                              <span className="font-mono text-[10px] font-bold px-2 py-1 rounded bg-[#A30A24]/10 text-[#A30A24] tracking-wider">
                                #{b.id}
                              </span>
                            </td>

                            {/* Customer */}
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-full bg-[#A30A24] flex items-center justify-center text-white text-xs font-bold shrink-0">
                                  {(b.customer?.name || "?")[0].toUpperCase()}
                                </div>
                                <div>
                                  <p className="text-xs font-semibold text-[#F7F5F2]">{b.customer?.name || "Unknown"}</p>
                                  <p className="text-[10px] text-[#6E6E6E] font-mono">{b.customer?.email || "—"}</p>
                                </div>
                              </div>
                            </td>

                            {/* Service */}
                            <td className="px-6 py-4">
                              <p className="text-xs font-medium text-[#F7F5F2]">{b.service?.title || "Service"}</p>
                              {b.addons.length > 0 && (
                                <p className="text-[10px] text-[#6E6E6E] font-mono mt-0.5">
                                  +{b.addons.length} add-on{b.addons.length > 1 ? "s" : ""}
                                </p>
                              )}
                            </td>

                            {/* Schedule */}
                            <td className="px-6 py-4">
                              <p className="text-xs font-mono text-[#F7F5F2]">
                                {formatDateTime(parseLocalDateTime(b.date, b.time))}
                              </p>
                            </td>

                            {/* Total */}
                            <td className="px-6 py-4">
                              <span className="text-sm font-bold text-[#A30A24] font-mono">
                                {fmtPrice(b.totalPrice)}
                              </span>
                            </td>

                            {/* Status */}
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[1px] uppercase px-2.5 py-1 rounded-full font-semibold ${STATUS_STYLES[b.status]}`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[b.status]}`} />
                                {b.status}
                              </span>
                            </td>

                            {/* Actions */}
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => setModal({ type: "view", booking: b })}
                                  title="View"
                                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[#6E6E6E] hover:bg-[#A30A24]/10 hover:text-[#A30A24] transition-colors"
                                >
                                  <Icon d={Icons.eye} size={14} />
                                </button>
                                <button
                                  onClick={() => setModal({ type: "edit", booking: b })}
                                  title="Edit"
                                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[#6E6E6E] hover:bg-blue-900/20 hover:text-blue-400 transition-colors"
                                >
                                  <Icon d={Icons.edit} size={14} />
                                </button>
                                {b.status !== "Confirmed" && (
                                  <button
                                    onClick={() => promptStatusChange(b, "Confirmed")}
                                    className="px-2.5 py-1 text-[10px] font-mono tracking-[1px] uppercase font-semibold rounded-full
                                               bg-emerald-950/60 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-colors"
                                  >
                                    Confirm
                                  </button>
                                )}
                                {b.status !== "Cancelled" && (
                                  <button
                                    onClick={() => promptStatusChange(b, "Cancelled")}
                                    className="px-2.5 py-1 text-[10px] font-mono tracking-[1px] uppercase font-semibold rounded-full
                                               bg-[#A30A24]/10 text-[#A30A24] hover:bg-[#A30A24] hover:text-white transition-colors"
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

              {/* ── Past Bookings ──────────────────────────────────────── */}
              <div className="bg-[#111111] rounded-2xl border border-[#1e1e1e] overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-4 border-b border-[#1e1e1e]">
                  <span className="text-[10px] font-mono tracking-[3px] uppercase text-[#6E6E6E]">
                    Past Bookings
                  </span>
                  <div className="flex-1 border-t border-dashed border-[#1e1e1e]" />
                  <span className="text-[10px] font-mono text-[#3a3a3a]">
                    {pastBookings.length} record{pastBookings.length !== 1 ? "s" : ""}
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#1a1a1a]">
                        {["Booking ID", "Customer", "Service", "Schedule", "Total", "Status"].map((h) => (
                          <th key={h} className="text-left px-6 py-3.5 text-[10px] font-mono tracking-[2px] uppercase text-[#3a3a3a]">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {pastBookings.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="text-center py-10 text-[10px] font-mono tracking-[2px] uppercase text-[#3a3a3a]">
                            No past bookings
                          </td>
                        </tr>
                      ) : (
                        pastBookings.map((b) => (
                          <tr key={b.id} className="border-t border-[#1a1a1a] opacity-50 hover:opacity-70 transition-opacity">
                            <td className="px-6 py-3.5">
                              <span className="font-mono text-[10px] text-[#6E6E6E]">#{b.id}</span>
                            </td>
                            <td className="px-6 py-3.5 text-xs text-[#6E6E6E]">{b.customer?.name || "Unknown"}</td>
                            <td className="px-6 py-3.5 text-xs text-[#6E6E6E]">{b.service?.title}</td>
                            <td className="px-6 py-3.5 text-xs font-mono text-[#6E6E6E]">
                              {formatDateTime(parseLocalDateTime(b.date, b.time))}
                            </td>
                            <td className="px-6 py-3.5 text-xs font-mono text-[#6E6E6E]">{fmtPrice(b.totalPrice)}</td>
                            <td className="px-6 py-3.5">
                              <span className={`px-2 py-1 rounded text-[10px] font-mono tracking-[1px] uppercase ${STATUS_STYLES[b.status]}`}>
                                {b.status}
                              </span>
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

      {/* ── Modals ───────────────────────────────────────────────────────── */}
      {modal?.type === "create" && (
        <Modal title="New Booking" onClose={closeModal}>
          <BookingForm onSave={handleCreate} onCancel={closeModal} />
        </Modal>
      )}
      {modal?.type === "edit" && (
        <Modal title="Edit Booking" onClose={closeModal}>
          <BookingForm initial={modal.booking} onSave={handleEdit} onCancel={closeModal} />
        </Modal>
      )}
      {modal?.type === "view" && (
        <Modal title="Booking Details" onClose={closeModal}>
          <ViewBooking booking={modal.booking} onClose={closeModal} />
        </Modal>
      )}
      {modal?.type === "delete" && (
        <Modal title="Confirm Deletion" onClose={closeModal}>
          <DeleteConfirm booking={modal.booking} onConfirm={handleDelete} onCancel={closeModal} />
        </Modal>
      )}
      {modal?.type === "statusConfirm" && (
        <Modal title={modal.newStatus === "Confirmed" ? "Confirm Booking" : "Cancel Booking"} onClose={closeModal}>
          <StatusConfirmModal
            booking={modal.booking}
            newStatus={modal.newStatus}
            onConfirm={() => updateBookingStatus(modal.booking.id, modal.newStatus)}
            onCancel={closeModal}
          />
        </Modal>
      )}
    </div>
  );
}