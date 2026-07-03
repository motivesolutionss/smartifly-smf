import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "soft";
}

export default function Badge({
  children,
  className,
  variant = "primary",
  ...props
}: BadgeProps) {
  const baseStyles = "inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold tracking-wide transition-colors";
  
  const variants = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground border border-border",
    outline: "border border-border text-muted-foreground",
    soft: "bg-primary/10 text-primary",
  };

  return (
    <span
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}
