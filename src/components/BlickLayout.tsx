import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ImageGallery } from "@/components/ImageGallery";
import { blickNavigation, type BlickPageData } from "@/content/blick";
import { contact } from "@/content/site";

export function PageLabel({ number, label }: { number: string; label: string }) {
  return <div className="page-label"><span><b>{number}</b> / {label}</span><span>TRADITION TRIFFT INNOVATION.</span></div>;
}

export function AppointmentLink() {
  return <div className="appointment-action"><Link href="/termin" className="solid-link">Termin vereinbaren <ArrowUpRight size={18} /></Link><a href={`tel:${contact.phone}`} className="appointment-phone">Oder direkt: {contact.phoneDisplay}</a></div>;
}

export function BlickLayout({ data }: { data: BlickPageData }) {
  const currentIndex = blickNavigation.findIndex((item) => item.label === data.label);
  const next = blickNavigation[(Math.max(currentIndex, 0) + 1) % blickNavigation.length];
  return <><Header /><main id="main-content" className="site-shell page-main"><PageLabel number={data.number} label={data.label} /><div className="blick-layout"><ImageGallery key={data.label} images={data.images} label={`OPTIK SCHORCHT / ${data.label.toUpperCase()}`} /><article className="blick-copy"><span className="micro-label copy-overline">SEHEN ERLEBEN.</span><h1>{data.title.map((line, i) => <span key={line} className={i === data.title.length - 1 ? "red-text" : undefined}>{line}</span>)}</h1><h2>{data.introduction}</h2><div className="copy-paragraphs">{data.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>{data.notes && <div className="service-notes">{data.notes.map((note) => <div key={note.title}><h3>{note.title}</h3><p>{note.text}</p></div>)}</div>}{data.label === "Einblick" && <p className="owner-name">Joachim Skorupa <span>Inhaber · Optik Schorcht</span></p>}{data.link && <Link href={data.link.href} className="line-link">{data.link.label} <ArrowUpRight size={16} /></Link>}<AppointmentLink /></article></div><div className="next-blick"><span>Es gibt noch mehr zu entdecken.</span><Link href={next.href}>{next.label} <ArrowRight size={19} /></Link></div></main><Footer /></>;
}
