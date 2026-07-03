import * as React from "react";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

interface FeatureItem {
  title: string;
  description: string;
}

interface ServiceFeaturesSectionProps {
  title: string;
  eyebrow?: string;
  description?: string;
  features: FeatureItem[];
  columns?: 3 | 4;
  variant?: "default" | "muted" | "brand-soft";
  id?: string;
}

export default function ServiceFeaturesSection({
  title,
  eyebrow,
  description,
  features,
  columns = 3,
  variant = "default",
  id,
}: ServiceFeaturesSectionProps) {
  const gridClasses = {
    3: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
    4: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
  };

  return (
    <Section variant={variant} id={id}>
      <Container>
        <SectionHeader
          title={title}
          eyebrow={eyebrow}
          description={description}
          align="center"
        />

        <div className={gridClasses[columns]}>
          {features.map((feat, idx) => (
            <Card
              key={idx}
              hoverable={true}
              className="bg-white border-border/80 shadow-xs hover:border-primary/20 flex flex-col justify-between"
            >
              <CardHeader className="p-6">
                {/* CSS Visual Marker */}
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-xs mb-4">
                  {(idx + 1).toString().padStart(2, "0")}
                </div>
                <CardTitle className="text-base font-bold text-foreground mb-2">
                  {feat.title}
                </CardTitle>
                <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                  {feat.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
