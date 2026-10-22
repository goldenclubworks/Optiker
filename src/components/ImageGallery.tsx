"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import { Dialog } from "radix-ui";
import type { GalleryImage } from "@/content/blick";

export function ImageGallery({ images, label = "UNSER GESCHÄFT / DRESDEN" }: { images: GalleryImage[]; label?: string }) {
  const [active, setActive] = useState(0);
  const current = images[active];
  const move = (direction: number) => setActive((index) => (index + direction + images.length) % images.length);

  function handleKeys(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
    if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
  }

  return (
    <section className="image-gallery" role="region" aria-roledescription="Bildergalerie" aria-label="Bilder von Optik Schorcht" onKeyDown={handleKeys}>
      <div className={`gallery-visual${current.fit === "contain" ? " gallery-contain" : ""}`}>
        <Image key={current.src} src={current.src} alt={current.alt} fill priority={active === 0} sizes="(max-width: 800px) 100vw, 65vw" className="gallery-photo" />
        <span className="gallery-location"><i />{label}</span>
        <Dialog.Root>
          <Dialog.Trigger asChild><button className="gallery-expand" aria-label="Aktuelles Bild vergrößern"><Maximize2 size={18} strokeWidth={1.5} /></button></Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="lightbox-overlay" />
            <Dialog.Content className="gallery-lightbox" aria-describedby={undefined}>
              <Dialog.Title className="micro-label">{current.caption}</Dialog.Title>
              <Dialog.Close className="lightbox-close" aria-label="Vergrößerte Ansicht schließen"><X size={25} /></Dialog.Close>
              <div className="lightbox-image"><Image src={current.src} alt={current.alt} fill sizes="90vw" /></div>
              {images.length > 1 && <div className="lightbox-navigation"><button onClick={() => move(-1)} aria-label="Vorheriges vergrößertes Bild"><ArrowLeft size={20} /></button><span>{String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span><button onClick={() => move(1)} aria-label="Nächstes vergrößertes Bild"><ArrowRight size={20} /></button></div>}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
      <div className="gallery-bar">
        <div className="gallery-caption" aria-live="polite" aria-atomic="true"><span className="gallery-counter">{String(active + 1).padStart(2, "0")} <span>/ {String(images.length).padStart(2, "0")}</span></span><p>{current.caption}</p></div>
        {images.length > 1 && <div className="gallery-controls"><button onClick={() => move(-1)} aria-label="Vorheriges Bild"><ArrowLeft size={20} strokeWidth={1.4} /></button><button onClick={() => move(1)} aria-label="Nächstes Bild"><ArrowRight size={20} strokeWidth={1.4} /></button></div>}
      </div>
      {images.length > 1 && <div className="gallery-progress" aria-label="Bild auswählen">{images.map((item, i) => <button key={item.src} aria-label={`Bild ${i + 1} anzeigen: ${item.caption}`} aria-current={active === i ? "true" : undefined} onClick={() => setActive(i)}><span /></button>)}</div>}
    </section>
  );
}
