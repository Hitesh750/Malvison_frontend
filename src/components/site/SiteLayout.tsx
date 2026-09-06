import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-background relative selection:bg-accent selection:text-white">
      <Navbar />
      <main className="flex-1 w-full overflow-hidden">{children}</main>
      <Footer />
    </div>
  );
}
