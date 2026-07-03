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
  title: "Smart TV App Development Company",
  description: "Motive Solutions builds custom Smart TV app development solutions for Android TV, Samsung Tizen, LG webOS, Fire TV, IPTV apps, OTT platforms, web TV players, remote-control UX, and admin panel integration.",
  path: "/services/smart-tv-app-development",
});

// CSS-Only Smart TV Screen Mockup
const SmartTvEcosystemVisual = () => (
  <div className="relative w-full h-[380px] sm:h-[450px] flex items-center justify-center select-none">
    {/* Backdrop glow */}
    <div className="absolute w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-60 blur-3xl -z-10" />

    {/* TV Screen Mockup Frame */}
    <div className="absolute w-[92%] sm:w-[86%] h-[230px] sm:h-[250px] bg-slate-900 border-[8px] border-slate-950 rounded-xl shadow-2xl z-10 flex flex-col justify-between overflow-hidden relative">
      {/* Glossy TV screen light accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20" />
      
      {/* App Header */}
      <div className="p-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded bg-primary" />
          <span className="text-[9px] font-black text-white tracking-wider uppercase font-mono font-bold">SmartStream TV</span>
        </div>
        <span className="text-[7.5px] text-white/50 font-bold font-mono">10:45 AM</span>
      </div>

      {/* Grid Rows / App Homescreen */}
      <div className="flex-grow p-3 flex flex-col gap-2 justify-center">
        <span className="text-[7px] text-white/40 uppercase font-black tracking-widest">Recommended channels</span>
        <div className="grid grid-cols-4 gap-2 flex-grow">
          {/* focused card with blue border */}
          <div className="bg-white/10 border-2 border-primary rounded flex flex-col items-center justify-center text-[7px] text-white font-bold p-1 relative">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 absolute top-1 right-1 animate-pulse" />
            Live Sports
          </div>
          <div className="bg-white/5 border border-white/10 rounded flex flex-col items-center justify-center text-[7px] text-white/70 font-semibold p-1">
            News Feed
          </div>
          <div className="bg-white/5 border border-white/10 rounded flex flex-col items-center justify-center text-[7px] text-white/70 font-semibold p-1">
            Movies VOD
          </div>
          <div className="bg-white/5 border border-white/10 rounded flex flex-col items-center justify-center text-[7px] text-white/70 font-semibold p-1">
            TV Series
          </div>
        </div>
      </div>

      {/* Playback status bar */}
      <div className="p-2.5 bg-black/40 border-t border-white/5 flex justify-between items-center text-[7.5px] text-white/70">
        <span>Remote control focus state: active</span>
        <span className="text-green-500 font-bold">Player Engine Status: OK</span>
      </div>
    </div>

    {/* TV Stand Legs Simulation */}
    <div className="absolute top-[280px] sm:top-[310px] w-24 h-4 bg-slate-950/80 rounded-t z-0" />

    {/* Floating Card 1: OS target */}
    <div className="absolute top-4 left-0 sm:left-4 bg-white border border-border rounded-lg p-2 shadow-md z-20 flex items-center gap-2">
      <span className="text-[8.5px] font-extrabold text-blue-600 uppercase font-mono tracking-wider">Tizen OS</span>
      <span className="text-[9.5px] font-semibold text-foreground">Build Ready</span>
    </div>

    {/* Floating Card 2: webOS target */}
    <div className="absolute bottom-4 right-0 sm:right-4 bg-white border border-border rounded-lg p-2 shadow-md z-20 flex items-center gap-2">
      <span className="text-[8.5px] font-extrabold text-indigo-600 uppercase font-mono tracking-wider">webOS Package</span>
      <span className="text-[9.5px] font-semibold text-foreground">Compatible</span>
    </div>

    {/* Floating Card 3: Android TV */}
    <div className="absolute top-8 right-2 sm:right-6 bg-white border border-border rounded-lg p-2 shadow-md z-20 flex items-center gap-2">
      <span className="text-[8.5px] text-green-600 font-extrabold uppercase tracking-wider">Android TV:</span>
      <span className="text-[9px] text-foreground font-semibold">APK Compiled</span>
    </div>
  </div>
);

