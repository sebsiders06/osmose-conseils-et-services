import type { Metadata } from "next";

import {
  AboutPreview,
  ContactBanner,
  HomeAboutPhilippe,
  HomeHero,
  ServiceCards,
  TestimonialCards,
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
      <AboutPreview />
      <ServiceCards />
      <TestimonialCards />
      <ContactBanner />
    </div>
  );
}
