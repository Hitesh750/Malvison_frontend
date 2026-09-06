import { useRef } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const Route = createFileRoute('/sandbox')({
  component: Sandbox,
})

function Sandbox() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Stagger animation for the cards grid when scrolled into view
    gsap.from(".sandbox-card", {
      scrollTrigger: {
        trigger: ".sandbox-cards-grid",
        start: "top 85%", // Trigger when the top of the grid hits 85% of the viewport height
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <div className="min-h-screen bg-background" ref={containerRef}>
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container-lux space-y-24">
          {/* Header */}
          <div>
            <h1 className="text-5xl font-display font-bold mb-4">Design Sandbox</h1>
            <p className="text-xl text-secondary">Malvision Technologies Phase 1 Component Library</p>
          </div>

          {/* Typography */}
          <section className="space-y-6">
            <h2 className="text-3xl font-display font-semibold border-b border-border pb-2">Typography</h2>
            <div className="grid gap-6">
              <div>
                <h1 className="text-6xl font-display font-bold">Display Heading 1</h1>
                <p className="text-sm text-secondary font-mono mt-2">Space Grotesk / General Sans - 6xl / Bold</p>
              </div>
              <div>
                <h2 className="text-4xl font-display font-bold">Section Heading 2</h2>
                <p className="text-sm text-secondary font-mono mt-2">Space Grotesk / General Sans - 4xl / Bold</p>
              </div>
              <div>
                <h3 className="text-2xl font-display font-semibold">Card Title 3</h3>
                <p className="text-sm text-secondary font-mono mt-2">Space Grotesk / General Sans - 2xl / Semibold</p>
              </div>
              <div className="max-w-3xl">
                <p className="text-lg text-foreground font-sans leading-relaxed">
                  Body text (Inter). Turning Vision into Technology. We build intelligent systems and robust software to empower your business. This is how a typical paragraph will read. Generous line height and comfortable reading width.
                </p>
                <p className="text-sm text-secondary font-mono mt-2">Inter - lg / Normal</p>
              </div>
            </div>
          </section>

          {/* Colors */}
          <section className="space-y-6">
            <h2 className="text-3xl font-display font-semibold border-b border-border pb-2">Color Palette</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="h-24 rounded-xl bg-primary shadow-sm border border-border"></div>
                <div className="font-medium">Deep Navy</div>
                <div className="text-sm text-secondary">var(--primary) / #0A1F44</div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-xl bg-accent shadow-sm border border-border"></div>
                <div className="font-medium">Electric Blue</div>
                <div className="text-sm text-secondary">var(--accent) / #2E6FF2</div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-xl bg-secondary shadow-sm border border-border"></div>
                <div className="font-medium">Slate Grey</div>
                <div className="text-sm text-secondary">var(--secondary) / #5B6472</div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-xl bg-background shadow-sm border border-border"></div>
                <div className="font-medium">Near White</div>
                <div className="text-sm text-secondary">var(--background) / #F7F9FC</div>
              </div>
            </div>
            
            <div className="mt-8 space-y-2">
              <div className="h-24 rounded-xl bg-gradient-malvision shadow-lg shadow-accent/20"></div>
              <div className="font-medium">Malvision Gradient</div>
              <div className="text-sm text-secondary">bg-gradient-malvision</div>
            </div>
          </section>

          {/* Buttons */}
          <section className="space-y-6">
            <h2 className="text-3xl font-display font-semibold border-b border-border pb-2">Buttons</h2>
            <div className="flex flex-wrap gap-6 items-center">
              <Button variant="default">Primary CTA</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
            <div className="flex flex-wrap gap-6 items-center mt-6">
              <Button variant="default" size="lg">Large Primary</Button>
              <Button variant="secondary" size="sm">Small Secondary</Button>
            </div>
          </section>

          {/* Cards */}
          <section className="space-y-6">
            <h2 className="text-3xl font-display font-semibold border-b border-border pb-2">Cards & Surfaces</h2>
            <div className="sandbox-cards-grid grid md:grid-cols-3 gap-8 p-8 bg-grid-lux rounded-3xl border border-border">
              {/* Default Card */}
              <Card variant="default" className="sandbox-card">
                <CardHeader>
                  <CardTitle>Standard Card</CardTitle>
                  <CardDescription>Default variant</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Used for standard content blocks, simple lists, or basic forms.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Action</Button>
                </CardFooter>
              </Card>

              {/* Service Card */}
              <Card variant="service" className="sandbox-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                    ✨
                  </div>
                  <CardTitle className="text-xl">AI Agents</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary text-sm">
                    Intelligent autonomous agents that execute complex workflows and automate your business operations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full text-accent hover:text-accent-light hover:bg-accent/5">
                    Learn More &rarr;
                  </Button>
                </CardFooter>
              </Card>

              {/* Testimonial Card */}
              <Card variant="testimonial" className="sandbox-card">
                <CardContent className="pt-8">
                  <p className="italic text-lg text-primary mb-6">
                    "Malvision transformed our entire operational stack. Their AI integration saved us 40 hours a week."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20"></div>
                    <div>
                      <div className="font-semibold text-sm">Sarah Jenkins</div>
                      <div className="text-xs text-secondary">CTO, TechStart</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Glass Card Demo */}
            <div className="relative p-12 rounded-3xl overflow-hidden mt-8 flex items-center justify-center min-h-[400px]">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-primary"></div>
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent rounded-full blur-[100px] opacity-50"></div>
              
              <Card variant="glass" className="glass-dark border-white/10 w-full max-w-md relative z-10 text-white shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-white text-2xl text-gradient-malvision">Dark Glassmorphism</CardTitle>
                  <CardDescription className="text-white/60">For hero sections and dark modes.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    This card style uses backdrop filtering and subtle borders to create a premium, deep tech aesthetic.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full shadow-accent/50">Experience AI</Button>
                </CardFooter>
              </Card>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
