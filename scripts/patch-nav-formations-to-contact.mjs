/**
 * Usage (à la racine du projet): node scripts/patch-nav-formations-to-contact.mjs
 * Remplace les liens « Formations » par « Contact » après « Articles » dans tous les .html,
 * et articles*.html#contact → contact.html.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function walkHtmlDirs(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".") || e.name === "node_modules") continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkHtmlDirs(p, acc);
    else if (p.endsWith(".html")) acc.push(p);
  }
  return acc;
}

let changed = 0;
for (const file of walkHtmlDirs(root)) {
  let s = fs.readFileSync(file, "utf8");
  const orig = s;

  s = s.replace(/<a class="nav-link([^"]*)" href="\.\.\/formations\.html">Formations<\/a>/g, "");
  s = s.replace(/<a class="nav-link([^"]*)" href="formations\.html">Formations<\/a>/g, "");

  const rel = path.relative(root, file).replace(/\\/g, "/");
  const nested = rel.includes("/");

  if (
    !s.includes('href="contact.html"') &&
    !s.includes('href="../contact.html"') &&
    !s.includes("href=\"../contact.html\"")
  ) {
    if (s.includes('href="../articles.html">Articles')) {
      s = s.replace(
        /<a class="nav-link([^"]*)" href="\.\.\/articles\.html">Articles<\/a>/g,
        `<a class="nav-link$1" href="../articles.html">Articles</a><a class="nav-link" href="../contact.html">Contact</a>`,
      );
    } else {
      s = s.replace(
        /<a class="nav-link([^"]*)" href="articles\.html">Articles<\/a>/g,
        `<a class="nav-link$1" href="articles.html">Articles</a><a class="nav-link" href="contact.html">Contact</a>`,
      );
    }
  }

  s = s.replace(/href="articles\.html#contact"/g, 'href="contact.html"');
  s = s.replace(/href="\.\.\/articles\.html#contact"/g, 'href="../contact.html"');

  if (path.basename(file) === "contact.html") {
    s = s.replace(
      /<a class="nav-link" href="contact\.html">Contact<\/a>/g,
      '<a class="nav-link active" href="contact.html">Contact</a>',
    );
  }

  if (s !== orig) {
    fs.writeFileSync(file, s, "utf8");
    changed += 1;
    console.log("Mis à jour:", rel);
  }
}

console.log(`Terminé — ${changed} fichier(s) modifié(s).`);
