import React, { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HeartPulse, Landmark, Home, ShoppingCart, GraduationCap, Package, Cloud, Rocket, Building2 } from "lucide-react";

const INDUSTRIES = [
  { name: "Healthcare", icon: HeartPulse },
  { name: "FinTech", icon: Landmark },
  { name: "Real Estate", icon: Home },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Education", icon: GraduationCap },
  { name: "Logistics", icon: Package },
  { name: "SaaS", icon: Cloud },
  { name: "Startups", icon: Rocket },
  { name: "Enterprise", icon: Building2 },
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

    // Auto-scrolling marquee
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50, // Move half the width (since we duplicate the content)
        ease: "none",
        duration: 30,
        repeat: -1,
      });
    }
  }, { scope: container });

  // Duplicate the array to create a seamless infinite loop
  const duplicatedIndustries = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <section ref={container} className="py-24 bg-background border-y border-border overflow-hidden">
      <div className="container-lux mb-12">
        <div className="industries-header flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Industries We Transform
            </h2>
            <p className="text-secondary">
              Cross-domain expertise applied to sector-specific challenges. We bring insights from scaling startups to modernizing legacy enterprise operations.
            </p>
          </div>
          <Link to="/industries" className="text-accent hover:text-accent-light font-medium whitespace-nowrap flex items-center gap-1 transition-colors">
            Explore Domain Expertise &rarr;
          </Link>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex items-center mt-10">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div 
          ref={marqueeRef}
          className="flex items-center gap-6 px-6"
          style={{ width: "max-content" }}
        >
          {duplicatedIndustries.map((industry, index) => (
            <Link 
              key={`${industry.name}-${index}`} 
              to="/industries" 
              className="group flex items-center gap-4 py-4 px-8 rounded-full border border-border bg-white shadow-sm hover:border-accent hover:shadow-md transition-all duration-300"
            >
              <industry.icon className="w-6 h-6 text-secondary group-hover:text-accent transition-colors" />
              <span className="font-display font-semibold text-primary whitespace-nowrap">
                {industry.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
