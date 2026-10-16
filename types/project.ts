export type ProjectCategory =
  | "enterprise"
  | "dashboard"
  | "event-platform"
  | "creative"
  | "consumer"
  | "ai-automation";

export type Project = {
  number: string;
  title: string;
  type: string;
  category: ProjectCategory;
  company: string;
  role: string;
  description: string;
  highlights: string[];
  stack: string[];
  impact: string;
  href?: string;
  image?: string;
  domain?: string;
  featured?: boolean;
  preview?: "design-system";
};

export type ProjectFilter = "all" | ProjectCategory;

export const categoryLabels: Record<ProjectFilter, string> = {
  all: "All work",
  enterprise: "Enterprise",
  dashboard: "Dashboard",
  "event-platform": "Event platform",
  creative: "Creative",
  consumer: "Consumer",
  "ai-automation": "AI / Automation"
};
