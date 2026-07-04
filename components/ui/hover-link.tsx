"use client";

import Link from "next/link";
import { useState, type CSSProperties, type ReactNode } from "react";

interface HoverLinkProps {
  href: string;
  style: CSSProperties;
  hoverStyle?: CSSProperties;
  children: ReactNode;
  onClick?: () => void;
}

/**
 * Link interno (navegación client-side de Next) con el estilo de hover
 * exacto del prototipo aplicado vía estado.
 */
export function HoverLink({
  href,
  style,
  hoverStyle,
  children,
  onClick,
}: HoverLinkProps) {
  const [hovered, setHovered] = useState(false);
  const merged = hovered && hoverStyle ? { ...style, ...hoverStyle } : style;

  return (
    <Link
      href={href}
      style={merged}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {children}
    </Link>
  );
}
