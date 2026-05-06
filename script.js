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

  document.body.classList.add("is-page-ready");

  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    return;
  }

  const revealNodes = Array.from(document.querySelectorAll(REVEAL_SELECTOR)).filter(function (node) {
    return !node.closest(EXCLUDED_REVEAL_PARENT_SELECTOR);
  });

  if (!revealNodes.length) {
    return;
  }

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
})();
