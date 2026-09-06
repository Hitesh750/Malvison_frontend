import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

import appCss from "../styles.css?url";

import { SiteLayout } from "@/components/site/SiteLayout";

function NotFoundComponent() {
  return (
    <SiteLayout>
      <div className="flex min-h-[80vh] items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <div className="text-[10px] font-mono tracking-widest text-accent uppercase mb-4">
            SYS_ERR_404
          </div>
          <h1 className="text-7xl md:text-9xl font-display font-bold text-primary-deep mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-6">Page not found</h2>
          <p className="text-lg text-secondary font-light mb-10">
            The page you're looking for doesn't exist, has been moved, or is currently under development.
          </p>
          <div className="flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition-all hover:bg-primary-navy shadow-[0_0_20px_rgba(8,120,232,0.15)] hover:shadow-[0_0_30px_rgba(11,46,115,0.2)]"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Malvion Technologies — Building Intelligent Digital Solutions" },
      {
        name: "description",
        content:
          "Malvion Technologies engineers AI, Cloud, and bespoke software for forward-thinking teams.",
      },
      { name: "author", content: "Malvion Technologies" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Malvion Technologies — Building Intelligent Digital Solutions" },
      { name: "twitter:title", content: "Malvion Technologies — Building Intelligent Digital Solutions" },
      { name: "description", content: "Malvion Technologies builds intelligent digital solutions using AI, cloud, and web development." },
      { property: "og:description", content: "Malvion Technologies builds intelligent digital solutions using AI, cloud, and web development." },
      { name: "twitter:description", content: "Malvion Technologies builds intelligent digital solutions using AI, cloud, and web development." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dd4dc589-3e88-4caf-923b-c24c36763405/id-preview-6eac3ad5--25222df6-dad7-4a5e-9ed5-badc84aaf3c8.lovable.app-1777185872612.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dd4dc589-3e88-4caf-923b-c24c36763405/id-preview-6eac3ad5--25222df6-dad7-4a5e-9ed5-badc84aaf3c8.lovable.app-1777185872612.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <SmoothScrollProvider>
      <Outlet />
    </SmoothScrollProvider>
  );
}
