"use client";

import ComponentLibrary from "@/components/reusable-ui-component-library";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function DesignSystemPage() {
  return (
    <>
      {/* Header — smaller height, matches portfolio nav style */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#f7f7f5]/85 backdrop-blur-xl">
        <div className="container-width flex h-14 items-center justify-between">
          <Link href="/" className="text-base font-extrabold tracking-tight">
            PK<span className="text-neutral-400">.</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 transition hover:text-black"
          >
            <ArrowLeft size={15} /> Back to portfolio
          </Link>
        </div>
      </header>

      <main className="min-h-screen bg-[#f7f7f5]">
        {/* Hero — matches portfolio section style */}
        <section className="grid-bg border-b border-black/10 pt-28 pb-14 md:pt-32 md:pb-16">
          <div className="container-width">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-neutral-500">
              Care Health Insurance · Design System
            </p>
            <h1 className="text-balance text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">
              Reusable UI Component Library
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
              Color tokens, typography, buttons, inputs, badges, cards, alerts, toggles, tabs and modals — built for consistency and scalability across the insurance product.
            </p>
          </div>
        </section>

        {/* Component library */}
        <section className="section-space">
          <div className="container-width">
            <ComponentLibrary />
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-[#f7f7f5]">
        <div className="container-width flex flex-col justify-between gap-4 py-8 text-sm text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Pawan Kumar. All rights reserved.</p>
          <Link href="/" className="hover:text-black transition">← Back to portfolio</Link>
        </div>
      </footer>
    </>
  );
}
