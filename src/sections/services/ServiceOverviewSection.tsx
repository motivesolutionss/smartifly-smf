import * as React from "react";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import Badge from "@/components/ui/Badge";


interface ServiceOverviewSectionProps {
  title: string;
  eyebrow: string;
  description: string;
  points: string[];
  legalDisclaimer?: string;
}

export default function ServiceOverviewSection({
  title,
  eyebrow,
  description,
  points,
  legalDisclaimer,
}: ServiceOverviewSectionProps) {
  return (
    <Section variant="muted" id="service-overview" className="border-y border-border">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Summary & Description */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <Badge variant="soft" className="mb-4">
            {eyebrow}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            {title}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            {description}
          </p>
          {legalDisclaimer && (
            <div className="p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg text-xs font-semibold text-foreground/80 leading-relaxed">
              * Legal Notice: {legalDisclaimer}
            </div>
          )}
        </div>

        {/* Right Side: Key Point List cards */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-4">
          {points.map((point, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-white border border-border shadow-xs flex items-start gap-3"
            >
              <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold mt-0.5 flex-shrink-0">
                ✓
              </div>
              <span className="text-sm font-semibold text-foreground leading-snug">
                {point}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
