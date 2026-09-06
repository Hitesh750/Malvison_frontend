import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AboutCompany } from "@/components/sections/AboutCompany";
import { TechnologiesGrid } from "@/components/sections/TechnologiesGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTASection } from "@/components/sections/CTASection";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <div className="w-full bg-[#050505]">
        <Hero />
        <ServicesGrid />
        <AboutCompany />
        <TechnologiesGrid />
        <ProcessTimeline />
        <CTASection />
      </div>
    </SiteLayout>
  );
}
