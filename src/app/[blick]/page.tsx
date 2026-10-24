import { notFound, permanentRedirect } from "next/navigation";

// Adressen der alten Website (z. B. /weitblick) leiten auf den passenden
// Abschnitt der neuen Startseite weiter, damit alte Links und Lesezeichen funktionieren.
const targets: Record<string, string> = {
  ueberblick: "/",
  einblick: "/#einblick",
  anblick: "/#anblick",
  durchblick: "/#durchblick",
  rundblick: "/#rundblick",
  weitblick: "/#weitblick",
  ruckblick: "/#geschichte",
  rueckblick: "/#geschichte",
  angebote: "/#weitblick",
  leistungen: "/#durchblick",
  brillen: "/#anblick",
};

export function generateStaticParams() {
  return Object.keys(targets).map((blick) => ({ blick }));
}

export default async function Page({ params }: { params: Promise<{ blick: string }> }) {
  const { blick } = await params;
  const target = targets[blick];
  if (!target) notFound();
  permanentRedirect(target);
}
