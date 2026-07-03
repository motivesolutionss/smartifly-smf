import * as React from "react";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Custom Development Approach",
      desc: "We build around your business model, platform needs, users, workflows, and integrations instead of forcing a generic template.",
    },
    {
      title: "Multi-Platform Expertise",
      desc: "From mobile and Smart TV apps to web portals and admin dashboards, we design experiences for the screens your users actually use.",
    },
    {
      title: "Scalable Architecture",
      desc: "We plan reusable modules, clean frontend structure, backend readiness, API layers, and future feature growth from the beginning.",
    },
    {
      title: "Clean UI/UX Execution",
      desc: "We focus on professional interfaces, responsive layouts, smooth user flows, and platform-specific experiences that feel easy to use.",
    },
    {
      title: "Business-Focused Delivery",
      desc: "We think beyond code by helping with requirements, structure, launch planning, maintenance, and future improvements.",
    },
    {
      title: "Responsible Software Positioning",
      desc: "We build IPTV, OTT, and software platforms only. Clients are responsible for legally authorized content, playlists, and media sources.",
    }
  ];

  return (
    <Section variant="white" id="why-choose-us" hasBorderBottom={true}>
      <Container>
        <SectionHeader
          title="A Technology Partner for Serious Digital Products"
          eyebrow="Why Choose Motive Solutions"
          description="We combine software engineering, product thinking, UI/UX design, API integration, and long-term support to help businesses build digital platforms that are reliable, scalable, and easy to manage."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <Card
              key={idx}
              hoverable={true}
              className="bg-white border-border/80 shadow-xs hover:border-primary/20 flex flex-col justify-between"
            >
              <CardHeader className="p-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 font-bold text-sm">
                  ✓
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  {reason.title}
                </CardTitle>
                <CardDescription className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
