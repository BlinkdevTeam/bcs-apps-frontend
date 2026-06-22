"use client";

import React, { useState, useEffect } from "react";
import {
  Ic,
  I,
  durLabel,
  EMPTY_PKG,
} from "../data/compData";

import DeleteModal from "./DeleteModal";
import PackageCard from "./PackageCard";
import PackageForm from "./PackageForm";

const uid = () => Math.random().toString(36).slice(2, 9);

export default function PackagesTab() {
  const [packages, setPackages]         = useState([]);
  const [editing, setEditing]           = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [filterActive, setFilterActive] = useState("all");
  const [search, setSearch]             = useState("");
  const [toast, setToast]               = useState({ text: "", ok: true });

  useEffect(() => {
    async function loadPackages() {
      try {
        const res  = await fetch("/api/packages?all=true");
        const data = await res.json();
        setPackages(data);
      } catch (err) {
        console.error("Failed to load packages:", err);
      }
    }
    loadPackages();
  }, []);

  const flash = (text, ok = true) => {
    setToast({ text, ok });
    setTimeout(() => setToast({ text: "", ok: true }), 2800);
  };

  const filtered = packages
    .filter(p => {
      const q = search.toLowerCase();
      const matchSearch =
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      const matchFilter =
        filterActive === "all" ||
        (filterActive === "active" ? p.isActive : !p.isActive);
      return matchSearch && matchFilter;
    })
    .sort((a, b) => {
      if (a.color < b.color) return -1;
      if (a.color > b.color) return 1;
      return a.title.localeCompare(b.title);
    });

  const groupedByColor = filtered.reduce((acc, pkg) => {
    const key = pkg.color || "#ccc";
    if (!acc[key]) acc[key] = [];
    acc[key].push(pkg);
    return acc;
  }, {});

  const handleSave = (savedPkg) => {
    setPackages(prev => {
      const exists = prev.some(p => p.id === savedPkg.id);
      if (exists) return prev.map(p => (p.id === savedPkg.id ? savedPkg : p));
      return [savedPkg, ...prev];
    });
    flash(savedPkg.id ? "Package updated successfully." : "Package created successfully.");
    setEditing(null);
  };

  const handleToggle = (id) => {
    setPackages(ps => ps.map(p => p.id === id ? { ...p, isActive: !p.isActive } : p));
  };

  const handleDuplicate = async (pkg) => {
    try {
      const payload = {
        ...JSON.parse(JSON.stringify(pkg)),
        id: undefined,
        title: `${pkg.title} (Copy)`,
        isActive: false,
        inclusions: pkg.inclusions.map(inc => ({ ...inc, id: uid() })),
        addons: pkg.addons.map(a => ({ ...a, id: uid() })),
      };
      const res = await fetch("/api/packages?all=true", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to duplicate");
      setPackages(ps => [{ ...payload, id: data.id }, ...ps]);
      flash("Package duplicated.");
    } catch (err) {
      console.error(err);
      flash("Failed to duplicate package.", false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      const res = await fetch("/api/packages", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: deleteTarget.id }),
      });
      const data = await res.json();
      if (!res.ok) {
        flash(data.error || "Failed to delete package.", false);
        return;
      }
      setPackages(ps => ps.filter(p => p.id !== deleteTarget.id));
      flash("Package deleted.", false);
    } catch (err) {
      console.error(err);
      flash("Failed to delete package.", false);
    } finally {
      setDeleteTarget(null);
    }
  };

  const activeCount   = packages.filter(p => p.isActive).length;
  const inactiveCount = packages.length - activeCount;

  return (
    <div
      className="flex h-full overflow-hidden"
      style={{ fontFamily: "'DM Sans','Segoe UI',sans-serif" }}
    >
      {/* ── Toast ── */}
      {toast.text && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl text-xs font-bold flex items-center gap-2.5"
          style={{
            background: "#161616",
            border: `1px solid ${toast.ok ? "#064e3b" : "#7f1d1d"}`,
            color: toast.ok ? "#34d399" : "#f87171",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          }}
        >
          <span
            className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black"
            style={{ background: toast.ok ? "#064e3b" : "#7f1d1d" }}
          >
            {toast.ok ? "✓" : "!"}
          </span>
          {toast.text}
        </div>
      )}

      {/* ── Delete Modal ── */}
      {deleteTarget && (
        <DeleteModal
          title={deleteTarget.title}
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}

      {/* ── Main content ── */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* ── Stat cards ── */}
        <div className="grid grid-cols-3 gap-4 pb-5">
          {[
            { label: "Total Packages", value: packages.length,  sub: "All packages",         red: true  },
            { label: "Active",         value: activeCount,       sub: "Currently listed",     red: false },
            { label: "Inactive",       value: inactiveCount,     sub: "Hidden from clients",  red: false },
          ].map(({ label, value, sub, red }) => (
            <div
              key={label}
              className="rounded-xl p-5 flex items-start justify-between"
              style={{
                background:  red ? "rgba(163,10,36,0.1)" : "#161616",
                border:      `1px solid ${red ? "rgba(163,10,36,0.3)" : "#1e1e1e"}`,
              }}
            >
              <div>
                <p className="text-[10px] font-mono tracking-[2px] uppercase mb-1" style={{ color: "#6E6E6E" }}>
                  {label}
                </p>
                <p className="text-2xl font-extrabold tracking-tight" style={{ color: red ? "#A30A24" : "#F7F5F2" }}>
                  {value}
                </p>
                <p className="text-[10px] font-mono mt-1" style={{ color: "#6E6E6E" }}>{sub}</p>
              </div>
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: red ? "rgba(163,10,36,0.2)" : "#1e1e1e" }}
              >
                <Ic d={I.pkg} size={16} stroke={red ? "#A30A24" : "#6E6E6E"} sw={2} />
              </div>
            </div>
          ))}
        </div>

        {/* ── Table panel ── */}
        <div
          className="flex-1 flex flex-col overflow-hidden rounded-2xl border"
          style={{ background: "#111111", borderColor: "#1e1e1e" }}
        >
          {/* ── Filter bar ── */}
          <div
            className="flex flex-wrap items-center gap-3 px-6 py-4 border-b shrink-0"
            style={{ borderColor: "#1e1e1e" }}
          >
            {/* Search */}
            <div className="relative flex-1 min-w-[200px] max-w-xs">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#6E6E6E" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                </svg>
              </span>
              <input
                className="w-full pl-9 pr-4 py-2 rounded-lg text-xs border transition-all"
                style={{
                  background:  "#0d0d0d",
                  borderColor: "#2a2a2a",
                  color:       "#F7F5F2",
                  fontFamily:  "monospace",
                  outline:     "none",
                }}
                placeholder="Search packages…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                onFocus={e => {
                  e.target.style.borderColor = "#A30A24";
                  e.target.style.boxShadow   = "0 0 0 1px #A30A24";
                }}
                onBlur={e => {
                  e.target.style.borderColor = "#2a2a2a";
                  e.target.style.boxShadow   = "none";
                }}
              />
            </div>

            {/* Status filter pills */}
            <div className="flex gap-1.5 flex-wrap">
              {[
                { key: "all",      label: "All",      count: packages.length },
                { key: "active",   label: "Active",   count: activeCount     },
                { key: "inactive", label: "Inactive", count: inactiveCount   },
              ].map(({ key, label, count }) => (
                <button
                  key={key}
                  onClick={() => setFilterActive(key)}
                  className="px-3.5 py-1.5 rounded-lg text-[10px] font-mono tracking-[2px] uppercase font-semibold transition-all"
                  style={filterActive === key
                    ? { background: "#A30A24", color: "#fff",    border: "1px solid #A30A24" }
                    : { background: "#0d0d0d", color: "#6E6E6E", border: "1px solid #2a2a2a" }
                  }
                  onMouseEnter={e => {
                    if (filterActive !== key) {
                      e.currentTarget.style.borderColor = "#A30A24";
                      e.currentTarget.style.color       = "#A30A24";
                    }
                  }}
                  onMouseLeave={e => {
                    if (filterActive !== key) {
                      e.currentTarget.style.borderColor = "#2a2a2a";
                      e.currentTarget.style.color       = "#6E6E6E";
                    }
                  }}
                >
                  {label}
                  <span
                    className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded text-[9px]"
                    style={{
                      background: filterActive === key ? "rgba(255,255,255,0.2)" : "#1e1e1e",
                      color:      filterActive === key ? "#fff" : "#6E6E6E",
                    }}
                  >
                    {count}
                  </span>
                </button>
              ))}
            </div>

            {/* Count + New button */}
            <div className="ml-auto flex items-center gap-3">
              <span className="text-[10px] font-mono tracking-[2px] uppercase hidden md:block" style={{ color: "#6E6E6E" }}>
                {filtered.length} record{filtered.length !== 1 ? "s" : ""}
              </span>
              <button
                onClick={() => setEditing(EMPTY_PKG)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] font-mono tracking-[2px] uppercase font-semibold text-white transition-opacity hover:opacity-80"
                style={{ background: "#A30A24" }}
              >
                <Ic d={I.plus} size={12} stroke="#fff" sw={2.5} />
                New Package
              </button>
            </div>
          </div>

          {/* ── Package list ── */}
          <div
            className="flex justify-center overflow-y-auto mb-4"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#2a2a2a #0d0d0d" }}
          >
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-20">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: "#161616", border: "1px solid #2a2a2a" }}
                >
                  <Ic d={I.pkg} size={26} stroke="#2a2a2a" sw={1.5} />
                </div>
                <div className="text-center">
                  <p className="text-xs font-mono tracking-[2px] uppercase mb-1" style={{ color: "#3a3a3a" }}>
                    {search ? "No matching packages" : "No packages yet"}
                  </p>
                  <p className="text-[10px] font-mono" style={{ color: "#2a2a2a" }}>
                    {search ? "Try a different search term" : `Click "New Package" to get started`}
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-6 space-y-8 max-w-3xl">
                {Object.entries(groupedByColor).map(([color, pkgs]) => (
                  <div key={color}>
                    {/* Group header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
                      <span className="text-[10px] font-mono tracking-[3px] uppercase" style={{ color: "#6E6E6E" }}>
                        {pkgs[0].color}
                      </span>
                      <div className="flex-1 border-t border-dashed" style={{ borderColor: "#1e1e1e" }} />
                      <span className="text-[10px] font-mono" style={{ color: "#3a3a3a" }}>
                        {pkgs.length} {pkgs.length === 1 ? "package" : "packages"}
                      </span>
                    </div>

                    {/* Cards */}
                    <div className="space-y-3">
                      {pkgs.map(pkg => (
                        <PackageCard
                          key={pkg.id}
                          pkg={pkg}
                          onEdit={setEditing}
                          onDuplicate={handleDuplicate}
                          onDelete={(id) => setDeleteTarget(packages.find(p => p.id === id))}
                          onToggle={handleToggle}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Right panel: Edit / Create form ── */}
      {editing !== null && (
        <aside
          className="w-[380px] shrink-0 flex flex-col overflow-hidden border-l"
          style={{ background: "#111111", borderColor: "#1e1e1e" }}
        >
          {/* Panel header */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b shrink-0"
            style={{ borderColor: "#1e1e1e", background: "#0d0d0d" }}
          >
            <div>
              <p className="text-[10px] font-mono tracking-[3px] uppercase mb-0.5" style={{ color: "#A30A24" }}>
                ◳ {editing.id ? "Edit" : "New"}
              </p>
              <h2 className="text-sm font-extrabold tracking-tight" style={{ color: "#F7F5F2" }}>
                {editing.id ? "Edit Package" : "New Package"}
              </h2>
              {editing.id && (
                <p className="text-[10px] font-mono mt-0.5" style={{ color: "#6E6E6E" }}>
                  {editing.title}
                </p>
              )}
            </div>
            <button
              onClick={() => setEditing(null)}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
              style={{ color: "#6E6E6E", border: "1px solid #2a2a2a", background: "#161616" }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#A30A24";
                e.currentTarget.style.color       = "#A30A24";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#2a2a2a";
                e.currentTarget.style.color       = "#6E6E6E";
              }}
            >
              <Ic d={I.close} size={14} sw={2.2} />
            </button>
          </div>

          <PackageForm
            key={editing.id || "new"}
            initial={editing}
            onSave={handleSave}
            onCancel={() => setEditing(null)}
          />
        </aside>
      )}
    </div>
  );
}