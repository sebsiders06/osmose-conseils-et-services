import type { Metadata } from "next";
import Link from "next/link";

import { formationPageHeroBannerImage, formationPanelOrBackgroundImage } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Formation — L'essentiel du management",
  description:
    "L'essentiel du management : formation en présentiel sur deux jours pour managers en poste ou futurs managers — fondamentaux, communication et encadrement d'équipe.",
};

export default function FormationPage() {
  return (
    <div className="page-formation">
      <div className="page-formation__hero">
        <img
          alt=""
          className="page-formation__hero-img"
          height={640}
          src={formationPageHeroBannerImage}
          width={1920}
        />
        <div className="page-formation__hero-overlay">
          <h1 className="page-formation-hero__title" id="formation-page-heading">
            <span className="page-formation-hero__title-line page-formation-hero__title-line--primary">FORMATION</span>
            <span className="page-formation-hero__title-line page-formation-hero__title-line--sub">
              L&apos;essentiel du management
            </span>
          </h1>
        </div>
      </div>

      <section className="page-formation__body" aria-labelledby="formation-page-heading">
        <div className="container page-formation__inner">
          <div className="page-formation__article">
            <div className="page-formation__panel page-formation__panel--or page-formation__panel--lead">
              <img
                alt=""
                className="page-formation__panel__bg"
                src={formationPanelOrBackgroundImage}
                width={2400}
                height={1600}
                decoding="async"
              />
              <p>
                Destinée aux nouveaux managers ou aux managers en poste, désireux d&apos;avoir une vision synthétique des
                fondamentaux du management d&apos;équipe, avec l&apos;envie de revoir ou revisiter l&apos;essentiel des
                techniques d&apos;un encadrement efficace.
              </p>
              <p>
                Grâce à un contenu adaptable, les thématiques de cette formation peuvent être déclinées individuellement
                selon les besoins et les objectifs à atteindre.
              </p>
              <p className="page-formation__methods">
                Simples, ludiques et très opérationnelles, les méthodes sont applicables immédiatement.
              </p>
            </div>

            <div className="page-formation__panel page-formation__panel--or">
              <img
                alt=""
                className="page-formation__panel__bg"
                src={formationPanelOrBackgroundImage}
                width={2400}
                height={1600}
                decoding="async"
              />
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

            <div className="page-formation__panel page-formation__panel--or">
              <img
                alt=""
                className="page-formation__panel__bg"
                src={formationPanelOrBackgroundImage}
                width={2400}
                height={1600}
                decoding="async"
              />
              <h2 className="page-formation__heading">Thématique</h2>
              <p>
                En changeant les comportements des managers, les organisations améliorent la performance de leurs
                équipes. Un bon manager s&apos;implique, mobilise, motive ses équipes en s&apos;appuyant sur une
                communication efficace.
              </p>
            </div>

            <div className="page-formation__panel page-formation__panel--or">
              <img
                alt=""
                className="page-formation__panel__bg"
                src={formationPanelOrBackgroundImage}
                width={2400}
                height={1600}
                decoding="async"
              />
              <h2 className="page-formation__heading">L&apos;objectif</h2>
              <p>
                Être capable de faire passer des messages et des décisions avec cohérence, en fédérant des profils très
                variés auxquels le manager doit s&apos;adapter pour obtenir une pleine et entière collaboration.
              </p>
            </div>
          </div>

          <div className="page-formation__actions">
            <Link className="button page-formation__cta-inscription" href="/contact">
              S&apos;inscrire
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
