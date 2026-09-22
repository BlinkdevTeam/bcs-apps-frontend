// ForgotPasswordView.jsx
import { useState } from "react";
import axios from "axios";
import InputField from "./InputField";
import Btn from "./Btn";

export default function ForgotPasswordView({ onBack }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  async function handleSubmit() {
    setError("");
    if (!email.trim()) return setError("Please enter your email.");
    if (!email.includes("@")) return setError("Enter a valid email address.");

    try {
      setLoading(true);
      await axios.post(`${API_URL}api/auth/forgot-password`, { email });
      setSent(true);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (sent)
    return (
      <div className="space-y-6">
        <div className="text-center py-2">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{
              backgroundColor: "rgba(255,255,255,0.5)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(15,23,42,0.12)",
            }}
          >
            <span className="text-xl">📧</span>
          </div>
          <h2 className="text-lg font-semibold mb-2" style={{ fontFamily: "system-ui,sans-serif", color: "#0f172a" }}>
            Check your email
          </h2>
          <p className="text-sm leading-relaxed" style={{ fontFamily: "system-ui,sans-serif", color: "rgba(15,23,42,0.6)" }}>
            If <span className="font-medium" style={{ color: "#0f172a" }}>{email}</span> is registered, you'll
            receive a reset link shortly. It expires in{" "}
            <strong style={{ color: "#0f172a" }}>1 hour</strong>.
          </p>
        </div>
        <Btn onClick={onBack} variant="secondary">← Back to sign in</Btn>
      </div>
    );

  return (
    <div className="space-y-6">
      <div>
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs transition-colors mb-4 cursor-pointer"
          style={{ fontFamily: "system-ui,sans-serif", color: "rgba(15,23,42,0.55)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#0f172a")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(15,23,42,0.55)")}
        >
          ← Back
        </button>
        <h1 className="text-xl font-semibold mb-1" style={{ fontFamily: "system-ui,sans-serif", color: "#0f172a" }}>
          Reset password
        </h1>
        <p className="text-sm" style={{ fontFamily: "system-ui,sans-serif", color: "rgba(15,23,42,0.6)" }}>
          Enter your work email and we'll send you a reset link.
        </p>
      </div>
      <InputField
        label="Work email"
        type="email"
        value={email}
        onChange={setEmail}
        placeholder="you@company.com"
        error={error}
        autoFocus
      />
      <Btn onClick={handleSubmit} disabled={loading}>
        {loading ? "Sending…" : "Send reset link"}
      </Btn>
    </div>
  );
}