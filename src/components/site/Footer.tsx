import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <Logo className="h-7 w-7" />
              <span className="text-base font-semibold tracking-tight">Malvion Technologies</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Building Intelligent Digital Solutions. Precision AI, robust Cloud
              infrastructure, and bespoke Software Development.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-md border border-border bg-background p-2 text-foreground/70 transition-colors hover:text-accent"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="rounded-md border border-border bg-background p-2 text-foreground/70 transition-colors hover:text-accent"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="rounded-md border border-border bg-background p-2 text-foreground/70 transition-colors hover:text-accent"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-mono-eyebrow mb-4">Company</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-foreground/80 hover:text-accent">About</Link></li>
              <li><Link to="/services" className="text-foreground/80 hover:text-accent">Services</Link></li>
              <li><Link to="/projects" className="text-foreground/80 hover:text-accent">Projects</Link></li>
              <li><Link to="/clients" className="text-foreground/80 hover:text-accent">Clients</Link></li>
              <li><Link to="/contact" className="text-foreground/80 hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-mono-eyebrow mb-4">Contact</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:hiteshmalviya06@gmail.com" className="text-foreground/80 hover:text-accent">
                  hiteshmalviya06@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919509722217" className="text-foreground/80 hover:text-accent">
                  +91 95097 22217
                </a>
              </li>
              <li className="text-muted-foreground">Jodhpur, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Malvion Technologies. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.2em]">v1.0 — Built with intent</p>
        </div>
      </div>
    </footer>
  );
}
