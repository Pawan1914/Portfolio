"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { categoryLabels, type ProjectFilter } from "@/types/project";

function SectionTitle({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl md:mb-14">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-neutral-500">
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
          {description}
        </p>
      )}
    </div>
  );
}

const filterOptions: ProjectFilter[] = [
  "all",
  "enterprise",
  "dashboard",
  "event-platform",
  "creative",
  "consumer",
  "ai-automation"
];

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

  const filters = filterOptions.filter(
    (filter) =>
      filter === "all" ||
      projects.some((project) => project.category === filter)
  );

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  const featuredProjects = filteredProjects.filter((project) => project.featured);
  const regularProjects = filteredProjects.filter((project) => !project.featured);

  return (
    <section id="work" className="section-space">
      <div className="container-width">
        <SectionTitle
          eyebrow="Selected work"
          title="Work that combines design thinking with engineering."
          description="Product-focused UI work across customer journeys, internal tools, design systems, accessibility, performance and platform templates — the kind of impact you create inside a product company."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const count =
              filter === "all"
                ? projects.length
                : projects.filter((project) => project.category === filter).length;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeFilter === filter
                    ? "bg-ink text-white"
                    : "border border-black/10 bg-white text-neutral-600 hover:border-black/20"
                }`}
              >
                {categoryLabels[filter]} ({count})
              </button>
            );
          })}
        </div>

        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              featured
            />
          ))}

          {regularProjects.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              {regularProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index + featuredProjects.length}
                />
              ))}
            </div>
          )}
        </div>

        {filteredProjects.length === 0 && (
          <div className="rounded-3xl border border-dashed border-black/15 bg-white p-10 text-center">
            <p className="text-lg font-semibold">No projects in this category yet.</p>
            <p className="mt-2 text-neutral-500">
              Switch to another filter or add a new project in{" "}
              <code className="rounded bg-neutral-100 px-2 py-1 text-sm">data/projects.ts</code>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
