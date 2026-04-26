import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Cloud, Code2, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Malvion Technologies — Building Intelligent Digital Solutions" },
      {
        name: "description",
        content:
          "Malvion Technologies engineers AI, Cloud, and bespoke software solutions for forward-thinking teams.",
      },
      { property: "og:title", content: "Malvion Technologies — Building Intelligent Digital Solutions" },
      {
        property: "og:description",
        content: "AI, Cloud & custom software, engineered with precision.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    desc: "ML models, LLM integrations, and intelligent automation tailored to your domain.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    desc: "Scalable architecture on AWS, GCP & Azure — secure, observable, and cost-aware.",
  },
  {
    icon: Code2,
    title: "Software Development",
    desc: "Production-grade web platforms with React, Angular, Vue, Node.js and Python.",
  },
];

const stats = [
  { k: "30+", v: "Projects shipped" },
  { k: "12", v: "Industries served" },
  { k: "99.9%", v: "Avg uptime" },
  { k: "24/7", v: "Support" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid-bg" />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[80%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl animate-pulse-slow"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(72% 0.16 85 / 0.18), oklch(55% 0.15 220 / 0.10) 40%, transparent 70%)",
          }}
        />
        <div className="container-px mx-auto grid max-w-7xl items-center gap-16 py-20 md:grid-cols-2 md:py-28 lg:py-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 backdrop-blur">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Open for new projects
              </span>
            </div>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Building <span className="text-gradient-accent">Intelligent</span> <br className="hidden md:inline" />
              Digital Solutions
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              Precision AI, robust Cloud infrastructure, and bespoke software
              development — engineered for teams shaping what comes next.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:translate-y-[-1px] hover:shadow-[var(--shadow-elegant)]"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/60 px-7 py-3.5 font-semibold text-foreground backdrop-blur transition-colors hover:bg-surface"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.v} className="border-l-2 border-accent/40 pl-4">
                  <div className="text-2xl font-bold text-foreground md:text-3xl">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface via-background to-surface shadow-[var(--shadow-elegant)]">
              <div aria-hidden className="absolute inset-0 grid-bg opacity-60" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="relative h-72 w-72">
                  <div className="absolute inset-0 rounded-full border border-border/80" />
                  <div className="absolute inset-6 rounded-full border border-border/60" />
                  <div className="absolute inset-12 rounded-full border border-border/40" />
                  <div
                    className="absolute inset-0 animate-spin-slow rounded-full"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 70%, oklch(72% 0.16 85 / 0.7), transparent 95%)",
                      mask: "radial-gradient(circle, transparent 55%, black 56%, black 70%, transparent 71%)",
                      WebkitMask:
                        "radial-gradient(circle, transparent 55%, black 56%, black 70%, transparent 71%)",
                    }}
                  />
                  <div
                    className="absolute inset-20 grid place-items-center rounded-full text-primary-foreground shadow-xl"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <Sparkles className="h-8 w-8 text-accent" />
                  </div>
                </div>
              </div>

              <div className="animate-float absolute left-6 top-6 rounded-xl border border-border bg-background/90 px-3 py-2 shadow-sm backdrop-blur">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  AI · ONLINE
                </div>
              </div>
              <div className="animate-float-delayed absolute bottom-6 right-6 rounded-xl border border-border bg-background/90 px-3 py-2 shadow-sm backdrop-blur">
                <div className="font-mono text-[11px] text-muted-foreground">
                  edge.malvion.tech
                </div>
                <div className="font-mono text-xs text-foreground">200 OK · 42ms</div>
              </div>
              <div className="animate-float absolute right-8 top-16 rounded-xl border border-border bg-background/90 px-3 py-2 shadow-sm backdrop-blur">
                <div className="text-mono-eyebrow !text-[10px]">Throughput</div>
                <div className="text-sm font-semibold">12.4k req/s</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="border-t border-border bg-surface">
        <div className="container-px mx-auto max-w-7xl py-24">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="text-mono-eyebrow mb-3">What we do</div>
              <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
                Three pillars. <span className="text-accent">One discipline.</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              From research-grade AI to production cloud platforms — we deliver
              software that holds up under pressure.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <s.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section>
        <div className="container-px mx-auto max-w-7xl py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-mono-eyebrow mb-3">Why Malvion</div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Engineering that
                <br /> <span className="text-accent">earns trust.</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                We pair pragmatic architecture with modern tooling. No buzzwords —
                just clean, maintainable systems that scale with your business.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Zap, title: "Move fast", desc: "Weekly delivery, transparent progress." },
                { icon: ShieldCheck, title: "Built secure", desc: "Security & compliance from day one." },
                { icon: Brain, title: "AI-native", desc: "ML & LLMs woven into your product." },
                { icon: Cloud, title: "Cloud-fluent", desc: "AWS · GCP · Azure · Cloudflare." },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <f.icon className="h-5 w-5 text-accent" />
                  <div className="mt-3 font-semibold">{f.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="container-px mx-auto max-w-7xl py-24">
          <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground md:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-40 blur-3xl"
              style={{ background: "oklch(72% 0.16 85 / 0.6)" }}
            />
            <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Have an idea worth building?
                </h3>
                <p className="mt-3 max-w-lg text-primary-foreground/70">
                  Tell us what you're working on. We'll respond within one business day.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-all hover:translate-y-[-1px]"
                >
                  Start a project <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-7 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  See our work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
