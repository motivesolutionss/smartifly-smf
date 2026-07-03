import * as React from "react";
import { getMetadata } from "@/lib/seo";
import { ROUTES } from "@/constants/routes";
import { BLOG_POSTS } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import Badge from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata = getMetadata({
  title: "Software Development Blog",
  description: "Read Motive Solutions insights about IPTV app development, OTT platforms, Smart TV apps, Web TV Players, admin panels, APIs, business portals, and custom software development.",
  path: "/blog",
});

// CSS Connected Blog Nodes Visual for Hero
const BlogHeroVisual = () => (
  <div className="relative w-full h-[320px] flex items-center justify-center select-none">
    {/* Glow backdrop */}
    <div className="absolute w-[220px] h-[220px] rounded-full bg-gradient-to-tr from-red-100 to-rose-100 opacity-60 blur-3xl -z-10" />

    {/* Central Node */}
    <div className="w-[110px] h-[110px] rounded-full bg-white border-2 border-primary/20 flex flex-col items-center justify-center text-center shadow-soft z-20">
      <span className="w-2.5 h-2.5 rounded-full bg-primary mb-1 animate-pulse" />
      <span className="text-[10px] font-black text-foreground tracking-wide uppercase font-mono">Motive Logs</span>
      <span className="text-[7px] text-muted-foreground uppercase font-bold font-mono">Dev Insights</span>
    </div>

    {/* Small tag flags */}
    <div className="absolute top-4 left-4 bg-white border border-border rounded px-2 py-1 shadow-xs z-10 text-[8px] font-bold text-foreground">
      #SmartTV
    </div>
    <div className="absolute top-8 right-4 bg-white border border-border rounded px-2 py-1 shadow-xs z-10 text-[8px] font-bold text-foreground">
      #IPTV-Features
    </div>
    <div className="absolute bottom-8 left-4 bg-white border border-border rounded px-2 py-1 shadow-xs z-10 text-[8px] font-bold text-foreground">
      #DRM-Planning
    </div>
    <div className="absolute bottom-4 right-4 bg-white border border-border rounded px-2 py-1 shadow-xs z-10 text-[8px] font-bold text-foreground">
      #API-Middleware
    </div>

    {/* SVG connection lines */}
    <svg className="absolute inset-0 w-full h-full -z-10" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <line x1="80" y1="80" x2="165" y2="145" className="stroke-slate-200" />
      <line x1="280" y1="90" x2="200" y2="155" className="stroke-slate-200" />
      <line x1="80" y1="280" x2="155" y2="205" className="stroke-slate-200" />
      <line x1="280" y1="260" x2="205" y2="215" className="stroke-slate-200" />
    </svg>
  </div>
);

