import * as React from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  let variantClass = "";

  if (variant === "default") {
    variantClass = "bg-primary text-primary-foreground";
  } else if (variant === "secondary") {
    variantClass = "bg-secondary text-secondary-foreground";
  } else if (variant === "destructive") {
    variantClass = "bg-destructive text-destructive-foreground";
  } else if (variant === "outline") {
    variantClass = "border border-input bg-background text-foreground";
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variantClass,
        className
      )}
      {...props}
    />
  );
}
