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
          "Trusted by startups, schools, hospitals, and enterprises worldwide. See the brands partnering with Malvion Technologies.",
      },
      { property: "og:title", content: "Clients — Malvion Technologies" },
      {
        property: "og:description",
        content:
          "Companies and organizations partnering with Malvion Technologies.",
      },
    ],
  }),
  component: ClientsPage,
});

const clients = [
  { name: "Delhi Public School", industry: "Education ERP" },
  { name: "Apex Hospital", industry: "Healthcare Software" },
  { name: "Nova Retail", industry: "E-commerce Platform" },
  { name: "Skyline Logistics", industry: "Supply Chain System" },
  { name: "Bright Future Academy", industry: "School Management" },
  { name: "MediCare Plus", industry: "Hospital ERP" },
  { name: "UrbanKart", industry: "Online Marketplace" },
  { name: "TechFusion Pvt Ltd", industry: "Cloud Solutions" },
];

const testimonials = [
  {
    quote:
      "Malvion Technologies transformed our school management system completely. Daily attendance, fee management, and parent communication became effortless.",
    name: "Rohit Sharma",
    role: "Director, Delhi Public School",
  },
  {
    quote:
      "Their hospital software improved our patient workflow and reduced manual work significantly. The support team is always responsive.",
    name: "Dr. Priya Mehta",
    role: "Founder, Apex Hospital",
  },
  {
    quote:
      "We launched our e-commerce platform with Malvion and saw a huge increase in speed, performance, and customer engagement.",
    name: "Aman Verma",
    role: "CEO, Nova Retail",
  },
];

function ClientsPage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="border-b border-border bg-background">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <div className="text-mono-eyebrow mb-6">Our Clients</div>

          <h1 className="max-w-5xl text-5xl font-bold tracking-tight md:text-6xl">
            Trusted by businesses that
            <span className="text-accent"> use our solutions daily.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
            From schools and hospitals to startups and enterprises —
            organizations trust Malvion Technologies for scalable software,
            cloud infrastructure, AI automation, and modern digital platforms
            that power their everyday operations.
          </p>

          {/* Stats */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-4xl font-bold text-accent">50+</h3>
              <p className="mt-2 text-muted-foreground">
                Active Business Clients
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-4xl font-bold text-accent">99%</h3>
              <p className="mt-2 text-muted-foreground">
                Client Satisfaction Rate
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-4xl font-bold text-accent">24/7</h3>
              <p className="mt-2 text-muted-foreground">
                Technical Support & Monitoring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section>
        <div className="container-px mx-auto max-w-7xl py-20">
          <div className="mb-10">
            <div className="text-mono-eyebrow mb-4">Trusted Partners</div>

            <h2 className="text-3xl font-bold tracking-tight">
              Companies & organizations using our software daily
            </h2>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              We help businesses automate workflows, manage operations,
              improve customer experience, and scale faster with modern
              technology solutions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {clients.map((c) => (
              <div
                key={c.name}
                className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-xl font-bold text-accent">
                  {c.name.charAt(0)}
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                  {c.name}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {c.industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-surface">
        <div className="container-px mx-auto max-w-7xl py-20">
          <div className="mb-10">
            <div className="text-mono-eyebrow mb-4">Client Reviews</div>

            <h2 className="text-3xl font-bold tracking-tight">
              What our clients say about us
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="relative rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <Quote className="h-10 w-10 text-accent/60" />

                  <div className="flex items-center gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="mt-6 leading-8 text-foreground/90">
                  "{t.quote}"
                </p>

                <div className="mt-8 border-t border-border pt-5">
                  <p className="font-semibold">{t.name}</p>

                  <p className="text-sm text-muted-foreground">
                    {t.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <div>
            <h3 className="text-3xl font-bold tracking-tight">
              Ready to grow your business with technology?
            </h3>

            <p className="mt-2 text-muted-foreground">
              Let’s build scalable software solutions for your company.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-all hover:scale-105"
          >
            Work with us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}