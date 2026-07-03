import * as React from "react";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { SERVICES } from "@/data/services";
import { ROUTES } from "@/constants/routes";

export default function ServicesOverviewSection() {
  return (
    <Section variant="white" id="services-overview" hasBorderBottom={true}>
      <Container>
        <SectionHeader
          title="Custom Software Solutions Built for Growth"
          eyebrow="What We Build"
          description="We design and develop branded digital products for streaming businesses, service companies, agencies, and enterprises that need reliable, scalable, and user-friendly software."
          align="center"
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8 mb-12">
          {SERVICES.map((service) => {
            // Resolve the link path correctly: slug could be "services" (meaning ROOT)
            const href = service.slug === "services" 
              ? ROUTES.SERVICES.ROOT 
              : `${ROUTES.SERVICES.ROOT}/${service.slug}`;

            return (
              <Card key={service.id} className="flex flex-col justify-between h-full bg-white border border-border shadow-xs hover:border-primary/20">
                <CardHeader className="p-3 sm:p-6 pb-2">
                  <Badge variant="soft" className="w-fit mb-2 sm:mb-4 text-[9px] sm:text-xs">
                    {service.title.includes("&") ? "Systems" : "App"}
                  </Badge>
                  <CardTitle className="text-sm sm:text-lg md:text-xl font-bold text-foreground line-clamp-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 sm:line-clamp-4">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="p-3 sm:p-6 pt-2">
                  <Button
                    href={href}
                    variant="ghost"
                    size="sm"
                    className="w-full text-left justify-between p-0 hover:bg-transparent hover:text-primary font-semibold text-[11px] sm:text-xs md:text-sm"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button href={ROUTES.SERVICES.ROOT} variant="outline" size="lg">
            View All Services & Specifications
          </Button>
        </div>
      </Container>
    </Section>
  );
}
