import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceOfferDetailPage } from "@/components/service-offer-detail";
import {
  consultingOffers,
  getConsultingOfferBySlug,
  titleForMetaMultiline,
} from "@/data/service-offers";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return consultingOffers.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const offer = getConsultingOfferBySlug(slug);
  if (!offer) return { title: "Consulting" };
  const label = titleForMetaMultiline(offer.gridTitle);
  return {
    title: `${label} — Consulting`,
    description: offer.paragraphs[0],
    robots: { index: false, follow: false },
  };
}

export default async function ConsultingOfferPage({ params }: Props) {
  const { slug } = await params;
  const offer = getConsultingOfferBySlug(slug);
  if (!offer) notFound();

  return (
    <ServiceOfferDetailPage
      variant="consulting"
      paragraphs={offer.paragraphs}
      subtitle={offer.gridTitle}
      subsections={offer.subsections}
    />
  );
}
