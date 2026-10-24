import Image from "next/image";
import { AppointmentForm } from "@/components/AppointmentForm";
import { Footer, MobileBar } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Dots } from "@/components/Logo";
import { OpenNow } from "@/components/OpenNow";
import { Sehtafel } from "@/components/Sehtafel";
import { contact, frames, hero, history, hoursShort, letter, openingHours, promises, services, site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="inhalt">
        {/* ---------------------------------------------------------------- */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-text">
              <p className="kicker">{hero.kicker}</p>
              <h1 id="hero-title">
                Sehen
                <br />
                <em>erleben.</em>
              </h1>
              <p className="hero-intro">{hero.intro}</p>
              <div className="hero-actions">
                <a className="button" href="#termin">
                  Termin anfragen
                </a>
                <a className="button button-quiet" href={`tel:${contact.phone}`}>
                  {contact.phoneDisplay}
                </a>
              </div>
              <dl className="hero-facts">
                <div>
                  <dt>Heute</dt>
                  <dd>
                    <OpenNow fallback="Mo – Fr 9 – 18 Uhr" />
                  </dd>
                </div>
                <div>
                  <dt>Wo</dt>
                  <dd>
                    {contact.street}, {contact.building}
                  </dd>
                </div>
              </dl>
            </div>
            <figure className="hero-figure">
              <div className="wall">
                <Image
                  src={hero.image.src}
                  width={hero.image.width}
                  height={hero.image.height}
                  alt={hero.image.alt}
                  loading="eager"
                  sizes="(max-width: 860px) 92vw, 44vw"
                />
              </div>
              <figcaption>{hero.caption}</figcaption>
            </figure>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section id="einblick" className="letter" aria-labelledby="letter-title">
          <div className="shell letter-grid">
            <figure className="letter-photo">
              <Image
                src={letter.image.src}
                width={letter.image.width}
                height={letter.image.height}
                alt={letter.image.alt}
                sizes="(max-width: 860px) 92vw, 38vw"
              />
            </figure>
            <div className="letter-text">
              <p className="label">Bei mir</p>
              <h2 id="letter-title">{letter.heading}</h2>
              {letter.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="signature">
                {site.owner}
                <span>
                  {site.ownerTitle} und Inhaber
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section className="services" aria-labelledby="services-title">
          <div className="shell">
            <header className="section-head">
              <p className="label">Was ich für Sie tue</p>
              <h2 id="services-title">Vier Blicke auf gutes Sehen.</h2>
            </header>

            {services.map((service) => (
              <article key={service.id} id={service.id} className="service" aria-labelledby={`${service.id}-title`}>
                <div className="service-name">
                  <h3 id={`${service.id}-title`}>
                    <span className="service-blick">{service.name}</span>
                    <span className="service-topic">{service.topic}</span>
                  </h3>
                </div>
                <div className="service-body">
                  <p className="service-lead">{service.lead}</p>
                  {service.text.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <ul className="service-points">
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <a className="text-link" href="#termin">
                    {service.cta}
                  </a>
                </div>
                <figure className={`service-image${service.image.fit === "contain" ? " is-object" : ""}`}>
                  <Image
                    src={service.image.src}
                    width={service.image.width}
                    height={service.image.height}
                    alt={service.image.alt}
                    sizes="(max-width: 860px) 92vw, 30vw"
                  />
                </figure>
              </article>
            ))}

            <ul className="promises">
              {promises.map((promise) => (
                <li key={promise.title}>
                  <h3>{promise.title}</h3>
                  <p>{promise.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section className="frames" aria-labelledby="frames-title">
          <div className="shell">
            <header className="section-head section-head-row">
              <h2 id="frames-title">Aus unseren Schubladen.</h2>
              <p>Eine kleine Auswahl. Den Rest zeige ich Ihnen am liebsten im Laden – mit Spiegel und gutem Licht.</p>
            </header>
            <div className="frames-grid">
              {frames.map((frame) => (
                <figure key={frame.src}>
                  <Image src={frame.src} width={800} height={600} alt={frame.alt} sizes="(max-width: 700px) 92vw, 31vw" />
                  <figcaption>{frame.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section id="geschichte" className="history" aria-labelledby="history-title">
          <div className="shell">
            <header className="section-head">
              <p className="label">Rückblick</p>
              <h2 id="history-title">
                Ein Name.
                <br />
                Viele Kapitel.
              </h2>
              <p className="history-intro">
                Seit {site.founded} gibt es Optik Schorcht in Dresden. Das Geschäft ist mehrmals umgezogen, einmal
                ausgebombt und einmal überflutet worden. Geblieben sind der Name und die Freude an der Augenoptik.
              </p>
            </header>
            <ol className="timeline">
              {history.map((entry) => (
                <li key={entry.year + entry.title} className={"image" in entry ? "has-image" : undefined}>
                  <p className="timeline-year">{entry.year}</p>
                  <div className="timeline-text">
                    <h3>{entry.title}</h3>
                    <p>{entry.text}</p>
                  </div>
                  {"image" in entry && entry.image && (
                    <figure className="archive-print">
                      <Image src={entry.image.src} width={800} height={600} alt={entry.image.alt} sizes="(max-width: 860px) 80vw, 340px" />
                      <figcaption>{entry.image.caption}</figcaption>
                    </figure>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section id="besuch" className="visit" aria-labelledby="visit-title">
          <div className="shell visit-grid">
            <div className="visit-text">
              <p className="label">Anfahrt</p>
              <h2 id="visit-title">Mitten in der Altstadt.</h2>
              <p>
                Sie finden uns in der Kleinen Brüdergasse 1, {contact.building} – nur ein paar Schritte von der
                Straßenbahn-Haltestelle Postplatz entfernt.
              </p>
              <table className="hours">
                <caption>Öffnungszeiten</caption>
                <tbody>
                  {openingHours.map((entry) => (
                    <tr key={entry.day}>
                      <th scope="row">{entry.label}</th>
                      <td>{entry.from ? `${entry.from} – ${entry.to} Uhr` : entry.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="visit-links">
                <a className="text-link" href={contact.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Route in Google Maps öffnen
                </a>
                <a className="text-link" href={`tel:${contact.phone}`}>
                  {contact.phoneDisplay} anrufen
                </a>
              </p>
            </div>
            <Sehtafel />
            <figure className="visit-photo">
              <Image
                src="/images/laden/lebendiges-haus.jpg"
                width={1154}
                height={2400}
                alt="Das Lebendige Haus an der Kleinen Brüdergasse mit großer Glasfassade"
                sizes="(max-width: 860px) 92vw, 26vw"
              />
              <figcaption>Das Lebendige Haus. Unser Zuhause seit 2003.</figcaption>
            </figure>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section id="termin" className="appointment" aria-labelledby="appointment-title">
          <div className="shell appointment-grid">
            <div className="appointment-text">
              <Dots className="appointment-dots" />
              <h2 id="appointment-title">Sehen wir uns?</h2>
              <p>
                Am schnellsten geht es per Telefon. Wenn Sie lieber schreiben: Sagen Sie mir kurz, worum es geht und
                wann es Ihnen passt. Ich melde mich.
              </p>
              <a className="appointment-phone" href={`tel:${contact.phone}`}>
                {contact.phoneDisplay}
              </a>
              <p className="appointment-hours">
                {hoursShort.map((row) => (
                  <span key={row.days}>
                    {row.days}: {row.time}
                  </span>
                ))}
              </p>
            </div>
            <AppointmentForm />
          </div>
        </section>
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
