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
    <section ref={container} className="py-24 md:py-40 bg-white relative z-10 border-t border-border">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="about-content max-w-5xl mx-auto flex flex-col items-center text-center">
          
          <h2 className="text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[7.5rem] font-medium text-primary leading-[1] tracking-tight mb-12">
            We turn complex <br />
            technology into <br />
            <span className="text-secondary/70">simple experiences.</span>
          </h2>

          <p className="text-xl md:text-3xl text-secondary/90 font-light leading-relaxed mb-24 max-w-4xl">
            We are a specialized digital engineering partner. We combine deep technical expertise with rigorous product design to build platforms that scale and AI solutions that automate the impossible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 w-full border-t border-border pt-16">
            <div className="flex flex-col items-center">
              <div className="text-[5rem] md:text-[7rem] font-medium text-primary mb-2 tracking-tighter leading-none">50+</div>
              <div className="text-xs font-semibold text-secondary uppercase tracking-[0.2em]">Projects Shipped</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[5rem] md:text-[7rem] font-medium text-primary mb-2 tracking-tighter leading-none">20+</div>
              <div className="text-xs font-semibold text-secondary uppercase tracking-[0.2em]">Global Clients</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[5rem] md:text-[7rem] font-medium text-primary mb-2 tracking-tighter leading-none">5+</div>
              <div className="text-xs font-semibold text-secondary uppercase tracking-[0.2em]">Years Operating</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
