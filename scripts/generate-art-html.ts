import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { getArticlePageContent } from "../data/articles/index";
import type { ArticleOverlayIndex } from "../data/site-content";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "articles");

function escAttr(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escBareText(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const bodyTpl = `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, nofollow" />
    <title>TITLE_META | Osmose</title>
    <meta name="description" content="DESC_META" />
    <link rel="stylesheet" href="../styles.css" />
  </head>
  <body>
    <header class="site-header">
      <div class="container nav-shell">
        <nav class="desktop-nav" aria-label="Navigation principale">
          <a class="nav-link" href="../index.html">Home</a>
          <a class="nav-link" href="../expertises.html">Expertises</a>
          <a class="nav-link" href="../enjeux.html">Enjeux</a>
          <a class="nav-link" href="../vision.html">Vision</a>
          <a class="nav-link" href="../consulting.html">Consulting</a>
          <a class="nav-link" href="../coaching.html">Coaching</a>
          <a class="nav-link" href="../formations.html">Formations</a>
          <a class="nav-link active" href="../articles.html">Articles</a>
        </nav>
        <div class="header-actions">
          <button class="menu-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded="false" data-menu-toggle>
            <svg viewBox="0 0 24 24" aria-hidden="true" data-menu-icon>
              <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="mobile-nav-wrap" data-mobile-nav>
        <div class="container mobile-nav">
          <a class="nav-link" href="../index.html">Home</a>
          <a class="nav-link" href="../expertises.html">Expertises</a>
          <a class="nav-link" href="../enjeux.html">Enjeux</a>
          <a class="nav-link" href="../vision.html">Vision</a>
          <a class="nav-link" href="../consulting.html">Consulting</a>
          <a class="nav-link" href="../coaching.html">Coaching</a>
          <a class="nav-link" href="../formations.html">Formations</a>
          <a class="nav-link active" href="../articles.html">Articles</a>
          <a class="button button-primary" href="mailto:contact@osmose-conseils.fr">Demander un rendez-vous</a>
        </div>
      </div>
    </header>
    <main class="page-article-visual">
      <section class="page-article-visual__section" aria-labelledby="article-visual-heading">
        <div class="container page-article-visual__inner">
          <p class="page-article-visual__eyebrow">Aperçu article</p>
          <h1 class="page-article-visual__title" id="article-visual-heading">TITLE_H1</h1>
          <figure class="page-article-visual__figure">
            <img class="page-article-visual__img" src="IMG_SRC" alt="IMG_ALT" width="900" height="900" decoding="async" />
          </figure>
          <div class="article-prose">
ARTICLE_INNER
          </div>
          <p class="page-article-visual__note">Cette fiche n’est reliée à aucun lien du menu : elle est ouverte uniquement depuis la vignette correspondante sur l’accueil ou la page Articles.</p>
          <a class="button button-subtle page-article-visual__back" href="../articles.html">Retour aux aperçus</a>
        </div>
      </section>
    </main>
    <script src="../script.js"></script>
  </body>
</html>
`;

fs.mkdirSync(outDir, { recursive: true });

for (let n = 1; n <= 11; n++) {
  const idx = n as ArticleOverlayIndex;
  const { headline, html } = getArticlePageContent(idx);
  const ext = n === 5 ? "jpeg" : "avif";
  const imgSrc = `../image/${encodeURIComponent(`art ${n}.${ext}`)}`;
  const meta = escAttr(headline);
  const h1 = escBareText(headline);
  const inner = html
    .trim()
    .split("\n")
    .map((line) => (line ? `            ${line}` : ""))
    .join("\n");
  const page = bodyTpl
    .replaceAll("TITLE_META", meta)
    .replaceAll("DESC_META", meta)
    .replaceAll("TITLE_H1", h1)
    .replaceAll("IMG_SRC", imgSrc)
    .replaceAll("IMG_ALT", meta)
    .replace("ARTICLE_INNER", inner);
  fs.writeFileSync(path.join(outDir, `art-${n}.html`), page, "utf8");
}

console.log("OK: articles/art-1.html … art-11.html");
