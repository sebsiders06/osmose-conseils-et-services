import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceOfferDetailPage } from "@/components/service-offer-detail";
import {
  coachingOffers,
  getCoachingOfferBySlug,
  titleForMetaMultiline,
} from "@/data/service-offers";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return coachingOffers.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const offer = getCoachingOfferBySlug(slug);
  if (!offer) return { title: "Coaching" };
  const label = titleForMetaMultiline(offer.gridTitle);
  return {
    title: `${label} — Coaching`,
    description: offer.paragraphs[0],
    robots: { index: false, follow: false },
  };
}

export default async function CoachingOfferPage({ params }: Props) {
  const { slug } = await params;
  const offer = getCoachingOfferBySlug(slug);
  if (!offer) notFound();

  return (
    <ServiceOfferDetailPage
      paragraphs={offer.paragraphs}
      subtitle={offer.gridTitle}
      subsections={offer.subsections}
      variant="coaching"
      visualClassName={offer.visualClass}
    />
  );
}
