import type { Metadata } from "next";
import type { CSSProperties } from "react";

import {
  AboutPreview,
  ContactBanner,
  HomeHero,
  ServiceCards,
  StatStrip,
  TestimonialCards,
} from "@/components/site-sections";
import { homePageBackground } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Cabinet de conseil premium pour clarifier les enjeux, accompagner la transformation et faire progresser durablement les equipes.",
};

export default function HomePage() {
  return (
    <div
      className="page-home"
      style={{ "--page-home-image": `url('${homePageBackground.imageSrc}')` } as CSSProperties}
    >
      <HomeHero />
      <StatStrip />
      <AboutPreview />
      <ServiceCards />
      <TestimonialCards />
      <ContactBanner />
    </div>
  );
}
