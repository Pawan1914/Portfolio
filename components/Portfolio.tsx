"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Check,
  Code2,
  Figma,
  Github,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  X,
  Zap
} from "lucide-react";
import { useRef, useState } from "react";
import WorkSection from "@/components/WorkSection";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import { withBasePath } from "@/lib/basePath";

const skills = [
  { label: "Frontend", detail: "HTML5, CSS3, JavaScript, TypeScript", icon: "⚡" },
  { label: "Frameworks", detail: "React.js, Next.js", icon: "⚛️" },
  { label: "Styling", detail: "Tailwind CSS, Sass, Responsive Design", icon: "🎨" },
  { label: "UI / UX", detail: "Figma, Design Systems, Prototyping", icon: "✦" },
  { label: "Performance", detail: "Core Web Vitals, Lighthouse, Optimization", icon: "🚀" },
  { label: "Platforms", detail: "AEM, Cvent, Jira, Agile", icon: "🔧" },
  { label: "AI Workflow", detail: "ChatGPT, Cursor, Claude, Amazon Q", icon: "🤖" },
  { label: "Quality", detail: "Accessibility, Semantic HTML, Cross-browser UI", icon: "✓" },
];

const experience = [
  {
    role: "Lead UI Developer",
    company: "Care Health Insurance",
    period: "Current",
    tag: "Present",
    text: "Leading frontend/UI implementation, taking projects from initial requirements through delivery, coordinating with stakeholders and maintaining scalable, responsive experiences."
  },
  {
    role: "Frontend / UI Developer",
    company: "Cvent Event Platform",
    period: "7+ years",
    tag: "7 yrs",
    text: "Built and maintained responsive event experiences, reusable templates and customer-facing interfaces across different business requirements."
  },
  {
    role: "Frontend Developer",
    company: "Earlier Experience",
    period: "11+ years overall",
    tag: "11 yrs",
    text: "Delivered pixel-accurate interfaces from Figma and visual references with strong focus on responsive behavior, maintainability and browser compatibility."
  }
];

const certifications = [
  {
    title: "Claude Code: Software Engineering with Generative AI Agents",
    issuer: "Anthropic",
    year: "2025",
    skills: ["Claude Code", "AI Agents", "Agentic Workflows", "AI-assisted Engineering"]
  },
  {
    title: "Adobe Experience Manager | AEM Developer Masterclass",
    issuer: "Instructor: Nimith Shetty",
    year: "Certificate of Completion",
    skills: ["AEM", "Components", "Templates", "Sling", "OSGi", "Enterprise CMS"]
  }
];

