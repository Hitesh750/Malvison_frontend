import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PROCESS_STEPS = [
  { num: "01", title: "Discover" },
  { num: "02", title: "Strategy" },
  { num: "03", title: "Design" },
  { num: "04", title: "Engineer" },
  { num: "05", title: "Launch" },
  { num: "06", title: "Scale" },
];

export function ProcessTimeline() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const steps = gsap.utils.toArray(".process-step");
    steps.forEach((step: any, i) => {
      gsap.from(step, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        scrollTrigger: {
          trigger: step,
          start: "top 85%",
        }
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 bg-background overflow-hidden relative z-10 border-t border-border">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-border pb-12">
          <h2 className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-medium text-primary tracking-tight leading-[1]">
            From Idea <br />
            to Impact.
          </h2>
          <p className="max-w-md text-secondary/90 font-light text-xl md:text-2xl leading-relaxed">
            A rigorous, battle-tested methodology for engineering digital products that scale.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-16 relative z-10">
          {PROCESS_STEPS.map((step) => (
            <div key={step.num} className="process-step flex flex-col group cursor-default">
              <div className="text-xs font-semibold tracking-[0.2em] text-secondary/70 mb-6 group-hover:text-primary transition-colors">
                {step.num}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-medium text-primary mb-6">
                {step.title}
              </h3>
              
              <div className="w-full h-[2px] bg-border relative overflow-hidden">
                 <div className="absolute top-0 left-0 h-full w-0 bg-primary-deep group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
