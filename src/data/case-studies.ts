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
  {
    id: "flyndeal-portal",
    title: "Flyndeal Airline Portal",
    slug: "flyndeal-airline-portal",
    client: "Flyndeal Aviation",
    industry: "Travel & Airline Systems",
    summary: "A business portal for airline ticketing workflows, agent operations, customer requests, and structured service management.",
    challenge: "Unifying flight reservation search APIs, ticketing agents control layouts, and live ticket statuses into one centralized interface.",
    solution: "We engineered a clean dashboard portal using Next.js, integrating travel booking database microservices and real-time support alert triggers.",
    results: [
      "Optimized load speeds by 40% using server-side caching",
      "Simplified reservation flows for 500+ global ticketing agents",
      "Secure role-based permissions framework for operations administrators"
    ],
    imagePath: "/images/case-studies/flyndeal.jpg",
    tags: ["Travel Portal", "Agent System", "Dashboard", "Workflow"],
    featured: true
  },
  {
    id: "uk-auto-motors",
    title: "UK Auto Motors Platform",
    slug: "uk-auto-motors-platform",
    client: "UK Auto Group",
    industry: "Automotive Marketplace",
    summary: "A vehicle listing and management platform for browsing, selling, purchasing, and managing automotive inventory with dashboard support.",
    challenge: "Handling large media uploads for vehicle images, inventory filters, and private dealer analytics charts.",
    solution: "We deployed a fast catalog web application with CDN image resizing filters and detailed automotive seller dashboard forms.",
    results: [
      "Sub-second catalog loading with advanced facets search filters",
      "Secure payment checkout gateway for dealer subscription renewals",
      "Dynamic reporting chart modules for vehicle traffic and inquiries"
    ],
    imagePath: "/images/case-studies/uk-auto.jpg",
    tags: ["Marketplace", "Listings", "Admin Panel", "Web Platform"],
    featured: true
  },
  {
    id: "emrey-ecommerce",
    title: "Emrey E-Commerce Store",
    slug: "emrey-ecommerce-store",
    client: "Emrey Retail Group",
    industry: "E-Commerce Development",
    summary: "A modern online store experience built for product browsing, customer journeys, order flow, and scalable business presentation.",
    challenge: "Creating a highly conversion-focused, lightning-fast shopping cart layout that works flawlessly on slow mobile web connections.",
    solution: "We designed a lightweight static-generated web storefront, utilizing pre-fetched shopping carts and clean responsive checkout forms.",
    results: [
      "98/100 Google Lighthouse performance score on mobile web",
      "Simplified multi-step shopping cart checkout process under 10 seconds",
      "Integration with automated inventory sync databases"
    ],
    imagePath: "/images/case-studies/emrey.jpg",
    tags: ["E-Commerce", "Product Catalog", "Web Store", "UX"],
    featured: true
  }
];
