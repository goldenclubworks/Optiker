"use client";

import { useEffect, useRef } from "react";

// Das Punktraster aus dem Logo als lebendige Fläche: Die Punkte wachsen dort,
// wo die Maus ist – wie im Logo zur Mitte hin. Ohne Maus bildet sich das
// Logo-Muster an einer festen Stelle.
const GAP = 26;
const MIN = 1.1;
const MAX = 7.5;
const REACH = 190;

export function DotField() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = canvas.current;
    const ctx = el?.getContext("2d");
    if (!el || !ctx) return;
    const host = el.parentElement ?? el;
    const motion = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    const color = getComputedStyle(el).color;

    let width = 0;
    let height = 0;
    let fx = 0;
    let fy = 0;
    let tx = 0;
    let ty = 0;
    let frame = 0;

    // Ruheposition in einer Ecke, damit der Text frei bleibt
    const rest = () => ({ x: width * (width < 900 ? 0.9 : 0.04), y: height * (width < 900 ? 0.06 : 0.94) });

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;
      for (let y = GAP / 2; y < height; y += GAP) {
        for (let x = GAP / 2; x < width; x += GAP) {
          // Manhattan-Abstand wie im Logo: eine Raute statt eines Kreises
          const d = (Math.abs(x - fx) + Math.abs(y - fy)) / REACH;
          const r = d < 1 ? MIN + (MAX - MIN) * (1 - d) ** 1.6 : MIN;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const loop = () => {
      const dx = tx - fx;
      const dy = ty - fy;
      fx += dx * 0.14;
      fy += dy * 0.14;
      draw();
      frame = Math.abs(dx) + Math.abs(dy) > 0.5 ? requestAnimationFrame(loop) : 0;
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = host.clientWidth;
      height = host.clientHeight;
      el.width = width * ratio;
      el.height = height * ratio;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      const r = rest();
      fx = tx = r.x;
      fy = ty = r.y;
      draw();
    };

    const onMove = (event: PointerEvent) => {
      if (!motion.matches || event.pointerType !== "mouse") return;
      const rect = el.getBoundingClientRect();
      tx = event.clientX - rect.left;
      ty = event.clientY - rect.top;
      if (!frame) frame = requestAnimationFrame(loop);
    };
    const onLeave = () => {
      const r = rest();
      tx = r.x;
      ty = r.y;
      if (!frame) frame = requestAnimationFrame(loop);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    host.addEventListener("pointermove", onMove as EventListener);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      observer.disconnect();
      host.removeEventListener("pointermove", onMove as EventListener);
      host.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvas} className="dot-field" aria-hidden="true" />;
}
