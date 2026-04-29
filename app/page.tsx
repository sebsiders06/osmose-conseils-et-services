import type { Metadata } from "next";

import { HomeAboutPhilippe, HomeBanner, HomeFormationsTeaser, HomeHero, HomeLatestArticles } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Cabinet de conseil premium pour clarifier les enjeux, accompagner la transformation et faire progresser durablement les équipes.",
};

export default function HomePage() {
  return (
    <div className="page-home">
      <HomeBanner />
      <HomeHero />
      <HomeAboutPhilippe />
      <HomeFormationsTeaser />
      <HomeLatestArticles />
    </div>
  );
}
