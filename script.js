(function () {
  const siteHeader = document.querySelector(".site-header");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  const menuIcon = document.querySelector("[data-menu-icon]");
  const form = document.querySelector("[data-contact-form]");
  const successMessage = document.querySelector("[data-form-success]");
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

  function syncHeaderState() {
    if (!siteHeader) {
      return;
    }

    siteHeader.classList.toggle("is-scrolled", window.scrollY > 18);
  }

  if (siteHeader) {
    syncHeaderState();
    window.addEventListener("scroll", syncHeaderState, { passive: true });
  }

  if (menuToggle && mobileNav) {
    function setMenuOpenState(isOpen) {
      mobileNav.style.display = isOpen ? "block" : "none";
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      if (siteHeader) {
        siteHeader.classList.toggle("is-open", isOpen);
      }

      if (menuIcon) {
        menuIcon.innerHTML = isOpen
          ? '<path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8" />'
          : '<path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8" />';
      }
    }

    setMenuOpenState(false);

    menuToggle.addEventListener("click", function () {
      const isOpen = mobileNav.style.display === "block";
      setMenuOpenState(!isOpen);
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenuOpenState(false);
      });
    });
  }

  if (form && successMessage) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      form.reset();
      successMessage.hidden = false;
    });
  }

  const reduceMotionQuery = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  const touchQuery = window.matchMedia ? window.matchMedia("(hover: none), (pointer: coarse)") : null;
  const mobileRevealQuery = window.matchMedia ? window.matchMedia("(max-width: 760px)") : null;
  const desktopFxQuery = window.matchMedia
    ? window.matchMedia("(min-width: 761px) and (hover: hover) and (pointer: fine)")
    : null;
  const reduceMotion = Boolean(reduceMotionQuery && reduceMotionQuery.matches);

  function syncExperienceContext() {
    document.body.classList.toggle("is-touch", Boolean(touchQuery && touchQuery.matches));
    document.body.classList.toggle(
      "is-desktop-fx",
      Boolean(desktopFxQuery && desktopFxQuery.matches && !(reduceMotionQuery && reduceMotionQuery.matches))
    );
  }

  function onMediaChange(mediaQuery, callback) {
    if (!mediaQuery) {
      return;
    }

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", callback);
      return;
    }

    if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(callback);
    }
  }

  syncExperienceContext();
  onMediaChange(reduceMotionQuery, syncExperienceContext);
  onMediaChange(touchQuery, syncExperienceContext);
  onMediaChange(desktopFxQuery, syncExperienceContext);
  document.body.classList.add("is-page-ready");

  const overlay = document.createElement("div");
  overlay.className = "page-transition-overlay";
  document.body.appendChild(overlay);

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

  function resetTransientNavigationState() {
    document.body.classList.remove("is-route-leaving");
    document.querySelectorAll(".is-hover-flipping").forEach(function (node) {
      node.classList.remove("is-hover-flipping");
    });
  }

  resetTransientNavigationState();
  window.addEventListener("pageshow", resetTransientNavigationState);
  window.addEventListener("popstate", resetTransientNavigationState);

  function isInternalNavigableLink(anchor) {
    if (!anchor || !anchor.href) return false;
    if (anchor.target === "_blank" || anchor.hasAttribute("download")) return false;

    const hrefAttr = anchor.getAttribute("href") || "";
    if (!hrefAttr || hrefAttr.startsWith("#")) return false;
    if (hrefAttr.startsWith("mailto:") || hrefAttr.startsWith("tel:") || hrefAttr.startsWith("javascript:")) return false;

    let url;
    try {
      url = new URL(anchor.href, window.location.href);
    } catch (_error) {
      return false;
    }

    if (url.origin !== window.location.origin) return false;
    if (url.pathname === window.location.pathname && url.search === window.location.search) return false;

    return true;
  }

  document.addEventListener("click", function (event) {
    if (reduceMotion) return;
    if (event.defaultPrevented) return;
    if (event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    if (!(event.target instanceof Element)) return;
    const anchor = event.target.closest("a");
    if (!isInternalNavigableLink(anchor)) return;

    event.preventDefault();
    document.body.classList.add("is-route-leaving");

    window.setTimeout(function () {
      window.location.href = anchor.href;
    }, 280);
  });

  if (!reduceMotion && desktopFxQuery && desktopFxQuery.matches) {
    const hoverFlipTimers = new WeakMap();

    function getHoverFlipCard(trigger) {
      if (!trigger || trigger.closest(".site-header, .page-bottom-banner, .site-footer")) {
        return null;
      }

      return trigger.closest(HOVER_FLIP_CARD_SELECTOR);
    }

    function ensureHoverFlipBack(card) {
      var back = card.querySelector(":scope > .card-hover-flip-back");

      if (!back) {
        back = document.createElement("span");
        back.className = "card-hover-flip-back";
        back.setAttribute("aria-hidden", "true");
        card.appendChild(back);
      }
    }

    function clearHoverFlipTimer(trigger) {
      const timer = hoverFlipTimers.get(trigger);
      if (!timer) {
        return;
      }

      window.clearTimeout(timer);
      hoverFlipTimers.delete(trigger);
    }

    function startHoverFlip(trigger, card) {
      clearHoverFlipTimer(trigger);

      if (card.classList.contains("is-hover-flipping")) {
        return;
      }

      ensureHoverFlipBack(card);
      card.classList.add("is-hover-flipping");

      const timer = window.setTimeout(function () {
        card.classList.remove("is-hover-flipping");
        hoverFlipTimers.delete(trigger);
      }, 980);

      hoverFlipTimers.set(trigger, timer);
    }

    document.addEventListener("mouseover", function (event) {
      if (!(event.target instanceof Element)) return;

      const trigger = event.target.closest(HOVER_FLIP_TRIGGER_SELECTOR);
      if (!trigger) return;
      if (event.relatedTarget instanceof Node && trigger.contains(event.relatedTarget)) return;

      const card = getHoverFlipCard(trigger);
      if (!card) return;

      startHoverFlip(trigger, card);
    });

    document.addEventListener("mouseout", function (event) {
      if (!(event.target instanceof Element)) return;

      const trigger = event.target.closest(HOVER_FLIP_TRIGGER_SELECTOR);
      if (!trigger) return;
      if (event.relatedTarget instanceof Node && trigger.contains(event.relatedTarget)) return;

      clearHoverFlipTimer(trigger);
    });
  }

  if (reduceMotion) {
    return;
  }

  let coverFlowCleanup = null;

  function initMobileCoverFlow() {
    if (coverFlowCleanup) {
      coverFlowCleanup();
      coverFlowCleanup = null;
    }

    if (!mobileRevealQuery || !mobileRevealQuery.matches) {
      return;
    }

    function centerScrollFor(container, card) {
      return card.offsetTop + card.offsetHeight / 2 - container.clientHeight / 2;
    }

    function createLoopClone(card, position) {
      const clone = card.cloneNode(true);
      clone.setAttribute("data-cover-flow-clone", position);
      clone.setAttribute("aria-hidden", "true");
      clone.setAttribute("tabindex", "-1");
      clone.querySelectorAll("a, button, input, textarea, select, [tabindex]").forEach(function (node) {
        node.setAttribute("tabindex", "-1");
      });
      return clone;
    }

    function setupInfiniteOfferLoop(container, originalCards) {
      const shouldLoop = container.matches(".page-coaching__square-grid, .page-consulting__square-grid");

      if (!shouldLoop || originalCards.length < 4) {
        return { cards: originalCards, clones: [], loop: null };
      }

      const cloneCount = Math.min(3, originalCards.length);
      const beforeClones = originalCards
        .slice(-cloneCount)
        .map(function (card) {
          return createLoopClone(card, "before");
        });
      const afterClones = originalCards
        .slice(0, cloneCount)
        .map(function (card) {
          return createLoopClone(card, "after");
        });
      const beforeFragment = document.createDocumentFragment();
      const afterFragment = document.createDocumentFragment();

      beforeClones.forEach(function (clone) {
        beforeFragment.appendChild(clone);
      });
      afterClones.forEach(function (clone) {
        afterFragment.appendChild(clone);
      });

      container.insertBefore(beforeFragment, originalCards[0]);
      container.appendChild(afterFragment);

      return {
        cards: beforeClones.concat(originalCards, afterClones),
        clones: beforeClones.concat(afterClones),
        loop: {
          firstOriginal: originalCards[0],
          firstAfterClone: afterClones[0],
          isAdjusting: false,
        },
      };
    }

    const useScrollEnd = typeof window !== "undefined" && "onscrollend" in window;

    const containers = Array.from(document.querySelectorAll(COVER_FLOW_CONTAINER_SELECTOR))
      .map(function (container) {
        const cards = Array.from(container.children).filter(function (child) {
          return (
            child instanceof Element &&
            child.matches(COVER_FLOW_CARD_SELECTOR) &&
            !child.hasAttribute("data-cover-flow-clone")
          );
        });
        const flow = setupInfiniteOfferLoop(container, cards);

        return {
          container: container,
          cards: flow.cards,
          clones: flow.clones,
          loop: flow.loop,
          _snapBoostUntil: 0,
          _scrollIdleTimer: null,
        };
      })
      .filter(function (group) {
        return group.cards.length >= 2;
      });

    if (!containers.length) {
      return;
    }

    let frameId = null;
    const coverFlowState = new WeakMap();

    function clamp(value, min, max) {
      return Math.max(min, Math.min(max, value));
    }

    function lerp(current, target, amount) {
      return current + (target - current) * amount;
    }

    function syncInfiniteLoop(group) {
      if (!group.loop || group.loop.isAdjusting) {
        return;
      }

      const firstScroll = centerScrollFor(group.container, group.loop.firstOriginal);
      const afterScroll = centerScrollFor(group.container, group.loop.firstAfterClone);
      const loopSpan = afterScroll - firstScroll;
      const trigger = Math.max(42, group.loop.firstOriginal.offsetHeight * 0.45);

      if (loopSpan <= 0) {
        return;
      }

      if (group.container.scrollTop < firstScroll - trigger) {
        group.loop.isAdjusting = true;
        group.container.scrollTop += loopSpan;
        group.loop.isAdjusting = false;
      } else if (group.container.scrollTop >= afterScroll - trigger) {
        group.loop.isAdjusting = true;
        group.container.scrollTop -= loopSpan;
        group.loop.isAdjusting = false;
      }
    }

    function scrollPortCenterY(container) {
      const r = container.getBoundingClientRect();
      return r.top + r.height / 2;
    }

    function depthRangeForContainer(container) {
      const h = container.clientHeight;
      return Math.max(200, h * 0.52);
    }

    function nearestCardScrollTarget(container, cards) {
      const viewMid = container.scrollTop + container.clientHeight / 2;
      let best = null;
      let bestDist = Infinity;

      for (let i = 0; i < cards.length; i += 1) {
        const card = cards[i];
        const cardMid = card.offsetTop + card.offsetHeight / 2;
        const d = Math.abs(cardMid - viewMid);
        if (d < bestDist) {
          bestDist = d;
          best = card;
        }
      }

      return best ? centerScrollFor(container, best) : null;
    }

    function snapCoverFlowToNearest(group) {
      if (!group || !group.container) {
        return;
      }
      if (group.loop && group.loop.isAdjusting) {
        return;
      }

      const container = group.container;
      const targetTop = nearestCardScrollTarget(container, group.cards);
      if (targetTop === null) {
        return;
      }

      if (Math.abs(container.scrollTop - targetTop) < 5) {
        return;
      }

      group._snapBoostUntil = performance.now() + 560;
      container.scrollTo({ top: targetTop, behavior: "smooth" });
      requestCoverFlowUpdate();
    }

    function scheduleSnapIfIdle(group) {
      if (useScrollEnd) {
        return;
      }
      if (group._scrollIdleTimer) {
        window.clearTimeout(group._scrollIdleTimer);
      }
      group._scrollIdleTimer = window.setTimeout(function () {
        group._scrollIdleTimer = null;
        snapCoverFlowToNearest(group);
      }, 150);
    }

    function updateCoverFlow() {
      const now = performance.now();
      let needsAnotherFrame = false;

      containers.forEach(function (group) {
        syncInfiniteLoop(group);

        const viewportCenter = scrollPortCenterY(group.container);
        const depthRange = depthRangeForContainer(group.container);
        const snapBoost = group._snapBoostUntil && now < group._snapBoostUntil;

        group.cards.forEach(function (card) {
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
            state = { rotateX, translateZ, scale, opacity, blur, shadow: easedFocus, y, brightness, saturate, shadowAlpha, glowAlpha };
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
          card.style.setProperty("--cf-rotate", state.rotateX.toFixed(2) + "deg");
          card.style.setProperty("--cf-z", state.translateZ.toFixed(2) + "px");
          card.style.setProperty("--cf-scale", state.scale.toFixed(3));
          card.style.setProperty("--cf-opacity", state.opacity.toFixed(3));
          card.style.setProperty("--cf-blur", state.blur.toFixed(2) + "px");
          card.style.setProperty("--cf-shadow", state.shadow.toFixed(3));
          card.style.setProperty("--cf-shadow-alpha", state.shadowAlpha.toFixed(3));
          card.style.setProperty("--cf-glow-alpha", state.glowAlpha.toFixed(3));
          card.style.setProperty("--cf-y", state.y.toFixed(2) + "px");
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
      containers.forEach(function (group) {
        if (!group.loop) {
          return;
        }

        group.container.scrollTop = centerScrollFor(group.container, group.loop.firstOriginal);
      });
    }

    containers.forEach(function (group) {
      group.container.classList.add("mobile-cover-flow");
      group.cards.forEach(function (card) {
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

    coverFlowCleanup = function () {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
        frameId = null;
      }

      containers.forEach(function (group) {
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
        group.cards.forEach(function (card) {
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
          ].forEach(function (property) {
            card.style.removeProperty(property);
          });
        });
        group.clones.forEach(function (clone) {
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
  onMediaChange(mobileRevealQuery, initMobileCoverFlow);

  const revealNodes = Array.from(document.querySelectorAll(REVEAL_SELECTOR)).filter(function (node) {
    return !node.closest(EXCLUDED_REVEAL_PARENT_SELECTOR);
  });

  if (revealNodes.length) {
    revealNodes.forEach(function (node, index) {
      node.classList.add("fx-reveal");
      const delayStep = mobileRevealQuery && mobileRevealQuery.matches ? 22 : 45;
      const delayLimit = mobileRevealQuery && mobileRevealQuery.matches ? 4 : 6;
      node.style.setProperty("--fx-delay", String(Math.min(index % 10, delayLimit) * delayStep) + "ms");
    });

    const revealObserverOptions =
      mobileRevealQuery && mobileRevealQuery.matches
        ? { rootMargin: "0px 0px -2% 0px", threshold: 0.04 }
        : { rootMargin: "0px 0px -10% 0px", threshold: 0.12 };

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      revealObserverOptions
    );

    revealNodes.forEach(function (node) {
      const rect = node.getBoundingClientRect();
      const visibleStart = mobileRevealQuery && mobileRevealQuery.matches ? 0.98 : 0.9;
      if (rect.top <= window.innerHeight * visibleStart) {
        node.classList.add("is-visible");
        return;
      }
      observer.observe(node);
    });
  }

  const parallaxNodes = Array.from(
    document.querySelectorAll(
      ".home-top-banner__img, .page-consulting__hero-img, .page-expertises__hero-img, .page-enjeux__hero-img, .page-vision__hero-img, .page-formation__hero-img, .page-coaching__hero-img, .page-contact__hero-img, .page-subpage-hero__img"
    )
  );

  if (parallaxNodes.length && desktopFxQuery && desktopFxQuery.matches) {
    let rafId = null;
    function updateParallax() {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      parallaxNodes.forEach(function (node, index) {
        const factor = 0.032 + (index % 3) * 0.006;
        const offset = scrollY * factor;
        node.style.transform = "translate3d(0," + offset.toFixed(2) + "px,0) scale(1.045)";
      });
      rafId = null;
    }

    function requestParallaxUpdate() {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(updateParallax);
    }

    requestParallaxUpdate();
    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
  }

  if (desktopFxQuery && desktopFxQuery.matches) {
    const tiltNodes = document.querySelectorAll(
      ".home-promo-box, .page-consulting__square, .page-coaching__square, .page-vision__card, .expertises-accompagnement, .articles-gallery-card__frame, .home-latest-articles__thumb"
    );

    tiltNodes.forEach(function (node) {
      node.classList.add("wow-tilt");

      node.addEventListener("mousemove", function (event) {
        if (node.classList.contains("is-hover-flipping")) {
          return;
        }

        const rect = node.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        const rotateY = (px - 0.5) * 14;
        const rotateX = (0.5 - py) * 14;
        node.style.setProperty("--fx-x", (px * 100).toFixed(1) + "%");
        node.style.setProperty("--fx-y", (py * 100).toFixed(1) + "%");
        node.style.transform =
          "perspective(850px) rotateX(" +
          rotateX.toFixed(2) +
          "deg) rotateY(" +
          rotateY.toFixed(2) +
          "deg) translateY(-7px)";
      });

      node.addEventListener("mouseleave", function () {
        node.style.transform = "";
        node.style.removeProperty("--fx-x");
        node.style.removeProperty("--fx-y");
      });
    });
  }
})();
