# Optik Schorcht — Plan für den Onepager und den 3D-Hero

Stand: 22. Oktober 2026. Konzept und Umsetzungsplan; die Website wird in diesem Planungsschritt nicht umgebaut.

## Leitidee: Das Geschäft im Blick

Eine Brille steht als präzise inszeniertes Objekt im Mittelpunkt. In ihren Gläsern erscheinen die echten Räume von Optik Schorcht. So verbindet der Einstieg Produkt, Handwerk und den persönlichen Ort. Der vorhandene Claim „Sehen erleben.“ und das Punktlogo bleiben die Identität der Seite.

Die Bildsprache ist cineastisch, materiell und nah: polierte Fassungsränder, gewölbte Gläser, ein sauber ausgearbeitetes Scharnier, wandernde Lichtkanten und kontrollierte Schatten. Der bisherige Auftritt wird zum Onepager mit einer klaren Abfolge aus Erlebnis, Geschäft, Produkten, Kompetenz, Service und Kontakt.

## 1. Visuelle Richtung

- Grundfläche: das vorhandene helle Steingrau `#e9eae6`, dazu aufgehellte Flächen für Raum und Lesbarkeit.
- Typografie und Kontrast: Anthrazit `#252c2d`, kräftige groteske Überschriften und ruhige, gut lesbare Fließtexte.
- Markenakzent: Schorcht-Rot `#b51d36`, vor allem für Wortakzente, Lichtkanten und den Terminaufruf.
- Wärme: bernsteinfarbene und holzwarme Reflexe, abgeleitet aus dem tatsächlichen Ladeninterieur.
- Gestaltung: klare Kanten, präzises Raster und wenige sichtbare Trennlinien. Der leichte Brutalismus bleibt in der Grafik; Material und Licht bringen die Eleganz.

Als Fassungsrichtung eignet sich eine markante, sauber ausgearbeitete Acetatfassung mit sichtbarem Scharnier. Die Form kann sich an den vorhandenen Produktfotos orientieren. Rauchgrau und ein dezenter Bordeaux-Akzent sind zunächst eine Materialstudie; eine konkret abgebildete Verkaufsfassung wird anhand einer eindeutigen Produktreferenz ausgewählt und in ihrer tatsächlichen Form und Farbe dargestellt.

## 2. Hero: ein kurzes visuelles Kapitel

### Bild A — Nähe

Die Kamera beginnt an einer Glaskante und einem Teil der Fassung. Der Anschnitt macht die Brille groß, lässt ihre Form aber nachvollziehbar. Ein breites, weiches Hauptlicht zeichnet die Rundung nach. Der Hintergrund bleibt hell genug, dass die Szene zur restlichen Website gehört.

Logo, „Optik Schorcht“, Claim und Terminaufruf sind sofort als scharfe Webelemente sichtbar. Sie hängen nicht von einem fertig geladenen 3D-Modell oder dem Ende einer Animation ab.

### Bild B — Das Geschäft im Glas

Beim ersten Scrollen fährt die Kamera langsam seitlich über das Glas. Die vorhandenen Ladenbilder verändern ihre Position, Verzerrung und Intensität mit dem Blickwinkel. An einem bewusst komponierten Punkt ist ein Ausschnitt der echten Beratungsplätze klar erkennbar. Licht überlagert die Reflexion stellenweise und macht sie zum Teil der Glasoberfläche.

### Bild C — Die ganze Perspektive

Die Kamera zieht in eine ruhige Dreiviertelansicht zurück. Fassung, Bügel und Scharnier werden lesbar. Anschließend führt die Bildwelt in den ersten realen Geschäftsabschnitt über: Die bisherige Reflexion taucht als vollständiges Ladenbild wieder auf.

Die Szene erhält einen begrenzten Scrollbereich, als Ausgangspunkt etwa 140–170 Bildschirmhöhen-Prozent inklusive erster Ansicht. Native Scrollbedienung bleibt erhalten. Auf dem Desktop ist eine sehr kleine Reaktion auf den Mauszeiger möglich; sie ersetzt keine wesentliche Information. Eine aufwendige automatische Kamerafahrt vor dem ersten Scrollen ist nicht erforderlich.

## 3. Das Reflexionsprinzip

Der glaubwürdige Eindruck und die Erkennbarkeit des Geschäfts werden getrennt kontrolliert:

1. Physikalisch orientierte Glasmaterialien und eine gestaltete Lichtumgebung liefern plausible Helligkeitsverläufe, Glanz und winkelabhängige Reflexion.
2. Eine zusätzliche, an die Glasform angepasste Reflexionsebene bindet ausgewählte Geschäftsaufnahmen ein. Ein Shader steuert Krümmung, Sichtbarkeit, Randverhalten und den Übergang zwischen Motiven.

Ein gewöhnliches Ladenfoto ist keine vollständige 360-Grad-Lichtaufnahme. Aus den vorhandenen Fotos entsteht deshalb eine bewusst gestaltete virtuelle Umgebung. Die Ladenbilder werden nicht als unverzerrte, undurchsichtige Rechtecke auf die Gläser geklebt.

