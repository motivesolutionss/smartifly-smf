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
  title: "White-Label IPTV App Development",
  description: "Motive Solutions builds white-label IPTV and OTT apps with custom branding, provider API integration, Live TV, VOD, Series, EPG, Smart TV support, web player options, and admin panel readiness.",
  path: "/services/white-label-iptv-app",
});

// CSS-Only White-Label App Configurator Visual Mockup
const WhiteLabelEcosystemVisual = () => (
  <div className="relative w-full h-[380px] sm:h-[450px] flex items-center justify-center select-none">
    {/* Backdrop glow */}
    <div className="absolute w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-60 blur-3xl -z-10" />

    {/* Main Configurator Dashboard Frame */}
    <div className="absolute w-[88%] sm:w-[82%] h-[250px] sm:h-[270px] bg-white border border-border rounded-xl shadow-soft p-4 z-10 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded bg-primary" />
          <span className="text-[9px] font-black text-foreground tracking-wider uppercase font-mono">Branding Engine</span>
        </div>
        <Badge variant="soft" className="text-[8px] px-1.5 py-0.5 font-bold uppercase tracking-wider text-primary">
          Ready to Compile
        </Badge>
      </div>

      <div className="flex-grow flex gap-3 my-3 overflow-hidden">
        {/* Mock Settings Form */}
        <div className="w-[50%] flex flex-col gap-2 justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-[6.5px] text-muted-foreground uppercase font-bold">App Name</span>
            <div className="p-1 border border-border/60 rounded text-[7.5px] font-bold text-foreground bg-slate-50">
              MyCustomPlayer
            </div>
          </div>
          
          <div className="flex flex-col gap-0.5">
            <span className="text-[6.5px] text-muted-foreground uppercase font-bold">Brand Color Palette</span>
            <div className="flex gap-1">
              <span className="w-2.5 h-2.5 rounded bg-blue-600 border border-white" />
              <span className="w-2.5 h-2.5 rounded bg-indigo-600 border border-white" />
              <span className="w-2.5 h-2.5 rounded bg-slate-800 border border-white" />
            </div>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[6.5px] text-muted-foreground uppercase font-bold">Client API State</span>
            <span className="text-[7px] text-green-600 font-semibold flex items-center gap-0.5">
              <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
              Connected (Stalker/Xtream)
            </span>
          </div>
        </div>

        {/* Splash / App Screen Preview */}
        <div className="w-[50%] border-l border-border/40 pl-2.5 flex flex-col gap-1.5 justify-center">
          <span className="text-[6.5px] text-muted-foreground uppercase font-bold">Splash Screen</span>
          <div className="flex-grow bg-slate-50 border border-border/50 rounded-lg flex flex-col items-center justify-center p-2 relative overflow-hidden">
            <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary text-[8px] font-bold mb-1">
              Logo
            </div>
            <span className="text-[6px] font-bold text-foreground">Loading Stream Engine...</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-[8px] text-muted-foreground border-t border-border/40 pt-2">
        <span>Build Target: Multi-OS Package</span>
        <span className="text-primary font-bold">Compile Safe</span>
      </div>
    </div>

    {/* Floating Card 1: Logo verified */}
    <div className="absolute top-4 left-0 sm:left-4 bg-white border border-border rounded-lg p-2 shadow-md z-20 flex items-center gap-2">
      <div className="w-2 h-2 rounded bg-primary/20 flex items-center justify-center text-[6px] text-primary font-bold">SVG</div>
      <span className="text-[9px] font-bold text-foreground">Logo Asset Checked</span>
    </div>

    {/* Floating Card 2: Devices tags */}
    <div className="absolute bottom-4 right-0 sm:right-4 bg-white border border-border rounded-lg p-2 shadow-md z-20 flex items-center gap-2">
      <span className="text-[8.5px] font-extrabold text-indigo-600 uppercase font-mono tracking-wider">Device Bundle</span>
      <span className="text-[9.5px] font-semibold text-foreground">TV, App, Web Player</span>
    </div>

    {/* Floating Card 3: Config status */}
    <div className="absolute top-8 right-2 sm:right-6 bg-white border border-border rounded-lg p-2 shadow-md z-20 flex items-center gap-2">
      <span className="text-[8.5px] text-green-600 font-extrabold uppercase tracking-wider">Store Ready:</span>
      <span className="text-[9px] text-foreground font-semibold">Tizen / webOS / APK</span>
    </div>
  </div>
);

