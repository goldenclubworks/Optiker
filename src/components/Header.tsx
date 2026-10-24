"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LogoMark } from "@/components/Logo";
import { contact, navigation } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="header-logo">
          <LogoMark />
          <span className="visually-hidden">Optik Schorcht – zur Startseite</span>
        </Link>

        <nav className="header-nav" aria-label="Hauptnavigation">
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} prefetch={false}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={`tel:${contact.phone}`}>
            {contact.phoneDisplay}
          </a>
          <Link className="button button-small" href="/#termin" prefetch={false}>
            Termin anfragen
          </Link>
          <button
            ref={toggle}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Schließen" : "Menü"}
          </button>
        </div>
      </div>

      <nav id="mobile-menu" className="mobile-menu" hidden={!open} aria-label="Menü">
        <ul className="shell">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} prefetch={false} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/#termin" prefetch={false} onClick={() => setOpen(false)}>
              Termin anfragen
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
