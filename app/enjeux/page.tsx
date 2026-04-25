import type { Metadata } from "next";

import { enjeuxIntro } from "@/data/site-content";

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
        </div>
      </section>
    </div>
  );
}
