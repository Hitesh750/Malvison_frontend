import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company — Malvion Technologies" },
      {
        name: "description",
        content:
          "Learn about Malvion Technologies, our values, our team, and our mission to build intelligent software.",
      },
    ],
  }),
  component: CompanyPage,
});

const values = [
  {
    eyebrow: "Value 01",
    title: "Engineering Excellence",
    desc: "We believe in writing clean, scalable, and maintainable code. Good engineering is the foundation of every successful product we deliver.",
    items: ["Rigorous code reviews", "Automated testing", "Performance first", "Continuous delivery"],
  },
  {
    eyebrow: "Value 02",
    title: "Design with Purpose",
    desc: "Great technology is invisible. We focus on creating intuitive, accessible, and stunning user experiences that solve real problems.",
    items: ["User-centric design", "Accessibility standards", "Micro-interactions", "Brand alignment"],
  },
  {
    eyebrow: "Value 03",
    title: "Radical Transparency",
    desc: "We treat our clients as partners. You get full visibility into our process, our code, and our decision-making every step of the way.",
    items: ["Open communication", "Shared documentation", "Honest timelines", "Direct collaboration"],
  },
  {
    eyebrow: "Value 04",
    title: "Relentless Innovation",
    desc: "The tech landscape changes rapidly. We continuously experiment with new tools and paradigms to bring you the best competitive advantage.",
    items: ["R&D initiatives", "Emerging tech adoption", "AI integration", "Future-proof architectures"],
  },
];

function CompanyPage() {
  return (
    <SiteLayout>
      <section className="bg-background border-b border-border py-24 md:py-32">
        <div className="container-lux mx-auto">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-8">
            The Company
          </div>
          <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[7rem] font-medium text-primary leading-[0.95] tracking-tight max-w-[1200px]">
            Building the future <br className="hidden md:block" />
            <span className="text-secondary/70">of digital software.</span>
          </h1>
          <p className="mt-12 max-w-2xl text-xl text-secondary/90 font-light leading-relaxed">
            Malvion Technologies is a digital product agency focused on engineering high-performance software, intelligent AI systems, and robust cloud architectures for ambitious global teams.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-lux mx-auto">
          <div className="py-16 md:py-24 border-x border-border px-8 md:px-16">
            <h2 className="text-3xl md:text-5xl font-medium text-primary mb-12">Our Core Values</h2>
            <div className="flex flex-col divide-y divide-border border-t border-border">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="group flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-24 py-12 hover:bg-background/50 transition-colors duration-500"
                >
                  <div className="lg:w-1/4 flex flex-col">
                    <div className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-6">
                      {v.eyebrow}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-medium text-primary leading-tight group-hover:translate-x-2 transition-transform duration-500">
                      {v.title}
                    </h3>
                  </div>
                  <div className="lg:w-3/4 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                    <p className="flex-1 text-lg md:text-xl text-secondary/90 font-light leading-relaxed">
                      {v.desc}
                    </p>
                    <ul className="flex-1 flex flex-col gap-4">
                      {v.items.map((it) => (
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
        </div>
      </section>

      <section className="bg-background border-y border-border py-24">
        <div className="container-lux mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h3 className="text-[2.5rem] md:text-[3.5rem] font-medium text-primary leading-tight tracking-tight mb-4">
              Join us on our journey. <br />
              <span className="text-secondary/70">Let's create impact.</span>
            </h3>
          </div>
          <Link
            to="/contact"
            className="group flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white text-sm font-semibold hover:bg-black transition-colors shrink-0"
          >
            Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
