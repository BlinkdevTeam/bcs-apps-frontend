import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import { logout } from "../../store/authSlice";

import SignInView from "./components/SignInView";
import ForgotPasswordView from "./components/ForgotPasswordView";
import SetPasswordView from "./components/SetPasswordView";
import LoggedInView from "./components/LoggedInView";

const MIN_LOADER_MS = 1200;   // how long the loader stays visible at minimum
const FADE_MS = 500;          // fade-out transition duration

export default function LoginPage() {
  const [manualView, setManualView] = useState("signin");
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const token = params.get("token");
  const view = token ? "set-password-reset" : manualView;

  // Loader stays mounted (for the fade transition) but becomes visually
  // transparent + non-interactive once ready.
  const [loaderMounted, setLoaderMounted] = useState(true);
  const [loaderZooming, setLoaderZooming] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setLoaderZooming(true);
    }, MIN_LOADER_MS);

    return () => clearTimeout(hideTimer);
  }, []);

  useEffect(() => {
    if (!loaderZooming) return;

    const unmountTimer = setTimeout(() => {
      setLoaderMounted(false);
    }, FADE_MS);

    return () => clearTimeout(unmountTimer);
  }, [loaderZooming]);

  function handleLoginSuccess() {
    setManualView("logged-in");
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Shader gradient background */}
      <ShaderGradientCanvas
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <ShaderGradient
          animate="on"
          axesHelper="off"
          brightness={1.2}
          cAzimuthAngle={180}
          cDistance={3.61}
          cPolarAngle={90}
          cameraZoom={1}
          color1="#a36d78"
          color2="#ff8c8c"
          color3="#fcfdff"
          destination="onCanvas"
          embedMode="off"
          envPreset="city"
          format="gif"
          fov={45}
          frameRate={10}
          gizmoHelper="hide"
          grain="off"
          lightType="3d"
          pixelDensity={1.7}
          positionX={-1.4}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.1}
          rotationX={0}
          rotationY={10}
          rotationZ={50}
          shader="defaults"
          type="waterPlane"
          uAmplitude={1}
          uDensity={1.3}
          uFrequency={5.5}
          uSpeed={0.2}
          uStrength={2}
          uTime={0}
          wireframe={false}
        />
      </ShaderGradientCanvas>

      {/* Logo top-left */}
      <div className="fixed top-6 left-6 flex items-center gap-2 z-10">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: "#0f172a" }}
        >
          <span className="text-white font-bold text-xs">H</span>
        </div>
        <span
          className="text-sm font-semibold"
          style={{ fontFamily: "system-ui,sans-serif", color: "#0f172a" }}
        >
          HRIS
        </span>
      </div>

      {/* Glassmorphic card — always mounted so it's ready under the loader */}
      <div
        className="relative z-10 w-full max-w-sm rounded-3xl p-8"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px rgba(15, 23, 42, 0.25)",
        }}
      >
        {view === "signin" && (
          <SignInView
            onLogin={handleLoginSuccess}
            onForgotPassword={() => setManualView("forgot")}
          />
        )}

        {view === "forgot" && (
          <ForgotPasswordView onBack={() => setManualView("signin")} />
        )}

        {view === "set-password-invite" && (
          <SetPasswordView mode="invite" onComplete={() => setManualView("signin")} />
        )}

        {view === "set-password-reset" && (
          <SetPasswordView
            token={token}
            onComplete={() => {
              window.history.replaceState({}, "", "/login");
              window.location.href = "/login";
            }}
          />
        )}

        {view === "logged-in" && (
          <LoggedInView
            onLogout={() => {
              dispatch(logout());
              setManualView("signin");
            }}
          />
        )}
      </div>

      <p
        className="fixed bottom-6 text-xs z-10"
        style={{ fontFamily: "system-ui,sans-serif", color: "rgba(15,23,42,0.55)" }}
      >
        © 2026 HRIS System · All rights reserved
      </p>

      {/* Loading overlay — fades out to reveal the already-loaded login beneath */}
      {loaderMounted && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{
            backgroundColor: "#0f172a",
            opacity: loaderZooming ? 0 : 1,
            transform: loaderZooming ? "scale(1.15)" : "scale(1)",
            pointerEvents: loaderZooming ? "none" : "auto",
            transition: `transform ${FADE_MS}ms ease-in, opacity ${FADE_MS}ms ease-in`,
            transformOrigin: "center center",
          }}
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
            style={{ backgroundColor: "#fff" }}
          >
            <span className="text-slate-900 font-bold text-sm">H</span>
          </div>

          <div
            className="w-6 h-6 rounded-full animate-spin"
            style={{
              border: "2.5px solid rgba(255,255,255,0.2)",
              borderTopColor: "#fff",
            }}
          />

          <p
            className="text-xs mt-4"
            style={{
              fontFamily: "system-ui,sans-serif",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Loading HRIS…
          </p>
        </div>
      )}
    </div>
  );
}