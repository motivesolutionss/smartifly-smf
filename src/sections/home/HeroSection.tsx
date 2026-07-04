import * as React from "react";
import Image from "next/image";
import Container from "@/components/common/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { ROUTES } from "@/constants/routes";

export default function HeroSection() {
  const highlights = [
    "IPTV & OTT Apps",
    "Smart TV Platforms",
    "Web & Mobile Solutions",
    "Admin Panels",
    "API Integrations",
  ];

  return (
    <section className="relative py-10 lg:py-16 overflow-hidden bg-background border-b border-border/40 min-h-[360px] lg:min-h-[420px] flex items-center">
      {/* Background Image: Covers the entire hero banner */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/smpbanner.png"
          alt="Motive Solutions Console Mockup"
          fill
          className="object-contain object-right opacity-90"
          sizes="100vw"
          priority
        />
        {/* Gradient overlay to fade to solid background color for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl flex flex-col items-start text-left">
          <Badge variant="soft" className="mb-6">
            Custom IPTV, OTT & Software Development
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
            Build Premium Streaming Apps & <br />
            <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
              Business Software
            </span>{" "}
            for Every Screen
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">
            Motive Solutions develops custom IPTV, OTT, Smart TV, mobile, web, and business software solutions for companies that need scalable, branded, and performance-focused digital products.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 w-full sm:w-auto">
            <Button href={ROUTES.CONTACT} size="lg" className="w-full sm:w-auto">
              Request a Project Quote
            </Button>
            <Button href={ROUTES.SERVICES.ROOT} variant="outline" size="lg" className="w-full sm:w-auto">
              Explore Our Services
            </Button>
          </div>

          {/* Highlights / Trust Indicators */}
          <div className="w-full border-t border-border/80 pt-8">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Specialized Competencies:
            </h4>
            <div className="flex flex-wrap gap-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-border text-xs font-medium text-foreground hover:border-primary/20 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
