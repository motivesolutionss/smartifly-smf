import * as React from "react";
import { getMetadata } from "@/lib/seo";
import { ROUTES } from "@/constants/routes";
import { PLATFORM_GROUPS } from "@/data/platforms";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import Badge from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata = getMetadata({
  title: "Supported Platforms",
  description: "Motive Solutions develops software for Android, iOS, Android TV, Samsung Tizen, LG webOS, Fire TV, web platforms, admin panels, APIs, and custom business systems.",
  path: "/platforms",
});

// CSS Ecosystem Visual
const PlatformsHeroVisual = () => (
  <div className="relative w-full h-[350px] flex items-center justify-center select-none">
    {/* Glow background */}
    <div className="absolute w-[240px] h-[240px] rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-60 blur-3xl -z-10" />

    {/* Central Node */}
    <div className="w-[110px] h-[110px] rounded-full bg-white border-2 border-primary/20 flex flex-col items-center justify-center text-center shadow-soft z-20">
      <span className="w-2.5 h-2.5 rounded-full bg-primary mb-1 animate-pulse" />
      <span className="text-[10px] font-black text-foreground tracking-wide uppercase font-mono">Core Sync</span>
      <span className="text-[7px] text-muted-foreground uppercase font-bold">API Gateway</span>
    </div>

    {/* Connected Device Cards */}
    <div className="absolute top-2 left-2 bg-white border border-border rounded-lg px-2.5 py-1.5 shadow-xs z-10 flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
      <span className="text-[8.5px] font-bold text-foreground">Mobile Client</span>
    </div>

    <div className="absolute top-6 right-2 bg-white border border-border rounded-lg px-2.5 py-1.5 shadow-xs z-10 flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
      <span className="text-[8.5px] font-bold text-foreground">Smart TV App</span>
    </div>

    <div className="absolute bottom-6 left-2 bg-white border border-border rounded-lg px-2.5 py-1.5 shadow-xs z-10 flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
      <span className="text-[8.5px] font-bold text-foreground">Web Player</span>
    </div>

    <div className="absolute bottom-2 right-2 bg-white border border-border rounded-lg px-2.5 py-1.5 shadow-xs z-10 flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
      <span className="text-[8.5px] font-bold text-foreground">Admin Portal</span>
    </div>

    {/* SVG connection lines */}
    <svg className="absolute inset-0 w-full h-full -z-10" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <line x1="80" y1="80" x2="165" y2="145" className="stroke-slate-200" />
      <line x1="280" y1="90" x2="200" y2="155" className="stroke-slate-200" />
      <line x1="80" y1="280" x2="155" y2="205" className="stroke-slate-200" />
      <line x1="280" y1="260" x2="205" y2="215" className="stroke-slate-200" />
    </svg>
  </div>
);

