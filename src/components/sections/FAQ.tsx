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
    <section className="section-lux bg-background border-y border-border">
      <div className="container-lux max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Technical and operational details about working with Malvision Technologies.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display font-semibold text-lg text-primary hover:text-accent transition-colors py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-secondary leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
