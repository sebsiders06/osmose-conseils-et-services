import type { Metadata } from "next";
import Link from "next/link";

import { consultingPage, siteMainHeroBannerImage } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Consulting",
  description: "Consulting — accompagnement conseil.",
};

const consultingIntroCopy =
  "Vous souhaitez optimiser l'organisation, renforcer la cohésion de groupe, améliorer la performance et définir une stratégie pour votre entreprise : notre expertise dans ces différents domaines nous permet de vous accompagner de l'audit à la mise en œuvre opérationnelle de solutions concrètes et performantes.";

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
      <div className="page-consulting__hero">
        <img
          alt=""
          className="page-consulting__hero-img"
          height={640}
          src={siteMainHeroBannerImage}
          width={1920}
        />
        <div className="page-consulting__hero-overlay">
          <div className="container">
            <h1 className="page-consulting-hero__title" id="consulting-heading">
              <span className="page-consulting-hero__title-line page-consulting-hero__title-line--primary">
                {consultingPage.title}
              </span>
              <span className="page-consulting-hero__title-line page-consulting-hero__title-line--sub">
                {consultingPage.lead}
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="page-consulting__content">
        <div className="page-consulting__intro-box">
          <p className="page-consulting__intro-text">{consultingIntroCopy}</p>
        </div>
        <section className="page-consulting__square-grid" aria-label="Offres consulting">
          {consultingSquareNames.map((name, i) => (
            <div
              key={i}
              className={[
                "page-consulting__square",
                i === 0 ? "page-consulting__square--reorg-exploitation" : "",
                i === 1 ? "page-consulting__square--cohesion-equipe" : "",
                i === 2 ? "page-consulting__square--optimisation-organisations-rh" : "",
                i === 3 ? "page-consulting__square--gestion-changement" : "",
                i === 4 ? "page-consulting__square--gestion-conflits-sociaux" : "",
                i === 5 ? "page-consulting__square--accompagnement-dirigeant" : "",
                i === 6 ? "page-consulting__square--mediation-partenaires-sociaux" : "",
                i === 7 ? "page-consulting__square--mediation-prudhomale" : "",
                i === 8 ? "page-consulting__square--audit-organisationnel" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
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
