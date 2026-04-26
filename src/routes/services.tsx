import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Cloud,
  Code2,
  Layers,
  Server,
  Workflow,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Malvion Technologies" },
      {
        name: "description",
        content:
          "AI, Cloud, Web, Frontend (React, Angular, Vue), and Backend (Node.js, Python) services from Malvion Technologies.",
      },
      { property: "og:title", content: "Services — Malvion Technologies" },
      {
        property: "og:description",
        content: "AI, Cloud, Web Development, Frontend & Backend engineering.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Brain,
    eyebrow: "01",
    title: "AI Solutions",
    desc: "From prototype to production: ML pipelines, LLM-powered features, RAG systems, computer vision, and intelligent automation.",
    items: ["LLM & RAG apps", "Predictive ML models", "Document intelligence", "AI agents & assistants"],
  },
  {
    icon: Cloud,
    eyebrow: "02",
    title: "Cloud Services",
    desc: "Cloud architecture done right — secure, observable, and cost-aware infrastructure on AWS, GCP, Azure, and Cloudflare.",
    items: ["Cloud migration", "Kubernetes & serverless", "CI/CD & DevOps", "Cost & security audits"],
  },
  {
    icon: Layers,
    eyebrow: "03",
    title: "Web Development",
    desc: "Marketing sites, dashboards, and SaaS platforms with modern stacks and a relentless focus on performance.",
    items: ["SaaS platforms", "Marketing sites", "E-commerce", "Headless CMS"],
  },
  {
    icon: Code2,
    eyebrow: "04",
    title: "Frontend Engineering",
    desc: "Polished, accessible interfaces in Angular, React, and Vue — design systems, micro-frontends, and complex UI.",
    items: ["React & Next.js", "Angular", "Vue & Nuxt", "Design systems"],
  },
  {
    icon: Server,
    eyebrow: "05",
    title: "Backend Engineering",
    desc: "Robust APIs and services in Node.js and Python. Postgres, queues, microservices, and event-driven architectures.",
    items: ["Node.js / TypeScript", "Python (FastAPI, Django)", "Postgres & Redis", "REST & GraphQL APIs"],
  },
  {
    icon: Workflow,
    eyebrow: "06",
    title: "Product Engineering",
    desc: "End-to-end teams that own discovery, design, and delivery. Embed with your team or run as a standalone squad.",
    items: ["Discovery sprints", "MVP delivery", "Long-term partnerships", "Team augmentation"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <div className="text-mono-eyebrow mb-6">Services</div>
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            A focused suite of <span className="text-accent">engineering services</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            We work across the full stack — from intelligent backends to
            polished interfaces. Pick a single service or compose your own
            engagement.
          </p>
        </div>
      </section>

      <section>
        <div className="container-px mx-auto max-w-7xl py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <s.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">{s.eyebrow}</div>
                </div>
                <h3 className="text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground">{s.desc}</p>
                <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-foreground/80">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
            Not sure which service fits? <span className="text-accent">Let's scope it together.</span>
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground"
          >
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
