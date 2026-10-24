import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="inhalt" className="legal">
        <div className="shell">
          <h1>Da sehen wir leider nichts.</h1>
          <p>Diese Seite gibt es nicht (mehr). Vielleicht hilft Ihnen die Startseite weiter.</p>
          <p>
            <Link className="text-link" href="/">
              Zur Startseite
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
