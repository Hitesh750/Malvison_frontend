import React, { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  { num: "01", title: "Web Development", description: "End-to-end product design and engineering for the modern web.", slug: "web-development" },
  { num: "02", title: "Mobile Applications", description: "Native and cross-platform apps built for iOS and Android.", slug: "mobile-apps" },
  { num: "03", title: "AI & Automation", description: "Intelligent systems to augment your workforce and operations.", slug: "ai-automation" },
  { num: "04", title: "Cloud Solutions", description: "Resilient backend systems built on AWS and GCP.", slug: "cloud" },
  { num: "05", title: "Product Engineering", description: "Dedicated engineering pods accelerating your roadmap.", slug: "product-engineering" },
  { num: "06", title: "Digital Transformation", description: "Modernizing legacy architecture for the enterprise.", slug: "digital-transformation" }
];

export function ServicesGrid() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".service-row", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 bg-background relative z-10 border-t border-border">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="mb-20 max-w-3xl">
          <h4 className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-6">
            Capabilities
          </h4>
          <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-medium text-primary leading-[1.05] tracking-tight">
            Technology Built <br /> Around Your Business.
          </h2>
        </div>

        <div className="flex flex-col border-t border-border">
          {SERVICES.map((service) => (
            <Link
              key={service.num}
              to={`/services/${service.slug}` as any}
              className="service-row group flex flex-col md:flex-row md:items-center py-10 md:py-12 border-b border-border hover:bg-white/50 transition-colors duration-300 cursor-pointer"
            >
              <div className="w-16 md:w-24 text-sm font-semibold text-secondary/70 mb-4 md:mb-0 transition-colors">
                {service.num}
              </div>
              <h3 className="flex-1 text-3xl md:text-5xl lg:text-6xl font-medium text-primary tracking-tight group-hover:translate-x-4 transition-transform duration-500 ease-out">
                {service.title}
              </h3>
              <p className="flex-1 text-lg text-secondary/90 mt-6 md:mt-0 max-w-md group-hover:text-primary transition-colors leading-relaxed">
                {service.description}
              </p>
              <div className="hidden lg:flex w-12 h-12 items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
