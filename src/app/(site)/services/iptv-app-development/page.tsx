import * as React from "react";
import { ROUTES } from "@/constants/routes";
import { getMetadata } from "@/lib/seo";
import Badge from "@/components/ui/Badge";

// Service Section Imports
import ServiceHeroSection from "@/sections/services/ServiceHeroSection";
import ServiceOverviewSection from "@/sections/services/ServiceOverviewSection";
import ServiceFeaturesSection from "@/sections/services/ServiceFeaturesSection";
import ServicePlatformsSection from "@/sections/services/ServicePlatformsSection";
import ServiceProcessSection from "@/sections/services/ServiceProcessSection";
import ServiceFaqSection from "@/sections/services/ServiceFaqSection";
import ServiceCtaSection from "@/sections/services/ServiceCtaSection";

export const metadata = getMetadata({
  title: "IPTV App Development Company",
  description: "Motive Solutions builds custom IPTV app development solutions with Live TV, VOD, Series, EPG, provider API integration, Smart TV support, web player options, and admin panel readiness.",
  path: "/services/iptv-app-development",
});

// CSS-Only IPTV App Ecosystem Mockup
const IptvEcosystemVisual = () => (
  <div className="relative w-full h-[380px] sm:h-[450px] flex items-center justify-center select-none">
    {/* Backdrop glowing sphere */}
    <div className="absolute w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-60 blur-3xl -z-10" />

    {/* Main App Dashboard Frame */}
    <div className="absolute w-[88%] sm:w-[82%] h-[250px] sm:h-[270px] bg-white border border-border rounded-xl shadow-soft p-4 z-10 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded bg-primary" />
          <span className="text-[9px] font-black text-foreground tracking-wider uppercase font-mono">IPTV Play</span>
        </div>
        <Badge variant="soft" className="text-[8px] px-1.5 py-0.5 font-bold uppercase tracking-wider">
          Player Engine v2.0
        </Badge>
      </div>

      <div className="flex-grow flex gap-3 my-3 overflow-hidden">
        {/* Mock Side Menu */}
        <div className="w-[30%] border-r border-border/40 pr-2 flex flex-col gap-1">
          <span className="text-[7px] font-extrabold p-1 bg-primary/10 text-primary rounded leading-none">Live Channels</span>
          <span className="text-[7px] font-semibold p-1 text-muted-foreground leading-none">Movies VOD</span>
          <span className="text-[7px] font-semibold p-1 text-muted-foreground leading-none">TV Series</span>
          <span className="text-[7px] font-semibold p-1 text-muted-foreground leading-none">EPG Guide</span>
        </div>

        {/* Video Player Display */}
        <div className="flex-grow flex flex-col gap-2">
          <div className="flex-grow bg-slate-900 rounded-lg relative overflow-hidden flex items-center justify-center">
            <span className="text-[8px] text-white/40 font-semibold uppercase tracking-widest">
              Live Stream Preview
            </span>
            <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-black/40 backdrop-blur-xs p-1 rounded flex justify-between items-center text-[6px] text-white/80">
              <span className="flex items-center gap-0.5">
                <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                Live: Feed Stable
              </span>
              <span>1080p @ 60fps</span>
            </div>
          </div>
          {/* Timeline */}
          <div className="p-1 bg-slate-50 border border-border/50 rounded flex justify-between items-center text-[7px]">
            <span className="font-semibold text-foreground truncate max-w-[100px]">Tech Talk Live</span>
            <span className="text-primary text-[6.5px] font-semibold flex-shrink-0">Next: News Recap</span>
          </div>
        </div>
      </div>

      {/* Footer statistics */}
      <div className="flex items-center justify-between text-[8px] text-muted-foreground border-t border-border/40 pt-2">
        <span>Decoder: Hardware-Accelerated</span>
        <span className="text-green-600 font-bold flex items-center gap-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Synchronized
        </span>
      </div>
    </div>

    {/* Floating Card 1: Channel List */}
    <div className="absolute top-4 left-0 sm:left-4 bg-white border border-border rounded-lg p-2 shadow-md z-20 flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
      <span className="text-[9px] font-bold text-foreground">Channel #101 HD</span>
    </div>

    {/* Floating Card 2: Xtream API */}
    <div className="absolute bottom-4 right-0 sm:right-4 bg-white border border-border rounded-lg p-2 shadow-md z-20 flex items-center gap-2">
      <span className="text-[8.5px] font-extrabold text-green-600 uppercase font-mono tracking-wider">Xtream API</span>
      <span className="text-[9.5px] font-semibold text-foreground">Online</span>
    </div>

    {/* Floating Card 3: Platform Badges */}
    <div className="absolute top-8 right-2 sm:right-6 bg-white border border-border rounded-lg p-2 shadow-md z-20 flex items-center gap-2">
      <span className="text-[8.5px] text-primary font-extrabold uppercase tracking-wider">OS export:</span>
      <span className="text-[9px] text-foreground font-semibold">TV, Web, App</span>
    </div>
  </div>
);

