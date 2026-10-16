"use client";

type DesignSystemPreviewProps = {
  compact?: boolean;
};

const tokens = {
  colors: [
    { name: "Primary", value: "#005CB9", className: "bg-[#005CB9]" },
    { name: "Accent", value: "#FFB800", className: "bg-[#FFB800]" },
    { name: "Success", value: "#00A651", className: "bg-[#00A651]" },
    { name: "Neutral", value: "#F5F7FA", className: "bg-[#F5F7FA] ring-1 ring-black/10" }
  ]
};

export default function DesignSystemPreview({
  compact = false
}: DesignSystemPreviewProps) {
  return (
    <div
      className={`relative z-10 w-[88%] overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/10 ${
        compact ? "-rotate-1" : ""
      }`}
    >
      <div className="flex items-center gap-1.5 bg-neutral-800 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-2 flex-1 truncate rounded bg-neutral-700 px-2 py-0.5 text-[10px] text-neutral-400">
          careinsurance.com / design-system
        </span>
      </div>

      <div className={`bg-[#F5F7FA] ${compact ? "p-3" : "p-5 md:p-6"}`}>
        <div className="mb-3 flex items-center justify-between gap-2 border-b border-[#005CB9]/10 pb-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#005CB9]">
              Care Health UI
            </p>
            <p
              className={`font-extrabold tracking-tight text-[#1A1A1A] ${
                compact ? "text-sm" : "text-base md:text-lg"
              }`}
            >
              Design System
            </p>
          </div>
          <span className="rounded-full bg-[#005CB9] px-2.5 py-1 text-[10px] font-bold text-white">
            v2.0
          </span>
        </div>

        <div className={`grid gap-3 ${compact ? "grid-cols-2" : "md:grid-cols-2"}`}>
          <div className="rounded-lg bg-white p-3 ring-1 ring-black/5">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-neutral-500">
              Color tokens
            </p>
            <div className="grid grid-cols-4 gap-1.5">
              {tokens.colors.map((color) => (
                <div key={color.name} className="text-center">
                  <div
                    className={`mx-auto h-6 w-6 rounded-md ${color.className}`}
                  />
                  <p className="mt-1 text-[8px] font-semibold text-neutral-500">
                    {color.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-white p-3 ring-1 ring-black/5">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-neutral-500">
              Typography
            </p>
            <p className="text-sm font-extrabold text-[#1A1A1A]">Heading</p>
            <p className="text-[11px] font-semibold text-[#005CB9]">Subheading</p>
            <p className="mt-1 text-[10px] leading-4 text-neutral-500">
              Body text for insurance journeys, forms and product content.
            </p>
          </div>

          <div className="rounded-lg bg-white p-3 ring-1 ring-black/5">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-neutral-500">
              Buttons
            </p>
            <div className="space-y-1.5">
              <button
                type="button"
                className="w-full rounded-md bg-[#005CB9] px-2 py-1.5 text-[10px] font-bold text-white"
              >
                Get Quote
              </button>
              <button
                type="button"
                className="w-full rounded-md border border-[#005CB9] px-2 py-1.5 text-[10px] font-bold text-[#005CB9]"
              >
                Compare Plans
              </button>
            </div>
          </div>

          <div className="rounded-lg bg-white p-3 ring-1 ring-black/5">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-neutral-500">
              Form & card
            </p>
            <input
              readOnly
              value="+91 Mobile number"
              className="mb-2 w-full rounded-md border border-neutral-200 px-2 py-1.5 text-[10px] text-neutral-400"
            />
            <div className="rounded-md bg-[#005CB9]/5 p-2 ring-1 ring-[#005CB9]/10">
              <p className="text-[10px] font-bold text-[#1A1A1A]">Health plan card</p>
              <p className="text-[9px] text-neutral-500">Reusable quote module</p>
            </div>
          </div>
        </div>

        {!compact && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {["Navigation", "Forms", "Cards", "Modals", "Alerts", "Grid"].map((item) => (
              <span
                key={item}
                className="rounded-full bg-white px-2 py-0.5 text-[9px] font-semibold text-neutral-600 ring-1 ring-black/5"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
