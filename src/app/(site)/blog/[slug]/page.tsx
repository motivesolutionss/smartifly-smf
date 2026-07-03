import * as React from "react";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blog";
import { ROUTES } from "@/constants/routes";
import { getMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import Badge from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  return getMetadata({
    title: post ? `${post.title}` : "Blog Details",
    description: post?.summary || "Read this article on the Motive Solutions technical blog.",
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get 3 other posts
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* 1. Article Hero Section */}
      <section className="relative py-20 overflow-hidden bg-background border-b border-border/80">
        <div className="absolute top-0 right-0 w-[40%] h-[80%] bg-gradient-to-b from-red-50/60 to-rose-50/30 rounded-bl-[120px] -z-10" />

        <Container className="max-w-4xl">
          <LinkBackToBlog />
          
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4 pt-4">
            <Badge variant="soft" className="text-[10px] px-2 py-0.5">
              {post.category || "Insight"}
            </Badge>
            <span>&bull;</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span>&bull;</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 font-normal">
            {post.summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded bg-slate-50 border border-border text-[11px] font-semibold text-foreground uppercase tracking-wide"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 border-t border-border/80 pt-6 mt-6">
            <div>
              <span className="font-bold text-foreground block text-sm">{post.author.name}</span>
              <span className="text-xs text-muted-foreground">{post.author.role}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Article Content Section */}
      <Section variant="default" id="article-content">
        <Container className="max-w-3xl">
          <div className="prose max-w-none text-foreground text-sm leading-relaxed space-y-6">
            {/* Split contents dynamically by newlines to render as HTML blocks */}
            {post.content.split("\n\n").map((block, idx) => {
              if (block.startsWith("### ")) {
                return (
                  <h3 key={idx} className="text-lg font-bold text-foreground pt-4 mb-2">
                    {block.replace("### ", "")}
                  </h3>
                );
              }
              if (block.startsWith("• ")) {
                return (
                  <ul key={idx} className="list-disc pl-5 space-y-1.5 my-2">
                    {block.split("\n").map((li, lIdx) => (
                      <li key={lIdx}>
                        {li.replace("• ", "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.startsWith("* ")) {
                return (
                  <div key={idx} className="p-4 bg-slate-50 border-l-4 border-primary rounded-r text-xs font-semibold text-muted-foreground leading-relaxed my-4">
                    {block.replace("* ", "")}
                  </div>
                );
              }
              if (block.startsWith("---")) {
                return <hr key={idx} className="border-border my-6" />;
              }
              return (
                <p key={idx} className="font-normal text-muted-foreground">
                  {block}
                </p>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 3. Related Articles Section */}
      <Section variant="muted" id="related-articles" className="border-y border-border">
        <Container>
          <SectionHeader
            title="Read More Articles"
            eyebrow="Related Insights"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {relatedPosts.map((rPost) => (
              <Card key={rPost.id} className="bg-white border border-border shadow-xs flex flex-col justify-between">
                <CardHeader className="p-6 pb-2">
                  <div className="flex justify-between items-center gap-4 mb-3">
                    <Badge variant="soft" className="text-[10px] px-2 py-0.5">
                      {rPost.category || "Insights"}
                    </Badge>
                  </div>
                  <CardTitle className="text-sm font-bold text-foreground line-clamp-2">
                    {rPost.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-[11px] leading-relaxed text-muted-foreground line-clamp-3 font-normal">
                    {rPost.summary}
                  </CardDescription>
                </CardHeader>
                <div className="p-6 pt-2">
                  <Button
                    href={`/blog/${rPost.slug}`}
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

      {/* 4. Final CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-background border-t border-border/80">
        <Container>
          <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-primary/10 rounded-3xl p-8 md:p-20 text-center max-w-5xl mx-auto shadow-soft relative">
            <div className="absolute top-0 left-0 w-24 h-24 bg-white/40 rounded-full blur-xl -translate-x-12 -translate-y-12" />
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-white/30 rounded-full blur-2xl translate-x-12 translate-y-12" />

            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-6 leading-tight">
              Need Help Planning a Similar Project?
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Motive Solutions can help you plan and build IPTV apps, OTT platforms, Smart TV apps, Web TV Players, admin panels, APIs, and custom software.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button href={ROUTES.CONTACT} size="lg" className="w-full sm:w-auto">
                Discuss Your Project
              </Button>
              <Button href={ROUTES.SERVICES.ROOT} variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Services
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

// Subcomponent to link back to blog index
function LinkBackToBlog() {
  return (
    <a
      href={ROUTES.BLOG.ROOT}
      className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
    >
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Back to Blog
    </a>
  );
}
