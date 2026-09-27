import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FAQS = [
  {
    q: "How do you ensure data security when building AI agents?",
    a: "We implement strict data isolation protocols, utilizing VPCs, encrypted data at rest and in transit, and enterprise-grade LLM endpoints (like Azure OpenAI) that guarantee zero training on customer data.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Depending on complexity, a bespoke AI solution or web platform typically takes 8 to 16 weeks from discovery to initial launch. We follow agile sprints with bi-weekly deliverable reviews.",
  },
  {
    q: "Do you integrate with legacy systems?",
    a: "Yes. A significant portion of our work involves building intelligent middleware and robust APIs that allow modern web applications and AI agents to seamlessly interact with legacy, on-premise infrastructure.",
  },
  {
    q: "How do you handle maintenance and scaling post-launch?",
    a: "We offer comprehensive support retainers. This includes 24/7 monitoring, automated scaling configurations (via Kubernetes or Serverless architectures), and regular security patch cycles.",
  },
  {
    q: "What is the difference between an AI Agent and an AI Chatbot?",
    a: "A chatbot typically responds to user queries based on a knowledge base (RAG). An AI Agent operates autonomously, executing multi-step reasoning to complete complex workflows, interact with APIs, and take actions on your behalf.",
  }
];

export function FAQ() {
  return (
    <section className="py-24 md:py-32 bg-white border-y border-border">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <h2 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-medium text-primary leading-none tracking-tight">
            Common <br /> Questions.
          </h2>
          <p className="text-xl text-secondary/90 font-light max-w-md pt-4 leading-relaxed">
            Technical and operational details about partnering with Malvision Technologies.
          </p>
        </div>

        <div className="border-t border-border">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="text-left font-medium text-xl md:text-2xl text-primary hover:text-secondary transition-colors py-8">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-secondary/90 leading-relaxed pb-8 max-w-4xl">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}
