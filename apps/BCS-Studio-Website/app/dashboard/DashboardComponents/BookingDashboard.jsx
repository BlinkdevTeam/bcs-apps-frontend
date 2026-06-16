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

// ─── Status Confirmation Modal ───────────────────────────────────────────────
function StatusConfirmModal({ booking, newStatus, onConfirm, onCancel }) {
  const isConfirm = newStatus === "Confirmed";

  return (
    <div className="space-y-5 text-sm">
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto"
        style={{ background: isConfirm ? "#ecfdf5" : "#FEF0F2" }}
      >
        {isConfirm ? (
          <svg
            className="w-7 h-7 text-emerald-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg
            className="w-7 h-7"
            style={{ color: "#A30A24" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </div>

      {/* Text */}
      <div className="text-center space-y-1">
        <p className="font-bold text-base" style={{ color: "#1a0a0d" }}>
          {isConfirm ? "Confirm Booking?" : "Cancel Booking?"}
        </p>
        <p className="text-xs" style={{ color: "#9a6a72" }}>
          {isConfirm
            ? "This will mark the booking as confirmed."
            : "This will mark the booking as cancelled. This action cannot be undone."}
        </p>
      </div>

      {/* Booking summary */}
      <div
        className="rounded-xl p-4 space-y-2 text-xs"
        style={{ background: "#fdf5f6", border: "1px solid #f0e0e3" }}
      >
        <div className="flex justify-between">
          <span style={{ color: "#9a6a72" }}>Customer</span>
          <span className="font-semibold" style={{ color: "#1a0a0d" }}>
            {booking.customer?.name || "Unknown"}
          </span>
        </div>
        <div className="flex justify-between">
          <span style={{ color: "#9a6a72" }}>Service</span>
          <span className="font-semibold" style={{ color: "#1a0a0d" }}>
            {booking.service?.title || "Service"}
          </span>
        </div>
        <div className="flex justify-between">
          <span style={{ color: "#9a6a72" }}>Schedule</span>
          <span className="font-semibold" style={{ color: "#1a0a0d" }}>
            {formatDateTime(parseLocalDateTime(booking.date, booking.time))}
          </span>
        </div>
        <div className="flex justify-between">
          <span style={{ color: "#9a6a72" }}>Total</span>
          <span className="font-semibold" style={{ color: "#A30A24" }}>
            {fmtPrice(booking.totalPrice)}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={onCancel}
          className="flex-1 py-2.5 rounded-lg text-sm font-medium border transition-colors hover:bg-gray-50"
          style={{ borderColor: "#e5d5d8", color: "#7a3a42" }}
        >
          Go Back
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: isConfirm ? "#10b981" : "#A30A24" }}
        >
          {isConfirm ? "Yes, Confirm" : "Yes, Cancel"}
        </button>
      </div>
    </div>
  );
}

// ─── Main Dashboard ─────────────────────────────────────────────────────────────
export default function BookingsDashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("/api/bookings");
        const data = await res.json();

        const safeData = Array.isArray(data) ? data : [];

        const normalized = safeData.map((b) => ({
          ...b,
          customer: {
            name: b.customer?.name || "Unknown",
            email: b.customer?.email || "",
            phone: b.customer?.phone || "",
          },
          service: {
            id: b.service?.id || 0,
            title: b.service?.title || "Service",
            price: b.service?.price || 0,
          },
          addons: Array.isArray(b.addons) ? b.addons : [],
        }));

        setBookings(normalized);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [modal, setModal] = useState(null); // { type: "create"|"edit"|"view"|"delete"|"statusConfirm", booking?, newStatus? }
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("Bookings");

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

  const handleCreate = (data) => {
    setBookings((prev) => [...prev, { ...data, id: uid(), proof: null }]);
    closeModal();
  };

  const handleEdit = (data) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === modal.booking.id ? { ...b, ...data, id: b.id } : b,
      ),
    );
    closeModal();
  };

  const handleDelete = () => {
    setBookings((prev) => prev.filter((b) => b.id !== modal.booking.id));
    closeModal();
  };

  // ── Update booking status (called after confirmation) ──
  const updateBookingStatus = async (id, newStatus) => {
    const previous = bookings;

    closeModal();

    try {
      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b)),
      );

      const res = await fetch(`/api/bookings/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error("Failed to update status");
    } catch (err) {
      console.error(err);
      setBookings(previous);
      alert("Failed to update booking status");
    }
  };

  // ── Open status confirmation modal ──
  const promptStatusChange = (booking, newStatus) => {
    setModal({ type: "statusConfirm", booking, newStatus });
  };

  const isPastBooking = (b) => {
    if (!b.date) return false;
    const bookingDate = parseLocalDateTime(b.date, b.time);
    const now = new Date();
    return bookingDate < now;
  };

  const currentBookings = filtered.filter((b) => !isPastBooking(b));
  const pastBookings = filtered.filter((b) => isPastBooking(b));

  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    router.replace("/login");
  };

  return (
    <div
      className="flex h-screen font-sans overflow-hidden"
      style={{
        background: "#f7f0f1",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}
    >
      {/* ── Sidebar ── */}
      <aside
        className="flex flex-col shrink-0 transition-all duration-300"
        style={{
          width: sidebarOpen ? 240 : 68,
          background: "#A30A24",
          color: "#fff",
        }}
      >
        {/* Logo */}
        <div
          className="flex items-center gap-3 px-4 py-5 border-b"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(255,255,255,0.2)" }}
          >
            <Icon d={Icons.logo} size={18} stroke="#fff" strokeWidth={2} />
          </div>
          {sidebarOpen && (
            <div>
              <p
                className="font-bold text-sm leading-tight"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Blink Creative Studio
              </p>
              <p className="text-xs opacity-60">Booking Manager</p>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 space-y-1 px-2">
          {[
            { label: "Bookings", icon: Icons.bookings },
            { label: "Calendar", icon: Icons.calendar },
            { label: "Packages", icon: Icons.package },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all"
              style={{
                background:
                  activeTab === item.label
                    ? "rgba(255,255,255,0.18)"
                    : "transparent",
                color:
                  activeTab === item.label ? "#fff" : "rgba(255,255,255,0.65)",
              }}
            >
              <Icon d={item.icon} size={16} strokeWidth={2} />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="mx-2 mb-2 flex items-center justify-center gap-2 py-2 rounded-lg text-xs transition-colors"
          style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.75)" }}
        >
          <Icon d={Icons.logout} size={14} />
          {sidebarOpen && "Logout"}
        </button>

        {/* Toggle */}
        <button
          onClick={() => setSidebarOpen((o) => !o)}
          className="mx-2 mb-4 flex items-center justify-center gap-2 py-2 rounded-lg text-xs transition-colors"
          style={{
            background: "rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          <Icon d={sidebarOpen ? Icons.close : Icons.filter} size={14} />
          {sidebarOpen && "Collapse"}
        </button>
      </aside>

      {/* ── Main ── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto px-7 py-6 space-y-6">
          {activeTab === "Calendar" ? (
            <CalendarTab
              bookings={bookings.map((b) => {
                const dt = parseLocalDateTime(b.date, b.time);
                return {
                  id: b.id,
                  status: b.status,
                  customer: b.customer?.name || "Unknown",
                  service: b.service?.title || "Service",
                  date: dt.toISOString().slice(0, 10),
                  time: dt.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
                };
              })}
            />
          ) : activeTab === "Packages" ? (
            <PackagesTab />
          ) : (
            <div className="space-y-6">
              <div
                className="flex items-center justify-between px-7 py-4 bg-white border-b"
                style={{ borderColor: "#ede0e2" }}
              >
                <div>
                  <h1
                    className="text-xl font-bold"
                    style={{ color: "#1a0a0d", fontFamily: "'Georgia', serif" }}
                  >
                    Bookings
                  </h1>
                  <p className="text-xs mt-0.5" style={{ color: "#9a6a72" }}>
                    Manage all your customer bookings
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4">
                <StatCard
                  label="Total Bookings"
                  value={stats.total}
                  sub="All time"
                  iconPath={Icons.bookings}
                  accent
                />
                <StatCard
                  label="Confirmed"
                  value={stats.confirmed}
                  sub="Active bookings"
                  iconPath={Icons.check}
                />
                <StatCard
                  label="Pending"
                  value={stats.pending}
                  sub="Awaiting confirmation"
                  iconPath={Icons.calendar}
                />
                <StatCard
                  label="Revenue"
                  value={fmtPrice(stats.revenue)}
                  sub="Confirmed + Pending"
                  iconPath={Icons.money}
                />
              </div>

              {/* Table Card */}
              <div
                className="bg-white rounded-2xl overflow-hidden"
                style={{
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  border: "1px solid #f0e0e3",
                }}
              >
                {/* Filters */}
                <div
                  className="flex items-center gap-3 px-6 py-4 border-b"
                  style={{ borderColor: "#f5eaec" }}
                >
                  <div className="relative flex-1 max-w-xs">
                    <span
                      className="absolute left-3 top-1/2 -translate-y-1/2"
                      style={{ color: "#b0707a" }}
                    >
                      <Icon d={Icons.search} size={14} />
                    </span>
                    <input
                      className="w-full pl-9 pr-4 py-2 rounded-lg text-sm outline-none text-[#6e6e6e]"
                      style={{
                        background: "#fdfafa",
                        border: "1.5px solid #e5d5d8",
                      }}
                      placeholder="Search bookings…"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-1.5">
                    {["All", "Confirmed", "Pending", "Cancelled"].map((s) => (
                      <button
                        key={s}
                        onClick={() => setStatusFilter(s)}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all"
                        style={
                          statusFilter === s
                            ? { background: "#A30A24", color: "#fff" }
                            : {
                                background: "#fdfafa",
                                color: "#7a3a42",
                                border: "1.5px solid #e5d5d8",
                              }
                        }
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <span className="ml-auto text-xs" style={{ color: "#9a6a72" }}>
                    {filtered.length} record{filtered.length !== 1 ? "s" : ""}
                  </span>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ background: "#fdf5f6" }}>
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
                            className="text-left px-6 py-3.5 text-xs font-bold uppercase tracking-wider"
                            style={{ color: "#b0707a" }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.length === 0 ? (
                        <tr>
                          <td
                            colSpan={7}
                            className="text-center py-16 text-sm"
                            style={{ color: "#b0707a" }}
                          >
                            <div className="flex flex-col items-center gap-2">
                              <Icon
                                d={Icons.bookings}
                                size={28}
                                stroke="#d4a0a8"
                                strokeWidth={1.5}
                              />
                              No bookings found
                            </div>
                          </td>
                        </tr>
                      ) : (
                        currentBookings.map((b) => (
                          <tr
                            key={b.id}
                            className="border-t transition-colors hover:bg-red-50/40"
                            style={{ borderColor: "#f5eaec" }}
                          >
                            <td className="px-6 py-4">
                              <span
                                className="font-mono text-xs font-bold px-2 py-1 rounded"
                                style={{ background: "#FEF0F2", color: "#A30A24" }}
                              >
                                {b.id}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2.5">
                                <div
                                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                                  style={{ background: "#A30A24" }}
                                >
                                  {(b.customer?.name || b.customer || "?")[0]}
                                </div>
                                <div>
                                  <p className="font-semibold text-xs" style={{ color: "#1a0a0d" }}>
                                    {b.customer?.name || b.customer || "Unknown"}
                                  </p>
                                  <p className="text-xs" style={{ color: "#9a6a72" }}>
                                    {b.customer?.email || "-"}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <p className="font-medium text-xs" style={{ color: "#1a0a0d" }}>
                                {b.service?.title || "Service"}
                              </p>
                              {b.addons.length > 0 && (
                                <p className="text-xs mt-0.5" style={{ color: "#9a6a72" }}>
                                  {b.addons.length} add-on{b.addons.length > 1 ? "s" : ""}
                                </p>
                              )}
                            </td>
                            <td className="px-6 py-4">
                              <p className="text-xs font-medium" style={{ color: "#1a0a0d" }}>
                                {formatDateTime(parseLocalDateTime(b.date, b.time))}
                              </p>
                            </td>
                            <td className="px-6 py-4">
                              <span
                                className="font-bold text-xs"
                                style={{ color: "#A30A24", fontFamily: "'Georgia', serif" }}
                              >
                                {fmtPrice(b.totalPrice)}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <span
                                className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-semibold ${STATUS_STYLES[b.status]}`}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[b.status]}`} />
                                {b.status}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => setModal({ type: "view", booking: b })}
                                  title="View"
                                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-red-50"
                                  style={{ color: "#A30A24" }}
                                >
                                  <Icon d={Icons.eye} size={14} />
                                </button>
                                <button
                                  onClick={() => setModal({ type: "edit", booking: b })}
                                  title="Edit"
                                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-blue-50"
                                  style={{ color: "#2563eb" }}
                                >
                                  <Icon d={Icons.edit} size={14} />
                                </button>

                                {/* ── Confirm / Cancel with confirmation modal ── */}
                                {b.status !== "Confirmed" && (
                                  <button
                                    type="button"
                                    onClick={() => promptStatusChange(b, "Confirmed")}
                                    className="px-3 py-1.5 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-colors cursor-pointer"
                                    title="Mark as Confirmed"
                                  >
                                    Confirm
                                  </button>
                                )}
                                {b.status !== "Cancelled" && (
                                  <button
                                    type="button"
                                    onClick={() => promptStatusChange(b, "Cancelled")}
                                    className="px-3 py-1.5 text-xs font-semibold rounded-full bg-red-100 text-red-500 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                                    title="Mark as Cancelled"
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

              {/* Past Bookings Table */}
              <div
                className="bg-white rounded-2xl overflow-hidden mt-6"
                style={{
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  border: "1px solid #f0e0e3",
                }}
              >
                <div className="px-6 py-4 border-b" style={{ borderColor: "#f5eaec" }}>
                  <h2 className="text-sm font-bold" style={{ color: "#A30A24" }}>
                    Past Bookings
                  </h2>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ background: "#fdf5f6" }}>
                        {["Booking ID", "Customer", "Service", "Schedule", "Total", "Status"].map(
                          (h) => (
                            <th
                              key={h}
                              className="text-left px-6 py-3.5 text-xs font-bold uppercase tracking-wider"
                              style={{ color: "#b0707a" }}
                            >
                              {h}
                            </th>
                          ),
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {pastBookings.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="text-center py-10 text-xs">
                            No past bookings
                          </td>
                        </tr>
                      ) : (
                        pastBookings.map((b) => (
                          <tr key={b.id} className="border-t text-gray-400" style={{ borderColor: "#f5eaec" }}>
                            <td className="px-6 py-4">{b.id}</td>
                            <td className="px-6 py-4">{b.customer?.name || "Unknown"}</td>
                            <td className="px-6 py-4">{b.service?.title}</td>
                            <td className="px-6 py-4">
                              {formatDateTime(parseLocalDateTime(b.date, b.time))}
                            </td>
                            <td className="px-6 py-4">{fmtPrice(b.totalPrice)}</td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded text-xs ${STATUS_STYLES[b.status]}`}>
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

      {/* ── Modals ── */}
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
          <DeleteConfirm
            booking={modal.booking}
            onConfirm={handleDelete}
            onCancel={closeModal}
          />
        </Modal>
      )}

      {/* ── Status Confirmation Modal ── */}
      {modal?.type === "statusConfirm" && (
        <Modal
          title={modal.newStatus === "Confirmed" ? "Confirm Booking" : "Cancel Booking"}
          onClose={closeModal}
        >
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