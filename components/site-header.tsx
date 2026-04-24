"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navigation } from "@/data/site-content";

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 18);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div aria-hidden="true" className="top-band" />
      <header className={isScrolled ? "site-header is-scrolled" : "site-header"}>
        <div className="container nav-shell">
          <nav className="desktop-nav" aria-label="Navigation principale">
            {navigation.map((item) => {
              const isActive = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

              return (
                <Link key={item.href} className={isActive ? "nav-link active" : "nav-link"} href={item.href}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions">
            <button
              aria-controls="mobile-navigation"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="menu-toggle"
              onClick={() => setIsOpen((value) => !value)}
              type="button"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="mobile-nav-panel" id="mobile-navigation">
            <div className="container mobile-nav-links">
              {navigation.map((item) => {
                const isActive = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

                return (
                  <Link key={item.href} className={isActive ? "mobile-nav-link active" : "mobile-nav-link"} href={item.href}>
                    {item.label}
                  </Link>
                );
              })}
              <Link className="button button-primary mobile-nav-cta" href="/more#contact">
                Demander un rendez-vous
              </Link>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}
