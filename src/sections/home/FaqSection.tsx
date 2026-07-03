import * as React from "react";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { FAQS } from "@/data/faqs";

export default function FaqSection() {
  return (
    <Section variant="default" id="faqs-section">
      <Container>
        <SectionHeader
          title="Questions Clients Ask Before Starting"
          eyebrow="FAQs"
          description="Here are common questions about working with Motive Solutions on IPTV, OTT, Smart TV, web, and custom software projects."
          align="center"
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {FAQS.map((faq) => (
            <Card key={faq.id} hoverable={false} className="bg-white border border-border/80">
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
