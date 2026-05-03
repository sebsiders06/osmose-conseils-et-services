/**
 * Lit `data/service-offers.json`, génère consulting/*.html et coaching/*.html,
 * met à jour les liens consulting.html et réécrit la grille coaching.html (titres-liens sans boutons).
 *
 * Après modification du JSON : npm run gen:offers
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const jsonPath = path.join(root, "data", "service-offers.json");

function siteHeader(navActiveConsulting, navActiveCoaching) {
  const consultingActive = navActiveConsulting ? " active" : "";
  const coachingActive = navActiveCoaching ? " active" : "";
  return `<header class="site-header"><div class="container nav-shell"><nav class="desktop-nav" aria-label="Navigation principale"><a class="nav-link" href="../index.html">Home</a><a class="nav-link" href="../expertises.html">Expertises</a><a class="nav-link" href="../enjeux.html">Enjeux</a><a class="nav-link" href="../vision.html">Vision</a><a class="nav-link${consultingActive}" href="../consulting.html">Consulting</a><a class="nav-link${coachingActive}" href="../coaching.html">Coaching</a><a class="nav-link" href="../formations.html">Formations</a><a class="nav-link" href="../articles.html">Articles</a></nav><div class="header-actions"><button class="menu-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded="false" data-menu-toggle><svg viewBox="0 0 24 24" aria-hidden="true" data-menu-icon><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"></path></svg></button></div></div><div class="mobile-nav-wrap" data-mobile-nav><div class="container mobile-nav"><a class="nav-link" href="../index.html">Home</a><a class="nav-link" href="../expertises.html">Expertises</a><a class="nav-link" href="../enjeux.html">Enjeux</a><a class="nav-link" href="../vision.html">Vision</a><a class="nav-link${consultingActive}" href="../consulting.html">Consulting</a><a class="nav-link${coachingActive}" href="../coaching.html">Coaching</a><a class="nav-link" href="../formations.html">Formations</a><a class="nav-link" href="../articles.html">Articles</a><a class="button button-primary" href="../articles.html#contact">Demander un rendez-vous</a></div></div></header>`;
}

function escBareText(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escAttr(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/'/g, "&#39;");
}

function subtitleHtml(kind, gridTitle) {
  const subCls =
    kind === "coaching"
      ? "page-coaching-hero__title-line page-coaching-hero__title-line--sub"
      : "page-consulting-hero__title-line page-consulting-hero__title-line--sub";
  const extra = gridTitle.includes("\n") ? " page-service-offer-detail__subtitle--multiline" : "";
  if (gridTitle.includes("\n")) {
    const inner = gridTitle.split("\n").map((line) => escBareText(line)).join("<br />");
    return `<span class="${subCls}${extra}">${inner}</span>`;
  }
  return `<span class="${subCls}">${escBareText(gridTitle)}</span>`;
}

function heroSection(kind, gridTitle) {
  if (kind === "consulting") {
    return `<div class="page-consulting__hero"><img class="page-consulting__hero-img" src="../image/géant.jpeg" alt="" width="1920" height="640" /><div class="page-consulting__hero-overlay"><div class="container"><h1 class="page-consulting-hero__title"><span class="page-consulting-hero__title-line page-consulting-hero__title-line--primary">CONSULTING</span>${subtitleHtml("consulting", gridTitle)}</h1></div></div></div>`;
  }
  return `<div class="page-coaching__hero"><img class="page-coaching__hero-img" src="../image/géant.jpeg" alt="" width="1920" height="640" /><div class="page-coaching__hero-overlay"><div class="container"><h1 class="page-coaching-hero__title"><span class="page-coaching-hero__title-line page-coaching-hero__title-line--primary">COACHING</span>${subtitleHtml("coaching", gridTitle)}</h1></div></div></div>`;
}

function titleForMetaMultiline(gridTitle) {
  return gridTitle.replace(/\s*\n\s*/g, " · ").replace(/\s+/g, " ").trim();
}

function coachingGridListingAnchorInner(gridTitle) {
  return gridTitle.includes("\n")
    ? gridTitle.split("\n").map((line) => escBareText(line)).join("<br />")
    : escBareText(gridTitle);
}

function buildCoachingIndexGridSection(offers) {
  const rows = offers
    .map((offer, i) => {
      const num = i + 1;
      const inner = coachingGridListingAnchorInner(offer.gridTitle);
      const label = escAttr(titleForMetaMultiline(offer.gridTitle));
      return `          <a href="coaching/${offer.slug}.html" class="page-coaching__square page-coaching__square--link-card ${offer.visualClass}" aria-label="${label} — voir la fiche">
            <div class="page-consulting__square-body">
              <span class="page-coaching__square-num" aria-hidden="true">${num}</span>
              <span class="page-consulting__square-name page-coaching__square-card-title">${inner}</span>
            </div>
          </a>`;
    })
    .join("\n");

  return `<section class="page-coaching__square-grid" aria-label="Offres coaching">\n${rows}\n        </section>`;
}

