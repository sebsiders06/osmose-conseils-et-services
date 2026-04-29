import type { Metadata } from "next";
import Image from "next/image";

import { expertisesPage, homePhilippeAbout } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Expertises",
  description: "Decouvrez les domaines d'expertise du cabinet : strategie, transformation, leadership, performance commerciale et transmission.",
};

const expertisesHeroBannerSrc = "/images/expertises-hero-banner.png";

export default function ExpertisesPage() {
  return (
    <div className="page-expertises">
      <div className="page-expertises__hero">
        <img
          alt=""
          className="page-expertises__hero-img"
          height={640}
          src={expertisesHeroBannerSrc}
          width={1920}
        />
        <div className="page-expertises__hero-overlay">
          <div className="container">
            <h1 className="page-expertises-hero__title" id="expertises-heading">
              <span className="page-expertises-hero__title-line page-expertises-hero__title-line--primary">
                {expertisesPage.title}
              </span>
              <span className="page-expertises-hero__title-line page-expertises-hero__title-line--sub">
                {expertisesPage.lead}
              </span>
            </h1>
          </div>
        </div>
      </div>
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
              <div className="expertises-philippe-experience-box" id="experiences">
                <p className="home-about-philippe__p" id="expertises-philippe">
                  {expertisesPage.philippe.intro}
                </p>
                <h3 className="expertises-philippe-cv__heading">
                  {expertisesPage.philippe.experienceTitle}
                </h3>
                <p className="expertises-philippe-cv__current-name">{expertisesPage.philippe.current.name}</p>
                {expertisesPage.philippe.current.roleLines.map((line) => (
                  <p className="expertises-philippe-cv__role" key={line}>
                    {line}
                  </p>
                ))}
                {expertisesPage.philippe.positions.map((item) => (
                  <div className="expertises-philippe-cv__block" key={item.org}>
                    <p className="expertises-philippe-cv__org">{item.org}</p>
                    <p className="expertises-philippe-cv__detail">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="expertises-philippe-cv">
                <div className="expertises-philippe-cv__why-wrap">
                  <aside
                    className="expertises-philippe-why"
                    aria-labelledby="expertises-why-heading"
                  >
                    <h3 className="expertises-philippe-why__title" id="expertises-why-heading">
                      {expertisesPage.whyConsultantCoach.title}
                    </h3>
                    {expertisesPage.whyConsultantCoach.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </aside>
                </div>
                <div className="expertises-philippe-competences-box">
                  <h3 className="expertises-philippe-cv__heading">
                    {expertisesPage.philippe.competencesTitle}
                  </h3>
                  <ul className="expertises-philippe-cv__list">
                    {expertisesPage.philippe.competences.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
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
      <section className="expertises-accompagnement-section" aria-labelledby="expertises-accompagnement-heading">
        <div className="container">
          <div className="expertises-accompagnement">
            <div className="expertises-accompagnement__figure">
              <Image
                alt={expertisesPage.accompagnement.imageAlt}
                className="expertises-accompagnement__img"
                height={662}
                sizes="(max-width: 800px) 100vw, min(360px, 40vw)"
                src={expertisesPage.accompagnement.imageSrc}
                width={960}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="expertises-accompagnement__content">
              <h2 className="expertises-accompagnement__title" id="expertises-accompagnement-heading">
                {expertisesPage.accompagnement.title}
              </h2>
              {expertisesPage.accompagnement.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
