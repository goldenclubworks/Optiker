export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  fit?: "cover" | "contain";
};

const original = (file: string) => `/images/schorcht/${file}`;

export const storeImages: GalleryImage[] = [
  { src: original("start03.jpg"), alt: "Der Beratungsbereich von Optik Schorcht mit Holztheke und Brillenauswahl", caption: "Ein Blick in unser Geschäft." },
  { src: original("start04.jpg"), alt: "Empfang und Beratungsplätze im Geschäft in der Kleinen Brüdergasse", caption: "Raum für persönliche Beratung." },
  { src: original("start05.jpg"), alt: "Brillenpräsentation an der gelben Wand im Geschäft von Optik Schorcht", caption: "Entdecken. Anprobieren. Wohlfühlen." },
  { src: original("start06.jpg"), alt: "Die Brillenauswahl und der Empfang bei Optik Schorcht in Dresden", caption: "Tradition trifft Innovation." },
];

export const blickNavigation = [
  { label: "Überblick", description: "Sehen erleben", href: "/#ueberblick", number: "01" },
  { label: "Einblick", description: "Bei mir", href: "/#einblick", number: "02" },
  { label: "Anblick", description: "Brillen & Stil", href: "/#anblick", number: "03" },
  { label: "Durchblick", description: "Sehanalyse", href: "/#durchblick", number: "04" },
  { label: "Rundblick", description: "Kontaktlinsen", href: "/#rundblick", number: "05" },
  { label: "Weitblick", description: "Service & Sicherheit", href: "/#weitblick", number: "06" },
] as const;

export type BlickPageData = {
  number: string;
  label: string;
  title: string[];
  introduction: string;
  paragraphs: string[];
  images: GalleryImage[];
  notes?: { title: string; text: string }[];
  link?: { label: string; href: string };
};

