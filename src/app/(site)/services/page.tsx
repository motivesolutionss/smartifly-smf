import * as React from "react";
import { getMetadata } from "@/lib/seo";
import { ROUTES } from "@/constants/routes";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import Badge from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata = getMetadata({
  title: "Software Development Services",
  description: "Explore Motive Solutions services including IPTV app development, OTT app development, white-label IPTV apps, Smart TV app development, Web TV Player development, admin panels, APIs, and custom business software.",
  path: "/services",
});

// CSS Connected Service Nodes Visual
const ServicesHeroVisual = () => (
  <div className="relative w-full h-[350px] flex items-center justify-center select-none">
    {/* Backdrop glow */}
    <div className="absolute w-[240px] h-[240px] rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-60 blur-3xl -z-10" />

    {/* Central Core API Node */}
    <div className="w-[120px] h-[120px] rounded-full bg-white border-2 border-primary/20 flex flex-col items-center justify-center text-center shadow-soft z-20">
      <span className="w-3 h-3 rounded-full bg-primary mb-1 animate-pulse" />
      <span className="text-[10px] font-black text-foreground tracking-wide uppercase font-mono">Motive Core</span>
      <span className="text-[7.5px] text-muted-foreground uppercase font-bold">API Layer</span>
    </div>

    {/* Connected Card 1: IPTV App */}
    <div className="absolute top-2 left-2 bg-white border border-border rounded-lg px-2.5 py-1.5 shadow-xs z-10 flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
      <span className="text-[8.5px] font-bold text-foreground">IPTV Client App</span>
    </div>

    {/* Connected Card 2: Smart TV */}
    <div className="absolute top-6 right-2 bg-white border border-border rounded-lg px-2.5 py-1.5 shadow-xs z-10 flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
      <span className="text-[8.5px] font-bold text-foreground">Smart TV Package</span>
    </div>

    {/* Connected Card 3: Web Player */}
    <div className="absolute bottom-6 left-2 bg-white border border-border rounded-lg px-2.5 py-1.5 shadow-xs z-10 flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
      <span className="text-[8.5px] font-bold text-foreground">Web TV Player</span>
    </div>

    {/* Connected Card 4: Admin Panel */}
    <div className="absolute bottom-2 right-2 bg-white border border-border rounded-lg px-2.5 py-1.5 shadow-xs z-10 flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
      <span className="text-[8.5px] font-bold text-foreground">Operator Console</span>
    </div>

    {/* SVG Connector Lines */}
    <svg className="absolute inset-0 w-full h-full -z-10" fill="none" stroke="currentColor" strokeWidth={1.5}>
      {/* Top Left connection */}
      <line x1="80" y1="80" x2="160" y2="140" className="stroke-slate-200" />
      {/* Top Right connection */}
      <line x1="280" y1="90" x2="200" y2="150" className="stroke-slate-200" />
      {/* Bottom Left connection */}
      <line x1="80" y1="280" x2="150" y2="200" className="stroke-slate-200" />
      {/* Bottom Right connection */}
      <line x1="280" y1="260" x2="210" y2="210" className="stroke-slate-200" />
    </svg>
  </div>
);

