import type { Metadata } from "next";
import Link from "next/link";

import { siteMainHeroBannerImage } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Coaching",
  description: "Coaching — Osmose Conseils & Services.",
};

/** Un libellé par carré (10 offres) — lignes séparées par \n pour l’affichage. */
const coachingSquareNames = [
  `ORIENTATION PROFESSIONNELLE
RETOUR À L’EMPLOI`,
  `CHANGEMENT DE VIE
ÉVOLUTION PROFESSIONNELLE`,
  `ÉQUILIBRE
VIE PRIVÉE / TRAVAIL`,
  `AIDE À LA RÉSOLUTION
DE CONFLITS`,
  "GESTION DU STRESS",
  "GESTION DU TEMPS",
  `CONFIANCE
EN SOI`,
  `PRISE DE PAROLE
EN PUBLIC`,
  `PRÉPARATION À UNE SOUTENANCE
ENTRETIEN PROFESSIONNEL`,
  `PRÉPARATION MENTALE AVANT
UNE ÉCHÉANCE IMPORTANTE`,
] as const;

function coachingTileModifier(i: number): string {
  return `page-coaching__square--tile-${String(i + 1).padStart(2, "0")}`;
}

export default function CoachingPage() {
  return (
    <div className="page-coaching">
      <div className="page-coaching__hero">
        <img
          alt=""
          className="page-coaching__hero-img"
          height={640}
          src={siteMainHeroBannerImage}
          width={1920}
        />
        <div className="page-coaching__hero-overlay">
          <div className="container">
            <h1 className="page-coaching-hero__title" id="coaching-heading">
              <span className="page-coaching-hero__title-line page-coaching-hero__title-line--primary">COACHING</span>
              <span className="page-coaching-hero__title-line page-coaching-hero__title-line--sub">
                Accompagnement personnalisé
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="page-coaching__content">
        <section className="page-coaching__square-grid" aria-label="Offres coaching">
          {coachingSquareNames.map((name, i) => (
            <div key={i} className={`page-coaching__square ${coachingTileModifier(i)}`}>
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
