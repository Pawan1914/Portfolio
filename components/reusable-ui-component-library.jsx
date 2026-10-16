import { useState, useRef, useEffect } from "react";
import { Check, ChevronDown, X, Info, AlertTriangle, CheckCircle2, XCircle, ShieldCheck } from "lucide-react";

const TOKENS = `
  --ink: #111111;
  --forest: #111111;
  --forest-dark: #000000;
  --mint-50: #f7f7f5;
  --mint-100: #e5e5e5;
  --coral: #b8ff2c;
  --coral-dark: #9ee020;
  --slate: #737373;
  --success: #2F8F5B;
  --warning: #C98A1F;
  --danger: #C7402E;
  --white: #FFFFFF;
`;

const NAV = [
  { group: "Foundations", items: ["Color", "Type"] },
  { group: "Components", items: ["Button", "Input", "Badge", "Card", "Alert", "Toggle", "Tabs", "Modal"] },
];

function Spec({ items }) {
  return (
    <div className="spec-strip">
      {items.map((it, i) => (
        <div className="spec-item" key={i}>
          <span className="spec-key">{it.k}</span>
          <span className="spec-val">{it.v}</span>
        </div>
      ))}
    </div>
  );
}

function Canvas({ children, spec }) {
  return (
    <div>
      <div className="canvas">{children}</div>
      {spec && <Spec items={spec} />}
    </div>
  );
}

function SectionHeading({ eyebrow, title, desc }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {desc && <p className="section-desc">{desc}</p>}
    </div>
  );
}

