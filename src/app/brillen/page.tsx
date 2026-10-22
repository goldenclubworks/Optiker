import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { AppointmentInvitation, Reveal } from "@/components/AtelierHome";

export const metadata: Metadata = { title: "Brillen & Stil", description: "Eine Brille mit Persönlichkeit. Entdecken Sie Ihren Stil bei Optik Schorcht in Dresden – mit persönlicher Beratung und einem Blick für Details." };

export default function BrillenPage() {
  return <><Header /><main id="main-content">
    <section className="atelier-shell interior-hero-grid"><div className="interior-heading"><span className="eyebrow"><span className="small-dot" /> BRILLEN & STIL</span><h1>Ihr Gesicht.<br /><em>Ihr Statement.</em></h1><p>Manche Brillen sieht man. Andere spürt man sofort. Gemeinsam finden wir die Fassung, die zu Ihnen gehört. Markant, fein oder angenehm überraschend.</p><Link href="/termin" className="atelier-button">Ihre Brille finden <ArrowUpRight size={18} /></Link></div><div className="interior-hero-photo"><Image src="/images/lookbook-1.jpg" alt="Stilinspiration: eine markante Acetatbrille mit einem zeitlosen Leinenblazer" fill priority sizes="(max-width:760px) 100vw, 50vw" /></div></section>
    <section className="style-story style-story-stone" id="ausdruck"><div className="atelier-shell style-story-grid"><Reveal className="style-story-photo"><Image src="/images/hero-artistic.jpg" alt="Havannafarbene Acetatfassung im goldenen Licht" fill sizes="(max-width:760px) 100vw, 50vw" /></Reveal><Reveal><span className="eyebrow"><span className="small-dot" /> 01 / AUSDRUCK</span><h2>Stil beginnt<br /><em>bei Ihnen.</em></h2><p>Ihre Brille begleitet Sie jeden Tag. Sie darf Ihre Persönlichkeit unterstreichen, Ihre Proportionen ergänzen oder einen ganz neuen Akzent setzen. Sie wählen. Wir beraten. Mit Gespür für das, was Ihnen steht.</p><Link href="/termin" className="text-link">Zeit für eine Stilberatung <ArrowUpRight size={17} /></Link></Reveal></div></section>
    <section className="style-story" id="details"><div className="atelier-shell style-story-grid"><Reveal><span className="eyebrow"><span className="small-dot" /> 02 / FEINGEFÜHL</span><h2>Schön bis ins<br /><em>kleinste Detail.</em></h2><p>Ein fein gearbeitetes Scharnier. Das Gefühl des Materials. Eine Fassung, die richtig sitzt. Qualität zeigt sich oft im Kleinen. Wir achten darauf – bei der Auswahl, bei Ihren Gläsern und bei der persönlichen Anpassung.</p><Link href="/leistungen" className="text-link">Unser Handwerk kennenlernen <ArrowUpRight size={17} /></Link></Reveal><Reveal className="style-story-photo"><Image src="/images/frames-closeup.jpg" alt="Material und Scharnier einer hochwertig verarbeiteten Brillenfassung" fill sizes="(max-width:760px) 100vw, 50vw" /></Reveal></div></section>
    <AppointmentInvitation />
  </main><Footer /></>;
}