export default function BlogPage() {
  const heroBadges = [
    "IPTV Development", "OTT Platforms", "Smart TV Apps", "Web Platforms", "Admin Panels", "APIs", "Business Software"
  ];

  const categories = [
    { title: "IPTV App Development", desc: "Core features, EPG integrations, Xtream Codes compatibility, and streaming UI." },
    { title: "OTT Platforms", desc: "Subscription video workflows, DRM setups, user logs, and multi-device deployment." },
    { title: "Smart TV Apps", desc: "Remote controller focus engines, Tizen, webOS, Android TV, and large-screen layouts." },
    { title: "Web TV Players", desc: "Browser-based player integrations, MSE, HLS/DASH media streaming, and portals." },
    { title: "Admin Panels & APIs", desc: "Administrative consoles, analytics dashboards, server integrations, and RBAC." },
    { title: "Custom Business Software", desc: "Workflow automations, transactional database layouts, and team dashboards." }
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-[45%] h-[70%] bg-gradient-to-b from-red-50/60 to-rose-50/30 rounded-bl-[120px] -z-10" />

        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Badge variant="soft" className="mb-6">
              Motive Solutions Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              Insights on Streaming Apps, Platforms & Custom Software
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Explore practical articles about IPTV and OTT app development, Smart TV platforms, Web TV Players, admin dashboards, API systems, business portals, and software planning.
            </p>

            <div className="flex flex-wrap gap-4 mb-10 w-full sm:w-auto">
              <Button href={ROUTES.CONTACT} size="lg" className="w-full sm:w-auto">
                Discuss a Project
              </Button>
              <Button href={ROUTES.SERVICES.ROOT} variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Services
              </Button>
            </div>

            {/* Badges */}
            <div className="w-full border-t border-border/80 pt-6">
              <div className="flex flex-wrap gap-2">
                {heroBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 rounded bg-slate-50 border border-border text-[11px] font-semibold text-foreground uppercase tracking-wide"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <BlogHeroVisual />
          </div>
        </Container>
      </section>

      {/* 2. Featured Articles Grid */}
      <Section variant="default" id="latest-insights">
        <Container>
          <SectionHeader
            title="Latest Software Development Insights"
            eyebrow="Developer Logs"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {BLOG_POSTS.map((post) => (
              <Card
                key={post.id}
                hoverable={true}
                className="bg-white border border-border shadow-xs hover:border-primary/20 flex flex-col justify-between"
              >
                <CardHeader className="p-6 pb-2">
                  <div className="flex justify-between items-center gap-4 mb-4">
                    <Badge variant="soft" className="text-[10px] px-2 py-0.5">
                      {post.category || "Development"}
                    </Badge>
                    <span className="text-[10px] text-muted-foreground font-mono">
                      {post.readTime}
                    </span>
                  </div>

                  <CardTitle className="text-lg font-bold text-foreground line-clamp-2">
                    {post.title}
                  </CardTitle>

                  <CardDescription className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3 font-normal">
                    {post.summary}
                  </CardDescription>

                  <div className="flex flex-wrap gap-1 mt-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 rounded bg-slate-50 border border-border/60 text-[9px] font-bold text-muted-foreground uppercase"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* CSS-based abstract preview area */}
                  <div className="mt-5 w-full h-24 bg-gradient-to-r from-blue-50 to-indigo-50/50 border border-border/60 rounded-lg flex flex-col items-center justify-center p-3 text-[10px] font-mono text-muted-foreground text-center">
                    <span className="font-bold text-foreground truncate max-w-full mb-1">
                      {post.title}
                    </span>
                    <span className="text-[8px] text-muted-foreground">
                      Published: {formatDate(post.publishedAt)}
                    </span>
                  </div>
                </CardHeader>

                <div className="p-6 pt-2">
                  <Button
                    href={`/blog/${post.slug}`}
                    variant="ghost"
                    size="sm"
                    className="w-full text-left justify-between p-0 hover:bg-transparent hover:text-primary font-semibold text-xs border-t border-border/45 pt-4 rounded-none"
                  >
                    Read Article
                    <svg className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Blog Categories Section */}
      <Section variant="muted" id="blog-categories" className="border-y border-border">
        <Container>
          <SectionHeader
            title="Topics We Write About"
            eyebrow="Categories"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((cat, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white border border-border shadow-xs flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-1">{cat.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed font-normal">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Blog CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-background border-t border-border/80">
        <Container>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-primary/10 rounded-3xl p-8 md:p-20 text-center max-w-5xl mx-auto shadow-soft relative">
            <div className="absolute top-0 left-0 w-24 h-24 bg-white/40 rounded-full blur-xl -translate-x-12 -translate-y-12" />
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-white/30 rounded-full blur-2xl translate-x-12 translate-y-12" />

            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-6 leading-tight">
              Planning a Software Project?
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Read our guides, then share your requirements with Motive Solutions. We can help you choose the right platforms, features, architecture, and development roadmap.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button href={ROUTES.CONTACT} size="lg" className="w-full sm:w-auto">
                Request a Project Quote
              </Button>
              <Button href={ROUTES.SERVICES.ROOT} variant="outline" size="lg" className="w-full sm:w-auto">
                View Services
              </Button>
            </div>

            <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest leading-relaxed max-w-xl mx-auto">
              Custom IPTV & OTT apps • Smart TV platforms • web portals • admin panels • business software
            </span>
          </div>
        </Container>
      </section>
    </div>
  );
}
