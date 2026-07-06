"use client";

import { useEffect, useRef } from "react";

type RevealVariant = "up" | "scale" | "left" | "right" | "blur" | "fade";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  variant?: RevealVariant;
  as?: keyof React.JSX.IntrinsicElements;
}

const variantClass: Record<RevealVariant, string> = {
  up: "reveal",
  scale: "reveal-scale",
  left: "reveal-left",
  right: "reveal-right",
  blur: "reveal-blur",
  fade: "reveal-fade",
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("visible");
      return;
    }

    // Safety fallback — never leave content invisible
    const fallback = setTimeout(() => el.classList.add("visible"), 1500);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallback);
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      // Trigger 60px before element reaches viewport bottom — starts animation
      // just as the element comes into view, matching Apple's timing
      { threshold: 0, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  const base = variantClass[variant];
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={`${base} ${delayClass} ${className}`}>
      {children}
    </Tag>
  );
}
