"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

const ZOOM = 2.2;

// Eine Lupe, die über dem Foto der Maus folgt und die Fassung im Original
// vergrößert zeigt. Nur mit Maus; auf Touch-Geräten bleibt das Foto, wie es ist.
export function Loupe({ src, children, className }: { src: string; children: ReactNode; className?: string }) {
  const frame = useRef<HTMLDivElement>(null);
  const glass = useRef<HTMLDivElement>(null);

  function move(event: PointerEvent<HTMLDivElement>) {
    const box = frame.current;
    const lens = glass.current;
    if (!box || !lens || event.pointerType !== "mouse") return;
    const rect = box.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const size = lens.offsetWidth;
    if (!lens.style.backgroundImage) lens.style.backgroundImage = `url("${src}")`;
    lens.style.backgroundSize = `${rect.width * ZOOM}px ${rect.height * ZOOM}px`;
    lens.style.backgroundPosition = `${-(x * ZOOM - size / 2)}px ${-(y * ZOOM - size / 2)}px`;
    lens.style.transform = `translate3d(${x - size / 2}px, ${y - size / 2}px, 0)`;
    box.dataset.loupe = "";
  }

  function leave() {
    if (frame.current) delete frame.current.dataset.loupe;
  }

  return (
    <div ref={frame} className={`loupe ${className ?? ""}`} onPointerMove={move} onPointerLeave={leave}>
      {children}
      <div ref={glass} className="loupe-glass" aria-hidden="true" />
    </div>
  );
}
