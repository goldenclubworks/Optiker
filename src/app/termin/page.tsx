import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { AppointmentForm } from "@/components/AppointmentForm";
import { contact } from "@/content/site";

export const metadata: Metadata = { title: "Zeit für Sie · Termin anfragen", description: "Zeit für Ihren Blick. Vereinbaren Sie Ihre persönliche Beratung bei Optik Schorcht in Dresden telefonisch oder per E-Mail." };

export default function TerminPage() {
  return <><Header /><main id="main-content"><section className="atelier-shell interior-heading"><span className="eyebrow"><span className="small-dot" /> PERSÖNLICH. MIT ZEIT. FÜR SIE.</span><h1>Ein Gespräch.<br /><em>Neue Perspektiven.</em></h1><p>Für eine neue Brille, einen klareren Blick oder einfach eine gute Beratung. Erzählen Sie uns, was Sie sich wünschen.</p></section><section className="atelier-shell booking-section"><div className="booking-grid"><AppointmentForm /><aside className="booking-aside"><span className="eyebrow">LIEBER DIREKT IM GESPRÄCH?</span><h2>Ihre Stimme.<br /><em>Unser offenes Ohr.</em></h2><p>Rufen Sie uns an. Gemeinsam finden wir eine gute Zeit für Ihren Besuch.</p><a href={`tel:${contact.phone}`} className="text-link">{contact.phoneDisplay} <ArrowUpRight size={18} /></a><span className="eyebrow">WIR FREUEN UNS AUF SIE</span><p className="booking-address">{contact.address.street}<br />{contact.address.zip} {contact.address.city}<br /><br />Montag – Freitag: 09:00 – 18:00 Uhr<br />Samstag nach Vereinbarung</p><a className="text-link" href={contact.googleMapsUrl} target="_blank" rel="noreferrer">Route finden <ArrowUpRight size={16} /></a></aside></div></section></main><Footer /></>;
}