Konkrete vorhandene Quellen:

- `public/images/schorcht/start03.jpg`: Beratungsbereich mit Holztheke und Brillenauswahl; Hauptmotiv für die erste Reflexion.
- `public/images/schorcht/start05.jpg`: beleuchtete Brillenwand; Quelle für wiedererkennbare Linien und warme Reflexe.
- `public/images/schorcht/start04.jpg` und `start06.jpg`: weitere Blickwinkel für virtuelle Umgebung und Übergang in den echten Laden.
- `public/images/schorcht/anblick-1.jpg`: Ausgangsreferenz für den Aufbau einer markanten Fassung.
- `public/images/schorcht/laredo_compos_02_600x800.jpg`: alternative Referenz für eine feinere Metallfassung.
- Das bestehende Punktlogo und der gestapelte Schriftzug bleiben als scharfe Oberfläche erhalten.

## 4. Modell und Machbarkeit

**Einschätzung: bedingt geeignet für eine referenzgetreue Makrorekonstruktion, gut geeignet für einen eigens ausgearbeiteten Hero.** Die vorhandenen Bilder zeigen brauchbare Formen und Teile der Scharniere. Es liegt derzeit kein GLB-/GLTF-Modell im Projekt. Eine exakte Rückseite, alle Verbindungen und Materialeigenschaften lassen sich aus diesen einzelnen Fotos nicht vollständig ableiten.

Vorläufige Bildbewertung, jeweils 0–3, höhere Werte sind günstiger:

| Kriterium | Bewertung | Bedeutung |
| --- | --- | --- |
| Einzelnes Objekt isoliert | 1 | Mehrere Fassungen überlagern sich in den Produktbildern. |
| Silhouette erkennbar | 2 | Hauptform gut lesbar, einzelne Bereiche verdeckt. |
| Tiefe ableitbar | 2 | Perspektive und Bügel geben Hinweise, Rückseite unvollständig. |
| In Geometrie zerlegbar | 3 | Ränder, Steg, Bügel, Gläser und Scharniere sind separat aufbaubar. |
| Materialien ableitbar | 2 | Materialrichtung erkennbar, exakte Oberflächenwerte unbekannt. |
| Geringes Verdeckungsrisiko | 1 | Innere Verbindungen und kleinere Details fehlen. |
| Kameraanimation geeignet | 3 | Stabiles, starres Objekt mit klaren Bezugspunkten. |

Aufbau des Modells:

- Zwei Fassungsränder und der Steg, mit kontrollierten Querschnitten und sauber gerundeten Kanten.
- Zwei Gläser mit Vorder- und Rückseite, Wölbung und sichtbarer Randstärke.
- Zwei Bügel mit getrennten Scharniergruppen und plausiblen Anschlüssen.
- Schrauben und kleine Verbindungsteile, soweit sie im Makro sichtbar werden.
- Getrennte Materialien für Acetat, Metall und Glas; lokale Variation von Glanz und feinen Oberflächendetails.

Für den Makrolook ist ein ausreichend detailliertes Modell die Voraussetzung. Falls die konkrete Verkaufsfassung exakt getroffen werden soll, sind zusätzliche Ansichten oder ein passendes Modell der saubere Ausgangspunkt. Bei einem eigens gestalteten Konzeptmodell werden die nicht belegten Details ausdrücklich als Gestaltungsannahmen behandelt.

## 5. Onepager: Inhalte intelligent verteilen

| Abschnitt | Aufgabe und Inhalt | Gestaltung |
| --- | --- | --- |
| Überblick | Markenauftritt, Brille, Claim, Terminaufruf | Der beschriebene 3D-Hero. |
| Einblick | Der echte Laden, Joachim Skorupas persönliche Haltung, Dresden seit 1936 | Übergang von Reflexion zu realem Foto; kompakte Geschichte und Galerie. |
| Anblick | Brillen, Materialien und persönliche Stilberatung | Große vorhandene Produktbilder, kurze Texte, bewusste Bildanschnitte. |
| Durchblick | Sehanalyse, Messtechnik und individuelle Sehgewohnheiten | Ruhiger Wechsel von Bild und Text mit originalem Visionix-Motiv. |
| Rundblick | Kontaktlinsen und individuelle Anpassung | Kompakter Abschnitt mit vorhandenen Linsen-/Technikbildern. |
| Weitblick | Anpassung, Nachbetreuung, Auswahl zu Hause und weitere Serviceleistungen | Klar gegliederte Zeilen; vertiefende Informationen bei Bedarf aufklappbar. |
| Kontakt / Termin | Adresse, Öffnungszeiten, Route, direkter Anruf und E-Mail-Anfrage | Deutlicher Abschluss mit kurzen Wegen zur Kontaktaufnahme. |

Die Blick-Namen bleiben als Navigation erhalten und springen zu den Abschnitten. Die aktive Sektion wird dezent markiert. Die Reihenfolge folgt dem Besuchsablauf des Onepagers.