export default function PlatformsPage() {
  const heroBadges = [
    "Android", "iOS", "Android TV", "Samsung Tizen", "LG webOS", "Fire TV", "Web", "Admin Panels", "APIs"
  ];

  const smartTvPlatforms = [
    {
      name: "Android TV",
      usedFor: "Sony, Xiaomi, Nvidia Shield, Android TV boxes",
      consideration: "Remote D-pad focus engine, Leanback UI design compliance, and APK compiler packaging."
    },
    {
      name: "Samsung Tizen",
      usedFor: "Samsung Smart TVs (Tizen Store)",
      consideration: "Web application package structuring, Tizen Remote SDK controls, and memory-footprint optimization."
    },
    {
      name: "LG webOS",
      usedFor: "LG Smart TVs (LG Content Store)",
      consideration: "webOS CLI bundling, webOS mouse-pointer cursor compatibility, and native HTML5 video performance."
    },
    {
      name: "Fire TV",
      usedFor: "Amazon Fire TV Stick, Fire OS devices",
      consideration: "Amazon Appstore SDK integration, device capability validation, and media player optimization."
    }
  ];

  const webPlatforms = [
    {
      name: "Web TV Player",
      desc: "Browser-based stream viewing, responsive layout players, and Xtream API authentication panels.",
      link: ROUTES.SERVICES.WEB_TV
    },
    {
      name: "Customer & Business Portals",
      desc: "Ticketing client pages, agent workflow systems, and product catalog platforms.",
      link: ROUTES.SERVICES.ADMIN_PANELS
    },
    {
      name: "Admin Dashboards",
      desc: "Custom console management, analytics reporting, user registration list, and notifications configurations.",
      link: ROUTES.SERVICES.ADMIN_PANELS
    },
    {
      name: "Backend APIs",
      desc: "Secure API connections, role-based auth, and optimized database query configurations.",
      link: ROUTES.SERVICES.ADMIN_PANELS
    }
  ];

  const selectionGuides = [
    {
      title: "For IPTV/OTT providers",
      text: "Start with Android, Android TV, Smart TV, and Web TV Player depending on your audience."
    },
    {
      title: "For subscription video products",
      text: "Start with web, mobile, Smart TV, admin panel, and analytics planning."
    },
    {
      title: "For service businesses",
      text: "Start with web portals, admin dashboards, customer portals, and API systems."
    },
    {
      title: "For marketplace or e-commerce products",
      text: "Start with responsive web, admin panel, product/catalog management, and customer journey planning."
    }
  ];

  const steps = [
    { title: "Audience & Device Review", desc: "Identify your primary target users and target device classes." },
    { title: "Platform Requirements", desc: "Define the technical API models, players, and OS specifications." },
    { title: "UX and Architecture Planning", desc: "Design layout cards and map backend auth middlewares." },
    { title: "Development & Integration", desc: "Program platform-specific bundles and configure APIs." },
    { title: "Testing Across Devices", desc: "Verify D-pad navigations, page loads, and static builds." },
    { title: "Deployment & Support", desc: "Deploy applications to play stores, web hosts, and Tizen portals." }
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-[45%] h-[70%] bg-gradient-to-b from-blue-50/70 to-indigo-50/40 rounded-bl-[120px] -z-10" />
        
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Badge variant="soft" className="mb-6">
              Supported Platforms
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              Software Built for the Screens Your Users Actually Use
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Motive Solutions builds platform-specific software experiences for mobile, Smart TV, web, backend systems, admin dashboards, and business portals, helping companies reach users across the right devices and environments.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10 w-full sm:w-auto">
              <Button href={ROUTES.CONTACT} size="lg" className="w-full sm:w-auto">
                Discuss Your Platform
              </Button>
              <Button href={ROUTES.SERVICES.ROOT} variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Services
              </Button>
            </div>

            {/* Badges */}
            <div className="w-full border-t border-border/80 pt-6">
              <div className="flex flex-wrap gap-2">
                {heroBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 rounded bg-slate-50 border border-border text-[11px] font-semibold text-foreground uppercase tracking-wide"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <PlatformsHeroVisual />
          </div>
        </Container>
      </section>

      {/* 2. Platform Groups Section */}
      <Section variant="default" id="platform-groups">
        <Container>
          <SectionHeader
            title="Development Across Mobile, TV, Web & Backend Systems"
            eyebrow="Capabilities"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {PLATFORM_GROUPS.map((group) => (
              <Card
                key={group.id}
                hoverable={true}
                className="bg-white border border-border shadow-xs flex flex-col justify-between"
              >
                <CardHeader className="p-8">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {group.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-slate-50 border border-border text-[10px] font-semibold text-muted-foreground uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <CardTitle className="text-xl font-bold text-foreground mb-3">
                    {group.title}
                  </CardTitle>

                  <CardDescription className="text-sm text-muted-foreground leading-relaxed font-normal">
                    {group.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Smart TV Platform Focus Section */}
      <Section variant="muted" id="smart-tv-focus" className="border-y border-border">
        <Container>
          <SectionHeader
            title="Smart TV Platforms Require Platform-Specific Thinking"
            eyebrow="Smart TV Focus"
            description="Smart TV apps are not just enlarged mobile apps. They need remote-control UX, focus states, large-screen layouts, lightweight performance, platform compatibility, and careful testing."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {smartTvPlatforms.map((plat) => (
              <Card key={plat.name} className="bg-white border border-border shadow-xs flex flex-col justify-between">
                <CardHeader className="p-8 pb-2">
                  <Badge variant="soft" className="mb-3 text-[10px] px-2 py-0.5">
                    {plat.name}
                  </Badge>
                  <CardTitle className="text-lg font-bold text-foreground">
                    Target: {plat.usedFor}
                  </CardTitle>
                  <CardDescription className="mt-3 text-sm text-muted-foreground leading-relaxed font-normal">
                    <strong>Development Focus:</strong> {plat.consideration}
                  </CardDescription>
                </CardHeader>
                <div className="p-8 pt-2">
                  <Button
                    href={ROUTES.SERVICES.SMART_TV}
                    variant="ghost"
                    size="sm"
                    className="w-full text-left justify-between p-0 hover:bg-transparent hover:text-primary font-semibold text-sm border-t border-border/40 pt-4 rounded-none"
                  >
                    Explore Smart TV Services
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

      {/* 4. Web & Backend Platform Section */}
      <Section variant="default" id="web-backend-focus">
        <Container>
          <SectionHeader
            title="Web, Admin & API Systems Behind the Experience"
            eyebrow="Backend Systems"
            description="Strong digital products need more than frontend screens. We also build web portals, admin panels, backend APIs, analytics foundations, settings modules, and business workflow systems."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {webPlatforms.map((plat) => (
              <Card key={plat.name} className="bg-white border border-border shadow-xs flex flex-col justify-between">
                <CardHeader className="p-6 pb-2">
                  <CardTitle className="text-base font-bold text-foreground">
                    {plat.name}
                  </CardTitle>
                  <CardDescription className="mt-2 text-xs leading-relaxed text-muted-foreground font-normal">
                    {plat.desc}
                  </CardDescription>
                </CardHeader>
                <div className="p-6 pt-2">
                  <Button
                    href={plat.link}
                    variant="ghost"
                    size="sm"
                    className="w-full text-left justify-between p-0 hover:bg-transparent hover:text-primary font-semibold text-sm border-t border-border/40 pt-4 rounded-none"
                  >
                    View Details
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

      {/* 5. Platform Selection Guide */}
      <Section variant="muted" id="platform-selector" className="border-y border-border">
        <Container>
          <SectionHeader
            title="Which Platform Should You Start With?"
            eyebrow="Ecosystem Selector"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {selectionGuides.map((guide, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white border border-border shadow-xs">
                <h4 className="text-sm font-bold text-foreground mb-1">{guide.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-normal">{guide.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href={ROUTES.CONTACT} size="lg">
              Get Platform Advice
            </Button>
          </div>
        </Container>
      </Section>

      {/* 6. Platform Development Process */}
      <Section variant="default" id="platforms-process">
        <Container>
          <SectionHeader
            title="How We Plan Multi-Platform Software"
            eyebrow="Workflow"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-border shadow-xs">
                <span className="text-lg font-black text-primary/30 block mb-2 font-mono">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>
                <h4 className="text-sm font-bold text-foreground mb-1">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-normal">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. Legal / Software-Only Notice */}
      <div className="py-8 bg-slate-50 border-t border-border text-center">
        <Container>
          <p className="text-xs font-medium text-muted-foreground max-w-xl mx-auto leading-relaxed">
            * Legal Notice: Motive Solutions builds IPTV/OTT software only. We do not provide playlists, TV channels, movies, or streaming content.
          </p>
        </Container>
      </div>

      {/* 8. Final CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-background border-t border-border/80">
        <Container>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-primary/10 rounded-3xl p-8 md:p-20 text-center max-w-5xl mx-auto shadow-soft relative">
            <div className="absolute top-0 left-0 w-24 h-24 bg-white/40 rounded-full blur-xl -translate-x-12 -translate-y-12" />
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-white/30 rounded-full blur-2xl translate-x-12 translate-y-12" />

            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-6 leading-tight">
              Need Software Across Multiple Platforms?
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Tell us your target devices, users, and business goals. Motive Solutions will help you choose the right platforms and build a scalable software roadmap.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button href={ROUTES.CONTACT} size="lg" className="w-full sm:w-auto">
                Discuss Your Project
              </Button>
              <Button href={ROUTES.SERVICES.ROOT} variant="outline" size="lg" className="w-full sm:w-auto">
                View Services
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
