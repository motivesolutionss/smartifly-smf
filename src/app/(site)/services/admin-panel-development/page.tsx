import * as React from "react";
import { ROUTES } from "@/constants/routes";
import { getMetadata } from "@/lib/seo";
import Badge from "@/components/ui/Badge";

// Service Section Imports
import ServiceHeroSection from "@/sections/services/ServiceHeroSection";
import ServiceOverviewSection from "@/sections/services/ServiceOverviewSection";
import ServiceFeaturesSection from "@/sections/services/ServiceFeaturesSection";
import ServicePlatformsSection from "@/sections/services/ServicePlatformsSection";
import ServiceProcessSection from "@/sections/services/ServiceProcessSection";
import ServiceFaqSection from "@/sections/services/ServiceFaqSection";
import ServiceCtaSection from "@/sections/services/ServiceCtaSection";

export const metadata = getMetadata({
  title: "Admin Panel & API Development Company",
  description: "Motive Solutions builds custom admin panels, dashboards, backend APIs, user management systems, analytics, notifications, settings modules, and business software platforms.",
  path: "/services/admin-panel-development",
});

// CSS-Only Admin Dashboard Visual Mockup
const AdminDashboardEcosystemVisual = () => (
  <div className="relative w-full h-[380px] sm:h-[450px] flex items-center justify-center select-none">
    {/* Backdrop glow */}
    <div className="absolute w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-60 blur-3xl -z-10" />

    {/* Main Admin Console Frame */}
    <div className="absolute w-[88%] sm:w-[82%] h-[250px] sm:h-[270px] bg-white border border-border rounded-xl shadow-soft p-4 z-10 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded bg-primary" />
          <span className="text-[9px] font-black text-foreground tracking-wider uppercase font-mono font-bold">Admin Hub</span>
        </div>
        <Badge variant="soft" className="text-[8px] px-1.5 py-0.5 font-bold uppercase tracking-wider text-primary">
          Console Active
        </Badge>
      </div>

      <div className="flex-grow flex gap-3 my-3 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[28%] border-r border-border/40 pr-2 flex flex-col gap-1">
          <span className="text-[7px] font-extrabold p-1 bg-primary/10 text-primary rounded leading-none">Console</span>
          <span className="text-[7px] font-semibold p-1 text-muted-foreground leading-none">Users</span>
          <span className="text-[7px] font-semibold p-1 text-muted-foreground leading-none">Subscriptions</span>
          <span className="text-[7px] font-semibold p-1 text-muted-foreground leading-none">API Logs</span>
        </div>

        {/* Dashboard Panels */}
        <div className="flex-grow flex flex-col gap-2 justify-between">
          {/* Row of metrics */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-1 bg-slate-50 border border-border/50 rounded flex flex-col justify-between">
              <span className="text-[5px] text-muted-foreground uppercase font-bold">API Sync</span>
              <span className="text-[8.5px] font-extrabold text-foreground">99.98%</span>
            </div>
            <div className="p-1 bg-slate-50 border border-border/50 rounded flex flex-col justify-between">
              <span className="text-[5px] text-muted-foreground uppercase font-bold">Total Clients</span>
              <span className="text-[8.5px] font-extrabold text-foreground">3.4k</span>
            </div>
          </div>

          {/* User records list mockup */}
          <div className="border border-border/50 rounded flex flex-col overflow-hidden bg-white">
            <div className="bg-slate-50 p-1 text-[6px] font-bold text-muted-foreground border-b border-border/50 flex justify-between">
              <span>Account Ref</span>
              <span>Status</span>
            </div>
            <div className="p-1 text-[6.5px] text-foreground flex justify-between border-b border-border/30">
              <span>REF-1049</span>
              <span className="text-green-600 font-bold">Active</span>
            </div>
            <div className="p-1 text-[6.5px] text-foreground flex justify-between">
              <span>REF-8012</span>
              <span className="text-amber-600 font-bold">Pending</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div className="flex items-center justify-between text-[8px] text-muted-foreground border-t border-border/40 pt-2">
        <span>Role: System Administrator</span>
        <span className="text-green-600 font-bold flex items-center gap-0.5">
          <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
          Secure Session
        </span>
      </div>
    </div>

    {/* Floating Card 1: Role permission */}
    <div className="absolute top-4 left-0 sm:left-4 bg-white border border-border rounded-lg p-2 shadow-md z-20 flex items-center gap-2">
      <div className="w-2 h-2 rounded bg-blue-500" />
      <span className="text-[9px] font-bold text-foreground">RBAC Guard Enabled</span>
    </div>

    {/* Floating Card 2: Chart graph */}
    <div className="absolute bottom-4 right-0 sm:right-4 bg-white border border-border rounded-lg p-2 shadow-md z-20 flex flex-col gap-1 items-start min-w-[100px]">
      <span className="text-[7.5px] font-extrabold text-muted-foreground uppercase tracking-wider">Server Load</span>
      <div className="w-full flex items-end gap-1 h-6 pt-1">
        <span className="w-2 bg-primary/20 h-1 rounded-xs" />
        <span className="w-2 bg-primary/40 h-2.5 rounded-xs" />
        <span className="w-2 bg-primary/60 h-4 rounded-xs" />
        <span className="w-2 bg-primary h-2 rounded-xs" />
      </div>
    </div>

    {/* Floating Card 3: API Endpoint Status */}
    <div className="absolute top-8 right-2 sm:right-6 bg-white border border-border rounded-lg p-2 shadow-md z-20 flex items-center gap-2">
      <span className="text-[8.5px] text-green-600 font-extrabold uppercase tracking-wider">REST API:</span>
      <span className="text-[9px] text-foreground font-semibold">HTTPS TLSv1.3</span>
    </div>
  </div>
);

export default function AdminPanelDevelopmentPage() {
  const heroBadges = [
    "Admin Dashboards",
    "Backend APIs",
    "User Management",
    "Subscription Systems",
    "Analytics",
    "Notifications",
    "Settings Modules",
    "Business Portals"
  ];

  const overviewPoints = [
    "Custom admin dashboards",
    "User, role, and access management",
    "Subscription, package, and account control",
    "Settings, branding, and configuration modules",
    "Analytics, reports, and operational insights",
    "API layers and third-party integrations"
  ];

  const coreFeatures = [
    {
      title: "User Management",
      description: "Manage users, roles, account status, permissions, devices, profiles, and customer activity."
    },
    {
      title: "Subscription & Access Control",
      description: "Plan-based access, expiry dates, renewals, package rules, account states, and permission handling."
    },
    {
      title: "Dashboard Analytics",
      description: "Metrics, usage summaries, activity tracking, performance signals, reports, and decision-ready insights."
    },
    {
      title: "Settings & Configuration",
      description: "Control platform settings, branding options, maintenance mode, app notices, version rules, and feature toggles."
    },
    {
      title: "Notifications & Communication",
      description: "Send announcements, app messages, update notices, support alerts, email flows, and operational communications."
    },
    {
      title: "API Management",
      description: "Manage API integrations, middleware settings, provider connections, environment values, logs, and connection states."
    },
    {
      title: "Content & Workflow Tools",
      description: "Manage structured records, business workflows, approvals, support tasks, catalogs, requests, and operational data."
    },
    {
      title: "Security & Roles",
      description: "Role-based access, protected admin areas, secure authentication planning, audit-ready structures, and safe data handling."
    }
  ];

  const integrationFeatures = [
    {
      title: "REST API Development",
      description: "Design structured endpoints using NestJS or Express to bridge mobile apps, TV packages, and databases."
    },
    {
      title: "Authentication Systems",
      description: "Implement JWT tokens, device verification codes, key validation modules, and multi-tenant security."
    },
    {
      title: "Role-Based Access Control",
      description: "Integrate custom RBAC systems to isolate support agents, billing managers, and operators."
    },
    {
      title: "Database-Ready Structures",
      description: "Configure relational (PostgreSQL, MySQL) and non-relational database schemes optimized for query indexing."
    },
    {
      title: "Third-Party Integrations",
      description: "Connect payment processors, CRM dashboards, active directory servers, and billing channels."
    },
    {
      title: "Analytics & Reporting APIs",
      description: "Build custom database aggregation tasks to output live active streams levels and transaction reports."
    },
    {
      title: "Notification Systems",
      description: "Setup push servers, SMS gateways, and SMTP mail structures to deliver operational announcements."
    },
    {
      title: "App Settings APIs",
      description: "Establish configuration API routes to remotely alter client player designs, logos, and maintenance statuses."
    }
  ];

  const supportedUseCases = [
    {
      name: "IPTV & OTT Platforms",
      tags: ["Users", "Subscriptions", "App Settings", "Analytics"]
    },
    {
      name: "Business Portals",
      tags: ["Agents", "Customers", "Workflows", "Requests"]
    },
    {
      name: "E-Commerce Systems",
      tags: ["Products", "Orders", "Customers", "Reports"]
    },
    {
      name: "Custom Software",
      tags: ["Dashboards", "APIs", "Roles", "Operations"]
    }
  ];

  const processSteps = [
    {
      title: "Business Workflow Review",
      description: "We understand your users, teams, data, workflows, permissions, integrations, and operational goals."
    },
    {
      title: "System Architecture Planning",
      description: "We plan modules, database structure, API flows, user roles, permissions, dashboards, and future scalability."
    },
    {
      title: "UI/UX Design",
      description: "We design clean admin screens, tables, forms, dashboards, navigation, filters, and management workflows."
    },
    {
      title: "Backend & Frontend Development",
      description: "We build the admin interface, APIs, business logic, access controls, settings modules, and integrations."
    },
    {
      title: "Testing & Security Review",
      description: "We test forms, permissions, API behavior, data flows, responsive layouts, role access, and edge cases."
    },
    {
      title: "Deployment & Maintenance",
      description: "We prepare deployment, monitoring readiness, bug fixes, updates, feature improvements, and long-term support."
    }
  ];

  const serviceFaqs = [
    {
      question: "What is an admin panel?",
      answer: "An admin panel is a secure dashboard that helps business teams manage users, settings, content, subscriptions, reports, workflows, and platform operations."
    },
    {
      question: "Can you build a custom admin panel for our business?",
      answer: "Yes. We can build custom admin panels around your business model, workflows, users, roles, data, integrations, and operational requirements."
    },
    {
      question: "Can you build backend APIs with the admin panel?",
      answer: "Yes. We can build backend APIs for frontend apps, customer portals, mobile apps, Smart TV apps, dashboards, third-party integrations, and business systems."
    },
    {
      question: "Can you add user roles and permissions?",
      answer: "Yes. We can plan role-based access control, protected admin routes, permission levels, team roles, and secure access flows depending on project requirements."
    },
    {
      question: "Can the admin panel connect with IPTV or OTT apps?",
      answer: "Yes. Admin panels can manage users, subscriptions, app settings, notifications, analytics, API configurations, and operational workflows for IPTV/OTT platforms."
    },
    {
      question: "Can you build analytics and reporting dashboards?",
      answer: "Yes. We can build dashboards for usage insights, business metrics, activity summaries, reports, performance signals, and operational decision-making."
    },
    {
      question: "Can you maintain the admin panel after launch?",
      answer: "Yes. We can provide maintenance, bug fixes, security improvements, new features, performance updates, and long-term product support."
    }
  ];

  return (
    <div className="flex flex-col">
      <ServiceHeroSection
        eyebrow="Admin Panels & API Systems"
        title="Custom Admin Panels, Dashboards & API Systems"
        description="Motive Solutions builds scalable admin panels, backend APIs, dashboards, customer portals, analytics systems, and operational tools that help businesses manage users, content, workflows, settings, and digital platforms with confidence."
        primaryCta={{
          label: "Request Admin Panel Quote",
          href: ROUTES.CONTACT
        }}
        secondaryCta={{
          label: "Explore Services",
          href: ROUTES.SERVICES.ROOT
        }}
        badges={heroBadges}
        visualElement={<AdminDashboardEcosystemVisual />}
      />

      <ServiceOverviewSection
        eyebrow="What We Build"
        title="Admin Systems Built Around Your Operations"
        description="Motive Solutions builds admin panels and backend systems for businesses that need structured control over users, content, subscriptions, settings, analytics, workflows, and integrations. We engineer custom admin consoles built securely and optimized for database indexing."
        points={overviewPoints}
      />

      <ServiceFeaturesSection
        title="Core Features for Modern Admin Panels"
        eyebrow="Admin Capabilities"
        description="Enterprise dashboard modules prepared to handle thousands of requests with zero latency."
        features={coreFeatures}
        columns={4}
        variant="default"
        id="admin-core-features"
      />

      <ServiceFeaturesSection
        title="Backend APIs, Integrations & Business Logic"
        eyebrow="APIs & Infrastructure"
        description="We connect your admin panel experience with the systems your business depends on."
        features={integrationFeatures}
        columns={4}
        variant="muted"
        id="admin-integrations"
      />

      <ServicePlatformsSection
        title="Admin Panels for Different Business Needs"
        eyebrow="Use Cases"
        description="Different structures of panels customized around target platforms and data flows."
        platforms={supportedUseCases}
      />

      <ServiceProcessSection
        title="How We Build Your Admin System"
        eyebrow="Workflow roadmap"
        description="Our development pipeline to assure secure credentials and correct role isolations."
        steps={processSteps}
      />

      <ServiceFaqSection
        title="Questions Clients Ask Before Starting"
        eyebrow="Admin FAQs"
        description="Answers to common queries regarding database schemas, API structures, and custom settings."
        faqs={serviceFaqs}
      />

      <ServiceCtaSection
        title="Ready to Build a Custom Admin Panel?"
        description="Share your admin panel or API system requirements with Motive Solutions and we will help you plan a scalable, secure, and easy-to-manage business software solution."
        primaryCta={{
          label: "Request a Project Quote",
          href: ROUTES.CONTACT
        }}
        secondaryCta={{
          label: "Explore Web TV Player",
          href: ROUTES.SERVICES.WEB_TV
        }}
        supportingText="Custom IPTV & OTT apps • Smart TV platforms • web portals • admin panels • business software"
      />
    </div>
  );
}
