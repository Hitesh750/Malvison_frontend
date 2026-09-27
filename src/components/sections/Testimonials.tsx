import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TESTIMONIALS = [
  {
    quote: "Malvision didn't just build us software; they re-engineered our operational model with AI. We've seen a 40% reduction in manual processing errors since launch.",
    author: "Elena Rodriguez",
    role: "COO, Nexus Logistics",
  },
  {
    quote: "Finding an engineering team that genuinely understands both deeply technical ML concepts and practical business applications is rare. Malvision is that team.",
    author: "Marcus Chen",
    role: "Founder, FinGuard",
  },
  {
    quote: "The web platform they delivered handles our enterprise traffic flawlessly. Their commitment to code quality and scalable architecture is unmatched.",
    author: "Sarah Jenkins",
    role: "VP Engineering, CloudScale",
  }
];

export function Testimonials() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".testimonial-item", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 bg-primary-deep text-white overflow-hidden border-t border-white/5">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="mb-24">
          <h4 className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-6">
            Social Proof
          </h4>
          <h2 className="text-[2.5rem] md:text-[4rem] font-medium text-white leading-[1.05] tracking-tight">
            Trusted by <br /> Technical Leaders.
          </h2>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {TESTIMONIALS.map((testimonial, i) => (
            <div key={i} className="testimonial-item py-12 md:py-16 border-b border-white/10 grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-9">
                <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white/60">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="lg:col-span-3 flex flex-col pt-2">
                <div className="font-semibold text-lg text-white mb-1">{testimonial.author}</div>
                <div className="text-sm text-secondary uppercase tracking-widest">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
