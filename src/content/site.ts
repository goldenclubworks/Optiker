// =============================================================================
// OPTIK SCHORCHT – CENTRALIZED SITE CONTENT
// =============================================================================

export const siteConfig = {
  name: "OPTIK SCHORCHT",
  claim: "Sehen erleben.",
  description:
    "Tradition trifft Innovation. Persönliche Beratung in Dresden – ZEIT nehmen, ZEIT haben. Für Ihre Augen.",
  url: "https://www.optik-schorcht.de",
  owner: "Joachim Skorupa",
  ownerTitle: "Augenoptikermeister",
} as const;

// -----------------------------------------------------------------------------
// Contact & Location
// -----------------------------------------------------------------------------

export const contact = {
  phone: "+493514901510",
  phoneDisplay: "0351 / 49 01 510",
  email: "optik.schorcht@euronet-server.com",
  address: {
    street: "Kleine Brüdergasse 1",
    building: "das lebendige Haus",
    zip: "01067",
    city: "Dresden",
    full: "Kleine Brüdergasse 1 (das lebendige Haus), 01067 Dresden",
  },
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Optik+Schorcht+Kleine+Brüdergasse+1+Dresden",
  bookingUrl:
    "https://www.sehen.de/augenoptiker-suche/dresden/01067/augenoptik-schorcht/terminanfrage/",
} as const;

export const openingHours = [
  { day: "Montag", hours: "09:00 – 18:00" },
  { day: "Dienstag", hours: "09:00 – 18:00" },
  { day: "Mittwoch", hours: "Geschlossen" },
  { day: "Donnerstag", hours: "09:00 – 18:00" },
  { day: "Freitag", hours: "09:00 – 18:00" },
  { day: "Samstag", hours: "Nach Vereinbarung" },
  { day: "Sonntag", hours: "Geschlossen" },
] as const;

// Legal info for Impressum
export const legalInfo = {
  ustId: "DE 140 192 670",
  chamber: "Handwerkskammer Dresden",
  chamberAddress: "Am Lagerplatz 8, 01099 Dresden",
  chamberUrl: "https://www.hwk-dresden.de/",
  profession: "Augenoptikermeister",
  professionRegulation: "Handwerksordnung",
  professionRegulationUrl: "https://www.gesetze-im-internet.de/hwo/index.html",
} as const;

// -----------------------------------------------------------------------------
// Navigation (inspired by "Blick" theme from original)
// -----------------------------------------------------------------------------

