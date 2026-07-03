import * as React from "react";
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
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        {/* Left Column: Context and details */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
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

        {/* Right Column: Interactive CSS Brand Customization Mockup */}
        <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[450px] flex items-center justify-center">
          {/* Backdrop Glow */}
          <div className="absolute w-[300px] sm:w-[350px] h-[300px] sm:h-[350px] rounded-full bg-gradient-to-tr from-red-200 to-rose-100 opacity-60 blur-3xl" />

          {/* Builder Panel */}
          <div className="absolute w-[90%] sm:w-[85%] bg-white border border-border rounded-xl shadow-soft p-5 z-10 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-mono">App Configurator</span>
              </div>
              <div className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[8px] font-bold uppercase tracking-wide">
                Active Builder
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {/* App Name Input Field */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wide">App Bundle Name</span>
                <div className="p-3 border border-border bg-slate-50 rounded-lg text-xs font-semibold text-foreground flex items-center justify-between">
                  <span>My Brand Player</span>
                  <span className="text-[8px] text-green-500 font-bold uppercase">Verified</span>
                </div>
              </div>

              {/* Accent Color Selection */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wide">Accent Theme Color</span>
                <div className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-primary border-2 border-primary/20 cursor-pointer shadow-xs" />
                  <span className="w-5 h-5 rounded-full bg-teal-500 cursor-pointer hover:scale-105 transition-transform" />
                  <span className="w-5 h-5 rounded-full bg-orange-500 cursor-pointer hover:scale-105 transition-transform" />
                  <span className="w-5 h-5 rounded-full bg-purple-500 cursor-pointer hover:scale-105 transition-transform" />
                  <span className="w-5 h-5 rounded-full bg-slate-700 cursor-pointer hover:scale-105 transition-transform" />
                </div>
              </div>

              {/* API Endpoint Input Field */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wide">Operator API Endpoint</span>
                <div className="p-2.5 bg-slate-50 border border-border/60 rounded text-[9.5px] text-muted-foreground font-mono truncate">
                  https://api.yourbrand.com/xtream/v2
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card: Logo Config */}
          <div className="absolute top-4 left-0 sm:left-4 bg-white border border-border rounded-lg p-2.5 shadow-md z-20 flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs">L</div>
            <span className="text-[10px] font-semibold text-foreground">Custom Logo Loaded</span>
          </div>

          {/* Floating Card: Device Targets */}
          <div className="absolute bottom-4 right-0 sm:right-4 bg-white border border-border rounded-lg p-2.5 shadow-md z-20 flex items-center gap-2">
            <span className="text-[9px] font-bold text-primary uppercase tracking-wide">Build Export:</span>
            <span className="text-[10px] text-foreground font-semibold">Tizen, webOS, tvOS, APK</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
