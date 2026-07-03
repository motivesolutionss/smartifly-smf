import * as React from "react";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFaqSectionProps {
  title: string;
  eyebrow?: string;
  description?: string;
  faqs: FAQItem[];
}

export default function ServiceFaqSection({
  title,
  eyebrow,
  description,
  faqs,
}: ServiceFaqSectionProps) {
  return (
    <Section variant="muted" id="service-faqs">
      <Container>
        <SectionHeader
          title={title}
          eyebrow={eyebrow}
          description={description}
          align="center"
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, idx) => (
            <Card key={idx} hoverable={false} className="bg-white border border-border/80">
              <CardHeader className="p-6 md:p-8">
                <CardTitle className="text-base md:text-lg font-bold text-foreground mb-2">
                  {faq.question}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground mt-2">
                  {faq.answer}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