const marqueeItems = [
  "React.js", "Next.js", "TypeScript", "Tailwind CSS", "SASS",
  "Figma", "AEM", "Core Web Vitals", "Design Systems", "Accessibility",
  "AI-assisted Dev", "Responsive UI", "Component Architecture"
];

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-14 max-w-3xl">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-neutral-500">{eyebrow}</p>
      <h2 className="text-balance text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">{title}</h2>
      {description && <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">{description}</p>}
    </div>
  );
}

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <main>
      {/* ── NAV ── */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-paper/85 backdrop-blur-xl">
        <div className="container-width flex h-20 items-center justify-between">
          <a href="#" className="text-lg font-extrabold tracking-tight">
            PK<span className="text-accent">.</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            {["Work", "About", "Experience", "Certifications", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition-opacity hover:opacity-50">{item}</a>
            ))}
            <a href="#contact" className="rounded-full bg-ink px-5 py-3 text-white transition-all hover:-translate-y-0.5 hover:shadow-lg">
              Let&apos;s talk
            </a>
          </nav>
          <button aria-label={open ? "Close menu" : "Open menu"} className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-black/10 bg-paper px-5 py-5 md:hidden">
            {["Work", "About", "Experience", "Certifications", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}
                className="block border-b border-black/10 py-4 text-lg font-semibold">{item}</a>
            ))}
          </nav>
        )}
      </header>

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative overflow-hidden bg-paper pt-36 md:pt-48">
        {/* grid bg */}
        <div className="grid-bg absolute inset-0 opacity-60" />
        {/* lime glow blob */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-accent/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container-width relative z-10 pb-28 md:pb-40">
          <div className="max-w-5xl">
            {/* availability badge */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-soft">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-500" />
              </span>
              Available for new opportunities
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
              className="text-[clamp(3.2rem,8vw,8rem)] font-extrabold leading-[0.88] tracking-[-0.065em]">
              I build interfaces
              <br />
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-neutral-400">people enjoy</span>
                {/* lime underline swipe */}
                <motion.span
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0 }}
                  className="absolute bottom-2 left-0 right-0 -z-10 h-4 bg-accent/50"
                />
              </span>
              <span className="text-neutral-400"> using.</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="mt-10 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl text-lg leading-8 text-neutral-600">
                11+ years crafting pixel-accurate, responsive and high-performance web experiences.
                Strong in UI engineering, design systems, React and modern AI-assisted workflows.
              </p>
              <a href="#work" className="group inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-xl">
                Explore my work
                <ArrowUpRight size={18} className="transition-transform group-hover:rotate-45" />
              </a>
            </motion.div>
          </div>

          {/* stats bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-4">
            {[
              ["11+", "Years experience"],
              ["7+", "Years at Cvent"],
              ["6+", "Selected projects"],
              ["∞", "UI details obsessed"]
            ].map(([value, label]) => (
              <div key={label} className="group bg-paper p-6 transition hover:bg-accent/10 md:p-8">
                <p className="text-3xl font-extrabold tracking-tight md:text-4xl">{value}</p>
                <p className="mt-2 text-sm text-neutral-500">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* marquee ticker */}
        <div className="relative overflow-hidden border-t border-black/10 bg-ink py-4">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-10">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center gap-3 text-sm font-semibold whitespace-nowrap text-white/60">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WORK ── */}
      <WorkSection />

      {/* ── ABOUT ── */}
      <section id="about" className="section-space border-y border-black/10 bg-white">
        <div className="container-width grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-neutral-500">About me</p>
            <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] md:text-5xl">
              UI craft backed by frontend engineering.
            </h2>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-bold text-ink">
              <Sparkles size={14} /> Lead UI Developer
            </div>
          </div>

          <div className="text-lg leading-8 text-neutral-600">
            <p>I&apos;m Pawan Kumar, a Lead UI / Frontend Developer focused on turning designs and product requirements into robust, production-ready interfaces.</p>
            <p className="mt-6">My core strength is the space between design and engineering: translating Figma and visual references into responsive, accessible and maintainable frontend experiences.</p>
            <p className="mt-6">I also work closely with stakeholders, take ownership of projects from scratch and use modern AI-assisted development tools to improve delivery speed without compromising quality.</p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {["Pixel-accurate implementation", "Responsive architecture", "Component-based UI", "Core Web Vitals", "Accessibility", "Stakeholder collaboration"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl border border-black/10 px-4 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:bg-accent/10">
                  <Check size={15} className="text-lime-500 shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section-space">
        <div className="container-width">
          <SectionTitle eyebrow="Capabilities" title="A practical frontend skill set."
            description="From design handoff to production deployment, I focus on building interfaces that are visually accurate and technically reliable." />
          <div className="grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(({ label, detail, icon }) => (
              <motion.div key={label} whileHover={{ backgroundColor: "#f7f7f5" }}
                className="group border-b border-r border-black/10 p-7 transition-colors cursor-default">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-lg transition group-hover:border-accent group-hover:bg-accent">
                  {icon}
                </div>
                <h3 className="font-bold">{label}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-500">{detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE PROPS ── */}
      <section className="section-space bg-ink text-white">
        <div className="container-width">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/40">What I bring</p>
              <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">
                Better UI.<br />
                <span className="text-accent">Better</span> performance.<br />
                Better delivery.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { icon: <Figma size={20} />, title: "Design → Code", text: "Accurate implementation of Figma designs, visual references and component specifications." },
                { icon: <Zap size={20} />, title: "Performance", text: "Performance-minded implementation with Core Web Vitals, semantic markup and asset optimization." },
                { icon: <Code2 size={20} />, title: "Scalable UI", text: "Reusable components, clean CSS architecture and maintainable frontend patterns." },
                { icon: <Check size={20} />, title: "Delivery", text: "Ownership from requirements and stakeholder discussions through implementation and release." }
              ].map((item) => (
                <motion.div key={item.title} whileHover={{ borderColor: "rgba(184,255,44,0.4)", backgroundColor: "rgba(184,255,44,0.04)" }}
                  className="rounded-2xl border border-white/10 p-7 transition-colors">
                  <div className="mb-6 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/50">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="section-space">
        <div className="container-width">
          <SectionTitle eyebrow="Experience" title="11+ years building for the web." />
          <div className="space-y-0 border-t border-black/10">
            {experience.map((item, index) => (
              <motion.div key={item.role + item.company} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.08 }}
                className="group grid gap-5 border-b border-black/10 py-9 transition-colors hover:bg-white md:grid-cols-[180px_1fr_160px]">
                <div className="flex items-start gap-3">
                  <span className="mt-1 rounded-full bg-accent/20 px-2.5 py-1 text-xs font-bold text-ink">{item.tag}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight">{item.role}</h3>
                  <p className="mt-1 font-semibold text-neutral-500">{item.company}</p>
                  <p className="mt-4 max-w-2xl leading-7 text-neutral-600">{item.text}</p>
                </div>
                <p className="text-sm font-semibold text-neutral-400 md:text-right">{item.period}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" className="section-space border-t border-black/10 bg-white">
        <div className="container-width">
          <SectionTitle eyebrow="Certifications" title="Credentials that keep me current."
            description="Formal training that backs the AI-assisted engineering I apply in day-to-day product delivery." />
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.article key={cert.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }}
                className="group flex flex-col rounded-3xl border border-black/10 bg-paper p-7 shadow-soft transition hover:border-accent md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-black/10 bg-white transition group-hover:border-accent group-hover:bg-accent">
                    <Award size={22} />
                  </div>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-neutral-600">
                    {cert.year}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-extrabold tracking-tight">{cert.title}</h3>
                <p className="mt-2 text-sm font-semibold text-neutral-500">{cert.issuer}</p>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-black/10 pt-5">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI SECTION ── */}
      <section className="section-space border-y border-black/10 bg-white">
        <div className="container-width">
          <div className="overflow-hidden rounded-3xl bg-ink p-8 md:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/40">AI × Frontend</p>
                <h2 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-[-0.04em] text-white md:text-6xl">
                  Modern tools,<br /><span className="text-accent">experienced</span> judgment.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
                  I use AI-assisted development to accelerate exploration, debugging, refactoring, documentation and implementation —
                  while keeping architecture, accessibility and UX decisions human-led.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
                {["ChatGPT", "Cursor", "Claude", "Amazon Q", "AI workflows"].map((tool) => (
                  <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-accent hover:bg-accent hover:text-ink">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section-space">
        <div className="container-width">
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-7 py-14 text-white md:px-14 md:py-24">
            {/* bg glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[80px]" />

            <div className="relative z-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/40">Contact</p>
              <h2 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                Have a product that needs<br />
                <span className="text-accent">better frontend</span> execution?
              </h2>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="mailto:pawankumar.14nov@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-bold text-ink transition-all hover:-translate-y-1 hover:shadow-xl">
                  <Mail size={18} /> Email me
                </a>
                <a href={withBasePath("/Pawan%20Kumar%20Resume.pdf")} download="Pawan-Kumar-Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 font-bold transition-all hover:border-white/50 hover:-translate-y-1">
                  Download resume <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="mt-12 flex gap-3">
                <a href="https://www.linkedin.com/in/pawan-kumar-4b292a117/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/15 p-3 transition hover:bg-accent hover:text-ink hover:border-accent">
                  <Linkedin size={19} />
                </a>
                <a href="#" aria-label="GitHub" className="rounded-full border border-white/15 p-3 transition hover:bg-accent hover:text-ink hover:border-accent">
                  <Github size={19} />
                </a>
              </div>
            </div>
          </div>

          <footer className="flex flex-col justify-between gap-4 py-8 text-sm text-neutral-500 sm:flex-row">
            <p>© {new Date().getFullYear()} Pawan Kumar. All rights reserved.</p>
            <p>Designed & built with Next.js, TypeScript & Tailwind CSS.</p>
          </footer>
        </div>
      </section>

      <AccessibilityWidget />
    </main>
  );
}
