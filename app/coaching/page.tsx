import type { Metadata } from "next";

import { ContactBanner, PageHero, ProgramCards, SectionHeading } from "@/components/site-sections";
import { coachingPrograms } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Coaching",
  description: "Coaching individuel, coaching d'equipe et coaching de dirigeants pour renforcer leadership, confiance et alignement.",
};

export default function CoachingPage() {
  return (
    <>
      <PageHero
        eyebrow="Coaching"
        title="Des dispositifs de coaching pour faire evoluer les postures autant que les pratiques."
        description="Nous proposons des accompagnements sur mesure pour les dirigeants, les managers et les collectifs qui veulent gagner en clarte, en confiance et en efficacite relationnelle."
      />
      <ProgramCards
        eyebrow="Programmes"
        title="Trois formes de coaching pour repondre aux moments cles de la vie de l'entreprise."
        copy="Chaque accompagnement est cadre autour d'objectifs, de modalites de feedback et d'une logique d'ancrage dans le quotidien professionnel."
        items={coachingPrograms}
      />

      <section className="section">
        <div className="container split-layout">
          <div>
            <SectionHeading
              eyebrow="Objectifs"
              title="Renforcer la capacite a prendre du recul, a cooperer et a decider avec justesse."
              copy="Le coaching aide a sortir des automatismes, a clarifier les points de tension et a installer une posture plus solide face aux enjeux de transformation."
            />
          </div>
          <div className="accent-card">
            <p>Benefices frequents : leadership plus incarne, equipe plus mature, conversations plus fluides et tensions mieux traitees.</p>
            <p>Les seances peuvent etre combinees a des ateliers d'equipe, du conseil ou des formations ciblees.</p>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
