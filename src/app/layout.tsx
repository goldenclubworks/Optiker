import type { Metadata, Viewport } from "next";
import { Archivo, Archivo_Narrow, Courier_Prime, Source_Serif_4 } from "next/font/google";
import { contact, openingHours, site } from "@/content/site";
import "./globals.css";

// Schriften werden beim Build heruntergeladen und von der eigenen Domain
// ausgeliefert – Besucher stellen keine Verbindung zu Google her.
const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
// Schmale Schrift für Etiketten und Jahreszahlen – wie auf dem alten Ladenschild.
const narrow = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-narrow",
  display: "swap",
  preload: false,
});
const typewriter = Courier_Prime({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-typewriter",
  display: "swap",
  preload: false,
});

const description =
  "Augenoptikermeister Joachim Skorupa in der Kleinen Brüdergasse 1, Dresden-Altstadt: Sehtest mit 3D-Refraktion, Brillen, Kontaktlinsen und Werkstatt. Seit 1936. Tel. 0351 49 01 510.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Optiker in Dresden-Altstadt seit 1936 | Optik Schorcht",
    template: "%s | Optik Schorcht Dresden",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Optik Schorcht",
    title: "Optik Schorcht – Sehen erleben. In Dresden seit 1936.",
    description,
    images: [{ url: "/images/laden/lampen-theke.jpg", width: 1600, height: 1851, alt: "Die Brillenwand bei Optik Schorcht" }],
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#faf6ee",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Optician",
  "@id": `${site.url}/#optiker`,
  name: "Optik Schorcht",
  url: site.url,
  logo: `${site.url}/icon.svg`,
  image: [`${site.url}/images/laden/lampen-theke.jpg`, `${site.url}/images/schorcht/start04.jpg`],
  telephone: contact.phone,
  email: contact.email,
  foundingDate: String(site.founded),
  founder: { "@type": "Person", name: "Bernhard Schorcht" },
  employee: { "@type": "Person", name: site.owner, jobTitle: site.ownerTitle },
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.street,
    postalCode: contact.zip,
    addressLocality: contact.city,
    addressRegion: "Sachsen",
    addressCountry: "DE",
  },
  hasMap: contact.mapsUrl,
  areaServed: "Dresden",
  openingHoursSpecification: openingHours
    .filter((entry) => entry.from)
    .map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][entry.day]}`,
      opens: entry.from,
      closes: entry.to,
    })),
  knowsAbout: ["Sehtest", "Brillen", "Kontaktlinsen", "Gleitsichtbrillen", "Holzbrillen"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${serif.variable} ${sans.variable} ${narrow.variable} ${typewriter.variable}`}>
      <body>
        <a className="skip-link" href="#inhalt">
          Zum Inhalt springen
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
