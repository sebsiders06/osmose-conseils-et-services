import type { Metadata } from "next";
import Link from "next/link";

import { company, osmosePage } from "@/data/site-content";

export const metadata: Metadata = {
  title: "OSMOSE",
  description: `${company.name} — ${company.tagline}`,
};

const skylineHeroBannerSrc = "/images/skyline-hero-banner.png";

export default function OsmosePage() {
  return (
    <div className="page-osmose">
      <div className="page-osmose__hero">
        <img
          alt=""
          className="page-osmose__hero-img"
          height={640}
          src={skylineHeroBannerSrc}
          width={1920}
        />
        <div className="page-osmose__hero-overlay">
          <div className="container">
            <h1 className="page-osmose-hero__title" id="osmose-heading">
              <span className="page-osmose-hero__title-line page-osmose-hero__title-line--primary">
                {osmosePage.title}
              </span>
              <span className="page-osmose-hero__title-line page-osmose-hero__title-line--sub">
                {osmosePage.lead}
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="page-osmose__content">
        <section className="page-osmose__intro" aria-label="Présentation">
          <div className="container">
            <p className="page-osmose__text">{company.accent}</p>
            <p className="page-osmose__cta-wrap">
              <Link className="button button-primary" href="/">
                Page d&apos;accueil
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