export const navigation = {
  main: [
    { label: "Überblick", href: "/" },
    { label: "Leistungen", href: "/leistungen" },
    { label: "Brillen", href: "/brillen" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
} as const;

// -----------------------------------------------------------------------------
// Hero Section
// -----------------------------------------------------------------------------

export const hero = {
  headline: "Sehen erleben.",
  subline:
    "Tradition trifft Innovation. ZEIT nehmen. ZEIT haben. Für Ihre Augen. Für Ihre Wünsche.",
  ownerQuote: "Ich will, dass Sie Sehen erleben.",
  owner: "Joachim Skorupa",
  cta: {
    primary: { label: "Termin vereinbaren", href: contact.bookingUrl },
    secondary: { label: "Anrufen", href: `tel:${contact.phone}` },
  },
  trustItems: [
    "Qualität",
    "Funktion",
    "Sicherheit",
    "Verlässlichkeit",
  ],
} as const;

// -----------------------------------------------------------------------------
// Trust Bar (Features from old site)
// -----------------------------------------------------------------------------

export const trustFeatures = [
  {
    icon: "Clock",
    title: "Zeit für Sie",
    description: "Wir nehmen uns Zeit. Fühlen Sie sich wohl.",
  },
  {
    icon: "Shield",
    title: "24 Monate Garantie",
    description: "Verträglichkeitsgarantie. Unser Versprechen.",
  },
  {
    icon: "Home",
    title: "Hausbesuch",
    description: "Bei Bedarf kommen wir gern zu Ihnen.",
  },
  {
    icon: "Wrench",
    title: "Werkstatt-Service",
    description: "Lockere Schrauben? Wir richten es.",
  },
  {
    icon: "CreditCard",
    title: "BRILLENABO",
    description: "Zinslos in 12 oder 24 Raten bezahlen.",
  },
] as const;

// -----------------------------------------------------------------------------
// Services (from old site pages)
// -----------------------------------------------------------------------------

export const services = [
  {
    id: "durchblick",
    icon: "Eye",
    title: "Durchblick – Seh Analyse",
    shortDescription: "3D-Refraktion für ein neues Seherlebnis",
    description:
      "Brillenglasbestimmung in einer neuen Dimension. Visionix 120 – wellenfrontgestützte Messung für mehr Sehschärfe, mehr Kontrast, komfortables Sehen.",
    benefits: [
      "Visionix 120 3D-Refraktion",
      "Mehr Sehschärfe & Kontrast",
      "Für Sport, Arbeit, PC, Auto",
    ],
    href: "/leistungen#durchblick",
  },
  {
    id: "anblick",
    icon: "Sparkles",
    title: "Anblick – Stilberatung",
    shortDescription: "Ihr Gesicht. Meine Inspiration.",
    description:
      "Aussehen. Durchsehen. Ich suche, was Sie haben wollen. Markant. Sportlich. Elegant. Ihre neue Brille – Ihr wichtigstes Accessoire.",
    benefits: [
      "Persönliche Typberatung",
      "Gesichtsform-Analyse",
      "Sie wählen. Ich berate.",
    ],
    href: "/leistungen#anblick",
  },
  {
    id: "rundblick",
    icon: "CircleDot",
    title: "Rundblick – Kontaktlinsen",
    shortDescription: "Kontakt mit dem fast Unsichtbaren",
    description:
      "Kontaktlinsen individuell. Weich. Formstabil. Multifokal. Hornhaut-Topographie, mikrogenau, sekundenschnell. Auf Wunsch im zinslosen Abo.",
    benefits: [
      "Individuelle Anpassung",
      "Hornhaut-Topographie",
      "Pflegemittel-Abo möglich",
    ],
    href: "/leistungen#rundblick",
  },
  {
    id: "weitblick",
    icon: "Gem",
    title: "Weitblick – Service und Sicherheit",
    shortDescription: "Wir sind für Sie da",
    description:
      "Perfekter Sehkomfort – unser Ziel. Ihre Zufriedenheit – unser Anspruch. Markengläser von SEIKO mit 12 Monaten Verträglichkeitsgarantie.",
    benefits: [
      "SEIKO Markengläser",
      "12 Monate Verträglichkeitsgarantie",
      "Auswahl nach Hause",
    ],
    href: "/leistungen#weitblick",
  },
] as const;

// -----------------------------------------------------------------------------
// Steps (How it works)
// -----------------------------------------------------------------------------

export const steps = [
  {
    number: "01",
    title: "Kennenlernen",
    description:
      "Fühlen Sie sich wohl. Seien Sie unser Gast. Selters. Saft. Kaffee. Espresso. Wir nehmen uns Zeit für Ihre Wünsche.",
  },
  {
    number: "02",
    title: "Messung & Beratung",
    description:
      "Sehanalyse mit Visionix 120. Sehgewohnheiten und Bedürfnisse analysieren. Ich berate, Sie entscheiden.",
  },
  {
    number: "03",
    title: "Perfekte Anpassung",
    description:
      "Ihre neue Brille wird perfekt justiert. Bei Problemen: kostenlose Nachbesserung. Wir sind für Sie da.",
  },
] as const;

// -----------------------------------------------------------------------------
// Testimonials
// -----------------------------------------------------------------------------

export const testimonials = [
  {
    quote:
      "Kompetente und persönliche Beratung. Herr Skorupa nimmt sich wirklich Zeit für jeden Kunden.",
    author: "Kundin aus Dresden-Altstadt",
    role: "Gleitsichtbrille",
  },
  {
    quote:
      "Endlich jemand, der meine Kontaktlinsen richtig anpasst. Die Hornhaut-Messung war beeindruckend präzise.",
    author: "Stammkunde",
    role: "Kontaktlinsen",
  },
  {
    quote:
      "Kleine Brüdergasse ist immer einen Besuch wert. Persönlich, professionell und menschlich.",
    author: "Kunde aus Blasewitz",
    role: "Neue Brille",
  },
  {
    quote:
      "Das BRILLENABO macht es einfach, sich eine hochwertige Brille zu leisten. Toller Service!",
    author: "Kundin",
    role: "Ratenzahlung",
  },
] as const;

// -----------------------------------------------------------------------------
// Lookbook / Frames
// -----------------------------------------------------------------------------

export const lookbook = {
  headline: "Ihr Gesicht. Meine Inspiration.",
  subline:
    "Markant. Sportlich. Elegant. Ich habe, was Sie suchen.",
  items: [
    { image: "/images/lookbook-1.jpg", alt: "Elegante Acetat-Fassung" },
    { image: "/images/lookbook-2.jpg", alt: "Klassische Metallfassung" },
  ],
} as const;

// -----------------------------------------------------------------------------
// Location CTA
// -----------------------------------------------------------------------------

export const locationCta = {
  headline: "Besuchen Sie uns in Dresden",
  subline:
    "Im lebendigen Haus, Kleine Brüdergasse 1. Wir freuen uns auf Sie.",
} as const;

// -----------------------------------------------------------------------------
// Final CTA
// -----------------------------------------------------------------------------

export const finalCta = {
  headline: "Termin vereinbaren",
  subline:
    "Vereinbaren Sie Ihren persönlichen Beratungstermin. Wir nehmen uns Zeit für Sie.",
  buttonLabel: "Jetzt Termin anfragen",
  buttonHref: contact.bookingUrl,
} as const;

// -----------------------------------------------------------------------------
// Appointment Form Options
// -----------------------------------------------------------------------------

export const appointmentOptions = {
  days: [
    { value: "mo", label: "Mo" },
    { value: "di", label: "Di" },
    { value: "do", label: "Do" },
    { value: "fr", label: "Fr" },
    { value: "sa", label: "Sa" },
  ],
  timeSlots: [
    { value: "vormittag", label: "Vormittag" },
    { value: "nachmittag", label: "Nachmittag" },
    { value: "egal", label: "Egal" },
  ],
  concerns: [
    { value: "sehtest", label: "Sehtest / Refraktion" },
    { value: "brille", label: "Neue Brille" },
    { value: "kontaktlinsen", label: "Kontaktlinsen" },
    { value: "reparatur", label: "Reparatur / Anpassung" },
    { value: "beratung", label: "Allgemeine Beratung" },
  ],
} as const;

// -----------------------------------------------------------------------------
// SEO Metadata per Page
// -----------------------------------------------------------------------------

export const pageMeta = {
  home: {
    title: "OPTIK SCHORCHT Dresden – Sehen erleben",
    description:
      "Ihr Optiker in Dresden. Tradition trifft Innovation. Persönliche Beratung, 3D-Refraktion, Kontaktlinsen und Werkstattservice.",
  },
  leistungen: {
    title: "Leistungen – OPTIK SCHORCHT Dresden",
    description:
      "Durchblick (Sehanalyse), Anblick (Stilberatung), Rundblick (Kontaktlinsen), Weitblick (Service). Erfahren Sie mehr.",
  },
  brillen: {
    title: "Brillen & Stilberatung – OPTIK SCHORCHT Dresden",
    description:
      "Ihr Gesicht. Meine Inspiration. Markante, sportliche und elegante Brillen. Individuelle Beratung von Joachim Skorupa.",
  },
  termin: {
    title: "Termin vereinbaren – OPTIK SCHORCHT Dresden",
    description:
      "Vereinbaren Sie Ihren persönlichen Beratungstermin bei OPTIK SCHORCHT in Dresden. Wir nehmen uns Zeit.",
  },
  kontakt: {
    title: "Kontakt & Anfahrt – OPTIK SCHORCHT Dresden",
    description:
      "Kleine Brüdergasse 1, 01067 Dresden (das lebendige Haus). Öffnungszeiten und Anfahrt zu OPTIK SCHORCHT.",
  },
  impressum: {
    title: "Impressum – OPTIK SCHORCHT Dresden",
    description: "Impressum und rechtliche Angaben zu OPTIK SCHORCHT Dresden. Inhaber: Joachim Skorupa.",
  },
  datenschutz: {
    title: "Datenschutz – OPTIK SCHORCHT Dresden",
    description:
      "Datenschutzerklärung von OPTIK SCHORCHT Dresden. Informationen zur Verarbeitung personenbezogener Daten.",
  },
} as const;
