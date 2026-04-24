import type { Metadata } from "next";

import { ContactBanner, MethodologySteps, OfferCards, PageHero, SectionHeading } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Consulting",
  description: "Offres de consulting, methodologie d'accompagnement et resultats attendus pour les projets de transformation.",
};

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        eyebrow="Consulting"
        title="Un accompagnement de conseil pour structurer, arbitrer et accelerer."
        description="Nous intervenons sur des missions ou les enjeux de strategie, d'organisation et de performance demandent un regard externe, un cadre solide et une execution tres lisible."
      />
      <OfferCards />
      <MethodologySteps />

      <section className="section">
        <div className="container split-layout">
          <div>
            <SectionHeading
              eyebrow="Resultats attendus"
              title="Des livrables utiles, mais surtout des decisions qui se traduisent dans l'action."
              copy="Au-dela du diagnostic, nous cherchons a produire une feuille de route partagee, des responsabilites clarifiees et des routines de pilotage qui tiennent dans le temps."
            />
          </div>
          <div className="accent-card">
            <p>Exemples de resultats : gouvernance simplifiee, priorites stabilisees, coordination fluide et execution renforcee.</p>
            <p>Chaque mission est dimensionnee pour apporter de la valeur rapidement tout en posant des fondations durables.</p>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
