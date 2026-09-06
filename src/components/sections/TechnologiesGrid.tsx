import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TECHNOLOGIES = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP"] },
  { category: "Backend", items: ["Node.js", "Python", "Go", "PostgreSQL", "Redis"] },
  { category: "Mobile", items: ["React Native", "Swift", "Kotlin", "Flutter", "SQLite"] },
  { category: "AI", items: ["OpenAI", "Anthropic", "TensorFlow", "PyTorch", "LangChain"] },
  { category: "Cloud", items: ["AWS", "Google Cloud", "Azure", "Serverless", "Edge"] },
  { category: "Data", items: ["Snowflake", "Databricks", "Pinecone", "Kafka", "dbt"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Vercel"] },
  { category: "Infrastructure", items: ["Linux", "Nginx", "CDN", "Microservices", "GraphQL"] },
];

export function TechnologiesGrid() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".tech-box", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-primary-deep relative overflow-hidden">
      {/* Subtle Blue Atmospheric Lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-bright/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
      
      {/* Technical Grid Lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container-lux relative z-10">
        
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 text-[10px] font-mono tracking-[0.2em] text-accent-bright uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-bright animate-pulse" />
            Core Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Built on <br className="md:hidden" /> Modern Technology.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 p-[1px] rounded-sm">
          {TECHNOLOGIES.map((tech) => (
            <div key={tech.category} className="tech-box flex flex-col bg-primary-deep p-8 h-full relative overflow-hidden group hover:bg-primary-navy/20 transition-colors duration-500">
              
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <h3 className="text-[11px] font-mono tracking-[0.2em] text-white/50 mb-6 uppercase flex items-center justify-between">
                {tech.category}
                <span className="w-1 h-1 bg-accent/50 rounded-full" />
              </h3>
              <ul className="flex flex-col gap-3 relative z-10">
                {tech.items.map((item) => (
                  <li key={item} className="text-white/90 font-medium text-sm hover:text-accent-bright transition-colors cursor-default">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
