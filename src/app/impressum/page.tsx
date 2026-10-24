import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { contact, legal, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Optik Schorcht, Inhaber Joachim Skorupa, Kleine Brüdergasse 1, 01067 Dresden.",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main id="inhalt" className="legal">
        <div className="shell">
          <h1>Impressum</h1>

          <h2>Angaben gemäß § 5 DDG</h2>
          <address>
            <p>
              Optik Schorcht
              <br />
              Inhaber: {site.owner}
              <br />
              {contact.street}
              <br />
              {contact.zip} {contact.city}
            </p>
          </address>

          <h2>Kontakt</h2>
          <p>
            Telefon: <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
            <br />
            E-Mail: <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>

          <h2>Umsatzsteuer-Identifikationsnummer</h2>
          <p>Gemäß § 27a Umsatzsteuergesetz: {legal.vatId}</p>

          <h2>Berufsrechtliche Angaben</h2>
          <p>
            Berufsbezeichnung: {site.ownerTitle} (verliehen in der Bundesrepublik Deutschland)
            <br />
            Eingetragen in der Handwerksrolle der {legal.chamber}, {legal.chamberAddress} (
            <a href={legal.chamberUrl} target="_blank" rel="noopener noreferrer">
              hwk-dresden.de
            </a>
            )
          </p>
          <p>
            Es gilt das{" "}
            <a href={legal.regulationUrl} target="_blank" rel="noopener noreferrer">
              {legal.regulation}
            </a>
            .
          </p>

          <h2>Verbraucherstreitbeilegung</h2>
          <p>
            Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2>Verantwortlich für den Inhalt</h2>
          <p>
            {site.owner}, Anschrift wie oben.
          </p>

          <h2>Haftung für Inhalte und Links</h2>
          <p>
            Die Inhalte dieser Seiten wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
            Aktualität können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir nach den allgemeinen
            Gesetzen für eigene Inhalte verantwortlich. Für Inhalte verlinkter fremder Seiten ist stets deren Anbieter
            verantwortlich. Werden uns Rechtsverletzungen bekannt, entfernen wir die betreffenden Inhalte oder Links
            umgehend.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Texte und Fotos auf dieser Website unterliegen dem deutschen Urheberrecht. Eine Verwendung außerhalb der
            Grenzen des Urheberrechts bedarf unserer schriftlichen Zustimmung.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
