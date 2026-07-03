import * as React from "react";
import { getMetadata } from "@/lib/seo";
import { ROUTES } from "@/constants/routes";
import { CASE_STUDIES } from "@/data/case-studies";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import Badge from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata = getMetadata({
  title: "Business Software Solutions",
  description: "Motive Solutions builds custom software solutions for IPTV and OTT platforms, business portals, admin dashboards, e-commerce systems, travel portals, marketplaces, workflow automation, and API-driven platforms.",
  path: "/solutions",
});

// CSS Solutions Strategy Visual
const SolutionsHeroVisual = () => (
  <div className="relative w-full h-[350px] flex items-center justify-center select-none">
    {/* Glow backdrop */}
    <div className="absolute w-[240px] h-[240px] rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-60 blur-3xl -z-10" />

    {/* Central Node */}
    <div className="w-[110px] h-[110px] rounded-full bg-white border-2 border-primary/20 flex flex-col items-center justify-center text-center shadow-soft z-20">
      <span className="w-2.5 h-2.5 rounded-full bg-primary mb-1 animate-pulse" />
      <span className="text-[10px] font-black text-foreground tracking-wide uppercase font-mono">Strategy</span>
      <span className="text-[7px] text-muted-foreground uppercase font-bold font-mono">Motive Hub</span>
    </div>

    {/* Strategy cards */}
    <div className="absolute top-2 left-2 bg-white border border-border rounded-lg px-2.5 py-1.5 shadow-xs z-10 flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
      <span className="text-[8.5px] font-bold text-foreground">Streaming</span>
    </div>

    <div className="absolute top-6 right-2 bg-white border border-border rounded-lg px-2.5 py-1.5 shadow-xs z-10 flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
      <span className="text-[8.5px] font-bold text-foreground">Airline Portal</span>
    </div>

    <div className="absolute bottom-6 left-2 bg-white border border-border rounded-lg px-2.5 py-1.5 shadow-xs z-10 flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
      <span className="text-[8.5px] font-bold text-foreground">Marketplaces</span>
    </div>

    <div className="absolute bottom-2 right-2 bg-white border border-border rounded-lg px-2.5 py-1.5 shadow-xs z-10 flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
      <span className="text-[8.5px] font-bold text-foreground">Automation</span>
    </div>

    {/* Connector Lines */}
    <svg className="absolute inset-0 w-full h-full -z-10" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <line x1="80" y1="80" x2="165" y2="145" className="stroke-slate-200" />
      <line x1="280" y1="90" x2="200" y2="155" className="stroke-slate-200" />
      <line x1="80" y1="280" x2="155" y2="205" className="stroke-slate-200" />
      <line x1="280" y1="260" x2="205" y2="215" className="stroke-slate-200" />
    </svg>
  </div>
);

