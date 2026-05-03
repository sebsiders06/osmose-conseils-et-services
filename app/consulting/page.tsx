import type { Metadata } from "next";
import Link from "next/link";

import { consultingOffers } from "@/data/service-offers";
import { consultingPage, siteMainHeroBannerImage } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Consulting",
  description: "Consulting — accompagnement conseil.",
};

const consultingIntroCopy =
  "Vous souhaitez optimiser l'organisation, renforcer la cohésion de groupe, améliorer la performance et définir une stratégie pour votre entreprise : notre expertise dans ces différents domaines nous permet de vous accompagner de l'audit à la mise en œuvre opérationnelle de solutions concrètes et performantes.";

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
          {consultingOffers.map((offer) => (
            <Link
              key={offer.slug}
              href={`/consulting/${offer.slug}`}
              className={`page-consulting__square ${offer.visualClass}`}
            >
              <div className="page-consulting__square-body">
                <p className="page-consulting__square-name">{offer.gridTitle}</p>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
