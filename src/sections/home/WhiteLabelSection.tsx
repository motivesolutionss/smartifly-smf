import * as React from "react";
import Image from "next/image";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { ROUTES } from "@/constants/routes";

export default function WhiteLabelSection() {
  const points = [
    "Custom app name, logo, colors, and splash screen",
    "IPTV/OTT provider API integration (Stalker/Xtream Codes)",
    "Android, iOS, Smart TV, Fire TV, and web player support",
    "Live TV, VOD, Series, EPG, favorites, and catch-up-ready layouts",
    "Optional admin panel for users, settings, branding, and alerts",
    "Future-ready architecture for system updates and technical support",
  ];

  return (
    <Section variant="blue-50" id="white-label-section" className="bg-gradient-to-r from-blue-50 to-indigo-50 border-y border-border/80">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Premium Generated Image (Enlarged to 6/12 columns, aspect-square for 1:1 fit) */}
        <div className="lg:col-span-6 relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white/60 bg-slate-900 group">
          <Image
            src="/images/whitelabel_builder_mockup.png"
            alt="White-Label IPTV and OTT App Builder Mockup"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-103"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {/* Subtle gradient overlay to match blue/indigo section theme */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay pointer-events-none" />
        </div>

        {/* Right Column: Context and details (6/12 columns) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <Badge variant="soft" className="mb-4">
            White-Label Streaming Apps
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Launch a Branded IPTV or OTT App <br />
            Under Your Own Name
          </h2>
          
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            We build and compile white-label IPTV and OTT applications customized with your brand identity, platform requirements, provider API, user experience, and target devices. 
            <span className="block mt-3 text-xs font-semibold text-primary/95">
              * Note: Motive Solutions builds IPTV/OTT software only. We do not provide playlists, TV channels, movies, or streaming content.
            </span>
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10 w-full">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <Button href={ROUTES.CONTACT} size="lg" className="w-full sm:w-auto">
              Start Your White-Label App
            </Button>
            <Button href={ROUTES.SERVICES.WHITE_LABEL} variant="outline" size="lg" className="w-full sm:w-auto">
              View IPTV Services
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
