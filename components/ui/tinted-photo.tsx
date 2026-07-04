import Image from "next/image";
import type { CSSProperties } from "react";

interface TintedPhotoProps {
  src: string;
  alt: string;
  /** CSS aspect-ratio, ej. "4/3" o "5/6". */
  aspectRatio: string;
  /** Borde del contenedor (varía entre hero oscuro y sección clara). */
  border: string;
  /** Ancho de referencia para el sizing de next/image. */
  sizes?: string;
  /** Marca la imagen como LCP (above-the-fold) para carga prioritaria. */
  priority?: boolean;
}

/**
 * Foto con tinte azulado de marca (navy). La imagen va en `object-fit: cover`
 * dentro del contenedor redondeado del prototipo, con un overlay navy en
 * `mix-blend-mode: multiply` que la integra a la paleta del estudio.
 */
export function TintedPhoto({
  src,
  alt,
  aspectRatio,
  border,
  sizes = "(max-width: 860px) 100vw, 600px",
  priority = false,
}: TintedPhotoProps) {
  const container: CSSProperties = {
    position: "relative",
    borderRadius: 22,
    overflow: "hidden",
    border,
    aspectRatio,
    background: "#0C2340",
  };

  return (
    <div style={container}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{
          objectFit: "cover",
          filter: "saturate(1.05) contrast(1.02)",
        }}
      />
      {/* Tinte navy de marca */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(158deg, rgba(11,33,55,.62) 0%, rgba(18,58,99,.42) 100%)",
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
      />
      {/* Realce sutil de azules en las luces */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(158deg, rgba(37,99,163,.20), transparent 70%)",
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
