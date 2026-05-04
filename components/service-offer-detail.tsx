import Link from "next/link";

import { consultingPage, siteMainHeroBannerImage } from "@/data/site-content";
import type { ServiceOfferSubsection } from "@/data/service-offers";

export type ServiceOfferVariant = "consulting" | "coaching";

type Props = {
  variant: ServiceOfferVariant;
  visualClassName: string;
  subtitle: string;
  paragraphs: readonly string[];
  subsections?: readonly ServiceOfferSubsection[];
};

function normalizeOfferHeading(heading: string): string {
  return heading.replace(/\u200b/g, "").trim().toUpperCase();
}

function pickOfferSubsection(
  subsections: readonly ServiceOfferSubsection[] | undefined,
  kind: "enjeux" | "benefices",
): ServiceOfferSubsection | undefined {
  if (!subsections?.length) return undefined;
  if (kind === "enjeux") {
    return subsections.find((s) => normalizeOfferHeading(s.heading) === "ENJEUX");
  }
  return subsections.find((s) => normalizeOfferHeading(s.heading).includes("BÉNÉFICE"));
}

export function ServiceOfferDetailPage({ variant, visualClassName, subtitle, paragraphs, subsections }: Props) {
  const parentHref = variant === "consulting" ? "/consulting" : "/coaching";
  const pageRootClass = variant === "consulting" ? "page-consulting" : "page-coaching";
  const titleClass = variant === "consulting" ? "page-consulting-hero__title" : "page-coaching-hero__title";
  const primaryLineClass =
    variant === "consulting"
      ? "page-consulting-hero__title-line page-consulting-hero__title-line--primary"
      : "page-coaching-hero__title-line page-coaching-hero__title-line--primary";
  const subLineClass =
    variant === "consulting"
      ? "page-consulting-hero__title-line page-consulting-hero__title-line--sub"
      : "page-coaching-hero__title-line page-coaching-hero__title-line--sub";
  const primaryLineLabel = variant === "consulting" ? consultingPage.title : "COACHING";
  const multilineSubtitle = subtitle.includes("\n");

  const enjeuxSec = pickOfferSubsection(subsections, "enjeux");
  const beneficesSec = pickOfferSubsection(subsections, "benefices");

  return (
    <div className={`${pageRootClass} page-service-offer-detail`}>
      <div className={`${pageRootClass}__hero`}>
        <img
          alt=""
          className={`${pageRootClass}__hero-img`}
          height={640}
          src={siteMainHeroBannerImage}
          width={1920}
        />
        <div className={`${pageRootClass}__hero-overlay`}>
          <div className="container">
            <h1 className={titleClass}>
              <span className={primaryLineClass}>{primaryLineLabel}</span>
              <span
                className={[
                  subLineClass,
                  multilineSubtitle ? "page-service-offer-detail__subtitle--multiline" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {subtitle}
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className={`${pageRootClass}__content`}>
        <div
          aria-hidden="true"
          className={`page-service-offer-detail__visual ${visualClassName}`}
        />
        <div className="page-service-offer-detail__panels">
          <div className="page-consulting__intro-box page-service-offer-detail__panel page-service-offer-detail__panel--intro">
            {paragraphs.map((text, i) => (
              <p key={i} className="page-consulting__intro-text">
                {text}
              </p>
            ))}
          </div>

          {enjeuxSec ? (
            <section
              className="page-consulting__intro-box page-service-offer-detail__panel page-service-offer-detail__panel--enjeux"
              aria-labelledby="offer-enjeux-heading"
            >
              <h2 className="page-service-offer-detail__subsection-heading" id="offer-enjeux-heading">
                {enjeuxSec.heading}
              </h2>
              <ul className="page-service-offer-detail__subsection-list">
                {enjeuxSec.items.map((item, ii) => (
                  <li key={ii}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {beneficesSec ? (
            <section
              className="page-consulting__intro-box page-service-offer-detail__panel page-service-offer-detail__panel--benefices"
              aria-labelledby="offer-benefices-heading"
            >
              <h2 className="page-service-offer-detail__subsection-heading" id="offer-benefices-heading">
                {beneficesSec.heading}
              </h2>
              <ul className="page-service-offer-detail__subsection-list">
                {beneficesSec.items.map((item, ii) => (
                  <li key={ii}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <div className="page-service-offer-detail__actions">
          <Link className="button button-subtle" href={parentHref}>
            Retour à {variant === "consulting" ? "Consulting" : "Coaching"}
          </Link>
          <Link className="button button-primary" href="/contact">
            Échanger sur votre projet
          </Link>
        </div>
      </div>
    </div>
  );
}
