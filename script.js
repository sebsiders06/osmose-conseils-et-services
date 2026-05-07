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
    ".home-formation-promo",
    ".home-about-philippe",
    ".expertises-accompagnement",
    ".page-vision__card",
    ".page-consulting__intro-box",
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
  /* Même principe que la home : pas de « cover flow » sur les grilles consulting/coaching (scroll page uniquement). */
  const COVER_FLOW_CONTAINER_SELECTOR = [".articles-gallery-grid", ".home-latest-articles__grid"].join(", ");
  const REVEAL_EXCLUDED_ROOT_SELECTOR =
    ".page-consulting__square-grid, .page-coaching__square-grid, " +
    COVER_FLOW_CONTAINER_SELECTOR +
    ", .home-formation-promo-section";
  const COVER_FLOW_CARD_SELECTOR = [
    ".home-promo-box",
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

    document.querySelectorAll("[data-cover-flow-clone]").forEach(function (el) {
      el.remove();
    });

    const containers = Array.from(document.querySelectorAll(COVER_FLOW_CONTAINER_SELECTOR))
      .map(function (container) {
        const cards = Array.from(container.children).filter(function (child) {
          return (
            child instanceof Element &&
            child.matches(COVER_FLOW_CARD_SELECTOR) &&
            !child.hasAttribute("data-cover-flow-clone")
          );
        });
        return { container: container, cards: cards };
      })
      .filter(function (group) {
        return group.cards.length >= 2;
      });

    if (!containers.length) {
      return;
    }

    containers.forEach(function (group) {
      group.container.classList.add("mobile-cover-flow");
      group.cards.forEach(function (card) {
        card.classList.add("mobile-cover-flow-card");
      });
    });

    coverFlowCleanup = function () {
      containers.forEach(function (group) {
        group.container.classList.remove("mobile-cover-flow");
        group.cards.forEach(function (card) {
          card.classList.remove("mobile-cover-flow-card");
        });
      });
    };
  }

  initMobileCoverFlow();
  onMediaChange(mobileRevealQuery, initMobileCoverFlow);

  const revealNodes = Array.from(document.querySelectorAll(REVEAL_SELECTOR)).filter(function (node) {
    if (!(node instanceof Element)) {
      return false;
    }
    if (node.closest(EXCLUDED_REVEAL_PARENT_SELECTOR)) {
      return false;
    }
    if (node.matches(REVEAL_EXCLUDED_ROOT_SELECTOR)) {
      return false;
    }
    return true;
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
