import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Project Types — Malvion Technologies" },
      {
        name: "description",
        content:
          "Explore the types of AI and web development projects delivered by Malvion Technologies.",
      },
    ],
  }),
  component: ProjectsPage,
});

const projectTypes = [
  {
    category: "AI & Automation",
    title: "Intelligent AI Assistants",
    desc: "Context-aware conversational agents powered by LLMs that handle customer support, internal knowledge retrieval, and automated task execution.",
    stack: ["OpenAI / Anthropic", "Vector Databases", "Node.js", "React"],
  },
  {
    category: "Data & Machine Learning",
    title: "Predictive Analytics Platforms",
    desc: "Custom business intelligence dashboards that turn raw operational data into actionable forecasting models and rich visualizations.",
    stack: ["Python", "TensorFlow / PyTorch", "PostgreSQL", "Next.js"],
  },
  {
    category: "Enterprise Web",
    title: "High-Volume E-commerce",
    desc: "Blazing-fast, globally distributed storefronts designed for high traffic, seamless checkout experiences, and robust inventory management.",
    stack: ["React", "Node.js", "MongoDB", "Redis"],
  },
  {
    category: "Software as a Service",
    title: "B2B SaaS Products",
    desc: "Modern multi-tenant web applications featuring complex permission models, real-time collaboration, and subscription billing.",
    stack: ["Vue / Nuxt", "Express", "PostgreSQL", "Stripe"],
  },
  {
    category: "Cloud Infrastructure",
    title: "Serverless Microservices",
    desc: "Highly available and infinitely scalable backend architectures built on event-driven cloud patterns to reduce cost and maintenance.",
    stack: ["AWS Lambda", "API Gateway", "DynamoDB", "Terraform"],
  },
  {
    category: "Mobile Engineering",
    title: "Cross-Platform Applications",
    desc: "Native-feeling mobile experiences for iOS and Android, built from a single codebase to accelerate go-to-market speed.",
    stack: ["React Native", "Expo", "TypeScript", "GraphQL"],
  }
];

function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="bg-background border-b border-border py-24 md:py-32">
        <div className="container-lux mx-auto">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-8">
            Project Archetypes
          </div>
          <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[7rem] font-medium text-primary leading-[0.95] tracking-tight max-w-[1200px]">
            What we <br className="hidden md:block" />
            <span className="text-secondary/70">build.</span>
          </h1>
          <p className="mt-12 max-w-2xl text-xl text-secondary/90 font-light leading-relaxed">
            We don't limit ourselves to a single vertical. From complex AI systems to 
            mission-critical SaaS platforms, here are the types of digital products we engineer.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-lux mx-auto">
          <div className="grid md:grid-cols-2 gap-[1px] bg-border border-x border-border">
            {projectTypes.map((p, i) => (
              <div
                key={p.title}
                className="bg-white p-8 md:p-12 xl:p-16 flex flex-col group hover:bg-background transition-colors duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-secondary">
                    {p.category}
                  </div>
                  <div className="text-xs font-mono text-border font-bold">
                    0{i + 1}
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-medium text-primary mb-6 group-hover:translate-x-2 transition-transform duration-500">
                  {p.title}
                </h3>
                
                <p className="text-lg text-secondary/90 font-light leading-relaxed mb-12 flex-1">
                  {p.desc}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 border border-border text-[10px] font-semibold uppercase tracking-widest text-primary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background border-y border-border py-24">
        <div className="container-lux mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h3 className="text-[2.5rem] md:text-[3.5rem] font-medium text-primary leading-tight tracking-tight mb-4">
              Have a different <br /> project in mind?
            </h3>
            <p className="text-xl text-secondary font-light">
              Let's build something modern, scalable, and impactful together.
            </p>
          </div>
          <Link
            to="/contact"
            className="group flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white text-sm font-semibold hover:bg-black transition-colors shrink-0"
          >
            Start a project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}