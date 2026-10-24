"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { appointmentTopics, contact } from "@/content/site";

// Die Anfrage wird nicht über einen Server verschickt: Das Formular öffnet
// eine fertig formulierte E-Mail im Mailprogramm des Besuchers.
// Dadurch werden keine Daten auf der Website gespeichert, und es gibt
// keinen Formular-Endpunkt, den Spam-Bots missbrauchen könnten.
export function AppointmentForm() {
  const [prepared, setPrepared] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const topic = String(data.get("topic") ?? "");
    const when = String(data.get("when") ?? "").trim();
    const callback = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = [
      "Guten Tag Herr Skorupa,",
      "",
      `ich hätte gern einen Termin: ${topic}.`,
      `Wann es mir passt: ${when || "nach Absprache"}`,
      callback ? `Sie erreichen mich unter: ${callback}` : "",
      message ? `\n${message}` : "",
      "",
      "Viele Grüße",
      name,
    ]
      .filter((line, i, all) => line !== "" || all[i - 1] !== "")
      .join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Terminanfrage: ${topic}`)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }

  return (
    <form className="appointment-form" onSubmit={submit}>
      <fieldset>
        <legend>Worum geht es?</legend>
        <div className="topic-list">
          {appointmentTopics.map((topic, i) => (
            <label key={topic} className="topic">
              <input type="radio" name="topic" value={topic} defaultChecked={i === 0} />
              <span>{topic}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field-row">
        <div className="field">
          <label htmlFor="f-name">Ihr Name</label>
          <input id="f-name" name="name" type="text" autoComplete="name" required minLength={2} maxLength={100} />
        </div>
        <div className="field">
          <label htmlFor="f-phone">
            Telefon für Rückfragen <span className="optional">(freiwillig)</span>
          </label>
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={40} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-when">
          Wann passt es Ihnen? <span className="optional">(freiwillig)</span>
        </label>
        <input id="f-when" name="when" type="text" maxLength={150} placeholder="z. B. Dienstag oder Donnerstag, eher vormittags" />
      </div>

      <div className="field">
        <label htmlFor="f-message">
          Möchten Sie noch etwas dazu sagen? <span className="optional">(freiwillig)</span>
        </label>
        <textarea id="f-message" name="message" rows={3} maxLength={1500} />
      </div>

      <p className="form-note">
        Beim Absenden öffnet sich Ihr E-Mail-Programm mit der fertigen Anfrage. Sie schicken sie selbst ab, auf
        dieser Website wird nichts gespeichert. Ihr Termin steht, sobald wir ihn bestätigt haben. Mehr dazu in der{" "}
        <Link href="/datenschutz">Datenschutzerklärung</Link>.
      </p>

      <button type="submit" className="button">
        Anfrage als E-Mail öffnen
      </button>

      <p className="form-feedback" role="status">
        {prepared && (
          <>
            Ihr E-Mail-Programm sollte sich jetzt geöffnet haben. Falls nicht, rufen Sie uns einfach an:{" "}
            <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a> oder schreiben Sie an{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </>
        )}
      </p>
    </form>
  );
}
