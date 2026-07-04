import * as React from "react";
import Image from "next/image";
import Section from "@/components/common/Section";

export default function PlatformBadgesSection() {
  const marqueeItems = [
    { name: "Android Apps", icon: "/icons/androidapps.png" },
    { name: "iOS Apps", icon: "/icons/ios.png" },
    { name: "Android TV", icon: "/icons/androidicon.png" },
    { name: "Samsung Tizen", icon: "/icons/tizen.png" },
    { name: "LG webOS", icon: "/icons/webos.png" },
    { name: "Fire TV", icon: "/icons/firetv.png" },
    { name: "Web Platforms", icon: "/icons/website.jpg" },
    { name: "Admin Panels", icon: "/icons/adminpanel.avif" },
    { name: "API Integrations", icon: "/icons/api.avif" },
  ];

  // Repeat 5 times to ensure continuous seamless looping on all screens
  const items = [
    ...marqueeItems,
    ...marqueeItems,
    ...marqueeItems,
    ...marqueeItems,
    ...marqueeItems,
  ];

  return (
    <Section variant="slate-50" id="multi-platform-badges" className="py-6 overflow-hidden">

      {/* Single Infinite Marquee Track with Red Gradient Background */}
      <div className="relative w-full overflow-hidden py-6 bg-gradient-to-r from-red-950/30 via-red-900/15 to-red-950/30 border-y border-red-950/25">
        {/* Soft edge fading mask */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-12 sm:gap-16 w-max animate-marquee-left items-center">
          {items.map((item, index) => (
            <div key={`${item.name}-${index}`} className="flex items-center justify-center shrink-0 w-[120px] sm:w-[150px] h-16 sm:h-20">
              <Image
                src={item.icon}
                alt={item.name}
                width={96}
                height={96}
                className="max-w-[70%] max-h-[70%] sm:max-w-full sm:max-h-full object-contain hover:scale-105 transition-transform duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
