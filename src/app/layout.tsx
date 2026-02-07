import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Schorcht Optik Dresden – Brillen, so individuell wie du",
    template: "%s | Schorcht Optik",
  },
  description:
    "Persönliche Brillenberatung in Dresden. Sehtest, Stilberatung, Kontaktlinsen und Werkstattservice – alles unter einem Dach.",
  keywords: [
    "Optiker Dresden",
    "Brillen Dresden",
    "Sehtest Dresden",
    "Kontaktlinsen Dresden",
    "Stilberatung Brillen",
  ],
  authors: [{ name: "Schorcht Optik" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Schorcht Optik",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${outfit.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Toaster
          position="top-center"
          richColors
          closeButton
          toastOptions={{
            duration: 4000,
          }}
        />
      </body>
    </html>
  );
}

