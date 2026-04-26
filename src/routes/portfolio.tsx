import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Malvion Technologies" },
      {
        name: "description",
        content:
          "Selected work and case studies from Malvion Technologies. New projects coming soon.",
      },
      { property: "og:title", content: "Portfolio — Malvion Technologies" },
      {
        property: "og:description",
        content: "A look at the projects we're building. New case studies coming soon.",
      },
    ],
  }),
  component: PortfolioPage,
});

const upcoming = [
  { tag: "AI · SaaS", title: "Document intelligence platform", desc: "RAG-powered search across enterprise knowledge bases." },
  { tag: "Cloud · DevOps", title: "Multi-cloud cost dashboard", desc: "Unified cost & usage analytics across AWS, GCP, Azure." },
  { tag: "Web · E-commerce", title: "Headless storefront", desc: "Next.js + Shopify storefront with edge personalization." },
  { tag: "AI · Operations", title: "Support copilot", desc: "AI assistant trained on internal docs and tickets." },
];

function PortfolioPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <div className="text-mono-eyebrow mb-6">Portfolio</div>
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            A few projects <span className="text-accent">in flight.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Detailed case studies are on the way. Here's a preview of recent and
            upcoming work across AI, Cloud, and product engineering.
          </p>
        </div>
      </section>

      <section>
        <div className="container-px mx-auto max-w-7xl py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {upcoming.map((p, i) => (
              <article
                key={p.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="mb-8 aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface">
                  <div
                    className="relative h-full w-full"
                    style={{
                      background: `
                        radial-gradient(circle at 30% 30%, oklch(72% 0.16 85 / 0.25), transparent 50%),
                        radial-gradient(circle at 70% 70%, oklch(28% 0.10 260 / 0.15), transparent 50%),
                        repeating-linear-gradient(${45 + i * 30}deg, oklch(28% 0.10 260 / 0.06) 0 1px, transparent 1px 24px)
                      `,
                    }}
                  >
                    <div className="absolute bottom-3 left-3 rounded-md border border-border bg-background/90 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur">
                      Case study · soon
                    </div>
                  </div>
                </div>
                <div className="text-mono-eyebrow mb-2">{p.tag}</div>
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
            Want to be our next case study?
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
