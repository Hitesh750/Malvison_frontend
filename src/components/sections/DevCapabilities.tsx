import React, { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const CAPABILITIES = [
  "Web Applications",
  "Enterprise Software",
  "Mobile Applications",
  "API Development",
  "Cloud Architecture",
  "SaaS Platforms",
];

export function DevCapabilities() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      }
    });

    tl.from(".dev-text-content > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    })
    .from(".dev-capability-item", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out",
    }, "-=0.4");
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 bg-background overflow-hidden relative border-t border-border">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div className="order-2 lg:order-1 relative bg-white border border-border p-8 md:p-12">
           <div className="font-mono text-sm md:text-base text-slate-800 space-y-3">
            <div className="text-secondary/70">{"// High-performance architecture"}</div>
            <div><span className="font-semibold">export async function</span> <span className="font-bold">initializeSystem</span>() {"{"}</div>
            <div className="pl-6">{"const cluster = await"} <span className="font-semibold">CloudManager</span>.provision();</div>
            <div className="pl-6">{"const db ="} <span className="font-semibold">Database</span>.connect({"{ poolSize: 100 }"});</div>
            <div className="pl-6 mt-6 text-secondary/70">{"// Ensure zero downtime"}</div>
            <div className="pl-6">{"return new"} <span className="font-semibold">Application</span>(cluster, db);</div>
            <div>{"}"}</div>
            <div className="mt-6"><span className="font-semibold">interface</span> <span className="font-bold">ScalableArchitecture</span> {"{"}</div>
            <div className="pl-6">{"resilience: "}<span className="font-semibold">'maximum'</span>;</div>
            <div className="pl-6">{"latency: "}<span className="font-semibold">'ultra-low'</span>;</div>
            <div>{"}"}</div>
          </div>
        </div>

        <div className="dev-text-content order-1 lg:order-2">
          <div className="text-xs font-semibold text-secondary uppercase tracking-[0.2em] mb-8">
            Software Engineering
          </div>
          <h2 className="text-[3rem] md:text-[4rem] font-medium text-primary mb-8 leading-[1.05] tracking-tight">
            Engineered for scale. <br /> Built for impact.
          </h2>
          <p className="text-xl text-secondary/90 font-light mb-12 max-w-lg leading-relaxed">
            We build scalable, secure, and performant software solutions. Whether you need a massive enterprise platform or a sleek mobile application, our engineering standards never compromise.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-12">
            {CAPABILITIES.map((cap) => (
              <div key={cap} className="dev-capability-item px-4 py-2 border border-border bg-white text-sm font-medium text-primary">
                {cap}
              </div>
            ))}
          </div>
          
          <Link 
            to="/services/software-development"
            className="inline-flex items-center gap-4 text-sm font-semibold text-primary uppercase tracking-widest hover:text-secondary transition-colors"
          >
            Explore Engineering <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
