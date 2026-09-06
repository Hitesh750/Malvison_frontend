import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const container = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useGSAP(() => {
    gsap.to(".cta-orbital-ring", {
      rotate: 45,
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.from(".cta-content > *", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, { scope: container });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Wire up to actual backend endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section ref={container} className="relative py-32 md:py-40 overflow-hidden bg-primary-deep border-t border-white/5">
      
      {/* Soft blue atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-bright/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Blue Orbital Ring */}
      <div className="cta-orbital-ring absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full border border-accent/20 pointer-events-none opacity-60" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-accent-bright/40 to-transparent" />
      </div>

      {/* Technical details */}
      <div className="absolute left-12 top-12 text-[10px] font-mono tracking-[0.2em] text-white/20 hidden md:flex flex-col items-start gap-1">
        <div>SYS_READY</div>
        <div>INIT_SEQUENCE</div>
      </div>

      <div className="container-lux relative z-10">
        <div className="cta-content max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16">
          
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
              Have an idea <br />
              <span className="font-serif italic text-accent-bright/90 font-normal">worth building?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/60 font-light mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Let's turn your next ambitious idea into a digital product built to scale. Tell us what you're trying to achieve.
            </p>

            <div className="hidden lg:flex flex-col gap-4 text-white/40 font-mono text-xs tracking-widest mt-12">
              <div>// START A CONVERSATION</div>
              <div>// BUILD THE FUTURE</div>
            </div>
          </div>
          
          <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 relative overflow-hidden">
             {/* Subtle form glow */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-[50px] -z-10 translate-x-1/2 -translate-y-1/2" />
             
             {isSuccess ? (
               <div className="flex flex-col items-center justify-center text-center py-12 h-full">
                 <div className="w-16 h-16 rounded-full bg-accent/20 text-accent-bright flex items-center justify-center mb-6">
                   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                   </svg>
                 </div>
                 <h3 className="text-2xl font-display font-semibold text-white mb-4">Request Received</h3>
                 <p className="text-white/60 mb-8">We'll review your project details and get back to you shortly.</p>
                 <Button onClick={() => setIsSuccess(false)} variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white">
                   Send another message
                 </Button>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                 <div className="flex flex-col gap-2">
                   <label htmlFor="name" className="text-xs font-mono tracking-widest text-white/60 uppercase">Name</label>
                   <input 
                     id="name"
                     type="text" 
                     required
                     placeholder="John Doe"
                     className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent-bright focus:border-transparent transition-all"
                   />
                 </div>
                 <div className="flex flex-col gap-2">
                   <label htmlFor="email" className="text-xs font-mono tracking-widest text-white/60 uppercase">Email</label>
                   <input 
                     id="email"
                     type="email" 
                     required
                     placeholder="john@company.com"
                     className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent-bright focus:border-transparent transition-all"
                   />
                 </div>
                 <div className="flex flex-col gap-2">
                   <label htmlFor="message" className="text-xs font-mono tracking-widest text-white/60 uppercase">Project Details</label>
                   <textarea 
                     id="message"
                     required
                     rows={4}
                     placeholder="Tell us about your project..."
                     className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent-bright focus:border-transparent transition-all resize-none"
                   />
                 </div>
                 <Button 
                   type="submit" 
                   disabled={isSubmitting}
                   className="mt-2 group relative inline-flex items-center justify-center gap-2 w-full py-6 bg-accent hover:bg-accent-bright text-white font-medium transition-all duration-300 rounded-md overflow-hidden border-none"
                 >
                   {isSubmitting ? (
                     <Loader2 className="w-5 h-5 animate-spin" />
                   ) : (
                     <>
                       <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                       Submit Request <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </>
                   )}
                 </Button>
               </form>
             )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
