"use client";

import { useEffect, useRef, useState } from "react";
import { contact } from "@/content/site";

// Adresse und Öffnungszeiten, gesetzt wie eine Sehprobentafel:
// Zeile für Zeile kleiner, links der Visus-Wert. „Ohne Brille“ verschwimmen
// die kleinen Zeilen, „mit Brille“ wird alles scharf.
const lines = [
  { visus: "0,1", text: "Kleine" },
  { visus: "0,2", text: "Brüdergasse 1" },
  { visus: "0,4", text: `${contact.zip} Dresden` },
  { visus: "0,6", text: "Mo – Fr 9 – 18 Uhr" },
  { visus: "0,8", text: "Sa nach Vereinbarung" },
  { visus: "1,0", text: `Tel. ${contact.phoneDisplay}` },
];

export function Sehtafel() {
  const board = useRef<HTMLDivElement>(null);
  const [glasses, setGlasses] = useState(true);

  useEffect(() => {
    const el = board.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Erst unscharf zeigen, dann beim Hinsehen scharf stellen.
    el.dataset.waiting = "";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => delete el.dataset.waiting, 450);
          observer.disconnect();
        }
      },
      { threshold: 0.7 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="sehtafel">
      <div ref={board} className="sehtafel-board" data-glasses={glasses}>
        {lines.map((line, i) => (
          <p key={line.visus} className={`sehtafel-line l${i}`} style={{ "--i": i } as React.CSSProperties}>
            <span className="sehtafel-visus" aria-hidden="true">
              {line.visus}
            </span>
            <span className="sehtafel-text">{line.text}</span>
          </p>
        ))}
        <p className="sehtafel-line sehtafel-last" style={{ "--i": 6 } as React.CSSProperties}>
          <span className="sehtafel-visus" aria-hidden="true">
            1,6
          </span>
          <span className="sehtafel-text">
            Sie können diese Zeile nicht mehr lesen? Dann kommen Sie am besten vorbei.
          </span>
        </p>
      </div>
      <button
        type="button"
        className="sehtafel-toggle"
        onClick={() => {
          delete board.current?.dataset.waiting;
          setGlasses((value) => !value);
        }}
      >
        <span className="sehtafel-glasses" aria-hidden="true" />
        {glasses ? "Brille abnehmen" : "Brille aufsetzen"}
      </button>
    </figure>
  );
}
