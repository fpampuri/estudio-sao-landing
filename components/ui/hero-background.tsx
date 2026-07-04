import Image from "next/image";

interface HeroBackgroundProps {
  src: string;
  /** Overlay navy encima de la foto para asegurar legibilidad del texto. */
  overlay?: string;
  /** Marca la imagen como prioritaria (los heros están above-the-fold). */
  priority?: boolean;
}

const DEFAULT_OVERLAY =
  "linear-gradient(158deg, rgba(11,33,55,.88) 0%, rgba(12,35,64,.76) 46%, rgba(18,58,99,.64) 100%)";

/**
 * Fondo de hero: foto de accidente cubriendo la sección, con un overlay navy
 * de marca por encima. Se coloca como primer hijo de un `<section>` con
 * `position: relative; overflow: hidden`; el contenido debe ir en un contenedor
 * con `position: relative; zIndex: 1` para quedar por encima.
 */
export function HeroBackground({
  src,
  overlay = DEFAULT_OVERLAY,
  priority = true,
}: HeroBackgroundProps) {
  return (
    <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0 }}>
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div style={{ position: "absolute", inset: 0, background: overlay }} />
    </div>
  );
}
