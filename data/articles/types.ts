import type { ArticleOverlayIndex } from "@/data/site-content";

export type ArticlePageContent = {
  headline: string;
  /** Contenu principal (HTML sémantique, source maître = vous) */
  html: string;
};

export type ArticleContentRegistry = Record<ArticleOverlayIndex, ArticlePageContent>;
