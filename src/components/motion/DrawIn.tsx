"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Lässt den Inhalt (die Altstadt-Skizze) von links nach rechts ins Bild zeichnen.
export function DrawIn({ children }: { children: ReactNode }) {
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.classList.add("draw-ready");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-drawn");
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={box} className="draw-in">
      {children}
    </div>
  );
}
