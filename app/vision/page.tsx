import type { Metadata } from "next";

import { ContactBanner, PageHero, SectionHeading, ValueCards } from "@/components/site-sections";
import { values } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Vision",
  description: "Vision, mission, valeurs et positionnement du cabinet pour un accompagnement premium, exigeant et humain.",
};

export default function VisionPage() {
  return (
    <div className="page-vision">
      <PageHero
        eyebrow="Vision"
        title="Faire converger vision strategique, qualite d'execution et experience humaine du changement."
        description="Nous croyons qu'une transformation reussie ne repose ni uniquement sur les plans, ni uniquement sur l'engagement. Elle nait de l'alignement entre cap, decisions, rythmes et comportements."
      />

      <section className="section">
        <div className="container split-layout">
          <div>
            <SectionHeading
              eyebrow="Mission"
              title="Aider les entreprises a prendre de meilleures decisions collectives."
              copy="Notre mission est de rendre les transformations plus lisibles, plus apprenantes et plus soutenables pour les dirigeants, les managers et les equipes."
            />
          </div>
          <div className="accent-card">
            <p>
              Notre positionnement est volontairement differentiant : un cabinet a taille humaine, au design sobre, qui
              articule conseil, coaching et transmission plutot que de les opposer.
            </p>
            <p>
              Nous privilegions les interventions qui laissent un cadre, des methodes et une autonomie durable chez le
              client.
            </p>
          </div>
        </div>
      </section>

      <ValueCards items={values} />
      <ContactBanner />
    </div>
  );
}