function rewriteCoachingListing(html, offers) {
  const re = /<section class="page-coaching__square-grid"[^>]*>[\s\S]*?<\/section>/;
  if (!re.test(html)) {
    console.warn("Section grille coaching introuvable dans coaching.html");
    return html;
  }
  return html.replace(re, buildCoachingIndexGridSection(offers));
}

function generateOfferHtml(kind, offer) {
  const pageRootClass = kind === "consulting" ? "page-consulting" : "page-coaching";
  const backHref = kind === "consulting" ? "../consulting.html" : "../coaching.html";
  const backLabel = kind === "consulting" ? "Retour à Consulting" : "Retour à Coaching";
  const metaLabel = titleForMetaMultiline(offer.gridTitle);
  const metaTitle =
    kind === "consulting" ? `${metaLabel} — Consulting — Osmose` : `${metaLabel} — Coaching — Osmose`;
  const paras = offer.paragraphs.map((p) => `<p class="page-consulting__intro-text">${escBareText(p)}</p>`).join("\n");

  return `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, nofollow" />
    <title>${escBareText(metaTitle)}</title>
    <meta name="description" content="${escAttr(offer.paragraphs[0])}" />
    <link rel="stylesheet" href="../styles.css" />
  </head>
  <body>
    ${siteHeader(kind === "consulting", kind === "coaching")}
    <main class="${pageRootClass} page-service-offer-detail">
      ${heroSection(kind, offer.gridTitle)}
      <div class="${pageRootClass}__content">
        <div class="page-service-offer-detail__visual ${offer.visualClass}" aria-hidden="true"></div>
        <div class="page-consulting__intro-box page-service-offer-detail__body">
${paras}
        </div>
        <div class="page-service-offer-detail__actions">
          <a class="button button-subtle" href="${backHref}">${backLabel}</a>
          <a class="button button-primary" href="../articles.html#contact">Échanger sur votre projet</a>
        </div>
      </div>
    </main>
    <script src="../script.js"></script>
  </body>
</html>
`;
}

if (!fs.existsSync(jsonPath)) {
  console.error("Fichier manquant :", jsonPath, "→ créez data/service-offers.json (voir le dépôt).");
  process.exit(1);
}

const { consulting, coaching } = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

const consultingDir = path.join(root, "consulting");
const coachingDir = path.join(root, "coaching");
fs.mkdirSync(consultingDir, { recursive: true });
fs.mkdirSync(coachingDir, { recursive: true });

for (const offer of consulting) {
  fs.writeFileSync(path.join(consultingDir, `${offer.slug}.html`), generateOfferHtml("consulting", offer), "utf8");
}

for (const offer of coaching) {
  fs.writeFileSync(path.join(coachingDir, `${offer.slug}.html`), generateOfferHtml("coaching", offer), "utf8");
}

console.log(`Généré : ${consulting.length} fichier(s) dans consulting/, ${coaching.length} dans coaching/`);

function patchConsultingListPage(fileName, kindSegment, offers) {
  let html = fs.readFileSync(path.join(root, fileName), "utf8");
  const ctaPattern = /<a href="[^"]*" class="button button-primary page-consulting__square-cta">En savoir plus<\/a>/;
  const replacementHref = `${kindSegment}/`;
  for (let i = 0; i < offers.length; i++) {
    const slug = offers[i].slug;
    const m = ctaPattern.exec(html);
    if (!m) {
      console.warn("Pas assez de boutons « En savoir plus » dans", fileName);
      break;
    }
    const repl = `<a href="${replacementHref}${slug}.html" class="button button-primary page-consulting__square-cta">En savoir plus</a>`;
    html = html.slice(0, m.index) + repl + html.slice(m.index + m[0].length);
  }
  fs.writeFileSync(path.join(root, fileName), html, "utf8");
  console.log("Mis à jour :", fileName);
}

patchConsultingListPage("consulting.html", "consulting", consulting);

let coachingHtml = fs.readFileSync(path.join(root, "coaching.html"), "utf8");
coachingHtml = rewriteCoachingListing(coachingHtml, coaching);
fs.writeFileSync(path.join(root, "coaching.html"), coachingHtml, "utf8");
console.log("Mis à jour : coaching.html (grille, titres-liens)");