export default function WhiteLabelIptvAppPage() {
  const heroBadges = [
    "Custom App Name",
    "Logo & Splash Screen",
    "Brand Colors",
    "Provider API",
    "Live TV",
    "VOD & Series",
    "Smart TV Builds",
    "Web Player Ready"
  ];

  const overviewPoints = [
    "Custom app name, logo, colors, and splash screen",
    "Branded mobile, Smart TV, and web experiences",
    "Live TV, VOD, Series, EPG, and favorites-ready layouts",
    "Provider API and middleware integration",
    "Admin panel and backend readiness",
    "Maintenance, updates, and future feature planning"
  ];

  const coreFeatures = [
    {
      title: "Custom Brand Identity",
      description: "App name, logo, color system, splash screen, icons, and visual styling aligned with your business."
    },
    {
      title: "Multi-Platform Delivery",
      description: "Mobile, Smart TV, Fire TV, web player, and backend-ready software planning based on your target users."
    },
    {
      title: "Provider API Integration",
      description: "Integration with Xtream Codes API, M3U, custom middleware, authentication systems, and other required APIs."
    },
    {
      title: "Live TV, VOD & Series",
      description: "User-friendly screens for live channels, movies, series, categories, favorites, search, and continue watching."
    },
    {
      title: "EPG & Catch-up Ready UX",
      description: "Electronic program guide layouts, schedule views, replay-ready flows, and provider data integration planning."
    },
    {
      title: "Admin Panel Readiness",
      description: "Optional dashboards for users, subscriptions, app settings, branding, notifications, analytics, and version control."
    },
    {
      title: "App Update Planning",
      description: "Structure for maintenance releases, version notices, forced update flows, support messages, and future improvements."
    },
    {
      title: "Support Workflow Foundations",
      description: "Planning for error reporting, user support, operational communication, analytics readiness, and long-term product care."
    }
  ];

  const integrationFeatures = [
    {
      title: "App Name & Logo Setup",
      description: "Apply your brand identity to app binaries, application directories, header bars, and task switchers."
    },
    {
      title: "Splash Screen & Theme Styling",
      description: "Embed custom loading screens, brand assets, active color accents, and layouts before streaming starts."
    },
    {
      title: "Xtream Codes API",
      description: "Hook client applications directly to Xtream API parameters to parse movies, series, and schedules."
    },
    {
      title: "M3U / Middleware API",
      description: "Integrate Stalker portals, remote JSON configurations, or standard playlist files."
    },
    {
      title: "Authentication & Access",
      description: "Link user verification codes, tokens, and active devices with provider databases."
    },
    {
      title: "Smart TV Build Preparation",
      description: "Build Tizen wgt, webOS ipk, and Android TV apk files conforming to store constraints."
    },
    {
      title: "Web Player Readiness",
      description: "Setup HTML5 web players with cross-origin stream caching for direct browser loading."
    },
    {
      title: "Admin Panel Integration",
      description: "Hook application builds to central control panels to permit remote API endpoint shifts."
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
      tags: ["Web Player", "Browser Access", "Customer Portal"]
    },
    {
      name: "Backend",
      tags: ["Admin Panel", "API Layer", "Analytics", "Notifications"]
    }
  ];

  const processSteps = [
    {
      title: "Brand & Requirement Review",
      description: "We review your business identity, target users, provider API, platform needs, required features, and launch goals."
    },
    {
      title: "UI/UX & App Identity Planning",
      description: "We plan the app name, logo placement, color system, splash screen, layout style, and platform-specific user flows."
    },
    {
      title: "App Development",
      description: "We build the branded IPTV/OTT app experience for your selected platforms with clean frontend structure and user flows."
    },
    {
      title: "API & Feature Integration",
      description: "We connect provider APIs, authentication, Live TV, VOD, Series, EPG, favorites, settings, and required business features."
    },
    {
      title: "Testing & Build Preparation",
      description: "We test responsiveness, playback flows, Smart TV navigation, app states, API behavior, and platform compatibility."
    },
    {
      title: "Launch & Maintenance",
      description: "We support build preparation, deployment planning, version updates, bug fixes, maintenance, and future improvements."
    }
  ];

  const serviceFaqs = [
    {
      question: "What is a white-label IPTV app?",
      answer: "A white-label IPTV app is a branded streaming software application built with your app name, logo, colors, splash screen, user experience, and provider API while the underlying software is developed for your business."
    },
    {
      question: "Do you provide IPTV channels, playlists, or subscriptions?",
      answer: "No. Motive Solutions builds IPTV/OTT software only. We do not provide, sell, host, or distribute TV channels, playlists, movies, or streaming content."
    },
    {
      question: "Can you use our brand name and logo in the app?",
      answer: "Yes. We can customize the app name, logo, splash screen, color system, icons, layout style, and brand presentation across supported platforms."
    },
    {
      question: "Which platforms can a white-label IPTV app support?",
      answer: "Depending on requirements, we can build for Android, iOS, Android TV, Samsung Tizen, LG webOS, Fire TV, web player, and admin panel environments."
    },
    {
      question: "Can you integrate our IPTV provider API?",
      answer: "Yes. We can integrate Xtream Codes API, M3U, custom middleware, authentication systems, billing systems, analytics, and other required APIs where technically and legally appropriate."
    },
    {
      question: "Can we add an admin panel later?",
      answer: "Yes. The app can be planned with admin panel readiness for users, subscriptions, branding settings, notifications, analytics, app versions, and operational tools."
    },
    {
      question: "Can you maintain and update the white-label app?",
      answer: "Yes. We can support maintenance releases, bug fixes, version updates, platform changes, new features, and long-term product improvements."
    }
  ];

  return (
    <div className="flex flex-col">
      <ServiceHeroSection
        eyebrow="White-Label IPTV Apps"
        title="Launch a Branded IPTV App Under Your Own Name"
        description="Motive Solutions builds white-label IPTV and OTT applications customized with your app name, logo, colors, splash screen, provider API, user experience, and target devices."
        primaryCta={{
          label: "Start Your White-Label App",
          href: ROUTES.CONTACT
        }}
        secondaryCta={{
          label: "Explore IPTV Development",
          href: ROUTES.SERVICES.IPTV
        }}
        badges={heroBadges}
        visualElement={<WhiteLabelEcosystemVisual />}
      />

      <ServiceOverviewSection
        eyebrow="What We Build"
        title="Branded IPTV Apps Built Around Your Business Identity"
        description="Motive Solutions creates white-label IPTV/OTT software for businesses that already have their own authorized content sources, provider APIs, or streaming infrastructure. We do not deliver, license, or host copyrighted TV channels or playlists. Content license verification is the sole responsibility of the customer."
        points={overviewPoints}
        legalDisclaimer="Motive Solutions builds IPTV/OTT software only. We do not provide playlists, TV channels, movies, or streaming content."
      />

      <ServiceFeaturesSection
        title="Branding & Product Features Included"
        eyebrow="Branding & Features"
        description="Every package includes visual styling parameters and native player capabilities to establish a professional streaming brand."
        features={coreFeatures}
        columns={4}
        variant="default"
        id="white-label-features"
      />

      <ServiceFeaturesSection
        title="Branding, API Connections & Platform Builds"
        eyebrow="API Connections & Styling"
        description="We prepare your white-label IPTV app as a branded software product, connecting the app experience with your provider API, platform requirements, and operational workflows."
        features={integrationFeatures}
        columns={4}
        variant="muted"
        id="white-label-integrations"
      />

      <ServicePlatformsSection
        title="White-Label IPTV Apps for Every Screen"
        eyebrow="Supported Screens"
        description="Application compilations targeting all popular consumer living room OS and mobile ecosystems."
        platforms={supportedPlatforms}
      />

      <ServiceProcessSection
        title="How We Build Your Branded IPTV App"
        eyebrow="Workflow Pipeline"
        description="Our structured delivery pipeline for white-label app compiles from brand review to app store rollout."
        steps={processSteps}
      />

      <ServiceFaqSection
        title="Questions Clients Ask Before Starting"
        eyebrow="White-Label FAQs"
        description="Answers to common client questions about brand customization limits, API integrations, and compiler workflows."
        faqs={serviceFaqs}
      />

      <ServiceCtaSection
        title="Ready to Launch Your Branded IPTV App?"
        description="Share your white-label IPTV app requirements with Motive Solutions and we will help you plan a professional, branded, and scalable software solution for your target platforms."
        primaryCta={{
          label: "Start Your Project",
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
