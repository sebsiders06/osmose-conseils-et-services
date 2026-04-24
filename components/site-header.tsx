"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { company, navigation } from "@/data/site-content";

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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand-mark" href="/">
          <span className="brand-pill">OCS</span>
          <span>
            <strong>{company.name}</strong>
            <small>Conseil, coaching et formations</small>
          </span>
        </Link>

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
          <Link className="button button-subtle header-cta" href="/more#contact">
            Prendre contact
          </Link>
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
  );
}
