"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Die Geschichte als Dunkelkammer: Auf großen Bildschirmen bleibt der Abschnitt
// stehen und die Kapitel ziehen beim Scrollen seitlich vorbei. Die Archivfotos
// „entwickeln“ sich, sobald sie ins Bild kommen.
export function Darkroom({ children, years }: { children: ReactNode; years: string[] }) {
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const out = outer.current;
    const tr = track.current;
    if (!out || !tr) return;

    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!calm) out.classList.add("can-develop");
    const prints = out.querySelectorAll<HTMLElement>(".archive-print");
    const develop = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-developed");
            develop.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.55 },
    );
    prints.forEach((print) => develop.observe(print));

    const query = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    let distance = 0;

    const update = () => {
      frame = 0;
      const rect = out.getBoundingClientRect();
      const travel = out.offsetHeight - window.innerHeight;
      const progress = travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 0;
      tr.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
      bar.current?.style.setProperty("--progress", String(progress));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const layout = () => {
      if (query.matches) {
        out.classList.add("is-pinned");
        distance = tr.scrollWidth - window.innerWidth;
        out.style.height = `${distance + window.innerHeight}px`;
        update();
      } else {
        out.classList.remove("is-pinned");
        out.style.height = "";
        tr.style.transform = "";
      }
    };

    layout();
    const resize = new ResizeObserver(layout);
    resize.observe(tr);
    query.addEventListener("change", layout);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", layout);
    return () => {
      develop.disconnect();
      resize.disconnect();
      query.removeEventListener("change", layout);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", layout);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={outer} className="darkroom">
      <div className="darkroom-sticky">
        <div ref={track} className="darkroom-track">
          {children}
        </div>
        <div ref={bar} className="darkroom-progress" aria-hidden="true">
          <div className="darkroom-progress-line" />
          <ol>
            {years.map((year) => (
              <li key={year}>{year}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
