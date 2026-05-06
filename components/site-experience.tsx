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

const COVER_FLOW_CONTAINER_SELECTOR = [
  ".home-hero__layout",
  ".page-consulting__square-grid",
  ".page-coaching__square-grid",
  ".articles-gallery-grid",
  ".home-latest-articles__grid",
].join(", ");

const COVER_FLOW_CARD_SELECTOR = [
  ".home-promo-box",
  ".page-consulting__square",
  ".page-coaching__square",
  ".articles-gallery-card",
  ".home-latest-articles__item",
].join(", ");

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
    if (reduceMotion) return;

    const mobileQuery = window.matchMedia("(max-width: 760px)");
    let cleanupCoverFlow: (() => void) | null = null;

    function initMobileCoverFlow() {
      if (cleanupCoverFlow) {
        cleanupCoverFlow();
        cleanupCoverFlow = null;
      }

      if (!mobileQuery.matches) return;

      const containers = Array.from(document.querySelectorAll<HTMLElement>(COVER_FLOW_CONTAINER_SELECTOR))
        .map((container) => {
          const cards = Array.from(container.children).filter(
            (child): child is HTMLElement => child instanceof HTMLElement && child.matches(COVER_FLOW_CARD_SELECTOR),
          );

          return { container, cards };
        })
        .filter((group) => group.cards.length >= 2);

      if (containers.length === 0) return;

      let frameId: number | null = null;

      function clamp(value: number, min: number, max: number) {
        return Math.max(min, Math.min(max, value));
      }

      function updateCoverFlow() {
        const viewportCenter = window.innerHeight / 2;
        const depthRange = Math.max(220, window.innerHeight * 0.42);

        containers.forEach((group) => {
          group.cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            const distance = clamp((cardCenter - viewportCenter) / depthRange, -1.55, 1.55);
            const distanceAbs = Math.abs(distance);
            const focus = 1 - Math.min(distanceAbs, 1);
            const easedFocus = 1 - Math.pow(1 - focus, 2);
            const rotateX = clamp(distance * -34, -48, 48);
            const translateZ = -150 + easedFocus * 255;
            const scale = 0.78 + easedFocus * 0.3;
            const opacity = 0.52 + easedFocus * 0.48;
            const blur = Math.max(0, distanceAbs - 0.28) * 2.25;
            const y = distance * -7;
            const zIndex = Math.round(easedFocus * 100) + 1;

            card.style.setProperty("--cf-rotate", `${rotateX.toFixed(2)}deg`);
            card.style.setProperty("--cf-z", `${translateZ.toFixed(2)}px`);
            card.style.setProperty("--cf-scale", scale.toFixed(3));
            card.style.setProperty("--cf-opacity", opacity.toFixed(3));
            card.style.setProperty("--cf-blur", `${blur.toFixed(2)}px`);
            card.style.setProperty("--cf-shadow", easedFocus.toFixed(3));
            card.style.setProperty("--cf-shadow-alpha", (0.32 + easedFocus * 0.26).toFixed(3));
            card.style.setProperty("--cf-glow-alpha", (0.08 + easedFocus * 0.14).toFixed(3));
            card.style.setProperty("--cf-y", `${y.toFixed(2)}px`);
            card.style.setProperty("--cf-z-index", String(zIndex));
            card.style.setProperty("--cf-brightness", (0.86 + easedFocus * 0.16).toFixed(3));
            card.style.setProperty("--cf-saturate", (0.9 + easedFocus * 0.22).toFixed(3));
          });
        });

        frameId = null;
      }

      function requestCoverFlowUpdate() {
        if (frameId !== null) return;
        frameId = window.requestAnimationFrame(updateCoverFlow);
      }

      function refreshCoverFlow() {
        requestCoverFlowUpdate();
        window.setTimeout(requestCoverFlowUpdate, 120);
      }

      containers.forEach((group) => {
        group.container.classList.add("mobile-cover-flow");
        group.cards.forEach((card) => {
          card.classList.add("mobile-cover-flow-card");
        });
        group.container.addEventListener("scroll", requestCoverFlowUpdate, { passive: true });
      });

      window.addEventListener("scroll", requestCoverFlowUpdate, { passive: true });
      window.addEventListener("resize", refreshCoverFlow);
      window.addEventListener("orientationchange", refreshCoverFlow);
      window.addEventListener("pageshow", refreshCoverFlow);
      refreshCoverFlow();

      cleanupCoverFlow = () => {
        if (frameId !== null) {
          window.cancelAnimationFrame(frameId);
          frameId = null;
        }

        containers.forEach((group) => {
          group.container.classList.remove("mobile-cover-flow");
          group.container.removeEventListener("scroll", requestCoverFlowUpdate);
          group.cards.forEach((card) => {
            card.classList.remove("mobile-cover-flow-card");
            [
              "--cf-rotate",
              "--cf-z",
              "--cf-scale",
              "--cf-opacity",
              "--cf-blur",
              "--cf-shadow",
              "--cf-shadow-alpha",
              "--cf-glow-alpha",
              "--cf-y",
              "--cf-z-index",
              "--cf-brightness",
              "--cf-saturate",
            ].forEach((property) => {
              card.style.removeProperty(property);
            });
          });
        });

        window.removeEventListener("scroll", requestCoverFlowUpdate);
        window.removeEventListener("resize", refreshCoverFlow);
        window.removeEventListener("orientationchange", refreshCoverFlow);
        window.removeEventListener("pageshow", refreshCoverFlow);
      };
    }

    initMobileCoverFlow();

    if (typeof mobileQuery.addEventListener === "function") {
      mobileQuery.addEventListener("change", initMobileCoverFlow);
    } else {
      mobileQuery.addListener(initMobileCoverFlow);
    }

    return () => {
      if (typeof mobileQuery.removeEventListener === "function") {
        mobileQuery.removeEventListener("change", initMobileCoverFlow);
      } else {
        mobileQuery.removeListener(initMobileCoverFlow);
      }

      if (cleanupCoverFlow) {
        cleanupCoverFlow();
      }
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

      if (card.classList.contains("is-hover-flipping")) return;

      ensureHoverFlipBack(card);
      card.classList.add("is-hover-flipping");

      const timer = window.setTimeout(() => {
        card.classList.remove("is-hover-flipping");
        hoverFlipTimers.delete(trigger);
      }, 980);

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

    const isMobileReveal = window.matchMedia("(max-width: 760px)").matches;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter(
      (node) => !node.closest(EXCLUDED_REVEAL_PARENT_SELECTOR),
    );

    if (nodes.length === 0) return;

    nodes.forEach((node, index) => {
      node.classList.add("fx-reveal");
      const delayStep = isMobileReveal ? 22 : 45;
      const delayLimit = isMobileReveal ? 4 : 6;
      node.style.setProperty("--fx-delay", `${Math.min(index % 10, delayLimit) * delayStep}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      isMobileReveal
        ? { rootMargin: "0px 0px -2% 0px", threshold: 0.04 }
        : { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      if (rect.top <= window.innerHeight * (isMobileReveal ? 0.98 : 0.9)) {
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
