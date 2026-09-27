import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const STATS = [
  { label: "Projects Delivered", value: 120, suffix: "+" },
  { label: "Enterprise Clients", value: 45, suffix: "" },
  { label: "Countries Served", value: 12, suffix: "" },
  { label: "Years of Excellence", value: 8, suffix: "+" },
];

export function TrustBar() {
  const container = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLDivElement | null)[]>([]);
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
            start: "top 90%",
          },
          snap: { innerHTML: 1 },
          onUpdate: function() {
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
    <section ref={container} className="py-24 bg-white border-y border-border">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 border-x border-border">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="stat-item flex flex-col items-center justify-center text-center px-4 border-r border-border last:border-r-0">
              <div 
                className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-medium text-primary leading-none mb-4 tracking-tighter"
                ref={(el) => (countersRef.current[i] = el)}
              >
                {reducedMotion ? `${stat.value}${stat.suffix}` : `0${stat.suffix}`}
              </div>
              <div className="text-xs font-semibold text-secondary/70 uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
