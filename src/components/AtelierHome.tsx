"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Plus, Minus } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { contact } from "@/content/site";

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -45px 0px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export const expertise = [
  { title: "Sehanalyse", subtitle: "Der Anfang von allem: Ihr Blick.", text: "Jedes Auge ist anders. Mit präziser Messung und einem offenen Gespräch über Ihren Alltag finden wir heraus, was gutes Sehen für Sie bedeutet.", image: "/images/eye-test.jpg", alt: "Optische Messtechnik für eine persönliche Sehanalyse" },
  { title: "Brillen & Stilberatung", subtitle: "Nicht irgendeine. Ihre.", text: "Gesichtsform, Proportionen, Persönlichkeit. Gemeinsam finden wir eine Fassung, die zu Ihnen passt – und Ihnen Raum für einen neuen Blick auf sich selbst gibt.", image: "/images/lookbook-1.jpg", alt: "Inspiration für eine markante Acetatbrille" },
  { title: "Kontaktlinsen", subtitle: "Freiheit, die Sie kaum spüren.", text: "Für jeden Tag oder besondere Momente. Wir beraten Sie zu weichen, formstabilen und multifokalen Kontaktlinsen und begleiten Sie von der Anpassung bis zur Nachkontrolle.", image: "/images/contact-lenses.jpg", alt: "Kontaktlinse im Detail" },
  { title: "Handwerk & Service", subtitle: "Der Unterschied liegt im Detail.", text: "Eine Brille soll sich so gut anfühlen, wie sie aussieht. Wir passen sie präzise an, richten lockere Schrauben und kümmern uns um Druckstellen. Auch lange nach dem Kauf.", image: "/images/frames-closeup.jpg", alt: "Präzisionsscharnier einer Brillenfassung" },
];

