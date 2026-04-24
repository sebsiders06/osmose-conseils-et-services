import type { Metadata } from "next";

import { ContactBanner, PageHero, SectionHeading, TestimonialCards } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Temoignages",
  description: "Avis clients credibles sous forme de cartes avec photo, nom et entreprise pour valoriser l'impact du cabinet.",
};

export default function TemoignagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Temoignages"
        title="Des avis clients qui mettent en avant la clarte, la confiance et l'impact."
        description="Cette page peut accueillir vos references, cas clients et citations pour rassurer les prospects et illustrer la qualite de l'accompagnement."
      />
      <TestimonialCards />

      <section className="section">
        <div className="container split-layout">
          <div>
            <SectionHeading
              eyebrow="Preuves sociales"
              title="Un format simple, premium et credible pour vos retours d'experience."
              copy="Les temoignages sont presentes en cartes avec avatar, nom et entreprise. Vous pouvez facilement remplacer les contenus par vos references reelles."
            />
          </div>
          <div className="accent-card">
            <p>Ce type de section rassure, nourrit le SEO de longue traine et renforce la perception d'expertise.</p>
            <p>Elle peut aussi evoluer vers des cas clients detailles ou des interviews video.</p>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
