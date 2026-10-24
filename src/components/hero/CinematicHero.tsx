"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { HeroScene } from "@/lib/eyewear/scene";

const views = [
  {
    name: "Perspektive",
    image: "perspective",
    caption: "Form. Gefühl. Persönlichkeit.",
  },
  {
    name: "Im Glas",
    image: "reflection",
    caption: "Unser Geschäft. In einem neuen Licht.",
  },
  { name: "Nähe", image: "macro", caption: "Der Unterschied liegt im Detail." },
];

export function CinematicHero({
  initialView = 0,
  capture = false,
}: {
  initialView?: number;
  capture?: boolean;
}) {
  const sequence = useRef<HTMLDivElement>(null);
  const hero = useRef<HTMLElement>(null);
  const canvasHost = useRef<HTMLDivElement>(null);
  const scene = useRef<HeroScene | null>(null);
  const [active, setActive] = useState(initialView);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [reduced, setReduced] = useState<boolean | null>(null);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!canvasHost.current || reduced === null) return;
    setReady(false);
    setFailed(false);
    const start = initialView;
    setActive(start);
    if (reduced && !capture) return;
    let cancelled = false;
    const host = canvasHost.current;
    const showFallback = () => {
      setFailed(true);
      setReady(false);
      scene.current?.setVisible(false);
    };
    import("@/lib/eyewear/scene")
      .then(({ createHeroScene }) => {
        if (cancelled) return null;
        return createHeroScene(
          host,
          () => {
            if (!cancelled) setReady(true);
          },
          start,
        );
      })
      .then((instance) => {
        if (!instance) return;
        if (cancelled) instance.dispose();
        else {
          scene.current = instance;
          host
            .querySelector("canvas")
            ?.addEventListener("webglcontextlost", showFallback);
          const bounds = host.getBoundingClientRect();
          instance.setVisible(
            !document.hidden &&
              bounds.bottom > 0 &&
              bounds.top < window.innerHeight,
          );
        }
      })
      .catch(() => {
        if (!cancelled) showFallback();
      });
    const observer = new IntersectionObserver(
      ([entry]) =>
        scene.current?.setVisible(entry.isIntersecting && !document.hidden),
      { threshold: 0 },
    );
    observer.observe(host);
    const visibility = () => {
      const bounds = host.getBoundingClientRect();
      scene.current?.setVisible(
        !document.hidden && bounds.bottom > 0 && bounds.top < window.innerHeight,
      );
    };
    document.addEventListener("visibilitychange", visibility);
    return () => {
      cancelled = true;
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      host
        .querySelector("canvas")
        ?.removeEventListener("webglcontextlost", showFallback);
      scene.current?.dispose();
      scene.current = null;
    };
  }, [reduced, initialView, capture]);
  useEffect(() => {
    if (capture || reduced !== false) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      if (window.innerWidth <= 800 || !sequence.current || !hero.current)
        return;
      const travel = sequence.current.offsetHeight - hero.current.offsetHeight;
      if (travel <= 0) return;
      const progress = Math.min(
        2,
        Math.max(
          0,
          (-sequence.current.getBoundingClientRect().top / travel) * 2,
        ),
      );
      scene.current?.setView(progress);
      setActive(Math.round(progress));
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", scroll);
      cancelAnimationFrame(frame);
    };
  }, [capture, reduced]);
  function selectView(index: number) {
    setActive(index);
    scene.current?.setView(index, !!reduced);
  }
  return (
    <div
      className={`atelier-sequence ${capture ? "is-capture" : ""}`}
      ref={sequence}
      data-static={!!reduced || failed}
    >
      <section
        ref={hero}
        className={`atelier-hero ${capture ? "atelier-capture" : ""}`}
        id="ueberblick"
        aria-label="Optik Schorcht – Sehen erleben"
      >
        {!capture && (
          <picture className="hero-still">
            <source
              media="(max-width:800px)"
              srcSet={`/images/hero/${views[active].image}-mobile.webp`}
            />
            <img
              src={`/images/hero/${views[active].image}.webp`}
              width="1440"
              height="1000"
              alt=""
              fetchPriority="high"
            />
          </picture>
        )}
        <div
          ref={canvasHost}
          className={`hero-render ${ready && !failed ? "is-ready" : ""}`}
          onPointerMove={(event) => {
            if (event.pointerType === "touch") return;
            const box = event.currentTarget.getBoundingClientRect();
            scene.current?.setPointer(
              (event.clientX - box.left) / box.width - 0.5,
              (event.clientY - box.top) / box.height - 0.5,
            );
          }}
          onPointerLeave={() => scene.current?.setPointer(0, 0)}
        />
        <div className="atelier-content site-shell">
          <div className="hero-edition">
            <span>Augenoptik mit Persönlichkeit.</span>
            <span>Dresden. Seit 1936.</span>
          </div>
          <h1 className="hero-words">
            <span>Sehen.</span>
            <em>erleben.</em>
          </h1>
          <div className="hero-aside">
            <span className="micro-label">EIN EIGENER BLICK AUF DIE WELT.</span>
            <p>
              Für Ihre Augen.
              <br />
              Und alles, was Sie ausmacht.
            </p>
            <Link
              href="/#termin"
              className="round-link"
              aria-label="Zeit für Ihren Blick – Termin anfragen"
            >
              <ArrowUpRight size={23} strokeWidth={1.3} />
            </Link>
          </div>
          <Link href="/#einblick" className="hero-shop-note">
            <div>
              <Image
                src="/images/schorcht/start05.jpg"
                fill
                sizes="150px"
                priority
                unoptimized
                decoding="sync"
                alt="Ein erster Blick in das Geschäft von Optik Schorcht"
              />
            </div>
            <span>
              <small>PERSÖNLICH. IN DRESDEN.</small>Ein Ort für
              <br />
              Ihren neuen Blick. <ArrowUpRight size={15} />
            </span>
          </Link>
          <div className="hero-foot">
            <Link href="/#einblick" className="hero-scroll">
              <ArrowDown size={16} />
              <span>Schorcht entdecken</span>
            </Link>
            <div
              className="view-index"
              aria-label="Perspektive der Brille wählen"
            >
              {views.map((view, i) => (
                <button
                  key={view.name}
                  onClick={() => selectView(i)}
                  aria-pressed={active === i}
                >
                  <span>0{i + 1}</span>
                  {view.name}
                </button>
              ))}
            </div>
            <span className="view-caption">{views[active].caption}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
