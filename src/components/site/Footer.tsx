import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { contact } from "@/content/site";
import { Brand } from "./Header";

export function Footer() {
  return (
    <footer className="atelier-footer">
      <div className="atelier-shell">
        <div className="footer-top">
          <div><Brand light /><p>Gutes Sehen. Eigener Stil.<br />Mitten in Dresden. Seit 1936.</p></div>
          <div className="footer-column"><span className="eyebrow">ZU BESUCH</span><p>{contact.address.street}<br />{contact.address.zip} {contact.address.city}</p><a href={contact.googleMapsUrl} target="_blank" rel="noreferrer" className="text-link">Route finden <ArrowUpRight size={15} /></a></div>
          <div className="footer-column"><span className="eyebrow">IM GESPRÄCH</span><a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a><a className="footer-email" href={`mailto:${contact.email}`}>{contact.email}</a><p className="footer-hours">Mo – Fr &nbsp; 09:00 – 18:00 Uhr<br />Samstag nach Vereinbarung</p></div>
          <a href="#top" className="back-to-top" aria-label="Zurück nach oben"><ArrowUp size={23} strokeWidth={1.2} /></a>
        </div>
        <div className="footer-wordmark" aria-hidden="true">SCHORCHT<span>®</span></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Optik Schorcht</span><span>Unabhängige Augenoptik. Persönlich geführt.</span><div><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></div></div>
      </div>
    </footer>
  );
}
