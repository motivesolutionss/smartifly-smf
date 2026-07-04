"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/constants/site";
import { ROUTES } from "@/constants/routes";
import MainNavigation from "./MainNavigation";
import { HEADER_NAV_ITEMS } from "@/data/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  React.useEffect(() => {
    const handle = setTimeout(() => {
      setMobileMenuOpen(false);
    }, 0);
    return () => clearTimeout(handle);
  }, [pathname]);


  return (
    <header className="sticky top-0 z-40 w-full bg-card/85 backdrop-blur-md border-b border-border transition-all">
      <div className="max-w-7xl lg:max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href={ROUTES.HOME} className="flex items-center group">
          <Image
            src="/logos/motiveslogo.png"
            alt={SITE_CONFIG.name}
            width={195}
            height={40}
            className="h-10 w-auto object-contain group-hover:scale-102 transition-transform duration-200"
            style={{ width: "auto" }}
            priority
          />
        </Link>


        {/* Desktop Navigation */}
        <MainNavigation />

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={ROUTES.CONTACT}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all hover:bg-primary/95 hover:shadow-lg shadow-primary/10"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:bg-secondary focus:outline-none cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-card p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {HEADER_NAV_ITEMS.map((item) => (
              <div key={item.label} className="flex flex-col">
                <Link
                  href={item.href}
                  className="font-semibold text-foreground py-2 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 border-l border-border flex flex-col gap-2 my-1">
                    {item.children.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <hr className="border-border" />
          <Link
            href={ROUTES.CONTACT}
            className="w-full text-center inline-block px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all hover:bg-primary/95"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
