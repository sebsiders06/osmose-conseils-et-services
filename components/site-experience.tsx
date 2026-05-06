"use client";

import { usePathname } from "next/navigation";
import { type PropsWithChildren, useEffect } from "react";

const REVEAL_SELECTOR = [
  "main section",
  ".home-promo-box",
  ".home-about-philippe",
  ".expertises-accompagnement",
  ".page-vision__card",
  ".page-consulting__square",
  ".page-coaching__square",
  ".page-service-offer-detail__panel",
  ".articles-gallery-card",
  ".home-latest-articles__item",
  ".enjeux-band",
  ".page-bottom-banner",
].join(", ");

const EXCLUDED_REVEAL_PARENT_SELECTOR = [
  ".home-top-banner",
  ".page-consulting__hero",
  ".page-expertises__hero",
  ".page-enjeux__hero",
  ".page-vision__hero",
  ".page-coaching__hero",
  ".page-contact__hero",
  ".page-formation__hero",
  ".page-subpage-hero",
].join(", ");

export function SiteExperience({ children }: PropsWithChildren) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter(
      (node) => !node.closest(EXCLUDED_REVEAL_PARENT_SELECTOR),
    );

    if (nodes.length === 0) return;

    nodes.forEach((node, index) => {
      node.classList.add("fx-reveal");
      node.style.setProperty("--fx-delay", `${Math.min(index % 10, 6) * 45}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.9) {
        node.classList.add("is-visible");
        return;
      }
      observer.observe(node);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <div className="page-transition-shell" key={pathname}>
      {children}
    </div>
  );
}
