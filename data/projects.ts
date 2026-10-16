import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    number: "01",
    title: "Care Health Insurance Platform",
    type: "Enterprise Product",
    category: "enterprise",
    company: "Care Health Insurance",
    role: "Lead UI Developer",
    description:
      "Core customer-facing insurance product with responsive layouts, reusable UI patterns and performance-focused delivery across high-traffic quote, buy and service journeys.",
    highlights: [
      "End-to-end UI ownership from requirements to release",
      "Responsive flows across desktop, tablet and mobile",
      "Reusable SASS architecture for scalable product updates",
      "Stakeholder collaboration across design, QA and business teams"
    ],
    stack: ["HTML5", "SASS", "JavaScript", "AEM", "Accessibility", "Core Web Vitals"],
    impact: "Primary public insurance product experience at enterprise scale",
    href: "https://www.careinsurance.com",
    domain: "careinsurance.com",
    image: "/images/health-quotation.PNG",
    featured: true
  },
  {
    number: "02",
    title: "Call Center Dashboard",
    type: "Internal Product Tool",
    category: "dashboard",
    company: "Care Health Insurance",
    role: "Lead UI Developer",
    description:
      "Internal agent dashboard for managing calls, tracking activity and navigating operational workflows — built for clarity, speed and day-long usability on desktop and tablet.",
    highlights: [
      "Agent-first information hierarchy for daily operations",
      "Responsive layout for desktop and tablet environments",
      "Workflow-focused UI for faster call handling",
      "Modern React component structure for maintainability"
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Responsive UI"],
    impact: "Improved internal team efficiency and UI consistency",
    domain: "Internal dashboard",
    image: "/images/Call-Center-Dashboard.jpg",
    featured: true
  },
  {
    number: "03",
    title: "Reusable UI Component Library",
    type: "Design System",
    category: "enterprise",
    company: "Care Health Insurance",
    role: "Lead UI Developer",
    description:
      "Shared UI components and SASS patterns used across the insurance product — helping the team ship new pages and features faster while keeping visual and interaction consistency.",
    highlights: [
      "Reusable patterns for forms, cards, navigation and CTAs",
      "Scalable SASS structure for cross-team adoption",
      "Consistent spacing, typography and state styling",
      "Reduced duplicate UI work across product updates"
    ],
    stack: ["HTML5", "SASS", "JavaScript", "Component Architecture", "Design Systems"],
    impact: "Faster product delivery with a consistent UI foundation",
    domain: "Product design system",
    href: "/design-system"
  },
  {
    number: "04",
    title: "Accessibility & Inclusive UI",
    type: "Product Quality",
    category: "enterprise",
    company: "Care Health Insurance",
    role: "Lead UI Developer",
    description:
      "Accessible frontend patterns across regulated healthcare journeys — semantic markup, keyboard support, ARIA usage and inclusive form design for diverse customer needs.",
    highlights: [
      "Semantic HTML and ARIA for complex insurance flows",
      "Keyboard-accessible navigation and form interactions",
      "Accessible error, focus and validation states",
      "Compliance-minded UI for healthcare audiences"
    ],
    stack: ["HTML5", "Accessibility", "WCAG", "JavaScript", "Semantic Markup"],
    impact: "More inclusive product experience for all users",
    domain: "careinsurance.com"
  },
  {
    number: "05",
    title: "Core Web Vitals Optimization",
    type: "Performance Engineering",
    category: "enterprise",
    company: "Care Health Insurance",
    role: "Lead UI Developer",
    description:
      "Performance-focused frontend improvements across key product pages — optimizing render behavior, asset delivery and UI structure to support better Lighthouse scores and user experience.",
    highlights: [
      "Performance audits and UI-level optimization",
      "Semantic markup and lean DOM structure",
      "Asset and layout improvements for faster rendering",
      "Core Web Vitals awareness in day-to-day UI delivery"
    ],
    stack: ["HTML5", "SASS", "JavaScript", "Core Web Vitals", "Lighthouse"],
    impact: "Stronger page performance on high-traffic product flows",
    domain: "Product optimization"
  },
  {
    number: "06",
    title: "Cvent Event Website Templates",
    type: "Platform UI Library",
    category: "event-platform",
    company: "Cvent",
    role: "Frontend / UI Developer",
    description:
      "Reusable responsive event website templates and UI patterns used to launch polished event experiences quickly — a core part of 7+ years building scalable platform UI at Cvent.",
    highlights: [
      "Template library for diverse event types and clients",
      "Pixel-accurate implementation from design specifications",
      "Mobile-first responsive behavior at platform scale",
      "Maintainable CSS architecture across reusable templates"
    ],
    stack: ["HTML", "CSS", "JavaScript", "SASS", "Design Systems", "Responsive UI"],
    impact: "Accelerated event site delivery through reusable platform UI",
    href: "https://www.cvent.com",
    domain: "cvent.com"
  },
  {
    number: "07",
    title: "AI Automated Bidding for Freelancer.com",
    type: "AI Automation Tool",
    category: "ai-automation",
    company: "Independent Project",
    role: "Builder / Developer",
    description:
      "An AI-driven automation that monitors freelancer.com projects and generates tailored, context-aware bid proposals automatically — reducing manual effort and improving response speed on relevant jobs.",
    highlights: [
      "Automated project monitoring and bid submission workflow",
      "AI-generated, context-aware proposals tailored per project",
      "Faster response time on newly posted relevant jobs",
      "Configurable filtering to target the right opportunities"
    ],
    stack: ["AI / LLM", "Automation", "Node.js", "APIs", "Prompt Engineering"],
    impact: "Hands-off bidding that saves time and improves proposal relevance",
    domain: "freelancer.com",
    image: "/images/ai-bidding.svg"
  }
];
