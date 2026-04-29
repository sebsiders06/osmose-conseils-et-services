import type { Metadata } from "next";

import { ContactBanner, PageHero, SectionHeading, TrainingCards } from "@/components/site-sections";
import { trainingCatalog } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Formations",
  description: "Catalogue de formations, formats presentiels ou distanciels et objectifs pedagogiques pour faire progresser durablement les equipes.",
};

export default function FormationsPage() {
  return (
    <div className="page-formations">
      <PageHero
        eyebrow="Formations"
        title="Des formations premium pour transmettre, faire pratiquer et ancrer."
        description="Nos parcours de formation sont concus pour etre a la fois exigeants, engageants et directement relies aux situations reelles de travail."
      />
      <TrainingCards items={trainingCatalog} />

      <section className="section">
        <div className="container split-layout">
          <div>
            <SectionHeading
              eyebrow="Objectifs pedagogiques"
              title="Faire progresser les competences sans deconnecter l'apprentissage du terrain."
              copy="Nous privilegions les dispositifs qui combinent cas concrets, mises en situation, feedback et outils directement reutilisables en contexte professionnel."
            />
          </div>
          <div className="accent-card">
            <p>Formats disponibles : presentiel, distanciel, hybride, ateliers immersifs et classes virtuelles.</p>
            <p>Les programmes peuvent etre adosses a des evaluations, a du coaching d'ancrage ou a un plan de transformation plus large.</p>
          </div>
        </div>
      </section>

      <ContactBanner />
    </div>
  );
}
