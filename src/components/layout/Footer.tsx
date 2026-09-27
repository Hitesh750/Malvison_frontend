import React from "react";
import { Link } from "@tanstack/react-router";

const FOOTER_LINKS = {
  solutions: [
    { name: "AI Agents", href: "/services/ai-agents" },
    { name: "AI Automation", href: "/services/ai-automation" },
    { name: "Generative AI", href: "/services/generative-ai" },
    { name: "AI Chatbots", href: "/services/ai-chatbot-development" },
  ],
  development: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Software Development", href: "/services/software-development" },
    { name: "Mobile Apps", href: "/services/mobile-app-development" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary-deep text-white pt-24 pb-12">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Massive Typography Footer Header */}
        <div className="mb-24">
          <h2 className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-medium tracking-tight leading-[0.95] text-white">
            Let's build <br className="hidden md:block"/> something iconic.
          </h2>
          <div className="mt-12 flex flex-col md:flex-row gap-6 md:items-center justify-between border-t border-white/10 pt-8">
            <p className="text-xl md:text-2xl text-secondary/70 font-light max-w-lg">
              Partner with Malvision to transform your ambitious ideas into reality.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-primary text-lg font-medium px-8 py-4 hover:bg-border transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-semibold text-2xl tracking-tight text-white">MALVISION.</span>
            </Link>
            <p className="text-secondary/70 text-sm leading-relaxed max-w-xs">
              Strategic design and engineering for ambitious teams. Based globally.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-6">AI Solutions</h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.solutions.map((link) => (
                <li key={link.name}>
                  <Link to={link.href as any} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-6">Development</h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.development.map((link) => (
                <li key={link.name}>
                  <Link to={link.href as any} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-6">Resources</h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href as any} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-secondary">
          <p>© {new Date().getFullYear()} Malvision Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors uppercase tracking-widest text-xs">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors uppercase tracking-widest text-xs">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors uppercase tracking-widest text-xs">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
