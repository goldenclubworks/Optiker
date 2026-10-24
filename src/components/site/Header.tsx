"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Dialog } from "radix-ui";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { blickNavigation } from "@/content/blick";
import { Brand } from "./Brand";

export function Header() {
  const pathname = usePathname();
  const [overHero, setOverHero] = useState(pathname === "/");
  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("ueberblick");
      setOverHero(
        pathname === "/" && !!hero && hero.getBoundingClientRect().bottom > 100,
      );
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);
  const [active, setActive] = useState("ueberblick");
  useEffect(() => {
    if (pathname !== "/") return;
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" data-over-hero={overHero}>
      <div className="site-shell header-layout">
        <Brand />
        <span className="header-mood">
          Augenoptik mit Persönlichkeit.<small>Dresden. Seit 1936.</small>
        </span>
        <div className="header-contact">
          <span className="micro-label">DRESDEN. SEIT 1936.</span>
          <Link href="/#termin" className="solid-link">
            Termin vereinbaren <ArrowUpRight size={16} />
          </Link>
        </div>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button className="menu-trigger" aria-label="Menü öffnen">
              <span>Menü</span>
              <Menu size={27} strokeWidth={1.5} />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="menu-overlay" />
            <Dialog.Content
              className="mobile-navigation"
              aria-describedby={undefined}
            >
              <Dialog.Title className="micro-label">
                OPTIK SCHORCHT / DRESDEN
              </Dialog.Title>
              <Dialog.Close className="menu-close" aria-label="Menü schließen">
                <X size={28} strokeWidth={1.5} />
              </Dialog.Close>
              <nav aria-label="Hauptnavigation">
                {blickNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={
                      pathname === "/" && active === item.href.slice(2)
                        ? "location"
                        : undefined
                    }
                  >
                    <small>{item.number}</small>
                    <span>{item.label}</span>
                    <ArrowUpRight size={24} strokeWidth={1.5} />
                  </Link>
                ))}
              </nav>
              <Link
                href="/#termin"
                className="solid-link"
                onClick={() => setOpen(false)}
              >
                Termin vereinbaren <ArrowUpRight size={17} />
              </Link>
              <Link
                href="/#kontakt"
                className="mobile-contact"
                onClick={() => setOpen(false)}
              >
                Kleine Brüdergasse 1 · 01067 Dresden
              </Link>
              <div className="menu-shop">
                <Image
                  src="/images/schorcht/start03.jpg"
                  fill
                  sizes="40vw"
                  alt="Das Geschäft von Optik Schorcht in Dresden"
                />
                <span>
                  ZEIT NEHMEN. ZEIT HABEN.
                  <br />
                  Wir freuen uns auf Sie.
                </span>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
