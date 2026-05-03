import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";

import { coachingOffers, titleForMetaMultiline } from "@/data/service-offers";
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
          {coachingOffers.map((offer, i) => (
            <Link
              key={offer.slug}
              href={`/coaching/${offer.slug}`}
              className={`page-coaching__square page-coaching__square--link-card ${offer.visualClass}`}
              aria-label={`${titleForMetaMultiline(offer.gridTitle)} — voir la fiche`}
            >
              <div className="page-consulting__square-body">
                <span className="page-coaching__square-num" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="page-consulting__square-name page-coaching__square-card-title">
                  {offer.gridTitle.split("\n").map((line, lineIdx) => (
                    <Fragment key={`${offer.slug}-${lineIdx}`}>
                      {lineIdx > 0 ? <br /> : null}
                      {line}
                    </Fragment>
                  ))}
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
