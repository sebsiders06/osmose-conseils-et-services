import type { Metadata } from "next";
import Image from "next/image";

import { articleOverlayTitles } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Articles",
  description: "Osmose Conseils & Services.",
};

const ART_INDICES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const;

function artImageSrc(n: (typeof ART_INDICES)[number]): string {
  const ext = n === 5 ? "jpeg" : "avif";
  return `/image/${encodeURIComponent(`art ${n}.${ext}`)}`;
}

export default function ArticlesPage() {
  return (
    <div className="page-articles">
      <section className="articles-gallery-section" aria-label="Aperçu articles">
        <div className="container articles-gallery-section__inner">
          <ul className="articles-gallery-grid">
            {ART_INDICES.map((n) => {
              const caption = articleOverlayTitles[n];
              return (
              <li key={n} className="articles-gallery-card">
                <div className="articles-gallery-card__frame">
                  <Image
                    alt={caption}
                    className="articles-gallery-card__img"
                    fill
                    sizes="(max-width: 520px) calc(50vw - 1.5rem), (max-width: 900px) calc(33.333vw - 1.35rem), calc((min(1200px, 100vw) - 2rem - 3 * 1rem) / 4)"
                    src={artImageSrc(n)}
                    quality={90}
                    loading={n <= 4 ? "eager" : "lazy"}
                    priority={n <= 2}
                  />
                  <p className="art-preview-overlay">{caption}</p>
                </div>
              </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
