import * as React from "react";
import Container from "@/components/common/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

interface ActionItem {
  label: string;
  href: string;
}

interface ServiceHeroSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: ActionItem;
  secondaryCta?: ActionItem;
  badges: string[];
  visualElement: React.ReactNode;
}

export default function ServiceHeroSection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  badges,
  visualElement,
}: ServiceHeroSectionProps) {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-background">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[45%] h-[70%] bg-gradient-to-b from-blue-50/70 to-indigo-50/40 rounded-bl-[120px] -z-10" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-50/40 rounded-full blur-3xl -z-10" />

      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        {/* Left Column: Wording & CTA badges */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <Badge variant="soft" className="mb-6">
            {eyebrow}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
            {title}
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
            {description}
          </p>

          <div className="flex flex-wrap gap-4 mb-10 w-full sm:w-auto">
            <Button href={primaryCta.href} size="lg" className="w-full sm:w-auto">
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline" size="lg" className="w-full sm:w-auto">
                {secondaryCta.label}
              </Button>
            )}
          </div>

          {/* Badges Grid */}
          <div className="w-full border-t border-border/80 pt-6">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3.5">
              Core Technical Features:
            </h4>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
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

        {/* Right Column: Visual Showcase */}
        <div className="lg:col-span-5 w-full flex items-center justify-center">
          {visualElement}
        </div>
      </Container>
    </section>
  );
}
