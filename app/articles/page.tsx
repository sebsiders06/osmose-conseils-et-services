import type { Metadata } from "next";

import { ContactSection, FaqList, PageHero, ResourceCards } from "@/components/site-sections";
import { faqItems, resources } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Articles, FAQ, ressources et contact pour prolonger la relation et faciliter la prise de rendez-vous.",
};

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        eyebrow="Articles"
        title="Articles, ressources et contact dans un espace libre a enrichir."
        description="Cette page rassemble les contenus utiles pour rassurer, informer et convertir : questions frequentes, articles, ressources telechargeables et formulaire de contact."
      />
      <FaqList items={faqItems} />
      <ResourceCards items={resources} />
      <ContactSection />
    </>
  );
}
