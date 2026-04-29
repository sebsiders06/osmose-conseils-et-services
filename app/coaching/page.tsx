import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coaching",
  description: "Coaching — Osmose Conseils & Services.",
};

const coachingHeroBannerSrc = "/images/coaching-hero-banner.png";

export default function CoachingPage() {
  return (
    <div className="page-coaching">
      <div className="page-coaching__hero">
        <img
          alt=""
          className="page-coaching__hero-img"
          height={640}
          src={coachingHeroBannerSrc}
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
    </div>
  );
}
