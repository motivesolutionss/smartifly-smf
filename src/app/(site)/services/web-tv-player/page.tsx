import * as React from "react";
import { ROUTES } from "@/constants/routes";
import { getMetadata } from "@/lib/seo";

// Service Section Imports
import ServiceHeroSection from "@/sections/services/ServiceHeroSection";
import ServiceOverviewSection from "@/sections/services/ServiceOverviewSection";
import ServiceFeaturesSection from "@/sections/services/ServiceFeaturesSection";
import ServicePlatformsSection from "@/sections/services/ServicePlatformsSection";
import ServiceProcessSection from "@/sections/services/ServiceProcessSection";
import ServiceFaqSection from "@/sections/services/ServiceFaqSection";
import ServiceCtaSection from "@/sections/services/ServiceCtaSection";

export const metadata = getMetadata({
  title: "Web TV Player Development",
  description: "Motive Solutions builds custom Web TV Player solutions for IPTV, OTT, browser streaming, Live TV, VOD, Series, EPG, customer portals, provider API integration, and admin panel readiness.",
  path: "/services/web-tv-player",
});

// CSS-Only Web TV Player Browser Mockup
const WebPlayerEcosystemVisual = () => (
  <div className="relative w-full h-[380px] sm:h-[450px] flex items-center justify-center select-none">
    {/* Backdrop glow */}
    <div className="absolute w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-60 blur-3xl -z-10" />

    {/* Browser Window Frame */}
    <div className="absolute w-[92%] sm:w-[86%] h-[240px] sm:h-[260px] bg-white border border-border rounded-xl shadow-soft z-10 flex flex-col justify-between overflow-hidden">
      {/* Browser Tab/URL Bar */}
      <div className="bg-slate-50 border-b border-border/80 p-2 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
        </div>
        <div className="bg-white border border-border/60 rounded px-3 py-0.5 text-[6.5px] font-mono text-muted-foreground w-1/2 text-center select-all">
          https://play.motivesolutions.uk
        </div>
        <div className="w-4 h-4 rounded-full bg-slate-200" />
      </div>

      {/* Web App Layout */}
      <div className="flex-grow flex gap-2 p-2.5 overflow-hidden bg-slate-50/20">
        {/* Sidebar Channel List */}
        <div className="w-[30%] border border-border/60 rounded bg-slate-50 p-1.5 flex flex-col gap-1">
          <span className="text-[6.5px] font-extrabold text-foreground border-b border-border/40 pb-0.5">Channels</span>
          <span className="text-[6.5px] font-semibold text-primary truncate">101 Entertainment</span>
          <span className="text-[6.5px] text-muted-foreground truncate">102 Movie Premium</span>
          <span className="text-[6.5px] text-muted-foreground truncate">103 Sports Feed</span>
        </div>

        {/* Video Player Display */}
        <div className="flex-grow flex flex-col gap-2">
          <div className="flex-grow bg-slate-900 rounded-lg relative overflow-hidden flex items-center justify-center">
            <span className="text-[8px] text-white/40 font-semibold uppercase tracking-wider">Web Streaming</span>
            {/* Play controls overlay */}
            <div className="absolute bottom-1 right-1 left-1 bg-black/40 backdrop-blur-xs p-1 rounded flex justify-between items-center text-[5.5px] text-white/80">
              <span>00:45 / 01:30</span>
              <span>HD 720p</span>
            </div>
          </div>
          {/* EPG Timeline bar */}
          <div className="p-1.5 bg-white border border-border/50 rounded flex justify-between items-center text-[6.5px]">
            <span className="font-semibold text-foreground truncate">EPG Now: Cinema Hour</span>
            <span className="text-primary font-bold">Live</span>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="p-2 border-t border-border/40 flex justify-between items-center text-[7.5px] text-muted-foreground">
        <span>Responsive: Desktop, Mobile, Tablet</span>
        <span className="text-green-600 font-bold flex items-center gap-0.5">
          <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
          HLS Engine Active
        </span>
      </div>
    </div>

    {/* Floating Card 1: API Endpoint Status */}
    <div className="absolute top-4 left-0 sm:left-4 bg-white border border-border rounded-lg p-2 shadow-md z-20 flex items-center gap-2">
      <div className="w-2 h-2 rounded bg-green-500 animate-pulse" />
      <span className="text-[9px] font-bold text-foreground">API Synced</span>
    </div>

    {/* Floating Card 2: Devices badge */}
    <div className="absolute bottom-4 right-0 sm:right-4 bg-white border border-border rounded-lg p-2 shadow-md z-20 flex items-center gap-2">
      <span className="text-[8.5px] font-extrabold text-blue-600 uppercase font-mono tracking-wider">Browser UI</span>
      <span className="text-[9.5px] font-semibold text-foreground">Fully Responsive</span>
    </div>

    {/* Floating Card 3: Account portal */}
    <div className="absolute top-8 right-2 sm:right-6 bg-white border border-border rounded-lg p-2 shadow-md z-20 flex items-center gap-2">
      <span className="text-[8.5px] text-indigo-600 font-extrabold uppercase tracking-wider">Portal:</span>
      <span className="text-[9px] text-foreground font-semibold">User Authentication</span>
    </div>
  </div>
);