export function Expertise({ full = false }: { full?: boolean }) {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section className={`expertise-section${full ? " expertise-full" : ""}`} id="expertise">
      <div className="atelier-shell">
        <Reveal className="section-heading"><div><span className="eyebrow"><span className="small-dot" /> SEHEN & SERVICE</span><h2>Ihr Blick.<br /><em>Unser Handwerk.</em></h2></div><p>Gutes Sehen beginnt mit genauem Hinsehen.<br />Und mit jemandem, der Ihnen zuhört.</p></Reveal>
        <div className="expertise-grid">
          <Reveal className="expertise-photo"><Image key={active} src={expertise[active ?? 0].image} alt={expertise[active ?? 0].alt} fill sizes="(max-width: 760px) 100vw, 45vw" /><div className="image-corner-label"><span>PRÄZISION MIT PERSÖNLICHKEIT</span><span>{String((active ?? 0) + 1).padStart(2, "0")} / 04</span></div></Reveal>
          <div className="expertise-list">
            {expertise.map((item, i) => <div key={item.title} className={`expertise-item${active === i ? " is-active" : ""}`}>
              <h3><button onClick={() => setActive(active === i ? null : i)} aria-expanded={active === i} aria-controls={`expertise-panel-${i}`}><span className="expertise-index">0{i + 1}</span><span>{item.title}</span>{active === i ? <Minus size={20} strokeWidth={1.2} /> : <Plus size={20} strokeWidth={1.2} />}</button></h3>
              <div id={`expertise-panel-${i}`} className="expertise-answer" hidden={active !== i}><h4>{item.subtitle}</h4><p>{item.text}</p><Link href="/termin" className="text-link">Persönlich beraten lassen <ArrowUpRight size={16} /></Link></div>
            </div>)}
            {!full && <Link href="/leistungen" className="text-link expertise-all">Unsere Leistungen entdecken <ArrowRight size={17} /></Link>}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Visit({ compact = false }: { compact?: boolean }) {
  return <section className={`visit-section${compact ? " visit-compact" : ""}`} id="besuch"><div className="atelier-shell visit-grid">
    <Reveal className="visit-copy"><span className="eyebrow"><span className="small-dot" /> IN DRESDENS MITTE</span><h2>Ein guter Ort<br />für einen<br /><em>neuen Blick.</em></h2><p>Zwischen Zwinger und Taschenbergpalais.<br />Mit Zeit für Sie und Ihre nächste Lieblingsbrille.</p><div className="visit-address"><span>{contact.address.street}</span><span>{contact.address.zip} {contact.address.city}</span></div><a className="text-link" href={contact.googleMapsUrl} target="_blank" rel="noreferrer">Den Weg zu uns finden <ArrowUpRight size={17} /></a><div className="visit-hours"><span className="eyebrow">WIR SIND FÜR SIE DA</span><p>Montag – Freitag <span>09:00 – 18:00 Uhr</span><br />Samstag <span>nach Vereinbarung</span></p></div></Reveal>
    <Reveal className="visit-image"><Image src="/images/editorial/schorcht-original-store.jpg" alt="Das Geschäft von Optik Schorcht in der Kleinen Brüdergasse in Dresden" fill sizes="(max-width: 760px) 100vw, 50vw" /><span className="photo-caption">UNSER HAUS. IHRE AUGENOPTIK.</span></Reveal>
  </div></section>;
}

export function AppointmentInvitation() {
  return <section className="appointment-invitation"><div className="atelier-shell"><Reveal><span className="eyebrow">ZEIT NEHMEN. ZEIT HABEN.</span><div className="invitation-line"><h2>Wir sollten uns<br /><em>in die Augen sehen.</em></h2><Link href="/termin" className="invitation-arrow" aria-label="Termin vereinbaren"><ArrowUpRight strokeWidth={1} /></Link></div><div className="invitation-bottom"><p>Ihre neue Perspektive beginnt mit einem Gespräch.</p><Link href="/termin" className="text-link">Termin vereinbaren <ArrowUpRight size={17} /></Link></div></Reveal></div></section>;
}

export function AtelierHome() {
  return <main id="main-content" className="atelier-main">
    <section className="atelier-hero">
      <div className="atelier-shell hero-grid">
        <div className="hero-copy"><span className="eyebrow hero-eyebrow"><span className="small-dot" /> AUGENOPTIK MIT PERSÖNLICHKEIT</span><h1>Gutes Sehen.<br /><em>Großer Stil.</em></h1><p>Eine Brille ist mehr als gutes Sehen.<br />Sie ist ein Stück Persönlichkeit. Entdecken<br className="desktop-break" /> Sie Ihre – bei Optik Schorcht in Dresden.</p><div className="hero-actions"><Link href="/brillen" className="atelier-button">Ihren Stil entdecken <ArrowUpRight size={18} /></Link><Link href="/termin" className="hero-secondary">Persönlich beraten lassen <ArrowUpRight size={16} /></Link></div><div className="hero-footnote"><span className="hero-year">1936<span>—</span></span><p>In Dresden verwurzelt.<br />Für Ihren Blick nach vorn.</p><a href="#haltung" className="hero-scroll" aria-label="Mehr über Optik Schorcht erfahren"><ArrowDown size={19} strokeWidth={1.2} /></a></div></div>
        <div className="hero-visual"><Image src="/images/editorial/schorcht-campaign.png" alt="Editorial-Porträt einer Frau mit einer ausdrucksstarken dunklen Acetatbrille" fill priority sizes="(max-width: 760px) 100vw, 52vw" className="hero-campaign" /><span className="hero-image-note">EIN EIGENER BLICK AUF DIE WELT.</span><span className="hero-edition">SCHORCHT<br />PERSPEKTIVEN / 01</span><div className="hero-image-bottom"><span>FÜR MENSCHEN MIT CHARAKTER.</span><ArrowUpRight size={24} strokeWidth={1.1} /></div></div>
      </div>
      <div className="atelier-shell hero-bottom"><span>UNABHÄNGIG. PERSÖNLICH. SEIT 1936.</span><span>DRESDEN · KLEINE BRÜDERGASSE 1 <ArrowUpRight size={13} /></span></div>
    </section>
    <section className="manifesto-section" id="haltung"><div className="atelier-shell"><Reveal><span className="eyebrow"><span className="small-dot" /> SCHÖN, DASS SIE DA SIND.</span><h2>Sie folgen Ihrem Stil.<br />Wir kümmern uns um<br /><em>den richtigen Blick.</em></h2><div className="manifesto-bottom"><span className="manifesto-mark" aria-hidden="true">s.</span><p>Keine zwei Menschen sehen die Welt gleich. Deshalb nehmen wir uns Zeit. Für Ihre Augen, Ihre Wünsche und eine Brille, die sich einfach nach Ihnen anfühlt.</p><Link href="#unser-haus" className="text-link">Schorcht kennenlernen <ArrowUpRight size={17} /></Link></div></Reveal></div></section>
    <section className="style-section" id="brillen"><div className="atelier-shell"><Reveal className="section-heading"><div><span className="eyebrow"><span className="small-dot" /> BRILLEN & PERSÖNLICHKEIT</span><h2>So besonders<br /><em>wie Ihr Blick.</em></h2></div><div className="section-intro"><p>Klare Formen. Feine Details. Echter Charakter.<br />Eine neue Perspektive auf Ihr wichtigstes Accessoire.</p><Link href="/brillen" className="text-link">Brillen & Stil entdecken <ArrowUpRight size={17} /></Link></div></Reveal><div className="style-grid"><Reveal className="style-card style-card-large"><Link href="/brillen#ausdruck"><div className="style-image"><Image src="/images/hero-artistic.jpg" alt="Sonnenlicht auf einer ausdrucksstarken havannafarbenen Acetatbrille" fill sizes="(max-width: 760px) 100vw, 57vw" /><span className="style-badge">01 / AUSDRUCK</span><span className="style-image-arrow"><ArrowUpRight size={24} strokeWidth={1.2} /></span></div><div className="style-card-caption"><h3>Charakter zeigen.</h3><span>MARKANT. ZEITLOS. SIE.</span></div></Link></Reveal><Reveal className="style-card style-card-small"><Link href="/brillen#details"><div className="style-image"><Image src="/images/frames-closeup.jpg" alt="Feines Scharnier und Materialdetails einer Brillenfassung" fill sizes="(max-width: 760px) 100vw, 38vw" /><span className="style-badge">02 / FEINGEFÜHL</span><span className="style-image-arrow"><ArrowUpRight size={24} strokeWidth={1.2} /></span></div><div className="style-card-caption"><h3>Details, die bleiben.</h3><span>QUALITÄT, DIE MAN SPÜRT.</span></div></Link></Reveal></div></div></section>
    <Expertise />
    <section className="heritage-section" id="unser-haus"><div className="atelier-shell heritage-grid"><Reveal className="heritage-visual"><Image src="/images/hero-stunning.jpg" alt="Havannafarbene Brille im warmen Licht, als Inspiration für Ihren eigenen Stil" fill sizes="(max-width: 760px) 100vw, 48vw" /><span className="heritage-year">Seit<br /><em>1936.</em></span><span className="heritage-photo-label">IN DRESDEN VERWURZELT.</span></Reveal><Reveal className="heritage-copy"><span className="eyebrow"><span className="small-dot" /> EIN NAME. EINE HALTUNG.</span><h2>Tradition im Herzen.<br /><em>Zukunft im Blick.</em></h2><p>Seit 1936 gehört Schorcht zu Dresden. Was uns bis heute ausmacht? Die Freude am Handwerk. Die Neugier auf Neues. Und die Überzeugung, dass gute Beratung immer persönlich ist.</p><p>Inhaber Joachim Skorupa führt diese Geschichte weiter. Mit Kompetenz, Gespür und vor allem: Zeit für Sie.</p><blockquote>„Ich will, dass Sie<br /><em>Sehen erleben.“</em></blockquote><div className="owner-signature"><span>Joachim Skorupa</span><small>INHABER · OPTIK SCHORCHT</small></div><Link href="/kontakt" className="text-link">Lernen wir uns kennen <ArrowUpRight size={17} /></Link></Reveal></div></section>
    <Visit />
    <AppointmentInvitation />
  </main>;
}
