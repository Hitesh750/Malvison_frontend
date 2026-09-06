import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function AboutCompany() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".about-content > *", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-32 md:py-40 bg-background relative z-10 border-t border-border">
      <div className="container-lux">
        <div className="about-content max-w-5xl mx-auto flex flex-col items-center text-center">
          
          <h2 className="text-5xl sm:text-6xl md:text-[80px] font-display font-bold text-primary leading-[1.05] tracking-tight mb-12">
            We turn complex <br />
            technology into <br />
            <span className="text-accent">simple experiences.</span>
          </h2>

          <p className="text-xl md:text-2xl text-secondary font-light leading-relaxed mb-24 max-w-3xl">
            We are a specialized digital engineering partner. We combine deep technical expertise with rigorous product design to build platforms that scale and AI solutions that automate the impossible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 w-full border-t border-border pt-16">
            <div className="flex flex-col items-center">
              <div className="text-6xl md:text-7xl font-display font-bold text-primary mb-4 tracking-tighter">50+</div>
              <div className="text-xs font-mono font-medium text-secondary uppercase tracking-widest">Projects</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl md:text-7xl font-display font-bold text-primary mb-4 tracking-tighter">20+</div>
              <div className="text-xs font-mono font-medium text-secondary uppercase tracking-widest">Clients</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl md:text-7xl font-display font-bold text-primary mb-4 tracking-tighter">5+</div>
              <div className="text-xs font-mono font-medium text-secondary uppercase tracking-widest">Years</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
