import Link from "next/link";

import { company, getVisibleNavigationItems } from "@/data/site-content";

function SocialIcon({ label }: { label: "in" | "x" }) {
  return (
    <span aria-hidden="true" className="social-badge">
      {label}
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">Osmose Conseils & Services</p>
          <h2>Des transformations plus claires, plus humaines et plus durables.</h2>
          <p className="section-copy">
            Nous accompagnons les entreprises qui veulent aligner vision, execution et engagement collectif.
          </p>
        </div>

        <div>
          <h3>Coordonnees</h3>
          <ul className="footer-list">
            <li>{company.address}</li>
            <li>
              <a href={`tel:${company.phone.replace(/\s+/g, "")}`}>{company.phone}</a>
            </li>
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Liens rapides</h3>
          <ul className="footer-list">
            {getVisibleNavigationItems().map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Reseaux</h3>
          <div className="social-links">
            <a aria-label="LinkedIn" href={company.linkedin}>
              <SocialIcon label="in" />
            </a>
            <a aria-label="X" href={company.x}>
              <SocialIcon label="x" />
            </a>
          </div>
          <p className="footer-caption">Site vitrine premium, responsive et optimise pour une prise de contact rapide.</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} {company.name}. Tous droits reserves.</p>
        <Link href="/articles#faq">FAQ</Link>
      </div>
    </footer>
  );
}
