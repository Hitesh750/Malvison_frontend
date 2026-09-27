import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, Loader2 } from "lucide-react";

export function CTASection() {
  const container = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useGSAP(() => {
    gsap.from(".cta-content > *", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, { scope: container });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section ref={container} className="relative py-24 md:py-40 overflow-hidden bg-background border-t border-border">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="cta-content flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16">
          
          <div className="flex-1 w-full text-left">
            <h4 className="text-xs font-semibold text-secondary uppercase tracking-[0.2em] mb-8">
              Initiate Project
            </h4>
            <h2 className="text-[3.5rem] md:text-[5rem] lg:text-[7rem] font-medium text-primary mb-8 leading-[0.95] tracking-tight">
              Have an idea <br />
              <span className="text-secondary/70">worth building?</span>
            </h2>
            <p className="text-xl md:text-2xl text-secondary/90 font-light mb-12 max-w-lg leading-relaxed">
              Let's turn your next ambitious idea into a digital product built to scale. Tell us what you're trying to achieve.
            </p>
          </div>
          
          <div className="w-full max-w-md bg-white border border-border p-8 md:p-10 shadow-sm">
             {isSuccess ? (
               <div className="flex flex-col items-center text-center py-12 h-full">
                 <div className="w-16 h-16 bg-white/50 text-primary flex items-center justify-center mb-6">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                   </svg>
                 </div>
                 <h3 className="text-2xl font-medium text-primary mb-4">Request Received</h3>
                 <p className="text-secondary/90 mb-8 leading-relaxed">We'll review your project details and get back to you shortly.</p>
                 <button onClick={() => setIsSuccess(false)} className="text-sm font-semibold uppercase tracking-widest text-primary hover:text-secondary transition-colors">
                   Send another message &rarr;
                 </button>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                 <div className="flex flex-col gap-2">
                   <label htmlFor="name" className="text-[10px] font-semibold tracking-[0.2em] text-secondary uppercase">Name</label>
                   <input 
                     id="name" type="text" required placeholder="John Doe"
                     className="bg-transparent border-b border-border/80 py-3 text-primary placeholder:text-white/60 focus:outline-none focus:border-[#111111] transition-colors rounded-none"
                   />
                 </div>
                 <div className="flex flex-col gap-2">
                   <label htmlFor="email" className="text-[10px] font-semibold tracking-[0.2em] text-secondary uppercase">Email</label>
                   <input 
                     id="email" type="email" required placeholder="john@company.com"
                     className="bg-transparent border-b border-border/80 py-3 text-primary placeholder:text-white/60 focus:outline-none focus:border-[#111111] transition-colors rounded-none"
                   />
                 </div>
                 <div className="flex flex-col gap-2 mt-4">
                   <label htmlFor="message" className="text-[10px] font-semibold tracking-[0.2em] text-secondary uppercase">Project Details</label>
                   <textarea 
                     id="message" required rows={4} placeholder="Tell us about your project..."
                     className="bg-transparent border-b border-border/80 py-3 text-primary placeholder:text-white/60 focus:outline-none focus:border-[#111111] transition-colors resize-none rounded-none"
                   />
                 </div>
                 <button 
                   type="submit" disabled={isSubmitting}
                   className="mt-6 flex items-center justify-center gap-3 w-full py-5 bg-primary-deep text-white text-sm font-semibold hover:bg-black transition-colors"
                 >
                   {isSubmitting ? (
                     <Loader2 className="w-4 h-4 animate-spin" />
                   ) : (
                     <>Submit Request <ArrowRight className="w-4 h-4" /></>
                   )}
                 </button>
               </form>
             )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
