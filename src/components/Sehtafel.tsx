import { contact } from "@/content/site";

// Adresse und Öffnungszeiten, gesetzt wie eine Sehprobentafel:
// Zeile für Zeile kleiner, links der Visus-Wert.
const lines = [
  { visus: "0,1", text: "Kleine" },
  { visus: "0,2", text: "Brüdergasse 1" },
  { visus: "0,4", text: `${contact.zip} Dresden` },
  { visus: "0,6", text: "Mo – Fr 9 – 18 Uhr" },
  { visus: "0,8", text: "Sa nach Vereinbarung" },
  { visus: "1,0", text: `Tel. ${contact.phoneDisplay}` },
];

export function Sehtafel() {
  return (
    <figure className="sehtafel">
      <div className="sehtafel-board">
        {lines.map((line, i) => (
          <p key={line.visus} className={`sehtafel-line l${i}`}>
            <span className="sehtafel-visus" aria-hidden="true">
              {line.visus}
            </span>
            <span className="sehtafel-text">{line.text}</span>
          </p>
        ))}
        <p className="sehtafel-line sehtafel-last">
          <span className="sehtafel-visus" aria-hidden="true">
            1,6
          </span>
          <span className="sehtafel-text">
            Sie können diese Zeile nicht mehr lesen? Dann kommen Sie am besten vorbei.
          </span>
        </p>
      </div>
    </figure>
  );
}
