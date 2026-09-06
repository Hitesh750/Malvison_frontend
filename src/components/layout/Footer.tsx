import React from "react";
import { Link } from "@tanstack/react-router";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

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
    <footer className="bg-primary-deep text-white pt-20 pb-10 border-t border-white/10">
      <div className="container-lux">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Column */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-2 group mb-6 bg-white p-2 rounded-lg">
               {/* Logo displayed on a white rounded rect for contrast since it's the primary colored logo */}
               <img src={logo} alt="Malvision Technologies" className="h-8 w-auto object-contain" />
            </Link>
            <p className="text-white/70 mb-8 max-w-sm">
              Turning Vision into Technology. We build intelligent systems and robust software to empower your business.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-bright hover:text-white transition-colors">
                <Twitter className="w-5 h-5 text-white/80" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-bright hover:text-white transition-colors">
                <Linkedin className="w-5 h-5 text-white/80" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-bright hover:text-white transition-colors">
                <Github className="w-5 h-5 text-white/80" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">AI Solutions</h4>
            <ul className="flex flex-col gap-4">
              {FOOTER_LINKS.solutions.map((link) => (
                <li key={link.name}>
                  <Link to={link.href as any} className="text-white/60 hover:text-accent-bright transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Development</h4>
            <ul className="flex flex-col gap-4">
              {FOOTER_LINKS.development.map((link) => (
                <li key={link.name}>
                  <Link to={link.href as any} className="text-white/60 hover:text-accent-bright transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Resources</h4>
            <ul className="flex flex-col gap-4">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href as any} className="text-white/60 hover:text-accent-bright transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="border-t border-white/10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-semibold text-xl mb-2 text-white">Subscribe to our newsletter</h4>
            <p className="text-white/60">Insights on AI, engineering, and digital transformation.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent-bright w-full md:w-64"
            />
            <Button variant="default" className="bg-accent hover:bg-accent-bright text-white border-none">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Malvision Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-accent-bright transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent-bright transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-accent-bright transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
