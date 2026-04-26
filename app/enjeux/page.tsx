import type { Metadata } from "next";

import {
  enjeuxAutresCallout,
  enjeuxConnaitreCallout,
  enjeuxIntro,
  enjeuxIsolementCallout,
  enjeuxLeaderCallout,
  enjeuxOrganiserCallout,
  enjeuxPerformerCallout,
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "Enjeux",
  description:
    "Diriger une entreprise, encadrer des équipes et mener une vie personnelle épanouissante : enjeux d'épuisement, d'isolement et d'accompagnement des dirigeants et cadres.",
};

export default function EnjeuxPage() {
  return (
    <div className="page-enjeux">
      <h1 className="page-enjeux__visually-hidden">Enjeux</h1>
      <section className="enjeux-intro-section" aria-label="Introduction">
        <div className="container">
          <div className="enjeux-intro-box">
            {enjeuxIntro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="enjeux-intro-box enjeux-isolement-box enjeux-isolement-box--rompre-photo">
            <img
              alt=""
              className="enjeux-isolement-box__photo"
              src={enjeuxIsolementCallout.backgroundImageSrc}
            />
            <h2 className="enjeux-isolement-box__title">
              {enjeuxIsolementCallout.titleLines.map((line) => (
                <span className="enjeux-isolement-box__title-line" key={line}>
                  {line}
                </span>
              ))}
            </h2>
            <p className="enjeux-isolement-box__text">{enjeuxIsolementCallout.body}</p>
          </div>
          <div className="enjeux-intro-box enjeux-isolement-box enjeux-isolement-box--connaitre-photo">
            <img
              alt=""
              className="enjeux-isolement-box__photo"
              src={enjeuxConnaitreCallout.backgroundImageSrc}
            />
            <h2 className="enjeux-isolement-box__title">
              <span className="enjeux-isolement-box__title-line">{enjeuxConnaitreCallout.title}</span>
            </h2>
            <p className="enjeux-isolement-box__text">
              {enjeuxConnaitreCallout.bodyBeforeBreak}
              <br />
              {enjeuxConnaitreCallout.bodyAfterBreak}
            </p>
          </div>
          <div className="enjeux-intro-box enjeux-isolement-box enjeux-isolement-box--autres-photo">
            <img alt="" className="enjeux-isolement-box__photo" src={enjeuxAutresCallout.backgroundImageSrc} />
            <h2 className="enjeux-isolement-box__title">
              <span className="enjeux-isolement-box__title-line">{enjeuxAutresCallout.title}</span>
            </h2>
            <p className="enjeux-isolement-box__text">{enjeuxAutresCallout.body}</p>
          </div>
          <div className="enjeux-intro-box enjeux-isolement-box enjeux-isolement-box--leader-photo">
            <img alt="" className="enjeux-isolement-box__photo" src={enjeuxLeaderCallout.backgroundImageSrc} />
            <h2 className="enjeux-isolement-box__title">
              {enjeuxLeaderCallout.titleLines.map((line) => (
                <span className="enjeux-isolement-box__title-line" key={line}>
                  {line}
                </span>
              ))}
            </h2>
            {enjeuxLeaderCallout.paragraphs.map((paragraph) => (
              <p className="enjeux-isolement-box__text" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="enjeux-intro-box enjeux-isolement-box enjeux-isolement-box--organiser-photo">
            <img
              alt=""
              className="enjeux-isolement-box__photo"
              src={enjeuxOrganiserCallout.backgroundImageSrc}
            />
            <h2 className="enjeux-isolement-box__title">
              <span className="enjeux-isolement-box__title-line">{enjeuxOrganiserCallout.title}</span>
            </h2>
            <p className="enjeux-isolement-box__text">{enjeuxOrganiserCallout.body}</p>
          </div>
          <div className="enjeux-intro-box enjeux-isolement-box enjeux-isolement-box--performer-photo">
            <img
              alt=""
              className="enjeux-isolement-box__photo"
              src={enjeuxPerformerCallout.backgroundImageSrc}
            />
            <h2 className="enjeux-isolement-box__title">
              <span className="enjeux-isolement-box__title-line">{enjeuxPerformerCallout.title}</span>
            </h2>
            <p className="enjeux-isolement-box__text">{enjeuxPerformerCallout.body}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