Rückblick wird als kompakte Geschichte in Einblick eingebettet. Angebote und weiterführende Informationen bekommen ihren Platz beim passenden Service oder im Footer. Impressum und Datenschutz bleiben eigenständige Seiten. Bestehende Fachseiten-URLs führen zu den entsprechenden Ankern. Direkte Verlinkungen und Browsernavigation werden mitgeprüft.

Die Layouts wechseln sinnvoll zwischen großem Bild, ruhigem Zweispalter und kompakten Informationszeilen. Derselbe Kachelaufbau wird nicht durch alle Abschnitte wiederholt. Alle wesentlichen Inhalte bleiben als normales HTML lesbar.

## 6. Technischer Ansatz

- Bestehendes Next.js-Projekt beibehalten. Three.js ist derzeit noch keine Projektabhängigkeit.
- Three.js als gezielt nachgeladenes Modul nur für den Hero; klare Trennung von Modell, Materialien, Reflexion, Licht und Kamerapfad.
- Direkte Three.js-Gruppen mit stabilen Bezugspunkten für Bügel, Scharniere und Kameraziele. Keine Physik- oder Zerstörungssysteme nötig.
- Physikalisch orientierte Materialien für transparente Gläser und reflektierende Fassungsoberflächen. Die Three.js-Dokumentation beschreibt dafür Transmission, Brechungsindex und Clearcoat: https://threejs.org/docs/pages/MeshPhysicalMaterial.html
- Vorbereitete Umgebungsreflexionen für die Materialantwort. Hintergrund dazu: https://threejs.org/docs/pages/PMREMGenerator.html
- Vorhandene Framer-Motion-Integration kann Scrollfortschritt liefern; keine React-Zustandsänderung für jedes gerenderte Bild.
- Kleine, komprimierte Assets, angepasste Renderauflösung und eine reduzierte Effektauswahl. Rendering pausiert außerhalb des sichtbaren Hero-Bereichs.
- Auf Mobilgeräten vereinfachte Kamera- und Lichtführung. Bei reduzierter Bewegung oder fehlender geeigneter Grafikunterstützung erscheint eine hochwertige, aus derselben Szene gerenderte Standansicht.
- Der erste sichtbare Zustand enthält Bild, Marke und Kontaktmöglichkeit; 3D verbessert diesen Zustand, statt den Seitenaufbau aufzuhalten.

## 7. Reihenfolge und Qualitätsprüfung

1. **Art Direction:** Fassungsrichtung festlegen; drei feste Bildkompositionen für Nähe, Ladenreflexion und Dreiviertelansicht ausarbeiten.
2. **Form:** Silhouette, Proportionen, Glaskrümmung und Scharnieranschlüsse im Browser prüfen. Erst danach die Oberflächen ausarbeiten.
3. **Material und Licht:** Glas, Acetat und Metall unter neutralem Licht, seitlichem Streiflicht und im finalen Lichtaufbau ansehen. Makrodetails und Reflexion müssen in diesen Ansichten bestehen.
4. **Hero-Bewegung:** Kamerapfad, Reflexionsverlauf, Typografie und Übergang zum Geschäft verbinden.
5. **Onepager:** Bestehende Inhalte in die beschriebenen Sektionen übernehmen; Navigation, alte URLs und Kontaktweg anpassen.
6. **Abschlussprüfung:** Desktop- und Mobilansichten, Tastaturbedienung, reduzierte Bewegung, WebGL-Ausfall, Ladeverhalten, Bildraten und Produktionsbuild prüfen.

Der Hero ist visuell erst gelungen, wenn das Glas räumlich wirkt, mindestens ein Ladenmotiv bewusst erkennbar wird, die Oberflächen im Makro überzeugen und der Name Optik Schorcht jederzeit lesbar bleibt. Eine komplexe Animation ersetzt diese Grundlagen nicht.

## Kopierbarer Umsetzungsauftrag

> Entwickle Optik Schorcht anhand dieses Plans zu einem hochwertigen Onepager. Gestalte zuerst den Hero-Look als drei prüfbare Ansichten: extreme Brillen-Makroaufnahme, erkennbares Geschäft in der Glasreflexion und eine Dreiviertelansicht. Setze daraus einen Three.js-Hero mit echten Ladenfotos als kontrollierten Reflexionen, präzisen Glas- und Fassungsmaterialien und einer kurzen Scroll-Kamerafahrt um. Nutze Schorcht-Rot, Anthrazit, helles Steingrau und warme Reflexe aus dem Laden. Zeige das bestehende Logo, den Namen und „Sehen erleben.“ von Beginn an lesbar. Überführe danach die Blick-Bereiche in sinnvoll verteilte Sektionen. Erhalte die persönliche Identität und vorhandenen Originalbilder. Prüfe Modell, Material, Licht und Bewegung visuell im Browser und liefere einen schnellen mobilen Fallback. Vermeide Stockporträts und eine überwiegend schwarze Inszenierung.
