"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import {
  DAYS_SHORT, TODAY, TODAY_D, parseD, MONTH_NAMES,
  Ic, I, displayDate, displayShort, SB, SD,
  STRIPE_SOFT, STRIPE_HARD, inpSty, inp,
} from "../data/compData";
import Toggle from "../components/Toggle";

const uid = () => Math.random().toString(36).substr(2, 9);

const TIME_OPTIONS = Array.from({ length: 24 * 2 }, (_, i) => {
  const h = Math.floor(i / 2), m = (i % 2) * 30;
  const hour = h % 12 === 0 ? 12 : h % 12;
  const ampm = h < 12 ? "AM" : "PM";
  return `${hour}:${m.toString().padStart(2, "0")} ${ampm}`;
});

// ── Dark input styles for this tab ───────────────────────────────────────────
const darkInp = "w-full rounded-lg px-3 py-2 text-xs bg-[#0d0d0d] border border-[#2a2a2a] text-[#F7F5F2] placeholder:text-[#3a3a3a] font-mono focus:outline-none focus:ring-1 focus:ring-[#A30A24] focus:border-[#A30A24] transition";
const darkInpSty = { colorScheme: "dark" };

export default function CalendarTab() {
  const now = new Date();
  const [viewYear, setViewYear]     = useState(now.getFullYear());
  const [viewMonth, setViewMonth]   = useState(now.getMonth());
  const [selectedDate, setSelectedDate] = useState(TODAY);
  const [rightTab, setRightTab]     = useState("day");

  const [bookings, setBookings]           = useState([]);
  const [blockedDates, setBlockedDates]   = useState(new Set());
  const [blockedRanges, setBlockedRanges] = useState([]);
  const [timeBlocks, setTimeBlocks]       = useState([]);
  const [openDates, setOpenDates]         = useState(new Set());
  const [dayOffsBlocked, setDayOffsBlocked] = useState(new Set());
  const [weekendsBlocked, setWeekendsBlocked] = useState(true);

  const [blockMode, setBlockMode]   = useState("date");
  const [blockDate, setBlockDate]   = useState("");
  const [rangeStart, setRangeStart] = useState("");
  const [rangeEnd, setRangeEnd]     = useState("");
  const [rangeLabel, setRangeLabel] = useState("");
  const [timeDate, setTimeDate]     = useState("");
  const [timeStart, setTimeStart]   = useState("12:00 PM");
  const [timeEnd, setTimeEnd]       = useState("01:00 PM");
  const [timeLabel, setTimeLabel]   = useState("");
  const [msg, setMsg]               = useState({ text: "", ok: true });

  const flash = (text, ok = true) => {
    setMsg({ text, ok });
    setTimeout(() => setMsg({ text: "", ok: true }), 2800);
  };

  function formatDate(d) {
    const dt = typeof d === "string" ? new Date(d) : d;
    const tzOffset = dt.getTimezoneOffset() * 60000;
    return new Date(dt - tzOffset).toISOString().split("T")[0];
  }

  const isPast   = (d) => formatDate(d) < formatDate(TODAY_D);
  const isToday  = (d) => formatDate(d) === formatDate(TODAY_D);

  const bookingsByDate = useMemo(() => {
    const m = {};
    bookings.forEach((b) => (m[b.date] = m[b.date] || []).push(b));
    return m;
  }, [bookings]);

  useEffect(() => {
    (async () => {
      try {
        const [bookingsRes, calendarRes] = await Promise.all([
          fetch("/api/bookings"),
          fetch("/api/calendar"),
        ]);
        const bookingsData  = await bookingsRes.json();
        const calendarData  = await calendarRes.json();

        setBookings(bookingsData.map((b) => ({ ...b, date: formatDate(b.date) })));
        setBlockedDates(new Set(calendarData.blockedDates.map((b) => formatDate(b.date))));
        setBlockedRanges(calendarData.blockedRanges.map((r) => ({ ...r, start: formatDate(r.start_date), end: formatDate(r.end_date) })));
        setTimeBlocks(calendarData.timeBlocks.map((t) => ({ ...t, date: formatDate(t.date) })));
        setOpenDates(new Set(calendarData.openDates.map((o) => formatDate(o.date))));
      } catch (err) { console.error("Failed to fetch calendar data:", err); }
    })();
  }, []);

  const getStatus = useCallback((s) => {
    if (!s) return "available";
    const d = parseD(s);
    if (!d) return "available";
    const dow = d.getDay();
    if (isPast(s) && !isToday(s)) return "past";
    if (blockedDates.has(s) && !openDates.has(s)) return "blocked-manual";
    const inRange = blockedRanges.find((r) => s >= r.start && s <= r.end);
    if (inRange && !openDates.has(s)) return "blocked-range";
    if (dayOffsBlocked.has(dow) && !openDates.has(s)) return "blocked-dayoff";
    if (weekendsBlocked && (dow === 0 || dow === 6) && !openDates.has(s)) return "blocked-weekend";
    return "available";
  }, [blockedDates, blockedRanges, openDates, dayOffsBlocked, weekendsBlocked]);

  const isBlocked     = (s) => s.startsWith("blocked");
  const isOverridable = (s) => ["blocked-range", "blocked-dayoff", "blocked-weekend"].includes(s);

  const calDays = useMemo(() => {
    const first = new Date(viewYear, viewMonth, 1);
    const last  = new Date(viewYear, viewMonth + 1, 0);
    const cells = [];
    for (let i = 0; i < first.getDay(); i++) cells.push(null);
    for (let d = 1; d <= last.getDate(); d++) cells.push(formatDate(new Date(viewYear, viewMonth, d)));
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }, [viewYear, viewMonth]);

  const prevMonth = () => viewMonth === 0  ? (setViewMonth(11), setViewYear((y) => y - 1)) : setViewMonth((m) => m - 1);
  const nextMonth = () => viewMonth === 11 ? (setViewMonth(0),  setViewYear((y) => y + 1)) : setViewMonth((m) => m + 1);
  const goToday   = () => { setViewYear(now.getFullYear()); setViewMonth(now.getMonth()); setSelectedDate(formatDate(TODAY_D)); };

  const handleDayClick = (ds) => {
    if (!ds || getStatus(ds) === "past") return;
    setSelectedDate(ds);
    setRightTab("day");
  };

  // ── Block actions (unchanged logic) ──────────────────────────────────────
  const addBlockDate = async () => {
    if (!blockDate) return flash("Please select a date.", false);
    if (isPast(blockDate)) return flash("Cannot block a past date.", false);
    try {
      const res  = await fetch("/api/calendar", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "date", date: blockDate, label: "Manual Block" }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to block date");
      setBlockedDates((p) => new Set([...p, blockDate]));
      setBlockDate("");
      flash("Date blocked successfully.");
    } catch (err) { flash(err.message, false); }
  };

  const addBlockRange = async () => {
    if (!rangeStart || !rangeEnd) return flash("Fill both dates.", false);
    if (rangeStart > rangeEnd) return flash("Start must be before end.", false);
    try {
      const res  = await fetch("/api/calendar", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "range", start: rangeStart, end: rangeEnd, label: rangeLabel || "Blocked Range" }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to block range");
      setBlockedRanges((p) => [...p, { id: data.id || uid(), start: rangeStart, end: rangeEnd, label: rangeLabel || "Blocked Range" }]);
      setRangeStart(""); setRangeEnd(""); setRangeLabel("");
      flash("Date range blocked.");
    } catch (err) { flash(err.message, false); }
  };

  const addTimeBlock = async (timeBlock) => {
    try {
      const res  = await fetch("/api/calendar", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "time", ...timeBlock }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to add time block");
      setTimeBlocks((p) => [...p, { ...timeBlock, id: data.id || uid() }]);
      flash("Time block added successfully.");
    } catch (err) { flash(err.message, false); }
  };

  const removeBlockedDate = async (date) => {
    try {
      const res = await fetch("/api/calendar", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "date", date }) });
      if (!res.ok) throw new Error("Failed to remove block");
      setBlockedDates((p) => { const s = new Set(p); s.delete(date); return s; });
    } catch (err) { flash(err.message, false); }
  };

  const removeRange = (id) => setBlockedRanges((p) => p.filter((r) => r.id !== id));

  const removeTimeBlock = async (id) => {
    try {
      const res  = await fetch("/api/calendar", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "time", id }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to remove time block");
      setTimeBlocks((p) => p.filter((t) => t.id !== id));
      flash("Time block removed.");
    } catch (err) { flash(err.message, false); }
  };

  const openDate = async (d) => {
    if (!d) return flash("No date selected.", false);
    if (isPast(d)) return flash("Cannot open a past date.", false);
    try {
      const res  = await fetch("/api/calendar", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "open", date: d }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to open date");
      setOpenDates((p) => new Set([...p, d]));
      flash("Date opened (exception) successfully.");
    } catch (err) { flash(err.message, false); }
  };

  const closeDate = async (d) => {
    if (!d) return flash("No date selected.", false);
    try {
      const res  = await fetch("/api/calendar", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "open", date: d }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to close date");
      setOpenDates((p) => { const s = new Set(p); s.delete(d); return s; });
      flash("Date exception removed, back to blocked.");
    } catch (err) { flash(err.message, false); }
  };

  const manualBlock = async (d) => {
    if (!d) return flash("No date selected.", false);
    if (isPast(d)) return flash("Cannot block a past date.", false);
    try {
      const res  = await fetch("/api/calendar", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "date", date: d, label: "Manual Block" }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to block date");
      setBlockedDates((p) => new Set([...p, d]));
      setOpenDates((p) => { const s = new Set(p); s.delete(d); return s; });
      flash("Date blocked successfully.");
    } catch (err) { flash(err.message, false); }
  };

  const toggleDayOff = (i) => setDayOffsBlocked((p) => { const s = new Set(p); s.has(i) ? s.delete(i) : s.add(i); return s; });

  const to24h = (t) => {
    const [time, modifier] = t.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:00`;
  };

  const handleAddTimeBlock = async () => {
    if (!timeDate || !timeStart || !timeEnd || !timeLabel) return flash("Please fill all fields", false);
    await addTimeBlock({ date: timeDate, start_time: to24h(timeStart), end_time: to24h(timeEnd), label: timeLabel });
  };

  // Derived
  const selStatus    = getStatus(selectedDate);
  const selBookings  = bookingsByDate[selectedDate] || [];
  const selTimeBlocks = timeBlocks.filter((t) => t.date === selectedDate);
  const selRange     = blockedRanges.find((r) => selectedDate >= r.start && selectedDate <= r.end);
  const selIsOpen    = openDates.has(selectedDate);

  // Cell background (adapted for dark theme)
  const getCellBg = (ds, status, sel) => {
    if (!ds) return null;
    if (status === "past") return null;
    if (isBlocked(status)) return null;
    if (sel) return "#A30A24";
    if (isToday(ds)) return "#1a1a1a";
    const bks = bookingsByDate[ds] || [];
    if (bks.length > 0) return "#1e0a0e";
    if (timeBlocks.some((t) => t.date === ds)) return "#1a1600";
    return "#111111";
  };

  return (
    <div className="flex h-full overflow-hidden bg-[#0d0d0d]">

      {/* ── Calendar column ────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-[#111111] border-b border-[#1e1e1e] shrink-0">
          <div>
            <p className="text-[10px] font-mono tracking-[3px] text-[#A30A24] uppercase mb-0.5">◳ Availability</p>
            <h2 className="text-lg font-extrabold text-[#F7F5F2] tracking-tight">Calendar</h2>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={goToday}
              className="px-4 py-2 rounded-lg text-[10px] font-mono tracking-[2px] uppercase font-semibold border border-[#A30A24] text-[#A30A24] hover:bg-[#A30A24] hover:text-white transition-colors">
              Today
            </button>
            <div className="flex items-center bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg overflow-hidden">
              <button onClick={prevMonth} className="w-9 h-9 flex items-center justify-center text-[#6E6E6E] hover:text-[#A30A24] hover:bg-[#1a1a1a] transition-colors">
                <Ic d={I.prev} size={14} sw={2.5} />
              </button>
              <span className="px-3 text-xs font-mono font-bold min-w-[140px] text-center text-[#F7F5F2]">
                {MONTH_NAMES[viewMonth]} {viewYear}
              </span>
              <button onClick={nextMonth} className="w-9 h-9 flex items-center justify-center text-[#6E6E6E] hover:text-[#A30A24] hover:bg-[#1a1a1a] transition-colors">
                <Ic d={I.next} size={14} sw={2.5} />
              </button>
            </div>
          </div>
        </header>

        {/* Legend */}
        <div className="flex items-center gap-4 px-6 py-2.5 bg-[#111111] border-b border-[#1e1e1e] shrink-0 flex-wrap">
          {[
            { color: "#111111", border: "#2a2a2a", label: "Available" },
            { color: "#1e0a0e", border: "#3a1a1e", label: "Has Bookings" },
            { gradient: STRIPE_SOFT, label: "Soft Block" },
            { gradient: STRIPE_HARD, label: "Hard Block" },
            { color: "#A30A24", label: "Selected" },
            { color: "#1a1600", border: "#3a3000", label: "Time Block" },
            { color: "#0d0d0d", border: "#1e1e1e", label: "Past", opacity: 0.4 },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm flex-shrink-0"
                style={{ background: item.gradient || item.color, border: `1px solid ${item.border || "rgba(255,255,255,0.1)"}`, opacity: item.opacity || 1 }} />
              <span className="text-[10px] font-mono text-[#6E6E6E]">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="bg-[#111111] rounded-xl border border-[#1e1e1e] overflow-hidden h-full flex flex-col">

            {/* Day headers */}
            <div className="grid grid-cols-7 border-b border-[#1e1e1e] bg-[#0d0d0d]">
              {DAYS_SHORT.map((d, i) => (
                <div key={d} className="py-3 text-center text-[10px] font-mono tracking-[2px] uppercase"
                  style={{ color: (i === 0 || i === 6) ? "#A30A24" : "#6E6E6E" }}>
                  {d}
                </div>
              ))}
            </div>

            {/* Cells */}
            <div className="grid grid-cols-7 flex-1" style={{ gridAutoRows: "minmax(80px,1fr)" }}>
              {calDays.map((ds, idx) => {
                if (!ds) return (
                  <div key={`b${idx}`} style={{ borderRight: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a", background: "#0a0a0a" }} />
                );

                const status    = getStatus(ds);
                const sel       = ds === selectedDate;
                const bks       = bookingsByDate[ds] || [];
                const hasTB     = timeBlocks.some((t) => t.date === ds);
                const isOpen    = openDates.has(ds);
                const isPastDay = status === "past";
                const dow       = parseD(ds)?.getDay();
                const bg        = getCellBg(ds, status, sel);

                const cellStyle = {
                  position: "relative",
                  cursor: isPastDay ? "not-allowed" : "pointer",
                  padding: "8px 8px 24px",
                  borderRight: "1px solid #1a1a1a",
                  borderBottom: "1px solid #1a1a1a",
                  transition: "all 0.12s",
                  ...(bg ? { background: bg } : {}),
                  ...(status === "blocked-manual" ? { backgroundImage: STRIPE_HARD } : {}),
                  ...(isBlocked(status) && status !== "blocked-manual" ? { backgroundImage: STRIPE_SOFT } : {}),
                  ...(isPastDay ? { opacity: 0.3 } : {}),
                  ...(sel ? { boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.15)" } : {}),
                  ...(isToday(ds) && !sel ? { outline: "2px solid #A30A24", outlineOffset: "-2px" } : {}),
                };

                const numColor = sel ? "#fff"
                  : isPastDay ? "#3a3a3a"
                  : isBlocked(status) ? "#5a3a3a"
                  : (dow === 0 || dow === 6) ? "#A30A24"
                  : isToday(ds) ? "#A30A24"
                  : "#F7F5F2";

                return (
                  <div key={ds} style={cellStyle} onClick={() => handleDayClick(ds)} className="group">
                    <div className="flex items-start justify-between">
                      <span className="text-sm font-bold leading-none font-mono" style={{ color: numColor }}>
                        {parseInt(ds.split("-")[2])}
                      </span>
                      <div className="flex flex-col items-end gap-0.5">
                        {isToday(ds) && !sel && (
                          <span className="text-[8px] font-extrabold px-1.5 py-0.5 rounded leading-none bg-[#A30A24] text-white">
                            TODAY
                          </span>
                        )}
                        {isOpen && (
                          <span className="text-[8px] font-bold px-1 py-0.5 rounded leading-none bg-emerald-700 text-white">
                            OPEN
                          </span>
                        )}
                      </div>
                    </div>

                    {isBlocked(status) && !isToday(ds) && (
                      <p className="text-[9px] font-mono mt-0.5 leading-tight text-[#5a3a3a]">
                        {status === "blocked-manual" ? "Blocked"
                          : status === "blocked-weekend" ? "Weekend"
                          : status === "blocked-dayoff" ? "Day Off"
                          : "Range"}
                      </p>
                    )}

                    {hasTB && !isBlocked(status) && (
                      <div className="mt-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-amber-400" />
                        <span className="text-[8px] font-mono" style={{ color: sel ? "rgba(255,255,255,0.7)" : "#b45309" }}>
                          Time block
                        </span>
                      </div>
                    )}

                    {bks.length > 0 && !isBlocked(status) && (
                      <div className="absolute bottom-1.5 left-0 right-0 flex items-center justify-center gap-0.5 flex-wrap px-2">
                        {bks.slice(0, 3).map((b) => (
                          <span key={b.id} className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: b.status === "Confirmed" ? "#10b981" : "#f59e0b" }} />
                        ))}
                        {bks.length > 3 && (
                          <span className="text-[8px] font-mono font-bold" style={{ color: sel ? "rgba(255,255,255,0.85)" : "#A30A24" }}>
                            +{bks.length - 3}
                          </span>
                        )}
                        <span className="w-full text-center text-[8px] font-mono" style={{ color: sel ? "rgba(255,255,255,0.6)" : "#6E6E6E" }}>
                          {bks.length} bk{bks.length > 1 ? "s" : ""}
                        </span>
                      </div>
                    )}

                    {!isPastDay && !isBlocked(status) && !sel && (
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                        style={{ background: "rgba(163,10,36,0.06)" }} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Right Panel ────────────────────────────────────────────────────── */}
      <aside className="w-80 shrink-0 flex flex-col overflow-hidden bg-[#111111] border-l border-[#1e1e1e]">

        {/* Tabs */}
        <div className="flex border-b border-[#1e1e1e] shrink-0">
          {[
            { id: "day",    label: "Day Detail",   ic: I.calendar },
            { id: "manage", label: "Availability", ic: I.settings },
          ].map((t) => (
            <button key={t.id} onClick={() => setRightTab(t.id)}
              className="flex-1 flex items-center justify-center gap-1.5 py-3.5 text-[10px] font-mono tracking-[2px] uppercase font-semibold transition-all border-b-2"
              style={{
                borderColor: rightTab === t.id ? "#A30A24" : "transparent",
                color: rightTab === t.id ? "#A30A24" : "#6E6E6E",
                background: rightTab === t.id ? "#0d0d0d" : "transparent",
              }}>
              <Ic d={t.ic} size={13} /> {t.label}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto">

          {/* ── DAY DETAIL ────────────────────────────────────────────────── */}
          {rightTab === "day" && (
            <div className="p-5 space-y-5">

              {/* Date card */}
              <div className="rounded-xl p-4 bg-[#1a0a0e] border border-[#3a1a1e]">
                <p className="text-[10px] font-mono tracking-[3px] uppercase text-[#A30A24] mb-1">
                  Selected Date
                </p>
                <p className="font-bold text-sm text-[#F7F5F2] font-mono">{displayDate(selectedDate)}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {isToday(selectedDate) && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-[#A30A24] text-white">Today</span>
                  )}
                  {selStatus === "past" && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-[#1e1e1e] text-[#6E6E6E]">Past</span>
                  )}
                  {isBlocked(selStatus) && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-[#A30A24]/20 text-[#A30A24]">Blocked</span>
                  )}
                  {!isBlocked(selStatus) && !isPast(selectedDate) && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-emerald-900/50 text-emerald-400">Available</span>
                  )}
                  {selIsOpen && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-emerald-900/50 text-emerald-400">Opened</span>
                  )}
                </div>
              </div>

              {/* Block reason */}
              {isBlocked(selStatus) && (
                <div className="rounded-xl p-3.5 flex gap-2.5 items-start bg-[#1a0a0e] border border-[#A30A24]/30">
                  <Ic d={I.lock} size={14} stroke="#A30A24" sw={2} />
                  <div>
                    <p className="text-xs font-bold text-[#A30A24]">
                      {selStatus === "blocked-manual" ? "Manually Blocked"
                        : selStatus === "blocked-weekend" ? "Weekend (Blocked)"
                        : `Range: ${selRange?.label || "Blocked"}`}
                    </p>
                    {selRange && (
                      <p className="text-[10px] mt-0.5 font-mono text-[#6E6E6E]">
                        {displayShort(selRange.start)} — {displayShort(selRange.end)}
                      </p>
                    )}
                    {isOverridable(selStatus) && !selIsOpen && (
                      <p className="text-[10px] mt-1 text-[#6E6E6E]">You can open this day as an exception.</p>
                    )}
                  </div>
                </div>
              )}

              {/* Quick actions */}
              {!isPast(selectedDate) && (
                <div className="flex flex-col gap-2">
                  {selStatus === "blocked-manual" && (
                    <button onClick={() => removeBlockedDate(selectedDate)}
                      className="w-full py-2.5 px-3 rounded-lg text-[10px] font-mono tracking-[2px] uppercase font-bold text-white flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 transition-colors">
                      <Ic d={I.unlock} size={12} sw={2.5} stroke="#fff" /> Unblock Day
                    </button>
                  )}
                  {isOverridable(selStatus) && !selIsOpen && (
                    <button onClick={() => openDate(selectedDate)}
                      className="w-full py-2.5 px-3 rounded-lg text-[10px] font-mono tracking-[2px] uppercase font-bold text-white flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 transition-colors">
                      <Ic d={I.unlock} size={12} sw={2.5} stroke="#fff" /> Open This Day
                    </button>
                  )}
                  {selIsOpen && (
                    <button onClick={() => closeDate(selectedDate)}
                      className="w-full py-2.5 px-3 rounded-lg text-[10px] font-mono tracking-[2px] uppercase font-semibold border border-[#A30A24] text-[#A30A24] flex items-center justify-center gap-2 hover:bg-[#A30A24]/10 transition-colors">
                      <Ic d={I.lock} size={12} sw={2.5} /> Re-block Day
                    </button>
                  )}
                </div>
              )}

              {/* Divider */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono tracking-[3px] uppercase text-[#6E6E6E]">Bookings</span>
                <div className="flex-1 border-t border-dashed border-[#1e1e1e]" />
                <span className="text-[10px] font-mono text-[#6E6E6E]">{selBookings.length}</span>
              </div>

              {/* Booking cards */}
              {selBookings.length === 0 ? (
                <div className="text-center py-8 rounded-xl bg-[#0d0d0d] border border-dashed border-[#1e1e1e]">
                  <Ic d={I.calendar} size={22} stroke="#2a2a2a" sw={1.5} />
                  <p className="text-[10px] font-mono tracking-[2px] uppercase text-[#3a3a3a] mt-2">No bookings this day</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {selBookings.map((b) => (
                    <div key={b.id} className="rounded-xl p-3 bg-[#0d0d0d] border border-[#1e1e1e]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#A30A24]/10 text-[#A30A24]">
                          #{b.id}
                        </span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 ${SB[b.status] || ""}`}>
                          <span className={`w-1 h-1 rounded-full ${SD[b.status] || "bg-gray-400"}`} />
                          {b.status}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-[#F7F5F2]">
                        {typeof b.customer === "object" ? b.customer?.name : b.customer}
                      </p>
                      <p className="text-[10px] font-mono text-[#6E6E6E] mt-0.5">
                        {typeof b.service === "object" ? b.service?.title : b.service}
                      </p>
                      <p className="text-[10px] font-mono text-[#6E6E6E] mt-0.5 flex items-center gap-1">
                        <Ic d={I.clock} size={10} stroke="#6E6E6E" sw={2} /> {b.time}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Time blocks on this day */}
              {selTimeBlocks.length > 0 && (
                <>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono tracking-[3px] uppercase text-[#6E6E6E]">Time Blocks</span>
                    <div className="flex-1 border-t border-dashed border-[#1e1e1e]" />
                  </div>
                  <div className="space-y-2">
                    {selTimeBlocks.map((t) => (
                      <div key={t.id} className="flex items-center justify-between rounded-lg px-3 py-2.5 bg-[#1a1600] border border-amber-900/40">
                        <div>
                          <p className="text-xs font-bold text-amber-400">{t.label}</p>
                          <p className="text-[10px] font-mono text-amber-700">{t.startTime} — {t.endTime}</p>
                        </div>
                        <button onClick={() => removeTimeBlock(t.id)}
                          className="w-6 h-6 rounded flex items-center justify-center text-amber-700 hover:bg-amber-900/30 transition-colors">
                          <Ic d={I.close} size={11} sw={2.5} />
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* ── AVAILABILITY MANAGEMENT ───────────────────────────────────── */}
          {rightTab === "manage" && (
            <div className="p-5 space-y-6">

              {/* Working days */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-mono tracking-[3px] uppercase text-[#6E6E6E]">Working Days</span>
                  <div className="flex-1 border-t border-dashed border-[#1e1e1e]" />
                </div>
                <p className="text-[10px] text-[#6E6E6E] font-mono mb-3">Tap a day to toggle it as a recurring day off.</p>
                <div className="grid grid-cols-7 gap-1">
                  {DAYS_SHORT.map((day, i) => {
                    const isOff  = dayOffsBlocked.has(i);
                    const isWknd = i === 0 || i === 6;
                    return (
                      <button key={day} onClick={() => toggleDayOff(i)}
                        className="flex flex-col items-center py-1.5 rounded-lg text-[10px] font-mono font-bold transition-all"
                        style={{
                          background: isOff ? "#A30A24" : isWknd ? "#1a0a0e" : "#0d0d0d",
                          color:      isOff ? "#fff"    : isWknd ? "#A30A24" : "#6E6E6E",
                          border:     `1px solid ${isOff ? "#A30A24" : "#2a2a2a"}`,
                        }}>
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-dashed border-[#1e1e1e]" />

              {/* Weekend toggle */}
              <div className="flex items-center justify-between rounded-xl p-4 bg-[#0d0d0d] border border-[#2a2a2a]">
                <div>
                  <p className="text-xs font-bold text-[#F7F5F2]">Block Weekends</p>
                  <p className="text-[10px] font-mono text-[#6E6E6E] mt-0.5">Sat &amp; Sun closed by default</p>
                </div>
                <Toggle on={weekendsBlocked} onChange={() => setWeekendsBlocked((v) => !v)} />
              </div>

              <div className="border-t border-dashed border-[#1e1e1e]" />

              {/* Add Block */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono tracking-[3px] uppercase text-[#6E6E6E]">Add Block</span>
                  <div className="flex-1 border-t border-dashed border-[#1e1e1e]" />
                </div>

                {/* Mode tabs */}
                <div className="flex rounded-lg overflow-hidden border border-[#2a2a2a] mb-4">
                  {[["date", "Date"], ["range", "Range"], ["time", "Time"]].map(([mode, label]) => (
                    <button key={mode} onClick={() => { setBlockMode(mode); setMsg({ text: "", ok: true }); }}
                      className="flex-1 py-2 text-[10px] font-mono tracking-[1px] uppercase font-bold transition-all"
                      style={{
                        background: blockMode === mode ? "#A30A24" : "#0d0d0d",
                        color:      blockMode === mode ? "#fff"    : "#6E6E6E",
                      }}>
                      {label}
                    </button>
                  ))}
                </div>

                {/* Date form */}
                {blockMode === "date" && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-mono tracking-[2px] uppercase text-[#6E6E6E] mb-1.5">Select Date *</label>
                      <input type="date" className={darkInp} style={darkInpSty} value={blockDate} min={TODAY} onChange={(e) => setBlockDate(e.target.value)} />
                    </div>
                    <button onClick={addBlockDate}
                      className="w-full py-2.5 rounded-lg text-[10px] font-mono tracking-[2px] uppercase font-bold text-white flex items-center justify-center gap-2 bg-[#A30A24] hover:bg-[#8a0820] transition-colors">
                      <Ic d={I.lock} size={12} sw={2.5} stroke="#fff" /> Block This Date
                    </button>
                  </div>
                )}

                {/* Range form */}
                {blockMode === "range" && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] font-mono tracking-[2px] uppercase text-[#6E6E6E] mb-1.5">From *</label>
                        <input type="date" className={darkInp} style={darkInpSty} value={rangeStart} min={TODAY} onChange={(e) => setRangeStart(e.target.value)} />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono tracking-[2px] uppercase text-[#6E6E6E] mb-1.5">To *</label>
                        <input type="date" className={darkInp} style={darkInpSty} value={rangeEnd} min={rangeStart || TODAY} onChange={(e) => setRangeEnd(e.target.value)} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono tracking-[2px] uppercase text-[#6E6E6E] mb-1.5">Label</label>
                      <input className={darkInp} placeholder="e.g. Vacation, Holiday" value={rangeLabel} onChange={(e) => setRangeLabel(e.target.value)} />
                    </div>
                    <button onClick={addBlockRange}
                      className="w-full py-2.5 rounded-lg text-[10px] font-mono tracking-[2px] uppercase font-bold text-white flex items-center justify-center gap-2 bg-[#A30A24] hover:bg-[#8a0820] transition-colors">
                      <Ic d={I.lock} size={12} sw={2.5} stroke="#fff" /> Block Range
                    </button>
                  </div>
                )}

                {/* Time form */}
                {blockMode === "time" && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-mono tracking-[2px] uppercase text-[#6E6E6E] mb-1.5">Date *</label>
                      <input type="date" className={darkInp} style={darkInpSty} value={timeDate} min={TODAY} onChange={(e) => setTimeDate(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] font-mono tracking-[2px] uppercase text-[#6E6E6E] mb-1.5">From</label>
                        <select className={darkInp} value={timeStart} onChange={(e) => setTimeStart(e.target.value)}>
                          {TIME_OPTIONS.map((t) => <option key={t}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono tracking-[2px] uppercase text-[#6E6E6E] mb-1.5">To</label>
                        <select className={darkInp} value={timeEnd} onChange={(e) => setTimeEnd(e.target.value)}>
                          {TIME_OPTIONS.map((t) => <option key={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono tracking-[2px] uppercase text-[#6E6E6E] mb-1.5">Label</label>
                      <input className={darkInp} placeholder="e.g. Lunch Break, Reserved" value={timeLabel} onChange={(e) => setTimeLabel(e.target.value)} />
                    </div>
                    <button onClick={handleAddTimeBlock}
                      className="w-full py-2.5 rounded-lg text-[10px] font-mono tracking-[2px] uppercase font-bold text-white flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 transition-colors">
                      <Ic d={I.clock} size={12} sw={2.5} stroke="#fff" /> Add Time Block
                    </button>
                  </div>
                )}

                {msg.text && (
                  <div className={`mt-3 text-[10px] font-mono tracking-[1px] font-semibold px-3 py-2.5 rounded-lg border ${
                    msg.ok
                      ? "bg-emerald-950/50 border-emerald-800 text-emerald-400"
                      : "bg-[#A30A24]/10 border-[#A30A24]/30 text-[#A30A24]"
                  }`}>
                    {msg.ok ? "✓ " : "⚠ "}{msg.text}
                  </div>
                )}
              </div>

              <div className="border-t border-dashed border-[#1e1e1e]" />

              {/* Active blocks list */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-mono tracking-[3px] uppercase text-[#6E6E6E]">Active Blocks</span>
                  <div className="flex-1 border-t border-dashed border-[#1e1e1e]" />
                  <span className="text-[10px] font-mono text-[#6E6E6E]">
                    {blockedDates.size + blockedRanges.length + timeBlocks.length + openDates.size}
                  </span>
                </div>

                {blockedDates.size === 0 && blockedRanges.length === 0 && timeBlocks.length === 0 && openDates.size === 0 ? (
                  <p className="text-[10px] font-mono text-center py-4 text-[#3a3a3a]">No active blocks or exceptions</p>
                ) : (
                  <div className="space-y-2">
                    {[...blockedDates].sort().map((d) => (
                      <div key={d} className="flex items-center justify-between rounded-lg px-3 py-2.5 bg-[#1a0a0e] border border-[#A30A24]/20">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#A30A24] flex-shrink-0" />
                          <div>
                            <p className="text-[10px] font-mono font-bold text-[#A30A24]">Manual Block</p>
                            <p className="text-[10px] font-mono text-[#6E6E6E]">{displayShort(d)}</p>
                          </div>
                        </div>
                      </div>
                    ))}

                    {blockedRanges.map((r) => (
                      <div key={r.id} className="flex items-center justify-between rounded-lg px-3 py-2.5 bg-[#1a0a0e] border border-[#A30A24]/20">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-6 rounded-full bg-[#A30A24] flex-shrink-0" />
                          <div>
                            <p className="text-[10px] font-mono font-bold text-[#A30A24]">{r.label}</p>
                            <p className="text-[10px] font-mono text-[#6E6E6E]">{displayShort(r.start)} → {displayShort(r.end)}</p>
                          </div>
                        </div>
                        <button onClick={() => removeRange(r.id)}
                          className="w-6 h-6 rounded flex items-center justify-center text-[#A30A24] hover:bg-[#A30A24]/10 transition-colors">
                          <Ic d={I.close} size={11} sw={2.5} />
                        </button>
                      </div>
                    ))}

                    {timeBlocks.map((t) => (
                      <div key={t.id} className="flex items-center justify-between rounded-lg px-3 py-2.5 bg-[#1a1600] border border-amber-900/40">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                          <div>
                            <p className="text-[10px] font-mono font-bold text-amber-400">{t.label}</p>
                            <p className="text-[10px] font-mono text-amber-700">{displayShort(t.date)} · {t.startTime}–{t.endTime}</p>
                          </div>
                        </div>
                        <button onClick={() => removeTimeBlock(t.id)}
                          className="w-6 h-6 rounded flex items-center justify-center text-amber-700 hover:bg-amber-900/30 transition-colors">
                          <Ic d={I.close} size={11} sw={2.5} />
                        </button>
                      </div>
                    ))}

                    {[...openDates].sort().map((d) => (
                      <div key={d} className="flex items-center justify-between rounded-lg px-3 py-2.5 bg-emerald-950/40 border border-emerald-800/40">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                          <div>
                            <p className="text-[10px] font-mono font-bold text-emerald-400">Exception (Opened)</p>
                            <p className="text-[10px] font-mono text-emerald-700">{displayShort(d)}</p>
                          </div>
                        </div>
                        <button onClick={() => closeDate(d)}
                          className="w-6 h-6 rounded flex items-center justify-center text-emerald-700 hover:bg-emerald-900/30 transition-colors">
                          <Ic d={I.close} size={11} sw={2.5} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}