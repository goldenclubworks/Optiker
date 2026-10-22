import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Visit, AppointmentInvitation } from "@/components/AtelierHome";
import { contact } from "@/content/site";

export const metadata: Metadata = { title: "Kontakt & Besuch", description: "Besuchen Sie Optik Schorcht in der Kleinen Brüdergasse 1, 01067 Dresden. Montag bis Freitag 9–18 Uhr. Telefon: 0351 / 49 01 510." };

export default function KontaktPage() {
  return <><Header /><main id="main-content"><section className="atelier-shell interior-heading contact-route-heading"><span className="eyebrow"><span className="small-dot" /> DER ANFANG EINES GUTEN GESPRÄCHS</span><h1>Wir freuen uns<br /><em>auf Ihren Blick.</em></h1></section><section className="atelier-shell contact-details"><div className="contact-details-grid"><div><a className="contact-direct-link" href={`tel:${contact.phone}`}><div><span>RUFEN SIE UNS AN</span><strong>{contact.phoneDisplay}</strong></div><ArrowUpRight size={22} strokeWidth={1.2} /></a><a className="contact-direct-link" href={`mailto:${contact.email}`}><div><span>SCHREIBEN SIE UNS</span><strong>{contact.email}</strong></div><ArrowUpRight size={22} strokeWidth={1.2} /></a></div><div><p className="contact-details-note">Sie haben eine Frage, wünschen eine Beratung oder möchten uns kennenlernen? Wir sind persönlich für Sie da. Rufen Sie uns an oder bereiten Sie in Ruhe Ihre Terminanfrage vor.</p><Link href="/termin" className="atelier-button">Zeit für Sie vereinbaren <ArrowUpRight size={17} /></Link></div></div></section><Visit compact /><AppointmentInvitation /></main><Footer /></>;
}
