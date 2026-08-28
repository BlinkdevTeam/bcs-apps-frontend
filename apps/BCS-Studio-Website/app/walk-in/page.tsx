"use client";

import { useEffect, useMemo, useState } from "react";
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// ── Types ──────────────────────────────────────────────────────────────────
interface PkgAddon {
  id: string;
  label: string;
  price: number;
}
interface PkgInclusion {
  id: string;
  text: string;
}
interface Package {
  id: string;
  title: string;
  description?: string;
  price: number;
  duration: number;
  type?: "portrait" | "rental";
  color?: string;
  isActive?: boolean;
  inclusions: PkgInclusion[];
  addons: PkgAddon[];
}
interface CartItem {
  cartId: string;
  pkgId: string;
  title: string;
  color: string;
  unitPrice: number;
  basePrice: number;
  addons: PkgAddon[];
  qty: number;
}

const uid = () => Math.random().toString(36).slice(2, 10);
const peso = (n: number) => `₱${Number(n).toLocaleString("en-PH")}`;
const durLabel = (mins: number) =>
  mins >= 60
    ? mins % 60 === 0
      ? `${mins / 60} hr${mins / 60 > 1 ? "s" : ""}`
      : `${(mins / 60).toFixed(1)} hrs`
    : `${mins} min`;

// Bento span pattern (desktop only) — deterministic, not random
const SPAN_PATTERN = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-2",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
];

// ── Icons ──────────────────────────────────────────────────────────────────
const Icon = ({
  d,
  size = 16,
  stroke = "currentColor",
  sw = 2,
}: {
  d: string;
  size?: number;
  stroke?: string;
  sw?: number;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={stroke}
    strokeWidth={sw}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={d} />
  </svg>
);
const I = {
  plus: "M12 5v14M5 12h14",
  minus: "M5 12h14",
  trash: "M3 6h18M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6",
  close: "M18 6L6 18M6 6l12 12",
  check: "M20 6L9 17l-5-5",
  cart: "M6 6h15l-1.5 9h-13z M6 6L4.5 3H2 M9 20a1 1 0 100-2 1 1 0 000 2zM18 20a1 1 0 100-2 1 1 0 000 2z",
  cam: "M4 8a2 2 0 012-2h1l1.5-2h7L17 6h1a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8zM12 17a4 4 0 100-8 4 4 0 000 8z",
};

// ── Live clock ─────────────────────────────────────────────────────────────
function useNow() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const raf = requestAnimationFrame(() => setNow(new Date()));
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(t);
    };
  }, []);
  return now;
}

