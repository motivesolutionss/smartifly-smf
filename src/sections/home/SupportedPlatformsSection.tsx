"use client";

import * as React from "react";
import Image from "next/image";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import { ROUTES } from "@/constants/routes";

interface PlatformData {
  index: string;
  category: string;
  title: string;
  description: string;
  action: string;
  details: {
    for: string;
    pressure: string;
    outcome: string;
  };
  checklist: string[];
  image: string;
}

export default function SupportedPlatformsSection() {
  const [activeTab, setActiveTab] = React.useState<string>("mobile");

  const tabs = [
    { id: "mobile", label: "Mobile Apps" },
    { id: "smart-tv", label: "Smart TV Apps" },
    { id: "web", label: "Web Platforms" },
    { id: "backend", label: "Backend & Admin" },
  ];

  const platformData: Record<string, PlatformData> = {
    mobile: {
      index: "01",
      category: "PLATFORM",
      title: "Mobile App Development",
      description: "We build scalable Android, iOS, and cross-platform mobile applications for businesses that need smooth user experience, secure backend connectivity, and real customer engagement.",
      action: "Explore Mobile Systems",
      details: {
        for: "Businesses needing customer, staff, or booking mobile apps.",
        pressure: "Slow loading, poor mobile UX, delayed updates, and high churn.",
        outcome: "Faster user access, smooth app feel, and strong engagement.",
      },
      checklist: [
        "Faster customer access",
        "Smoother app experience",
        "Stronger user engagement",
        "Faster business operations",
      ],
      image: "/images/smpbanner.png",
    },
    "smart-tv": {
      index: "02",
      category: "PLATFORM",
      title: "Smart TV App Development",
      description: "Launch custom streaming applications on major TV systems. We develop TV-optimized interfaces designed for remote-control navigation, large screens, high performance, and platform-specific app store approval.",
      action: "Explore TV Systems",
      details: {
        for: "Content creators, IPTV operators, and streaming networks.",
        pressure: "Complicated TV store approval, video buffering, and clunky remotes.",
        outcome: "Seamless big-screen playback and certified store compliance.",
      },
      checklist: [
        "Tizen & webOS support",
        "Remote-friendly navigation",
        "4K UHD video streaming",
        "Fast TV store approval",
      ],
      image: "/images/smpbanner.png",
    },
    web: {
      index: "03",
      category: "PLATFORM",
      title: "Web Platform Engineering",
      description: "We engineer modern, responsive browser-based platforms for user hubs, booking portals, SaaS products, and customer dashboards that work seamlessly on any computer or mobile browser.",
      action: "Explore Web Systems",
      details: {
        for: "SaaS companies, service providers, and web players.",
        pressure: "Broken mobile layouts, slow web players, and insecure databases.",
        outcome: "High-speed browser apps with responsive layout scaling.",
      },
      checklist: [
        "Responsive web players",
        "SaaS user dashboards",
        "SEO-friendly architecture",
        "Secure customer portals",
      ],
      image: "/images/hero-dashboard.png",
    },
    backend: {
      index: "04",
      category: "PLATFORM",
      title: "Backend & Admin Systems",
      description: "We build robust server architectures, databases, and secure admin panels to manage content, monitor streaming feeds, track user subscriptions, and handle billing details securely.",
      action: "Explore Backend Services",
      details: {
        for: "Ops teams, administrators, and product managers.",
        pressure: "Manual workflows, delayed database queries, and raw server downtime.",
        outcome: "Automated processes and lightning-fast database analytics.",
      },
      checklist: [
        "Subscription billing engines",
        "Live streaming analytics",
        "Role-based admin access",
        "Fast API integrations",
      ],
      image: "/images/hero-dashboard.png",
    },
  };

  const activeData = platformData[activeTab];

  return (
    <Section variant="slate-50" id="supported-platforms" hasBorderBottom={true} className="py-16 md:py-24">
      <Container>
        <SectionHeader
          title="One Product Experience Across Every Screen"
          eyebrow="Supported Platforms"
          description="We create platform-specific streaming and software experiences for mobile, Smart TV, web, and backend systems, ensuring each interface feels native, fast, and easy to use."
          align="center"
          className="mb-12"
        />

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 max-w-4xl mx-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white border-slate-900 shadow-md"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Light Theme Tab Content Container */}
        <div className="bg-white text-slate-900 border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl max-w-6xl mx-auto transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Details */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Category Marker */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-bold text-primary tracking-wider">{activeData.index}</span>
                <span className="w-8 h-[1px] bg-slate-300" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{activeData.category}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-5">
                {activeData.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-xl">
                {activeData.description}
              </p>

              {/* Explore Link */}
              <a
                href={ROUTES.CONTACT}
                className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-hover uppercase tracking-wider mb-8 transition-colors"
              >
                {activeData.action}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              {/* 3-Column Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-100 pt-6 mb-6 w-full">
                <div>
                  <h5 className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">For</h5>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{activeData.details.for}</p>
                </div>
                <div>
                  <h5 className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">Pressure</h5>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{activeData.details.pressure}</p>
                </div>
                <div>
                  <h5 className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">Outcome</h5>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{activeData.details.outcome}</p>
                </div>
              </div>

              {/* 4-Item Bullet Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-6 w-full">
                {activeData.checklist.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Mockup */}
            <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[360px] rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-50 flex items-center justify-center p-4">
              <Image
                src={activeData.image}
                alt={activeData.title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 30vw"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
