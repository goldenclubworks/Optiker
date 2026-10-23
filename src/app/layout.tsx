import type { Metadata } from "next";
import { Manrope, Inter_Tight, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const sans = Manrope({ variable: "--font-outfit", subsets: ["latin"], display: "swap" });
const display = Inter_Tight({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://optik-schorcht.de"),
  title: { default: "OPTIK SCHORCHT · Sehen erleben. · Dresden", template: "%s | OPTIK SCHORCHT Dresden" },
  description: "Sehen erleben. Tradition trifft Innovation. Persönliche Augenoptik in Dresdens Mitte seit 1936. Brillen, Kontaktlinsen und präzise Sehanalyse.",
  openGraph: { type: "website", locale: "de_DE", siteName: "OPTIK SCHORCHT", title: "OPTIK SCHORCHT · Sehen erleben.", description: "ZEIT nehmen. ZEIT haben. Für Ihre Augen. Für Ihre Wünsche. In Dresden seit 1936." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body id="top" className={`${sans.variable} ${display.variable} ${mono.variable} font-sans antialiased`}><a className="skip-link" href="#main-content">Zum Inhalt springen</a>{children}<Toaster position="top-center" richColors closeButton /></body></html>;
}
