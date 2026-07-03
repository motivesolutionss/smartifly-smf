"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { HEADER_NAV_ITEMS } from "@/data/navigation";

export default function MainNavigation() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  return (
    <nav className="hidden md:flex items-center gap-8">
      {HEADER_NAV_ITEMS.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

        if (hasChildren) {
          return (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary py-2 cursor-pointer",
                  isActive ? "text-primary font-semibold" : "text-muted-foreground"
                )}
                aria-expanded={openDropdown === item.label}
              >
                {item.label}
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute top-full left-0 w-64 p-2 bg-card border border-border rounded-lg shadow-lg opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                {item.children?.map((subItem) => {
                  const isSubActive = pathname === subItem.href;
                  return (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className={cn(
                        "block px-4 py-2 text-sm rounded-md transition-colors hover:bg-secondary hover:text-primary",
                        isSubActive ? "bg-secondary text-primary font-medium" : "text-muted-foreground"
                      )}
                    >
                      {subItem.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary py-2",
              isActive ? "text-primary font-semibold" : "text-muted-foreground"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
