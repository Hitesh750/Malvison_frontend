import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STATS = [
  { label: "Projects Delivered", value: 120, suffix: "+" },
  { label: "Enterprise Clients", value: 45, suffix: "" },
  { label: "Countries Served", value: 12, suffix: "" },
  { label: "Years of Excellence", value: 8, suffix: "+" },
];

export function TrustBar() {
  const container = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Use a simple state for prefers-reduced-motion fallback
  const [reducedMotion, setReducedMotion] = useState(false);

  useGSAP(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(isReduced);

    if (isReduced) return;

    countersRef.current.forEach((counter, i) => {
      if (!counter) return;
      
      const targetValue = STATS[i].value;
      
      gsap.fromTo(counter, 
        { innerHTML: 0 },
        { 
          innerHTML: targetValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 90%", // Start counting when the top of the section enters 90% viewport
          },
          snap: { innerHTML: 1 }, // Snap to whole numbers
          onUpdate: function() {
            // Re-append the suffix
            counter.innerHTML = Math.ceil(Number(this.targets()[0].innerHTML)) + STATS[i].suffix;
          }
        }
      );
    });

    gsap.fromTo(".stat-item", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.1,
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-16 border-y border-border bg-white">
      <div className="container-lux">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-border">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="stat-item flex flex-col items-center justify-center text-center px-4">
              <div 
                className="text-4xl md:text-5xl font-display font-bold text-primary mb-2"
                ref={(el) => (countersRef.current[i] = el)}
              >
                {reducedMotion ? `${stat.value}${stat.suffix}` : `0${stat.suffix}`}
              </div>
              <div className="text-sm font-medium text-secondary uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
