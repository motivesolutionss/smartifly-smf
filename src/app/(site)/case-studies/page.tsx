import * as React from "react";
import { getMetadata } from "@/lib/seo";
import { ROUTES } from "@/constants/routes";
import { CASE_STUDIES } from "@/data/case-studies";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import Badge from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata = getMetadata({
  title: "Case Studies | IPTV & Streaming Software",
  description: "Explore Motive Solutions case studies demonstrating how we design, build, and deploy high-performance IPTV ecosystems and custom streaming apps.",
  path: "/case-studies",
});

// CSS Connected Project Nodes Visual
const CaseStudiesHeroVisual = () => (
  <div className="relative w-full h-[320px] flex items-center justify-center select-none">
    {/* Backdrop glow */}
    <div className="absolute w-[240px] h-[240px] rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-60 blur-3xl -z-10" />

    {/* Central Projects Node */}
    <div className="w-[120px] h-[120px] rounded-full bg-white border-2 border-primary/20 flex flex-col items-center justify-center text-center shadow-soft z-20">
      <span className="w-2.5 h-2.5 rounded-full bg-primary mb-1 animate-pulse" />
      <span className="text-[10px] font-black text-foreground tracking-wide uppercase font-mono">IPTV Hub</span>
      <span className="text-[7.5px] text-muted-foreground uppercase font-bold">Solutions</span>
    </div>

    {/* Project Cards */}
    <div className="absolute top-2 left-2 bg-white border border-border rounded-lg px-2.5 py-1.5 shadow-xs z-10 flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
      <span className="text-[8.5px] font-bold text-foreground">TV Players</span>
    </div>

    <div className="absolute top-6 right-2 bg-white border border-border rounded-lg px-2.5 py-1.5 shadow-xs z-10 flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
      <span className="text-[8.5px] font-bold text-foreground">Mobile Apps</span>
    </div>

    <div className="absolute bottom-6 left-2 bg-white border border-border rounded-lg px-2.5 py-1.5 shadow-xs z-10 flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
      <span className="text-[8.5px] font-bold text-foreground">API Middleware</span>
    </div>

    <div className="absolute bottom-2 right-2 bg-white border border-border rounded-lg px-2.5 py-1.5 shadow-xs z-10 flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
      <span className="text-[8.5px] font-bold text-foreground">Admin Console</span>
    </div>

    {/* SVG Connector Lines */}
    <svg className="absolute inset-0 w-full h-full -z-10" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <line x1="80" y1="80" x2="160" y2="140" className="stroke-slate-200" />
      <line x1="280" y1="90" x2="200" y2="150" className="stroke-slate-200" />
      <line x1="80" y1="280" x2="150" y2="200" className="stroke-slate-200" />
      <line x1="280" y1="260" x2="210" y2="210" className="stroke-slate-200" />
    </svg>
  </div>
);

