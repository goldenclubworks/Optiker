// =============================================================================
// ALLE INHALTE DER WEBSITE AN EINER STELLE
// -----------------------------------------------------------------------------
// Texte, Öffnungszeiten, Telefonnummer usw. werden nur hier geändert.
// Einfach den Text zwischen den Anführungszeichen "…" anpassen und speichern.
// Stellen mit PLATZHALTER sind noch zu prüfen (siehe README).
// =============================================================================

export const site = {
  name: "Optik Schorcht",
  url: "https://optik-schorcht.de",
  owner: "Joachim Skorupa",
  ownerTitle: "Augenoptikermeister",
  founded: 1936,
  claim: "Sehen erleben.",
} as const;

export const contact = {
  phone: "+493514901510",
  phoneDisplay: "0351 49 01 510",
  email: "optik.schorcht@euronet-server.com",
  street: "Kleine Brüdergasse 1",
  building: "im Lebendigen Haus",
  zip: "01067",
  city: "Dresden",
  district: "Altstadt",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Optik+Schorcht+Kleine+Br%C3%BCdergasse+1+01067+Dresden",
} as const;

// Öffnungszeiten. "from"/"to" im 24-Stunden-Format, null = keine festen Zeiten.
// day: 1 = Montag … 6 = Samstag, 0 = Sonntag
export const openingHours = [
  { day: 1, label: "Montag", from: "09:00", to: "18:00" },
  { day: 2, label: "Dienstag", from: "09:00", to: "18:00" },
  { day: 3, label: "Mittwoch", from: "09:00", to: "18:00" },
  { day: 4, label: "Donnerstag", from: "09:00", to: "18:00" },
  { day: 5, label: "Freitag", from: "09:00", to: "18:00" },
  { day: 6, label: "Samstag", from: null, to: null, note: "nach Vereinbarung" },
  { day: 0, label: "Sonntag", from: null, to: null, note: "geschlossen" },
] as const;

export const hoursShort = [
  { days: "Mo – Fr", time: "9 – 18 Uhr" },
  { days: "Samstag", time: "nach Vereinbarung" },
] as const;

export const navigation = [
  { label: "Sehtest", href: "/#durchblick" },
  { label: "Brillen", href: "/#anblick" },
  { label: "Kontaktlinsen", href: "/#rundblick" },
  { label: "Service", href: "/#weitblick" },
  { label: "Geschichte", href: "/#geschichte" },
  { label: "Anfahrt", href: "/#besuch" },
] as const;

// -----------------------------------------------------------------------------
// Startseite
// -----------------------------------------------------------------------------

export const hero = {
  kicker: "Augenoptik in der Dresdner Altstadt · seit 1936",
  intro:
    "Ich bin Joachim Skorupa, Augenoptikermeister. In der Kleinen Brüdergasse nehme ich mir Zeit für Ihre Augen: für den Sehtest, die passende Brille und alles, was danach kommt.",
  image: {
    src: "/images/laden/lampen-theke.jpg",
    width: 1600,
    height: 1851,
    alt: "Die gelbe Brillenwand bei Optik Schorcht mit Pendelleuchten und Holzschränken",
  },
  caption: "Unsere Brillenwand. Kleine Brüdergasse 1.",
} as const;

export const letter = {
  heading: "ZEIT nehmen. ZEIT haben.",
  paragraphs: [
    "Eine gute Brille entsteht nicht zwischen Tür und Angel. Deshalb setzen wir uns erst einmal hin. Selters, Saft, Kaffee oder Espresso? Dann erzählen Sie mir, wie Sie sehen, wo Sie lesen, wie lange Sie am Bildschirm sitzen und was Sie an Ihrer alten Brille gestört hat.",
    "Danach messe ich genau, zeige Ihnen Fassungen, die zu Ihrem Gesicht passen, und sage Ihnen auch ehrlich, wenn etwas nicht passt. Ich berate. Sie entscheiden.",
    "Optik Schorcht gibt es in Dresden seit 1936. Ich führe das Geschäft seit 1989 und freue mich bis heute über jeden, der wiederkommt. Danke für Ihr Vertrauen und Ihre Empfehlung.",
  ],
  image: {
    src: "/images/laden/lampen-plaetze.jpg",
    width: 1600,
    height: 1849,
    alt: "Beratungsplätze mit Spiegeln und Brillenauswahl unter warmem Licht",
  },
} as const;

export type Service = {
  id: string;
  name: string;
  topic: string;
  lead: string;
  text: string[];
  points: string[];
  image: { src: string; width: number; height: number; alt: string; fit?: "contain" };
  cta: string;
};

