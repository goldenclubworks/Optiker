# Optik Schorcht – Website

Die Website von Optik Schorcht, Augenoptik in der Dresdner Altstadt seit 1936.
Gebaut mit [Next.js](https://nextjs.org). Keine Cookies, kein Tracking, keine Anfragen an fremde Server.

---

## Inhalte ändern

**Fast alles steht in einer einzigen Datei: [`src/content/site.ts`](src/content/site.ts).**

Dort finden Sie, jeweils mit Überschrift:

| Was | Wo in `site.ts` |
| --- | --- |
| Telefon, E-Mail, Adresse | `contact` |
| Öffnungszeiten (Tabelle, „Jetzt geöffnet“-Anzeige, Google-Daten) | `openingHours` |
| Kurzform der Öffnungszeiten (Footer, Terminbereich) | `hoursShort` |
| Text oben auf der Startseite | `hero` |
| Der Brief „ZEIT nehmen. ZEIT haben.“ | `letter` |
| Die vier Blicke (Sehtest, Brillen, Kontaktlinsen, Service) | `services` |
| Garantie, Brillenabo, Nachjustieren | `promises` |
| Brillenfotos „Aus unseren Schubladen“ | `frames` |
| Geschichte 1936 – heute | `history` |
| Auswahl im Terminformular | `appointmentTopics` |
| USt-ID, Kammer, Hosting-Anbieter | `legal` |

So geht's: Text zwischen den Anführungszeichen `"…"` ändern, speichern, neu veröffentlichen (siehe unten).
Die Anführungszeichen selbst und die Kommas am Zeilenende bitte stehen lassen.

**Öffnungszeiten ändern, Beispiel Mittagspause am Mittwoch:** Bei `day: 3` die Zeiten anpassen, z. B.
`from: "09:00", to: "13:00"`. Die Anzeige „Jetzt geöffnet / geschlossen“ rechnet automatisch mit
Dresdner Uhrzeit. Feiertage kennt sie nicht.

**Bilder austauschen:** Neues Foto in `public/images/…` ablegen und den Pfad in `site.ts` ändern.
Am besten mindestens 1600 Pixel breit. Die Website erzeugt automatisch kleinere Varianten für Handys.

Impressum und Datenschutz liegen in `src/app/impressum/page.tsx` und `src/app/datenschutz/page.tsx`.

---

## Noch offen – bitte prüfen

Diese Punkte konnte ich nicht selbst klären. Auf der Website sind sie entweder neutral formuliert oder deutlich markiert:

1. **Hosting bei Vercel:** In der Datenschutzerklärung eingetragen. Den Vertrag zur Auftragsverarbeitung (DPA) bei Vercel abschließen bzw. akzeptieren: https://vercel.com/legal/dpa
2. **Verträglichkeitsgarantie:** Die alte Website nannte an einer Stelle 12, an einer anderen 24 Monate. Bitte die richtige Zahl nennen, dann kommt sie in den Text.
3. **Brillenabo:** Konditionen (12 / 24 Raten, zinslos?) bestätigen. Das bisherige PDF lag auf der alten WordPress-Seite und ist nach dem Umzug nicht mehr erreichbar. Wenn es weiter angeboten werden soll, die Datei nach `public/` legen.
4. **Öffnungszeiten** Mo–Fr 9–18 Uhr, Samstag nach Vereinbarung: noch aktuell?
5. **Foto vom Inhaber:** Ein echtes Porträt von Herrn Skorupa im Laden wäre der größte Gewinn für die Seite (Startseite oder Brief).
6. **Neue Ladenfotos:** Die vorhandenen Fotos sind gut, aber nur 800 Pixel breit. Neue Aufnahmen (Laden, Werkstatt, Hände bei der Arbeit, Schaufenster) in hoher Auflösung würden die Seite noch einmal deutlich heben.
7. **Rechtstexte** vor dem Livegang einmal fachlich prüfen lassen (z. B. durch Kammer oder Anwalt).

---

## Technik

```bash
pnpm install      # einmalig
pnpm dev          # Entwicklung: http://localhost:3000
pnpm build        # Produktions-Build
pnpm start        # Produktions-Server
pnpm lint         # Code-Prüfung
```

### Veröffentlichen

Die Seite braucht einen Hoster, der Next.js ausführt (z. B. Vercel, Netlify oder ein eigener Node-Server).

- **Vercel (am einfachsten):** Repository verbinden, fertig. Jede Änderung auf `main` wird automatisch veröffentlicht.
- **Eigener Server:** `pnpm install && pnpm build && pnpm start` (Node 20 oder neuer), davor einen Webserver mit HTTPS.

Danach die Domain `optik-schorcht.de` auf den neuen Hoster zeigen lassen und in der
[Google Search Console](https://search.google.com/search-console) die Sitemap `https://optik-schorcht.de/sitemap.xml` einreichen.
Im Google-Unternehmensprofil sollten Adresse, Telefonnummer und Öffnungszeiten genau wie auf der Website stehen.

### Was eingebaut ist

- **Lokales SEO:** Titel und Beschreibungen, strukturierte Daten (`Optician`, mit Adresse und Öffnungszeiten), `sitemap.xml`, `robots.txt`.
- **Alte Adressen** wie `/weitblick`, `/rundblick` oder `/ruckblick` leiten dauerhaft auf den passenden Abschnitt weiter (`src/app/[blick]/page.tsx`).
- **Terminformular:** Es öffnet eine fertige E-Mail im Mailprogramm des Besuchers. Es wird nichts auf dem Server gespeichert, und es gibt keinen Formular-Endpunkt, den Spam-Bots missbrauchen könnten.
- **Schriften** (Source Serif 4, Archivo, Archivo Narrow, Courier Prime) werden beim Build eingebunden und von der eigenen Domain geladen.
- **Handy:** feste Leiste mit „Anrufen · Termin · Route“ am unteren Rand.

### Aufbau

```
src/content/site.ts        alle Inhalte
src/app/page.tsx           Startseite
src/app/globals.css        Gestaltung (Farben ganz oben)
src/components/            Header, Footer, Logo, Sehtafel, Formular, Öffnungsstatus
public/images/laden/       hochauflösende Ladenfotos und die Altstadt-Zeichnung
public/images/schorcht/    Originalbilder der alten Website
docs/vorher-nachher/       Vergleichs-Screenshots
```
