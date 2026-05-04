import type { Metadata } from "next";
import Link from "next/link";

import { siteMainHeroBannerImage } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Formation — L'essentiel du management",
  description:
    "L'essentiel du management : formation en présentiel sur deux jours pour managers en poste ou futurs managers — fondamentaux, communication et encadrement d'équipe.",
};

export default function FormationPage() {
  return (
    <div className="page-formation">
      <section className="page-hero page-hero--banner" aria-labelledby="formation-page-heading">
        <div className="page-subpage-hero">
          <img
            alt=""
            className="page-subpage-hero__img"
            height={640}
            src={siteMainHeroBannerImage}
            width={1920}
          />
          <div className="page-subpage-hero__overlay">
            <div className="container">
              <p className="eyebrow">Formation</p>
              <h1 id="formation-page-heading">L&apos;essentiel du management</h1>
              <p className="page-hero-copy">Thématiques selon vos besoins.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="page-formation__body" aria-label="Programme">
        <div className="container page-formation__inner">
          <div className="page-formation__article">
            <p>
              Destinée aux nouveaux managers ou aux managers en poste, désireux d&apos;avoir une vision synthétique des
              fondamentaux du management d&apos;équipe, avec l&apos;envie de visiter ou revisiter l&apos;essentiel des
              techniques d&apos;un encadrement efficace.
            </p>
            <p>
              Adaptable dans son contenu, les thématiques de cette formation peuvent être déclinées individuellement
              selon les besoins et les objectifs à atteindre.
            </p>
            <p className="page-formation__methods">
              Simples, ludiques et très opérationnelles, les méthodes sont applicables immédiatement.
            </p>

            <div className="page-formation__panel">
              <h2 className="page-formation__heading">Détails</h2>
              <ul className="page-formation__detail-list">
                <li>
                  <span className="page-formation__detail-label">Accès :</span> En présentiel
                </li>
                <li>
                  <span className="page-formation__detail-label">Durée de la formation :</span> Deux jours en
                  présentiel
                </li>
                <li>
                  <span className="page-formation__detail-label">Public :</span> Manager en poste ou futur manager
                </li>
              </ul>
            </div>

            <div className="page-formation__panel">
              <h2 className="page-formation__heading">Thématique</h2>
              <p>
                En changeant les comportements des managers, les organisations améliorent la performance de leurs
                équipes. Un bon manager s&apos;implique, mobilise, motive ses équipes en s&apos;appuyant sur une
                communication efficace.
              </p>
            </div>

            <div className="page-formation__panel">
              <h2 className="page-formation__heading">L&apos;objectif</h2>
              <p>
                Être capable de faire passer des messages et des décisions avec cohérence, en fédérant des profils très
                variés auxquels le manager doit s&apos;adapter pour obtenir une pleine et entière collaboration.
              </p>
            </div>
          </div>

          <div className="page-formation__actions">
            <Link className="button button-primary" href="/contact">
              Écrivez-nous pour cette formation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