export default function ServicesPage() {
  const serviceCards = [
    {
      title: "IPTV App Development",
      description: "Custom IPTV apps with Live TV, VOD, Series, EPG, favorites, catch-up-ready layouts, provider API integration, and Smart TV support.",
      href: ROUTES.SERVICES.IPTV,
      tags: ["Live TV", "VOD & Series", "EPG", "Remote UX"],
      badge: "Player Apps"
    },
    {
      title: "OTT App Development",
      description: "Scalable OTT platforms for video streaming, VOD libraries, subscriptions, user accounts, multi-device access, analytics, and admin readiness.",
      href: ROUTES.SERVICES.OTT,
      tags: ["Subscriptions", "User Profiles", "Analytics", "CDN Setup"],
      badge: "Media Streaming"
    },
    {
      title: "White-Label IPTV Apps",
      description: "Branded IPTV and OTT apps customized with your app name, logo, colors, splash screen, provider API, and target platforms.",
      href: ROUTES.SERVICES.WHITE_LABEL,
      tags: ["Custom Branding", "Splash Logo", "Brand Colors", "Compiler Packs"],
      badge: "Custom Branding"
    },
    {
      title: "Smart TV App Development",
      description: "Large-screen apps for Android TV, Samsung Tizen, LG webOS, Fire TV, IPTV/OTT platforms, and remote-control user experiences.",
      href: ROUTES.SERVICES.SMART_TV,
      tags: ["Tizen OS", "LG webOS", "Android TV", "Remote Navigation"],
      badge: "Living Room OS"
    },
    {
      title: "Web TV Player Development",
      description: "Browser-based IPTV and OTT player experiences with Live TV, VOD, Series, EPG, account access, responsive UI, and API integration.",
      href: ROUTES.SERVICES.WEB_TV,
      tags: ["HTML5 Video", "Browser Playback", "Responsive Web", "Portal Sync"],
      badge: "Web TV Player"
    },
    {
      title: "Admin Panels & API Systems",
      description: "Custom dashboards, backend APIs, user management, subscriptions, settings, analytics, notifications, roles, and business operation tools.",
      href: ROUTES.SERVICES.ADMIN_PANELS,
      tags: ["Operator Console", "JWT Auth", "RBAC", "Database Indexing"],
      badge: "Backend & Control"
    }
  ];

  const fitGuides = [
    {
      title: "Starting an IPTV product?",
      text: "Start with IPTV App Development or White-Label IPTV Apps."
    },
    {
      title: "Building a subscription streaming business?",
      text: "Start with OTT App Development and admin panel planning."
    },
    {
      title: "Targeting TV users?",
      text: "Start with Smart TV App Development for Android TV, Samsung, LG, or Fire TV."
    },
    {
      title: "Need business control?",
      text: "Start with Admin Panels & API Systems for dashboards, roles, settings, and analytics."
    }
  ];

  const platforms = [
    "Android", "iOS", "Android TV", "Samsung Tizen", "LG webOS", "Fire TV", "Web", "Admin Panels", "APIs", "Business Portals"
  ];

  const steps = [
    { title: "Requirements & Planning", desc: "Identify target features, OS builds, and content APIs." },
    { title: "UI/UX & Architecture", desc: "Design interfaces and define database models." },
    { title: "Development & Integration", desc: "Build codebases and connect backend middleware." },
    { title: "Testing, Deployment & Support", desc: "Validate remote focus states and package packages." }
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Services Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-[45%] h-[70%] bg-gradient-to-b from-blue-50/70 to-indigo-50/40 rounded-bl-[120px] -z-10" />
        
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Badge variant="soft" className="mb-6">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              Software Development Services for Streaming, Web & Business Platforms
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Motive Solutions builds custom IPTV, OTT, Smart TV, web, admin panel, API, and business software solutions for companies that need scalable, branded, and reliable digital products.
            </p>
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <Button href={ROUTES.CONTACT} size="lg" className="w-full sm:w-auto">
                Request a Project Quote
              </Button>
              <Button href={ROUTES.CASE_STUDIES.ROOT} variant="outline" size="lg" className="w-full sm:w-auto">
                View Case Studies
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <ServicesHeroVisual />
          </div>
        </Container>
      </section>

      {/* 2. Services Grid Section */}
      <Section variant="default" id="what-we-build">
        <Container>
          <SectionHeader
            title="Choose the Right Service for Your Digital Product"
            eyebrow="What We Build"
            description="From streaming apps to backend systems, we help businesses plan, design, develop, and maintain software that fits their users, platforms, and operations."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serviceCards.map((service, idx) => (
              <Card
                key={idx}
                hoverable={true}
                className="bg-white border-border/80 shadow-xs hover:border-primary/20 flex flex-col justify-between"
              >
                <CardHeader className="p-8 pb-2 flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="soft" className="text-[10px] px-2 py-0.5">
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-slate-50 border border-border/85 text-[10px] font-semibold text-muted-foreground uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <div className="p-8 pt-2">
                  <Button
                    href={service.href}
                    variant="ghost"
                    size="sm"
                    className="w-full text-left justify-between p-0 hover:bg-transparent hover:text-primary font-semibold text-sm border-t border-border/40 pt-4 rounded-none"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Solution Fit Section */}
      <Section variant="muted" id="solution-fit" className="border-y border-border">
        <Container>
          <SectionHeader
            title="Not Sure Which Service Fits Your Project?"
            eyebrow="Guidance"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {fitGuides.map((guide, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white border border-border shadow-xs flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-1">{guide.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{guide.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href={ROUTES.CONTACT} size="lg">
              Discuss Your Project
            </Button>
          </div>
        </Container>
      </Section>

      {/* 4. Platform Coverage Section */}
      <Section variant="default" id="platform-coverage">
        <Container>
          <SectionHeader
            title="Services Built Across Every Major Platform"
            eyebrow="Compatibility"
            align="center"
          />

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {platforms.map((plat) => (
              <span
                key={plat}
                className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-border text-xs font-semibold text-foreground tracking-wide uppercase"
              >
                {plat}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Process Preview Section */}
      <Section variant="muted" id="process-preview" className="border-t border-border">
        <Container>
          <SectionHeader
            title="A Professional Process From Planning to Launch"
            eyebrow="Our Process"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
            {steps.map((step, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white border border-border shadow-xs">
                <span className="text-lg font-black text-primary/30 block mb-2 font-mono">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>
                <h4 className="text-sm font-bold text-foreground mb-1">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href={ROUTES.CONTACT}>
              View How We Work
            </Button>
          </div>
        </Container>
      </Section>

      {/* 6. Legal / Software-Only Notice */}
      <div className="py-8 bg-slate-50 border-t border-border text-center">
        <Container>
          <p className="text-xs font-medium text-muted-foreground max-w-xl mx-auto leading-relaxed">
            * Legal Notice: Motive Solutions builds IPTV/OTT software only. We do not provide playlists, TV channels, movies, or streaming content.
          </p>
        </Container>
      </div>

      {/* 7. Final CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-background border-t border-border/80">
        <Container>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-primary/10 rounded-3xl p-8 md:p-20 text-center max-w-5xl mx-auto shadow-soft relative">
            <div className="absolute top-0 left-0 w-24 h-24 bg-white/40 rounded-full blur-xl -translate-x-12 -translate-y-12" />
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-white/30 rounded-full blur-2xl translate-x-12 translate-y-12" />

            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-6 leading-tight">
              Ready to Discuss Your Software Project?
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Tell us what you want to build and Motive Solutions will help you plan the right service, platform approach, and development roadmap.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button href={ROUTES.CONTACT} size="lg" className="w-full sm:w-auto">
                Request a Project Quote
              </Button>
              <Button href={ROUTES.CASE_STUDIES.ROOT} variant="outline" size="lg" className="w-full sm:w-auto">
                View Case Studies
              </Button>
            </div>

            <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest leading-relaxed max-w-xl mx-auto">
              Custom IPTV & OTT apps • Smart TV platforms • web portals • admin panels • business software
            </span>
          </div>
        </Container>
      </section>
    </div>
  );
}
