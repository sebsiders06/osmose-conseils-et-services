import type { Metadata } from "next";
import Image from "next/image";

import { expertisesPage, homePhilippeAbout } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Expertises",
  description: "Decouvrez les domaines d'expertise du cabinet : strategie, transformation, leadership, performance commerciale et transmission.",
};

export default function ExpertisesPage() {
  return (
    <div className="page-expertises">
      <section className="page-hero" aria-labelledby="expertises-heading">
        <div className="container">
          <h1 className="page-expertises-hero__title" id="expertises-heading">
            {expertisesPage.title}
          </h1>
          <div className="page-expertises-hero__lead-wrap">
            <p className="page-hero-copy page-expertises-hero__lead">{expertisesPage.lead}</p>
          </div>
        </div>
      </section>
      <section className="expertises-intro-section" aria-label="Périmètre d'intervention">
        <div className="container">
          <div className="expertises-intro-box">
            <p>{expertisesPage.intro1}</p>
            <p>{expertisesPage.intro2}</p>
          </div>
        </div>
      </section>
      <section className="home-philippe-section" aria-labelledby="expertises-philippe">
        <div className="container">
          <div className="home-about-philippe">
            <div className="home-about-philippe__text">
              <p className="home-about-philippe__p" id="expertises-philippe">
                {expertisesPage.philippeText}
              </p>
            </div>
            <div className="home-about-philippe__figure">
              <Image
                alt={homePhilippeAbout.imageAlt}
                className="home-about-philippe__img"
                height={600}
                sizes="(max-width: 800px) 100vw, min(40vw, 400px)"
                src={homePhilippeAbout.imageSrc}
                width={480}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
