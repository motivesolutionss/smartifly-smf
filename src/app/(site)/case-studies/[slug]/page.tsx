import * as React from "react";
import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/data/case-studies";
import { ROUTES } from "@/constants/routes";
import { getMetadata } from "@/lib/seo";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import Badge from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);

  return getMetadata({
    title: study ? `${study.title} Case Study` : "Case Study Detail",
    description: study?.summary || "Read about our client success stories and custom software implementations.",
    path: `/case-studies/${slug}`,
  });
}

// Custom CSS Visuals based on Category/ID
const IptvVisual = () => (
  <div className="relative w-full h-[280px] sm:h-[320px] flex items-center justify-center select-none">
    <div className="absolute w-[200px] h-[200px] rounded-full bg-red-100/50 opacity-60 blur-3xl -z-10" />
    <div className="w-[85%] h-[180px] bg-slate-900 border-[6px] border-slate-950 rounded-lg shadow-lg flex flex-col justify-between overflow-hidden relative">
      <div className="p-2 border-b border-white/5 flex items-center justify-between text-[7px] text-white/50">
        <span>SmartStream TV</span>
        <span>Online</span>
      </div>
      <div className="flex-grow p-3 flex items-center justify-center bg-white/5">
        <span className="text-[9px] font-bold text-white uppercase tracking-wider">Live Sports Stream</span>
      </div>
      <div className="p-2 bg-black/45 flex justify-between items-center text-[6px] text-white/70">
        <span>EPG: Matches Live</span>
        <span>1080p HD</span>
      </div>
    </div>
  </div>
);

const PortalVisual = () => (
  <div className="relative w-full h-[280px] sm:h-[320px] flex items-center justify-center select-none">
    <div className="absolute w-[200px] h-[200px] rounded-full bg-rose-100/50 opacity-60 blur-3xl -z-10" />
    <div className="w-[85%] bg-white border border-border rounded-xl shadow-soft p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between border-b border-border/50 pb-2">
        <span className="text-[8px] font-black text-foreground uppercase tracking-wider font-mono">Flight Agent Log</span>
        <Badge variant="soft" className="text-[6.5px] px-1.5 py-0.5">Console Active</Badge>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="p-1.5 bg-slate-50 border border-border/60 rounded flex justify-between items-center text-[7.5px]">
          <span className="font-bold text-foreground">Flight REF-9024</span>
          <span className="text-green-500 font-bold">Checked-In</span>
        </div>
        <div className="p-1.5 bg-slate-50 border border-border/60 rounded flex justify-between items-center text-[7.5px]">
          <span className="font-bold text-foreground">Flight REF-4091</span>
          <span className="text-amber-500 font-bold">On Hold</span>
        </div>
      </div>
    </div>
  </div>
);

const ListingVisual = () => (
  <div className="relative w-full h-[280px] sm:h-[320px] flex items-center justify-center select-none">
    <div className="absolute w-[200px] h-[200px] rounded-full bg-green-100/50 opacity-60 blur-3xl -z-10" />
    <div className="w-[85%] bg-white border border-border rounded-xl shadow-soft p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between border-b border-border/50 pb-2">
        <span className="text-[8px] font-black text-foreground uppercase tracking-wider font-mono">Auto Catalog</span>
        <span className="text-[7px] text-muted-foreground">4 Active Listings</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="p-1.5 bg-slate-50 border border-border/60 rounded flex flex-col gap-0.5">
          <span className="text-[7.5px] font-bold text-foreground truncate">SUV Premium</span>
          <span className="text-[6.5px] text-muted-foreground">REF-8041</span>
        </div>
        <div className="p-1.5 bg-slate-50 border border-border/60 rounded flex flex-col gap-0.5">
          <span className="text-[7.5px] font-bold text-foreground truncate">Sedan Hybrid</span>
          <span className="text-[6.5px] text-muted-foreground">REF-2109</span>
        </div>
      </div>
    </div>
  </div>
);

const EcomVisual = () => (
  <div className="relative w-full h-[280px] sm:h-[320px] flex items-center justify-center select-none">
    <div className="absolute w-[200px] h-[200px] rounded-full bg-amber-100/50 opacity-60 blur-3xl -z-10" />
    <div className="w-[85%] bg-white border border-border rounded-xl shadow-soft p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between border-b border-border/50 pb-2">
        <span className="text-[8px] font-black text-foreground uppercase tracking-wider font-mono">Checkout Card</span>
        <Badge variant="soft" className="text-[7px] px-1.5 py-0.5 text-primary">Secure Cart</Badge>
      </div>
      <div className="p-2 bg-slate-50 border border-border/60 rounded flex flex-col gap-1.5 text-[7.5px]">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal:</span>
          <span className="font-bold text-foreground">Calculated</span>
        </div>
        <div className="flex justify-between border-t border-border/40 pt-1">
          <span className="text-muted-foreground">Shipping:</span>
          <span className="text-green-600 font-bold">Standard Free</span>
        </div>
      </div>
    </div>
  </div>
);

