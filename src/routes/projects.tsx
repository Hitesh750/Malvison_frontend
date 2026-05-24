import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Globe,
  Database,
  Smartphone,
} from "lucide-react";
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
        content:
          "AI and web development projects built by Malvion Technologies.",
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
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Database,
    tag: "AI · Analytics",
    title: "InsightAI Dashboard",
    desc: "AI-driven business analytics platform that turns raw data into actionable insights with predictive forecasting and visualizations.",
    stack: ["Python", "TensorFlow", "Next.js"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Globe,
    tag: "Web · E-commerce",
    title: "ShopSphere Storefront",
    desc: "A blazing-fast, fully responsive e-commerce platform with seamless checkout, product search, and admin dashboard.",
    stack: ["React", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Smartphone,
    tag: "Web · SaaS",
    title: "TaskFlow Web App",
    desc: "A modern team collaboration and project management web app with real-time updates, kanban boards, and integrations.",
    stack: ["Vue", "Express", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
];

function ProjectsPage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="border-b border-border bg-background">
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

      {/* Projects Grid */}
      <section>
        <div className="container-px mx-auto max-w-7xl py-20">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((p) => {
              const Icon = p.icon;

              return (
                <article
                  key={p.title}
                  className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/40" />

                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur">
                      <Icon className="h-4 w-4 text-accent" />
                      {p.tag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="text-mono-eyebrow mb-3">{p.tag}</div>

                    <h3 className="text-2xl font-bold tracking-tight">
                      {p.title}
                    </h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                      {p.desc}
                    </p>

                    {/* Stack */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wide text-foreground/80"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Button */}
                    <div className="mt-8">
                      <button className="inline-flex items-center gap-2 font-semibold text-accent transition-all hover:gap-3">
                        View Project
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-surface">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <div>
            <h3 className="text-3xl font-bold tracking-tight">
              Have a project in mind?
            </h3>

            <p className="mt-2 text-muted-foreground">
              Let's build something modern, scalable, and impactful together.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-all hover:scale-105"
          >
            Start a project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}