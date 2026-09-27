import React, { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Technology", href: "/technology" },
  { name: "Company", href: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background border-b border-border py-4"
          : "bg-background/90 backdrop-blur-md py-6 border-b border-transparent"
      )}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        
        {/* Logo (Typography Based) */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-semibold text-xl tracking-tight text-primary">MALVISION.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href as any}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors py-2 uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-6">
          <Link 
            to="/contact" 
            className="hidden md:flex text-sm font-semibold text-white bg-primary-deep hover:bg-black px-6 py-2.5 transition-colors"
          >
            Contact
          </Link>
          <button
            className="lg:hidden p-2 text-primary hover:text-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col py-6 px-6 gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href as any}
                className="text-xl font-medium text-primary hover:text-secondary transition-colors uppercase tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-border">
              <Link 
                to="/contact"
                className="flex justify-center text-sm font-semibold text-white bg-primary-deep hover:bg-black px-6 py-4 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