export default function SmartTvAppDevelopmentPage() {
  const heroBadges = [
    "Android TV",
    "Samsung Tizen",
    "LG webOS",
    "Fire TV",
    "Remote-Control UX",
    "IPTV & OTT Apps",
    "Web TV Player",
    "Admin Panel Ready"
  ];

  const overviewPoints = [
    "Smart TV apps for IPTV and OTT platforms",
    "Remote-control-friendly navigation",
    "Large-screen UI/UX design",
    "Platform-specific app structure",
    "API, player, and backend integration",
    "Testing and optimization across target TV environments"
  ];

  const coreFeatures = [
    {
      title: "Remote-Control Navigation",
      description: "Directional focus states, accessible menus, clear selection behavior, and TV-friendly navigation flows."
    },
    {
      title: "Large-Screen UI Design",
      description: "Readable layouts, spacious cards, optimized typography, simple menus, and comfortable viewing experiences."
    },
    {
      title: "IPTV & OTT Playback Flows",
      description: "Live TV, VOD, Series, EPG, favorites, continue watching, and player screens planned for TV devices."
    },
    {
      title: "Platform-Specific Builds",
      description: "App structures prepared for Android TV, Samsung Tizen, LG webOS, Fire TV, and selected target environments."
    },
    {
      title: "Performance Optimization",
      description: "Lightweight layouts, optimized rendering, responsive TV interfaces, and careful handling of device limitations."
    },
    {
      title: "API Integration",
      description: "Provider APIs, middleware, authentication, account status, settings, analytics, notifications, and admin panel APIs."
    },
    {
      title: "Testing Across TV Devices",
      description: "Testing for remote behavior, screen scaling, playback flows, API states, responsiveness, and platform compatibility."
    },
    {
      title: "Maintenance Readiness",
      description: "Support for future updates, bug fixes, platform changes, version notices, and long-term product improvements."
    }
  ];

  const integrationFeatures = [
    {
      title: "Android TV App Development",
      description: "Build Leanback-compatible Android TV applications targeting set-top boxes, stream sticks, and smart TVs."
    },
    {
      title: "Samsung Tizen Development",
      description: "Compile and test React-based web applications packaged for Samsung Smart Hub environments."
    },
    {
      title: "LG webOS App Development",
      description: "Deploy clean HTML5 applications tailored for LG TV remote controller pointer navigation."
    },
    {
      title: "Fire TV App Development",
      description: "Configure Fire OS application packages compatible with Amazon Appstore guidelines."
    },
    {
      title: "IPTV Provider APIs",
      description: "Connect TV layouts with remote Xtream/Stalker API points to pull channel lists and metadata."
    },
    {
      title: "OTT Content APIs",
      description: "Integrate video catalog feeds, user watch histories, and profile states from subscription servers."
    },
    {
      title: "Web TV Player Planning",
      description: "Create shared layouts adaptable for browser-based smart screen portals."
    },
    {
      title: "Admin Panel Integration",
      description: "Link TV application configurations with operator panels to toggle stream DNS rules remotely."
    }
  ];

  const supportedPlatforms = [
    {
      name: "Android TV",
      tags: ["Android TV", "TV Boxes", "Nvidia Shield"]
    },
    {
      name: "Samsung TV",
      tags: ["Tizen", "Smart Hub", "TV Remote UX"]
    },
    {
      name: "LG TV",
      tags: ["webOS", "TV Browser Constraints", "Remote Navigation"]
    },
    {
      name: "Fire TV",
      tags: ["Fire TV", "Firestick", "Android-Based TV Apps"]
    }
  ];

  const processSteps = [
    {
      title: "Platform & Requirement Review",
      description: "We identify your target TV platforms, users, features, provider APIs, playback requirements, and launch goals."
    },
    {
      title: "TV UX Planning",
      description: "We plan remote-control navigation, focus states, large-screen layouts, app structure, and platform-specific behavior."
    },
    {
      title: "Smart TV UI Development",
      description: "We build clean, responsive TV interfaces with readable screens, optimized components, and TV-friendly user flows."
    },
    {
      title: "API & Player Integration",
      description: "We connect provider APIs, content flows, authentication, playback screens, app states, settings, and backend services."
    },
    {
      title: "Device Testing & Optimization",
      description: "We test remote behavior, screen scaling, performance, playback flows, API states, and compatibility across target devices."
    },
    {
      title: "Build Preparation & Support",
      description: "We prepare platform builds, deployment planning, update support, maintenance, bug fixes, and future improvements."
    }
  ];

  const serviceFaqs = [
    {
      question: "Which Smart TV platforms can you develop for?",
      answer: "We can build Smart TV apps for Android TV, Samsung Tizen, LG webOS, Fire TV, and selected TV environments depending on project requirements."
    },
    {
      question: "Can you build IPTV or OTT apps for Smart TVs?",
      answer: "Yes. We can build Smart TV applications for IPTV and OTT platforms with Live TV, VOD, Series, EPG, favorites, account flows, and provider API integration."
    },
    {
      question: "Do you provide IPTV channels, playlists, or streaming content?",
      answer: "No. Motive Solutions builds IPTV/OTT software only. We do not provide, sell, host, or distribute TV channels, playlists, movies, or streaming content."
    },
    {
      question: "Why is Smart TV app development different from mobile app development?",
      answer: "Smart TV apps need large-screen layouts, remote-control navigation, focus states, lightweight performance, platform-specific behavior, and careful testing across TV devices."
    },
    {
      question: "Can you build apps for Samsung Tizen and LG webOS?",
      answer: "Yes. We can develop Samsung Tizen and LG webOS applications depending on the required features, technical constraints, store requirements, and target TV versions."
    },
    {
      question: "Can a Smart TV app connect to an admin panel?",
      answer: "Yes. Smart TV apps can be connected with admin dashboards, user systems, provider APIs, app settings, notifications, analytics, and version management tools."
    },
    {
      question: "Can you maintain the Smart TV app after launch?",
      answer: "Yes. We can provide maintenance, bug fixes, performance improvements, platform updates, compatibility improvements, and new feature development."
    }
  ];

  return (
    <div className="flex flex-col">
      <ServiceHeroSection
        eyebrow="Smart TV App Development"
        title="Custom Smart TV Apps for Android TV, Samsung, LG & Fire TV"
        description="Motive Solutions develops Smart TV applications for streaming platforms, IPTV providers, OTT businesses, media products, and digital services that need fast, remote-friendly, and large-screen user experiences."
        primaryCta={{
          label: "Request Smart TV App Quote",
          href: ROUTES.CONTACT
        }}
        secondaryCta={{
          label: "Explore IPTV Development",
          href: ROUTES.SERVICES.IPTV
        }}
        badges={heroBadges}
        visualElement={<SmartTvEcosystemVisual />}
      />

      <ServiceOverviewSection
        eyebrow="What We Build"
        title="Smart TV Apps Designed for Big Screens & Real Users"
        description="Motive Solutions builds Smart TV apps for businesses that need polished large-screen software experiences across Android TV, Samsung Tizen, LG webOS, Fire TV, and related TV platforms. We deliver the frontend navigation code and player integrations; we do not sell IPTV feeds, playlists, or media servers."
        points={overviewPoints}
        legalDisclaimer="Motive Solutions builds IPTV/OTT software only. We do not provide playlists, TV channels, movies, or streaming content."
      />

      <ServiceFeaturesSection
        title="Core Features for Smart TV Applications"
        eyebrow="TV Features"
        description="Large-screen UI layers built from the ground up to support hardware accelerators and remote key controllers."
        features={coreFeatures}
        columns={4}
        variant="default"
        id="tv-core-features"
      />

      <ServiceFeaturesSection
        title="TV Platforms, APIs & Streaming Integrations"
        eyebrow="Integrations & Compile Bundles"
        description="We design Smart TV apps around each platform’s technical limits, user behavior, remote-control expectations, and integration requirements."
        features={integrationFeatures}
        columns={4}
        variant="muted"
        id="tv-integrations"
      />

      <ServicePlatformsSection
        title="Smart TV Apps for the Platforms Your Audience Uses"
        eyebrow="Supported Screens"
        description="Target packages built explicitly for smart screens and living room set-top boxes."
        platforms={supportedPlatforms}
      />

      <ServiceProcessSection
        title="How We Build Your Smart TV App"
        eyebrow="Engineering Pipeline"
        description="A structured methodology to test focus states, key handling, and frame rates across TV environments."
        steps={processSteps}
      />

      <ServiceFaqSection
        title="Questions Clients Ask Before Starting"
        eyebrow="TV FAQs"
        description="Answers to common client questions regarding Smart TV stores, remote navigation, and compiler workflows."
        faqs={serviceFaqs}
      />

      <ServiceCtaSection
        title="Ready to Build a Smart TV App?"
        description="Share your Smart TV app requirements with Motive Solutions and we will help you plan a professional, remote-friendly, and scalable application for your target TV platforms."
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
