import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleProse } from "@/components/article-prose";
import { getArticlePageContent } from "@/data/articles";
import { articleArtImagePublicPath, parseArticleArtSlug } from "@/data/site-content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Array.from({ length: 11 }, (_, i) => ({ slug: `art-${i + 1}` }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const n = parseArticleArtSlug(slug);
  if (!n) return { title: "Article" };
  const { headline } = getArticlePageContent(n);
  return {
    title: headline,
    description: headline,
    robots: { index: false, follow: false },
  };
}

export default async function ArticleVisualPage({ params }: Props) {
  const { slug } = await params;
  const n = parseArticleArtSlug(slug);
  if (!n) notFound();

  const { headline, html } = getArticlePageContent(n);
  const src = articleArtImagePublicPath(n);

  return (
    <div className="page-article-visual">
      <section className="page-article-visual__section" aria-labelledby="article-visual-heading">
        <div className="container page-article-visual__inner">
          <p className="page-article-visual__eyebrow">Aperçu article</p>
          <h1 className="page-article-visual__title" id="article-visual-heading">
            {headline}
          </h1>
          <figure className="page-article-visual__figure">
            <Image
              alt={headline}
              className="page-article-visual__img"
              height={900}
              src={src}
              width={900}
              priority
              quality={92}
            />
          </figure>
          <ArticleProse html={html} />
          <Link className="button button-subtle page-article-visual__back" href="/articles">
            Retour aux aperçus
          </Link>
        </div>
      </section>
    </div>
  );
}
