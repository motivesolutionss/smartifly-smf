import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site";
import { ROUTES } from "@/constants/routes";
import { CASE_STUDIES } from "@/data/case-studies";
import { BLOG_POSTS } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  // 1. Static Pages
  const staticPages = [
    "",
    ROUTES.SERVICES.ROOT,
    ROUTES.SERVICES.IPTV,
    ROUTES.SERVICES.OTT,
    ROUTES.SERVICES.WHITE_LABEL,
    ROUTES.SERVICES.SMART_TV,
    ROUTES.SERVICES.WEB_TV,
    ROUTES.SERVICES.ADMIN_PANELS,
    ROUTES.SOLUTIONS,
    ROUTES.PLATFORMS,
    ROUTES.CASE_STUDIES.ROOT,
    ROUTES.BLOG.ROOT,
    ROUTES.CONTACT,
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  // 2. Dynamic Case Studies
  const caseStudiesPages = CASE_STUDIES.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 3. Dynamic Blog Posts
  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...caseStudiesPages, ...blogPages];
}
