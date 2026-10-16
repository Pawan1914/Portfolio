"use client";

import { useEffect, useRef, useState } from "react";
import {
  Accessibility,
  Contrast,
  Eye,
  Focus,
  Moon,
  RotateCcw,
  Sun,
  Type,
  UnderlineIcon,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

type Settings = {
  fontSize: number;      // 0=default, 1=large(112%), 2=xlarge(125%)
  darkMode: boolean;
  highContrast: boolean;
  dyslexiaFont: boolean;
  underlineLinks: boolean;
  focusOutline: boolean;
  reducedMotion: boolean;
  grayscale: boolean;
};

const DEFAULT: Settings = {
  fontSize: 0,
  darkMode: false,
  highContrast: false,
  dyslexiaFont: false,
  underlineLinks: false,
  focusOutline: false,
  reducedMotion: false,
  grayscale: false,
};

const KEY = "a11y-v2";

function load(): Settings {
  if (typeof window === "undefined") return DEFAULT;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...DEFAULT, ...JSON.parse(raw) } : DEFAULT;
  } catch { return DEFAULT; }
}

function apply(s: Settings) {
  const html = document.documentElement;

  // Font size — change html font-size so rem scales everywhere
  const sizes = [null, "112%", "125%"];
  html.style.fontSize = sizes[s.fontSize] ?? "";

  // Classes for everything else
  const map: [keyof Settings, string][] = [
    ["darkMode",       "a11y-dark"],
    ["highContrast",   "a11y-contrast"],
    ["dyslexiaFont",   "a11y-dyslexia"],
    ["underlineLinks", "a11y-links"],
    ["focusOutline",   "a11y-focus"],
    ["reducedMotion",  "a11y-motion"],
    ["grayscale",      "a11y-gray"],
  ];
  map.forEach(([key, cls]) => html.classList.toggle(cls, !!s[key]));
}

const CSS = `
  /* ── dark mode ── */
  .a11y-dark body { background:#111 !important; color:#e8e8e8 !important; }
  .a11y-dark header { background:rgba(17,17,17,0.92) !important; border-color:rgba(255,255,255,0.08) !important; }
  .a11y-dark section, .a11y-dark article { background:transparent !important; }
  .a11y-dark .bg-white { background:#1c1c1c !important; }
  .a11y-dark .bg-paper, .a11y-dark .bg-\\[\\#f7f7f5\\] { background:#111 !important; }
  .a11y-dark .text-neutral-600, .a11y-dark .text-neutral-500 { color:#aaa !important; }
  .a11y-dark .border-black\\/10 { border-color:rgba(255,255,255,0.1) !important; }

  /* ── high contrast ── */
  .a11y-contrast body { background:#000 !important; color:#fff !important; }
  .a11y-contrast :is(h1,h2,h3,h4,p,span,li) { color:#fff !important; }
  .a11y-contrast a { color:#ffff00 !important; text-decoration:underline !important; }
  .a11y-contrast .bg-white, .a11y-contrast .bg-paper, .a11y-contrast section { background:#000 !important; }
  .a11y-contrast .border-black\\/10 { border-color:#fff !important; }

  /* ── dyslexia ── */
  .a11y-dyslexia :is(p,h1,h2,h3,h4,li,span,a,button):not([data-a11y-widget]) {
    font-family: Arial, sans-serif !important;
    letter-spacing: 0.06em !important;
    word-spacing: 0.12em !important;
    line-height: 1.9 !important;
  }

  /* ── underline links ── */
  .a11y-links a:not([data-a11y-widget]) { text-decoration:underline !important; text-underline-offset:3px !important; }

  /* ── focus outline ── */
  .a11y-focus *:focus-visible { outline:3px solid #b8ff2c !important; outline-offset:3px !important; }

  /* ── reduced motion ── */
  .a11y-motion *,
  .a11y-motion *::before,
  .a11y-motion *::after {
    animation-duration:0.01ms !important;
    animation-iteration-count:1 !important;
    transition-duration:0.01ms !important;
    scroll-behavior:auto !important;
  }

  /* ── grayscale — applied to body content only, not widget ── */
  .a11y-gray body > *:not([data-a11y-widget]) { filter:grayscale(100%) !important; }

  /* ── widget always immune ── */
  [data-a11y-widget] {
    background:#ffffff !important;
    color:#111111 !important;
    filter:none !important;
    font-family:Inter, ui-sans-serif, sans-serif !important;
    letter-spacing:normal !important;
    word-spacing:normal !important;
    line-height:normal !important;
  }
  [data-a11y-widget] * { filter:none !important; }
  [data-a11y-widget] .w-fab {
    background:#111111 !important;
    color:#ffffff !important;
  }
  [data-a11y-widget] .w-fab.is-open {
    background:#b8ff2c !important;
    color:#111111 !important;
  }
`;

