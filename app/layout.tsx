import type { Metadata } from "next";

import { HomeTopBand } from "@/components/home-top-band";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/data/site-content";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${company.name} | Conseil, coaching et formations`,
    template: `%s | ${company.name}`,
  },
  description:
    "Cabinet de conseil premium pour accompagner les entreprises sur leurs enjeux de strategie, transformation, leadership et transmission.",
  keywords: ["conseil", "consulting", "coaching", "formation", "transformation", "leadership"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <HomeTopBand />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
