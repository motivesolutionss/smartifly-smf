import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("max-w-7xl lg:max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 w-full", className)}
      {...props}
    >
      {children}
    </div>
  );
}
