"use client";

import { useEffect } from "react";

// Elemente mit data-focus kommen beim Scrollen „aus der Unschärfe“ ins Bild.
// Ohne JavaScript oder mit „Bewegung reduzieren“ ist alles sofort scharf.
export function FocusReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = [...document.querySelectorAll<HTMLElement>("[data-focus]")];
    // Was beim Start schon sichtbar ist, bleibt scharf – kein Flackern.
    for (const item of items) {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) item.classList.add("is-sharp");
    }
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-sharp");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );
    items.filter((item) => !item.classList.contains("is-sharp")).forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  return null;
}
