"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";

const frames = [
  {
    name: "Acetat",
    title: "Farbe zeigen.",
    text: "Markante Linien. Eigener Ausdruck. Eine Fassung, die Ihre Persönlichkeit sichtbar macht.",
    file: "anblick-1.jpg",
    alt: "Markante blaue Acetatfassungen aus der Brillenauswahl von Optik Schorcht",
    note: "Markant in Form und Farbe.",
  },
  {
    name: "Holz",
    title: "Natürlich eigen.",
    text: "Ein besonderes Material. Eine eigene Maserung. Und ein ganz persönliches Gefühl beim Tragen.",
    file: "IMG_9002.jpg",
    alt: "Helle Holzbrille vor einer Auswahl verschiedener Holzarten",
    note: "Material mit Charakter.",
  },
  {
    name: "Metall",
    title: "Weniger. Aber mehr.",
    text: "Feine Linien und dezente Akzente. Für einen klaren Stil, der Raum für Sie lässt.",
    file: "laredo_compos_02_600x800.jpg",
    alt: "Eine Auswahl filigraner Metallfassungen mit feinen Farbakzenten",
    note: "Leicht in der Form. Klar im Ausdruck.",
  },
];

export function FrameCollection() {
  const [selected, setSelected] = useState(0);
  const [horizontal, setHorizontal] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 800px)");
    const update = () => setHorizontal(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = frames[selected];
  function move(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight")
      next = (index + 1) % frames.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      next = (index + frames.length - 1) % frames.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = frames.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }
  return (
    <div className="collection-layout">
      <div
        id="frame-panel"
        className="collection-stage"
        role="tabpanel"
        aria-labelledby={`frame-tab-${selected}`}
        tabIndex={0}
      >
        <div className="collection-image">
          <Image
            key={current.file}
            src={`/images/schorcht/${current.file}`}
            fill
            sizes="(max-width:800px) 100vw, 65vw"
            alt={current.alt}
          />
          <span className="collection-counter">
            0{selected + 1} <span>/ 03</span>
          </span>
        </div>
        <div className="collection-caption">
          <span>{current.note}</span>
          <span>Optik Schorcht / Dresden.</span>
        </div>
      </div>
      <div className="collection-information">
        <div
          className="collection-tabs"
          role="tablist"
          aria-label="Fassungsmaterial entdecken"
          aria-orientation={horizontal ? "horizontal" : "vertical"}
        >
          {frames.map((frame, i) => (
            <button
              ref={(el) => {
                tabs.current[i] = el;
              }}
              id={`frame-tab-${i}`}
              key={frame.name}
              role="tab"
              aria-selected={selected === i}
              aria-controls="frame-panel"
              tabIndex={selected === i ? 0 : -1}
              onClick={() => setSelected(i)}
              onKeyDown={(event) => move(event, i)}
            >
              <span>0{i + 1}</span>
              <strong>{frame.name}</strong>
              <ArrowUpRight size={25} strokeWidth={1} />
            </button>
          ))}
        </div>
        <div className="collection-copy" aria-live="polite">
          <h3>{current.title}</h3>
          <p>{current.text}</p>
        </div>
        <a className="text-link" href="#termin">
          Ihre Brille finden <ArrowUpRight size={18} />
        </a>
      </div>
    </div>
  );
}