// Die vier „Blicke“ – so hießen die Bereiche schon auf der alten Website.
export const services: Service[] = [
  {
    id: "durchblick",
    name: "Durchblick",
    topic: "Sehtest & Sehanalyse",
    lead: "Ihre Augen. Meine Profession.",
    text: [
      "Bevor wir über Fassungen sprechen, messe ich Ihre Augen genau. Mit dem Visionix 120 bestimmen wir Ihre Brillenglaswerte per 3D-Refraktion – wellenfrontgestützt, schnell und ohne Hektik.",
      "Genauso wichtig ist, wie Sie Ihre Augen brauchen: beim Lesen, am Bildschirm, im Auto, beim Sport oder in der Sonne. Daraus ergibt sich das richtige Glas.",
    ],
    points: ["3D-Refraktion mit Visionix 120", "Sehgewohnheiten im Alltag", "Gleitsicht, Arbeitsplatz, Sport"],
    image: {
      src: "/images/schorcht/visionix.png",
      width: 800,
      height: 600,
      alt: "Das Messgerät Visionix 120 für die Sehanalyse",
      fit: "contain",
    },
    cta: "Sehtest vereinbaren",
  },
  {
    id: "anblick",
    name: "Anblick",
    topic: "Brillen & Stilberatung",
    lead: "Ihr Gesicht. Meine Inspiration.",
    text: [
      "Markant, sportlich oder elegant: Ich suche mit Ihnen eine Brille, die zu Ihrem Gesicht und zu Ihrem Alltag passt. Sie ist das Erste, was andere an Ihnen sehen – da darf sie ruhig gefallen.",
      "In den Schubladen liegen Fassungen aus Acetat, Metall und Holz, darunter Holzbrillen von Leja. Gläser fertigen wir mit Markengläsern von SEIKO.",
    ],
    points: ["Acetat, Metall, Holz", "Holzbrillen von Leja", "SEIKO-Markengläser"],
    image: {
      src: "/images/schorcht/IMG_9201.jpg",
      width: 800,
      height: 600,
      alt: "Drei Holzbrillen von Leja auf dunklem Holz",
    },
    cta: "Brillenberatung vereinbaren",
  },
  {
    id: "rundblick",
    name: "Rundblick",
    topic: "Kontaktlinsen",
    lead: "Kontakt mit dem fast Unsichtbaren.",
    text: [
      "Für jeden Tag oder nur zum Sport: weiche, formstabile und multifokale Kontaktlinsen. Die Hornhaut vermessen wir per Topographie – mikrogenau und in Sekunden.",
      "Nach der Anpassung bleiben wir dran: mit Kontrollterminen und den passenden Pflegemitteln, auf Wunsch bequem im Abo.",
    ],
    points: ["Weich, formstabil, multifokal", "Hornhaut-Topographie", "Kontrollen & Pflegemittel-Abo"],
    image: {
      src: "/images/schorcht/71578755.jpg",
      width: 800,
      height: 600,
      alt: "Eine Kontaktlinse auf einer Fingerspitze",
    },
    cta: "Kontaktlinsen anpassen lassen",
  },
  {
    id: "weitblick",
    name: "Weitblick",
    topic: "Service & Werkstatt",
    lead: "Wir sind für Sie da. Auch danach.",
    text: [
      "Lockere Schraube, Druckstelle, schiefer Bügel? Kommen Sie vorbei, wir richten es.",
      "Sie möchten in Ruhe entscheiden? Nehmen Sie eine Auswahl mit nach Hause. Und wenn der Weg in die Stadt schwerfällt, kommen wir bei Bedarf auch zu Ihnen.",
    ],
    points: ["Werkstatt & Anpassung", "Auswahl zur Ansicht mit nach Hause", "Hausbesuch bei Bedarf"],
    image: {
      src: "/images/schorcht/start04.jpg",
      width: 800,
      height: 600,
      alt: "Empfangstheke aus Kirschholz und Beratungsplätze im Geschäft",
    },
    cta: "Vorbeikommen oder anrufen",
  },
];

// Kurze Zusagen unter den Leistungen.
// PLATZHALTER: Dauer der Garantie (alte Seite nennt 12 und 24 Monate) und
// Konditionen des Brillenabos bitte bestätigen.
export const promises = [
  {
    title: "Verträglichkeitsgarantie",
    text: "Sie kommen mit Ihren neuen Gläsern nicht zurecht? Dann bessern wir nach. Das gilt für SEIKO-Markengläser.",
  },
  {
    title: "Brillenabo",
    text: "Ihre neue Brille zinslos in Monatsraten bezahlen. Die Konditionen erkläre ich Ihnen gern im Laden.",
  },
  {
    title: "Nachjustieren",
    text: "Drückt etwas oder rutscht die Brille? Wir passen sie nach, so oft es nötig ist.",
  },
] as const;

