"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { contact } from "@/content/site";

const topics = ["Brillenberatung", "Sehanalyse", "Kontaktlinsen", "Service & Anpassung"];

export function AppointmentForm() {
  const [prepared, setPrepared] = useState(false);
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const topic = String(data.get("topic"));
    const body = `Guten Tag Herr Skorupa,\n\nich wünsche einen Termin für ${topic}.\n\nMein Name: ${data.get("name")}\nMein Wunschtermin: ${data.get("date") || "nach Absprache"}\n\n${data.get("message") || ""}\n\nIch freue mich über Ihre Rückmeldung.\nFreundliche Grüße\n${data.get("name")}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Terminanfrage: ${topic}`)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  return <form onSubmit={prepareEmail} className="booking-form">
    <fieldset><legend>Wofür dürfen wir uns Zeit nehmen?</legend><div className="booking-options">{topics.map((topic, i) => <label className="booking-option" key={topic}><input type="radio" name="topic" value={topic} defaultChecked={i === 0} required /><span>{topic}</span></label>)}</div></fieldset>
    <div className="booking-fields"><div><label htmlFor="appointment-name">Ihr Name *</label><input id="appointment-name" type="text" name="name" autoComplete="name" placeholder="Vor- und Nachname" required minLength={2} maxLength={100} /></div><div><label htmlFor="appointment-date">Ihr Wunschtermin</label><input id="appointment-date" type="text" name="date" placeholder="Zum Beispiel: Freitag vormittags" maxLength={150} /></div></div>
    <div className="booking-message"><label htmlFor="appointment-message">Was möchten Sie uns noch sagen?</label><textarea id="appointment-message" name="message" placeholder="Ihre Wünsche und Fragen …" rows={4} maxLength={2000} /></div>
    <p className="booking-note">Wir bereiten Ihre Anfrage in Ihrem E-Mail-Programm vor. Sie können sie dort prüfen und selbst senden. Ihr Termin steht fest, sobald wir ihn persönlich bestätigt haben.</p>
    <button type="submit" className="solid-link">E-Mail-Anfrage vorbereiten <ArrowUpRight size={18} /></button>
    {prepared && <p role="status" className="booking-feedback">Ihre Anfrage ist vorbereitet. Bitte senden Sie die E-Mail in Ihrem E-Mail-Programm. Falls es sich nicht öffnet, erreichen Sie uns unter <a className="underline" href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a> oder <a className="underline" href={`mailto:${contact.email}`}>{contact.email}</a>.</p>}
  </form>;
}
