import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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
    ],
  }),
  component: ClientsPage,
});

const clients = [
  { name: "Delhi Public School", industry: "Education ERP" },
  { name: "Apex Hospital", industry: "Healthcare Software" },
  { name: "Nova Retail", industry: "E-commerce Platform" },
  { name: "Skyline Logistics", industry: "Supply Chain System" },
  { name: "Bright Future Academy", primary: true, industry: "School Management" },
  { name: "MediCare Plus", industry: "Hospital ERP" },
  { name: "UrbanKart", primary: true, industry: "Online Marketplace" },
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
      <section className="bg-background border-b border-border py-24 md:py-32">
        <div className="container-lux mx-auto">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-8">
            Our Clients
          </div>
          <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[7rem] font-medium text-primary leading-[0.95] tracking-tight max-w-[1200px]">
            Trusted by businesses that <br className="hidden md:block" />
            <span className="text-secondary/70">use our solutions daily.</span>
          </h1>
          <p className="mt-12 max-w-2xl text-xl text-secondary/90 font-light leading-relaxed">
            From schools and hospitals to startups and enterprises —
            organizations trust Malvion Technologies for scalable software,
            cloud infrastructure, AI automation, and modern digital platforms.
          </p>
        </div>
      </section>

      {/* Stats - Brutalist Typography */}
      <section className="bg-primary-deep border-b border-white/5 py-16 md:py-24">
        <div className="container-lux mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="flex flex-col items-center justify-center py-12 md:py-0">
            <div className="text-[4rem] md:text-[6rem] font-medium text-white leading-none mb-4 tracking-tighter">50+</div>
            <div className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em]">Active Clients</div>
          </div>
          <div className="flex flex-col items-center justify-center py-12 md:py-0">
            <div className="text-[4rem] md:text-[6rem] font-medium text-white leading-none mb-4 tracking-tighter">99%</div>
            <div className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em]">Satisfaction Rate</div>
          </div>
          <div className="flex flex-col items-center justify-center py-12 md:py-0">
            <div className="text-[4rem] md:text-[6rem] font-medium text-white leading-none mb-4 tracking-tighter">24/7</div>
            <div className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em]">Technical Support</div>
          </div>
        </div>
      </section>

      {/* Clients Typographic List */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-lux mx-auto">
          <div className="mb-16">
            <h2 className="text-[2.5rem] md:text-[4rem] font-medium text-primary leading-tight tracking-tight">
              Partners & Organizations
            </h2>
          </div>
          
          <div className="flex flex-col border-t border-border">
            {clients.map((c, i) => (
              <div key={i} className="py-8 md:py-12 border-b border-border flex flex-col md:flex-row md:items-baseline justify-between group hover:pl-8 transition-all duration-500 cursor-default">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium text-primary tracking-tight">
                  {c.name}
                </h3>
                <p className="text-sm md:text-base text-secondary font-mono tracking-widest uppercase mt-4 md:mt-0">
                  {c.industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-background border-t border-border py-24 md:py-32">
        <div className="container-lux mx-auto">
          <div className="mb-20">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-6">
              Client Reviews
            </div>
            <h2 className="text-[2.5rem] md:text-[4rem] font-medium text-primary leading-tight tracking-tight">
              What they say about us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-[1px] bg-border border border-border">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 md:p-12 flex flex-col justify-between">
                <p className="text-lg md:text-xl text-primary font-light leading-relaxed mb-12 italic">
                  "{t.quote}"
                </p>
                <div>
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-secondary mt-2">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-border py-24">
        <div className="container-lux mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h3 className="text-[2.5rem] md:text-[3.5rem] font-medium text-primary leading-tight tracking-tight mb-4">
              Ready to grow with <br /> modern technology?
            </h3>
            <p className="text-xl text-secondary font-light">
              Let’s build scalable software solutions for your company.
            </p>
          </div>
          <Link
            to="/contact"
            className="group flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white text-sm font-semibold hover:bg-black transition-colors shrink-0"
          >
            Work with us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}