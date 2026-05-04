/**
 * Données des fiches consulting & coaching pour Next (`app/consulting`, `app/coaching`).
 * À modifier ensemble avec le site statique : éditer `service-offers.json`, puis :
 * `npm run gen:offers` pour régénérer consulting/*.html, coaching/*.html et les liens des pages listes.
 */

import raw from "./service-offers.json";

export type ServiceOfferSubsection = {
  heading: string;
  items: readonly string[];
};

export type ConsultingOfferDetail = {
  slug: string;
  gridTitle: string;
  visualClass: string;
  paragraphs: readonly string[];
  subsections?: readonly ServiceOfferSubsection[];
};

export type CoachingOfferDetail = {
  slug: string;
  gridTitle: string;
  visualClass: string;
  paragraphs: readonly string[];
  subsections?: readonly ServiceOfferSubsection[];
};

export const consultingOffers = raw.consulting as readonly ConsultingOfferDetail[];
export const coachingOffers = raw.coaching as readonly CoachingOfferDetail[];

export function getConsultingOfferBySlug(slug: string): ConsultingOfferDetail | undefined {
  return consultingOffers.find((o) => o.slug === slug);
}

export function getCoachingOfferBySlug(slug: string): CoachingOfferDetail | undefined {
  return coachingOffers.find((o) => o.slug === slug);
}

export function titleForMetaMultiline(gridTitle: string): string {
  return gridTitle.replace(/\s*\n\s*/g, " · ").replace(/\s+/g, " ").trim();
}
