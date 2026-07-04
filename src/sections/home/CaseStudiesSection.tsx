import * as React from "react";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import Button from "@/components/ui/Button";
import { ROUTES } from "@/constants/routes";

export default function CaseStudiesSection() {
  return (
    <Section variant="default" id="homepage-case-studies" className="pt-0 pb-16">
      <Container>
        {/* Small CTA Card */}
        <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-slate-50 border border-border text-center shadow-xs">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Have a similar streaming project in mind?
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
            Share your requirements and we will help you plan the right player apps, API integrations, or white-label solutions for your streaming operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={ROUTES.CONTACT}>
              Start a Project
            </Button>
            <Button href={ROUTES.CASE_STUDIES.ROOT} variant="outline">
              View Case Study Detail
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
