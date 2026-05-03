"use client";

import { usePathname } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";

/** Mêmes routes que `body:has(...) .site-footer { display: none }` dans globals.css */
const FOOTER_HIDDEN_PATHS = new Set([
  "/",
  "/expertises",
  "/enjeux",
  "/consulting",
  "/vision",
  "/coaching",
  "/articles",
  "/formations",
]);

function normalizePathname(pathname: string) {
  if (pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

export function ConditionalFooter() {
  const pathname = usePathname();
  const normalized = normalizePathname(pathname);

  if (FOOTER_HIDDEN_PATHS.has(normalized)) {
    return null;
  }

  if (/^\/consulting\/[^/]+$/.test(normalized) || /^\/coaching\/[^/]+$/.test(normalized)) {
    return null;
  }

  if (/^\/articles\/art-(?:1[01]|[1-9])$/.test(normalized)) {
    return null;
  }

  return <SiteFooter />;
}
