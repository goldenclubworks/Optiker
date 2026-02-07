import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { siteConfig, contact, pageMeta } from "@/content/site";

export const metadata: Metadata = {
    title: pageMeta.datenschutz.title,
    description: pageMeta.datenschutz.description,
};

export default function DatenschutzPage() {
    return (
        <>
            <Header />
            <main className="section-padding">
                <div className="container-premium">
                    <div className="mx-auto max-w-3xl">
                        <h1 className="text-4xl font-bold tracking-tight">
                            Datenschutzerklärung
                        </h1>

                        <div className="mt-12 space-y-8 text-muted-foreground">
                            <section>
                                <h2 className="mb-4 text-xl font-semibold text-foreground">
                                    1. Datenschutz auf einen Blick
                                </h2>
                                <h3 className="mb-2 font-medium text-foreground">
                                    Allgemeine Hinweise
                                </h3>
                                <p>
                                    Die folgenden Hinweise geben einen einfachen Überblick
                                    darüber, was mit Ihren personenbezogenen Daten passiert, wenn
                                    Sie diese Website besuchen. Personenbezogene Daten sind alle
                                    Daten, mit denen Sie persönlich identifiziert werden können.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-4 text-xl font-semibold text-foreground">
                                    2. Verantwortliche Stelle
                                </h2>
                                <p>
                                    Die verantwortliche Stelle für die Datenverarbeitung auf
                                    dieser Website ist:
                                </p>
                                <address className="mt-4 not-italic">
                                    <p className="font-medium text-foreground">
                                        {siteConfig.name}
                                    </p>
                                    <p>{contact.address.street}</p>
                                    <p>
                                        {contact.address.zip} {contact.address.city}
                                    </p>
                                    <p className="mt-2">Telefon: {contact.phoneDisplay}</p>
                                    <p>E-Mail: {contact.email}</p>
                                </address>
                            </section>

                            <section>
                                <h2 className="mb-4 text-xl font-semibold text-foreground">
                                    3. Datenerfassung auf dieser Website
                                </h2>

                                <h3 className="mb-2 mt-6 font-medium text-foreground">
                                    Kontaktformular
                                </h3>
                                <p>
                                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                                    werden Ihre Angaben aus dem Anfrageformular inklusive der von
                                    Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                                    Anfrage und für den Fall von Anschlussfragen bei uns
                                    gespeichert. Diese Daten geben wir nicht ohne Ihre
                                    Einwilligung weiter.
                                </p>

                                <h3 className="mb-2 mt-6 font-medium text-foreground">
                                    Terminanfragen
                                </h3>
                                <p>
                                    Wenn Sie über unser Terminformular eine Anfrage stellen,
                                    werden die von Ihnen angegebenen Daten (Name, Telefonnummer,
                                    E-Mail, Terminwunsch, Anliegen) zur Bearbeitung Ihrer
                                    Terminanfrage verwendet und für den Zeitraum der
                                    Terminvereinbarung gespeichert.
                                </p>

                                <h3 className="mb-2 mt-6 font-medium text-foreground">
                                    Server-Log-Dateien
                                </h3>
                                <p>
                                    Der Provider der Seiten erhebt und speichert automatisch
                                    Informationen in so genannten Server-Log-Dateien, die Ihr
                                    Browser automatisch an uns übermittelt. Dies sind:
                                </p>
                                <ul className="mt-2 list-inside list-disc space-y-1">
                                    <li>Browsertyp und Browserversion</li>
                                    <li>Verwendetes Betriebssystem</li>
                                    <li>Referrer URL</li>
                                    <li>Hostname des zugreifenden Rechners</li>
                                    <li>Uhrzeit der Serveranfrage</li>
                                    <li>IP-Adresse</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="mb-4 text-xl font-semibold text-foreground">
                                    4. Ihre Rechte
                                </h2>
                                <p>Sie haben jederzeit das Recht:</p>
                                <ul className="mt-2 list-inside list-disc space-y-1">
                                    <li>
                                        Auskunft über Ihre bei uns gespeicherten Daten zu erhalten
                                    </li>
                                    <li>
                                        Die Berichtigung unrichtiger personenbezogener Daten zu
                                        verlangen
                                    </li>
                                    <li>Die Löschung Ihrer bei uns gespeicherten Daten zu verlangen</li>
                                    <li>
                                        Die Einschränkung der Datenverarbeitung zu verlangen
                                    </li>
                                    <li>Der Datenverarbeitung zu widersprechen</li>
                                    <li>Datenübertragbarkeit zu verlangen</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="mb-4 text-xl font-semibold text-foreground">
                                    5. Cookies
                                </h2>
                                <p>
                                    Diese Website verwendet keine Tracking-Cookies. Es werden
                                    ausschließlich technisch notwendige Cookies verwendet, die für
                                    den Betrieb der Website erforderlich sind.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-4 text-xl font-semibold text-foreground">
                                    6. Externe Links
                                </h2>
                                <p>
                                    Diese Website enthält Links zu externen Websites (z.B. Google
                                    Maps). Wenn Sie diesen Links folgen, gelten die
                                    Datenschutzbestimmungen der jeweiligen Anbieter.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-4 text-xl font-semibold text-foreground">
                                    7. Änderungen
                                </h2>
                                <p>
                                    Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
                                    damit sie stets den aktuellen rechtlichen Anforderungen
                                    entspricht oder um Änderungen unserer Leistungen in der
                                    Datenschutzerklärung umzusetzen.
                                </p>
                            </section>

                            <section className="border-t border-border pt-8">
                                <p className="text-sm">
                                    <strong>Hinweis:</strong> Diese Datenschutzerklärung dient als
                                    Platzhalter und ersetzt keine rechtliche Beratung. Bitte
                                    lassen Sie diese von einem Rechtsanwalt prüfen.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
