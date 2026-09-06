import React, { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Code2, LayoutTemplate, Database, Server, Smartphone, Cloud } from "lucide-react";

const CAPABILITIES = [
  { icon: LayoutTemplate, label: "Web Applications" },
  { icon: Database, label: "Enterprise Software" },
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: Server, label: "API Development" },
  { icon: Cloud, label: "Cloud Architecture" },
  { icon: Code2, label: "SaaS Platforms" },
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

    tl.from(".dev-visual-content", {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    })
    .from(".dev-text-content", {
      x: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.6")
    .from(".dev-capability-card", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    }, "-=0.4");
  }, { scope: container });

  return (
    <section ref={container} className="section-lux bg-background overflow-hidden relative">
      <div className="container-lux relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="dev-visual-content order-2 lg:order-1 relative h-[500px] rounded-3xl glass-card border-border overflow-hidden p-8 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-8">
             <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full bg-red-400" />
               <div className="w-3 h-3 rounded-full bg-amber-400" />
               <div className="w-3 h-3 rounded-full bg-green-400" />
             </div>
             <div className="text-xs font-mono text-secondary bg-primary/5 px-3 py-1 rounded-full">src/core/engine.ts</div>
          </div>
          
          <div className="font-mono text-sm text-primary/80 space-y-2 flex-grow overflow-hidden">
            <div className="opacity-50">{"// High-performance architecture"}</div>
            <div><span className="text-accent">export async function</span> <span className="text-primary font-bold">initializeSystem</span>() {"{"}</div>
            <div className="pl-4">{"const cluster = await"} <span className="text-accent">CloudManager</span>.provision();</div>
            <div className="pl-4">{"const db ="} <span className="text-accent">Database</span>.connect({"{ poolSize: 100 }"});</div>
            <div className="pl-4 mt-4 opacity-50">{"// Ensure zero downtime"}</div>
            <div className="pl-4">{"return new"} <span className="text-accent">Application</span>(cluster, db);</div>
            <div>{"}"}</div>
            <div className="mt-4"><span className="text-accent">interface</span> <span className="text-primary font-bold">ScalableArchitecture</span> {"{"}</div>
            <div className="pl-4">{"resilience: "}<span className="text-accent">'maximum'</span>;</div>
            <div className="pl-4">{"latency: "}<span className="text-accent">'ultra-low'</span>;</div>
            <div>{"}"}</div>
          </div>
        </div>

        <div className="dev-text-content order-1 lg:order-2">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary font-medium text-sm mb-6 border border-primary/10">
            Software Engineering
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Engineered for scale. Built for impact.
          </h2>
          <p className="text-lg text-secondary mb-8 max-w-lg">
            We build scalable, secure, and performant software solutions. Whether you need a massive enterprise platform or a sleek mobile application, our engineering standards never compromise.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            {CAPABILITIES.map((cap) => (
              <div key={cap.label} className="dev-capability-card flex items-center gap-3 p-4 rounded-xl border border-border bg-white shadow-sm hover:shadow-md transition-shadow">
                <cap.icon className="w-5 h-5 text-accent shrink-0" />
                <span className="font-medium text-sm text-primary">{cap.label}</span>
              </div>
            ))}
          </div>
          
          <Link to="/services/software-development">
            <Button variant="default" size="lg">
              Explore Development Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
