export interface PlatformGroup {
  id: string;
  title: string;
  tags: string[];
  description: string;
  iconLetter: string;
}

export const PLATFORM_GROUPS: PlatformGroup[] = [
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    tags: ["Android", "iOS", "Tablets"],
    description: "Custom mobile apps with smooth navigation, secure login, responsive layouts, and streaming-ready user experiences.",
    iconLetter: "M"
  },
  {
    id: "smart-tv-apps",
    title: "Smart TV Apps",
    tags: ["Android TV", "Samsung Tizen", "LG webOS", "Fire TV"],
    description: "TV-optimized apps designed for remote-control navigation, large screens, performance, and platform-specific requirements.",
    iconLetter: "T"
  },
  {
    id: "web-platforms",
    title: "Web Platforms",
    tags: ["Web TV Player", "Business Portals", "Customer Portals"],
    description: "Modern browser-based platforms for users, teams, agents, customers, and administrators.",
    iconLetter: "W"
  },
  {
    id: "backend-admin-systems",
    title: "Backend & Admin Systems",
    tags: ["Admin Panels", "APIs", "Analytics"],
    description: "Scalable backend systems, dashboards, API integrations, settings management, and operational tools.",
    iconLetter: "B"
  }
];
