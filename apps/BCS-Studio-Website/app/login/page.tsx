"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [checking, setChecking] = useState(true); // NEW

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        credentials: "include", // 🔥 REQUIRED
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Login failed.");
        setLoading(false);
        return;
      }
      // optional: remove entirely
      // sessionStorage.setItem("access_token", data.accessToken); 
      router.replace("/dashboard");
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  // NEW: redirect away if already logged in
  useEffect(() => {
    fetch("/api/auth/refresh", { method: "POST", credentials: "include" })
      .then((res) => {
        if (res.ok)
          router.replace("/dashboard"); // already logged in
        else setChecking(false); // not logged in, show form
      })
      .catch(() => setChecking(false));
  }, []);

  if (checking) return null; // or a spinner

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex justify-center items-center">
        <div className="container">
          <div className="card">
            <div className="panel">
              <div className="brand">
                <div className="brand-dot" />
                <div className="brand-name">Appointment Dashboard</div>
              </div>
              <div className="panel-footer">
                <div className="tagline">
                  Manage your <strong>people</strong> and{" "}
                  <strong>processes</strong> in one place.
                </div>
                <div className="status-chip">
                  <div className="status-dot" />
                  All systems operational
                </div>
              </div>
            </div>

            <div className="form-area text-[#191919]">
              <div className="form-head">
                <div className="greeting">Welcome back</div>
                <h1 className="form-title">Sign in to your account</h1>
              </div>

              <form onSubmit={handleLogin}>
                <div className="field">
                  <label className="label">Email address</label>
                  <input
                    className="input"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="input-wrap">
                    <input
                      className="input"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ paddingRight: 50 }}
                      required
                    />
                    <button
                      type="button"
                      className="pw-toggle"
                      onClick={() => setShowPassword((v) => !v)}
                    >
                      {showPassword ? "hide" : "show"}
                    </button>
                  </div>
                </div>

                <div className="meta">
                  <button type="button" className="forgot">
                    Forgot password?
                  </button>
                </div>

                {error && <div className="error">{error}</div>}

                <button className="btn" disabled={loading}>
                  {loading && <span className="spinner" />}
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </form>

              <div className="footer-note">
                Contact your HR administrator if you&apos;re having trouble
                signing in.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

LoginPage.noLayout = true;
