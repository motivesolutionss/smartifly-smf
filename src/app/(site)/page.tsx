import * as React from "react";
import { getMetadata } from "@/lib/seo";

// Section Imports
import HeroSection from "@/sections/home/HeroSection";
import PlatformBadgesSection from "@/sections/home/PlatformBadgesSection";
import ServicesOverviewSection from "@/sections/home/ServicesOverviewSection";
import SupportedPlatformsSection from "@/sections/home/SupportedPlatformsSection";
import FeaturesSection from "@/sections/home/FeaturesSection";
import WhiteLabelSection from "@/sections/home/WhiteLabelSection";
import AdminPanelSection from "@/sections/home/AdminPanelSection";
import ProcessSection from "@/sections/home/ProcessSection";
import CaseStudiesSection from "@/sections/home/CaseStudiesSection";
import WhyChooseUsSection from "@/sections/home/WhyChooseUsSection";
import FaqSection from "@/sections/home/FaqSection";
import FinalCtaSection from "@/sections/home/FinalCtaSection";

export const metadata = getMetadata({
  title: "Motive Solutions | IPTV, OTT, Smart TV & Custom Software Development",
  description: "Motive Solutions builds custom IPTV, OTT, Smart TV, mobile, web, admin panel, and business software solutions for companies that need scalable digital products.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesOverviewSection />
      <PlatformBadgesSection />
      <SupportedPlatformsSection />
      <FeaturesSection />
      <WhiteLabelSection />
      <AdminPanelSection />
      <ProcessSection />
      <CaseStudiesSection />
      <WhyChooseUsSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}