export default function IptvAppDevelopmentPage() {
  const heroBadges = [
    "Live TV",
    "VOD & Series",
    "EPG",
    "Xtream Codes API",
    "M3U Support",
    "Smart TV Apps",
    "Web Player",
    "Admin Panel Ready"
  ];

  const overviewPoints = [
    "Branded IPTV player apps",
    "Mobile and Smart TV user experiences",
    "Live TV, VOD, Series, and EPG flows",
    "Provider API integration",
    "Admin panel and backend readiness",
    "Long-term update and maintenance planning"
  ];

  const coreFeatures = [
    {
      title: "Live TV Experience",
      description: "Channel categories, favorites, player controls, search, EPG support, and smooth playback flows."
    },
    {
      title: "VOD Library",
      description: "Movie browsing, posters, metadata, genres, resume playback, and search-ready layouts."
    },
    {
      title: "Series Experience",
      description: "Seasons, episodes, continue watching, metadata, and organized viewing flows."
    },
    {
      title: "EPG Integration",
      description: "Program guide layouts, schedule views, timeline UI, and provider-based EPG data support."
    },
    {
      title: "Catch-up Ready Layouts",
      description: "Replay-focused user flows where supported by the provider API or streaming infrastructure."
    },
    {
      title: "User Accounts",
      description: "Login screens, account status, profile handling, access rules, and personalized experiences."
    },
    {
      title: "Favorites & Resume Playback",
      description: "User-friendly shortcuts for saved channels, saved content, and resumed viewing."
    },
    {
      title: "Parental Control",
      description: "PIN-based protected sections and restricted content access flows where required."
    }
  ];

  const integrationFeatures = [
    {
      title: "Xtream Codes API",
      description: "Standard API integration to authenticate subscribers and fetch channels, VOD, and EPG tables."
    },
    {
      title: "M3U Playlist Support",
      description: "Flexible parser compatibility supporting custom remote lists, caching, and category splits."
    },
    {
      title: "Custom Middleware APIs",
      description: "Synchronize client apps with private operator servers, databases, and custom REST API endpoints."
    },
    {
      title: "Authentication Systems",
      description: "Secure login gates, tokenized URL sessions, and device validation checks to avoid account reuse."
    },
    {
      title: "Billing & Subscriptions",
      description: "Optional sync channels with provider billing systems for automatic access suspension on renewals."
    },
    {
      title: "Analytics & Notifications",
      description: "Integrations for remote push messages, operational alerts, app updates, and viewer logs."
    },
    {
      title: "Admin Panel APIs",
      description: "Backend connections for operator settings, server shifts, DNS management, and logo config updates."
    },
    {
      title: "CDN & DRM Planning",
      description: "Optional structural planning and support channels for DRM decoders or CDN endpoints (e.g. Widevine)."
    }
  ];

  const supportedPlatforms = [
    {
      name: "Mobile",
      tags: ["Android", "iOS", "Tablets"]
    },
    {
      name: "Smart TV",
      tags: ["Android TV", "Samsung Tizen", "LG webOS", "Fire TV"]
    },
    {
      name: "Web",
      tags: ["Web TV Player", "Browser Access", "Customer Portal"]
    },
    {
      name: "Backend",
      tags: ["Admin Panel", "API Layer", "Analytics", "Notifications"]
    }
  ];

  const processSteps = [
    {
      title: "Requirements & API Review",
      description: "We analyze your stream formats, middleware preferences, and target operating systems."
    },
    {
      title: "UI/UX & Platform Planning",
      description: "We customize visual layouts, optimizing D-pad and touch gestures for each target device."
    },
    {
      title: "App Development",
      description: "We compile native-compliant and web-based app bundles conforming to store requirements."
    },
    {
      title: "Player & API Integration",
      description: "We connect the video player framework with Stalker/Xtream API models and load EPG timelines."
    },
    {
      title: "Testing Across Devices",
      description: "We test buffering speeds, DNS geo-failovers, CPU cycles, and remote controls compliance."
    },
    {
      title: "Deployment & Maintenance",
      description: "We handle App Store, Google Play, LG, and Samsung store packaging uploads and release support."
    }
  ];

  const serviceFaqs = [
    {
      question: "Do you provide IPTV channels or subscriptions?",
      answer: "No. Motive Solutions builds IPTV and OTT software only. We do not provide, sell, host, or distribute TV channels, playlists, movies, or streaming content."
    },
    {
      question: "Can you build an IPTV app with our brand name?",
      answer: "Yes. We can build a branded IPTV app with your app name, logo, colors, splash screen, provider API, and platform-specific user experience."
    },
    {
      question: "Can you integrate Xtream Codes API or M3U?",
      answer: "Yes. We can integrate Xtream Codes API, M3U, custom middleware, authentication systems, billing systems, analytics, and other required APIs where technically and legally appropriate."
    },
    {
      question: "Can you build IPTV apps for Smart TVs?",
      answer: "Yes. We can develop IPTV apps for Android TV, Samsung Tizen, LG webOS, Fire TV, and other supported platforms depending on project requirements."
    },
    {
      question: "Can you build an admin panel with the IPTV app?",
      answer: "Yes. We can build admin dashboards for users, subscriptions, settings, branding, notifications, app versions, analytics, and operational workflows."
    },
    {
      question: "Can you maintain the IPTV app after launch?",
      answer: "Yes. We can provide maintenance, bug fixes, performance improvements, platform updates, feature upgrades, and long-term support."
    }
  ];

  return (
    <div className="flex flex-col">
      <ServiceHeroSection
        eyebrow="IPTV App Development"
        title="Custom IPTV App Development for Mobile, Smart TV & Web"
        description="Motive Solutions builds branded IPTV applications with Live TV, VOD, Series, EPG, favorites, catch-up-ready layouts, provider API integration, and platform-specific user experiences for mobile, Smart TV, and web platforms."
        primaryCta={{
          label: "Request IPTV App Quote",
          href: ROUTES.CONTACT
        }}
        secondaryCta={{
          label: "View White-Label Apps",
          href: ROUTES.SERVICES.WHITE_LABEL
        }}
        badges={heroBadges}
        visualElement={<IptvEcosystemVisual />}
      />

      <ServiceOverviewSection
        eyebrow="What We Build"
        title="IPTV Apps Built Around Your Platform, Brand & Users"
        description="Motive Solutions builds customized IPTV player software tailored for broadcasters, service operators, ISPs, and media agencies. We do not provide, resell, or distribute media streams or channels. Clients must have their own content licenses, streaming infrastructure, or provider APIs ready before commencing deployment."
        points={overviewPoints}
        legalDisclaimer="Motive Solutions builds IPTV/OTT software only. We do not provide playlists, TV channels, movies, or streaming content."
      />

      <ServiceFeaturesSection
        title="Core Features for a Modern IPTV Experience"
        eyebrow="Client Player App"
        description="High-quality, pre-compiled frontend player modules optimized for simple navigation and stable playback streams."
        features={coreFeatures}
        columns={4}
        variant="default"
        id="player-core-features"
      />

      <ServiceFeaturesSection
        title="Provider API, Middleware & Backend Integration"
        eyebrow="API & Integrations"
        description="We connect IPTV apps with the systems your business already uses, including provider APIs, middleware, billing systems, analytics, and admin dashboards."
        features={integrationFeatures}
        columns={4}
        variant="muted"
        id="api-integrations"
      />

      <ServicePlatformsSection
        title="IPTV Apps for the Screens Your Users Watch On"
        eyebrow="Supported Screens"
        description="Deployment pipelines supporting native OS compile packages and web player codebases."
        platforms={supportedPlatforms}
      />

      <ServiceProcessSection
        title="How We Build Your IPTV App"
        eyebrow="Workflow Stages"
        description="Our step-by-step roadmap for delivering a production-ready application."
        steps={processSteps}
      />

      <ServiceFaqSection
        title="Questions Clients Ask Before Starting"
        eyebrow="IPTV FAQs"
        description="Here are common questions about working with Motive Solutions on IPTV app development projects."
        faqs={serviceFaqs}
      />

      <ServiceCtaSection
        title="Ready to Build a Custom IPTV App?"
        description="Share your IPTV app requirements with Motive Solutions and we will help you plan a scalable, branded, and professional software solution for your target platforms."
        primaryCta={{
          label: "Request a Project Quote",
          href: ROUTES.CONTACT
        }}
        secondaryCta={{
          label: "Explore White-Label IPTV Apps",
          href: ROUTES.SERVICES.WHITE_LABEL
        }}
        supportingText="Custom IPTV & OTT apps • Smart TV platforms • web portals • admin panels • business software"
      />
    </div>
  );
}
