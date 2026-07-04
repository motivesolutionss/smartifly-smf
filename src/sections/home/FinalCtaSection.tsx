import * as React from "react";
import Container from "@/components/common/Container";
import Button from "@/components/ui/Button";
import { ROUTES } from "@/constants/routes";

export default function FinalCtaSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-background">
      <Container>
        {/* Call to Action Container */}
        <div className="bg-gradient-to-r from-[#e6ebf2] to-indigo-50 border border-primary/10 rounded-3xl p-8 md:p-20 text-center max-w-5xl mx-auto shadow-soft relative">
          {/* Subtle Decorative CSS Accent Circles */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-white/40 rounded-full blur-xl -translate-x-12 -translate-y-12" />
          <div className="absolute bottom-0 right-0 w-36 h-36 bg-white/30 rounded-full blur-2xl translate-x-12 translate-y-12" />

          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-6 leading-tight">
            Ready to Build Your Next <br />
            <span className="bg-gradient-to-r from-[#001f3f] to-blue-600 bg-clip-text text-transparent">
              Software Platform?
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Share your idea with Motive Solutions and we will help you plan a professional, scalable, and user-friendly digital product for your business.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button href={ROUTES.CONTACT} size="lg" className="w-full sm:w-auto">
              Request a Project Quote
            </Button>
            <Button href={ROUTES.SERVICES.ROOT} variant="outline" size="lg" className="w-full sm:w-auto">
              Explore Services
            </Button>
          </div>

          <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            Custom IPTV & OTT apps &bull; Smart TV platforms &bull; web portals &bull; admin panels &bull; business software
          </span>
        </div>
      </Container>
    </section>
  );
}
