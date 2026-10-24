import Image from "next/image";
import { AppointmentForm } from "@/components/AppointmentForm";
import { Footer, MobileBar } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Dots } from "@/components/Logo";
import { OpenNow } from "@/components/OpenNow";
import { Sehtafel } from "@/components/Sehtafel";
import { Darkroom } from "@/components/motion/Darkroom";
import { DotField } from "@/components/motion/DotField";
import { FocusReveal } from "@/components/motion/FocusReveal";
import { HeroLens } from "@/components/motion/HeroLens";
import { Loupe } from "@/components/motion/Loupe";
import { Phoropter } from "@/components/motion/Phoropter";
import { contact, frames, hero, history, hoursShort, letter, openingHours, promises, services, site } from "@/content/site";

// "Holz. Jede Fassung ein Einzelstück." → ["Holz.", "Jede Fassung ein Einzelstück."]
function splitFirstSentence(text: string) {
  const index = text.indexOf(". ");
  return index === -1 ? [text, ""] : [text.slice(0, index + 1), text.slice(index + 2)];
}

export default function HomePage() {
  // Hintergrund: vorab unscharf gerechnet (klein, lädt schnell). Im Glas: das scharfe Original.
  const heroBackground = (
    <Image src="/images/laden/lampen-theke-unscharf.jpg" alt={hero.image.alt} fill priority sizes="100vw" />
  );
  const heroSharp = <Image src={hero.image.src} alt="" fill loading="eager" fetchPriority="low" sizes="100vw" />;

  return (
    <>
      <Header />
      <main id="inhalt">
        {/* Hero: der Laden, scharfgestellt durch ein Brillenglas ---------- */}
        <section className="hero" aria-labelledby="hero-title">
          <HeroLens background={heroBackground} sharp={heroSharp} />
          <div className="shell hero-content">
            <p className="kicker hero-kicker">{hero.kicker}</p>
            <h1 id="hero-title" className="hero-title">
              <span>Sehen</span>
              <em>erleben.</em>
            </h1>
            <div className="hero-card">
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
          </div>
        </section>

        {/* Brief vom Inhaber --------------------------------------------- */}
        <section id="einblick" className="letter" aria-labelledby="letter-title">
          <div className="shell">
            <h2 id="letter-title" className="letter-title" data-focus>
              {letter.heading
                .split(/(?<=\.)\s+/)
                .map((sentence) => {
                  const [first, ...rest] = sentence.split(" ");
                  return (
                    <span key={sentence} className="letter-line">
                      <span className="letter-word">{first}</span> {rest.join(" ")}
                    </span>
                  );
                })}
            </h2>
            <div className="letter-grid">
              <figure className="letter-photo" data-focus>
                <Image
                  src={letter.image.src}
                  width={letter.image.width}
                  height={letter.image.height}
                  alt={letter.image.alt}
                  sizes="(max-width: 860px) 92vw, 36vw"
                />
              </figure>
              <div className="letter-text">
                <p className="label">Bei mir</p>
                {letter.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p className="signature">
                  {site.owner}
                  <span>{site.ownerTitle} und Inhaber</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leistungen am Phoropter -------------------------------------- */}
        <section className="services" aria-labelledby="services-title">
          <div className="shell">
            <header className="services-head">
              <p className="label">Was ich für Sie tue</p>
              <h2 id="services-title" data-focus>
                Vier Blicke
                <br />
                <em>auf gutes Sehen.</em>
              </h2>
            </header>

            <Phoropter
              lenses={services.map((service) => ({
                id: service.id,
                name: service.name,
                ...service.image,
              }))}
            >
              {services.map((service, i) => (
                <article
                  key={service.id}
                  id={service.id}
                  data-lens-index={i}
                  className="service"
                  aria-labelledby={`${service.id}-title`}
                >
                  <figure className={`service-image${service.image.fit === "contain" ? " is-object" : ""}`}>
                    <Image
                      src={service.image.src}
                      width={service.image.width}
                      height={service.image.height}
                      alt={service.image.alt}
                      sizes="(max-width: 1023px) 70vw, 1px"
                    />
                  </figure>
                  <p className="service-number" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 id={`${service.id}-title`}>
                    <span className="service-blick">{service.name}</span>
                    <span className="service-topic">{service.topic}</span>
                  </h3>
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
                </article>
              ))}
            </Phoropter>
          </div>

          <ul className="promises">
            {promises.map((promise) => (
              <li key={promise.title} data-focus>
                <h3>{promise.title}</h3>
                <p>{promise.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Brillen unter der Lupe ---------------------------------------- */}
        <section className="frames" aria-labelledby="frames-title">
          <div className="shell">
            <header className="frames-head">
              <h2 id="frames-title" data-focus>
                Aus unseren
                <br />
                <em>Schubladen.</em>
              </h2>
              <p>
                Eine kleine Auswahl. Den Rest zeige ich Ihnen am liebsten im Laden – mit Spiegel und gutem Licht.
                <span className="frames-hint"> Fahren Sie mit der Maus über die Fotos: Die Lupe zeigt jedes Detail.</span>
              </p>
            </header>
            <div className="frames-grid">
              {frames.map((frame, i) => {
                const [material, rest] = splitFirstSentence(frame.caption);
                return (
                  <figure key={frame.src} className={`frame frame-${i + 1}`} data-focus>
                    <Loupe src={frame.src}>
                      <Image src={frame.src} width={800} height={600} alt={frame.alt} sizes="(max-width: 700px) 92vw, 45vw" />
                    </Loupe>
                    <figcaption>
                      <span className="frame-material">{material}</span> {rest}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </section>

        {/* Geschichte in der Dunkelkammer -------------------------------- */}
        <section id="geschichte" className="history" aria-labelledby="history-title">
          <Darkroom years={history.map((entry) => entry.year)}>
            <div className="chapter chapter-intro">
              <p className="label">Rückblick</p>
              <h2 id="history-title">
                Ein Name.
                <br />
                <em>Viele Kapitel.</em>
              </h2>
              <p className="history-intro">
                Seit {site.founded} gibt es Optik Schorcht in Dresden. Das Geschäft ist mehrmals umgezogen, einmal
                ausgebombt und einmal überflutet worden. Geblieben sind der Name und die Freude an der Augenoptik.
              </p>
            </div>
            {history.map((entry, i) => (
              <article key={entry.year + entry.title} className={`chapter${"image" in entry ? " has-image" : ""}`}>
                <p className="chapter-year">{entry.year}</p>
                <h3>{entry.title}</h3>
                <p className="chapter-text">{entry.text}</p>
                {"image" in entry && entry.image && (
                  <figure className="archive-print" style={{ "--tilt": `${i % 2 ? 1.6 : -1.2}deg` } as React.CSSProperties}>
                    <Image src={entry.image.src} width={800} height={600} alt={entry.image.alt} sizes="(max-width: 1023px) 86vw, 420px" />
                    <figcaption>{entry.image.caption}</figcaption>
                  </figure>
                )}
              </article>
            ))}
          </Darkroom>
        </section>

        {/* Anfahrt mit Sehtafel ------------------------------------------ */}
        <section id="besuch" className="visit" aria-labelledby="visit-title">
          <div className="shell">
            <h2 id="visit-title" className="visit-title" data-focus>
              Mitten in
              <br />
              <em>der Altstadt.</em>
            </h2>
            <div className="visit-grid">
              <Sehtafel />
              <div className="visit-text">
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
              <figure className="visit-photo" data-focus>
                <Image
                  src="/images/laden/lebendiges-haus.jpg"
                  width={1154}
                  height={2400}
                  alt="Das Lebendige Haus an der Kleinen Brüdergasse mit großer Glasfassade"
                  sizes="(max-width: 860px) 92vw, 24vw"
                />
                <figcaption>Das Lebendige Haus. Unser Zuhause seit 2003.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Termin mit lebendem Punktraster -------------------------------- */}
        <section id="termin" className="appointment" aria-labelledby="appointment-title">
          <DotField />
          <div className="shell appointment-grid">
            <div className="appointment-text">
              <Dots className="appointment-dots" />
              <h2 id="appointment-title">
                Sehen
                <br />
                <em>wir uns?</em>
              </h2>
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
      <FocusReveal />
    </>
  );
}
