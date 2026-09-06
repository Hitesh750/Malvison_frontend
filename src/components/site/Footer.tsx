import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-40 pb-12 selection:bg-white selection:text-black">
      <div className="container-lux">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-32">
          
          <div className="max-w-sm">
            <Link to="/" className="inline-block mb-8">
              {/* Logo container with white background to handle the specific image */}
              <div className="bg-white p-2 rounded-lg inline-flex">
                <Logo className="h-10 w-auto" />
              </div>
            </Link>
            <p className="text-[#888888] text-[15px] leading-relaxed mb-10">
              Designing and engineering the digital infrastructure of tomorrow. Built for performance, security, and scale.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((Social, i) => (
                <motion.a
                  key={i}
                  href={Social.href}
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#888888] hover:text-white hover:border-white/30 transition-colors"
                >
                  <Social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex gap-20 flex-wrap">
            <div>
              <h4 className="text-white font-medium mb-6 text-sm">Platform</h4>
              <ul className="space-y-4 text-[15px] text-[#888888]">
                <li><Link to="/" className="hover:text-white transition-colors group flex items-center gap-1">Architecture <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/" className="hover:text-white transition-colors group flex items-center gap-1">Intelligence <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/" className="hover:text-white transition-colors group flex items-center gap-1">Security <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-6 text-sm">Company</h4>
              <ul className="space-y-4 text-[15px] text-[#888888]">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/projects" className="hover:text-white transition-colors">Customers</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-6 text-sm">Legal</h4>
              <ul className="space-y-4 text-[15px] text-[#888888]">
                <li><Link to="/" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#888888] text-sm">
          <p>© {new Date().getFullYear()} Malvion Technologies.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            All systems operational
          </div>
        </div>

      </div>
    </footer>
  );
}
