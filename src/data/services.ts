import { ServiceItem } from "@/types";

export const SERVICES: ServiceItem[] = [
  {
    id: "iptv-app-dev",
    title: "IPTV App Development",
    slug: "iptv-app-development",
    description: "Custom IPTV player apps with Live TV, VOD, Series, EPG, favorites, catch-up support, and provider API integration.",
    iconName: "TvIcon",
    features: [
      "Custom UI/UX designs",
      "Stalker & Xtream Codes API integration",
      "M3U playlist parser",
      "EPG (Electronic Program Guide) support",
      "Catch-up and Timeshift features"
    ],
    detailedContent: "Our custom IPTV software lets you offer premium television channels, video-on-demand content, and interactive features to users across mobile, tablet, and smart screens."
  },
  {
    id: "ott-app-dev",
    title: "OTT App Development",
    slug: "ott-app-development",
    description: "Scalable OTT platforms for video streaming, subscriptions, user management, content delivery, and multi-device access.",
    iconName: "PlayIcon",
    features: [
      "SVOD, TVOD, and AVOD business models",
      "Widevine and FairPlay DRM security",
      "AWS/Azure media service integrations",
      "Offline video download support",
      "Analytics dashboards for viewers"
    ],
    detailedContent: "Build and scale your video streaming business with custom OTT platforms configured for global audiences and high-traffic events."
  },
  {
    id: "white-label-iptv",
    title: "White-Label IPTV Apps",
    slug: "white-label-iptv-app",
    description: "Branded IPTV apps customized with your logo, app name, colors, splash screen, API, and platform-specific experience.",
    iconName: "SparklesIcon",
    features: [
      "Instant re-branding tools",
      "Remote configuration panel",
      "Ad network integration (VAST/VMAP)",
      "Multi-DNS management",
      "Multi-language support"
    ],
    detailedContent: "Get a production-ready, highly-rated streaming player with your brand identity, logos, and custom settings ready for deployment."
  },
  {
    id: "smart-tv-dev",
    title: "Smart TV App Development",
    slug: "smart-tv-app-development",
    description: "TV-optimized apps for Android TV, Samsung Tizen, LG webOS, Fire TV, and remote-control navigation.",
    iconName: "DeviceTvIcon",
    features: [
      "Samsung Tizen & LG webOS packaging",
      "Android TV / Fire TV native projects",
      "Apple TV tvOS development",
      "D-pad remote control navigation optimization",
      "4K/HDR content player support"
    ],
    detailedContent: "Bring your streaming platform directly to the living room with optimized TV applications designed specifically for D-pad navigation."
  },
  {
    id: "web-tv-player",
    title: "Web TV Player",
    slug: "web-tv-player",
    description: "Browser-based streaming experiences for Live TV, VOD, Series, account access, and cross-device viewing.",
    iconName: "GlobeIcon",
    features: [
      "Custom HTML5 video engine",
      "HLS, DASH, and MP4 stream playbacks",
      "Chromecast & AirPlay casting integrations",
      "Picture-in-Picture capability",
      "Responsive layout for mobile web"
    ],
    detailedContent: "Enable viewers to access your live channels and movies catalog directly on the web with our ultra-fast browser player."
  },
  {
    id: "admin-panels-apis",
    title: "Admin Panels & API Systems",
    slug: "admin-panel-development",
    description: "Custom dashboards, backend APIs, user management, analytics, settings, and business operation tools.",
    iconName: "AdjustmentsIcon",
    features: [
      "Custom administrator control panels",
      "Robust REST & GraphQL APIs",
      "Subscriber analytics & CRM systems",
      "DNS routing & streaming failover managers",
      "Secure cloud server deployment"
    ],
    detailedContent: "Manage configurations, DNS routing, push alerts, users, and content databases seamlessly with a custom-engineered enterprise control system."
  }
];
