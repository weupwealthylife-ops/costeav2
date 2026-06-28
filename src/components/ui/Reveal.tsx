"use client";

import { useEffect, useRef } from "react";

type RevealVariant = "up" | "scale" | "left" | "right";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  variant?: RevealVariant;
  as?: keyof React.JSX.IntrinsicElements;
}

const variantClass: Record<RevealVariant, string> = {
  up: "reveal",
  scale: "reveal-scale",
  left: "reveal-left",
  right: "reveal-right",
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

    // Respect reduced-motion at the JS layer too
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("visible");
      return;
    }

    // Fallback so content is never permanently hidden
    const fallback = setTimeout(() => el.classList.add("visible"), 1200);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallback);
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      // rootMargin pushes trigger point 80px above the viewport bottom — animations
      // start slightly before the element fully enters, just like Apple does
      { threshold: 0, rootMargin: "0px 0px -80px 0px" }
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
