"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Login failed.");
        setLoading(false);
        return;
      }
      router.replace("/dashboard");
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch("/api/auth/refresh", { method: "POST", credentials: "include" })
      .then((res) => {
        if (res.ok) router.replace("/dashboard");
        else setChecking(false);
      })
      .catch(() => setChecking(false));
  }, []);

  if (checking) {
    return (
      <div className="min-h-screen bg-[#ffffff] flex items-center justify-center">
        <div className="w-7 h-7 border-2 border-[#A30A24] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ffffff] flex flex-col">
      {/* ── Sprocket rail ──────────────────────────────────────────────────── */}
      <div className="bg-[#080808] border-b border-[#1a1a1a] px-6 py-2.5 flex items-center justify-between">
        <div className="flex gap-2">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="w-3 h-3 rounded-sm bg-[#1e1e1e]" />
          ))}
        </div>
        <span className="text-[10px] font-mono tracking-[4px] text-[#6E6E6E] uppercase">
          Admin · Secure Access
        </span>
        <div className="flex gap-2">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="w-3 h-3 rounded-sm bg-[#1e1e1e]" />
          ))}
        </div>
      </div>

      {/* ── Main ───────────────────────────────────────────────────────────── */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-[#1e1e1e]">
          {/* ── Left panel ─────────────────────────────────────────────────── */}
          <div className="bg-[#A30A24] p-10 flex flex-col justify-between min-h-[420px]">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-2 mb-10">
                <span className="w-2 h-2 rounded-full bg-white/80" />
                <span className="text-[10px] font-mono tracking-[4px] text-white/60 uppercase">
                  Blink Creative Studio
                </span>
              </div>

              {/* Headline */}
              <p className="text-[10px] font-mono tracking-[3px] text-white/50 uppercase mb-3">
                ◳ Dashboard
              </p>
              <h2 className="text-3xl font-extrabold text-white leading-tight tracking-tight">
                Appointment
                <br />
                Management
                <br />
                System
              </h2>
            </div>

            {/* Footer */}
            <div className="space-y-3">
              <div className="border-t border-white/20 pt-5">
                <p className="text-xs text-white/50 font-mono leading-relaxed">
                  Manage bookings, calendar blocks, and client records — all in
                  one place.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                <span className="text-[10px] font-mono tracking-[2px] text-white/50 uppercase">
                  All systems operational
                </span>
              </div>
            </div>
          </div>

          {/* ── Right form panel ───────────────────────────────────────────── */}
          <div className="bg-[#ffffff] p-10 flex flex-col justify-center">
            <div className="mb-8">
              <p className="text-[10px] font-mono tracking-[3px] text-[#6E6E6E] uppercase mb-2">
                Welcome back
              </p>
              <h1 className="text-2xl font-extrabold text-[#0D0D0D] tracking-tight">
                Sign in to your account
              </h1>
            </div>

            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono tracking-[2px] uppercase text-[#6E6E6E]">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@blinkstudio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg px-4 py-2.5 text-sm bg-[#0d0d0d] border border-[#2a2a2a]
                             text-[#F7F5F2] placeholder:text-[#3a3a3a] font-mono
                             focus:outline-none focus:ring-2 focus:ring-[#A30A24] focus:border-transparent
                             transition"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono tracking-[2px] uppercase text-[#6E6E6E]">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full rounded-lg px-4 py-2.5 pr-16 text-sm bg-[#0d0d0d] border border-[#2a2a2a]
                               text-[#F7F5F2] placeholder:text-[#3a3a3a] font-mono
                               focus:outline-none focus:ring-2 focus:ring-[#A30A24] focus:border-transparent
                               transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono
                               tracking-[2px] uppercase text-[#6E6E6E] hover:text-[#A30A24] transition-colors"
                  >
                    {showPassword ? "hide" : "show"}
                  </button>
                </div>
              </div>

              {/* Forgot */}
              <div className="flex justify-end -mt-2">
                <button
                  type="button"
                  className="text-[10px] font-mono tracking-[2px] uppercase text-[#6E6E6E]
                             hover:text-[#A30A24] transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-start gap-2.5 rounded-lg border border-red-900/60 bg-red-950/10 px-4 py-3">
                  <svg
                    className="w-4 h-4 text-red-400 shrink-0 mt-0.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 3.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4.5zm0 7a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75z" />
                  </svg>
                  <span className="text-xs text-red-400 font-mono">
                    {error}
                  </span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-11 rounded-lg bg-[#A30A24] text-white text-sm font-semibold
                           flex items-center justify-center gap-2
                           hover:bg-[#8a0820] active:scale-[0.99] transition-all
                           disabled:opacity-50 disabled:cursor-not-allowed mt-1"
              >
                {loading && (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                )}
                {loading ? "Signing in..." : "Sign in →"}
              </button>
            </form>

            {/* Footer note */}
            <p className="mt-8 text-[10px] font-mono tracking-[1px] text-[#3a3a3a] text-center leading-relaxed">
              Contact your administrator if you&apos;re having trouble signing
              in.
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────────────────────── */}
      <div className="bg-[#0D0D0D] border-t border-[#1a1a1a] px-6 py-3 flex items-center justify-between">
        <span className="text-[10px] font-mono tracking-[3px] text-[#3a3a3a] uppercase">
          ©2026 BCS
        </span>
        <span className="text-[10px] font-mono tracking-[3px] text-[#3a3a3a] uppercase">
          Secure · Private
        </span>
      </div>
    </div>
  );
}

LoginPage.noLayout = true;
