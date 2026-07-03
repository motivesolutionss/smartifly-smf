import * as React from "react";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { ROUTES } from "@/constants/routes";

export default function AdminPanelSection() {
  const modules = [
    {
      title: "User Management",
      desc: "Manage customer records, login access, device limits, viewer roles, and session histories.",
    },
    {
      title: "Access Controls",
      desc: "Set up subscription plans, renewal periods, packages rules, and account permissions.",
    },
    {
      title: "Branding Settings",
      desc: "Control active logos, brand color palettes, custom splash screens, and maintenance states.",
    },
    {
      title: "API Configurations",
      desc: "Manage Xtream/Stalker middleware integrations, push APIs, and third-party gateways.",
    },
    {
      title: "Analytics & Reports",
      desc: "Review real-time viewership levels, crash reports, ISP logs, and transaction metrics.",
    },
    {
      title: "Announcements & Alerts",
      desc: "Send instant notifications, version updates, scroll banners, and developer alerts.",
    }
  ];

  return (
    <Section variant="default" id="admin-panel-section">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        {/* Left Column: Context and Modules Grid */}
        <div className="lg:col-span-7 flex flex-col items-start text-left lg:order-2">
          <Badge variant="soft" className="mb-4">
            Admin Panels & Backend Systems
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Control Your Platform With a <br />
            Scalable Admin Dashboard
          </h2>
          
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            From user management and subscriptions to branding settings, API controls, notifications, analytics, and support workflows, we build admin systems that help teams manage their digital products with confidence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 w-full">
            {modules.map((mod, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px] font-bold mt-1 flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-1">{mod.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <Button href={ROUTES.CONTACT} size="lg" className="w-full sm:w-auto">
              Discuss Your Platform
            </Button>
            <Button href={ROUTES.SERVICES.ADMIN_PANELS} variant="outline" size="lg" className="w-full sm:w-auto">
              View Admin Panel Service
            </Button>
          </div>
        </div>

        {/* Right Column: Detailed CSS Dashboard Visual */}
        <div className="lg:col-span-5 relative w-full h-[450px] lg:order-1 flex items-center justify-center bg-slate-50 border border-border rounded-2xl overflow-hidden shadow-soft">
          {/* Dashboard Window Simulation */}
          <div className="w-[95%] h-[90%] bg-white border border-border/80 rounded-lg shadow-sm flex overflow-hidden">
            {/* Sidebar */}
            <div className="w-1/4 border-r border-border/60 bg-slate-50 p-3 flex flex-col gap-4">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded bg-primary" />
                <span className="text-[8px] font-bold text-foreground tracking-wider uppercase font-mono">Console</span>
              </div>
              <div className="flex flex-col gap-1.5 mt-2">
                <span className="text-[7.5px] p-1 bg-white border border-border/50 rounded font-semibold text-primary">Overview</span>
                <span className="text-[7.5px] p-1 text-muted-foreground font-semibold">User Manager</span>
                <span className="text-[7.5px] p-1 text-muted-foreground font-semibold">API Settings</span>
                <span className="text-[7.5px] p-1 text-muted-foreground font-semibold">Alert Center</span>
              </div>
            </div>

            {/* Main Panel Content */}
            <div className="flex-grow p-4 flex flex-col gap-4 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border/40 pb-2">
                <span className="text-[9px] font-bold text-foreground">Dashboard Hub</span>
                <Badge variant="soft" className="text-[7px] px-1.5 py-0.5">Online</Badge>
              </div>

              {/* Metric Cards Row */}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 border border-border/50 rounded bg-slate-50/50 flex flex-col justify-between">
                  <span className="text-[7px] text-muted-foreground uppercase font-bold">API Sync Health</span>
                  <span className="text-xs font-extrabold text-foreground mt-1">99.98%</span>
                </div>
                <div className="p-2 border border-border/50 rounded bg-slate-50/50 flex flex-col justify-between">
                  <span className="text-[7px] text-muted-foreground uppercase font-bold">Server Load</span>
                  <span className="text-xs font-extrabold text-green-600 mt-1">14.2%</span>
                </div>
              </div>

              {/* Table / User List simulation */}
              <div className="border border-border/50 rounded flex flex-col overflow-hidden">
                <div className="bg-slate-50 p-1.5 text-[7px] font-bold text-muted-foreground border-b border-border/50 flex justify-between">
                  <span>User Reference</span>
                  <span>Status</span>
                </div>
                <div className="p-1.5 text-[7.5px] text-foreground flex justify-between border-b border-border/30">
                  <span>ID-1092 (Region: EU)</span>
                  <span className="text-green-500 font-bold">Active</span>
                </div>
                <div className="p-1.5 text-[7.5px] text-foreground flex justify-between">
                  <span>ID-2489 (Region: US)</span>
                  <span className="text-amber-500 font-bold">Pending</span>
                </div>
              </div>

              {/* Settings Toggle Area */}
              <div className="p-2 border border-border/50 rounded flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[8px] font-bold text-foreground">Maintenance Mode</span>
                  <span className="text-[6.5px] text-muted-foreground">Redirect app requests</span>
                </div>
                <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[6.5px] font-bold uppercase">
                  Inactive
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
