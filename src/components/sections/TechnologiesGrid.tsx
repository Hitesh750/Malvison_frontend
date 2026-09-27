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
      stagger: 0.05,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 bg-background border-t border-border">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="mb-20 max-w-2xl">
          <h4 className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-6">
            Core Stack
          </h4>
          <h2 className="text-[2.5rem] md:text-[4rem] font-medium text-primary leading-[1.05] tracking-tight">
            Built on <br /> Modern Technology.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border border border-border">
          {TECHNOLOGIES.map((tech) => (
            <div key={tech.category} className="tech-box flex flex-col bg-white p-8 h-full hover:bg-white/30 transition-colors duration-300">
              <h3 className="text-xs font-semibold tracking-[0.2em] text-secondary/70 mb-8 uppercase">
                {tech.category}
              </h3>
              <ul className="flex flex-col gap-4">
                {tech.items.map((item) => (
                  <li key={item} className="text-primary font-medium text-sm">
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
