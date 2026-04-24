import type { Metadata } from "next";

import { ChallengeCards, ContactBanner, PageHero } from "@/components/site-sections";
import { enjeux } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Enjeux",
  description: "Les problematiques clients typiques que nous traitons : croissance, silos, fatigue du changement, gouvernance et management.",
};

export default function EnjeuxPage() {
  return (
    <>
      <PageHero
        eyebrow="Enjeux"
        title="Les defis d'entreprise qui demandent plus qu'une simple recommandation."
        description="Nos clients viennent souvent avec une intuition forte : la strategie, l'organisation ou les pratiques manageriales ne sont plus totalement alignees avec l'ambition affichee."
      />
      <ChallengeCards items={enjeux} />
      <ContactBanner />
    </>
  );
}
