/**
 * Lit `data/service-offers.json`, génère consulting/*.html et coaching/*.html,
 * et met à jour les grilles consulting.html et coaching.html (cartes entièrement cliquables).
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
  return `<header class="site-header"><div class="container nav-shell"><nav class="desktop-nav" aria-label="Navigation principale"><a class="nav-link" href="../index.html">Home</a><a class="nav-link" href="../expertises.html">Expertises</a><a class="nav-link" href="../enjeux.html">Enjeux</a><a class="nav-link" href="../vision.html">Vision</a><a class="nav-link${consultingActive}" href="../consulting.html">Consulting</a><a class="nav-link${coachingActive}" href="../coaching.html">Coaching</a><a class="nav-link" href="../articles.html">Articles</a><a class="nav-link" href="../contact.html">Contact</a></nav><div class="header-actions"><button class="menu-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded="false" data-menu-toggle><svg viewBox="0 0 24 24" aria-hidden="true" data-menu-icon><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"></path></svg></button></div></div><div class="mobile-nav-wrap" data-mobile-nav><div class="container mobile-nav"><a class="nav-link" href="../index.html">Home</a><a class="nav-link" href="../expertises.html">Expertises</a><a class="nav-link" href="../enjeux.html">Enjeux</a><a class="nav-link" href="../vision.html">Vision</a><a class="nav-link${consultingActive}" href="../consulting.html">Consulting</a><a class="nav-link${coachingActive}" href="../coaching.html">Coaching</a><a class="nav-link" href="../articles.html">Articles</a><a class="nav-link" href="../contact.html">Contact</a><a class="button button-primary" href="../contact.html">Demander un rendez-vous</a></div></div></header>`;
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

function offerHeroSection(kind, gridTitle) {
  if (kind === "consulting") {
    return `<div class="page-consulting__hero page-service-offer-detail__hero"><div class="page-consulting__hero-overlay"><div class="container"><h1 class="page-consulting-hero__title"><span class="page-consulting-hero__title-line page-consulting-hero__title-line--primary">CONSULTING</span>${subtitleHtml("consulting", gridTitle)}</h1></div></div></div>`;
  }
  return `<div class="page-coaching__hero page-service-offer-detail__hero"><div class="page-coaching__hero-overlay"><div class="container"><h1 class="page-coaching-hero__title"><span class="page-coaching-hero__title-line page-coaching-hero__title-line--primary">COACHING</span>${subtitleHtml("coaching", gridTitle)}</h1></div></div></div>`;
}

function titleForMetaMultiline(gridTitle) {
  return gridTitle.replace(/\s*\n\s*/g, " · ").replace(/\s+/g, " ").trim();
}

function normalizeOfferHeading(heading) {
  return heading.replace(/\u200b/g, "").trim().toUpperCase();
}

function pickSubsection(subsections, kind) {
  if (!subsections?.length) return undefined;
  if (kind === "enjeux") {
    return subsections.find((s) => normalizeOfferHeading(s.heading) === "ENJEUX");
  }
  return subsections.find((s) => normalizeOfferHeading(s.heading).includes("BÉNÉFICE"));
}

function generateOfferPanelsHtml(offer) {
  const paras = offer.paragraphs.map((p) => `<p class="page-consulting__intro-text">${escBareText(p)}</p>`).join("\n");

  let html = `        <div class="page-service-offer-detail__panels">
        <div class="page-consulting__intro-box page-service-offer-detail__panel page-service-offer-detail__panel--intro">
${paras}
        </div>`;

  const enjeuxSec = pickSubsection(offer.subsections, "enjeux");
  const beneficesSec = pickSubsection(offer.subsections, "benefices");

  if (enjeuxSec) {
    html += `
        <section class="page-consulting__intro-box page-service-offer-detail__panel page-service-offer-detail__panel--enjeux" aria-labelledby="offer-enjeux-heading">
          <h2 class="page-service-offer-detail__subsection-heading" id="offer-enjeux-heading">${escBareText(enjeuxSec.heading)}</h2>
          <ul class="page-service-offer-detail__subsection-list">
${enjeuxSec.items.map((item) => `            <li>${escBareText(item)}</li>`).join("\n")}
          </ul>
        </section>`;
  }

  if (beneficesSec) {
    html += `
        <section class="page-consulting__intro-box page-service-offer-detail__panel page-service-offer-detail__panel--benefices" aria-labelledby="offer-benefices-heading">
          <h2 class="page-service-offer-detail__subsection-heading" id="offer-benefices-heading">${escBareText(beneficesSec.heading)}</h2>
          <ul class="page-service-offer-detail__subsection-list">
${beneficesSec.items.map((item) => `            <li>${escBareText(item)}</li>`).join("\n")}
          </ul>
        </section>`;
  }

  html += `
        </div>`;
  return html;
}

