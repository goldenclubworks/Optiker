import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CinematicHero } from "@/components/hero/CinematicHero";
import { ImageGallery } from "@/components/ImageGallery";
import { FrameCollection } from "@/components/FrameCollection";
import { EditorialMotion } from "@/components/EditorialMotion";
import { AppointmentForm } from "@/components/AppointmentForm";
import { storeImages, blickPages } from "@/content/blick";
import { contact } from "@/content/site";

function Chapter({
  number,
  name,
  detail,
}: {
  number: string;
  name: string;
  detail?: string;
}) {
  return (
    <div className="chapter-label">
      <span>
        <span>{number}</span> / {name}
      </span>
      {detail && <span>{detail}</span>}
    </div>
  );
}
const services = [
  {
    title: "Wir richten es.",
    subtitle: "Werkstatt & Anpassung",
    text: "Lockere Schrauben oder unangenehme Druckstellen? Kommen Sie vorbei. Wir kümmern uns um Ihre Brille – von der ersten Anpassung bis zum Service im Alltag.",
  },
  {
    title: "In Ruhe entscheiden.",
    subtitle: "Beratung mit Zeit",
    text: "Fühlen Sie sich wohl. Seien Sie unser Gast. Bei einem Kaffee oder Espresso nehmen wir uns Zeit für Ihre Wünsche. Eine Auswahl mit nach Hause nehmen oder ein Hausbesuch bei Bedarf? Sprechen Sie uns an.",
  },
  {
    title: "Gut sehen. Gut fühlen.",
    subtitle: "Gläser & Verträglichkeit",
    text: "Gute Gläser müssen zu Ihrem Leben passen. Zu SEIKO-Markengläsern, Verträglichkeitsgarantie und den passenden Möglichkeiten beraten wir Sie persönlich.",
  },
  {
    title: "Eine gute Möglichkeit.",
    subtitle: "Das Brillenabo",
    text: "Eine neue Brille mit einem passenden Zahlungsmodell: Die Möglichkeiten und Konditionen besprechen wir in Ruhe. Die Informationen können Sie vorab als PDF lesen.",
    link: true,
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <CinematicHero />
        <section
          id="einblick"
          className="intro-section paper-section"
          aria-labelledby="intro-heading"
        >
          <div className="site-shell">
            <Chapter
              number="01"
              name="Einblick"
              detail="Persönlich. Seit 1936."
            />
            <div className="intro-composition">
              <h2 id="intro-heading" className="statement" data-reveal>
                Eine Brille,
                <br />
                die zu <em>Ihnen</em>
                <br />
                gehört.
              </h2>
              <div className="intro-personal">
                <span className="optical-mark" aria-hidden="true">
                  {Array.from({ length: 25 }, (_, i) => (
                    <i
                      key={i}
                      style={{
                        transform: `scale(${Math.max(0.2, 1 - (Math.abs((i % 5) - 2) + Math.abs(Math.floor(i / 5) - 2)) * 0.18)})`,
                      }}
                    />
                  ))}
                </span>
                <span className="small-heading">
                  Tradition trifft Innovation.
                  <br />
                  Und auf Sie.
                </span>
                <p>
                  Sehen und Aussehen. Beides habe ich für Sie im Blick. Mit
                  Freude am Handwerk, einem offenen Ohr und Zeit für das, was
                  Ihnen wichtig ist.
                </p>
                <span className="owner-name">Joachim Skorupa</span>
                <small>Augenoptikermeister & Inhaber</small>
                <a href="#termin" className="text-link">
                  Lernen wir uns kennen <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="store-stage" data-reveal data-aperture>
            <ImageGallery images={storeImages} />
            <div className="store-quote">
              <span>ZEIT NEHMEN. ZEIT HABEN.</span>
              <blockquote>
                „Ich will, dass Sie
                <br />
                Sehen erleben.“
              </blockquote>
              <p>
                Joachim Skorupa
                <br />
                <span>Augenoptikermeister & Inhaber</span>
              </p>
            </div>
          </div>
          <div className="site-shell">
            <div className="store-footnote">
              <span>Unser Geschäft. Ihr Raum für einen neuen Blick.</span>
              <span>Kleine Brüdergasse 1 · Dresden</span>
            </div>
            <details id="geschichte" className="history-disclosure">
              <summary>
                <span className="chapter-index">1936 — HEUTE</span>
                <span>Ein Name. Viele Kapitel.</span>
                <Plus size={22} strokeWidth={1} />
              </summary>
              <div className="history-content">
                <figure>
                  <Image
                    src="/images/schorcht/Freiberger-Strasse.jpg"
                    width={800}
                    height={600}
                    alt="Historische Aufnahme des Geschäfts Optiker Schorcht in der Freiberger Straße"
                  />
                  <figcaption>
                    Ein Kapitel unserer Geschichte: die Freiberger Straße.
                  </figcaption>
                </figure>
                <div>
                  {blickPages.ruckblick.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </details>
          </div>
        </section>

        <section
          id="anblick"
          className="frames-section paper-section"
          aria-labelledby="frames-heading"
        >
          <div className="site-shell">
            <Chapter
              number="02"
              name="Anblick"
              detail="Ihr Gesicht. Meine Inspiration."
            />
            <div className="collection-heading">
              <h2 id="frames-heading" data-reveal>
                Nicht irgendeine.
                <br />
                <em>Ihre.</em>
              </h2>
              <div>
                <p>
                  Markant, sportlich oder elegant.
                  <br />
                  Wir finden Ihren eigenen Stil.
                </p>
                <span className="small-heading">Sie wählen. Ich berate.</span>
              </div>
            </div>
          </div>
          <FrameCollection />
        </section>

        <section
          id="durchblick"
          className="precision-section"
          aria-labelledby="precision-heading"
        >
          <div className="site-shell">
            <Chapter
              number="03"
              name="Durchblick"
              detail="Präzision für Ihren Alltag."
            />
            <div className="precision-layout">
              <div className="precision-copy">
                <span className="small-heading">
                  Ihre Augen.
                  <br />
                  Meine Profession.
                </span>
                <h2 id="precision-heading" data-reveal>
                  Genau
                  <br />
                  <em>Ihr Blick.</em>
                </h2>
                <p>
                  Eine passende Brille beginnt mit genauem Hinsehen. Mit
                  präziser Brillenglasbestimmung und dem Blick auf Ihre
                  Sehgewohnheiten finden wir Ihre Lösung.
                </p>
                <a href="#termin" className="text-link">
                  Sehanalyse anfragen <ArrowUpRight size={18} />
                </a>
              </div>
              <figure className="precision-image">
                <span
                  className="measurement-corner corner-tl"
                  aria-hidden="true"
                />
                <span
                  className="measurement-corner corner-tr"
                  aria-hidden="true"
                />
                <span
                  className="measurement-corner corner-bl"
                  aria-hidden="true"
                />
                <span
                  className="measurement-corner corner-br"
                  aria-hidden="true"
                />
                <Image
                  src="/images/schorcht/visionix.png"
                  width={649}
                  height={800}
                  sizes="(max-width:800px) 90vw, 44vw"
                  alt="Visionix 120 für die persönliche Sehanalyse bei Optik Schorcht"
                />
                <figcaption>
                  <span>VISIONIX 120</span>
                  <span>3D-REFRAKTION</span>
                </figcaption>
              </figure>
            </div>
            <div className="precision-steps">
              <div>
                <span>01</span>
                <h3>Verstehen.</h3>
                <p>
                  Ihre Wünsche. Ihre Sehgewohnheiten.
                  <br />
                  Ihr Alltag.
                </p>
              </div>
              <div>
                <span>02</span>
                <h3>Messen.</h3>
                <p>
                  Präzise Brillenglasbestimmung.
                  <br />
                  Mit Zeit für Genauigkeit.
                </p>
              </div>
              <div>
                <span>03</span>
                <h3>Abstimmen.</h3>
                <p>
                  Beim Lesen, am Bildschirm,
                  <br />
                  im Auto oder beim Sport.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="rundblick"
          className="contacts-section paper-section"
          aria-labelledby="contacts-heading"
        >
          <div className="site-shell">
            <Chapter
              number="04"
              name="Rundblick"
              detail="Kontakt mit dem fast Unsichtbaren."
            />
            <div className="contacts-layout">
              <div className="lens-study" data-reveal>
                <span className="lens-study-label">Klein im Format.</span>
                <figure>
                  <Image
                    src="/images/schorcht/71578755.jpg"
                    fill
                    sizes="(max-width:800px) 85vw, 40vw"
                    alt="Eine transparente Kontaktlinse auf einer Fingerspitze"
                  />
                </figure>
                <span className="lens-study-caption">
                  Individuell in der Anpassung.
                </span>
              </div>
              <div className="contacts-copy">
                <h2 id="contacts-heading" data-reveal>
                  Fast unsichtbar.
                  <br />
                  <em>Ganz Sie.</em>
                </h2>
                <p>
                  Sehen ohne Brille. Für jeden Tag oder manchmal. Mit
                  persönlicher Beratung, Hornhaut-Topographie und individueller
                  Anpassung finden wir die passenden Kontaktlinsen für Ihre
                  Augen.
                </p>
                <div className="lens-types">
                  <span>Weich.</span>
                  <span>Formstabil.</span>
                  <span>Multifokal.</span>
                </div>
                <p className="contacts-aftercare">
                  Auch danach bleiben wir mit regelmäßigen Kontrollen und den
                  passenden Pflegemitteln für Sie da.
                </p>
                <a href="#termin" className="text-link">
                  Kontaktlinsen kennenlernen <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="weitblick"
          className="care-section paper-section"
          aria-labelledby="care-heading"
        >
          <div className="site-shell">
            <Chapter
              number="05"
              name="Weitblick"
              detail="Service. Sicherheit. Ein gutes Gefühl."
            />
            <h2 id="care-heading" data-reveal>
              Wir sind für Sie da.
              <br />
              <em>Auch danach.</em>
            </h2>
            <div className="care-layout">
              <figure className="care-image">
                <Image
                  src="/images/schorcht/start04.jpg"
                  fill
                  sizes="(max-width:800px) 100vw, 32vw"
                  alt="Beratungsplätze und Empfang im Geschäft von Optik Schorcht"
                />
                <figcaption>
                  Ihr Sehkomfort ist unser Ziel.
                  <br />
                  Ihre Zufriedenheit unser Anspruch.
                </figcaption>
              </figure>
              <div className="service-list">
                {services.map((service, i) => (
                  <details key={service.title} open={i === 0}>
                    <summary>
                      <span>0{i + 1}</span>
                      <div>
                        <small>{service.subtitle}</small>
                        <h3>{service.title}</h3>
                      </div>
                      <Plus size={25} strokeWidth={1} />
                    </summary>
                    <div className="service-detail">
                      <p>{service.text}</p>
                      {service.link && (
                        <a
                          href="https://optik-schorcht.de/wp-content/uploads/2026/08/Brillen_clever_finanzieren.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="text-link"
                        >
                          Brillenabo / PDF öffnen <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="kontakt"
          className="location-section paper-section"
          aria-labelledby="location-heading"
        >
          <div className="site-shell">
            <Chapter
              number="06"
              name="Kontakt"
              detail="Zu Hause in Dresdens Mitte."
            />
          </div>
          <div className="location-layout">
            <figure>
              <Image
                src="/images/schorcht/einblick-1.jpg"
                fill
                sizes="(max-width:800px) 100vw, 58vw"
                alt="Das lebendige Haus in der Kleinen Brüdergasse mit Optik Schorcht in Dresden"
              />
              <figcaption>Kleine Brüdergasse 1. Unser Zuhause.</figcaption>
            </figure>
            <div className="location-information">
              <span className="small-heading">Kommen Sie herein.</span>
              <h2 id="location-heading" data-reveal>
                Mitten
                <br />
                <em>in Dresden.</em>
              </h2>
              <p>
                Kleine Brüdergasse 1<br />
                01067 Dresden · das lebendige Haus
              </p>
              <a
                className="text-link"
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Anfahrt planen <ArrowUpRight size={18} />
              </a>
              <dl>
                <div>
                  <dt>Montag – Freitag</dt>
                  <dd>09:00 – 18:00 Uhr</dd>
                </div>
                <div>
                  <dt>Samstag</dt>
                  <dd>nach Vereinbarung</dd>
                </div>
              </dl>
              <a className="location-phone" href={`tel:${contact.phone}`}>
                {contact.phoneDisplay} <ArrowUpRight size={23} />
              </a>
              <a className="location-email" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </div>
          </div>
        </section>
        <section
          id="termin"
          className="appointment-section"
          aria-labelledby="appointment-heading"
        >
          <div className="site-shell">
            <Chapter
              number="07"
              name="Zeit für Ihren Blick"
              detail="Persönlich. Und ganz in Ruhe."
            />
            <div className="appointment-layout">
              <div className="booking-intro">
                <h2 id="appointment-heading" data-reveal>
                  Sehen
                  <br />
                  <em>wir uns?</em>
                </h2>
                <p>
                  Für einen neuen Blick braucht es
                  <br />
                  manchmal nur ein erstes Gespräch.
                </p>
                <a href={`tel:${contact.phone}`} className="text-link">
                  Lieber direkt anrufen <ArrowUpRight size={18} />
                </a>
              </div>
              <AppointmentForm />
            </div>
          </div>
        </section>
      </main>
      <Footer compact />
      <EditorialMotion />
    </>
  );
}
