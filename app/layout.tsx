import type { Metadata } from "next";
import { Allura } from "next/font/google";

import { ConditionalFooter } from "@/components/conditional-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-home-osmose",
  display: "swap",
});

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
    <html className={allura.variable} lang="fr">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