export default function ComponentLibrary() {
  const [active, setActive] = useState("Color");
  const [btnLoading, setBtnLoading] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [toggleOn, setToggleOn] = useState(true);
  const [toggle2On, setToggle2On] = useState(false);
  const [tab, setTab] = useState("Coverage");
  const [modalOpen, setModalOpen] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
  }, [active]);

  const fireLoading = () => {
    setBtnLoading(true);
    setTimeout(() => setBtnLoading(false), 1400);
  };

  return (
    <div style={{ "--_tokens": 1 }} className="lib-root">
      <style>{`
        .lib-root {
          ${TOKENS}
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
          background: var(--mint-50);
          color: var(--ink);
          min-height: 600px;
          display: flex;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--mint-100);
        }
        .lib-root * { box-sizing: border-box; }
        .lib-root h1, .lib-root h2, .lib-root h3 { font-family: 'Fraunces', Georgia, serif; margin: 0; }
        .lib-root .mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }

        .sidebar {
          width: 220px;
          flex-shrink: 0;
          background: var(--forest);
          color: var(--mint-50);
          padding: 24px 16px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 28px;
          padding: 0 8px;
        }
        .brand-mark {
          width: 26px; height: 26px; border-radius: 7px;
          background: var(--coral);
          display: flex; align-items: center; justify-content: center;
        }
        .brand-name { font-family: 'Fraunces', serif; font-size: 15px; font-weight: 600; letter-spacing: 0.01em; }
        .brand-sub { font-size: 10px; color: var(--mint-100); opacity: 0.7; letter-spacing: 0.06em; text-transform: uppercase; margin-top: 1px; }

        .nav-group { margin-bottom: 18px; }
        .nav-group-label {
          font-size: 10px; text-transform: uppercase; letter-spacing: 0.09em;
          color: var(--mint-100); opacity: 0.55; padding: 0 8px 6px;
          font-family: 'IBM Plex Mono', monospace;
        }
        .nav-item {
          display: block; width: 100%; text-align: left; background: none; border: none;
          color: var(--mint-50); opacity: 0.75; font-size: 13.5px; padding: 7px 8px;
          border-radius: 6px; cursor: pointer; font-family: 'Inter', sans-serif;
          transition: background 0.15s, opacity 0.15s;
        }
        .nav-item:hover { background: rgba(255,255,255,0.06); opacity: 1; }
        .nav-item.active { background: var(--coral); opacity: 1; font-weight: 600; color: var(--ink); }
        .nav-item:focus-visible { outline: 2px solid var(--coral); outline-offset: 2px; }

        .main { flex: 1; padding: 36px 44px; overflow-y: auto; max-height: 640px; }
        .section-heading { margin-bottom: 22px; }
        .eyebrow {
          font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--ink); font-weight: 600; opacity: 0.5;
        }
        .section-heading h2 { font-size: 26px; margin-top: 6px; color: var(--forest-dark); }
        .section-desc { color: var(--slate); font-size: 14px; margin-top: 8px; max-width: 480px; line-height: 1.5; }

        .canvas {
          background-image: linear-gradient(rgba(17,17,17,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.055) 1px, transparent 1px);
          background-size: 44px 44px;
          background-color: #f7f7f5;
          border: 1px solid var(--mint-100);
          border-radius: 10px 10px 0 0;
          padding: 32px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
          min-height: 96px;
        }
        .spec-strip {
          display: flex; gap: 18px; flex-wrap: wrap;
          background: var(--ink);
          border-radius: 0 0 10px 10px;
          padding: 10px 18px;
          border: 1px solid var(--mint-100); border-top: none;
        }
        .spec-item { display: flex; align-items: baseline; gap: 6px; }
        .spec-key { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; color: var(--coral); }
        .spec-val { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; color: #fff; opacity: 0.85; }

        .swatch-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; width: 100%; }
        .swatch { border-radius: 8px; overflow: hidden; border: 1px solid var(--mint-100); background: white; }
        .swatch-color { height: 56px; }
        .swatch-label { padding: 8px 10px; font-family: 'IBM Plex Mono', monospace; font-size: 11px; }
        .swatch-label .name { display: block; font-weight: 600; color: var(--ink); }
        .swatch-label .hex { color: var(--slate); }

        .type-row { margin-bottom: 16px; }
        .type-row .label { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; color: var(--slate); margin-bottom: 4px; }

        /* Buttons */
        .btn {
          font-family: 'Inter', sans-serif; font-weight: 600; font-size: 14px;
          padding: 10px 18px; border-radius: 8px; border: none; cursor: pointer;
          display: inline-flex; align-items: center; gap: 8px;
          transition: transform 0.08s ease, filter 0.15s ease;
        }
        .btn:active { transform: translateY(1px); }
        .btn:focus-visible { outline: 2px solid var(--coral); outline-offset: 2px; }
        .btn-primary { background: var(--coral); color: var(--ink); }
        .btn-primary:hover { filter: brightness(1.06); }
        .btn-secondary { background: var(--ink); color: white; }
        .btn-secondary:hover { filter: brightness(1.15); }
        .btn-ghost { background: transparent; color: var(--forest); border: 1.5px solid var(--mint-100); }
        .btn-ghost:hover { background: var(--mint-50); }
        .btn-danger { background: var(--danger); color: white; }
        .btn:disabled { opacity: 0.55; cursor: not-allowed; }
        .btn-sm { padding: 6px 12px; font-size: 12.5px; }
        .spinner { width: 13px; height: 13px; border-radius: 50%; border: 2px solid rgba(0,0,0,0.2); border-top-color: #111; animation: spin 0.7s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Inputs */
        .field { display: flex; flex-direction: column; gap: 6px; width: 220px; }
        .field label { font-size: 12.5px; font-weight: 600; color: var(--forest-dark); }
        .field input {
          font-family: 'Inter', sans-serif; font-size: 14px; padding: 9px 12px;
          border-radius: 7px; border: 1.5px solid var(--mint-100); outline: none;
          transition: border-color 0.15s;
        }
        .field input:focus { border-color: var(--forest); }
        .field.error input { border-color: var(--danger); }
        .field .helper { font-size: 11.5px; color: var(--slate); }
        .field.error .helper { color: var(--danger); }

        /* Badge */
        .badge {
          font-family: 'IBM Plex Mono', monospace; font-size: 11px; font-weight: 600;
          padding: 4px 10px; border-radius: 999px; display: inline-flex; align-items: center; gap: 5px;
        }
        .badge-dot { width: 6px; height: 6px; border-radius: 50%; }
        .badge-active { background: #E4F4EA; color: var(--success); }
        .badge-active .badge-dot { background: var(--success); }
        .badge-pending { background: #FBF0DC; color: var(--warning); }
        .badge-pending .badge-dot { background: var(--warning); }
        .badge-expired { background: #FBE7E4; color: var(--danger); }
        .badge-expired .badge-dot { background: var(--danger); }

        /* Card */
        .policy-card {
          width: 260px; background: white; border-radius: 12px; border: 1px solid var(--mint-100);
          padding: 18px; box-shadow: 0 1px 2px rgba(22,33,29,0.04);
        }
        .policy-card .top-row { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; }
        .policy-card h4 { font-family: 'Fraunces', serif; font-size: 16px; color: var(--forest-dark); }
        .policy-card .meta { font-size: 12px; color: var(--slate); margin-top: 10px; display: flex; justify-content: space-between; }

        /* Alert */
        .alert {
          display: flex; gap: 10px; align-items: flex-start; padding: 12px 14px;
          border-radius: 8px; font-size: 13px; width: 340px; border: 1px solid transparent;
        }
        .alert-info { background: #EAF1F8; color: #2A5A8C; border-color: #CFE0F0; }
        .alert-success { background: #E7F5EC; color: var(--success); border-color: #CFEBD9; }
        .alert-warning { background: #FBF0DC; color: #8A6414; border-color: #F1DDB0; }
        .alert-danger { background: #FBE7E4; color: var(--danger); border-color: #F2CDC7; }
        .alert strong { display: block; margin-bottom: 2px; }

        /* Toggle */
        .toggle-row { display: flex; align-items: center; gap: 10px; }
        .toggle { width: 40px; height: 22px; border-radius: 999px; border: none; cursor: pointer; position: relative; transition: background 0.2s; }
        .toggle.on { background: var(--ink); }
        .toggle.off { background: var(--mint-100); }
        .toggle .knob { position: absolute; top: 2px; width: 18px; height: 18px; border-radius: 50%; background: white; transition: left 0.2s; box-shadow: 0 1px 2px rgba(0,0,0,0.2); }
        .toggle.on .knob { left: 20px; }
        .toggle.off .knob { left: 2px; }
        .toggle-label { font-size: 13.5px; color: var(--ink); }

        /* Tabs */
        .tabs-wrap { width: 100%; }
        .tab-list { display: flex; gap: 4px; border-bottom: 1.5px solid var(--mint-100); margin-bottom: 14px; }
        .tab-item { padding: 8px 14px; font-size: 13.5px; font-weight: 600; background: none; border: none; cursor: pointer; color: var(--slate); border-bottom: 2px solid transparent; margin-bottom: -1.5px; }
        .tab-item.active { color: var(--ink); border-color: var(--coral); font-weight: 700; }
        .tab-panel { font-size: 13.5px; color: var(--ink); line-height: 1.6; }

        /* Modal */
        .modal-overlay {
          position: fixed; inset: 0; background: rgba(22,33,29,0.45);
          display: flex; align-items: center; justify-content: center; z-index: 50;
        }
        .modal-box {
          background: white; border-radius: 12px; width: 320px; padding: 22px;
          box-shadow: 0 12px 32px rgba(22,33,29,0.25);
        }
        .modal-box h3 { font-size: 17px; color: var(--forest-dark); margin-bottom: 8px; }
        .modal-box p { font-size: 13.5px; color: var(--slate); line-height: 1.5; margin-bottom: 18px; }
        .modal-actions { display: flex; gap: 8px; justify-content: flex-end; }
      `}</style>

      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark"><ShieldCheck size={15} color="#111" /></div>
          <div>
            <div className="brand-name">Care UI</div>
            <div className="brand-sub">Design System</div>
          </div>
        </div>
        {NAV.map((g) => (
          <div className="nav-group" key={g.group}>
            <div className="nav-group-label">{g.group}</div>
            {g.items.map((item) => (
              <button
                key={item}
                className={`nav-item ${active === item ? "active" : ""}`}
                onClick={() => setActive(item)}
              >
                {item}
              </button>
            ))}
          </div>
        ))}
      </aside>

      <main className="main" ref={mainRef}>
        {active === "Color" && (
          <>
            <SectionHeading eyebrow="Foundations / 01" title="Color" desc="A calm, trustworthy base with a single warm accent reserved for primary actions and emphasis." />
            <div className="swatch-grid">
              {[
                ["Forest", "#1B4B43"],
                ["Coral", "#E8734A"],
                ["Mint 50", "#EAF3EF"],
                ["Mint 100", "#D3E6DE"],
                ["Ink", "#16211D"],
                ["Slate", "#66746E"],
                ["Success", "#2F8F5B"],
                ["Warning", "#C98A1F"],
              ].map(([name, hex]) => (
                <div className="swatch" key={hex}>
                  <div className="swatch-color" style={{ background: hex }} />
                  <div className="swatch-label">
                    <span className="name">{name}</span>
                    <span className="hex">{hex}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {active === "Type" && (
          <>
            <SectionHeading eyebrow="Foundations / 02" title="Type" desc="Fraunces carries warmth in headings; Inter keeps interface text legible at small sizes; Plex Mono marks data and tokens." />
            <div className="type-row"><div className="label">Display / Fraunces 32</div><div style={{ fontFamily: "'Fraunces', serif", fontSize: 32, color: "var(--forest-dark)" }}>Your coverage, made clear</div></div>
            <div className="type-row"><div className="label">Heading / Fraunces 20</div><div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, color: "var(--forest-dark)" }}>Claims processed in 48 hours</div></div>
            <div className="type-row"><div className="label">Body / Inter 14</div><div style={{ fontSize: 14 }}>Every plan includes cashless treatment at 8,500+ network hospitals.</div></div>
            <div className="type-row"><div className="label">Mono / IBM Plex Mono 12</div><div className="mono" style={{ fontSize: 12, color: "var(--slate)" }}>policy_id: CHI-2026-00841</div></div>
          </>
        )}

        {active === "Button" && (
          <>
            <SectionHeading eyebrow="Components" title="Button" desc="Primary uses the coral accent and appears once per view. Secondary and ghost handle everything else." />
            <Canvas spec={[{ k: "radius", v: "8px" }, { k: "pad-y", v: "10px" }, { k: "pad-x", v: "18px" }, { k: "font", v: "14px / 600" }]}>
              <button className="btn btn-primary" onClick={fireLoading} disabled={btnLoading}>
                {btnLoading ? <span className="spinner" /> : <Check size={15} />} {btnLoading ? "Submitting…" : "Submit claim"}
              </button>
              <button className="btn btn-secondary">Save draft</button>
              <button className="btn btn-ghost">Cancel</button>
              <button className="btn btn-danger">Delete policy</button>
              <button className="btn btn-primary btn-sm">Small</button>
              <button className="btn btn-primary" disabled>Disabled</button>
            </Canvas>
          </>
        )}

        {active === "Input" && (
          <>
            <SectionHeading eyebrow="Components" title="Input" desc="Error state swaps the border and helper text color only — layout never shifts, so validation doesn't cause reflow." />
            <Canvas spec={[{ k: "radius", v: "7px" }, { k: "border", v: "1.5px" }, { k: "focus", v: "forest" }]}>
              <div className="field">
                <label htmlFor="policy-no">Policy number</label>
                <input id="policy-no" placeholder="CHI-2026-00841" />
                <span className="helper">Found on your policy schedule</span>
              </div>
              <div className={`field ${inputError ? "error" : ""}`}>
                <label htmlFor="pincode">Pincode</label>
                <input id="pincode" defaultValue="11001" onChange={() => setInputError(true)} />
                <span className="helper">{inputError ? "Enter a valid 6-digit pincode" : "Used to find network hospitals"}</span>
              </div>
            </Canvas>
          </>
        )}

        {active === "Badge" && (
          <>
            <SectionHeading eyebrow="Components" title="Badge" desc="Status color always pairs with a text label — color alone never carries meaning, for colorblind users." />
            <Canvas spec={[{ k: "radius", v: "999px" }, { k: "font", v: "11px mono" }]}>
              <span className="badge badge-active"><span className="badge-dot" />Active</span>
              <span className="badge badge-pending"><span className="badge-dot" />Pending review</span>
              <span className="badge badge-expired"><span className="badge-dot" />Expired</span>
            </Canvas>
          </>
        )}

        {active === "Card" && (
          <>
            <SectionHeading eyebrow="Components" title="Card" desc="The policy card is the most reused surface in the product — summary first, action last." />
            <Canvas spec={[{ k: "radius", v: "12px" }, { k: "pad", v: "18px" }, { k: "shadow", v: "sm" }]}>
              <div className="policy-card">
                <div className="top-row">
                  <h4>Family Floater</h4>
                  <span className="badge badge-active"><span className="badge-dot" />Active</span>
                </div>
                <div className="mono" style={{ fontSize: 11.5, color: "var(--slate)" }}>CHI-2026-00841</div>
                <div className="meta">
                  <span>Sum insured</span>
                  <span style={{ fontWeight: 600, color: "var(--ink)" }}>₹10,00,000</span>
                </div>
                <div className="meta">
                  <span>Renews</span>
                  <span style={{ fontWeight: 600, color: "var(--ink)" }}>14 Mar 2027</span>
                </div>
              </div>
            </Canvas>
          </>
        )}

        {active === "Alert" && (
          <>
            <SectionHeading eyebrow="Components" title="Alert" desc="States are named after outcomes, not colors — 'Claim approved,' never 'Green message.'" />
            <Canvas spec={[{ k: "radius", v: "8px" }, { k: "icon", v: "16px" }]}>
              <div className="alert alert-info"><Info size={16} /><div><strong>Documents pending</strong>Upload your hospital bill to continue.</div></div>
              <div className="alert alert-success"><CheckCircle2 size={16} /><div><strong>Claim approved</strong>₹42,000 will reach your account in 3 days.</div></div>
              <div className="alert alert-warning"><AlertTriangle size={16} /><div><strong>Renewal due soon</strong>Your policy expires in 9 days.</div></div>
              <div className="alert alert-danger"><XCircle size={16} /><div><strong>Payment failed</strong>Retry with a different card.</div></div>
            </Canvas>
          </>
        )}

        {active === "Toggle" && (
          <>
            <SectionHeading eyebrow="Components" title="Toggle" desc="Used for reversible settings only — anything destructive uses a button, not a switch." />
            <Canvas spec={[{ k: "size", v: "40×22" }, { k: "transition", v: "0.2s" }]}>
              <div className="toggle-row">
                <button className={`toggle ${toggleOn ? "on" : "off"}`} onClick={() => setToggleOn(!toggleOn)} aria-pressed={toggleOn}><span className="knob" /></button>
                <span className="toggle-label">Cashless claims</span>
              </div>
              <div className="toggle-row">
                <button className={`toggle ${toggle2On ? "on" : "off"}`} onClick={() => setToggle2On(!toggle2On)} aria-pressed={toggle2On}><span className="knob" /></button>
                <span className="toggle-label">SMS reminders</span>
              </div>
            </Canvas>
          </>
        )}

        {active === "Tabs" && (
          <>
            <SectionHeading eyebrow="Components" title="Tabs" desc="Reserved for switching between views of the same object — never for unrelated destinations." />
            <Canvas spec={[{ k: "underline", v: "coral" }, { k: "gap", v: "4px" }]}>
              <div className="tabs-wrap">
                <div className="tab-list">
                  {["Coverage", "Exclusions", "Documents"].map((t) => (
                    <button key={t} className={`tab-item ${tab === t ? "active" : ""}`} onClick={() => setTab(t)}>{t}</button>
                  ))}
                </div>
                <div className="tab-panel">
                  {tab === "Coverage" && "Covers hospitalization, day-care procedures, and pre/post care up to 60 days."}
                  {tab === "Exclusions" && "Cosmetic treatment and self-inflicted injury are not covered under this plan."}
                  {tab === "Documents" && "ID proof, policy schedule, and original hospital bills are required to file a claim."}
                </div>
              </div>
            </Canvas>
          </>
        )}

        {active === "Modal" && (
          <>
            <SectionHeading eyebrow="Components" title="Modal" desc="Reserved for decisions that need full attention — confirming, not for content that could live on the page." />
            <Canvas spec={[{ k: "radius", v: "12px" }, { k: "overlay", v: "45% ink" }]}>
              <button className="btn btn-danger" onClick={() => setModalOpen(true)}>Cancel policy</button>
            </Canvas>
            {modalOpen && (
              <div className="modal-overlay" onClick={() => setModalOpen(false)}>
                <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                  <h3>Cancel this policy?</h3>
                  <p>You'll lose coverage immediately and won't be eligible for a pro-rated refund after day 15.</p>
                  <div className="modal-actions">
                    <button className="btn btn-ghost btn-sm" onClick={() => setModalOpen(false)}>Keep policy</button>
                    <button className="btn btn-danger btn-sm" onClick={() => setModalOpen(false)}>Cancel it</button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
