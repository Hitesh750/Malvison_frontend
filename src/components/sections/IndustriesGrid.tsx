import React, { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const INDUSTRIES = [
  "Healthcare", "FinTech", "Real Estate", "E-commerce", 
  "Education", "Logistics", "SaaS", "Startups", "Enterprise"
];

export function IndustriesGrid() {
  const container = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".industries-header", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
    });

    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50, 
        ease: "none",
        duration: 30,
        repeat: -1,
      });
    }
  }, { scope: container });

  const duplicatedIndustries = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];

  return (
    <section ref={container} className="py-24 bg-white border-y border-border overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 mb-16">
        <div className="industries-header flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-xl">
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium text-primary mb-6 leading-tight tracking-tight">
              Industries We Transform
            </h2>
            <p className="text-xl text-secondary/90 font-light leading-relaxed">
              Cross-domain expertise applied to sector-specific challenges. We bring insights from scaling startups to modernizing legacy enterprise operations.
            </p>
          </div>
          <Link 
            to="/industries" 
            className="inline-flex items-center gap-4 text-sm font-semibold text-primary uppercase tracking-widest hover:text-secondary transition-colors"
          >
            Explore Domains <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex items-center py-12 border-y border-border bg-background">
        <div 
          ref={marqueeRef}
          className="flex items-center gap-8 px-6"
          style={{ width: "max-content" }}
        >
          {duplicatedIndustries.map((industry, index) => (
            <div key={`${industry}-${index}`} className="flex items-center gap-8">
              <span className="text-[4rem] md:text-[6rem] font-medium text-white/60 whitespace-nowrap tracking-tighter uppercase">
                {industry}
              </span>
              <span className="text-3xl text-white/60 font-light">&mdash;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
