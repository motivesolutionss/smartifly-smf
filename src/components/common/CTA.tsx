import * as React from "react";
import Container from "./Container";
import Button from "../ui/Button";

interface ActionItem {
  label: string;
  href: string;
}

interface CTAProps {
  title: string;
  description: string;
  primaryAction: ActionItem;
  secondaryAction?: ActionItem;
  className?: string;
}

export default function CTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
}: CTAProps) {
  return (
    <div className={className}>
      <Container>
        <div className="bg-brand-soft border border-primary/10 rounded-2xl p-8 md:p-16 text-center max-w-5xl mx-auto shadow-xs">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            {title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={primaryAction.href} size="lg">
              {primaryAction.label}
            </Button>
            {secondaryAction && (
              <Button href={secondaryAction.href} variant="outline" size="lg">
                {secondaryAction.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
