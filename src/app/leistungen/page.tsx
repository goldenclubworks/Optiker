import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Expertise, AppointmentInvitation } from "@/components/AtelierHome";

export const metadata: Metadata = { title: "Sehen & Service", description: "Präzise Sehanalyse, persönliche Stilberatung, Kontaktlinsenanpassung und aufmerksamer Service bei Optik Schorcht in Dresden." };

export default function LeistungenPage() {
  return <><Header /><main id="main-content"><section className="atelier-shell interior-heading"><span className="eyebrow"><span className="small-dot" /> GUT AUFGEHOBEN</span><h1>Für Ihren Alltag.<br /><em>Für Ihre Augen.</em></h1><p>Wir hören zu, messen genau und beraten persönlich. Damit Sie eine Lösung finden, die sich in Ihrem Leben richtig anfühlt.</p></section><Expertise full /><AppointmentInvitation /></main><Footer /></>;
}
