import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merci",
  description: "Votre message a bien été envoyé.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="page-contact" style={{ minHeight: "60vh" }}>
      <section className="section">
        <div className="container" style={{ maxWidth: "640px", marginInline: "auto", textAlign: "center" }}>
          <div className="section-heading">
            <h1>Merci pour votre message</h1>
            <p className="section-copy">
              Votre message a bien été transmis. Nous vous répondrons dans les meilleurs délais.
            </p>
            <p style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              <Link className="button button-primary" href="/contact">
                Retour au formulaire
              </Link>
              <Link className="button" href="/">
                Accueil
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
