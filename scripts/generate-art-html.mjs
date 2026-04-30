import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Regénère articles/art-1.html … art-11.html à partir de data/articles/bodies/body-*.ts
 * (sans dépendance tsx — extraction du template literal `html`).
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "articles");
const bodiesDir = path.join(root, "data", "articles", "bodies");

function pad2(n) {
  return String(n).padStart(2, "0");
}

function escAttr(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escBareText(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function extractHeadline(ts) {
  const m = ts.match(/^\s*headline:\s*"((?:\\.|[^"\\])*)"\s*,/m);
  if (!m) throw new Error("headline introuvable");
  return m[1].replace(/\\"/g, '"').replace(/\\n/g, "\n");
}

function extractHtml(ts) {
  const marker = /\bhtml:\s*`/;
  const match = marker.exec(ts);
  if (!match) throw new Error("html: ` introuvable");
  const start = match.index + match[0].length;
  const rest = ts.slice(start);
  const end = rest.indexOf("`,");
  if (end === -1) throw new Error("fermeture du template html introuvable");
  return rest.slice(0, end);
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
          <h1 class="TITLE_CLASS" id="article-visual-heading">TITLE_H1</h1>
          <figure class="page-article-visual__figure">
            <img class="page-article-visual__img" src="IMG_SRC" alt="IMG_ALT" width="900" height="900" decoding="async" />
          </figure>
          <div class="article-prose">
ARTICLE_INNER
          </div>
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
  const bodyPath = path.join(bodiesDir, `body-${pad2(n)}.ts`);
  const ts = fs.readFileSync(bodyPath, "utf8");
  const headline = extractHeadline(ts);
  const html = extractHtml(ts);
  const ext = n === 5 ? "jpeg" : "avif";
  const file = n === 1 ? "pleure.avif" : `art ${n}.${ext}`;
  const imgSrc = `../image/${encodeURIComponent(file)}`;
  const meta = escAttr(headline);
  const h1 = escBareText(headline);
  const inner = html
    .trim()
    .split("\n")
    .map((line) => (line ? `            ${line}` : ""))
    .join("\n");
  const titleClassAttr =
    n === 1
      ? "page-article-visual__title page-article-visual__title--long-line"
      : n === 6
        ? "page-article-visual__title page-article-visual__title--compact"
        : "page-article-visual__title";
  const page = bodyTpl
    .replaceAll("TITLE_META", meta)
    .replaceAll("DESC_META", meta)
    .replaceAll("TITLE_CLASS", titleClassAttr)
    .replaceAll("TITLE_H1", h1)
    .replaceAll("IMG_SRC", imgSrc)
    .replaceAll("IMG_ALT", meta)
    .replace("ARTICLE_INNER", inner);
  fs.writeFileSync(path.join(outDir, `art-${n}.html`), page, "utf8");
}

console.log("OK: articles/art-1.html … art-11.html");
