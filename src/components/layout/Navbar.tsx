import React, { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

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
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border py-4"
          : "bg-white/50 backdrop-blur-sm py-6 border-b border-transparent"
      )}
    >
      <div className="container-lux flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Malvision Technologies" className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                to={link.href as any}
                className="text-sm font-medium text-primary hover:text-accent transition-colors py-2"
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden md:flex">
            <Button 
              variant="default" 
              className="bg-accent hover:bg-primary-navy text-white transition-colors duration-300 flex items-center gap-2 group border-none shadow-none"
            >
              Contact Us <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Button>
          </Link>
          <button
            className="lg:hidden p-2 text-primary hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col py-4 px-6 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href as any}
                className="text-lg font-medium text-primary hover:text-accent py-2 border-b border-border/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button variant="default" className="w-full justify-center bg-accent hover:bg-primary-navy text-white">
                Contact Us
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
