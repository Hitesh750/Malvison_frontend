import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  const headline = "We engineer digital products, platforms and experiences people believe in.";
  
  // Split text into words for staggered animation
  const words = headline.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 80,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative min-h-[95vh] w-full flex items-center px-6 md:px-12 lg:px-24 bg-background overflow-hidden">
      
      <div className="w-full max-w-[1400px] mx-auto pt-24 md:pt-32 pb-16">
        
        {/* Massive Typography Headline */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-x-3 md:gap-x-6 lg:gap-x-8 gap-y-1 md:gap-y-4"
        >
          {words.map((word, index) => (
            <div key={index} className="overflow-hidden pb-2 md:pb-4">
              <motion.span
                variants={child}
                className="inline-block text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.5rem] font-medium tracking-tight leading-[0.95] text-primary"
              >
                {word}
              </motion.span>
            </div>
          ))}
        </motion.div>

        {/* Minimalist Lower Information Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          className="mt-16 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-border pt-8"
        >
          <div className="col-span-1 md:col-span-4 lg:col-span-3">
             <p className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Strategic Design & Tech</p>
          </div>
          <div className="col-span-1 md:col-span-8 lg:col-span-6">
            <p className="text-lg md:text-2xl text-secondary/90 font-light leading-relaxed max-w-2xl">
              Malvision Technologies is a founder-led strategic design studio connecting strategy, brand and product. We help ambitious teams turn ideas into clear digital experiences people trust and use.
            </p>
          </div>
        </motion.div>

      </div>
      
    </section>
  );
}
