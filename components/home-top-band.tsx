"use client";

import { usePathname } from "next/navigation";

/** Bandeau blanc en haut de page (home uniquement), au-dessus du menu et de tout le contenu. */
export function HomeTopBand() {
  const pathname = usePathname();
  if (pathname !== "/") {
    return null;
  }
  return <div aria-hidden="true" className="home-hero__title-band" />;
}
