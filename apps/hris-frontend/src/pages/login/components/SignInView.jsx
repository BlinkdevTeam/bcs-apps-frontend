// SignInView.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../../store/authSlice";
import { SignInBtn } from "../../../components/ui";
import InputField from "./InputField";
import EyeIcon from "./EyeIcon";

export default function SignInView({ onForgotPassword }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error: authError } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [localError, setLocalError] = useState("");
  const [lockoutSeconds, setLockoutSeconds] = useState(0);

  useEffect(() => {
    let timer;
    if (lockoutSeconds > 0) {
      timer = setInterval(() => setLockoutSeconds((s) => Math.max(s - 1, 0)), 1000);
    }
    return () => clearInterval(timer);
  }, [lockoutSeconds]);

  async function handleSubmit() {
    setLocalError("");
    if (!email.trim() || !password) {
      setLocalError("Please enter your email and password.");
      return;
    }
    try {
      const resultAction = await dispatch(loginUserAction({ email, password }));
      if (loginUserAction.fulfilled.match(resultAction)) {
        navigate("/dashboard", { replace: true });
      } else if (
        loginUserAction.rejected.match(resultAction) &&
        resultAction.payload?.lockout_seconds
      ) {
        setLockoutSeconds(resultAction.payload.lockout_seconds);
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  }

  const displayError = localError || authError;
  const isLocked = lockoutSeconds > 0;

  return (
    <div className="space-y-6">
      <div>
        <h1
          className="text-xl font-semibold text-slate-800 mb-1"
          style={{ letterSpacing: "-0.01em", fontFamily: "system-ui,sans-serif" }}
        >
          Welcome back
        </h1>
        <p className="text-sm text-slate-700" style={{ fontFamily: "system-ui,sans-serif" }}>
          Sign in with your company email to continue.
        </p>
      </div>

      <div className="space-y-4">
        <InputField
          label="Email address"
          type="email"
          value={email}
          onChange={(v) => { setEmail(v); setLocalError(""); }}
          placeholder="you@company.com"
          autoFocus
        />
        <InputField
          label="Password"
          type={showPass ? "text" : "password"}
          value={password}
          onChange={(v) => { setPassword(v); setLocalError(""); }}
          placeholder="Enter your password"
          rightSlot={<EyeIcon show={showPass} onToggle={() => setShowPass((p) => !p)} />}
        />

        {displayError && (
          <p className="text-xs" style={{ color: "#dc2626", fontFamily: "system-ui,sans-serif" }}>
            {displayError}
          </p>
        )}
        {isLocked && (
          <p className="text-xs" style={{ color: "#b45309", fontFamily: "system-ui,sans-serif" }}>
            Too many failed attempts. Try again in {lockoutSeconds}s.
          </p>
        )}
      </div>

      <div className="flex justify-end -mt-2">
        <button
          type="button"
          onClick={onForgotPassword}
          className="text-xs font-medium text-slate-700 transition-colors cursor-pointer"
          style={{ fontFamily: "system-ui,sans-serif" }}
        >
          Forgot password?
        </button>
      </div>

      <SignInBtn onClick={handleSubmit} disabled={loading || isLocked}>
        {loading ? "Signing in…" : isLocked ? `Locked (${lockoutSeconds}s)` : "Sign in"}
      </SignInBtn>
    </div>
  );
}