export default function CaseStudiesPage() {
  const industries = [
    { name: "IPTV Player Apps", desc: "Multi-screen player apps with custom UI layouts and local database structures." },
    { name: "Smart TV Platforms", desc: "TV-optimized D-pad apps for Samsung Tizen, LG webOS, Android TV, and Fire TV." },
    { name: "OTT Video Platforms", desc: "Video-on-demand libraries, subscriber auth portals, and dynamic content feeds." },
    { name: "Admin Panels & Analytics", desc: "Control dashboards for subscribers, devices, DNS configurations, and logs." },
    { name: "API & Middleware Integrations", desc: "Optimized integrations with Stalker, Xtream Codes, and custom playlist feeds." },
    { name: "White-Label Reseller Systems", desc: "Branded apps with automated packaging, DNS routing, and reselling controls." }
  ];

  const steps = [
    { title: "Understand the Business Need", desc: "We align requirements, constraints, provider APIs, and target goals." },
    { title: "Plan the Product Structure", desc: "We architecture the database, user flows, and code frameworks." },
    { title: "Build the Core Software", desc: "We develop responsive frontends, backend modules, and integrations." },
    { title: "Improve, Support & Scale", desc: "We run device testing, app store submissions, and maintenance support." }
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-[45%] h-[70%] bg-gradient-to-b from-blue-50/70 to-indigo-50/40 rounded-bl-[120px] -z-10" />
        
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Badge variant="soft" className="mb-6">
              Case Studies
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              Proven Case Studies in IPTV & Streaming Software
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Explore how Motive Solutions helps operators and creators launch custom IPTV player apps, Smart TV platforms, streaming middleware, and secure administration systems worldwide.
            </p>
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <Button href={ROUTES.CONTACT} size="lg" className="w-full sm:w-auto">
                Start Your Project
              </Button>
              <Button href={ROUTES.SERVICES.ROOT} variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Services
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <CaseStudiesHeroVisual />
          </div>
        </Container>
      </section>

      {/* 2. Featured Grid Section */}
      <Section variant="default" id="featured-projects">
        <Container>
          <SectionHeader
            title="Featured IPTV Platform Case Studies"
            eyebrow="Portfolio"
            description="Discover our flagship deployments demonstrating high-performance video players, remote remote control navigation, and optimized API integrations."
            align="center"
          />

          <div className="max-w-2xl mx-auto mb-12">
            {CASE_STUDIES.map((study) => (
              <Card
                key={study.id}
                className="flex flex-col justify-between h-full bg-white border border-border shadow-xs hover:border-primary/20"
              >
                <CardHeader className="p-8 pb-2">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <Badge variant="soft" className="text-[10px] px-2 py-0.5">
                      {study.industry}
                    </Badge>
                    <span className="text-[10px] text-muted-foreground font-bold font-mono">
                      Case #{study.id.split("-")[1]?.toUpperCase() || "PROJ"}
                    </span>
                  </div>

                  <CardTitle className="text-xl font-bold text-foreground">
                    {study.title}
                  </CardTitle>

                  <CardDescription className="mt-3 text-sm text-muted-foreground leading-relaxed font-normal">
                    {study.summary}
                  </CardDescription>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-slate-50 border border-border/80 text-[10px] font-semibold text-muted-foreground uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Abstract CSS Visual Box */}
                  <div className="mt-6 w-full h-24 bg-gradient-to-r from-blue-50 to-indigo-50/50 border border-border/60 rounded-lg flex items-center justify-center text-[10px] text-muted-foreground font-mono">
                    [Abstract Preview: {study.title} Model]
                  </div>
                </CardHeader>

                <CardFooter className="p-8 pt-2">
                  <Button
                    href={`/case-studies/${study.slug}`}
                    variant="ghost"
                    size="sm"
                    className="w-full text-left justify-between p-0 hover:bg-transparent hover:text-primary font-semibold text-sm border-t border-border/40 pt-4 rounded-none"
                  >
                    View Case Study
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Industry Coverage Section */}
      <Section variant="muted" id="industry-coverage" className="border-y border-border">
        <Container>
          <SectionHeader
            title="Software Experience Across Practical Business Categories"
            eyebrow="Categories"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((ind, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white border border-border shadow-xs flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-1">{ind.name}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed font-normal">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Process/Approach Section */}
      <Section variant="default" id="study-approach">
        <Container>
          <SectionHeader
            title="Our Case Study Approach"
            eyebrow="Methodology"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white border border-border shadow-xs">
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

      {/* 5. Safe Project Disclosure Notice */}
      <div className="py-8 bg-slate-50 border-t border-border text-center">
        <Container>
          <p className="text-xs font-medium text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            * Confidentiality Notice: To protect client confidentiality, case studies may use summarized descriptions and safe visual representations instead of private screenshots, credentials, internal data, or sensitive business details.
          </p>
        </Container>
      </div>

      {/* 6. Final CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-background border-t border-border/80">
        <Container>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-primary/10 rounded-3xl p-8 md:p-20 text-center max-w-5xl mx-auto shadow-soft relative">
            <div className="absolute top-0 left-0 w-24 h-24 bg-white/40 rounded-full blur-xl -translate-x-12 -translate-y-12" />
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-white/30 rounded-full blur-2xl translate-x-12 translate-y-12" />

            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-6 leading-tight">
              Have a Project Like These?
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Share your idea with Motive Solutions and we will help you plan the right software structure, platforms, features, and development roadmap.
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
              Custom IPTV & OTT apps • Smart TV platforms • Web Players • Admin Panels • IPTV Middleware
            </span>
          </div>
        </Container>
      </section>
    </div>
  );
}