// ── Add-on picker modal ──────────────────────────────────────────────────
function AddonPicker({
  pkg,
  onCancel,
  onConfirm,
}: {
  pkg: Package;
  onCancel: () => void;
  onConfirm: (addons: PkgAddon[]) => void;
}) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const toggle = (id: string) =>
    setSelected((p) => {
      const s = new Set(p);
      if (s.has(id)) {
        s.delete(id);
      } else {
        s.add(id);
      }
      return s;
    });
  const chosen = pkg.addons.filter((a) => selected.has(a.id));
  const total = pkg.price + chosen.reduce((s, a) => s + Number(a.price), 0);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
    >
      <div className="bg-[#141414] w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl border border-[#2a2a2a] max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1e1e1e]">
          <div>
            <p
              className={`${mono.className} text-[10px] tracking-[2px] uppercase text-[#A30A24]`}
            >
              Add-ons
            </p>
            <h3
              className="text-lg font-bold text-[#F7F5F2]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {pkg.title}
            </h3>
          </div>
          <button
            onClick={onCancel}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#6E6E6E] hover:bg-[#1e1e1e]"
          >
            <Icon d={I.close} size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2">
          {pkg.addons.length === 0 ? (
            <p className="text-sm text-[#6E6E6E]">
              No add-ons for this package.
            </p>
          ) : (
            pkg.addons.map((a) => {
              const on = selected.has(a.id);
              return (
                <button
                  key={a.id}
                  onClick={() => toggle(a.id)}
                  className="w-full flex items-center gap-3 p-3 rounded-xl text-left transition-colors"
                  style={{
                    background: on ? "rgba(163,10,36,0.12)" : "#0d0d0d",
                    border: `1.5px solid ${on ? "#A30A24" : "#1e1e1e"}`,
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0"
                    style={{
                      borderColor: on ? "#A30A24" : "#3a3a3a",
                      background: on ? "#A30A24" : "transparent",
                    }}
                  >
                    {on && <Icon d={I.check} size={12} stroke="#fff" sw={3} />}
                  </span>
                  <span className="flex-1 text-sm text-[#F7F5F2]">
                    {a.label}
                  </span>
                  <span className={`${mono.className} text-xs text-[#A30A24]`}>
                    +{peso(a.price)}
                  </span>
                </button>
              );
            })
          )}
        </div>

        <div className="px-6 py-4 border-t border-[#1e1e1e] flex items-center gap-3">
          <div className="flex-1">
            <p
              className={`${mono.className} text-[9px] uppercase tracking-[2px] text-[#6E6E6E]`}
            >
              Total
            </p>
            <p className="text-xl font-bold text-[#F7F5F2]">{peso(total)}</p>
          </div>
          <button
            onClick={onCancel}
            className="px-4 py-2.5 rounded-lg text-sm font-semibold text-[#6E6E6E] border border-[#2a2a2a] hover:bg-[#1e1e1e]"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(chosen)}
            className="px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-[#A30A24] hover:bg-[#8a0820]"
          >
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────
export default function WalkInPage() {
  const now = useNow();
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "portrait" | "rental">("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [pickerPkg, setPickerPkg] = useState<Package | null>(null);
  const [cartOpenMobile, setCartOpenMobile] = useState(false);
  const [view, setView] = useState<"grid" | "checkout" | "success">("grid");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [successInfo, setSuccessInfo] = useState<{
    ids: string[];
    total: number;
  } | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/packages");
        const data = await res.json();
        setPackages(
          Array.isArray(data)
            ? data.filter((p: Package) => p.isActive !== false)
            : [],
        );
      } catch (err) {
        console.error("Failed to load packages", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? packages
        : packages.filter((p) => (p.type || "portrait") === filter),
    [packages, filter],
  );

  const addToCart = (pkg: Package, addons: PkgAddon[]) => {
    const unitPrice =
      pkg.price + addons.reduce((s, a) => s + Number(a.price), 0);
    const addonKey = addons
      .map((a) => a.id)
      .sort()
      .join(",");
    setCart((prev) => {
      const existing = prev.find(
        (c) =>
          c.pkgId === pkg.id &&
          c.addons
            .map((a) => a.id)
            .sort()
            .join(",") === addonKey,
      );
      if (existing) {
        return prev.map((c) =>
          c.cartId === existing.cartId ? { ...c, qty: c.qty + 1 } : c,
        );
      }
      return [
        ...prev,
        {
          cartId: uid(),
          pkgId: pkg.id,
          title: pkg.title,
          color: pkg.color || "#A30A24",
          unitPrice,
          basePrice: pkg.price,
          addons,
          qty: 1,
        },
      ];
    });
    setCartOpenMobile(true);
  };

  const handleCardClick = (pkg: Package) => {
    if (pkg.addons.length > 0) {
      setPickerPkg(pkg);
    } else {
      addToCart(pkg, []);
    }
  };

  const updateQty = (cartId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => (c.cartId === cartId ? { ...c, qty: c.qty + delta } : c))
        .filter((c) => c.qty > 0),
    );
  };
  const removeItem = (cartId: string) =>
    setCart((prev) => prev.filter((c) => c.cartId !== cartId));

  const cartCount = cart.reduce((s, c) => s + c.qty, 0);
  const total = cart.reduce((s, c) => s + c.unitPrice * c.qty, 0);

  const submitOrder = async () => {
    if (cart.length === 0) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/walk-in-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName,
          customerPhone,
          items: cart.map((c) => ({
            serviceId: c.pkgId,
            addons: c.addons,
            basePrice: c.basePrice,
            quantity: c.qty,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit order");
      setSuccessInfo({ ids: data.bookingIds, total });
      setView("success");
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const startNewOrder = () => {
    setCart([]);
    setCustomerName("");
    setCustomerPhone("");
    setSuccessInfo(null);
    setSubmitError("");
    setView("grid");
    setCartOpenMobile(false);
  };

  const dateLabel = now
    ? now.toLocaleDateString("en-PH", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    : "";
  const timeLabel = now
    ? now.toLocaleTimeString("en-PH", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    : "--:--:--";

  // ── Success screen ─────────────────────────────────────────────────────
  if (view === "success" && successInfo) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ background: "#0d0d0d" }}
      >
        <div className="w-full max-w-md text-center">
          <div
            className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{ background: "rgba(163,10,36,0.15)" }}
          >
            <Icon d={I.check} size={30} stroke="#A30A24" sw={2.5} />
          </div>
          <p
            className={`${mono.className} text-[10px] uppercase tracking-[3px] text-[#A30A24] mb-2`}
          >
            Order Confirmed
          </p>
          <h1 className="text-3xl font-extrabold text-[#F7F5F2] mb-2">
            You&apos;re all set.
          </h1>
          <p className="text-sm text-[#6E6E6E] mb-8">
            {cart.length ? "" : ""}Booking recorded for today, {dateLabel}.
          </p>

          <div
            className="rounded-2xl p-5 mb-6 text-left"
            style={{ background: "#141414", border: "1px solid #1e1e1e" }}
          >
            <div className="flex justify-between items-center pb-3 mb-3 border-b border-[#1e1e1e]">
              <span
                className={`${mono.className} text-[10px] uppercase tracking-[2px] text-[#6E6E6E]`}
              >
                Total Paid
              </span>
              <span className="text-2xl font-bold text-[#A30A24]">
                {peso(successInfo.total)}
              </span>
            </div>
            <p
              className={`${mono.className} text-[10px] uppercase tracking-[2px] text-[#6E6E6E]`}
            >
              Reference{successInfo.ids.length > 1 ? "s" : ""}:{" "}
              {successInfo.ids.map((id) => `#${id}`).join(", ")}
            </p>
          </div>

          <button
            onClick={startNewOrder}
            className="w-full py-3.5 rounded-xl text-sm font-bold text-white"
            style={{ background: "#A30A24" }}
          >
            Start New Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row"
      style={{ background: "#0d0d0d" }}
    >
      {/* ── Main ── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header
          className="flex items-center justify-between px-6 lg:px-10 py-5 border-b shrink-0"
          style={{ borderColor: "#1e1e1e" }}
        >
          <div>
            <p
              className={`${mono.className} text-[10px] uppercase tracking-[3px] text-[#A30A24] mb-1`}
            >
              ◳ Front Desk
            </p>
            <h1
              className="text-2xl font-extrabold text-[#F7F5F2] tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Walk-in Booking
            </h1>
          </div>
          <div className="text-right hidden sm:block">
            <p className={`${mono.className} text-xs text-[#F7F5F2]`}>
              {dateLabel}
            </p>
            <p
              className={`${mono.className} text-[11px] text-[#A30A24] tabular-nums`}
            >
              {timeLabel}
            </p>
          </div>
        </header>

        {/* Filters */}
        <div
          className="flex items-center gap-2 px-6 lg:px-10 py-4 border-b shrink-0"
          style={{ borderColor: "#1e1e1e" }}
        >
          {[
            { key: "all", label: "All Services" },
            { key: "portrait", label: "Portraits" },
            { key: "rental", label: "Studio Rental" },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key as typeof filter)}
              className={`${mono.className} px-4 py-2 rounded-lg text-[11px] uppercase tracking-[1px] font-semibold transition-colors`}
              style={
                filter === f.key
                  ? { background: "#A30A24", color: "#fff" }
                  : {
                      background: "#141414",
                      color: "#6E6E6E",
                      border: "1px solid #1e1e1e",
                    }
              }
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Bento grid */}
        <div className="flex-1 overflow-y-auto px-6 lg:px-10 py-6 pb-28 lg:pb-6">
          {loading ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl animate-pulse"
                  style={{ background: "#141414", height: 160 }}
                />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 gap-3 text-center">
              <Icon d={I.cam} size={32} stroke="#3a3a3a" />
              <p className="text-sm text-[#6E6E6E]">
                No services available in this category yet.
              </p>
            </div>
          ) : (
            <div
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            //   style={{ gridAutoRows: "150px", gridAutoFlow: "dense" }}
            >
              {filtered.map((pkg, i) => {
                const span = SPAN_PATTERN[i % SPAN_PATTERN.length];
                const color = pkg.color || "#A30A24";
                const inCart = cart
                  .filter((c) => c.pkgId === pkg.id)
                  .reduce((s, c) => s + c.qty, 0);
                return (
                  <button
                    key={pkg.id}
                    onClick={() => handleCardClick(pkg)}
                    className={`relative overflow-hidden rounded-2xl p-5 text-left flex flex-col justify-between transition-transform hover:-translate-y-0.5 ${span}`}
                    style={{
                      background: "#141414",
                      border: `1px solid ${color}30`,
                    }}
                  >
                    {/* accent glow */}
                    <div
                      className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-20"
                      style={{ background: color }}
                    />

                    {inCart > 0 && (
                      <span
                        className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full text-white z-10"
                        style={{ background: color }}
                      >
                        ×{inCart}
                      </span>
                    )}

                    <div className="relative z-10">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                        style={{
                          background: `${color}20`,
                          border: `1px solid ${color}40`,
                        }}
                      >
                        <Icon d={I.cam} size={16} stroke={color} sw={1.8} />
                      </div>
                      <h3
                        className="font-bold text-[#F7F5F2] leading-snug"
                        style={{
                          fontFamily: "Georgia, serif",
                          fontSize: "clamp(15px, 1.4vw, 19px)",
                        }}
                      >
                        {pkg.title}
                      </h3>
                      {pkg.description && (
                        <p className="text-xs text-[#6E6E6E] mt-1.5 line-clamp-2">
                          {pkg.description}
                        </p>
                      )}
                    </div>

                    <div className="relative z-10 flex items-end justify-between mt-3">
                      <div>
                        <p
                          className={`${mono.className} text-[10px] text-[#6E6E6E] uppercase tracking-wide`}
                        >
                          {durLabel(pkg.duration)}
                        </p>
                        <p className="text-lg font-bold" style={{ color }}>
                          {peso(pkg.price)}
                        </p>
                      </div>
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: color }}
                      >
                        <Icon d={I.plus} size={15} stroke="#fff" sw={2.5} />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* ── Cart — desktop sidebar ── */}
      <aside
        className="hidden lg:flex w-96 shrink-0 flex-col border-l"
        style={{ background: "#111111", borderColor: "#1e1e1e" }}
      >
        <CartPanel
          cart={cart}
          total={total}
          onQty={updateQty}
          onRemove={removeItem}
          view={view}
          setView={setView}
          customerName={customerName}
          setCustomerName={setCustomerName}
          customerPhone={customerPhone}
          setCustomerPhone={setCustomerPhone}
          submitting={submitting}
          submitError={submitError}
          onSubmit={submitOrder}
        />
      </aside>

      {/* ── Cart — mobile bottom sheet ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40">
        {!cartOpenMobile && cart.length > 0 && (
          <button
            onClick={() => setCartOpenMobile(true)}
            className="w-full flex items-center justify-between px-6 py-4"
            style={{ background: "#A30A24" }}
          >
            <span className="flex items-center gap-2 text-white text-sm font-bold">
              <Icon d={I.cart} size={16} stroke="#fff" />
              {cartCount} item{cartCount !== 1 ? "s" : ""}
            </span>
            <span className="text-white text-sm font-bold">
              {peso(total)} · View Order
            </span>
          </button>
        )}
        {cartOpenMobile && (
          <div
            className="fixed inset-0 z-50 flex flex-col"
            style={{ background: "#111111" }}
          >
            <div
              className="flex items-center justify-between px-5 py-4 border-b shrink-0"
              style={{ borderColor: "#1e1e1e" }}
            >
              <span className="font-bold text-[#F7F5F2]">Your Order</span>
              <button
                onClick={() => setCartOpenMobile(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#6E6E6E]"
              >
                <Icon d={I.close} size={16} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto flex flex-col">
              <CartPanel
                cart={cart}
                total={total}
                onQty={updateQty}
                onRemove={removeItem}
                view={view}
                setView={setView}
                customerName={customerName}
                setCustomerName={setCustomerName}
                customerPhone={customerPhone}
                setCustomerPhone={setCustomerPhone}
                submitting={submitting}
                submitError={submitError}
                onSubmit={submitOrder}
              />
            </div>
          </div>
        )}
      </div>

      {pickerPkg && (
        <AddonPicker
          pkg={pickerPkg}
          onCancel={() => setPickerPkg(null)}
          onConfirm={(addons) => {
            addToCart(pickerPkg, addons);
            setPickerPkg(null);
          }}
        />
      )}
    </div>
  );
}

// ── Cart panel (shared between desktop sidebar + mobile sheet) ────────────
function CartPanel({
  cart,
  total,
  onQty,
  onRemove,
  view,
  setView,
  customerName,
  setCustomerName,
  customerPhone,
  setCustomerPhone,
  submitting,
  submitError,
  onSubmit,
}: {
  cart: CartItem[];
  total: number;
  onQty: (id: string, d: number) => void;
  onRemove: (id: string) => void;
  view: "grid" | "checkout" | "success";
  setView: (v: "grid" | "checkout" | "success") => void;
  customerName: string;
  setCustomerName: (v: string) => void;
  customerPhone: string;
  setCustomerPhone: (v: string) => void;
  submitting: boolean;
  submitError: string;
  onSubmit: () => void;
}) {
  const inputCls =
    "w-full px-3.5 py-2.5 rounded-lg text-sm bg-[#0d0d0d] border border-[#2a2a2a] text-[#F7F5F2] placeholder:text-[#3a3a3a] focus:outline-none focus:ring-1 focus:ring-[#A30A24] focus:border-[#A30A24]";

  if (view === "checkout") {
    return (
      <div className="flex-1 flex flex-col">
        <div
          className="px-6 py-4 border-b shrink-0"
          style={{ borderColor: "#1e1e1e" }}
        >
          <button
            onClick={() => setView("grid")}
            className={`${mono.className} text-[10px] uppercase tracking-[2px] text-[#6E6E6E] hover:text-[#A30A24]`}
          >
            ← Back to Order
          </button>
          <p className="font-bold text-[#F7F5F2] mt-1.5">Checkout</p>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div>
            <label
              className={`${mono.className} block text-[10px] uppercase tracking-[2px] text-[#6E6E6E] mb-1.5`}
            >
              Customer Name
            </label>
            <input
              className={inputCls}
              placeholder="Walk-in Customer"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>
          <div>
            <label
              className={`${mono.className} block text-[10px] uppercase tracking-[2px] text-[#6E6E6E] mb-1.5`}
            >
              Phone (optional)
            </label>
            <input
              className={inputCls}
              placeholder="09171234567"
              value={customerPhone}
              onChange={(e) =>
                setCustomerPhone(e.target.value.replace(/\D/g, ""))
              }
            />
          </div>

          {submitError && (
            <div className="text-xs text-[#f87171] bg-[#1a0a0a] border border-[#3a1e1e] rounded-lg px-3 py-2.5">
              {submitError}
            </div>
          )}
        </div>
        <div
          className="p-6 border-t shrink-0"
          style={{ borderColor: "#1e1e1e" }}
        >
          <div className="flex items-center justify-between mb-3">
            <span
              className={`${mono.className} text-[10px] uppercase tracking-[2px] text-[#6E6E6E]`}
            >
              Total
            </span>
            <span className="text-2xl font-bold text-[#A30A24]">
              {peso(total)}
            </span>
          </div>
          <button
            onClick={onSubmit}
            disabled={submitting || cart.length === 0}
            className="w-full py-3.5 rounded-xl text-sm font-bold text-white disabled:opacity-50"
            style={{ background: "#A30A24" }}
          >
            {submitting ? "Confirming…" : "Confirm Order"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <div
        className="px-6 py-4 border-b shrink-0 flex items-center gap-2"
        style={{ borderColor: "#1e1e1e" }}
      >
        <Icon d={I.cart} size={16} stroke="#A30A24" />
        <span className="font-bold text-[#F7F5F2]">Current Order</span>
        <span
          className={`${mono.className} ml-auto text-[10px] text-[#6E6E6E]`}
        >
          {cart.length} line{cart.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <Icon d={I.cart} size={26} stroke="#2a2a2a" />
            <p className="text-xs text-[#3a3a3a] mt-3">
              Tap a service to add it here.
            </p>
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.cartId}
              className="rounded-xl p-3.5"
              style={{ background: "#0d0d0d", border: "1px solid #1e1e1e" }}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#F7F5F2] truncate">
                    {item.title}
                  </p>
                  {item.addons.length > 0 && (
                    <p className="text-[11px] text-[#6E6E6E] mt-0.5">
                      {item.addons.map((a) => a.label).join(", ")}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => onRemove(item.cartId)}
                  className="text-[#6E6E6E] hover:text-[#A30A24] shrink-0"
                >
                  <Icon d={I.trash} size={14} />
                </button>
              </div>
              <div className="flex items-center justify-between mt-2.5">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onQty(item.cartId, -1)}
                    className="w-6 h-6 rounded flex items-center justify-center border border-[#2a2a2a] text-[#F7F5F2] hover:border-[#A30A24]"
                  >
                    <Icon d={I.minus} size={11} sw={2.5} />
                  </button>
                  <span
                    className={`${mono.className} text-sm text-[#F7F5F2] w-4 text-center`}
                  >
                    {item.qty}
                  </span>
                  <button
                    onClick={() => onQty(item.cartId, 1)}
                    className="w-6 h-6 rounded flex items-center justify-center border border-[#2a2a2a] text-[#F7F5F2] hover:border-[#A30A24]"
                  >
                    <Icon d={I.plus} size={11} sw={2.5} />
                  </button>
                </div>
                <span className="text-sm font-bold text-[#A30A24]">
                  {peso(item.unitPrice * item.qty)}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-6 border-t shrink-0" style={{ borderColor: "#1e1e1e" }}>
        <div className="flex items-center justify-between mb-4">
          <span
            className={`${mono.className} text-[10px] uppercase tracking-[2px] text-[#6E6E6E]`}
          >
            Total
          </span>
          <span className="text-2xl font-bold text-[#F7F5F2]">
            {peso(total)}
          </span>
        </div>
        <button
          onClick={() => setView("checkout")}
          disabled={cart.length === 0}
          className="w-full py-3.5 rounded-xl text-sm font-bold text-white disabled:opacity-40"
          style={{ background: "#A30A24" }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
