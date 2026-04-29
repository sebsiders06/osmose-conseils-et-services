import type { Metadata } from "next";
import Link from "next/link";

import { coachingSquareOffers, siteMainHeroBannerImage } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Coaching",
  description: "Coaching — Osmose Conseils & Services.",
};

const tileClass = (i: number) => `page-coaching__square--tile-${String(i + 1).padStart(2, "0")}`;

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
          <h1 className="page-coaching-hero__title" id="coaching-heading">
            <span className="page-coaching-hero__title-line page-coaching-hero__title-line--primary">COACHING</span>
            <span className="page-coaching-hero__title-line page-coaching-hero__title-line--sub">
              Accompagnement personnalisé
            </span>
          </h1>
        </div>
      </div>
      <div className="page-coaching__content">
        <section className="page-coaching__square-grid" aria-label="Offres coaching">
          {coachingSquareOffers.map((name, i) => (
            <div
              key={name}
              className={["page-coaching__square", tileClass(i)].join(" ")}
              aria-label={`${i + 1}. ${name}`}
            >
              <div className="page-consulting__square-body">
                <span className="page-coaching__square-num">{i + 1}</span>
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
