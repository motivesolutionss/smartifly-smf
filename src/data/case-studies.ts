import { CaseStudyItem } from "@/types";

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "smartifly-iptv",
    title: "Smartifly IPTV Platform",
    slug: "smartifly-iptv-platform",
    client: "Smartifly Networks",
    industry: "IPTV & OTT Apps",
    summary: "A multi-platform IPTV ecosystem covering mobile, TV, and web experiences with Live TV, VOD, Series, user flows, and provider API integration.",
    challenge: "Developing a single, optimized core player capable of synchronizing favorites and playback logs across Android, iOS, and Smart TVs.",
    solution: "We engineered a cross-platform IPTV application framework with custom React Native player plugins and Stalker/Xtream API integrations.",
    results: [
      "Fluid 60 FPS remote navigation on Smart TVs",
      "Unified customer portal for device registrations",
      "Successful launch across Android TV, iOS, and Web stores"
    ],
    imagePath: "/images/case-studies/smartifly.jpg",
    tags: ["Android", "Android TV", "Smart TV", "IPTV API"],
    featured: true
  },
];
