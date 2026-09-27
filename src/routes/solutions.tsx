import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Malvion Technologies" },
      {
        name: "description",
        content:
          "Transformative digital solutions powered by AI, Cloud, and robust Engineering.",
      },
    ],
  }),
  component: SolutionsPage,
});

const solutions = [
  {
    eyebrow: "01",
    title: "AI Agents & Automation",
    desc: "Deploy intelligent agents that automate complex workflows, handle customer support, and augment your workforce with autonomous decision-making.",
    items: ["Autonomous agents", "Workflow automation", "Customer support bots", "Process optimization"],
  },
  {
    eyebrow: "02",
    title: "Generative AI Integration",
    desc: "Embed large language models into your existing products to unlock new capabilities, from content generation to intelligent search and discovery.",
    items: ["LLM integration", "Custom RAG systems", "Semantic search", "Content generation pipelines"],
  },
  {
    eyebrow: "03",
    title: "Enterprise Cloud Platforms",
    desc: "Modernize your infrastructure with scalable, secure, and resilient cloud architectures tailored for high-growth enterprise environments.",
    items: ["Cloud-native architecture", "Infrastructure as Code", "High availability setup", "Performance tuning"],
  },
  {
    eyebrow: "04",
    title: "SaaS & Product Development",
    desc: "Accelerate your time to market with end-to-end product development. We build scalable SaaS platforms with polished user experiences.",
    items: ["MVP development", "SaaS architecture", "Multi-tenant systems", "Subscription billing"],
  },
  {
    eyebrow: "05",
    title: "Data Intelligence",
    desc: "Turn your raw data into actionable insights. We build data pipelines, data lakes, and analytics dashboards for data-driven organizations.",
    items: ["Data engineering", "Predictive analytics", "Business intelligence", "Real-time dashboards"],
  },
];

function SolutionsPage() {
  return (
    <SiteLayout>
      <section className="bg-background border-b border-border py-24 md:py-32">
        <div className="container-lux mx-auto">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-8">
            Our Solutions
          </div>
          <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[7rem] font-medium text-primary leading-[0.95] tracking-tight max-w-[1200px]">
            Transformative solutions <br className="hidden md:block" />
            <span className="text-secondary/70">for ambitious teams.</span>
          </h1>
          <p className="mt-12 max-w-2xl text-xl text-secondary/90 font-light leading-relaxed">
            We deliver end-to-end solutions that solve complex business challenges. From intelligent automation to scalable cloud platforms, we build technology that drives growth.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-lux mx-auto">
          <div className="flex flex-col border-x border-border divide-y divide-border">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="group flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-24 p-8 md:p-16 hover:bg-background transition-colors duration-500"
              >
                <div className="lg:w-1/4 flex flex-col">
                  <div className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-6">
                    {s.eyebrow}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-medium text-primary leading-tight group-hover:translate-x-2 transition-transform duration-500">
                    {s.title}
                  </h3>
                </div>
                <div className="lg:w-3/4 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                  <p className="flex-1 text-lg md:text-xl text-secondary/90 font-light leading-relaxed">
                    {s.desc}
                  </p>
                  <ul className="flex-1 flex flex-col gap-4">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-4 text-sm font-medium text-primary">
                        <span className="h-[1px] w-4 bg-border" />
                        {it}
                      </li>
                    ))}
                  </ul>
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
              Ready to transform your business? <br />
              <span className="text-secondary/70">Let's build together.</span>
            </h3>
          </div>
          <Link
            to="/contact"
            className="group flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white text-sm font-semibold hover:bg-black transition-colors shrink-0"
          >
            Start a Conversation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
