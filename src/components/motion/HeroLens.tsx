"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Der Laden liegt unscharf im Hintergrund. Ein Brillenglas mit Phoropter-Skala
// zeigt ihn scharf und leicht vergrößert – und folgt auf dem Desktop der Maus.
// Bewegt wird ausschließlich per transform, damit nichts neu gezeichnet werden muss.

const TICKS = Array.from({ length: 120 }, (_, i) => i);
const SCALE = ["0,00", "0,25", "0,50", "0,75", "1,00", "1,25", "1,50", "1,75"];
const ZOOM = 1.12;
// Verhältnis Ringgröße zu Glasradius (Glasrand liegt bei r = 93 von 100 im SVG)
const RING = 200 / 93;

export function HeroLens({ background, sharp }: { background: ReactNode; sharp: ReactNode }) {
  const stage = useRef<HTMLDivElement>(null);
  const lens = useRef<HTMLDivElement>(null);
  const picture = useRef<HTMLDivElement>(null);
  const ring = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = stage.current;
    const lensEl = lens.current;
    const pictureEl = picture.current;
    const ringEl = ring.current;
    if (!el || !lensEl || !pictureEl || !ringEl) return;
    const section = el.closest("section") ?? el;
    const fine = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");

    let width = 0;
    let height = 0;
    let radius = 0;
    let cx = 0;
    let cy = 0;
    let tx = 0;
    let ty = 0;
    let rot = 0;
    let moved = false;
    let frame = 0;

    // Ruheposition: auf dem Handy oben über dem Titel, sonst rechts neben dem Text.
    const home = () => (width < 860 ? { x: width * 0.66, y: radius + 64 } : { x: width * 0.74, y: height * 0.45 });

    const apply = () => {
      lensEl.style.transform = `translate3d(${cx - radius}px, ${cy - radius}px, 0)`;
      // Bildpunkt (cx, cy) liegt in der Glasmitte, um ZOOM vergrößert
      pictureEl.style.transform = `translate3d(${radius - ZOOM * cx}px, ${radius - ZOOM * cy}px, 0) scale(${ZOOM})`;
      const size = radius * RING;
      ringEl.style.transform = `translate3d(${cx - size / 2}px, ${cy - size / 2}px, 0) rotate(${rot}deg)`;
    };

    const measure = () => {
      width = el.clientWidth;
      height = el.clientHeight;
      radius = lensEl.clientWidth / 2;
      pictureEl.style.width = `${width}px`;
      pictureEl.style.height = `${height}px`;
      if (!moved) {
        const h = home();
        cx = tx = h.x;
        cy = ty = h.y;
      }
      apply();
    };

    const loop = () => {
      const dx = tx - cx;
      const dy = ty - cy;
      cx += dx * 0.12;
      cy += dy * 0.12;
      rot += dx * 0.05;
      apply();
      frame = Math.abs(dx) + Math.abs(dy) > 0.4 ? requestAnimationFrame(loop) : 0;
    };

    const onMove = (event: PointerEvent) => {
      if (!fine.matches || event.pointerType !== "mouse") return;
      const rect = el.getBoundingClientRect();
      tx = event.clientX - rect.left;
      ty = event.clientY - rect.top;
      if (!moved) {
        moved = true;
        el.dataset.moved = "";
      }
      if (!frame) frame = requestAnimationFrame(loop);
    };

    const onLeave = () => {
      const h = home();
      tx = h.x;
      ty = h.y;
      if (!frame) frame = requestAnimationFrame(loop);
    };

    measure();
    el.dataset.ready = "";
    const resize = new ResizeObserver(measure);
    resize.observe(el);
    section.addEventListener("pointermove", onMove as EventListener);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      resize.disconnect();
      section.removeEventListener("pointermove", onMove as EventListener);
      section.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={stage} className="hero-stage">
      <div className="hero-blur">{background}</div>
      <div ref={lens} className="hero-lens" aria-hidden="true">
        <div className="hero-lens-glass">
          <div ref={picture} className="hero-lens-picture">
            {sharp}
          </div>
        </div>
      </div>
      <svg ref={ring} className="lens-ring" viewBox="-100 -100 200 200" aria-hidden="true" focusable="false">
        <g className="lens-ring-spin">
          <circle r="93" className="lens-ring-edge" />
          <circle r="96" className="lens-ring-outer" />
          {TICKS.map((i) => (
            <line
              key={i}
              x1="0"
              y1={-93}
              x2="0"
              y2={i % 10 === 0 ? -86 : i % 5 === 0 ? -89 : -91}
              transform={`rotate(${i * 3})`}
              className={i % 10 === 0 ? "tick tick-major" : "tick"}
            />
          ))}
          {SCALE.map((label, i) => (
            <text key={label} transform={`rotate(${i * 45}) translate(0 -79)`} className="lens-scale">
              {label}
            </text>
          ))}
        </g>
      </svg>
      <p className="lens-hint" aria-hidden="true">
        Bewegen Sie die Maus – wir stellen scharf.
      </p>
    </div>
  );
}
