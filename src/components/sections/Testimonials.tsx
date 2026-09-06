import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Card, CardContent } from "@/components/ui/card";

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
    gsap.from(".testimonial-card", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <section ref={container} className="section-lux bg-primary text-white">
      <div className="container-lux">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
            Trusted by Technical Leaders
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We partner with CTOs, founders, and engineering teams who demand excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <Card key={i} variant="testimonial" className="testimonial-card">
              <CardContent className="pt-8 md:pt-10 h-full flex flex-col">
                <div className="text-accent mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.41 14.5916C17.747 11.2583 18.416 8.59163 18.416 6.59163C18.416 4.92496 17.805 3.52496 16.583 2.39163C15.416 1.1583 13.916 0.541626 12.083 0.541626C11.472 0.541626 10.944 0.652737 10.5 0.87496L10.916 4.49996C11.583 4.22218 12.194 4.08329 12.75 4.08329C13.583 4.08329 14.222 4.41663 14.667 5.08329C15.167 5.6944 15.417 6.63885 15.417 7.91663C15.417 8.36107 15.305 8.86107 15.083 9.41663L11.5 8.16663L8.917 14.5833L14.017 21ZM5.09998 21L7.49298 14.5916C8.82998 11.2583 9.49898 8.59163 9.49898 6.59163C9.49898 4.92496 8.88798 3.52496 7.66598 2.39163C6.49898 1.1583 4.99898 0.541626 3.16598 0.541626C2.55498 0.541626 2.02698 0.652737 1.58298 0.87496L1.99898 4.49996C2.66598 4.22218 3.27698 4.08329 3.83298 4.08329C4.66598 4.08329 5.30498 4.41663 5.74998 5.08329C6.24998 5.6944 6.49998 6.63885 6.49998 7.91663C6.49998 8.36107 6.38898 8.86107 6.16598 9.41663L2.58298 8.16663L0 14.5833L5.09998 21Z" />
                  </svg>
                </div>
                <p className="italic text-lg text-white mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-accent">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-white/60">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
