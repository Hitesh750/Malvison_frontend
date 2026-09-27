import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — Malvion Technologies" },
      {
        name: "description",
        content:
          "Explore the cutting-edge tech stack we use to build intelligent, scalable digital solutions.",
      },
    ],
  }),
  component: TechnologyPage,
});

const technologies = [
  {
    eyebrow: "01",
    title: "Artificial Intelligence",
    desc: "We leverage industry-leading models and frameworks to build bespoke AI solutions.",
    items: ["OpenAI & Anthropic", "PyTorch & TensorFlow", "LangChain & LlamaIndex", "Hugging Face"],
  },
  {
    eyebrow: "02",
    title: "Frontend & UI",
    desc: "Building highly interactive, accessible, and performant user interfaces that scale.",
    items: ["React & Next.js", "Angular & Vue", "Tailwind CSS", "Framer Motion"],
  },
  {
    eyebrow: "03",
    title: "Backend & APIs",
    desc: "Robust microservices and monolithic architectures designed for high concurrency.",
    items: ["Node.js & TypeScript", "Python & Go", "GraphQL & REST", "gRPC & WebSockets"],
  },
  {
    eyebrow: "04",
    title: "Cloud & DevOps",
    desc: "Secure and resilient infrastructure running on the world's most trusted cloud providers.",
    items: ["AWS & Google Cloud", "Docker & Kubernetes", "Terraform & Pulumi", "GitHub Actions & CI/CD"],
  },
  {
    eyebrow: "05",
    title: "Data & Storage",
    desc: "Scalable databases and caching layers optimized for high read/write throughput.",
    items: ["PostgreSQL & MySQL", "MongoDB & Redis", "Elasticsearch", "Snowflake & BigQuery"],
  },
];

function TechnologyPage() {
  return (
    <SiteLayout>
      <section className="bg-background border-b border-border py-24 md:py-32">
        <div className="container-lux mx-auto">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-8">
            Technology Stack
          </div>
          <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[7rem] font-medium text-primary leading-[0.95] tracking-tight max-w-[1200px]">
            Engineered with <br className="hidden md:block" />
            <span className="text-secondary/70">modern tools.</span>
          </h1>
          <p className="mt-12 max-w-2xl text-xl text-secondary/90 font-light leading-relaxed">
            We don't chase trends. We choose the right technology for the problem, ensuring scalability, security, and maintainability for every system we build.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-lux mx-auto">
          <div className="flex flex-col border-x border-border divide-y divide-border">
            {technologies.map((tech) => (
              <div
                key={tech.title}
                className="group flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-24 p-8 md:p-16 hover:bg-background transition-colors duration-500"
              >
                <div className="lg:w-1/4 flex flex-col">
                  <div className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-6">
                    {tech.eyebrow}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-medium text-primary leading-tight group-hover:translate-x-2 transition-transform duration-500">
                    {tech.title}
                  </h3>
                </div>
                <div className="lg:w-3/4 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                  <p className="flex-1 text-lg md:text-xl text-secondary/90 font-light leading-relaxed">
                    {tech.desc}
                  </p>
                  <ul className="flex-1 flex flex-col gap-4">
                    {tech.items.map((it) => (
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
              Looking for a specific expertise? <br />
              <span className="text-secondary/70">Let's talk tech.</span>
            </h3>
          </div>
          <Link
            to="/contact"
            className="group flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white text-sm font-semibold hover:bg-black transition-colors shrink-0"
          >
            Contact Engineering <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