export default function WebTvPlayerPage() {
  const heroBadges = [
    "Browser Streaming",
    "Live TV",
    "VOD & Series",
    "EPG",
    "Account Access",
    "Responsive UI",
    "Provider API",
    "Admin Panel Ready"
  ];

  const overviewPoints = [
    "Branded browser-based Web TV Player",
    "Live TV, VOD, Series, and EPG-ready layouts",
    "Responsive desktop, tablet, and mobile web experience",
    "Customer portal and account access planning",
    "Provider API and middleware integration",
    "Admin panel and backend readiness"
  ];

  const coreFeatures = [
    {
      title: "Browser-Based Playback",
      description: "Clean web player screens for live, VOD, and series viewing with responsive layouts and user-friendly controls."
    },
    {
      title: "Live TV Interface",
      description: "Channel categories, sidebar navigation, favorites, search, player controls, and EPG-ready viewing flows."
    },
    {
      title: "VOD & Series Layouts",
      description: "Movie and series browsing, posters, metadata, seasons, episodes, continue watching, and search-ready structures."
    },
    {
      title: "EPG Timeline Views",
      description: "Program guide layouts, schedule rows, timeline views, and provider API-based EPG data support."
    },
    {
      title: "Account Access",
      description: "Login screens, account status, profile handling, access rules, and customer portal-ready user flows."
    },
    {
      title: "Responsive Web Design",
      description: "Layouts planned for desktop, laptop, tablet, and mobile browsers with readable and adaptive interfaces."
    },
    {
      title: "API Integration",
      description: "Provider APIs, middleware, authentication, settings, user status, analytics, notifications, and admin panel APIs."
    },
    {
      title: "Admin Panel Readiness",
      description: "Planning for users, subscriptions, branding, settings, analytics, support workflows, and operational control."
    }
  ];

  const integrationFeatures = [
    {
      title: "Xtream Codes API",
      description: "Seamless connection to Xtream endpoints for parsing categories, links, and schedules."
    },
    {
      title: "M3U / Middleware API",
      description: "Compatibility configuration for Stalker middleware and custom playlist parsers."
    },
    {
      title: "Custom Content APIs",
      description: "Integrate specialized JSON content feeds, catalogs, and media server APIs."
    },
    {
      title: "Authentication Systems",
      description: "Token-based web login paths, login gates, and customer session verification systems."
    },
    {
      title: "Customer Portal Access",
      description: "Sync browser player with customer profiles, active plans, and billing portals."
    },
    {
      title: "Analytics & Reporting",
      description: "Capture browser playback performance, viewer locations, active devices, and buffer speeds."
    },
    {
      title: "Notifications",
      description: "Render browser in-app announcements, scrolling tickers, and update alerts."
    },
    {
      title: "Admin Panel Integration",
      description: "Remote administration dashboard access to manage logos, brand colors, and active streaming links."
    }
  ];

  const supportedPlatforms = [
    {
      name: "Desktop Browsers",
      tags: ["Chrome", "Edge", "Safari", "Firefox"]
    },
    {
      name: "Mobile Browsers",
      tags: ["Mobile Web", "Tablet Web", "Responsive UI"]
    },
    {
      name: "Customer Portals",
      tags: ["User Login", "Account Status", "Web Access"]
    },
    {
      name: "Backend",
      tags: ["Admin Panel", "API Layer", "Analytics", "Notifications"]
    }
  ];

  const processSteps = [
    {
      title: "Requirements & API Review",
      description: "We review your streaming model, target users, provider APIs, account flows, required features, and launch goals."
    },
    {
      title: "Web UX Planning",
      description: "We plan the browser-based player experience, responsive layouts, account journeys, content browsing, and navigation flows."
    },
    {
      title: "Frontend Development",
      description: "We build the Web TV Player interface with clean components, responsive layouts, and user-friendly playback screens."
    },
    {
      title: "API & Player Integration",
      description: "We connect provider APIs, authentication, content flows, account status, EPG data, settings, and backend services."
    },
    {
      title: "Testing & Optimization",
      description: "We test browser compatibility, responsive behavior, playback flows, API states, accessibility, and performance."
    },
    {
      title: "Deployment & Support",
      description: "We prepare deployment, production readiness, maintenance planning, updates, bug fixes, and future improvements."
    }
  ];

  const serviceFaqs = [
    {
      question: "What is a Web TV Player?",
      answer: "A Web TV Player is a browser-based streaming software interface that allows users to access IPTV or OTT experiences through a web browser, depending on the platform’s authorized content sources and APIs."
    },
    {
      question: "Do you provide IPTV channels, playlists, or movies?",
      answer: "No. Motive Solutions builds IPTV/OTT software only. We do not provide, sell, host, or distribute TV channels, playlists, movies, or streaming content."
    },
    {
      question: "Can you build a branded Web TV Player?",
      answer: "Yes. We can build a branded Web TV Player with your logo, colors, user interface, account flows, provider API integration, and platform-specific requirements."
    },
    {
      question: "Can the Web TV Player support Live TV, VOD, and Series?",
      answer: "Yes. We can build layouts and flows for Live TV, VOD, Series, EPG, favorites, search, continue watching, and related features depending on your API and infrastructure."
    },
    {
      question: "Can the Web TV Player connect to an admin panel?",
      answer: "Yes. It can connect with admin dashboards, users, subscriptions, branding settings, notifications, analytics, app settings, and operational workflows."
    },
    {
      question: "Can it work on mobile browsers too?",
      answer: "Yes. We can design responsive Web TV Player interfaces for desktop, tablet, and mobile browsers depending on project requirements."
    },
    {
      question: "Can you maintain the Web TV Player after launch?",
      answer: "Yes. We can provide maintenance, bug fixes, performance improvements, feature upgrades, browser compatibility updates, and long-term support."
    }
  ];

  return (
    <div className="flex flex-col">
      <ServiceHeroSection
        eyebrow="Web TV Player Development"
        title="Custom Web TV Players for IPTV, OTT & Browser Streaming"
        description="Motive Solutions builds browser-based Web TV Player solutions for IPTV and OTT businesses that need branded, responsive, and user-friendly streaming experiences across desktop, tablet, and mobile browsers."
        primaryCta={{
          label: "Request Web Player Quote",
          href: ROUTES.CONTACT
        }}
        secondaryCta={{
          label: "Explore IPTV Development",
          href: ROUTES.SERVICES.IPTV
        }}
        badges={heroBadges}
        visualElement={<WebPlayerEcosystemVisual />}
      />

      <ServiceOverviewSection
        eyebrow="What We Build"
        title="Browser-Based Streaming Experiences Built for Your Platform"
        description="Motive Solutions creates Web TV Player software for businesses that already have their own authorized content sources, provider APIs, or streaming infrastructure. We supply code templates and compilation assistance; we do not sell streams, channels, or host media content databases."
        points={overviewPoints}
        legalDisclaimer="Motive Solutions builds IPTV/OTT software only. We do not provide playlists, TV channels, movies, or streaming content."
      />

      <ServiceFeaturesSection
        title="Core Features for a Modern Web TV Player"
        eyebrow="Web Features"
        description="Clean HTML5 player components optimized for stream formats (HLS/DASH) and cross-browser rendering."
        features={coreFeatures}
        columns={4}
        variant="default"
        id="web-core-features"
      />

      <ServiceFeaturesSection
        title="Web Streaming, APIs & Customer Portal Integration"
        eyebrow="Web Integrations"
        description="We connect your Web TV Player with the systems your platform depends on, including provider APIs, authentication, account access, analytics, notifications, and admin dashboards."
        features={integrationFeatures}
        columns={4}
        variant="muted"
        id="web-integrations"
      />

      <ServicePlatformsSection
        title="Web Player Experiences Across Modern Browsers"
        eyebrow="Supported Browsers"
        description="Cross-tested browser configurations guaranteeing smooth rendering on all modern web standards."
        platforms={supportedPlatforms}
      />

      <ServiceProcessSection
        title="How We Build Your Web TV Player"
        eyebrow="Process Workflow"
        description="Our development roadmap ensures responsive CSS grids and secure API token handling."
        steps={processSteps}
      />

      <ServiceFaqSection
        title="Questions Clients Ask Before Starting"
        eyebrow="Web FAQs"
        description="Answers to common client questions regarding browser decoders, responsive rules, and API connections."
        faqs={serviceFaqs}
      />

      <ServiceCtaSection
        title="Ready to Build a Custom Web TV Player?"
        description="Share your Web TV Player requirements with Motive Solutions and we will help you plan a branded, responsive, and scalable browser-based streaming software solution."
        primaryCta={{
          label: "Request a Project Quote",
          href: ROUTES.CONTACT
        }}
        secondaryCta={{
          label: "Explore Smart TV Apps",
          href: ROUTES.SERVICES.SMART_TV
        }}
        supportingText="Custom IPTV & OTT apps • Smart TV platforms • web portals • admin panels • business software"
      />
    </div>
  );
}
