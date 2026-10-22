import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const manrope = Manrope({ variable: "--font-outfit", subsets: ["latin"], display: "swap" });
const editorial = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], display: "swap" });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Optik Schorcht · Gutes Sehen. Großer Stil. · Dresden", template: "%s | Optik Schorcht Dresden" },
  description: "Unabhängige Augenoptik in Dresden seit 1936. Persönliche Stilberatung, präzise Sehanalyse und Brillen mit Charakter. Entdecken Sie Ihren neuen Blick.",
  openGraph: { type: "website", locale: "de_DE", siteName: "Optik Schorcht", title: "Optik Schorcht · Gutes Sehen. Großer Stil.", description: "In Dresden verwurzelt. Für Ihren Blick nach vorn. Persönliche Augenoptik seit 1936." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body id="top" className={`${manrope.variable} ${editorial.variable} ${mono.variable} font-sans antialiased`}><a className="skip-link" href="#main-content">Zum Inhalt springen</a>{children}<Toaster position="top-center" richColors closeButton /></body></html>;
}
