"use client";

import * as React from "react";
import Image from "next/image";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/data/services";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";

// Map service IDs to generated visual mockup images
function getServiceVisual(id: string) {
  let src = "";
  let alt = "";
  
  switch (id) {
    case "iptv-app-dev":
      src = "/images/iptv_app_preview.png";
      alt = "IPTV App Development Preview";
      break;
    case "ott-app-dev":
      src = "/images/ott_app_preview.png";
      alt = "OTT App Development Preview";
      break;
    case "white-label-iptv":
      src = "/images/whitelabel_app_preview.png";
      alt = "White-Label IPTV Apps Preview";
      break;
    case "smart-tv-dev":
      src = "/images/smarttv_app_preview.png";
      alt = "Smart TV App Development Preview";
      break;
    case "web-tv-player":
      src = "/images/webtv_app_preview.png";
      alt = "Web TV Player Preview";
      break;
    case "admin-panels-apis":
      src = "/images/admin_app_preview.png";
      alt = "Admin Panels & API Systems Preview";
      break;
    default:
      return null;
  }
  
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-contain object-top transition-transform duration-500 group-hover:scale-105"
      sizes="(max-width: 768px) 50vw, 33vw"
    />
  );
}

const TRIPLE_SERVICES = [...SERVICES, ...SERVICES, ...SERVICES];

