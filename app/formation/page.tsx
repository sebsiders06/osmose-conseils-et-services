import type { Metadata } from "next";
import Link from "next/link";

import { siteMainHeroBannerImage } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Formation — L'essentiel du management",
  description:
    "Découvrez la formation Osmose « L'essentiel du management » : précisez vos besoins et échangeons sur le format qui vous convient.",
};

export default function FormationPage() {
  return (
    <div className="page-formation">
      <section className="page-hero page-hero--banner" aria-labelledby="formation-page-heading">
        <div className="page-subpage-hero">
          <img
            alt=""
            className="page-subpage-hero__img"
            height={640}
            src={siteMainHeroBannerImage}
            width={1920}
          />
          <div className="page-subpage-hero__overlay">
            <div className="container">
              <p className="eyebrow">Formation</p>
              <h1 id="formation-page-heading">L&apos;essentiel du management</h1>
              <p className="page-hero-copy">
                Échangeons sur vos objectifs et sur le format qui convient à votre équipe (présentiel, à distance ou
                hybride).
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="page-formation__body" aria-label="Suite">
        <div className="container page-formation__inner">
          <p className="page-formation__intro">
            Vous êtes sur la page dédiée à la formation{' '}
            <strong>L&apos;essentiel du management</strong>, accessible depuis les bannières du site sans figurer dans
            le menu principal.
          </p>
          <div className="page-formation__actions">
            <Link className="button button-primary" href="/contact">
              Écrivez-nous pour cette formation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
