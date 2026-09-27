import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Malvion Technologies" },
      {
        name: "description",
        content:
          "Get in touch with Malvion Technologies. Email, phone, and project inquiry form.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      project_budget: formData.get("budget"),        
      project_description: formData.get("message"),  
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      await res.json();
      setSent(true);
    } catch (error) {
      console.error(error);
      alert("Error sending message");
    }
  }

  return (
    <SiteLayout>
      <section className="bg-background py-24 md:py-32">
        <div className="container-lux mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <div className="flex flex-col">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-8">
              Contact
            </div>
            <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-medium text-primary leading-[0.95] tracking-tight mb-8">
              Let's engineer <br />
              <span className="text-secondary/70">something remarkable.</span>
            </h1>
            <p className="text-xl text-secondary/90 font-light leading-relaxed max-w-lg mb-16">
              From AI-powered platforms and cloud-native architectures to scalable
              web and mobile products — share your idea, tech stack, or business
              challenge.
            </p>

            <div className="flex flex-col gap-12 border-t border-border pt-12">
              <div className="flex flex-col gap-2">
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-secondary">Email</div>
                <a href="mailto:hiteshmalviya06@gmail.com" className="text-2xl font-medium text-primary hover:text-secondary transition-colors">
                  hiteshmalviya06@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-secondary">Phone</div>
                <a href="tel:+919509722217" className="text-2xl font-medium text-primary hover:text-secondary transition-colors">
                  +91 95097 22217
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-secondary">Location</div>
                <div className="text-xl text-primary font-light">
                  Jodhpur, India <br /> (Monday – Friday, 10:00 — 19:00 IST)
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-white border border-border p-8 md:p-12 shadow-sm relative top-0 lg:sticky lg:top-32">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-20 h-full">
                <div className="w-20 h-20 bg-background text-primary flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-medium text-primary mb-4">Request Received</h3>
                <p className="text-lg text-secondary font-light mb-12 max-w-sm">
                  Thanks for reaching out. We'll review your requirements and respond within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="text-sm font-semibold uppercase tracking-widest text-primary hover:text-secondary transition-colors"
                >
                  Send another message &rarr;
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <h3 className="text-2xl font-medium text-primary mb-4">Project Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-semibold tracking-[0.2em] text-secondary uppercase">Name</label>
                    <input 
                      id="name" name="name" type="text" required placeholder="Hitesh Malviya"
                      className="bg-transparent border-b border-border/80 py-3 text-primary placeholder:text-secondary/50 focus:outline-none focus:border-primary transition-colors rounded-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] font-semibold tracking-[0.2em] text-secondary uppercase">Email</label>
                    <input 
                      id="email" name="email" type="email" required placeholder="you@company.com"
                      className="bg-transparent border-b border-border/80 py-3 text-primary placeholder:text-secondary/50 focus:outline-none focus:border-primary transition-colors rounded-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-[10px] font-semibold tracking-[0.2em] text-secondary uppercase">Company</label>
                    <input 
                      id="company" name="company" type="text" placeholder="Acme Inc."
                      className="bg-transparent border-b border-border/80 py-3 text-primary placeholder:text-secondary/50 focus:outline-none focus:border-primary transition-colors rounded-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className="text-[10px] font-semibold tracking-[0.2em] text-secondary uppercase">Budget (Optional)</label>
                    <input 
                      id="budget" name="budget" type="text" placeholder="$10k – $50k"
                      className="bg-transparent border-b border-border/80 py-3 text-primary placeholder:text-secondary/50 focus:outline-none focus:border-primary transition-colors rounded-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <label htmlFor="message" className="text-[10px] font-semibold tracking-[0.2em] text-secondary uppercase">Project Scope</label>
                  <textarea 
                    id="message" name="message" required rows={5} placeholder="Tell us about your goals, timeline, and what success looks like..."
                    className="bg-transparent border-b border-border/80 py-3 text-primary placeholder:text-secondary/50 focus:outline-none focus:border-primary transition-colors resize-none rounded-none"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="mt-8 flex items-center justify-center gap-3 w-full py-6 bg-primary text-white text-sm font-semibold hover:bg-black transition-colors"
                >
                  Submit Inquiry <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}
