import type { Metadata } from "next";

import {
  AboutPreview,
  ContactBanner,
  HomeAboutPhilippe,
  HomeFormationsTeaser,
  HomeHero,
  ServiceCards,
  TestimonialCards,
  TestimonialsTitleBanner,
} from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Cabinet de conseil premium pour clarifier les enjeux, accompagner la transformation et faire progresser durablement les equipes.",
};

export default function HomePage() {
  return (
    <div className="page-home">
      <HomeHero />
      <HomeAboutPhilippe />
      <HomeFormationsTeaser />
      <AboutPreview />
      <ServiceCards />
      <TestimonialsTitleBanner />
      <TestimonialCards hideIntro />
      <ContactBanner />
    </div>
  );
}
