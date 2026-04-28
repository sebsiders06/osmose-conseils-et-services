import type { Metadata } from "next";

import { ConditionalFooter } from "@/components/conditional-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Conseil, coaching et formations",
  },
  description:
    "Cabinet de conseil premium pour accompagner les entreprises sur leurs enjeux de strategie, transformation, leadership et transmission.",
  keywords: ["conseil", "consulting", "coaching", "formation", "transformation", "leadership"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
