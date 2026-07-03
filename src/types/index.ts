/**
 * Shared Type Definitions for Motive Solutions Website
 */

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  iconName: string;
  features: string[];
  detailedContent?: string;
}

export interface PlatformItem {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  description: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  imagePath: string;
  tags: string[];
  featured?: boolean;
}

export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  imagePath: string;
  tags: string[];
  readTime: string;
  category?: string;
  featured?: boolean;
}
