"use client";

import { useState, useEffect } from "react";

const DARK_VARS: Record<string, string> = {
  "--color-bg": "#0B0F19",
  "--color-bg-sidebar": "#0F1629",
  "--color-accent": "#3B82F6",
  "--color-accent-hover": "#60A5FA",
  "--color-sage": "#34D399",
  "--color-sage-light": "#34D39920",
  "--color-text": "#F1F5F9",
  "--color-text-muted": "#94A3B8",
  "--color-card": "#162032",
  "--color-card-hover": "#1E293B",
  "--color-border": "#1E293B",
};

const ALL_VARS = Object.keys(DARK_VARS);

function applyDark() {
  const root = document.documentElement;
  for (const [key, val] of Object.entries(DARK_VARS)) {
    root.style.setProperty(key, val);
  }
  document.body.style.backgroundImage =
    "radial-gradient(ellipse at 15% 0%, rgba(59,130,246,0.12) 0%, transparent 50%), " +
    "radial-gradient(ellipse at 85% 100%, rgba(52,211,153,0.08) 0%, transparent 50%)";
  document.body.style.backgroundRepeat = "";
  document.body.style.backgroundSize = "";
}

function applyLight() {
  const root = document.documentElement;
  for (const v of ALL_VARS) {
    root.style.removeProperty(v);
  }
  // Restore textured background from CSS
  document.body.style.backgroundImage = "";
  document.body.style.backgroundRepeat = "";
  document.body.style.backgroundSize = "";
}

export function ThemeSwitcher() {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio-dark");
    if (saved === "false") {
      setDark(false);
      applyLight();
    } else {
      applyDark();
    }
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    if (next) {
      applyDark();
    } else {
      applyLight();
    }
    localStorage.setItem("portfolio-dark", String(next));
  }

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed bottom-5 right-5 z-[100] w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-colors"
      style={{
        background: dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)",
        backdropFilter: "blur(12px)",
        color: dark ? "#F1F5F9" : "#2D2D2A",
      }}
    >
      {dark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
