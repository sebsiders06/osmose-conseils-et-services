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
      <div className="page-contact__hero" aria-label="Contact">
        <img
          alt=""
          className="page-contact__hero-img"
          height={640}
          src={siteMainHeroBannerImage}
          width={1920}
        />
        <div className="page-contact__hero-overlay">
          <div className="container">
            <h1 className="page-contact-hero__title" id="contact-heading">
              <span className="page-contact-hero__title-line page-contact-hero__title-line--primary">Contact</span>
              <span className="page-contact-hero__title-line page-contact-hero__title-line--sub">
                Prenons le temps d&apos;analyser votre contexte.
              </span>
            </h1>
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
