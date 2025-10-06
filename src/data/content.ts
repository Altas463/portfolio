import dailyFocusPreview from "../assets/dailyfocus-preview.png";

export const profile = {
  name: "Tu Pham",
  role: "Full-stack Developer",
  tagline: "I build calm, resilient web apps that feel effortless to use.",
  summary:
    "I specialise in crafting fast, accessible interfaces backed by reliable services. React, Next.js, and modern TypeScript ecosystems are where I am happiest.",
  location: "Ho Chi Minh City, Vietnam",
  email: "atu3012@gmail.com",
  phone: "+84 329 265 343",
  resumeUrl: "/CV-ENG_Pham-Van-A-Tu_Fullstack-developer.pdf",
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/Altas463",
      handle: "Altas463",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/pham-van-a-tu-ba7308322/",
      handle: "pham-van-a-tu",
    },
    {
      label: "Email",
      url: "mailto:atu3012@gmail.com",
      handle: "atu3012@gmail.com",
    },
  ],
};

export const heroHighlights = [
  "Full-stack intern at Nhat Nguyen Technology",
  "Next.js, Node.js, PostgreSQL, CakePHP",
  "Obsessed with clear user journeys and measurable impact",
];

export const stats = [
  { label: "Production launches", value: "4" },
  { label: "Internship length", value: "6 months" },
  { label: "Focus", value: "Frontend strategy" },
];

export const experience = [
  {
    company: "Nhat Nguyen Technology",
    role: "Full-stack Developer Intern",
    period: "Sep 2024 - Feb 2025",
    location: "Ho Chi Minh City, Vietnam",
    summary:
      "Owned features across a civil status data platform built with CakePHP and Elasticsearch. Collaborated with the product team to improve reliability and search performance.",
    achievements: [
      "Modelled complex citizen records and optimised queries with Elasticsearch aggregations.",
      "Introduced reusable UI components that cut duplicated markup across modules by 35%.",
      "Partnered with QA to harden authentication and audit log workflows.",
    ],
    stack: ["CakePHP", "Elasticsearch", "MongoDB", "Bootstrap"],
  },
];

export const projects = [
  {
    title: "Daily Focus",
    subtitle: "Time management web app",
    description:
      "Pomodoro based productivity companion with deep task tracking, focus analytics, and email nudges so teams never lose momentum.",
    impact:
      "Drove a 28% increase in weekly task completion during beta testing and reduced planning time via automated summaries.",
    image: dailyFocusPreview,
    links: [
      { label: "Live", url: "https://daily-focus-six.vercel.app/" },
      {
        label: "GitHub",
        url: "https://github.com/Altas463/daily-focus-Time-Management-Website",
      },
    ],
    stack: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma", "Nodemailer"],
  },
  {
    title: "Civil Status Admin Portal",
    subtitle: "Government data tooling",
    description:
      "Internal dashboard that streamlines record lookups, approvals, and audit workflows for municipal clerks.",
    impact:
      "Shrank record retrieval from minutes to seconds with tuned Elasticsearch pipelines and flexible filters.",
    links: [],
    stack: ["CakePHP", "Elasticsearch", "MongoDB", "Bootstrap"],
  },
  {
    title: "Portfolio Platform",
    subtitle: "Personal branding refresh",
    description:
      "Modernised portfolio experience showcasing projects, strengths, and a clear contact path for collaborators.",
    impact:
      "Improved recruiter engagement with a focused story and frictionless navigation.",
    links: [],
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];

export const skills = [
  {
    category: "Frontend",
    description:
      "Design systems, performance tuning, and accessible UX built with React and TypeScript.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    description:
      "API design, data modelling, and authentication flows for pragmatic product teams.",
    items: ["Node.js", "PostgreSQL", "Prisma", "ASP.NET MVC", "CakePHP"],
  },
  {
    category: "DevOps & Tools",
    description:
      "Rapid delivery with Git-based workflows, CI, and containerisation fundamentals.",
    items: ["Git", "GitHub", "Docker", "Vite", "Vercel"],
  },
];

export const principles = [
  {
    title: "Design for clarity",
    description:
      "I map user goals first, then shape the interface so every action feels obvious and lightweight.",
  },
  {
    title: "Ship with confidence",
    description:
      "I automate the checks I rely on and document the edge cases so teams can iterate quickly.",
  },
  {
    title: "Communicate openly",
    description:
      "Transparent progress reports and crisp async updates keep teammates aligned.",
  },
];

export const contact = {
  headline: "Ready to build the next calm, resilient product?",
  subheadline:
    "I am available for full-time roles and collaborative freelance work across timezones.",
  actions: [
    { label: "Start a conversation", url: "mailto:atu3012@gmail.com" },
    { label: "View resume", url: "/CV-ENG_Pham-Van-A-Tu_Fullstack-developer.pdf" },
  ],
};