export const frames = [
  { src: "/images/schorcht/IMG_9002.jpg", alt: "Helle Holzbrille vor einem Fächer aus verschiedenen Holzarten", caption: "Holz. Jede Fassung ein Einzelstück." },
  { src: "/images/schorcht/marin_compo_03_600x800.jpg", alt: "Mehrere farbige Acetatfassungen in Gelb, Havanna und Blau", caption: "Acetat. Farbe darf sein." },
  { src: "/images/schorcht/laredo_compos_02_600x800.jpg", alt: "Feine Metallfassungen mit Havanna-Akzenten", caption: "Metall. Fein und zeitlos." },
] as const;

// -----------------------------------------------------------------------------
// Geschichte
// -----------------------------------------------------------------------------

export const history = [
  {
    year: "1936",
    title: "Wallstraße 8",
    text: "Am 1. April eröffnet Bernhard Schorcht sein Fachgeschäft für Augenoptik.",
  },
  {
    year: "1945",
    title: "Dresden zerstört",
    text: "Mit der Altstadt wird auch das Geschäft in der Wallstraße zerstört.",
    image: {
      src: "/images/schorcht/Postplatz-Sophienkirche-Wilsdruffer-Strasse.jpg",
      alt: "Historische Aufnahme vom Postplatz mit der zerstörten Sophienkirche",
      caption: "Postplatz mit Sophienkirche, Nachkriegszeit",
    },
  },
  {
    year: "1946",
    title: "Neuanfang in der Stiftstraße",
    text: "Mit einer Bergungsgenehmigung der Stadt Dresden wird geborgen, was noch zu retten ist. Es geht weiter.",
    image: {
      src: "/images/schorcht/Bergungsgenehmigung-1946.jpg",
      alt: "Die maschinengeschriebene Bergungsgenehmigung der Stadt Dresden von 1946",
      caption: "Bergungsgenehmigung, 1946",
    },
  },
  {
    year: "danach",
    title: "Freiberger und Schweriner Straße",
    text: "Johannes Schorcht führt das Geschäft weiter, zuerst in der Freiberger Straße, dann in der Schweriner Straße 46.",
    image: {
      src: "/images/schorcht/Freiberger-Strasse.jpg",
      alt: "Schaufenster mit dem Schriftzug Optiker Schorcht in der Freiberger Straße",
      caption: "Freiberger Straße",
    },
  },
  {
    year: "1989",
    title: "Joachim Skorupa übernimmt",
    text: "Der Name bleibt. Die Freude am Handwerk auch.",
    image: {
      src: "/images/schorcht/AO-Schorcht-Schweriner-Strasse-46.jpg",
      alt: "Historische Straßenansicht mit dem Geschäft Augenoptiker Schorcht in der Schweriner Straße",
      caption: "Schweriner Straße 46",
    },
  },
  {
    year: "2002",
    title: "Das Hochwasser",
    text: "Das Hochwasser trifft auch uns. Eine Zeit lang arbeiten wir im Ausweichgeschäft.",
  },
  {
    year: "2003",
    title: "Kleine Brüdergasse 1",
    text: "Im Lebendigen Haus finden wir unser neues Zuhause – mitten in der Altstadt. Hier sind wir bis heute.",
  },
] as const;

// -----------------------------------------------------------------------------
// Terminanfrage
// -----------------------------------------------------------------------------

export const appointmentTopics = [
  "Sehtest",
  "Neue Brille",
  "Kontaktlinsen",
  "Reparatur / Anpassung",
  "Etwas anderes",
] as const;

// -----------------------------------------------------------------------------
// Rechtliches (Impressum)
// -----------------------------------------------------------------------------

export const legal = {
  vatId: "DE 140 192 670",
  chamber: "Handwerkskammer Dresden",
  chamberAddress: "Am Lagerplatz 8, 01099 Dresden",
  chamberUrl: "https://www.hwk-dresden.de/",
  regulation: "Gesetz zur Ordnung des Handwerks (Handwerksordnung)",
  regulationUrl: "https://www.gesetze-im-internet.de/hwo/",
  // PLATZHALTER: Name und Anschrift des Hosting-Anbieters (für die Datenschutzerklärung)
  host: "PLATZHALTER: Hosting-Anbieter mit Anschrift",
} as const;
