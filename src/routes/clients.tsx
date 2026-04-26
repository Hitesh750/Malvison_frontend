import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients — Malvion Technologies" },
      {
        name: "description",
        content:
          "Trusted by startups and enterprises worldwide. See the brands and teams partnering with Malvion Technologies.",
      },
      { property: "og:title", content: "Clients — Malvion Technologies" },
      {
        property: "og:description",
        content: "Companies and teams partnering with Malvion Technologies.",
      },
    ],
  }),
  component: ClientsPage,
});

const clients = [
  { name: "NexaCorp", industry: "FinTech" },
  { name: "BluePeak Labs", industry: "Healthcare" },
  { name: "Orbit Studios", industry: "Media & Design" },
  { name: "Quantix Retail", industry: "E-commerce" },
  { name: "Verdant Energy", industry: "CleanTech" },
  { name: "Skyline Logistics", industry: "Supply Chain" },
  { name: "PixelForge", industry: "Gaming" },
  { name: "MedixCare", industry: "Healthcare" },
];

const testimonials = [
  {
    quote:
      "Malvion delivered our AI assistant ahead of schedule. The team's attention to detail and engineering quality is unmatched.",
    name: "Aarav Sharma",
    role: "CTO, NexaCorp",
  },
  {
    quote:
      "From concept to launch, our storefront performance improved 3x. Malvion truly understands modern web architecture.",
    name: "Priya Mehta",
    role: "Head of Product, Quantix Retail",
  },
  {
    quote:
      "Reliable, sharp, and incredibly responsive. Our cloud migration went flawlessly thanks to the Malvion team.",
    name: "Rahul Verma",
    role: "VP Engineering, Skyline Logistics",
  },
];

function ClientsPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <div className="text-mono-eyebrow mb-6">Clients</div>
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            Trusted by teams <span className="text-accent">building what's next.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            From early-stage startups to established enterprises — we partner
            with ambitious teams to ship products that move the needle.
          </p>
        </div>
      </section>

      <section>
        <div className="container-px mx-auto max-w-7xl py-20">
          <div className="text-mono-eyebrow mb-8">Our Clients</div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {clients.map((c) => (
              <div
                key={c.name}
                className="group flex flex-col items-center justify-center gap-2 bg-card p-8 text-center transition-colors hover:bg-surface"
              >
                <p className="text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                  {c.name}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {c.industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container-px mx-auto max-w-7xl py-20">
          <div className="text-mono-eyebrow mb-8">What they say</div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="relative rounded-2xl border border-border bg-card p-8"
              >
                <Quote className="h-8 w-8 text-accent/60" />
                <p className="mt-4 text-foreground/90">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
            Become our next success story.
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground"
          >
            Work with us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
