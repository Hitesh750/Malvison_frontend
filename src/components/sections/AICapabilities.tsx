import React, { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const CAPABILITIES = [
  { label: "Autonomous Agents", desc: "Self-correcting AI systems that execute complex multi-step workflows." },
  { label: "Intelligent Copilots", desc: "Context-aware assistants embedded deeply into your core product." },
  { label: "RAG Architecture", desc: "Retrieval-Augmented Generation built on enterprise vector databases." },
  { label: "Workflow Automation", desc: "Intelligent routing and decision-making for business operations." },
  { label: "Custom LLMs", desc: "Fine-tuned models deployed securely within your infrastructure." },
  { label: "Predictive ML", desc: "Traditional machine learning models for forecasting and analysis." },
];

export function AICapabilities() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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

    gsap.from(".ai-cap-row", {
      scrollTrigger: {
        trigger: ".ai-cap-list",
        start: "top 80%",
      },
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-border">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        <div className="lg:col-span-5 ai-text-reveal sticky top-32">
          <div className="text-xs font-semibold text-secondary uppercase tracking-[0.2em] mb-8">
            Artificial Intelligence
          </div>
          <h2 className="text-[3rem] md:text-[4rem] font-medium text-primary mb-8 leading-[1.05] tracking-tight">
            Beyond the hype. <br />
            Real AI that works.
          </h2>
          <p className="text-xl text-secondary/90 font-light mb-12 max-w-md leading-relaxed">
            We don't just wrapper APIs. We engineer robust, context-aware AI systems that integrate deeply into your business logic, automating the complex and augmenting your team.
          </p>
          
          <Link 
            to="/services/ai-agents"
            className="inline-flex items-center gap-4 text-sm font-semibold text-primary uppercase tracking-widest hover:text-secondary transition-colors"
          >
            Explore AI Architecture <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="lg:col-span-7 ai-cap-list flex flex-col border-t border-border">
          {CAPABILITIES.map((cap, i) => (
            <div 
              key={cap.label}
              className="ai-cap-row py-8 border-b border-border flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 group"
            >
              <div className="text-xs font-mono text-secondary/70 mt-2">0{i + 1}</div>
              <div>
                <h3 className="text-2xl font-medium text-primary mb-2">{cap.label}</h3>
                <p className="text-secondary/90 leading-relaxed max-w-sm">{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