const renderVisual = (id: string) => {
  switch (id) {
    case "smartifly-iptv":
      return <IptvVisual />;
    case "flyndeal-portal":
      return <PortalVisual />;
    case "uk-auto-motors":
      return <ListingVisual />;
    case "emrey-ecommerce":
      return <EcomVisual />;
    default:
      return <IptvVisual />;
  }
};

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  // Define custom deliverables based on case studies ID
  const getDeliverables = (id: string) => {
    switch (id) {
      case "smartifly-iptv":
        return [
          { title: "IPTV App Ecosystem", desc: "Native compilations for TV systems and mobile packages." },
          { title: "Streaming Flows", desc: "Polished interfaces for Live TV channels, movies, and EPG tabs." },
          { title: "Provider API Integration", desc: "Integrated Xtream Codes API to authenticate user logins." },
          { title: "Responsive Layouts", desc: "Adaptive layouts ensuring legibility on mobile and smart screens." },
          { title: "Admin Portal Sync", desc: "Synchronized with backend panels to allow remote logo configurations." },
          { title: "TV Remote focus states", desc: "Ensured remote controller D-pad navigation works smoothly." }
        ];
      case "flyndeal-portal":
        return [
          { title: "Ticketing Workflows", desc: "Custom reservation screens designed for ticket desks." },
          { title: "Inquiry Management", desc: "Centralized queues for agent request sorting." },
          { title: "Dashboard controls", desc: "Structured administrative options to search user logs." },
          { title: "Service Operations", desc: "Database indexes permitting fast flight parameter lookups." },
          { title: "Role-based controls", desc: "Isolate customer records from support agent panels." },
          { title: "Business portal UI", desc: "Clean layout configurations suited for travel operators." }
        ];
      case "uk-auto-motors":
        return [
          { title: "Vehicle Listing System", desc: "Dealer forms facilitating automotive inventory submissions." },
          { title: "Search Experience", desc: "Advanced filter tags for category, fuel, and year." },
          { title: "Inventory Management", desc: "Catalog dashboards letting sellers toggle active listings." },
          { title: "Customer inquiry flows", desc: "Secure contact forms sending alerts directly to dealers." },
          { title: "Marketplace UI", desc: "Responsive layout grid displaying vehicle cards cleanly." },
          { title: "Web Platform Build", desc: "Lightweight web architecture optimizing listing load speeds." }
        ];
      case "emrey-ecommerce":
        return [
          { title: "Product Catalog", desc: "Facated search filters and categorizations for shopping products." },
          { title: "Shopping Journey", desc: "Simplified catalog checkouts maximizing user conversion rates." },
          { title: "Order Flow Planning", desc: "Transactional database mappings tracking active orders." },
          { title: "Business Presentation", desc: "About Us pages and brand highlights showcasing company capabilities." },
          { title: "Admin Readiness", desc: "Prepared code paths for inventory additions and pricing shifts." },
          { title: "Responsive Storefront", desc: "Optimized mobile web browsing speeds on low network connections." }
        ];
      default:
        return [];
    }
  };

  const deliverables = getDeliverables(study.id);

  return (
    <div className="flex flex-col">
      {/* 1. Case Study Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-[45%] h-[70%] bg-gradient-to-b from-blue-50/70 to-indigo-50/40 rounded-bl-[120px] -z-10" />

        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Badge variant="soft" className="mb-6">
              {study.industry}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              {study.title}
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              {study.summary}
            </p>

            <div className="flex flex-wrap gap-4 mb-10 w-full sm:w-auto">
              <Button href={ROUTES.CONTACT} size="lg" className="w-full sm:w-auto">
                Start a Similar Project
              </Button>
              <Button href={ROUTES.CASE_STUDIES.ROOT} variant="outline" size="lg" className="w-full sm:w-auto">
                View All Case Studies
              </Button>
            </div>

            {/* Tags list */}
            <div className="w-full border-t border-border/80 pt-6">
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-slate-50 border border-border text-[11px] font-semibold text-foreground uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 w-full flex items-center justify-center">
            {renderVisual(study.id)}
          </div>
        </Container>
      </section>

      {/* 2. Project Snapshot Section */}
      <Section variant="muted" id="project-snapshot" className="border-y border-border">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="p-4 bg-white border border-border rounded-xl">
              <span className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Industry</span>
              <span className="text-sm font-bold text-foreground truncate block">{study.industry}</span>
            </div>
            <div className="p-4 bg-white border border-border rounded-xl">
              <span className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Project Type</span>
              <span className="text-sm font-bold text-foreground truncate block">{study.tags[0] || "Custom App"}</span>
            </div>
            <div className="p-4 bg-white border border-border rounded-xl">
              <span className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Platforms</span>
              <span className="text-sm font-bold text-foreground truncate block">{study.tags.slice(1, 3).join(", ") || "Web / Mobile"}</span>
            </div>
            <div className="p-4 bg-white border border-border rounded-xl">
              <span className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Focus Areas</span>
              <span className="text-sm font-bold text-foreground truncate block">Custom Code</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Challenge Section */}
      <Section variant="default" id="project-challenge">
        <Container className="max-w-4xl mx-auto">
          <SectionHeader
            title="The Business Challenge"
            eyebrow="Challenge"
            align="left"
          />
          <p className="text-base text-muted-foreground leading-relaxed font-normal">
            {study.challenge}
          </p>
        </Container>
      </Section>

      {/* 4. Solution Section */}
      <Section variant="muted" id="project-solution" className="border-y border-border">
        <Container className="max-w-4xl mx-auto">
          <SectionHeader
            title="The Solution We Planned & Built"
            eyebrow="Solution"
            align="left"
          />
          <p className="text-base text-muted-foreground leading-relaxed font-normal">
            {study.solution}
          </p>
        </Container>
      </Section>

      {/* 5. Key Features / Deliverables Section */}
      <Section variant="default" id="key-deliverables">
        <Container>
          <SectionHeader
            title="Key Deliverables & Built Modules"
            eyebrow="Deliverables"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {deliverables.map((item, idx) => (
              <Card
                key={idx}
                hoverable={true}
                className="bg-white border-border/80 shadow-xs hover:border-primary/20 flex flex-col justify-between"
              >
                <CardHeader className="p-6">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-xs mb-3">
                    {(idx + 1).toString().padStart(2, "0")}
                  </div>
                  <CardTitle className="text-base font-bold text-foreground">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-xs leading-relaxed text-muted-foreground font-normal">
                    {item.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. Process / Approach Section */}
      <Section variant="muted" id="process-timeline" className="border-y border-border">
        <Container>
          <SectionHeader
            title="How We Approached the Project"
            eyebrow="Process Workflow"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Requirements Review", desc: "We review operational rules, content APIs, and user goals." },
              { title: "Product Structure Planning", desc: "We map backend structures, database indexes, and layouts." },
              { title: "UI/UX & Development", desc: "We build responsive page elements and integrate APIs." },
              { title: "Testing, Launch & Improvement", desc: "We test buffering, OS packaging, and remote controllers." }
            ].map((step, idx) => (
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

      {/* 7. Outcome Section */}
      <Section variant="default" id="project-outcome">
        <Container className="max-w-4xl mx-auto">
          <SectionHeader
            title="Project Outcome"
            eyebrow="Outcome"
            align="left"
          />
          <ul className="space-y-3 mb-8">
            {study.results.map((result, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                <span className="text-primary text-[10.5px] font-bold mt-0.5">✓</span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground leading-relaxed font-normal">
            The project created a clearer digital experience, improved operational structure, and provided a scalable foundation for future platform growth.
          </p>
        </Container>
      </Section>

      {/* 8. Confidentiality Notice */}
      <div className="py-8 bg-slate-50 border-t border-border text-center">
        <Container>
          <p className="text-xs font-medium text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            * Confidentiality Notice: To protect client confidentiality, this case study uses summarized descriptions and safe visual representations instead of private screenshots, credentials, internal data, or sensitive business details.
          </p>
        </Container>
      </div>

      {/* 9. Final CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-background border-t border-border/80">
        <Container>
          <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-primary/10 rounded-3xl p-8 md:p-20 text-center max-w-5xl mx-auto shadow-soft relative">
            <div className="absolute top-0 left-0 w-24 h-24 bg-white/40 rounded-full blur-xl -translate-x-12 -translate-y-12" />
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-white/30 rounded-full blur-2xl translate-x-12 translate-y-12" />

            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-6 leading-tight">
              Want to Build Something Similar?
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Share your project idea with Motive Solutions and we will help you plan the right software structure, features, platforms, and development roadmap.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button href={ROUTES.CONTACT} size="lg" className="w-full sm:w-auto">
                Discuss Your Project
              </Button>
              <Button href={ROUTES.SERVICES.ROOT} variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Services
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
