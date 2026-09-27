import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-background border-b border-border py-24 md:py-32">
        <div className="container-lux mx-auto">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-8">
            About Us
          </div>
          <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[7rem] font-medium text-primary leading-[0.95] tracking-tight max-w-[1200px]">
            Building smart <br className="hidden md:block" />
            <span className="text-secondary/70">digital solutions</span> <br className="hidden md:block" />
            for modern businesses.
          </h1>
          <p className="mt-12 max-w-2xl text-xl text-secondary/90 font-light leading-relaxed">
            At Malvion Technologies, we specialize in AI-powered applications,
            Cloud infrastructure, and scalable software development. Our goal is
            to help startups, enterprises, and growing businesses turn ideas
            into reliable digital products with speed, quality, and innovation.
          </p>
        </div>
      </section>

      {/* Founder Pull Quote */}
      <section className="bg-primary-deep text-white py-24 md:py-32 border-b border-white/5">
        <div className="container-lux mx-auto grid md:grid-cols-12 gap-12 md:gap-24 items-start">
          <div className="md:col-span-4">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-4">
              Founder & CEO
            </div>
            <h2 className="text-3xl font-medium text-white">Hitesh Malviya</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-white/90">
              "Malvion Technologies was founded with a vision to create powerful,
              user-friendly, and future-ready software solutions. We help businesses simplify
              operations and accelerate digital growth."
            </p>
            <p className="mt-12 text-lg leading-relaxed text-white/60 max-w-3xl">
              Today, we work with startups, educational institutions,
              healthcare providers, and enterprises to deliver custom software,
              automation systems, cloud services, and digital transformation
              solutions that create real business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Grids */}
      <section className="bg-background">
        <div className="container-lux mx-auto">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {[
              {
                title: "Our Vision",
                desc: "To become a trusted global technology partner delivering innovative and intelligent digital solutions.",
              },
              {
                title: "Our Mission",
                desc: "Empowering businesses with scalable software, AI solutions, and cloud technologies that drive growth and efficiency.",
              },
              {
                title: "Our Values",
                desc: "Innovation, transparency, quality, and long-term partnerships are at the core of everything we build.",
              },
            ].map((b, i) => (
              <div key={b.title} className="py-16 md:px-12 first:pt-16 first:md:pl-0 last:pb-16 last:md:pr-0 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-6">
                    0{i + 1}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-medium text-primary mb-6">{b.title}</h3>
                </div>
                <p className="text-lg text-secondary/90 leading-relaxed font-light mt-8">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-y border-border py-24">
        <div className="container-lux mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h3 className="text-[2.5rem] md:text-[3.5rem] font-medium text-primary leading-tight tracking-tight mb-4">
              Let’s create the <br className="hidden md:block" /> future together.
            </h3>
            <p className="text-xl text-secondary font-light">
              Have an idea or project in mind? Our team is ready to help you build it.
            </p>
          </div>
          <Link
            to="/contact"
            className="group flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white text-sm font-semibold hover:bg-black transition-colors shrink-0"
          >
            Contact us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}