"use client";

import * as React from "react";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import { Card, CardTitle } from "@/components/ui/Card";
import { FAQS } from "@/data/faqs";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section variant="default" id="faqs-section">
      <Container>
        <SectionHeader
          title="Questions Clients Ask Before Starting"
          eyebrow="FAQs"
          description="Here are common questions about working with Motive Solutions on IPTV, OTT, Smart TV, web, and custom software projects."
          align="center"
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <Card
                key={faq.id}
                hoverable={false}
                className="bg-white border border-border/80 overflow-hidden shadow-xs hover:border-slate-300 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <CardTitle className="text-base md:text-lg font-bold text-slate-900 pr-4">
                    {faq.question}
                  </CardTitle>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-500 flex-shrink-0 transition-all duration-250 ${
                      isOpen ? "rotate-180 bg-slate-100 text-slate-900" : ""
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-slate-100 bg-slate-50/30 animate-in fade-in slide-in-from-top-2 duration-200">
                    <p className="text-sm leading-relaxed text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
