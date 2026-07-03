import * as React from "react";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { CASE_STUDIES } from "@/data/case-studies";
import { ROUTES } from "@/constants/routes";

export default function CaseStudiesSection() {
  return (
    <Section variant="default" id="homepage-case-studies">
      <Container>
        <SectionHeader
          title="Software Solutions Built for Real Business Needs"
          eyebrow="Case Studies"
          description="From streaming apps to business portals and e-commerce systems, Motive Solutions helps companies launch digital products that are practical, scalable, and built around their operations."
          align="center"
        />

        {/* Case Studies 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {CASE_STUDIES.map((study) => (
            <Card
              key={study.id}
              className="flex flex-col justify-between h-full bg-white border border-border shadow-xs hover:border-primary/20"
            >
              <CardHeader className="p-8 pb-2">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <Badge variant="soft" className="text-[10px] px-2 py-0.5">
                    {study.industry}
                  </Badge>
                  <span className="text-[10px] text-muted-foreground font-bold font-mono">
                    Case #{study.id.split("-")[1]?.toUpperCase() || "PROJ"}
                  </span>
                </div>

                <CardTitle className="text-xl font-bold text-foreground">
                  {study.title}
                </CardTitle>

                <CardDescription className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {study.summary}
                </CardDescription>

                {/* Tag chips */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-50 border border-border/80 text-[10px] font-semibold text-muted-foreground uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Abstract CSS Visual Box */}
                <div className="mt-6 w-full h-24 bg-gradient-to-r from-blue-50 to-indigo-50/50 border border-border/60 rounded-lg flex items-center justify-center text-[10px] text-muted-foreground font-mono">
                  [Abstract Preview: {study.title} Interface]
                </div>
              </CardHeader>

              <CardFooter className="p-8 pt-2">
                <Button
                  href={`/case-studies/${study.slug}`}
                  variant="ghost"
                  size="sm"
                  className="w-full text-left justify-between p-0 hover:bg-transparent hover:text-primary font-semibold"
                >
                  Explore Work
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Small CTA Card below Case Studies */}
        <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-slate-50 border border-border text-center shadow-xs">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Have a similar project in mind?
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
            Share your requirements and we will help you plan the right software solution for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={ROUTES.CONTACT}>
              Start a Project
            </Button>
            <Button href={ROUTES.CASE_STUDIES.ROOT} variant="outline">
              View All Case Studies
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
