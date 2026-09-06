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
    // Fade in steps
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
    <section ref={container} className="py-32 md:py-40 bg-background-process overflow-hidden relative z-10 border-t border-border">
      <div className="container-lux">
        
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-border/50 pb-12">
          <h2 className="text-5xl md:text-[80px] font-display font-bold text-primary-navy tracking-tight leading-[1.05]">
            From Idea <br />
            to Impact.
          </h2>
          <p className="max-w-xs text-primary-deep/70 font-light">
            A rigorous, battle-tested methodology for engineering digital products that scale.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-16 relative z-10">
          {PROCESS_STEPS.map((step) => (
            <div key={step.num} className="process-step flex flex-col group cursor-default">
              
              <div className="text-[11px] font-mono tracking-widest text-primary-deep/50 mb-6 group-hover:text-accent transition-colors">
                {step.num}
              </div>
              
              <h3 className="text-2xl font-display font-semibold text-primary-deep mb-6">
                {step.title}
              </h3>
              
              <div className="w-full h-[1px] bg-border relative overflow-hidden">
                 <div className="absolute top-0 left-0 h-full w-0 bg-accent group-hover:w-full transition-all duration-700 ease-out" />
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
