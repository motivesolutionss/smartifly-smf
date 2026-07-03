import * as React from "react";
import { getMetadata } from "@/lib/seo";
import { ROUTES } from "@/constants/routes";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

// Custom components
import ContactForm from "@/components/forms/ContactForm";

export const metadata = getMetadata({
  title: "Contact Motive Solutions | Request a Software Project Quote",
  description: "Contact Motive Solutions to discuss IPTV app development, OTT platforms, Smart TV apps, Web TV Players, admin panels, APIs, and custom software development projects.",
  path: "/contact",
});

// Interactive checklist mockup for Hero visual
const ContactHeroVisual = () => (
  <div className="relative w-full h-[320px] flex items-center justify-center select-none">
    <div className="absolute w-[240px] h-[240px] rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-60 blur-3xl -z-10" />
    
    <div className="w-[85%] bg-white border border-border rounded-xl shadow-soft p-5 flex flex-col gap-4">
      <div className="flex items-center gap-2 border-b border-border/60 pb-3">
        <span className="w-2.5 h-2.5 rounded bg-primary" />
        <span className="text-[10px] font-black text-foreground tracking-wider uppercase font-mono">Project Requirements</span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2.5 text-[10px] text-foreground">
          <span className="w-4 h-4 rounded bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-bold">✓</span>
          <span>Target Platforms Selected</span>
        </div>
        <div className="flex items-center gap-2.5 text-[10px] text-foreground">
          <span className="w-4 h-4 rounded bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-bold">✓</span>
          <span>Branding Assets Provided</span>
        </div>
        <div className="flex items-center gap-2.5 text-[10px] text-foreground">
          <span className="w-4 h-4 rounded bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-bold">✓</span>
          <span>Xtream API Details Defined</span>
        </div>
        <div className="flex items-center gap-2.5 text-[10px] text-muted-foreground/75">
          <span className="w-4 h-4 rounded border border-border/80 flex items-center justify-center" />
          <span>Optional Billing Integration</span>
        </div>
      </div>
    </div>
  </div>
);

export default function ContactPage() {
  const heroBadges = [
    "IPTV Apps",
    "OTT Platforms",
    "Smart TV Apps",
    "Web Portals",
    "Admin Panels",
    "API Systems",
    "Custom Software"
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Contact Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-[45%] h-[70%] bg-gradient-to-b from-blue-50/70 to-indigo-50/40 rounded-bl-[120px] -z-10" />
        
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Badge variant="soft" className="mb-6">
              Contact Motive Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              Tell Us About Your Software Project
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Share your project goals, target platforms, required features, and business needs. Motive Solutions will review your requirements and help you plan the right software development approach.
            </p>

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
            <ContactHeroVisual />
          </div>
        </Container>
      </section>

      {/* 2. Direct Contact Cards & Form Section */}
      <Section variant="default" id="contact-and-form">
        <Container>
          <ContactForm />
        </Container>
      </Section>

      {/* 3. Software-Only Legal Notice Section */}
      <div className="py-8 bg-slate-50 border-t border-border text-center">
        <Container>
          <p className="text-xs font-medium text-muted-foreground max-w-xl mx-auto leading-relaxed">
            * Legal Notice: Motive Solutions builds IPTV/OTT software only. We do not provide playlists, TV channels, movies, or streaming content.
          </p>
        </Container>
      </div>

      {/* 4. Final CTA / Reassurance Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-background border-t border-border/80">
        <Container>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-primary/10 rounded-3xl p-8 md:p-20 text-center max-w-5xl mx-auto shadow-soft relative">
            <div className="absolute top-0 left-0 w-24 h-24 bg-white/40 rounded-full blur-xl -translate-x-12 -translate-y-12" />
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-white/30 rounded-full blur-2xl translate-x-12 translate-y-12" />

            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-6 leading-tight">
              Not Sure Where to Start?
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Share what you know so far. We can help you clarify the right features, platforms, development approach, and next steps for your software project.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button href={ROUTES.SERVICES.ROOT} size="lg" className="w-full sm:w-auto">
                Explore Services
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
