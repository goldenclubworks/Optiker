"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Dialog } from "radix-ui";
import { useState } from "react";

const links = [
  { label: "Brillen & Stil", href: "/brillen" },
  { label: "Sehen & Service", href: "/leistungen" },
  { label: "Unser Haus", href: "/#unser-haus" },
  { label: "Kontakt", href: "/kontakt" },
];

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`atelier-brand${light ? " atelier-brand-light" : ""}`} aria-label="Optik Schorcht – Startseite">
      <span className="brand-symbol" aria-hidden="true">{Array.from({ length: 9 }, (_, i) => <i key={i} />)}</span>
      <span className="brand-type"><span>SCHORCHT</span><small>OPTIK · DRESDEN · SEIT 1936</small></span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="atelier-header">
      <div className="atelier-shell header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          {links.map((link) => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}
        </nav>
        <Link className="atelier-button header-booking" href="/termin">Zeit für Sie <ArrowUpRight size={16} /></Link>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild><button className="mobile-menu-button" aria-label="Menü öffnen"><Menu size={25} strokeWidth={1.4} /></button></Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="menu-overlay" />
            <Dialog.Content className="mobile-navigation" aria-describedby={undefined}>
              <Dialog.Title className="eyebrow">OPTIK SCHORCHT · DRESDEN</Dialog.Title>
              <Dialog.Close className="mobile-close" aria-label="Menü schließen"><X size={27} strokeWidth={1.4} /></Dialog.Close>
              <nav aria-label="Mobile Hauptnavigation">
                {links.map((link, i) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}><span>0{i + 1}</span>{link.label}<ArrowUpRight size={25} /></Link>)}
              </nav>
              <Link href="/termin" className="atelier-button" onClick={() => setOpen(false)}>Termin vereinbaren <ArrowUpRight size={18} /></Link>
              <p className="menu-address">Kleine Brüdergasse 1<br />01067 Dresden</p>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
