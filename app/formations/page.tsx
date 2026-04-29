import type { Metadata } from "next";

import { siteMainHeroBannerImage } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Formations",
  description: "Osmose Conseils & Services.",
};

export default function FormationsPage() {
  return (
    <div className="page-formations">
      <section className="page-hero page-hero--banner" aria-label="Formations">
        <div className="page-subpage-hero">
          <img
            alt=""
            className="page-subpage-hero__img"
            height={640}
            src={siteMainHeroBannerImage}
            width={1920}
          />
        </div>
      </section>
    </div>
  );
}
