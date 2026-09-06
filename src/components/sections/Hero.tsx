import React, { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Orb entrance
    tl.fromTo(".hero-orb", 
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 3, ease: "power2.out" }
    )
    .to(".hero-orb-ring-1", {
      rotate: 360,
      duration: 120,
      repeat: -1,
      ease: "none"
    }, 0)
    .to(".hero-orb-ring-2", {
      rotate: -360,
      duration: 180,
      repeat: -1,
      ease: "none"
    }, 0)
    
    // Text entrance
    .fromTo(".hero-eyebrow",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      1
    )
    .fromTo(".hero-headline-line", 
      { y: 40, opacity: 0, rotateX: -10 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.15 },
      1.2
    )
    .fromTo(".hero-description",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      1.6
    )
    .fromTo(".hero-cta",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
      1.8
    );

    // Interactive Mouse Parallax
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Calculate normalized mouse position (-1 to 1)
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;

      // Move the orb slightly opposite to the mouse
      gsap.to(".hero-orb", {
        x: -x * 30, // 30px max movement
        y: -y * 30,
        rotationX: y * 5,
        rotationY: x * 5,
        ease: "power2.out",
        duration: 1
      });
    };

    window.addEventListener("pointermove", handleMouseMove);
    return () => window.removeEventListener("pointermove", handleMouseMove);
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="relative min-h-[105vh] flex items-center justify-center pt-24 pb-32 overflow-hidden bg-background"
    >
      {/* Subtle technical grid overlay */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(to right, rgba(8, 120, 232, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(8, 120, 232, 0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />
      
      {/* WHITE + NAVY + BLUE ORBITAL SYSTEM */}
      <div className="hero-orb absolute top-[-30%] lg:top-[-40%] left-1/2 -translate-x-1/2 w-[160vw] h-[160vw] max-w-[1600px] max-h-[1600px] rounded-full pointer-events-none z-0 flex items-center justify-center">
        
        {/* Soft blue central glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[rgba(8,120,232,0.08)] via-[rgba(8,120,232,0.02)] to-transparent blur-[80px]" />
        
        {/* Outer Orbital Ring 1 */}
        <div className="hero-orb-ring-1 absolute inset-[15%] rounded-full border border-accent/20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-accent-bright to-transparent blur-[1px]" />
          <div className="absolute bottom-[20%] left-0 w-[1px] h-32 bg-gradient-to-b from-transparent via-primary-deep/30 to-transparent" />
        </div>

        {/* Inner Orbital Ring 2 */}
        <div className="hero-orb-ring-2 absolute inset-[22%] rounded-full border border-primary-navy/10">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-primary-deep/40 to-transparent" />
          {/* Orbital dot */}
          <div className="absolute top-[10%] right-[15%] w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(8,120,232,0.5)]" />
        </div>
        
        {/* Deep Navy/White architectural center depth */}
        <div className="absolute inset-[30%] rounded-full bg-white shadow-[inset_0_40px_100px_rgba(6,27,69,0.03)] border border-white" />
      </div>

      {/* Decorative technical markers */}
      <div className="absolute left-8 lg:left-16 top-1/3 -translate-y-1/2 text-[9px] font-mono tracking-widest text-secondary/40 hidden md:flex flex-col gap-8 z-10">
        <div>ORB_SYS_v2</div>
        <div className="w-[1px] h-16 bg-gradient-to-b from-accent/30 to-transparent ml-2" />
      </div>
      
      <div className="container-lux relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4 mt-16">
        
        {/* Eyebrow */}
        <div className="hero-eyebrow text-[11px] md:text-xs font-mono font-medium tracking-[0.2em] text-accent uppercase mb-8 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-accent/50" />
          Malvision Technologies
          <span className="w-8 h-[1px] bg-accent/50" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-[80px] font-display font-bold text-primary leading-[1.05] tracking-tight mb-8" style={{ perspective: "1000px" }}>
          <div className="hero-headline-line origin-bottom">Engineering the</div>
          <div className="hero-headline-line origin-bottom">Next Generation</div>
          <div className="hero-headline-line origin-bottom">
            of <span className="text-accent italic font-medium pr-2">Digital.</span>
          </div>
        </h1>

        {/* Description */}
        <p className="hero-description text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          We design and engineer scalable digital products, platforms, and intelligent technology solutions built for ambitious businesses.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link to="/contact" className="hero-cta group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent border border-transparent rounded-full text-white font-medium hover:bg-primary-navy transition-all duration-300 shadow-[0_8px_30px_rgba(8,120,232,0.2)] hover:shadow-[0_8px_40px_rgba(11,46,115,0.3)] overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            Start a Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
