import { NavItem } from "@/types";
import { ROUTES } from "@/constants/routes";

export const HEADER_NAV_ITEMS: NavItem[] = [
  {
    label: "Services",
    href: ROUTES.SERVICES.ROOT,
    children: [
      { label: "IPTV App Development", href: ROUTES.SERVICES.IPTV },
      { label: "OTT App Development", href: ROUTES.SERVICES.OTT },
      { label: "White-Label IPTV Apps", href: ROUTES.SERVICES.WHITE_LABEL },
      { label: "Smart TV App Development", href: ROUTES.SERVICES.SMART_TV },
      { label: "Web TV Player", href: ROUTES.SERVICES.WEB_TV },
      { label: "Admin Panels & API Systems", href: ROUTES.SERVICES.ADMIN_PANELS },
    ],
  },
  {
    label: "Solutions",
    href: ROUTES.SOLUTIONS,
  },
  {
    label: "Platforms",
    href: ROUTES.PLATFORMS,
  },
  {
    label: "Case Studies",
    href: ROUTES.CASE_STUDIES.ROOT,
  },
  {
    label: "Blog",
    href: ROUTES.BLOG.ROOT,
  },
];

export const FOOTER_NAV_ITEMS = {
  services: {
    title: "Services",
    items: [
      { label: "IPTV App Development", href: ROUTES.SERVICES.IPTV },
      { label: "OTT App Development", href: ROUTES.SERVICES.OTT },
      { label: "White-Label IPTV Apps", href: ROUTES.SERVICES.WHITE_LABEL },
      { label: "Smart TV App Development", href: ROUTES.SERVICES.SMART_TV },
      { label: "Web TV Player", href: ROUTES.SERVICES.WEB_TV },
      { label: "Admin Panels & API Systems", href: ROUTES.SERVICES.ADMIN_PANELS },
    ],
  },
  company: {
    title: "Company",
    items: [
      { label: "About Us", href: ROUTES.HOME + "#about" },
      { label: "Solutions", href: ROUTES.SOLUTIONS },
      { label: "Platforms", href: ROUTES.PLATFORMS },
      { label: "Case Studies", href: ROUTES.CASE_STUDIES.ROOT },
      { label: "Contact", href: ROUTES.CONTACT },
    ],
  },
  resources: {
    title: "Resources",
    items: [
      { label: "Blog", href: ROUTES.BLOG.ROOT },
      { label: "FAQs", href: ROUTES.HOME + "#faqs" },
      { label: "Support", href: ROUTES.CONTACT },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};