function Row({
  label, icon, active, onClick,
}: { label: string; icon: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      data-a11y-widget
      onClick={onClick}
      style={{
        display: "flex", width: "100%", alignItems: "center", gap: "12px",
        padding: "10px 14px", borderRadius: "12px", cursor: "pointer", transition: "all 0.15s",
        border: active ? "1.5px solid #b8ff2c" : "1.5px solid #e5e5e5",
        background: active ? "#f5ffe0" : "#fafafa",
        color: "#111",
        fontSize: "13px", fontWeight: 600,
      }}
    >
      <span style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        width: 28, height: 28, borderRadius: 8, flexShrink: 0,
        background: active ? "#b8ff2c" : "#f0f0f0",
        color: "#111",
      }}>
        {icon}
      </span>
      <span style={{ flex: 1, textAlign: "left" }}>{label}</span>
      {/* toggle pill */}
      <span style={{
        width: 36, height: 20, borderRadius: 999, position: "relative",
        background: active ? "#b8ff2c" : "#d4d4d4", flexShrink: 0,
        transition: "background 0.2s",
      }}>
        <span style={{
          position: "absolute", top: 2, left: active ? 18 : 2,
          width: 16, height: 16, borderRadius: "50%", background: "#fff",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)", transition: "left 0.2s",
        }} />
      </span>
    </button>
  );
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [s, setS] = useState<Settings>(DEFAULT);
  const ref = useRef<HTMLDivElement>(null);

  // Mount: load + inject CSS + apply
  useEffect(() => {
    const loaded = load();
    setS(loaded);
    apply(loaded);

    if (!document.getElementById("a11y-css")) {
      const el = document.createElement("style");
      el.id = "a11y-css";
      el.textContent = CSS;
      document.head.appendChild(el);
    }
  }, []);

  // Outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function update(patch: Partial<Settings>) {
    const next = { ...s, ...patch };
    setS(next);
    apply(next);
    localStorage.setItem(KEY, JSON.stringify(next));
  }

  function reset() {
    setS(DEFAULT);
    apply(DEFAULT);
    localStorage.setItem(KEY, JSON.stringify(DEFAULT));
  }

  const hasActive = s.fontSize > 0 || s.darkMode || s.highContrast ||
    s.dyslexiaFont || s.underlineLinks || s.focusOutline || s.reducedMotion || s.grayscale;

  const panelStyle: React.CSSProperties = {
    position: "absolute", bottom: "calc(100% + 12px)", right: 0,
    width: 300, maxHeight: "80vh",
    background: "#fff", borderRadius: 18,
    border: "1px solid #e5e5e5",
    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
    overflow: "hidden", display: "flex", flexDirection: "column",
    fontFamily: "Inter, ui-sans-serif, sans-serif",
    color: "#111",
  };

  return (
    <div ref={ref} data-a11y-widget style={{ position: "fixed", bottom: 24, right: 24, zIndex: 99999 }}>

      {open && (
        <div data-a11y-widget style={panelStyle}>
          {/* header */}
          <div data-a11y-widget style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "14px 18px", borderBottom: "1px solid #e5e5e5",
            background: "#111", flexShrink: 0,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Accessibility size={17} color="#b8ff2c" />
              <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>Accessibility</span>
              {hasActive && (
                <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 999, background: "#b8ff2c", color: "#111" }}>
                  ON
                </span>
              )}
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <button data-a11y-widget onClick={reset} style={{
                display: "flex", alignItems: "center", gap: 4, padding: "4px 10px",
                borderRadius: 999, border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent", color: "rgba(255,255,255,0.6)",
                fontSize: 11, fontWeight: 600, cursor: "pointer",
              }}>
                <RotateCcw size={10} /> Reset
              </button>
              <button data-a11y-widget onClick={() => setOpen(false)} style={{
                padding: 4, borderRadius: 999, border: "none",
                background: "transparent", color: "rgba(255,255,255,0.5)", cursor: "pointer",
              }}>
                <X size={15} />
              </button>
            </div>
          </div>

          {/* body */}
          <div data-a11y-widget style={{ overflowY: "auto", padding: 14, display: "flex", flexDirection: "column", gap: 16 }}>

            {/* Font size */}
            <div data-a11y-widget>
              <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: 8 }}>
                Text size
              </p>
              <div style={{ display: "flex", gap: 6, marginBottom: 6 }}>
                {[{ label: "Default", val: 0 }, { label: "Large", val: 1 }, { label: "X-Large", val: 2 }].map(({ label, val }) => (
                  <button key={val} data-a11y-widget onClick={() => update({ fontSize: val })} style={{
                    flex: 1, padding: "8px 4px", borderRadius: 10, fontSize: 12, fontWeight: 600, cursor: "pointer",
                    border: s.fontSize === val ? "1.5px solid #b8ff2c" : "1.5px solid #e5e5e5",
                    background: s.fontSize === val ? "#f5ffe0" : "#fafafa", color: "#111",
                  }}>
                    {label}
                  </button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <button data-a11y-widget onClick={() => update({ fontSize: Math.max(0, s.fontSize - 1) })} style={{
                  flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 4,
                  padding: "7px", borderRadius: 10, fontSize: 12, fontWeight: 600, cursor: "pointer",
                  border: "1.5px solid #e5e5e5", background: "#fafafa", color: "#555",
                }}>
                  <ZoomOut size={13} /> Decrease
                </button>
                <button data-a11y-widget onClick={() => update({ fontSize: Math.min(2, s.fontSize + 1) })} style={{
                  flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 4,
                  padding: "7px", borderRadius: 10, fontSize: 12, fontWeight: 600, cursor: "pointer",
                  border: "1.5px solid #e5e5e5", background: "#fafafa", color: "#555",
                }}>
                  <ZoomIn size={13} /> Increase
                </button>
              </div>
            </div>

            {/* Display */}
            <div data-a11y-widget>
              <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: 8 }}>
                Display
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <Row label="Dark mode" icon={s.darkMode ? <Moon size={13} /> : <Sun size={13} />}
                  active={s.darkMode} onClick={() => update({ darkMode: !s.darkMode })} />
                <Row label="High contrast" icon={<Contrast size={13} />}
                  active={s.highContrast} onClick={() => update({ highContrast: !s.highContrast })} />
                <Row label="Grayscale" icon={<Eye size={13} />}
                  active={s.grayscale} onClick={() => update({ grayscale: !s.grayscale })} />
              </div>
            </div>

            {/* Reading */}
            <div data-a11y-widget>
              <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: 8 }}>
                Reading
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <Row label="Dyslexia-friendly font" icon={<Type size={13} />}
                  active={s.dyslexiaFont} onClick={() => update({ dyslexiaFont: !s.dyslexiaFont })} />
                <Row label="Underline all links" icon={<UnderlineIcon size={13} />}
                  active={s.underlineLinks} onClick={() => update({ underlineLinks: !s.underlineLinks })} />
              </div>
            </div>

            {/* Navigation */}
            <div data-a11y-widget>
              <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: 8 }}>
                Navigation
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <Row label="Enhanced focus ring" icon={<Focus size={13} />}
                  active={s.focusOutline} onClick={() => update({ focusOutline: !s.focusOutline })} />
                <Row label="Reduce animations" icon={<Eye size={13} />}
                  active={s.reducedMotion} onClick={() => update({ reducedMotion: !s.reducedMotion })} />
              </div>
            </div>

            {hasActive && (
              <div data-a11y-widget style={{
                padding: "10px 14px", borderRadius: 10,
                border: "1.5px solid #b8ff2c", background: "#f5ffe0",
                fontSize: 12, fontWeight: 600, color: "#333",
              }}>
                ✓ Accessibility settings are active.{" "}
                <button data-a11y-widget onClick={reset} style={{
                  background: "none", border: "none", fontWeight: 700,
                  color: "#111", textDecoration: "underline", cursor: "pointer", fontSize: 12,
                }}>Reset all</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        data-a11y-widget
        onClick={() => setOpen(!open)}
        aria-label="Open accessibility options"
        className={`w-fab ${open ? "is-open" : ""}`}
        style={{
          width: 52, height: 52, borderRadius: "50%", border: "none",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          background: open ? "#b8ff2c" : "#111",
          color: open ? "#111" : "#fff",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          transition: "background 0.2s, transform 0.2s",
          transform: open ? "rotate(15deg)" : "none",
        }}
      >
        <Accessibility size={21} />
      </button>
    </div>
  );
}
