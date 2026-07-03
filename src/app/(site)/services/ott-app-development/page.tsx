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
  title: "OTT App Development Company",
  description: "Motive Solutions builds custom OTT app development solutions for video streaming platforms, subscriptions, user accounts, VOD libraries, multi-device access, analytics, and admin panel readiness.",
  path: "/services/ott-app-development",
});

// CSS-Only OTT Platform Ecosystem Mockup
const OttEcosystemVisual = () => (
  <div className="relative w-full h-[380px] sm:h-[450px] flex items-center justify-center select-none">
    {/* Backdrop glow */}
    <div className="absolute w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-60 blur-3xl -z-10" />

    {/* Main Streaming Dashboard Frame */}
    <div className="absolute w-[88%] sm:w-[82%] h-[250px] sm:h-[270px] bg-white border border-border rounded-xl shadow-soft p-4 z-10 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded bg-primary" />
          <span className="text-[9px] font-black text-foreground tracking-wider uppercase font-mono">Ott Console</span>
        </div>
        <Badge variant="soft" className="text-[8px] px-1.5 py-0.5 font-bold uppercase tracking-wider">
          Active Catalogue
        </Badge>
      </div>

      <div className="flex-grow flex gap-3 my-3 overflow-hidden">
        {/* Mock VOD Grid */}
        <div className="w-[60%] flex flex-col gap-2">
          <span className="text-[7.5px] font-extrabold text-foreground">Featured Movies</span>
          <div className="grid grid-cols-3 gap-1.5 flex-grow">
            <div className="bg-slate-100 border border-border/45 rounded flex items-center justify-center text-[6px] text-muted-foreground font-semibold text-center p-0.5">Movie A</div>
            <div className="bg-slate-100 border border-border/45 rounded flex items-center justify-center text-[6px] text-muted-foreground font-semibold text-center p-0.5">Movie B</div>
            <div className="bg-slate-100 border border-border/45 rounded flex items-center justify-center text-[6px] text-muted-foreground font-semibold text-center p-0.5">Movie C</div>
          </div>
        </div>

        {/* Subscription state / User Profile */}
        <div className="w-[40%] border-l border-border/40 pl-2 flex flex-col gap-2 justify-between">
          <div className="p-1 bg-slate-50 border border-border/50 rounded flex flex-col gap-0.5">
            <span className="text-[6px] text-muted-foreground uppercase font-bold">User Status</span>
            <span className="text-[8px] font-bold text-foreground">Premium Plan</span>
            <span className="text-[6px] text-green-600 font-bold">Expires: 2027</span>
          </div>

          <div className="p-1 bg-slate-50 border border-border/50 rounded flex flex-col gap-0.5">
            <span className="text-[6px] text-muted-foreground uppercase font-bold">Platform Stats</span>
            <span className="text-[8px] font-bold text-foreground">12.4k Views</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-[8px] text-muted-foreground border-t border-border/40 pt-2">
        <span>Transcoder: HLS / DASH</span>
        <span className="text-green-600 font-bold flex items-center gap-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          CDN Online
        </span>
      </div>
    </div>

    {/* Floating Card 1: Subscription active */}
    <div className="absolute top-4 left-0 sm:left-4 bg-white border border-border rounded-lg p-2 shadow-md z-20 flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-green-500" />
      <span className="text-[9px] font-bold text-foreground">User ID-9014 (Active)</span>
    </div>

    {/* Floating Card 2: Analytics graph */}
    <div className="absolute bottom-4 right-0 sm:right-4 bg-white border border-border rounded-lg p-2 shadow-md z-20 flex flex-col gap-1 items-start min-w-[100px]">
      <span className="text-[7.5px] font-extrabold text-muted-foreground uppercase tracking-wider">Hourly Traffic</span>
      <div className="w-full flex items-end gap-1 h-6 pt-1">
        <span className="w-2 bg-primary/20 h-2 rounded-xs" />
        <span className="w-2 bg-primary/40 h-3 rounded-xs" />
        <span className="w-2 bg-primary/60 h-5 rounded-xs" />
        <span className="w-2 bg-primary h-4 rounded-xs" />
      </div>
    </div>

    {/* Floating Card 3: Platform OS Badges */}
    <div className="absolute top-8 right-2 sm:right-6 bg-white border border-border rounded-lg p-2 shadow-md z-20 flex items-center gap-2">
      <span className="text-[8.5px] text-primary font-extrabold uppercase tracking-wider">Multi-Screen:</span>
      <span className="text-[9px] text-foreground font-semibold">Tizen, webOS, tvOS</span>
    </div>
  </div>
);

