import type { ArticleOverlayIndex } from "@/data/site-content";

import { articleContent01 } from "./bodies/body-01";
import { articleContent02 } from "./bodies/body-02";
import { articleContent03 } from "./bodies/body-03";
import { articleContent04 } from "./bodies/body-04";
import { articleContent05 } from "./bodies/body-05";
import { articleContent06 } from "./bodies/body-06";
import { articleContent07 } from "./bodies/body-07";
import { articleContent08 } from "./bodies/body-08";
import { articleContent09 } from "./bodies/body-09";
import { articleContent10 } from "./bodies/body-10";
import { articleContent11 } from "./bodies/body-11";
import type { ArticlePageContent } from "./types";

const byIndex: Record<ArticleOverlayIndex, ArticlePageContent> = {
  1: articleContent01,
  2: articleContent02,
  3: articleContent03,
  4: articleContent04,
  5: articleContent05,
  6: articleContent06,
  7: articleContent07,
  8: articleContent08,
  9: articleContent09,
  10: articleContent10,
  11: articleContent11,
};

export function getArticlePageContent(n: ArticleOverlayIndex): ArticlePageContent {
  return byIndex[n];
}
