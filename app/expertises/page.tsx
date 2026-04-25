import type { Metadata } from "next";

import { ContactBanner, ExpertiseCards, PageHero } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Expertises",
  description: "Decouvrez les domaines d'expertise du cabinet : strategie, transformation, leadership, performance commerciale et transmission.",
};

export default function ExpertisesPage() {
  return (
    <div className="page-expertises">
      <PageHero
        eyebrow="Expertises"
        title="Des expertises choisies pour repondre aux tensions reelles des entreprises."
        description="Nous accompagnons les phases ou il faut a la fois clarifier une direction, rendre l'organisation plus lisible et renforcer la capacite des leaders a embarquer."
      />
      <ExpertiseCards />
      <ContactBanner />
    </div>
  );
}
