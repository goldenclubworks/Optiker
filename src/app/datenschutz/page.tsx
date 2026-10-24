import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { contact, legal, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Optik Schorcht Dresden: keine Cookies, kein Tracking, Terminanfrage per E-Mail.",
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main id="inhalt" className="legal">
        <div className="shell">
          <h1>Datenschutz</h1>

          <p>
            Kurz gesagt: Diese Website setzt keine Cookies, verwendet keine Analyse- oder Werbedienste und lädt keine
            Inhalte von fremden Servern. Schriften und Bilder werden direkt von unserer Domain ausgeliefert.
          </p>

          <h2>1. Verantwortlicher</h2>
          <address>
            <p>
              Optik Schorcht, Inhaber {site.owner}
              <br />
              {contact.street}, {contact.zip} {contact.city}
              <br />
              Telefon: <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
              <br />
              E-Mail: <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </address>

          <h2>2. Aufruf der Website und Hosting</h2>
          <p>
            Die Website wird betrieben bei: <span className="placeholder">{legal.host}</span>. Beim Aufruf verarbeitet
            der Server technisch notwendige Daten, die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit, die
            aufgerufene Seite, Referrer-URL sowie Browser- und Betriebssystemangaben. Das ist nötig, um die Seite
            auszuliefern und ihre Sicherheit zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO). Die Protokolle werden
            vom Hosting-Anbieter nach kurzer Zeit gelöscht und nicht mit anderen Daten zusammengeführt. Mit dem
            Anbieter besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO.
          </p>

          <h2>3. Cookies und Tracking</h2>
          <p>
            Wir setzen keine Cookies und verwenden keine Analyse-, Tracking- oder Social-Media-Dienste. Deshalb gibt es
            auch keinen Cookie-Banner.
          </p>

          <h2>4. Terminanfrage und Kontakt</h2>
          <p>
            Das Terminformular auf dieser Website verschickt selbst keine Daten. Es öffnet lediglich Ihr eigenes
            E-Mail-Programm mit einer vorformulierten Nachricht, die Sie prüfen und selbst absenden. Erst dann erhalten
            wir Ihre Angaben – genauso, als hätten Sie uns direkt geschrieben.
          </p>
          <p>
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben (z. B. Name,
            Telefonnummer, Terminwunsch), um Ihre Anfrage zu beantworten und den Termin zu vereinbaren (Art. 6 Abs. 1
            lit. b DSGVO). Wir löschen die Angaben, wenn sie dafür nicht mehr gebraucht werden und keine gesetzlichen
            Aufbewahrungspflichten bestehen. Bitte schicken Sie uns per E-Mail keine Gesundheitsdaten, die über den
            Terminwunsch hinausgehen – das besprechen wir lieber persönlich.
          </p>

          <h2>5. Links zu anderen Websites</h2>
          <p>
            Der Link „Route planen“ führt zu Google Maps. Erst wenn Sie ihn anklicken, verlassen Sie unsere Website;
            dann gelten die Datenschutzbestimmungen von Google.
          </p>

          <h2>6. Ihre Rechte</h2>
          <p>Sie haben das Recht auf</p>
          <ul>
            <li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO),</li>
            <li>Berichtigung (Art. 16 DSGVO) und Löschung (Art. 17 DSGVO),</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO),</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO).</li>
          </ul>
          <p>
            Eine kurze Nachricht an uns genügt. Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde
            beschweren, zum Beispiel bei der Sächsischen Datenschutz- und Transparenzbeauftragten, Devrientstraße 5,
            01067 Dresden.
          </p>

          <p>Stand: Oktober 2026</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
