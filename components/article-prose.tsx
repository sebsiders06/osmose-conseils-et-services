type Props = { html: string; className?: string };

/** Contenu articles : HTML statique fourni par le client, non injecté depuis des entrées externes. */
export function ArticleProse({ html, className = "" }: Props) {
  return (
    <div
      className={`article-prose ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
