import type { Metadata } from "next";
import Link from "next/link";

import { coachingOffers } from "@/data/service-offers";
import { siteMainHeroBannerImage } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Coaching",
  description: "Coaching — Osmose Conseils & Services.",
};

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
          {coachingOffers.map((offer) => (
            <div key={offer.slug} className={`page-coaching__square ${offer.visualClass}`}>
              <div className="page-consulting__square-body">
                <p className="page-consulting__square-name">{offer.gridTitle}</p>
              </div>
              <Link href={`/coaching/${offer.slug}`} className="button button-primary page-consulting__square-cta">
                En savoir plus
              </Link>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
