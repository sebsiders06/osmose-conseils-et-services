"use client";

import { usePathname } from "next/navigation";

import { PageBottomBanner } from "@/components/page-bottom-banner";
import { SiteFooter } from "@/components/site-footer";

const BANNER_VISIBLE_PATHS = new Set([
  "/",
  "/expertises",
  "/enjeux",
  "/consulting",
  "/vision",
  "/coaching",
  "/articles",
  "/contact",
]);

function normalizePathname(pathname: string) {
  if (pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

export function ConditionalFooter() {
  const pathname = usePathname();
  const normalized = normalizePathname(pathname);

  if (BANNER_VISIBLE_PATHS.has(normalized)) {
    return <PageBottomBanner />;
  }

  if (normalized === "/formation") {
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
