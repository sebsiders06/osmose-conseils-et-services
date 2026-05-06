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

  if (reduceMotion) {
    return;
  }

  const revealNodes = Array.from(document.querySelectorAll(REVEAL_SELECTOR)).filter(function (node) {
    return !node.closest(EXCLUDED_REVEAL_PARENT_SELECTOR);
  });

  if (revealNodes.length) {
    revealNodes.forEach(function (node, index) {
      node.classList.add("fx-reveal");
      node.style.setProperty("--fx-delay", String(Math.min(index % 10, 6) * 45) + "ms");
    });

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
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    revealNodes.forEach(function (node) {
      const rect = node.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.9) {
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
