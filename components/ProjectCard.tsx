"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project, ProjectCategory } from "@/types/project";
import { withBasePath } from "@/lib/basePath";

const categoryGradients: Record<
  ProjectCategory,
  { from: string; to: string; glow: string }
> = {
  enterprise: {
    from: "from-sky-100",
    to: "to-slate-200",
    glow: "bg-sky-300/30"
  },
  dashboard: {
    from: "from-indigo-100",
    to: "to-violet-200",
    glow: "bg-indigo-300/30"
  },
  "event-platform": {
    from: "from-amber-100",
    to: "to-orange-200",
    glow: "bg-amber-300/30"
  },
  creative: {
    from: "from-rose-100",
    to: "to-pink-200",
    glow: "bg-rose-300/30"
  },
  consumer: {
    from: "from-emerald-100",
    to: "to-teal-200",
    glow: "bg-emerald-300/30"
  },
  "ai-automation": {
    from: "from-violet-100",
    to: "to-fuchsia-200",
    glow: "bg-violet-300/30"
  }
};

function ProjectPreview({ project }: { project: Project }) {
  const gradient = categoryGradients[project.category];

  if (project.image) {
    return (
      <>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className={`absolute -bottom-8 -right-8 h-48 w-48 rounded-full ${gradient.glow} blur-3xl`}
        />
        <div className="absolute -left-6 -top-6 h-36 w-36 rounded-full bg-lime-300/20 blur-2xl" />
        <div className="relative z-10 w-[78%] -rotate-1 rounded-xl shadow-2xl ring-1 ring-black/10 overflow-hidden">
          <div className="flex items-center gap-1.5 bg-neutral-800 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <span className="ml-2 flex-1 truncate rounded bg-neutral-700 px-2 py-0.5 text-[10px] text-neutral-400">
              {project.domain ?? "project preview"}
            </span>
          </div>
          <img
            src={withBasePath(project.image)}
            alt={`${project.title} preview`}
            className="w-full object-cover object-top"
          />
        </div>
      </>
    );
  }

  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${gradient.from} ${gradient.to}`}
    >
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div
        className={`absolute -bottom-10 -right-10 h-56 w-56 rounded-full ${gradient.glow} blur-3xl`}
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
        <span className="text-7xl font-extrabold tracking-[-0.06em] text-black/10">
          {project.number}
        </span>
        <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-neutral-600">
          {project.type}
        </p>
        <p className="mt-2 max-w-xs text-sm font-semibold text-neutral-500">
          {project.domain}
        </p>
      </div>
    </div>
  );
}

function ProjectContent({ project, featured = false }: { project: Project; featured?: boolean }) {
  const linkHref = project.href ?? "#contact";
  const isExternal = linkHref.startsWith("http");

  return (
    <div className={featured ? "flex flex-col justify-center p-7 md:p-10 lg:p-12" : "p-7 md:p-9"}>
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-neutral-600">
          {project.type}
        </span>
        {project.featured && (
          <span className="rounded-full bg-accent/30 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-ink">
            Featured
          </span>
        )}
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3
            className={
              featured
                ? "text-3xl font-extrabold tracking-tight md:text-4xl"
                : "text-2xl font-extrabold tracking-tight"
            }
          >
            {project.title}
          </h3>
          <p className="mt-2 text-sm font-semibold text-neutral-500">
            {project.role} · {project.company}
          </p>
        </div>
        {isExternal && (
          <a
            href={linkHref}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title}`}
            className="rounded-full border border-black/10 p-2 transition group-hover:bg-ink group-hover:text-white"
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>

      <p className="mt-4 leading-7 text-neutral-600">{project.description}</p>

      <ul className="mt-5 space-y-2">
        {project.highlights.slice(0, featured ? 4 : 3).map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm leading-6 text-neutral-600"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-500" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-semibold"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-col gap-4 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-bold">{project.impact}</p>
        {linkHref !== "#contact" && (
          <a
            href={linkHref}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            className="inline-flex items-center gap-1 text-sm font-bold transition hover:opacity-60"
          >
            View project <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectCard({
  project,
  index,
  featured = false
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.05 }}
      className={`group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-soft ${
        featured ? "lg:grid lg:grid-cols-2 lg:items-stretch" : ""
      }`}
    >
      <div
        className={`relative flex min-h-[240px] items-center justify-center overflow-hidden border-black/10 bg-gradient-to-br from-neutral-100 to-neutral-200 sm:min-h-[280px] ${
          featured
            ? "aspect-[16/10] border-b lg:aspect-auto lg:min-h-[420px] lg:border-b-0 lg:border-r"
            : "aspect-[16/9] border-b"
        }`}
      >
        <ProjectPreview project={project} />
      </div>
      <ProjectContent project={project} featured={featured} />
    </motion.article>
  );
}
