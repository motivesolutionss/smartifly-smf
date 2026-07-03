import * as React from "react";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { FEATURES } from "@/data/features";

export default function FeaturesSection() {
  return (
    <Section variant="white" id="platform-features" hasBorderBottom={true}>
      <Container>
        <SectionHeader
          title="Everything Needed to Build Reliable Streaming & Business Platforms"
          eyebrow="Platform Capabilities"
          description="From Live TV and VOD experiences to admin dashboards, APIs, analytics, and secure user management, we build the core modules required for scalable digital products."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => (
            <Card
              key={feature.id}
              hoverable={true}
              className="bg-white border-border/80 shadow-xs hover:border-primary/20 flex flex-col justify-between"
            >
              <CardHeader className="p-6">
                {/* Custom CSS visual icon representation */}
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm mb-4">
                  {(idx + 1).toString().padStart(2, "0")}
                </div>

                <CardTitle className="text-base font-bold text-foreground mb-2">
                  {feature.title}
                </CardTitle>

                <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
