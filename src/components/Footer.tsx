import Image from "next/image";
import Link from "next/link";
import { DrawIn } from "@/components/motion/DrawIn";
import { contact, hoursShort, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      {/* Handgezeichnete Silhouette der Altstadt aus dem Fundus von Optik Schorcht */}
      <DrawIn>
        <Image className="skyline" src="/images/laden/skyline.png" width={1100} height={694} alt="" sizes="(max-width: 780px) 100vw, 780px" />
      </DrawIn>
      <div className="footer-body">
        <div className="shell footer-grid">
          <div>
            <p className="footer-name">Optik Schorcht</p>
            <p>
              {site.owner}, {site.ownerTitle}
              <br />
              In Dresden seit {site.founded}
            </p>
          </div>
          <address>
            {contact.street}
            <br />
            {contact.zip} {contact.city}
            <br />
            <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer">
              Route planen
            </a>
          </address>
          <div>
            {hoursShort.map((row) => (
              <p key={row.days}>
                {row.days}: {row.time}
              </p>
            ))}
          </div>
          <div>
            <p>
              <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`}>E-Mail schreiben</a>
            </p>
          </div>
        </div>
        <div className="shell footer-bottom">
          <p>© {new Date().getFullYear()} Optik Schorcht</p>
          <ul>
            <li>
              <Link href="/impressum">Impressum</Link>
            </li>
            <li>
              <Link href="/datenschutz">Datenschutz</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

// Feste Leiste am unteren Bildschirmrand, nur auf dem Handy sichtbar.
export function MobileBar() {
  return (
    <nav className="mobile-bar" aria-label="Schnellzugriff">
      <a href={`tel:${contact.phone}`}>Anrufen</a>
      <Link href="/#termin" prefetch={false}>Termin</Link>
      <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer">
        Route
      </a>
    </nav>
  );
}
