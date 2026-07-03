import * as React from "react";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

interface PlatformItem {
  name: string;
  tags: string[];
}

interface ServicePlatformsSectionProps {
  title: string;
  eyebrow?: string;
  description?: string;
  platforms: PlatformItem[];
}

export default function ServicePlatformsSection({
  title,
  eyebrow,
  description,
  platforms,
}: ServicePlatformsSectionProps) {
  return (
    <Section variant="muted" id="service-platforms">
      <Container>
        <SectionHeader
          title={title}
          eyebrow={eyebrow}
          description={description}
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {platforms.map((plat, idx) => (
            <Card
              key={idx}
              hoverable={true}
              className="bg-white border-border/80 shadow-xs hover:border-primary/20 flex flex-col justify-between"
            >
              <CardHeader className="p-6 text-center flex flex-col items-center justify-center">
                <CardTitle className="text-lg font-bold text-foreground mb-4">
                  {plat.name}
                </CardTitle>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {plat.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[9px] px-2 py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
