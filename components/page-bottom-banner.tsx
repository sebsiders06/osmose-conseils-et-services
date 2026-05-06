import Link from "next/link";

import { company } from "@/data/site-content";

export function PageBottomBanner() {
  return (
    <section aria-label="Coordonnées et informations légales" className="page-bottom-banner">
      <div className="container page-bottom-banner__inner">
        <p className="page-bottom-banner__brand">{company.name}</p>
        <a className="page-bottom-banner__item" href={`tel:${company.phone.replace(/\s+/g, "")}`}>
          Tél. : {company.phone}
        </a>
        <a className="page-bottom-banner__item" href={`mailto:${company.email}`}>
          E-mail : {company.email}
        </a>
        <nav aria-label="Liens légaux" className="page-bottom-banner__links">
          <Link href="/mentions-legales">Mentions légales</Link>
        </nav>
      </div>
    </section>
  );
}
