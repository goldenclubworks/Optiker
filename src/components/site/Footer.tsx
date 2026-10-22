import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contact } from "@/content/site";

export function Footer({compact=false}:{compact?:boolean}) {
  return (
    <footer className="site-footer">
      <div className="site-shell">
        {!compact&&<div className="footer-information">
          <div className="footer-address"><span className="micro-label">IN DRESDENS MITTE.</span><Link href="/#kontakt">Kleine Brüdergasse 1<br /><span>01067 Dresden</span></Link></div>
          <div className="footer-hours"><span className="micro-label">ZEIT FÜR SIE.</span><p>Mo – Fr <span>09:00 – 18:00 Uhr</span><br />Samstag <span>nach Vereinbarung</span></p></div>
          <div className="footer-contact"><span className="micro-label">PERSÖNLICH IM GESPRÄCH.</span><a href={`tel:${contact.phone}`}>{contact.phoneDisplay} <ArrowUpRight size={18} /></a><a className="footer-email" href={`mailto:${contact.email}`}>{contact.email}</a></div>
        </div>}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} OPTIK SCHORCHT</span>
          <nav id="querblick" aria-label="Weitere Informationen"><a href="https://optik-schorcht.de/wp-content/uploads/2026/08/prima-direct.pdf" target="_blank" rel="noreferrer">prima direct</a><Link href="/#geschichte">Rückblick</Link><a href="https://www.1xo.de/" target="_blank" rel="noreferrer">Querblick ↗</a><Link href="/#weitblick">Angebote</Link><Link href="/#kontakt">Kontakt</Link><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></nav>
          <a href="#top" aria-label="Zurück nach oben" className="footer-up">Nach oben ↑</a>
        </div>
      </div>
    </footer>
  );
}
