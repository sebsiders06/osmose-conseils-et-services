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
]);

function normalizePathname(pathname: string) {
  if (pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

export function ConditionalFooter() {
  const pathname = usePathname();

  if (FOOTER_HIDDEN_PATHS.has(normalizePathname(pathname))) {
    return null;
  }

  return <SiteFooter />;
}
