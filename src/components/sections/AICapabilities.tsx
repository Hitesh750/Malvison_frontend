import React, { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { BrainCircuit, MessageSquare, DatabaseZap, GitMerge, Fingerprint, LineChart } from "lucide-react";

const CAPABILITIES = [
  { label: "Autonomous Agents", icon: BrainCircuit, angle: 0 },
  { label: "Intelligent Copilots", icon: MessageSquare, angle: 60 },
  { label: "RAG Systems", icon: DatabaseZap, angle: 120 },
  { label: "Workflow Automation", icon: GitMerge, angle: 180 },
  { label: "Custom LLMs", icon: Fingerprint, angle: 240 },
  { label: "Predictive ML", icon: LineChart, angle: 300 },
];

export function AICapabilities() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal text
    gsap.from(".ai-text-reveal > *", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    });

    // Reveal the core
    gsap.fromTo(".ai-core", 
      { scale: 0.5, opacity: 0 },
      {
        scale: 1, 
        opacity: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: ".ai-visualization",
          start: "top 80%",
        }
      }
    );

    // Continuous rotation for the orbital rings
    gsap.to(".ai-orbit-ring", {
      rotate: 360,
      duration: 40,
      repeat: -1,
      ease: "linear"
    });

    // Reveal orbital items
    gsap.from(".ai-orbital-item", {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: ".ai-visualization",
        start: "top 70%",
      }
    });

  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-[#050A15] relative overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 bg-primary/20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(at 0% 0%, #0F172A 0, transparent 50%), radial-gradient(at 100% 100%, #1E1B4B 0, transparent 50%)' }} />

      <div className="container-lux relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="ai-text-reveal">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
            Artificial Intelligence
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Beyond the hype. <br />
            <span className="text-gradient-malvision">Real AI that works.</span>
          </h2>
          <p className="text-xl text-blue-100/60 font-light mb-10 max-w-lg leading-relaxed">
            We don't just wrapper APIs. We engineer robust, context-aware AI systems that integrate deeply into your business logic, automating the complex and augmenting your team.
          </p>
          
          <Link to="/services/ai-agents">
            <Button size="lg" className="h-14 px-8 text-base shadow-[0_0_30px_rgba(46,111,242,0.3)]">
              Explore AI Architecture
            </Button>
          </Link>
        </div>

        <div className="ai-visualization relative h-[500px] w-full flex items-center justify-center">
          {/* Orbital Rings */}
          <div className="ai-orbit-ring absolute w-[400px] h-[400px] rounded-full border border-white/5" />
          <div className="ai-orbit-ring absolute w-[300px] h-[300px] rounded-full border border-accent/20 border-dashed" style={{ animationDirection: "reverse", animationDuration: "60s" }} />
          
          {/* Central Core */}
          <div className="ai-core relative w-32 h-32 rounded-full bg-[#0A1224] border border-white/10 shadow-[0_0_80px_rgba(46,111,242,0.4)] flex items-center justify-center z-20">
            <div className="absolute inset-0 bg-gradient-malvision opacity-20 rounded-full animate-pulse" />
            <BrainCircuit className="w-12 h-12 text-white" />
          </div>

          {/* Orbital Items */}
          {CAPABILITIES.map((cap) => {
            // Position items along the outer ring (radius 200px)
            const radius = 200;
            const x = Math.cos((cap.angle * Math.PI) / 180) * radius;
            const y = Math.sin((cap.angle * Math.PI) / 180) * radius;
            
            return (
              <div 
                key={cap.label}
                className="ai-orbital-item absolute z-10 flex flex-col items-center gap-3"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0A1224] border border-white/10 flex items-center justify-center shadow-lg text-accent backdrop-blur-xl">
                  <cap.icon className="w-5 h-5" />
                </div>
                <div className="text-xs font-medium text-white/80 bg-black/40 px-3 py-1 rounded-full backdrop-blur-md border border-white/5 whitespace-nowrap">
                  {cap.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
