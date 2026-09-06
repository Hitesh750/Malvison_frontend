import React, { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SERVICES = [
  {
    num: "01",
    title: "Web Development",
    description: "End-to-end product design and engineering for the modern web.",
    slug: "web-development"
  },
  {
    num: "02",
    title: "Mobile Applications",
    description: "Native and cross-platform apps built for iOS and Android.",
    slug: "mobile-apps"
  },
  {
    num: "03",
    title: "AI & Automation",
    description: "Intelligent systems to augment your workforce and operations.",
    slug: "ai-automation"
  },
  {
    num: "04",
    title: "Cloud Solutions",
    description: "Resilient backend systems built on AWS and GCP.",
    slug: "cloud"
  },
  {
    num: "05",
    title: "Product Engineering",
    description: "Dedicated engineering pods accelerating your roadmap.",
    slug: "product-engineering"
  },
  {
    num: "06",
    title: "Digital Transformation",
    description: "Modernizing legacy architecture for the enterprise.",
    slug: "digital-transformation"
  }
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
    <section ref={container} className="py-32 bg-[#FFFFFF] relative z-10 border-t border-border">
      <div className="container-lux">
        <div className="mb-20 max-w-2xl">
          <h4 className="text-[11px] font-mono tracking-[0.2em] text-secondary uppercase mb-6">
            Services
          </h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6 leading-tight tracking-tight">
            Technology Built <br /> Around Your Business.
          </h2>
        </div>

        <div className="flex flex-col border-t border-border">
          {SERVICES.map((service) => (
            <Link 
              key={service.num} 
              to={`/services/${service.slug}` as any}
              className="service-row group flex flex-col md:flex-row md:items-center py-10 border-b border-border hover:bg-background hover:px-8 transition-all duration-500 cursor-pointer -mx-8 px-8 rounded-sm"
            >
              <div className="w-16 text-sm font-mono text-accent mb-4 md:mb-0 transition-colors">
                {service.num}
              </div>
              <h3 className="flex-1 text-3xl md:text-4xl font-display font-semibold text-primary group-hover:translate-x-4 transition-transform duration-500 ease-out">
                {service.title}
              </h3>
              <p className="flex-1 text-secondary mt-4 md:mt-0 max-w-md group-hover:text-primary transition-colors">
                {service.description}
              </p>
              
              <div className="w-12 h-12 hidden lg:flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <div className="w-8 h-8 rounded-full border border-accent flex items-center justify-center bg-white group-hover:shadow-[0_0_15px_rgba(8,120,232,0.15)] transition-shadow">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
