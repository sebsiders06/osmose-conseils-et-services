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

      function centerScrollFor(container: HTMLElement, card: HTMLElement) {
        return card.offsetTop + card.offsetHeight / 2 - container.clientHeight / 2;
      }

      function createLoopClone(card: HTMLElement, position: "before" | "after") {
        const clone = card.cloneNode(true) as HTMLElement;
        clone.setAttribute("data-cover-flow-clone", position);
        clone.setAttribute("aria-hidden", "true");
        clone.setAttribute("tabindex", "-1");
        clone.querySelectorAll<HTMLElement>("a, button, input, textarea, select, [tabindex]").forEach((node) => {
          node.setAttribute("tabindex", "-1");
        });
        return clone;
      }

      function setupInfiniteOfferLoop(container: HTMLElement, originalCards: HTMLElement[]) {
        const shouldLoop = container.matches(".page-coaching__square-grid, .page-consulting__square-grid");

        if (!shouldLoop || originalCards.length < 4) {
          return { cards: originalCards, clones: [], loop: null };
        }

        const cloneCount = Math.min(3, originalCards.length);
        const beforeClones = originalCards.slice(-cloneCount).map((card) => createLoopClone(card, "before"));
        const afterClones = originalCards.slice(0, cloneCount).map((card) => createLoopClone(card, "after"));
        const beforeFragment = document.createDocumentFragment();
        const afterFragment = document.createDocumentFragment();

        beforeClones.forEach((clone) => {
          beforeFragment.appendChild(clone);
        });
        afterClones.forEach((clone) => {
          afterFragment.appendChild(clone);
        });

        container.insertBefore(beforeFragment, originalCards[0]);
        container.appendChild(afterFragment);

        return {
          cards: [...beforeClones, ...originalCards, ...afterClones],
          clones: [...beforeClones, ...afterClones],
          loop: {
            firstOriginal: originalCards[0],
            firstAfterClone: afterClones[0],
            isAdjusting: false,
          },
        };
      }

      const useScrollEnd = typeof window !== "undefined" && "onscrollend" in window;

      type CoverFlowGroup = {
        container: HTMLElement;
        cards: HTMLElement[];
        clones: HTMLElement[];
        loop: {
          firstOriginal: HTMLElement;
          firstAfterClone: HTMLElement;
          isAdjusting: boolean;
        } | null;
        _snapBoostUntil: number;
        _suppressSnapUntil: number;
        _scrollIdleTimer: ReturnType<typeof setTimeout> | null;
        _onContainerScroll?: () => void;
        _onContainerScrollEnd?: () => void;
      };

      const containers: CoverFlowGroup[] = Array.from(document.querySelectorAll<HTMLElement>(COVER_FLOW_CONTAINER_SELECTOR))
        .map((container) => {
          const cards = Array.from(container.children).filter(
            (child): child is HTMLElement =>
              child instanceof HTMLElement &&
              child.matches(COVER_FLOW_CARD_SELECTOR) &&
              !child.hasAttribute("data-cover-flow-clone"),
          );
          const flow = setupInfiniteOfferLoop(container, cards);

          return {
            container,
            cards: flow.cards,
            clones: flow.clones,
            loop: flow.loop,
            _snapBoostUntil: 0,
            _suppressSnapUntil: 0,
            _scrollIdleTimer: null,
          };
        })
        .filter((group) => group.cards.length >= 2);

      if (containers.length === 0) return;

      let frameId: number | null = null;
      const coverFlowState = new WeakMap<
        HTMLElement,
        {
          rotateX: number;
          translateZ: number;
          scale: number;
          opacity: number;
          blur: number;
          shadow: number;
          y: number;
          brightness: number;
          saturate: number;
          shadowAlpha: number;
          glowAlpha: number;
        }
      >();

      function clamp(value: number, min: number, max: number) {
        return Math.max(min, Math.min(max, value));
      }

      function lerp(current: number, target: number, amount: number) {
        return current + (target - current) * amount;
      }

      function suppressCoverFlowSnap(group: CoverFlowGroup, ms: number) {
        group._suppressSnapUntil = performance.now() + ms;
        if (group._scrollIdleTimer) {
          window.clearTimeout(group._scrollIdleTimer);
          group._scrollIdleTimer = null;
        }
      }

      function syncInfiniteLoop(group: CoverFlowGroup) {
        if (!group.loop || group.loop.isAdjusting) return;

        const firstScroll = centerScrollFor(group.container, group.loop.firstOriginal);
        const afterScroll = centerScrollFor(group.container, group.loop.firstAfterClone);
        const loopSpan = afterScroll - firstScroll;
        const trigger = Math.max(42, group.loop.firstOriginal.offsetHeight * 0.45);

        if (loopSpan <= 0) return;

        if (group.container.scrollTop < firstScroll - trigger) {
          suppressCoverFlowSnap(group, 480);
          group.loop.isAdjusting = true;
          group.container.scrollTop += loopSpan;
          group.loop.isAdjusting = false;
        } else if (group.container.scrollTop >= afterScroll - trigger) {
          suppressCoverFlowSnap(group, 480);
          group.loop.isAdjusting = true;
          group.container.scrollTop -= loopSpan;
          group.loop.isAdjusting = false;
        }
      }

      function scrollPortCenterY(container: HTMLElement) {
        const r = container.getBoundingClientRect();
        return r.top + r.height / 2;
      }

      function depthRangeForContainer(container: HTMLElement) {
        const h = container.clientHeight;
        return Math.max(200, h * 0.52);
      }

      function nearestCardScrollTarget(container: HTMLElement, cards: HTMLElement[]) {
        const cr = container.getBoundingClientRect();
        const viewMidY = cr.top + cr.height / 2;
        let best: HTMLElement | null = null;
        let bestScore = Infinity;
        for (let i = 0; i < cards.length; i += 1) {
          const card = cards[i];
          const br = card.getBoundingClientRect();
          const cardMidY = br.top + br.height / 2;
          let score = Math.abs(cardMidY - viewMidY);
          if (card.hasAttribute("data-cover-flow-clone")) {
            score += 12;
          }
          if (score < bestScore) {
            bestScore = score;
            best = card;
          }
        }
        return best ? centerScrollFor(container, best) : null;
      }

      function snapCoverFlowToNearest(group: CoverFlowGroup) {
        if (performance.now() < group._suppressSnapUntil) return;
        if (group.loop?.isAdjusting) return;
        const container = group.container;
        const targetTop = nearestCardScrollTarget(container, group.cards);
        if (targetTop === null) return;
        if (Math.abs(container.scrollTop - targetTop) < 10) return;
        group._snapBoostUntil = performance.now() + 400;
        container.scrollTo({ top: targetTop, behavior: "auto" });
        requestCoverFlowUpdate();
      }

      function scheduleSnapIfIdle(group: CoverFlowGroup) {
        if (useScrollEnd) return;
        if (group._scrollIdleTimer) {
          window.clearTimeout(group._scrollIdleTimer);
        }
        group._scrollIdleTimer = window.setTimeout(() => {
          group._scrollIdleTimer = null;
          if (performance.now() < group._suppressSnapUntil) return;
          snapCoverFlowToNearest(group);
        }, 150);
      }

      function updateCoverFlow() {
        const now = performance.now();
        let needsAnotherFrame = false;

        containers.forEach((group) => {
          syncInfiniteLoop(group);

          const viewportCenter = scrollPortCenterY(group.container);
          const depthRange = depthRangeForContainer(group.container);
          const snapBoost = group._snapBoostUntil && now < group._snapBoostUntil;

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
            const brightness = 0.86 + easedFocus * 0.16;
            const saturate = 0.9 + easedFocus * 0.22;
            const shadowAlpha = 0.32 + easedFocus * 0.26;
            const glowAlpha = 0.08 + easedFocus * 0.14;
            let state = coverFlowState.get(card);

            if (!state) {
              state = {
                rotateX,
                translateZ,
                scale,
                opacity,
                blur,
                shadow: easedFocus,
                y,
                brightness,
                saturate,
                shadowAlpha,
                glowAlpha,
              };
            } else {
              const ease = snapBoost ? 1 : 0.26;
              state.rotateX = lerp(state.rotateX, rotateX, ease);
              state.translateZ = lerp(state.translateZ, translateZ, ease);
              state.scale = lerp(state.scale, scale, ease);
              state.opacity = lerp(state.opacity, opacity, ease);
              state.blur = lerp(state.blur, blur, ease);
              state.shadow = lerp(state.shadow, easedFocus, ease);
              state.y = lerp(state.y, y, ease);
              state.brightness = lerp(state.brightness, brightness, ease);
              state.saturate = lerp(state.saturate, saturate, ease);
              state.shadowAlpha = lerp(state.shadowAlpha, shadowAlpha, ease);
              state.glowAlpha = lerp(state.glowAlpha, glowAlpha, ease);
            }

            if (
              Math.abs(state.rotateX - rotateX) > 0.05 ||
              Math.abs(state.translateZ - translateZ) > 0.3 ||
              Math.abs(state.scale - scale) > 0.001 ||
              Math.abs(state.opacity - opacity) > 0.002 ||
              Math.abs(state.blur - blur) > 0.02 ||
              Math.abs(state.y - y) > 0.03
            ) {
              needsAnotherFrame = true;
            }

            coverFlowState.set(card, state);
            card.style.setProperty("--cf-rotate", `${state.rotateX.toFixed(2)}deg`);
            card.style.setProperty("--cf-z", `${state.translateZ.toFixed(2)}px`);
            card.style.setProperty("--cf-scale", state.scale.toFixed(3));
            card.style.setProperty("--cf-opacity", state.opacity.toFixed(3));
            card.style.setProperty("--cf-blur", `${state.blur.toFixed(2)}px`);
            card.style.setProperty("--cf-shadow", state.shadow.toFixed(3));
            card.style.setProperty("--cf-shadow-alpha", state.shadowAlpha.toFixed(3));
            card.style.setProperty("--cf-glow-alpha", state.glowAlpha.toFixed(3));
            card.style.setProperty("--cf-y", `${state.y.toFixed(2)}px`);
            card.style.setProperty("--cf-z-index", String(zIndex));
            card.style.setProperty("--cf-brightness", state.brightness.toFixed(3));
            card.style.setProperty("--cf-saturate", state.saturate.toFixed(3));
          });
        });

        frameId = needsAnotherFrame ? window.requestAnimationFrame(updateCoverFlow) : null;
      }

      function requestCoverFlowUpdate() {
        if (frameId !== null) return;
        frameId = window.requestAnimationFrame(updateCoverFlow);
      }

      function refreshCoverFlow() {
        requestCoverFlowUpdate();
        window.setTimeout(requestCoverFlowUpdate, 120);
      }

      function centerInfiniteLoops() {
        containers.forEach((group) => {
          if (!group.loop) return;
          suppressCoverFlowSnap(group, 200);
          group.container.scrollTop = centerScrollFor(group.container, group.loop.firstOriginal);
        });
      }

      containers.forEach((group) => {
        group.container.classList.add("mobile-cover-flow");
        group.cards.forEach((card) => {
          card.classList.add("mobile-cover-flow-card");
        });

        function onContainerScroll() {
          requestCoverFlowUpdate();
          scheduleSnapIfIdle(group);
        }

        function onContainerScrollEnd() {
          snapCoverFlowToNearest(group);
        }

        group._onContainerScroll = onContainerScroll;
        group._onContainerScrollEnd = onContainerScrollEnd;

        group.container.addEventListener("scroll", onContainerScroll, { passive: true });
        if (useScrollEnd) {
          group.container.addEventListener("scrollend", onContainerScrollEnd, { passive: true });
        }
      });

      window.addEventListener("scroll", requestCoverFlowUpdate, { passive: true });
      window.addEventListener("resize", refreshCoverFlow);
      window.addEventListener("orientationchange", refreshCoverFlow);
      window.addEventListener("pageshow", refreshCoverFlow);
      centerInfiniteLoops();
      refreshCoverFlow();

      cleanupCoverFlow = () => {
        if (frameId !== null) {
          window.cancelAnimationFrame(frameId);
          frameId = null;
        }

        containers.forEach((group) => {
          if (group._scrollIdleTimer) {
            window.clearTimeout(group._scrollIdleTimer);
            group._scrollIdleTimer = null;
          }
          group.container.classList.remove("mobile-cover-flow");
          if (group._onContainerScroll) {
            group.container.removeEventListener("scroll", group._onContainerScroll);
          }
          if (useScrollEnd && group._onContainerScrollEnd) {
            group.container.removeEventListener("scrollend", group._onContainerScrollEnd);
          }
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
          group.clones.forEach((clone) => {
            clone.remove();
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
