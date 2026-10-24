"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Lens = { id: string; name: string; src: string; width: number; height: number; alt: string; fit?: "contain" };

// Ein Rundglas, das beim Scrollen durch die vier Blicke die „Linse“ wechselt –
// wie der Augenoptiker am Phoropter. Die Skala dreht den aktiven Blick nach oben.
export function Phoropter({ lenses, children }: { lenses: Lens[]; children: ReactNode }) {
  const list = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const items = list.current?.querySelectorAll<HTMLElement>("[data-lens-index]");
    if (!items?.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.lensIndex));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const step = 360 / lenses.length;

  return (
    <div className="phoropter">
      <div className="phoropter-col" aria-hidden="true">
        <div className="phoropter-sticky">
          <div className="phoropter-lens">
            {lenses.map((lens, i) => (
              <Image
                key={lens.id}
                src={lens.src}
                width={lens.width}
                height={lens.height}
                alt=""
                sizes="(max-width: 1023px) 1px, 34vw"
                className={`${i === active ? "is-active" : ""}${lens.fit === "contain" ? " is-object" : ""}`}
              />
            ))}
            <svg className="phoropter-ring" viewBox="-100 -100 200 200" style={{ transform: `rotate(${-active * step}deg)` }}>
              <circle r="97" className="phoropter-ring-edge" />
              {Array.from({ length: 72 }, (_, i) => (
                <line key={i} x1="0" y1="-97" x2="0" y2={i % 6 === 0 ? -90 : -94} transform={`rotate(${i * 5})`} />
              ))}
              {lenses.map((lens, i) => (
                <text
                  key={lens.id}
                  transform={`rotate(${i * step}) translate(0 -80)`}
                  className={i === active ? "is-active" : undefined}
                >
                  {lens.name.toUpperCase()}
                </text>
              ))}
            </svg>
          </div>
          <p className="phoropter-count">
            <span>{String(active + 1).padStart(2, "0")}</span> / {String(lenses.length).padStart(2, "0")}
          </p>
        </div>
      </div>
      <div ref={list} className="phoropter-list">
        {children}
      </div>
    </div>
  );
}
