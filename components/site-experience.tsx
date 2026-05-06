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

const HOVER_FLIP_CARD_SELECTOR = [
  ".home-promo-box",
  ".page-consulting__square",
  ".page-coaching__square",
  ".page-vision__card",
  ".expertises-accompagnement",
  ".page-service-offer-detail__sheet",
  ".page-service-offer-detail__panel",
  ".page-article-visual__sheet",
].join(", ");

const HOVER_FLIP_TRIGGER_SELECTOR =
  ".button, button, [role='button'], .page-consulting__square, .page-coaching__square";

export function SiteExperience({ children }: PropsWithChildren) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    function resetTransientNavigationState() {
      document.body.classList.remove("is-route-leaving");
      document.querySelectorAll(".is-hover-flipping").forEach((node) => {
        node.classList.remove("is-hover-flipping");
      });
    }

    resetTransientNavigationState();
    window.addEventListener("pageshow", resetTransientNavigationState);
    window.addEventListener("popstate", resetTransientNavigationState);

    return () => {
      window.removeEventListener("pageshow", resetTransientNavigationState);
      window.removeEventListener("popstate", resetTransientNavigationState);
    };
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktopFx = window.matchMedia("(min-width: 761px) and (hover: hover) and (pointer: fine)").matches;
    if (reduceMotion || !desktopFx) return;

    const hoverFlipTimers = new WeakMap<Element, number>();

    function getHoverFlipCard(trigger: Element) {
      if (trigger.closest(".site-header, .page-bottom-banner, .site-footer")) return null;
      return trigger.closest<HTMLElement>(HOVER_FLIP_CARD_SELECTOR);
    }

    function ensureHoverFlipBack(card: HTMLElement) {
      const existingBack = Array.from(card.children).find((child) => child.classList.contains("card-hover-flip-back"));
      if (existingBack) return;

      const back = document.createElement("span");
      back.className = "card-hover-flip-back";
      back.setAttribute("aria-hidden", "true");
      card.appendChild(back);
    }

    function clearHoverFlipTimer(trigger: Element) {
      const timer = hoverFlipTimers.get(trigger);
      if (!timer) return;

      window.clearTimeout(timer);
      hoverFlipTimers.delete(trigger);
    }

    function startHoverFlip(trigger: Element, card: HTMLElement) {
      clearHoverFlipTimer(trigger);

      const timer = window.setTimeout(() => {
        hoverFlipTimers.delete(trigger);

        if (card.classList.contains("is-hover-flipping")) return;

        ensureHoverFlipBack(card);
        card.classList.add("is-hover-flipping");

        window.setTimeout(() => {
          card.classList.remove("is-hover-flipping");
        }, 980);
      }, 500);

      hoverFlipTimers.set(trigger, timer);
    }

    function handleMouseOver(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const trigger = event.target.closest(HOVER_FLIP_TRIGGER_SELECTOR);
      if (!trigger) return;
      if (event.relatedTarget instanceof Node && trigger.contains(event.relatedTarget)) return;

      const card = getHoverFlipCard(trigger);
      if (!card) return;

      startHoverFlip(trigger, card);
    }

    function handleMouseOut(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const trigger = event.target.closest(HOVER_FLIP_TRIGGER_SELECTOR);
      if (!trigger) return;
      if (event.relatedTarget instanceof Node && trigger.contains(event.relatedTarget)) return;

      clearHoverFlipTimer(trigger);
    }

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [pathname]);

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
