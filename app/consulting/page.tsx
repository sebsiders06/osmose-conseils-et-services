import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consulting",
  description: "Consulting — accompagnement conseil.",
};

const consultingIntroCopy =
  "Vous souhaitez optimiser l'organisation, renforcer la cohésion de groupe, améliorer la performance et définir une stratégie pour votre entreprise, notre expertise dans ces différents domaines nous permet de vous accompagner de l'audit à la mise en oeuvre opérationnelle de solutions concrètes et performantes.";

/** Un libellé par carré (9 offres). */
const consultingSquareNames = [
  "RÉORGANISATION D'ÉQUIPE — EXPLOITATION / COMMERCIALE",
  "COHÉSION D'ÉQUIPE",
  "OPTIMISATION DES ORGANISATIONS — STRATÉGIE RH",
  "GESTION DU CHANGEMENT",
  "GESTION DE CONFLITS SOCIAUX",
  "ACCOMPAGNEMENT DU DIRIGEANT",
  "MÉDIATION ET NÉGOCIATION AVEC LES PARTENAIRES SOCIAUX",
  "MÉDIATION PRUD'HOMALE",
  "AUDIT ORGANISATIONNEL",
] as const;

export default function ConsultingPage() {
  return (
    <div className="page-consulting">
      <div className="page-consulting__hero" aria-hidden="true">
        <img
          className="page-consulting__hero-img"
          src="/images/consulting-hero-banner.png"
          alt=""
          width={1920}
          height={640}
        />
      </div>
      <div className="page-consulting__content">
        <h1 className="page-enjeux__visually-hidden">Consulting</h1>
        <div className="page-consulting__intro-box">
          <p className="page-consulting__intro-text">{consultingIntroCopy}</p>
        </div>
        <section className="page-consulting__square-grid" aria-label="Offres consulting">
          {consultingSquareNames.map((name, i) => (
            <div key={i} className="page-consulting__square">
              <div className="page-consulting__square-body">
                <p className="page-consulting__square-name">{name}</p>
              </div>
              <Link href="/articles#contact" className="button button-primary page-consulting__square-cta">
                En savoir plus
              </Link>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
