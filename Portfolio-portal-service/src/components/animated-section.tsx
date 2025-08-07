import { useIntersectionObserver } from "../hooks/use-intersection-observer";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "bounceIn";
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fadeIn",
  delay = 0
}: AnimatedSectionProps) {
  const { ref, hasIntersected } = useIntersectionObserver();

  const animationClasses = {
    fadeIn: "animate-fade-in",
    slideUp: "animate-slide-up",
    slideLeft: "animate-slide-left",
    slideRight: "animate-slide-right",
    bounceIn: "animate-bounce-in"
  };

  return (
    <div
      ref={ref}
      className={`${className} ${
        hasIntersected ? animationClasses[animation] : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
