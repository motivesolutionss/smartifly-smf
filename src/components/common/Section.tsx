import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "default" | "muted" | "brand-soft" | "slate-50" | "slate-100" | "blue-50" | "indigo-50" | "white";
  hasBorderBottom?: boolean;
}

export default function Section({
  children,
  className,
  variant = "default",
  hasBorderBottom = false,
  ...props
}: SectionProps) {
  const bgClasses = {
    default: "bg-background",
    muted: "bg-muted",
    "brand-soft": "bg-brand-soft",
    "slate-50": "bg-slate-50",
    "slate-100": "bg-slate-100",
    "blue-50": "bg-blue-50",
    "indigo-50": "bg-indigo-50",
    white: "bg-white",
  };

  return (
    <section
      className={cn(
        "py-16 md:py-24 relative overflow-hidden",
        bgClasses[variant],
        hasBorderBottom && "border-b border-border",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
