/**
 * Central routing configuration for Motive Solutions website.
 */
export const ROUTES = {
  HOME: "/",
  SERVICES: {
    ROOT: "/services",
    IPTV: "/services/iptv-app-development",
    OTT: "/services/ott-app-development",
    WHITE_LABEL: "/services/white-label-iptv-app",
    SMART_TV: "/services/smart-tv-app-development",
    WEB_TV: "/services/web-tv-player",
    ADMIN_PANELS: "/services/admin-panel-development",
  },
  SOLUTIONS: "/solutions",
  PLATFORMS: "/platforms",
  CASE_STUDIES: {
    ROOT: "/case-studies",
    DETAIL: (slug: string) => `/case-studies/${slug}`,
  },
  BLOG: {
    ROOT: "/blog",
    DETAIL: (slug: string) => `/blog/${slug}`,
  },
  CONTACT: "/contact",
} as const;

export type AppRoute = typeof ROUTES[keyof typeof ROUTES] | string;
