import * as React from "react";
import Image from "next/image";
import Container from "@/components/common/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { ROUTES } from "@/constants/routes";

export default function HeroSection() {

  return (
    <section className="relative py-4 lg:py-0 bg-[#f5f5f7] border-b border-border/40 min-h-0 lg:min-h-0 flex items-center">
      {/* Background Image: Covers the entire hero banner */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/herobannerimage.png"
          alt="Motive Solutions Console Mockup"
          fill
          className="object-contain object-right opacity-100"
          sizes="100vw"
          priority
        />
      </div>

      <Container className="relative z-10 flex flex-col justify-between h-full w-full">
        <div className="max-w-3xl flex flex-col items-start text-left mb-8 lg:mb-12 pt-6 lg:pt-10">
          <Badge variant="soft" className="mb-4 lg:mb-2 bg-blue-100 text-blue-800 border border-blue-200/50 uppercase tracking-wider text-[10px]">
            Xtream UI & Ministra Stalker Integrated
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-4 lg:mb-3">
            Next-Generation <br />
            <span className="bg-gradient-to-r from-[#001f3f] to-blue-600 bg-clip-text text-transparent">
              IPTV/OTT Solutions
            </span>{" "}
            for a Connected World
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8 lg:mb-6">
            Powering entertainment across all screens with Xtream UI & Ministra Stalker — built for performance, reliability and scale.
          </p>

          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <Button href={ROUTES.CONTACT} size="lg" className="w-full sm:w-auto gap-2">
              Explore Solutions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
            <Button href={ROUTES.SERVICES.ROOT} variant="outline" size="lg" className="w-full sm:w-auto gap-2">
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              View Platforms
            </Button>
          </div>
        </div>

        {/* Supported Platforms Horizontal Card */}
        <div className="w-full bg-white/95 backdrop-blur-xs border border-slate-200/80 rounded-2xl p-4 md:py-5 md:px-6 shadow-sm grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-0 gap-6 mb-4 lg:mb-6 translate-y-10 lg:translate-y-14 relative z-20">
          {/* Samsung */}
          <div className="flex items-center gap-2.5 justify-center lg:justify-start lg:pl-4">
            <Image
              src="/icons/tizen.png"
              alt="Samsung Tizen"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-extrabold text-slate-800 leading-none">Samsung</span>
              <span className="text-[9px] text-muted-foreground font-semibold uppercase tracking-wide mt-0.5">Tizen</span>
            </div>
          </div>
          
          <div className="hidden lg:block h-8 w-[1px] bg-slate-200/60" />

          {/* LG */}
          <div className="flex items-center gap-2.5 justify-center lg:justify-start">
            <Image
              src="/icons/LG.webp"
              alt="LG webOS"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-extrabold text-slate-800 leading-none">LG</span>
              <span className="text-[9px] text-muted-foreground font-semibold uppercase tracking-wide mt-0.5">webOS</span>
            </div>
          </div>

          <div className="hidden lg:block h-8 w-[1px] bg-slate-200/60" />

          {/* iOS */}
          <div className="flex items-center gap-2.5 justify-center lg:justify-start">
            <Image
              src="/icons/ios.png"
              alt="iOS"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-extrabold text-slate-800 leading-none">iOS</span>
              <span className="text-[9px] text-muted-foreground font-semibold uppercase tracking-wide mt-0.5">iPhone / iPad</span>
            </div>
          </div>

          <div className="hidden lg:block h-8 w-[1px] bg-slate-200/60" />

          {/* Android */}
          <div className="flex items-center gap-2.5 justify-center lg:justify-start">
            <Image
              src="/icons/android.png"
              alt="Android"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-extrabold text-slate-800 leading-none">Android</span>
              <span className="text-[9px] text-muted-foreground font-semibold uppercase tracking-wide mt-0.5">Phone / TV</span>
            </div>
          </div>

          <div className="hidden lg:block h-8 w-[1px] bg-slate-200/60" />

          {/* Web */}
          <div className="flex items-center gap-2.5 justify-center lg:justify-start">
            <Image
              src="/icons/web.png"
              alt="Web"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-extrabold text-slate-800 leading-none">Web</span>
              <span className="text-[9px] text-muted-foreground font-semibold uppercase tracking-wide mt-0.5">Browsers</span>
            </div>
          </div>

          <div className="hidden lg:block h-8 w-[1px] bg-slate-200/60" />

          {/* Xtream UI */}
          <div className="flex items-center gap-2.5 justify-center lg:justify-start">
            <Image
              src="/icons/xtream.png"
              alt="Xtream UI"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-extrabold text-slate-800 leading-none">Xtream UI</span>
              <span className="text-[9px] text-muted-foreground font-semibold uppercase tracking-wide mt-0.5">& Ministra</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
