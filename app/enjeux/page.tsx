import type { Metadata } from "next";

import { ChallengeCards, ContactBanner } from "@/components/site-sections";
import { enjeux } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Enjeux",
  description: "Les problematiques clients typiques que nous traitons : croissance, silos, fatigue du changement, gouvernance et management.",
};

export default function EnjeuxPage() {
  return (
    <div className="page-enjeux">
      <section className="page-hero" aria-labelledby="enjeux-heading">
        <div className="container">
          <p className="eyebrow">Enjeux</p>
          <h1 className="page-enjeux-hero__title" id="enjeux-heading">
            Les defis d'entreprise qui demandent plus qu'une simple recommandation.
          </h1>
          <div className="page-enjeux-hero__lead-wrap">
            <p className="page-hero-copy page-enjeux-hero__lead">
              Nos clients viennent souvent avec une intuition forte : la strategie, l'organisation ou les pratiques
              manageriales ne sont plus totalement alignees avec l'ambition affichee.
            </p>
          </div>
        </div>
      </section>
      <ChallengeCards items={enjeux} />
      <ContactBanner />
    </div>
  );
}
