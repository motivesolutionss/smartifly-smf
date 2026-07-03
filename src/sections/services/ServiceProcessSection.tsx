import * as React from "react";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceProcessSectionProps {
  title: string;
  eyebrow?: string;
  description?: string;
  steps: ProcessStep[];
}

export default function ServiceProcessSection({
  title,
  eyebrow,
  description,
  steps,
}: ServiceProcessSectionProps) {
  return (
    <Section variant="default" id="service-process">
      <Container>
        <SectionHeader
          title={title}
          eyebrow={eyebrow}
          description={description}
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <Card
              key={idx}
              hoverable={true}
              className="bg-white border-border/80 shadow-xs hover:border-primary/20 flex flex-col justify-between"
            >
              <CardHeader className="p-6">
                <span className="text-3xl font-extrabold text-primary/20 block mb-3 font-mono">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>
                <CardTitle className="text-base font-bold text-foreground">
                  {step.title}
                </CardTitle>
                {step.description && (
                  <CardDescription className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </CardDescription>
                )}
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