function generateOfferHtml(kind, offer) {
  const pageRootClass = kind === "consulting" ? "page-consulting" : "page-coaching";
  const backHref = kind === "consulting" ? "../consulting.html" : "../coaching.html";
  const backLabel = kind === "consulting" ? "Retour à Consulting" : "Retour à Coaching";
  const metaLabel = titleForMetaMultiline(offer.gridTitle);
  const metaTitle =
    kind === "consulting" ? `${metaLabel} — Consulting — Osmose` : `${metaLabel} — Coaching — Osmose`;
  const panelsInner = generateOfferPanelsHtml(offer);

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
      <div class="${pageRootClass}__content">
        <div class="page-service-offer-detail__sheet">
          ${offerHeroSection(kind, offer.gridTitle)}
          <div class="page-service-offer-detail__sheet-main">
            ${panelsInner}
          </div>
        </div>
        <div class="page-service-offer-detail__actions">
          <a class="button button-subtle" href="${backHref}">${backLabel}</a>
          <a class="button button-primary" href="../contact.html">Échanger sur votre projet</a>
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

function offerGridTitleHtml(gridTitle) {
  if (gridTitle.includes("\n")) {
    return gridTitle.split("\n").map((line) => escBareText(line)).join("<br />");
  }
  return escBareText(gridTitle);
}

function buildConsultingIndexSection(offers, kindSegment) {
  return offers
    .map(
      (offer) => `          <a class="page-consulting__square ${offer.visualClass}" href="${kindSegment}/${offer.slug}.html">
            <div class="page-consulting__square-body">
              <p class="page-consulting__square-name">${offerGridTitleHtml(offer.gridTitle)}</p>
            </div>
          </a>`,
    )
    .join("\n");
}

function rewriteConsultingIndexGrid(html, offers, kindSegment) {
  const inner = buildConsultingIndexSection(offers, kindSegment);
  return html.replace(
    /(<section class="page-consulting__square-grid" aria-label="Offres consulting">)\s*[\s\S]*?(\s*<\/section>)/,
    `$1\n${inner}\n        $2`,
  );
}

function buildCoachingIndexSection(offers, kindSegment) {
  return offers
    .map(
      (offer) => `          <a class="page-coaching__square ${offer.visualClass}" href="${kindSegment}/${offer.slug}.html">
            <div class="page-consulting__square-body">
              <p class="page-consulting__square-name">${offerGridTitleHtml(offer.gridTitle)}</p>
            </div>
          </a>`,
    )
    .join("\n");
}

function rewriteCoachingIndexGrid(html, offers, kindSegment) {
  const inner = buildCoachingIndexSection(offers, kindSegment);
  return html.replace(
    /(<section class="page-coaching__square-grid" aria-label="Offres coaching">)\s*[\s\S]*?(\s*<\/section>)/,
    `$1\n${inner}\n        $2`,
  );
}

console.log(`Généré : ${consulting.length} fichier(s) dans consulting/, ${coaching.length} dans coaching/`);

function patchListPage(fileName, kindSegment, offers) {
  let html = fs.readFileSync(path.join(root, fileName), "utf8");

  if (fileName === "consulting.html") {
    html = rewriteConsultingIndexGrid(html, offers, kindSegment);
    fs.writeFileSync(path.join(root, fileName), html, "utf8");
    console.log("Mis à jour :", fileName);
    return;
  }

  if (fileName === "coaching.html") {
    html = rewriteCoachingIndexGrid(html, offers, kindSegment);
    fs.writeFileSync(path.join(root, fileName), html, "utf8");
    console.log("Mis à jour :", fileName);
    return;
  }
}

patchListPage("consulting.html", "consulting", consulting);
patchListPage("coaching.html", "coaching", coaching);
