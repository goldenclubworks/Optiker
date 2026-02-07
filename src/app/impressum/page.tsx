import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { siteConfig, contact, legalInfo, pageMeta } from "@/content/site";

export const metadata: Metadata = {
    title: pageMeta.impressum.title,
    description: pageMeta.impressum.description,
};

export default function ImpressumPage() {
    return (
        <>
            <Header />
            <main className="section-padding">
                <div className="container-premium">
                    <div className="mx-auto max-w-3xl">
                        <h1 className="text-4xl font-bold tracking-tight">Impressum</h1>

                        <div className="mt-12 space-y-8 text-muted-foreground">
                            <section>
                                <h2 className="mb-4 text-xl font-semibold text-foreground">
                                    Angaben gemäß § 5 DDG
                                </h2>
                                <address className="not-italic">
                                    <p className="font-medium text-foreground">
                                        {siteConfig.name}
                                    </p>
                                    <p>{contact.address.street} ({contact.address.building})</p>
                                    <p>
                                        {contact.address.zip} {contact.address.city}
                                    </p>
                                    <p className="mt-2">
                                        <span className="font-medium text-foreground">Inhaber:</span>{" "}
                                        {siteConfig.owner} ({siteConfig.ownerTitle})
                                    </p>
                                    <p className="text-sm mt-1">
                                        Die Berufsbezeichnung „{siteConfig.ownerTitle}&ldquo; wurde in der
                                        Bundesrepublik Deutschland verliehen.
                                    </p>
                                </address>
                            </section>

                            <section>
                                <h2 className="mb-4 text-xl font-semibold text-foreground">
                                    Kontakt
                                </h2>
                                <p>Telefon: {contact.phoneDisplay}</p>
                                <p>E-Mail: {contact.email}</p>
                                <p>
                                    Internet:{" "}
                                    <a
                                        href={siteConfig.url}
                                        className="text-red-brand underline underline-offset-4 hover:text-red-brand/80"
                                    >
                                        {siteConfig.url.replace("https://", "")}
                                    </a>
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-4 text-xl font-semibold text-foreground">
                                    Umsatzsteuer-ID
                                </h2>
                                <p>
                                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                                    Umsatzsteuergesetz: {legalInfo.ustId}
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-4 text-xl font-semibold text-foreground">
                                    Aufsichtsbehörde
                                </h2>
                                <p className="font-medium text-foreground">
                                    {legalInfo.chamber}
                                </p>
                                <p>{legalInfo.chamberAddress}</p>
                                <p>
                                    <a
                                        href={legalInfo.chamberUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-red-brand underline underline-offset-4 hover:text-red-brand/80"
                                    >
                                        {legalInfo.chamberUrl.replace("https://", "")}
                                    </a>
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-4 text-xl font-semibold text-foreground">
                                    Berufsbezeichnung und berufsrechtliche Regelungen
                                </h2>
                                <p>
                                    <strong>Berufsbezeichnung:</strong> {legalInfo.profession}
                                </p>
                                <p>
                                    <strong>Zuständige Kammer:</strong> Mitteldeutscher
                                    Augenoptikerverband der Bundesländer Freistaat Sachsen und
                                    Sachsen-Anhalt in Dresden
                                </p>
                                <p>
                                    <strong>Verliehen durch:</strong> Bundesrepublik Deutschland
                                </p>
                                <p className="mt-2">
                                    Es gelten folgende berufsrechtliche Regelungen:{" "}
                                    {legalInfo.professionRegulation}
                                </p>
                                <p>
                                    Regelungen einsehbar unter:{" "}
                                    <a
                                        href={legalInfo.professionRegulationUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-red-brand underline underline-offset-4 hover:text-red-brand/80"
                                    >
                                        {legalInfo.professionRegulationUrl}
                                    </a>
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-4 text-xl font-semibold text-foreground">
                                    EU-Streitschlichtung
                                </h2>
                                <p>
                                    Die Europäische Kommission stellt eine Plattform zur
                                    Online-Streitbeilegung (OS) bereit:{" "}
                                    <a
                                        href="https://ec.europa.eu/consumers/odr/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-red-brand underline underline-offset-4 hover:text-red-brand/80"
                                    >
                                        https://ec.europa.eu/consumers/odr/
                                    </a>
                                </p>
                                <p className="mt-2">
                                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-4 text-xl font-semibold text-foreground">
                                    Verbraucher&shy;streit&shy;beilegung / Universal&shy;schlichtungs&shy;stelle
                                </h2>
                                <p>
                                    Wir sind nicht bereit oder verpflichtet, an
                                    Streitbeilegungsverfahren vor einer
                                    Verbraucherschlichtungsstelle teilzunehmen.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-4 text-xl font-semibold text-foreground">
                                    Haftung für Inhalte
                                </h2>
                                <p>
                                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                                    Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                                    verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                                    gespeicherte fremde Informationen zu überwachen oder nach
                                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                                    hinweisen.
                                </p>
                                <p className="mt-4">
                                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                                    Informationen nach den allgemeinen Gesetzen bleiben hiervon
                                    unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                                    Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                                    möglich. Bei Bekanntwerden von entsprechenden
                                    Rechtsverletzungen werden wir diese Inhalte umgehend
                                    entfernen.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-4 text-xl font-semibold text-foreground">
                                    Haftung für Links
                                </h2>
                                <p>
                                    Unser Angebot enthält Links zu externen Websites Dritter, auf
                                    deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                                    für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                                    die Inhalte der verlinkten Seiten ist stets der jeweilige
                                    Anbieter oder Betreiber der Seiten verantwortlich. Die
                                    verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                                    mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
                                    zum Zeitpunkt der Verlinkung nicht erkennbar.
                                </p>
                            </section>

                            <section>
                                <h2 className="mb-4 text-xl font-semibold text-foreground">
                                    Urheberrecht
                                </h2>
                                <p>
                                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                                    diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                                    Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                                    Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                                    der schriftlichen Zustimmung des jeweiligen Autors bzw.
                                    Erstellers. Downloads und Kopien dieser Seite sind nur für
                                    den privaten, nicht kommerziellen Gebrauch gestattet.
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
