(function () {
  const siteHeader = document.querySelector(".site-header");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  const menuIcon = document.querySelector("[data-menu-icon]");
  const form = document.querySelector("[data-contact-form]");
  const successMessage = document.querySelector("[data-form-success]");

  if (siteHeader && !document.querySelector(".top-band")) {
    const topBand = document.createElement("div");
    topBand.className = "top-band";
    topBand.setAttribute("aria-hidden", "true");
    siteHeader.parentNode.insertBefore(topBand, siteHeader);
  }

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
    menuToggle.addEventListener("click", function () {
      const isOpen = mobileNav.style.display === "block";
      mobileNav.style.display = isOpen ? "none" : "block";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));

      if (menuIcon) {
        menuIcon.innerHTML = isOpen
          ? '<path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8" />'
          : '<path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8" />';
      }
    });
  }

  if (form && successMessage) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      form.reset();
      successMessage.hidden = false;
    });
  }
})();
