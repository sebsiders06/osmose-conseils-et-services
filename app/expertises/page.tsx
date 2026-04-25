import type { Metadata } from "next";

import { expertisesPage } from "@/data/site-content";

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
          <p className="page-hero-copy page-expertises-hero__lead">{expertisesPage.lead}</p>
        </div>
      </section>
    </div>
  );
}
