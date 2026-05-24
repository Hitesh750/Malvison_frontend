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
          "Malvion Technologies delivers modern AI, Cloud, and software solutions designed to help businesses grow faster and smarter.",
      },
      { property: "og:title", content: "About — Malvion Technologies" },
      {
        property: "og:description",
        content:
          "Discover our journey, mission, and the passionate team behind innovative digital solutions.",
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
            Building <span className="text-accent">smart digital solutions</span>{" "}
            for modern businesses.
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            At Malvion Technologies, we specialize in AI-powered applications,
            Cloud infrastructure, and scalable software development. Our goal is
            to help startups, enterprises, and growing businesses turn ideas
            into reliable digital products with speed, quality, and innovation.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-surface">
        <div className="container-px mx-auto grid max-w-7xl gap-12 py-24 md:grid-cols-3">
          <div>
            <div className="text-mono-eyebrow mb-3">Founder & CEO</div>

            <h2 className="text-3xl font-bold tracking-tight">
              Hitesh Malviya
            </h2>
          </div>

          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed text-foreground/85">
              Malvion Technologies was founded with a vision to create powerful,
              user-friendly, and future-ready software solutions. With expertise
              in modern web technologies, AI systems, and cloud platforms,
              Hitesh Malviya started the company to help businesses simplify
              operations and accelerate digital growth.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-foreground/85">
              Today, we work with startups, educational institutions,
              healthcare providers, and enterprises to deliver custom software,
              automation systems, cloud services, and digital transformation
              solutions that create real business impact.
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
                desc: "To become a trusted global technology partner delivering innovative and intelligent digital solutions.",
              },
              {
                icon: Target,
                title: "Our Mission",
                desc: "Empowering businesses with scalable software, AI solutions, and cloud technologies that drive growth and efficiency.",
              },
              {
                icon: Users,
                title: "Our Values",
                desc: "Innovation, transparency, quality, and long-term partnerships are at the core of everything we build.",
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

      {/* CTA */}
      <section className="border-t border-border bg-surface">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
              Let’s create the future together.
            </h3>

            <p className="mt-2 text-muted-foreground">
              Have an idea or project in mind? Our team is ready to help you
              build it.
            </p>
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