export default function ServicesOverviewSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  
  const [centerIdx, setCenterIdx] = React.useState(6); // Default to first card of the middle set
  const centerIdxRef = React.useRef(6);
  
  const [isCentered, setIsCentered] = React.useState(false);
  const isCenteredRef = React.useRef(false);
  
  const [isHovered, setIsHovered] = React.useState(false);
  
  const scrollTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Sync centerIdxRef with state
  React.useEffect(() => {
    centerIdxRef.current = centerIdx;
  }, [centerIdx]);

  // Perform the silent jump/wrap-around to middle set (Set 2) when scrolling stops
  const performSilentWrap = React.useCallback((currentIdx: number) => {
    if (!scrollRef.current) return;
    
    const cards = scrollRef.current.querySelectorAll(".snap-center-card");
    if (cards.length === 0) return;
    
    const cardWidth = (cards[0] as HTMLElement).clientWidth || 280;
    const gap = 24;
    const totalCardWidth = cardWidth + gap;
    
    const numServices = SERVICES.length;
    
    // Check if the scroll has settled outside the middle set (Set 2: indices 6 to 11)
    if (currentIdx < numServices || currentIdx >= numServices * 2) {
      // Map current index to corresponding index in Set 2
      const mappedIdx = (currentIdx % numServices) + numServices;
      
      // Calculate scroll position to center the mapped card
      const targetScrollLeft = mappedIdx * totalCardWidth - (scrollRef.current.clientWidth - cardWidth) / 2;
      
      // Jump instantly
      scrollRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: "auto"
      });
      
      setCenterIdx(mappedIdx);
    }
  }, []);

  // Main scroll handler to compute card scales, opacities, and z-index based on distance from center
  const handleScroll = React.useCallback(() => {
    if (!scrollRef.current || !isCenteredRef.current) return;
    
    const { scrollLeft, clientWidth } = scrollRef.current;
    const containerCenter = scrollLeft + clientWidth / 2;
    
    const cards = scrollRef.current.querySelectorAll(".snap-center-card");
    if (cards.length === 0) return;
    
    const cardWidth = (cards[0] as HTMLElement).clientWidth || 280;
    const gap = 24;
    const totalCardWidth = cardWidth + gap;
    
    let minDistance = Infinity;
    let closestIdx = centerIdxRef.current;
    
    cards.forEach((card, idx) => {
      const cardEl = card as HTMLElement;
      const cardLeft = cardEl.offsetLeft;
      const cardCenter = cardLeft + cardWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
      
      // Calculate smooth scale & opacity based on distance from center
      const maxDistance = totalCardWidth;
      const t = Math.min(distance / maxDistance, 1);
      
      // Use an ease-out behavior (quadratic) for smoother transition
      const easeT = t * t;
      
      const scale = 1.0 - easeT * 0.18; // scales down from 1.0 to 0.82
      const opacity = 1.0 - easeT * 0.45; // opacity down from 1.0 to 0.55
      
      cardEl.style.transform = `scale(${scale})`;
      cardEl.style.opacity = `${opacity}`;
      
      // Z-Index: center card should stack on top of its neighbors
      if (distance < totalCardWidth) {
        cardEl.style.zIndex = Math.round((1 - easeT) * 10).toString();
      } else {
        cardEl.style.zIndex = "0";
      }
    });
    
    if (closestIdx !== centerIdxRef.current) {
      setCenterIdx(closestIdx);
    }
    
    // Debounce the silent wrap check to wait until scroll stops
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      performSilentWrap(closestIdx);
    }, 150);
  }, [performSilentWrap]);

  // Click handler to center a card smoothly
  const handleCardClick = (index: number) => {
    if (scrollRef.current) {
      const cards = scrollRef.current.querySelectorAll(".snap-center-card");
      if (cards.length === 0) return;
      
      const cardWidth = (cards[0] as HTMLElement).clientWidth || 280;
      const gap = 24;
      const totalCardWidth = cardWidth + gap;
      const targetScrollLeft = index * totalCardWidth - (scrollRef.current.clientWidth - cardWidth) / 2;
      
      scrollRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth"
      });
    }
  };

  // Scroll to middle set on mount
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        const card = scrollRef.current.querySelector(".snap-center-card");
        const cardWidth = card?.clientWidth || 280;
        const gap = 24;
        const totalCardWidth = cardWidth + gap;
        
        const targetScrollLeft = 6 * totalCardWidth - (scrollRef.current.clientWidth - cardWidth) / 2;
        scrollRef.current.scrollLeft = targetScrollLeft;
        
        isCenteredRef.current = true;
        setIsCentered(true);
        
        // Directly call handleScroll to set initial card styling
        handleScroll();
      }
    }, 50);
    
    return () => clearTimeout(timer);
  }, [handleScroll]);

  // Auto-slide effect that resets when centerIdx or hover state changes
  React.useEffect(() => {
    if (!isCentered || isHovered) return;

    const timer = setInterval(() => {
      if (scrollRef.current) {
        const card = scrollRef.current.querySelector(".snap-center-card");
        const cardWidth = card?.clientWidth || 280;
        const gap = 24;
        const totalCardWidth = cardWidth + gap;
        
        const nextIdx = centerIdx + 1;
        const targetScrollLeft = nextIdx * totalCardWidth - (scrollRef.current.clientWidth - cardWidth) / 2;
        
        scrollRef.current.scrollTo({
          left: targetScrollLeft,
          behavior: "smooth"
        });
      }
    }, 3500);

    return () => clearInterval(timer);
  }, [centerIdx, isCentered, isHovered]);

  // Recalculate on window resize to ensure correct centering and styles
  React.useEffect(() => {
    const handleResize = () => {
      if (isCenteredRef.current) {
        handleScroll();
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  return (
    <Section variant="white" id="services-overview" hasBorderBottom={true} className="pt-8 md:pt-12">
      <Container>
        <SectionHeader
          title="Custom Software Solutions Built for Growth"
          eyebrow="What We Build"
          description="We design and develop branded digital products for streaming businesses, service companies, agencies, and enterprises that need reliable, scalable, and user-friendly software."
          align="center"
        />
      </Container>

      {/* Full-width occupied horizontal slider container */}
      <div 
        className="relative w-full overflow-hidden mt-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Scroll Container (Removed scroll-smooth class to allow instant silent jumps) */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scrollbar-none py-8 px-4 md:px-8 snap-x snap-mandatory"
        >
          {TRIPLE_SERVICES.map((service, index) => {
            const href = service.slug === "services" 
              ? ROUTES.SERVICES.ROOT 
              : `${ROUTES.SERVICES.ROOT}/${service.slug}`;

            const activeServiceIdx = centerIdx % SERVICES.length;

            return (
              <div 
                key={`${service.id}-${index}`} 
                onClick={() => handleCardClick(index)}
                className={cn(
                  "snap-center snap-center-card shrink-0 w-[270px] sm:w-[320px] aspect-[9/16] rounded-[2.5rem] border-[6px] border-slate-950 bg-black shadow-2xl relative overflow-hidden group cursor-pointer"
                )}
                style={{
                  transform: "scale(0.82)",
                  opacity: 0.55,
                  zIndex: 0
                }}
              >
                {/* Phone Notch (Dynamic Island) */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-950 rounded-full z-30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-slate-900 rounded-full ml-auto mr-1.5" />
                </div>

                {/* Status Bar */}
                <div className="absolute top-4 left-6 right-6 flex justify-between items-center text-[9px] font-semibold text-white/90 z-30 font-sans">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    {/* Signal */}
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>
                    {/* Battery */}
                    <div className="w-3.5 h-2 border border-white/60 rounded-2xs p-0.5 flex items-center"><div className="w-full h-full bg-white rounded-3xs" /></div>
                  </div>
                </div>



                {/* Full-bleed Background Image */}
                <div className="absolute inset-0 z-0 rounded-[2rem] overflow-hidden">
                  {getServiceVisual(service.id)}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 z-10" />
                </div>

                {/* Floating Glassmorphic Text Card Box */}
                <div className="absolute bottom-5 left-4 right-4 bg-black/45 backdrop-blur-lg rounded-2xl p-4 border border-white/10 text-white z-20 flex flex-col justify-between transition-all duration-300">
                  <div>
                    <span className="text-[9px] font-extrabold text-blue-400 uppercase tracking-widest leading-none">
                      {service.slug.replace(/-/g, " ")}
                    </span>
                    <h4 className="text-sm sm:text-base font-extrabold text-white mt-1 leading-tight">
                      {service.title}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-300 leading-relaxed mt-2 line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                  
                  <Button
                    href={href}
                    variant="ghost"
                    size="sm"
                    className="w-full text-left justify-between p-0 mt-3 pt-2.5 border-t border-white/10 hover:bg-transparent text-blue-400 hover:text-blue-300 font-bold text-xs"
                  >
                    <span>Learn More</span>
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Container className="mt-8">
        <div className="text-center">
          <Button href={ROUTES.SERVICES.ROOT} variant="outline" size="lg">
            View All Services & Specifications
          </Button>
        </div>
      </Container>
    </Section>
  );
}