export default function SolutionsPage() {
  const heroBadges = [
    "IPTV & OTT Platforms", "Business Portals", "Admin Dashboards", "E-Commerce", "Marketplaces", "Workflow Automation", "API Systems"
  ];

  const categories = [
    {
      title: "IPTV & OTT Platforms",
      desc: "Branded streaming applications, Smart TV apps, Web TV Players, provider API integrations, user flows, and admin readiness.",
      tags: ["IPTV", "OTT", "Smart TV"],
      links: [
        { label: "IPTV Development", href: ROUTES.SERVICES.IPTV },
        { label: "OTT Development", href: ROUTES.SERVICES.OTT }
      ]
    },
    {
      title: "Business Portals",
      desc: "Customer portals, agent portals, internal systems, request management, approvals, dashboards, and team workflows.",
      tags: ["Team Portals", "Agent CRM", "Admin Panels"],
      links: [
        { label: "Admin Panels", href: ROUTES.SERVICES.ADMIN_PANELS }
      ]
    },
    {
      title: "Admin Dashboards & API Systems",
      desc: "User management, roles, subscriptions, analytics, notifications, settings, backend APIs, and operational control systems.",
      tags: ["Middleware", "Operator UI", "RBAC Auth"],
      links: [
        { label: "Admin Development", href: ROUTES.SERVICES.ADMIN_PANELS }
      ]
    },
    {
      title: "E-Commerce Platforms",
      desc: "Product catalogs, customer journeys, order flows, admin controls, business presentation, and scalable online store structures.",
      tags: ["Digital Storefront", "Product Catalog", "Order Flows"],
      links: [
        { label: "E-Commerce Case Study", href: "/case-studies/emrey-ecommerce-store" }
      ]
    },
    {
      title: "Marketplace Platforms",
      desc: "Listing systems, search and filters, inquiry flows, inventory management, admin tools, and responsive web experiences.",
      tags: ["Dealer Inventory", "Listings Portal", "Search Filters"],
      links: [
        { label: "Marketplace Case Study", href: "/case-studies/uk-auto-motors-platform" }
      ]
    },
    {
      title: "Workflow Automation Systems",
      desc: "Task flows, approvals, assignments, status tracking, notifications, reporting, and process visibility for business teams.",
      tags: ["Task Queues", "Status Tracker", "Alert Systems"],
      links: [
        { label: "Contact Us", href: ROUTES.CONTACT }
      ]
    }
  ];

  const useCases = [
    {
      title: "Streaming & Media Businesses",
      text: "For IPTV providers, OTT platforms, video streaming products, and media services that need multi-device apps."
    },
    {
      title: "Travel & Airline Agencies",
      text: "For ticketing workflows, agent operations, customer requests, booking support, and structured service management."
    },
    {
      title: "Automotive Businesses",
      text: "For vehicle listings, dealership platforms, inventory dashboards, lead flows, and marketplace-style experiences."
    },
    {
      title: "Retail & E-Commerce Brands",
      text: "For product catalogs, online stores, customer journeys, checkout planning, and business presentation."
    },
    {
      title: "Service Companies",
      text: "For portals, dashboards, customer requests, workflow management, reporting, and business automation."
    },
    {
      title: "Custom Operations Teams",
      text: "For internal tools, admin panels, API systems, role-based access, analytics, and process control."
    }
  ];

  const transformations = [
    {
      title: "Manual Work → Automation",
      desc: "Replace repeated manual steps with structured workflows, reminders, status tracking, and dashboards."
    },
    {
      title: "Scattered Data → Central Control",
      desc: "Bring users, content, requests, settings, and reports into one organized admin system."
    },
    {
      title: "One Screen → Multi-Platform Reach",
      desc: "Expand your product across mobile, Smart TV, web, admin panels, and API-connected systems."
    },
    {
      title: "Idea → Launch-Ready Product",
      desc: "Move from rough requirements to UI/UX, architecture, development, testing, deployment, and support."
    }
  ];

  const steps = [
    { title: "Understand the Business Goal", desc: "Identify operational pain points and targeted platform integrations." },
    { title: "Map Users, Workflows & Platforms", desc: "Plan data routing pathways and user interface mockups." },
    { title: "Plan Features and Architecture", desc: "Select programming components and server/database frameworks." },
    { title: "Design the User Experience", desc: "Craft intuitive remote focus outlines and clean portal layouts." },
    { title: "Build, Test and Integrate", desc: "Program software packages, run lint checks, and test integrations." },
    { title: "Support and Improve", desc: "Track post-deployment usage to optimize loading speeds and queries." }
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-[45%] h-[70%] bg-gradient-to-b from-blue-50/70 to-indigo-50/40 rounded-bl-[120px] -z-10" />

        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Badge variant="soft" className="mb-6">
              Business Software Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              Digital Solutions Built Around Real Business Operations
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Motive Solutions helps companies turn business requirements into practical software solutions, including IPTV and OTT platforms, Smart TV apps, web portals, admin dashboards, marketplaces, e-commerce systems, and workflow automation tools.
            </p>

            <div className="flex flex-wrap gap-4 mb-10 w-full sm:w-auto">
              <Button href={ROUTES.CONTACT} size="lg" className="w-full sm:w-auto">
                Discuss Your Solution
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
            <SolutionsHeroVisual />
          </div>
        </Container>
      </section>

      {/* 2. Solution Categories Section */}
      <Section variant="default" id="solution-categories">
        <Container>
          <SectionHeader
            title="Solutions We Build for Growing Businesses"
            eyebrow="Solutions Overview"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((cat, idx) => (
              <Card key={idx} hoverable={true} className="bg-white border border-border shadow-xs flex flex-col justify-between">
                <CardHeader className="p-8 pb-2 flex-grow">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cat.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-slate-50 border border-border/80 text-[10px] font-semibold text-muted-foreground uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {cat.title}
                  </CardTitle>
                  <CardDescription className="mt-3 text-sm text-muted-foreground leading-relaxed font-normal">
                    {cat.desc}
                  </CardDescription>
                </CardHeader>
                <div className="p-8 pt-2 flex flex-col gap-2 border-t border-border/40 mt-4">
                  {cat.links.map((link, lIdx) => (
                    <Button
                      key={lIdx}
                      href={link.href}
                      variant="ghost"
                      size="sm"
                      className="w-full text-left justify-between p-0 hover:bg-transparent hover:text-primary font-semibold text-xs rounded-none"
                    >
                      {link.label}
                      <svg className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Industry Use Cases Section */}
      <Section variant="muted" id="industry-use-cases" className="border-y border-border">
        <Container>
          <SectionHeader
            title="Software for Different Business Models"
            eyebrow="Use Cases"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white border border-border shadow-xs">
                <h4 className="text-sm font-bold text-foreground mb-1">{useCase.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-normal">{useCase.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. From Problem to Software Section */}
      <Section variant="default" id="problem-to-software">
        <Container>
          <SectionHeader
            title="We Turn Business Problems Into Structured Software"
            eyebrow="Transformation"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {transformations.map((trans, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-border shadow-xs">
                <h4 className="text-sm font-bold text-foreground mb-2">{trans.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-normal">{trans.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Solution Planning Process */}
      <Section variant="muted" id="planning-process" className="border-y border-border">
        <Container>
          <SectionHeader
            title="How We Plan the Right Solution"
            eyebrow="Planning Roadmap"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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

      {/* 6. Related Case Studies Section */}
      <Section variant="default" id="related-case-studies">
        <Container>
          <SectionHeader
            title="Examples of Solutions We Have Built"
            eyebrow="Success Stories"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {CASE_STUDIES.map((study) => (
              <Card key={study.id} className="bg-white border border-border shadow-xs flex flex-col justify-between">
                <CardHeader className="p-6 pb-2">
                  <div className="flex justify-between items-center gap-4 mb-2">
                    <Badge variant="soft" className="text-[10px] px-2 py-0.5">
                      {study.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-base font-bold text-foreground">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-xs leading-relaxed text-muted-foreground font-normal">
                    {study.summary}
                  </CardDescription>
                </CardHeader>
                <div className="p-6 pt-2">
                  <Button
                    href={`/case-studies/${study.slug}`}
                    variant="ghost"
                    size="sm"
                    className="w-full text-left justify-between p-0 hover:bg-transparent hover:text-primary font-semibold text-xs border-t border-border/45 pt-4 rounded-none"
                  >
                    Read Case Study
                    <svg className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Confidentiality Notice */}
      <div className="py-8 bg-slate-50 border-t border-border text-center">
        <Container>
          <p className="text-xs font-medium text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            * Confidentiality Notice: To protect client confidentiality, case studies may use summarized descriptions and safe visual representations instead of private screenshots, credentials, internal data, or sensitive business details.
          </p>
        </Container>
      </div>

      {/* Software Only Notice */}
      <div className="py-6 bg-slate-50 border-t border-border/60 text-center">
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
              Need a Custom Software Solution?
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Share your business problem, users, platforms, and goals. Motive Solutions will help you plan a practical software solution with the right features, structure, and development roadmap.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button href={ROUTES.CONTACT} size="lg" className="w-full sm:w-auto">
                Discuss Your Solution
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