export default function OttAppDevelopmentPage() {
  const heroBadges = [
    "Video Streaming Apps",
    "VOD Platforms",
    "Subscription Systems",
    "User Accounts",
    "Multi-Device Access",
    "Smart TV Support",
    "Analytics Ready",
    "Admin Panel Ready"
  ];

  const overviewPoints = [
    "Branded OTT streaming apps",
    "VOD and content library experiences",
    "Subscription and account-ready flows",
    "Mobile, Smart TV, and web user experiences",
    "Admin panel and analytics readiness",
    "Long-term product maintenance planning"
  ];

  const coreFeatures = [
    {
      title: "VOD Content Library",
      description: "Organized movie, video, and media libraries with categories, posters, metadata, search, and user-friendly browsing."
    },
    {
      title: "User Accounts & Profiles",
      description: "Login flows, profile handling, account status, watch history, personalized content areas, and secure access flows."
    },
    {
      title: "Subscription-Ready Flows",
      description: "Plan-based access, package rules, expiry handling, renewals, account states, and billing integration readiness."
    },
    {
      title: "Continue Watching",
      description: "Resume playback, watch progress, recently viewed content, and user-friendly viewing continuity across sessions."
    },
    {
      title: "Search & Discovery",
      description: "Search-ready layouts, categories, filters, featured content, trending areas, and content discovery sections."
    },
    {
      title: "Multi-Device Experience",
      description: "Responsive and platform-specific experiences for mobile, web, Smart TV, and large-screen interfaces."
    },
    {
      title: "Analytics Foundations",
      description: "Usage insights, active users, content engagement, app performance signals, and reporting dashboard readiness."
    },
    {
      title: "Notifications & Updates",
      description: "In-app announcements, update notices, subscription alerts, support messages, and operational communications."
    }
  ];

  const integrationFeatures = [
    {
      title: "Content Management APIs",
      description: "Integrations with media databases and custom content management servers to load streaming catalogues."
    },
    {
      title: "Authentication Systems",
      description: "OAuth, email logins, device tokens, and session managers to regulate user access credentials."
    },
    {
      title: "Subscription & Billing",
      description: "Payment gateway synchronization channels (e.g. Stripe, PayPal) for subscription tracking operations."
    },
    {
      title: "Admin Panel APIs",
      description: "Sync client application configurations, maintenance triggers, and pricing definitions from operator dashboards."
    },
    {
      title: "Analytics & Reporting",
      description: "Load user activities logs, server request levels, CDN loads, and platform engagement metrics."
    },
    {
      title: "Notification Systems",
      description: "Integrate Firebase or Apple Push Notification pathways to deliver alerts and update notifications."
    },
    {
      title: "CDN Planning",
      description: "Support pipelines for content delivery network connections to distribute media streams with minimal buffering."
    },
    {
      title: "DRM Integration Planning",
      description: "Optional DRM integration planning (Widevine, FairPlay) depending on project security requirements."
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
      tags: ["Web Streaming", "Customer Portal", "Browser Access"]
    },
    {
      name: "Backend",
      tags: ["Admin Panel", "Content APIs", "Analytics", "Notifications"]
    }
  ];

  const processSteps = [
    {
      title: "Product Discovery",
      description: "We understand your content model, users, target platforms, subscriptions, required features, and launch goals."
    },
    {
      title: "Architecture Planning",
      description: "We plan the app structure, content flows, backend needs, APIs, analytics, access rules, and future scalability."
    },
    {
      title: "UI/UX Design",
      description: "We design clean streaming interfaces for mobile, Smart TV, web, dashboards, and account-based user journeys."
    },
    {
      title: "App & Backend Development",
      description: "We develop frontend experiences, backend modules, APIs, admin tools, subscription-ready flows, and business logic."
    },
    {
      title: "Testing & Optimization",
      description: "We test responsiveness, playback flows, device behavior, API performance, accessibility, and platform compatibility."
    },
    {
      title: "Deployment & Support",
      description: "We prepare production builds, deployment support, maintenance planning, updates, and long-term product improvements."
    }
  ];

  const serviceFaqs = [
    {
      question: "What is OTT app development?",
      answer: "OTT app development is the process of building video streaming applications that deliver content over the internet across mobile, Smart TV, web, and other connected devices."
    },
    {
      question: "Do you provide movies, channels, or streaming content?",
      answer: "No. Motive Solutions builds IPTV/OTT software only. We do not provide, sell, host, or distribute TV channels, playlists, movies, or streaming content."
    },
    {
      question: "Can you build an OTT app with our brand identity?",
      answer: "Yes. We can build a branded OTT app with your logo, colors, app name, splash screen, user experience, platform-specific layouts, and backend integrations."
    },
    {
      question: "Can you build subscription-based OTT apps?",
      answer: "Yes. We can build subscription-ready flows and integrate billing systems depending on your business requirements, payment provider, and backend structure."
    },
    {
      question: "Can you build OTT apps for Smart TVs?",
      answer: "Yes. We can develop OTT apps for Android TV, Samsung Tizen, LG webOS, Fire TV, and other supported platforms depending on project requirements."
    },
    {
      question: "Can you build an admin panel for managing the OTT platform?",
      answer: "Yes. We can build admin dashboards for users, content settings, subscriptions, analytics, notifications, app versions, and operational workflows."
    },
    {
      question: "Can you maintain the OTT app after launch?",
      answer: "Yes. We can provide maintenance, bug fixes, performance improvements, feature upgrades, platform updates, and long-term support."
    }
  ];

  return (
    <div className="flex flex-col">
      <ServiceHeroSection
        eyebrow="OTT App Development"
        title="Custom OTT App Development for Streaming Businesses"
        description="Motive Solutions builds scalable OTT applications for video streaming businesses, media platforms, subscription products, and digital content services that need branded, reliable, and multi-device user experiences."
        primaryCta={{
          label: "Request OTT App Quote",
          href: ROUTES.CONTACT
        }}
        secondaryCta={{
          label: "Explore IPTV Development",
          href: ROUTES.SERVICES.IPTV
        }}
        badges={heroBadges}
        visualElement={<OttEcosystemVisual />}
      />

      <ServiceOverviewSection
        eyebrow="What We Build"
        title="OTT Platforms Built for Content, Users & Growth"
        description="Motive Solutions builds OTT software for businesses that have legally authorized content, media rights, or their own streaming infrastructure. We do not supply copyrighted movies, series, or live TV feeds. Clients must hold all legal distribution agreements for content delivered via our software."
        points={overviewPoints}
        legalDisclaimer="Motive Solutions builds IPTV/OTT software only. We do not provide playlists, TV channels, movies, or streaming content."
      />

      <ServiceFeaturesSection
        title="Core Features for a Modern OTT Platform"
        eyebrow="Platform Capabilities"
        description="Core user features designed to keep subscribers engaged and ease viewing flows."
        features={coreFeatures}
        columns={4}
        variant="default"
        id="ott-core-features"
      />

      <ServiceFeaturesSection
        title="Streaming Infrastructure, APIs & Backend Integration"
        eyebrow="Integrations & CDNs"
        description="We connect OTT applications with the systems your platform needs, including authentication, content APIs, subscriptions, analytics, notifications, CDN planning, and admin dashboards."
        features={integrationFeatures}
        columns={4}
        variant="muted"
        id="ott-api-integrations"
      />

      <ServicePlatformsSection
        title="OTT Apps for Mobile, TV, Web & Admin Teams"
        eyebrow="Supported Screens"
        description="Optimized application packaging across mobile displays, living room screens, and web portals."
        platforms={supportedPlatforms}
      />

      <ServiceProcessSection
        title="How We Build Your OTT Platform"
        eyebrow="Process Workflow"
        description="Our software engineering pipeline ensures high reliability and compliance with app stores."
        steps={processSteps}
      />

      <ServiceFaqSection
        title="Questions Clients Ask Before Starting"
        eyebrow="OTT FAQs"
        description="Answers to common queries about custom OTT software and stream infrastructure integrations."
        faqs={serviceFaqs}
      />

      <ServiceCtaSection
        title="Ready to Build a Custom OTT Platform?"
        description="Share your OTT app requirements with Motive Solutions and we will help you plan a scalable, branded, and professional streaming software solution for your target platforms."
        primaryCta={{
          label: "Request a Project Quote",
          href: ROUTES.CONTACT
        }}
        secondaryCta={{
          label: "Explore IPTV Development",
          href: ROUTES.SERVICES.IPTV
        }}
        supportingText="Custom IPTV & OTT apps • Smart TV platforms • web portals • admin panels • business software"
      />
    </div>
  );
}
