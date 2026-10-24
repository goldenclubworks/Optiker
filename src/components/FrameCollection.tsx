"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";

const frames = [
  {
    name: "Acetat",
    title: "Farbe zeigen.",
    text: "Markante Linien. Eigener Ausdruck. Eine Fassung, die Ihre Persönlichkeit sichtbar macht.",
    file: "anblick-1.jpg",
    alt: "Markante blaue Acetatfassungen aus der Brillenauswahl von Optik Schorcht",
    tone: "acetate",
    note: "Markant in Form und Farbe.",
  },
  {
    name: "Holz",
    title: "Natürlich eigen.",
    text: "Ein besonderes Material. Eine eigene Maserung. Und ein ganz persönliches Gefühl beim Tragen.",
    file: "IMG_9002.jpg",
    alt: "Helle Holzbrille vor einer Auswahl verschiedener Holzarten",
    tone: "wood",
    note: "Material mit Charakter.",
  },
  {
    name: "Metall",
    title: "Feine Linie. Klarer Stil.",
    text: "Dezente Akzente und feine Konturen. Eine Fassung, die Raum für Sie lässt.",
    file: "laredo_compos_02_600x800.jpg",
    alt: "Eine Auswahl filigraner Metallfassungen mit feinen Farbakzenten",
    tone: "metal",
    note: "Leicht in der Form.",
  },
];

export function FrameCollection() {
  const rail = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  function select(index: number) {
    const viewport = rail.current;
    const card = viewport?.children[index] as HTMLElement | undefined;
    if (!viewport || !card) return;
    viewport.scrollTo({
      left: card.offsetLeft - (viewport.clientWidth - card.offsetWidth) / 2,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }
  function syncSelection() {
    const viewport = rail.current;
    if (!viewport) return;
    if (viewport.scrollLeft <= 1) {
      setActive(0);
      return;
    }
    if (
      viewport.scrollWidth - viewport.clientWidth - viewport.scrollLeft <=
      1
    ) {
      setActive(frames.length - 1);
      return;
    }
    const center = viewport.scrollLeft + viewport.clientWidth / 2;
    let nearest = 0,
      distance = Infinity;
    Array.from(viewport.children).forEach((child, index) => {
      const card = child as HTMLElement;
      const next = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
      if (next < distance) {
        nearest = index;
        distance = next;
      }
    });
    setActive(nearest);
  }
  return (
    <div className="eyewear-collection">
      <div className="collection-toolbar site-shell">
        <nav aria-label="Fassungsmaterial entdecken">
          {frames.map((frame, i) => (
            <button
              key={frame.name}
              aria-current={active === i ? "true" : undefined}
              onClick={() => select(i)}
            >
              <span>0{i + 1}</span>
              {frame.name}
            </button>
          ))}
        </nav>
        <span>Eine Auswahl. Viele Persönlichkeiten.</span>
      </div>
      <div
        className="frame-rail"
        ref={rail}
        onScroll={syncSelection}
        role="region"
        aria-label="Brillen aus Acetat, Holz und Metall"
        tabIndex={0}
      >
        {frames.map((frame, i) => (
          <article
            className={`frame-story ${frame.tone}`}
            key={frame.name}
            aria-labelledby={`material-${i}`}
          >
            <figure>
              <span className="frame-note">{frame.note}</span>
              <Image
                src={`/images/schorcht/${frame.file}`}
                fill
                sizes="(max-width:800px) 85vw, 60vw"
                alt={frame.alt}
              />
              <figcaption>
                <span>0{i + 1} /</span>
                <h3 id={`material-${i}`}>{frame.name}</h3>
                <ArrowUpRight size={32} strokeWidth={1} />
              </figcaption>
            </figure>
            <div className="frame-story-copy">
              <h4>{frame.title}</h4>
              <p>{frame.text}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="collection-footer site-shell">
        <a className="text-link" href="#termin">
          Ihre Brille finden <ArrowUpRight size={18} />
        </a>
        <div className="collection-controls">
          <span aria-live="polite">0{active + 1} / 03</span>
          <button
            onClick={() => select(Math.max(0, active - 1))}
            disabled={active === 0}
            aria-label="Vorheriges Material"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => select(Math.min(2, active + 1))}
            disabled={active === 2}
            aria-label="Nächstes Material"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
