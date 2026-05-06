import Link from "next/link";

import { company } from "@/data/site-content";

export function PageBottomBanner() {
  return (
    <section aria-label="Coordonnees et informations legales" className="page-bottom-banner">
      <div className="container page-bottom-banner__inner">
        <p className="page-bottom-banner__brand">{company.name}</p>
        <a className="page-bottom-banner__item" href={`tel:${company.phone.replace(/\s+/g, "")}`}>
          Tel : {company.phone}
        </a>
        <a className="page-bottom-banner__item" href={`mailto:${company.email}`}>
          Email : {company.email}
        </a>
        <nav aria-label="Liens legaux" className="page-bottom-banner__links">
          <Link href="/mentions-legales">Mentions legales</Link>
          <Link href="/cgu">CGU</Link>
          <Link href="/politique-confidentialite">Confidentialite</Link>
        </nav>
      </div>
    </section>
  );
}
