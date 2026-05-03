import type { Metadata } from "next";

import { ContactSection } from "@/components/site-sections";
import { siteMainHeroBannerImage } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Osmose Conseils & Services — conseil, coaching et demande d’accompagnement.",
};

export default function ContactPage() {
  return (
    <div className="page-contact">
      <section className="page-hero page-hero--banner" aria-label="Contact">
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
      <ContactSection />
    </div>
  );
}
