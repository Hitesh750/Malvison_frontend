import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Target, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Malvion Technologies" },
      {
        name: "description",
        content:
          "Founded by Hitesh Malviya, Malvion Technologies engineers AI, Cloud, and software solutions with precision and care.",
      },
      { property: "og:title", content: "About — Malvion Technologies" },
      {
        property: "og:description",
        content: "Our story, vision, and the team building intelligent digital solutions.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <div className="text-mono-eyebrow mb-6">About us</div>
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            We engineer <span className="text-accent">digital systems</span> that quietly do the hard work.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Malvion Technologies is a software studio focused on AI, Cloud, and
            full-stack development. We work with founders and product teams to
            ship reliable software, fast.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-surface">
        <div className="container-px mx-auto grid max-w-7xl gap-12 py-24 md:grid-cols-3">
          <div>
            <div className="text-mono-eyebrow mb-3">Founder</div>
            <h2 className="text-3xl font-bold tracking-tight">Hitesh Malviya</h2>
            <p className="mt-2 font-mono text-sm text-muted-foreground">
              CEO · Software Engineer
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed text-foreground/85">
              Malvion was started with a simple belief: software should feel
              effortless to use and rigorous underneath. After years building
              cloud and AI products for teams across industries, our founder
              Hitesh Malviya set out to create a studio where craftsmanship and
              modern engineering go hand in hand.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/85">
              Today, we partner with companies of every size — from early-stage
              startups to established enterprises — to translate ambitious ideas
              into shippable products.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section>
        <div className="container-px mx-auto max-w-7xl py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Compass,
                title: "Our Vision",
                desc: "To be the engineering partner of choice for teams building intelligent, durable software.",
              },
              {
                icon: Target,
                title: "Our Mission",
                desc: "Deliver AI, Cloud, and software solutions with precision, transparency, and lasting impact.",
              },
              {
                icon: Users,
                title: "Our Values",
                desc: "Craft over noise. Honesty over hype. Long-term partnerships over quick wins.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <b.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">{b.title}</h3>
                <p className="mt-2 text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
              Let's build something worth using.
            </h3>
            <p className="mt-2 text-muted-foreground">Talk to the team — we respond within a day.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground"
          >
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
