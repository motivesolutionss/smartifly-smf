import * as React from "react";
import Container from "@/components/common/Container";
import Button from "@/components/ui/Button";

interface ActionItem {
  label: string;
  href: string;
}

interface ServiceCtaSectionProps {
  title: string;
  description: string;
  primaryCta: ActionItem;
  secondaryCta?: ActionItem;
  supportingText?: string;
}

export default function ServiceCtaSection({
  title,
  description,
  primaryCta,
  secondaryCta,
  supportingText,
}: ServiceCtaSectionProps) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-background">
      <Container>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-primary/10 rounded-3xl p-8 md:p-20 text-center max-w-5xl mx-auto shadow-soft relative">
          {/* Subtle Decorative Accents */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-white/40 rounded-full blur-xl -translate-x-12 -translate-y-12" />
          <div className="absolute bottom-0 right-0 w-36 h-36 bg-white/30 rounded-full blur-2xl translate-x-12 translate-y-12" />

          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-6 leading-tight">
            {title}
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            {description}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button href={primaryCta.href} size="lg" className="w-full sm:w-auto">
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline" size="lg" className="w-full sm:w-auto">
                {secondaryCta.label}
              </Button>
            )}
          </div>

          {supportingText && (
            <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest leading-relaxed max-w-xl mx-auto">
              {supportingText}
            </span>
          )}
        </div>
      </Container>
    </section>
  );
}
