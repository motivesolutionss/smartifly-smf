import * as React from "react";
import Image from "next/image";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import { FEATURES } from "@/data/features";

// Map feature IDs to generated visual mockup images
function getFeatureVisual(id: string) {
  let src = "";
  let alt = "";

  switch (id) {
    case "live-tv-experience":
      src = "/images/live_tv_cap.png";
      alt = "Live TV Experience";
      break;
    case "vod-series-libraries":
      src = "/images/vod_library_cap.png";
      alt = "VOD & Series Libraries";
      break;
    case "epg-catchup-support":
      src = "/images/epg_guide_cap.png";
      alt = "EPG & Catch-up Support";
      break;
    case "user-accounts-profiles":
      src = "/images/user_profiles_cap.png";
      alt = "User Accounts & Profiles";
      break;
    case "admin-panel-modules":
      src = "/images/admin_panel_cap.png";
      alt = "Admin Panel Modules";
      break;
    case "api-middleware-integration":
      src = "/images/api_middleware_cap.png";
      alt = "API & Middleware Integration";
      break;
    case "analytics-monitoring":
      src = "/images/analytics_charts_cap.png";
      alt = "Analytics & Monitoring";
      break;
    case "security-compliance":
      src = "/images/security_drm_cap.png";
      alt = "Security & Compliance Ready";
      break;
    default:
      return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      sizes="(max-width: 768px) 50vw, 25vw"
    />
  );
}

export default function FeaturesSection() {
  return (
    <Section variant="white" id="platform-features" hasBorderBottom={true}>
      <Container>
        <SectionHeader
          title="Everything Needed to Build Reliable Streaming & Business Platforms"
          eyebrow="Platform Capabilities"
          description="From Live TV and VOD experiences to admin dashboards, APIs, analytics, and secure user management, we build the core modules required for scalable digital products."
          align="center"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="relative h-[220px] sm:h-[280px] md:h-[320px] rounded-xl sm:rounded-2xl overflow-hidden group border border-border shadow-xs hover:border-primary/10 hover:shadow-md transition-all duration-300"
            >
              {/* Full-bleed Background Image */}
              <div className="absolute inset-0 z-0">
                {getFeatureVisual(feature.id)}
                {/* Subtle darkening gradient at the bottom so the floating text box has high contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent z-10" />
              </div>

              {/* Floating Glassmorphic Text Box */}
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl p-2.5 sm:p-4 border border-slate-200/60 shadow-md z-20 transition-all duration-300 group-hover:bottom-2.5 sm:group-hover:bottom-4">
                <h4 className="text-[11px] sm:text-sm md:text-base font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                  {feature.title}
                </h4>
                <p className="text-[9px] sm:text-xs text-muted-foreground leading-relaxed line-clamp-1 sm:line-clamp-2 mt-0.5 sm:mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
