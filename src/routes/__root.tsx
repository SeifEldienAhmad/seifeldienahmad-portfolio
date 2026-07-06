import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      {
        charSet: "UTF-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="H5-F7c8IddP1mAZFTLWmidtG7hFyPQLEQSq3-jzMRKg" />
        <title>Seif Eldien Ahmad | Official Portfolio</title>
        <meta name="description" content="The official personal website of Seif Eldien Ahmad Mohammad. Learn more about his work in cybersecurity, red teaming, and ethical hacking." />
        <meta name="keywords" content="Seif Eldien Ahmad Mohammad, Red Teaming, Cybersecurity, Ethical Hacker, InfoSec" />
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://seifeldienahmad-pi.vercel.app/#person",
              "name": "Seif Eldien Ahmad Mohammad",
              "alternateName": [
                "Seif Eldin Ahmad Mohammad",
                "Seif Eldeen Ahmad Mohammad",
                "Seif Eldien Ahmad Mohamed",
                "0xdaphantom",
                "سيف الدين أحمد محمد"
              ],
              "url": "https://seifeldienahmad-pi.vercel.app/",
              "image": "https://seifeldienahmad-pi.vercel.app/assets/img/profile.png",
              "description": "Junior Penetration Tester focused on offensive security, Linux, networking, and security automation.",
              "jobTitle": "Junior Penetration Tester",
              "affiliation": {
                "@type": "CollegeOrUniversity",
                "name": "Fayoum University"
              },
              "knowsAbout": [
                "Penetration Testing",
                "Offensive Security",
                "Red Teaming",
                "Linux",
                "Python",
                "Networking",
                "Security Automation",
                "Web Security",
                "Active Directory",
                "CTFs",
                "pwning",
                "Bug Bounty Hunting",
                "Vulnerability Research",
                "Reverse Engineering",
                "Social Engineering",
              ],
              "sameAs": [
                "https://github.com/SeifEldienAhmad",
                "https://www.linkedin.com/in/seifeldienahmad/",
                "https://dev.to/seifeldienahmad",
                "https://medium.com/@seifeldienahmad",
                "https://tryhackme.com/p/0xdaphantom"
              ]
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}