export const blickPages: Record<string, BlickPageData> = {
  weitblick: {
    number: "02", label: "Weitblick", title: ["Service.", "Sicherheit."],
    introduction: "Wir sind für Sie da.",
    paragraphs: ["Fühlen Sie sich wohl. Seien Sie unser Gast. Bei einem Kaffee oder Espresso nehmen wir uns Zeit für Ihre Wünsche.", "Ihr Sehkomfort ist unser Ziel. Ihre Zufriedenheit unser Anspruch. Von der ersten Auswahl bis zur persönlichen Anpassung – und auch danach."],
    images: [storeImages[1], storeImages[2], { src: original("weitblick00.jpg"), alt: "Persönliche Beratungsplätze im Dresdner Fachgeschäft", caption: "Zeit nehmen. Zeit haben." }],
    notes: [
      { title: "Wir richten es.", text: "Lockere Schrauben oder unangenehme Druckstellen? Kommen Sie vorbei. Wir kümmern uns um Ihre Brille." },
      { title: "In Ruhe entscheiden.", text: "Eine Auswahl mit nach Hause nehmen oder ein Hausbesuch bei Bedarf: Sprechen Sie uns an." },
      { title: "Service, der weitergeht.", text: "Auch zu Verträglichkeitsgarantie, SEIKO-Markengläsern und dem Brillenabo beraten wir Sie persönlich." },
    ],
  },
  einblick: {
    number: "03", label: "Einblick", title: ["Bei", "mir."],
    introduction: "Mit Kompetenz und Freude für Sie da.",
    paragraphs: ["Sehen und Aussehen. Beides habe ich für Sie im Blick. In der Kleinen Brüdergasse nehmen wir uns Zeit für Ihre Augen, Ihre Wünsche und Ihre neue Brille.", "Optik Schorcht gehört seit 1936 zu Dresden. Als Inhaber führe ich diese Geschichte mit Freude am Handwerk und einem offenen Blick für Neues weiter.", "Danke für Ihr Vertrauen, für Ihre Empfehlung und für Ihre Treue."],
    images: [{ src: original("einblick-1.jpg"), alt: "Das Gebäude an der Kleinen Brüdergasse in der Dresdner Altstadt", caption: "Zu Hause in Dresdens Mitte." }, ...storeImages.slice(0, 2)],
    link: { label: "Ein Blick in unsere Geschichte", href: "/ruckblick" },
  },
  anblick: {
    number: "04", label: "Anblick", title: ["Aussehen.", "Durchsehen."],
    introduction: "Ihr Gesicht. Meine Inspiration.",
    paragraphs: ["Markant, sportlich oder elegant. Ich suche mit Ihnen eine Brille, die zu Ihrem Gesicht, Ihrem Alltag und Ihren Wünschen passt.", "Ihre neue Brille ist ein sichtbares Stilelement. Ihr wichtigstes Accessoire. Bei der Auswahl zählen für mich Ihre Persönlichkeit und ein gutes Gefühl beim Tragen.", "Sie wählen. Ich berate."],
    images: [
      { src: original("IMG_9002.jpg"), alt: "Eine helle Holzbrille vor einer Auswahl unterschiedlicher Holzarten", caption: "Material mit Charakter. Brillen aus Holz.", fit: "contain" },
      { src: original("anblick-1.jpg"), alt: "Markante Brillenfassungen mit farbigen Akzenten", caption: "Farbe zeigen. Eigenen Stil finden.", fit: "contain" },
      { src: original("marin_compo_03_600x800.jpg"), alt: "Eine Auswahl farbiger, filigraner Brillenfassungen", caption: "Feine Linien. Viele Möglichkeiten.", fit: "contain" },
      { src: original("laredo_compos_02_600x800.jpg"), alt: "Klassische Metallfassungen mit dezenten Farbakzenten", caption: "Zeitlos in Form. Persönlich im Ausdruck.", fit: "contain" },
      { src: original("IMG_9201.jpg"), alt: "Drei Holzbrillen von Leja", caption: "Ein Blick auf besondere Materialien.", fit: "contain" },
    ],
  },
  rundblick: {
    number: "05", label: "Rundblick", title: ["Fast", "unsichtbar."],
    introduction: "Kontaktlinsen. Individuell für Sie.",
    paragraphs: ["Sehen ohne Brille. Für jeden Tag oder manchmal. Weiche, formstabile und multifokale Kontaktlinsen bieten viele Möglichkeiten.", "Am Anfang stehen persönliche Beratung und präzise Messung. Mit Hornhaut-Topographie, individueller Anpassung und regelmäßigen Kontrollen finden wir die passende Lösung für Ihre Augen.", "Auch bei Kontaktlinsen und Pflegemitteln bleiben wir Ihr Ansprechpartner."],
    images: [
      { src: original("71578755.jpg"), alt: "Eine transparente Kontaktlinse auf einer Fingerspitze", caption: "Klein im Format. Individuell in der Anpassung.", fit: "contain" },
      { src: original("dyn.jpg"), alt: "Messtechnik für die persönliche Kontaktlinsenanpassung", caption: "Genau hinsehen. Passend anpassen.", fit: "contain" },
    ],
  },
  durchblick: {
    number: "06", label: "Durchblick", title: ["Ihre Augen.", "Meine", "Profession."],
    introduction: "Brillenglasbestimmung in einer neuen Dimension.",
    paragraphs: ["3D-Refraktion: komfortabel, natürlich, genau. Mit dem Visionix 120 ermitteln wir die Grundlagen für Ihre Brillengläser.", "Dazu gehören auch Ihre Sehgewohnheiten. Für Sport und Arbeit, zum Lesen, am PC, im Auto oder zum Sonnenschutz: Entscheidend ist, was Sie im Alltag brauchen.", "Wir analysieren gemeinsam Ihre Wünsche und Ihren Sehbedarf. Ich berate. Sie entscheiden."],
    images: [{ src: original("visionix.png"), alt: "Das Visionix-Messgerät für die präzise Sehanalyse", caption: "Visionix 120. Präzision für Ihren Blick.", fit: "contain" }],
    notes: [{ title: "Zeit für Genauigkeit.", text: "Eine passende Brille beginnt mit einer sorgfältigen Sehanalyse. Dafür nehmen wir uns Zeit." }],
  },
  ruckblick: {
    number: "1936", label: "Rückblick", title: ["In Dresden.", "Seit 1936."],
    introduction: "Ein Name. Viele Kapitel.",
    paragraphs: ["Am 1. April 1936 eröffnet Bernhard Schorcht sein Fachgeschäft in der Wallstraße 8. Nach der Zerstörung Dresdens beginnt 1946 ein neues Kapitel in der Stiftstraße.", "Johannes Schorcht führt das Geschäft über die Freiberger Straße in die Schweriner Straße. 1989 übernimmt Joachim Skorupa das Geschäft und führt den vertrauten Namen weiter.", "Nach dem Hochwasser von 2002 und einer Zeit im Ausweichgeschäft finden wir 2003 unser neues Zuhause in der Kleinen Brüdergasse 1.", "Über all die Jahre geblieben: die Freude an der Augenoptik und die Verbundenheit mit unseren Kunden."],
    images: [
      { src: original("Freiberger-Strasse.jpg"), alt: "Historische Aufnahme des Geschäfts Optiker Schorcht in der Freiberger Straße", caption: "Freiberger Straße. Ein Kapitel unserer Geschichte.", fit: "contain" },
      { src: original("AO-Schorcht-Schweriner-Strasse-46.jpg"), alt: "Historische Straßenansicht mit dem Fachgeschäft in der Schweriner Straße", caption: "Schweriner Straße. Vertraut über Jahrzehnte.", fit: "contain" },
      { src: original("Bergungsgenehmigung-1946.jpg"), alt: "Die historische Bergungsgenehmigung aus dem Jahr 1946", caption: "1946. Ein Dokument des Neuanfangs.", fit: "contain" },
      { src: original("haus.jpg"), alt: "Das Haus am heutigen Standort in der Dresdner Altstadt", caption: "Kleine Brüdergasse 1. Unser Zuhause seit 2003." },
    ],
  },
};
