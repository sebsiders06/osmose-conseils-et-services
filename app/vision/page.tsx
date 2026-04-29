import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision",
  description: "Vision — performance et retour sur investissement.",
};

const skylineHeroBannerSrc = "/images/skyline-hero-banner.png";

export default function VisionPage() {
  return (
    <div className="page-vision">
      <div className="page-vision__hero">
        <img
          alt=""
          className="page-vision__hero-img"
          height={640}
          src={skylineHeroBannerSrc}
          width={1920}
        />
        <div className="page-vision__hero-overlay">
          <h1 className="page-vision-hero__title">
            <span className="page-vision-hero__title-line page-vision-hero__title-line--primary">VISION</span>
            <span className="page-vision-hero__title-line page-vision-hero__title-line--sub">
              Performance et retour sur investissement
            </span>
          </h1>
        </div>
      </div>

      <section className="page-vision__panel" aria-labelledby="vision-performance-bien-etre-heading">
        <div className="container">
          <div className="page-vision__card">
            <h2 className="page-vision__card-heading" id="vision-performance-bien-etre-heading">
              <span className="page-vision__card-heading-line">Performance</span>
              <span className="page-vision__card-heading-line">et bien être</span>
            </h2>
            <p className="page-vision__card-p">
              La mission que nous nous sommes fixée est d&apos;accompagner les entreprises, dirigeants et managers
              dans l&apos;optimisation organisationnelle, le développement et la mise en oeuvre du capital humain au
              service de la performance et du bien être.
            </p>
            <p className="page-vision__card-p page-vision__card-p--accent">
              Assurer votre réussite professionnelle tout en préservant votre équilibre personnel.
            </p>
          </div>
        </div>
      </section>

      <section className="page-vision__panel" aria-labelledby="vision-confidentialite-heading">
        <div className="container">
          <div className="page-vision__card">
            <h2 className="page-vision__card-heading" id="vision-confidentialite-heading">
              <span className="page-vision__card-heading-line">Une pleine et entière confidentialité</span>
            </h2>
            <p className="page-vision__card-p">
              L&apos;éthique est une notion fondamentale. C&apos;est pourquoi, nous appliquons un code de déontologie
              strict. Osmose s&apos;engage et vous garantit une totale confidentialité dans notre relation et nos
              échanges.
            </p>
          </div>
        </div>
      </section>

      <section className="page-vision__panel" aria-labelledby="vision-roi-heading">
        <div className="container">
          <div className="page-vision__card page-vision__card--roi">
            <h2 className="page-vision__card-heading" id="vision-roi-heading">
              <span className="page-vision__card-heading-line">Retour sur</span>
              <span className="page-vision__card-heading-line">investissement</span>
            </h2>
            <p className="page-vision__card-p">
              Consulting et coaching sont des démarches pragmatiques et complémentaires. Elles permettent
              l&apos;identification des priorités et la définition d&apos;objectifs clairs et mesurables dans le temps.
            </p>
            <p className="page-vision__card-p page-vision__card-p--accent">
              Notre mission est de vous assurer un retour sur investissement maximal et durable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
