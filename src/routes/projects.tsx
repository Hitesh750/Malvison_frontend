import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Globe, Database, Smartphone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Malvion Technologies" },
      {
        name: "description",
        content:
          "Explore AI and web development projects delivered by Malvion Technologies — from intelligent chatbots to modern web platforms.",
      },
      { property: "og:title", content: "Projects — Malvion Technologies" },
      {
        property: "og:description",
        content: "AI and web development projects built by Malvion Technologies.",
      },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    icon: Bot,
    tag: "AI · Chatbot",
    title: "NovaChat AI Assistant",
    desc: "An intelligent customer support chatbot powered by LLMs that handles 80% of queries automatically with context-aware responses.",
    stack: ["OpenAI", "Node.js", "React"],
  },
  {
    icon: Database,
    tag: "AI · Analytics",
    title: "InsightAI Dashboard",
    desc: "AI-driven business analytics platform that turns raw data into actionable insights with predictive forecasting and visualizations.",
    stack: ["Python", "TensorFlow", "Next.js"],
  },
  {
    icon: Globe,
    tag: "Web · E-commerce",
    title: "ShopSphere Storefront",
    desc: "A blazing-fast, fully responsive e-commerce platform with seamless checkout, product search, and admin dashboard.",
    stack: ["React", "Node.js", "MongoDB"],
  },
  {
    icon: Smartphone,
    tag: "Web · SaaS",
    title: "TaskFlow Web App",
    desc: "A modern team collaboration and project management web app with real-time updates, kanban boards, and integrations.",
    stack: ["Vue", "Express", "PostgreSQL"],
  },
];

function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <div className="text-mono-eyebrow mb-6">Projects</div>
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            Work that <span className="text-accent">delivers results.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            A selection of AI and web development projects we've crafted —
            blending design, engineering, and intelligence into products
            people love to use.
          </p>
        </div>
      </section>

      <section>
        <div className="container-px mx-auto max-w-7xl py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-elegant)]"
                >
                  <div className="mb-8 aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface">
                    <div
                      className="relative flex h-full w-full items-center justify-center"
                      style={{
                        background: `
                          radial-gradient(circle at 30% 30%, oklch(72% 0.16 85 / 0.25), transparent 50%),
                          radial-gradient(circle at 70% 70%, oklch(28% 0.10 260 / 0.15), transparent 50%),
                          repeating-linear-gradient(${45 + i * 30}deg, oklch(28% 0.10 260 / 0.06) 0 1px, transparent 1px 24px)
                        `,
                      }}
                    >
                      <Icon className="h-16 w-16 text-accent/80 transition-transform group-hover:scale-110" strokeWidth={1.25} />
                      <div className="absolute bottom-3 left-3 rounded-md border border-border bg-background/90 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur">
                        {p.tag}
                      </div>
                    </div>
                  </div>
                  <div className="text-mono-eyebrow mb-2">{p.tag}</div>
                  <h3 className="text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border bg-surface px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
            Have a project in mind?
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground"
          >
            Start a project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
