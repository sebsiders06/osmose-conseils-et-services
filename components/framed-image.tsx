type FramedImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

/**
 * Conteneur encadré pour une image : fond clair, padding, coins arrondis, ombre.
 * L'image est affichée en entier (object-fit: contain), centrée, sans recadrage type cover.
 */
export function FramedImage({ src, alt, width = 800, height = 520, className = "" }: FramedImageProps) {
  return (
    <figure className={["framed-image", className].filter(Boolean).join(" ")}>
      <div className="framed-image__canvas">
        <img
          alt={alt}
          className="framed-image__img"
          decoding="async"
          height={height}
          loading="lazy"
          src={src}
          width={width}
        />
      </div>
    </figure>
  );
}
