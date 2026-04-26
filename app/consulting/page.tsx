import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consulting",
  description: "Consulting — accompagnement conseil.",
};

const consultingIntroCopy =
  "Vous souhaitez optimiser l'organisation, renforcer la cohésion de groupe, améliorer la performance et définir une stratégie pour votre entreprise, notre expertise dans ces différents domaines nous permet de vous accompagner de l'audit à la mise en oeuvre opérationnelle de solutions concrètes et performantes.";

export default function ConsultingPage() {
  return (
    <div className="page-consulting">
      <h1 className="page-enjeux__visually-hidden">Consulting</h1>
      <div className="page-consulting__banner" aria-hidden="true" />
      <div className="page-consulting__intro-box">
        <p className="page-consulting__intro-text">{consultingIntroCopy}</p>
      </div>
      <section className="page-consulting__square-grid" aria-label="Offres consulting">
        {Array.from({ length: 9 }, (_, i) => (
          <div key={i} className="page-consulting__square">
            <div className="page-consulting__square-fill" aria-hidden="true" />
            <Link href="/articles#contact" className="button button-primary page-consulting__square-cta">
              En savoir plus
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
