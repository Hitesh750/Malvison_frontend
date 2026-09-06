import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Overview" },
  { to: "/about", label: "Company" },
  { to: "/services", label: "Platform" },
  { to: "/projects", label: "Customers" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-8 px-4 flex justify-center w-full pointer-events-none">
      <motion.div 
        className={`w-full max-w-5xl rounded-full transition-all duration-500 ease-in-out border pointer-events-auto ${
          scrolled 
            ? "glass-lux border-border py-4 px-8" 
            : "bg-transparent border-transparent py-4 px-8"
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center shrink-0 group">
            <Logo className="h-8 w-auto mix-blend-multiply transition-transform group-hover:scale-105" />
          </Link>

          <nav className="hidden md:flex items-center gap-2 flex-1 justify-center">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative rounded-full px-5 py-2 text-[15px] font-medium text-secondary hover:text-primary transition-colors hover:bg-black/5"
                activeProps={{ className: "text-primary bg-black/5" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex shrink-0">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-[15px] font-medium text-white overflow-hidden transition-transform hover:scale-105 shadow-[0_8px_16px_rgba(15,23,42,0.1)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Sales
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden flex items-center justify-center p-2 rounded-full hover:bg-black/5 text-primary"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-28 left-4 right-4 glass-lux rounded-[32px] p-8 md:hidden pointer-events-auto"
          >
            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-lg font-medium text-primary hover:bg-black/5 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-white shadow-md"
              >
                Contact Sales
                <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
