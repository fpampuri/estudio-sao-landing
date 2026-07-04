"use client";

import { createElement, useState, type CSSProperties, type ReactNode } from "react";

type Tag = "a" | "button" | "div" | "span";

interface HoverableProps {
  as?: Tag;
  style: CSSProperties;
  /** Estilos que se fusionan sobre `style` mientras el mouse está encima. */
  hoverStyle?: CSSProperties;
  children?: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
  onClick?: () => void;
}

/**
 * Reproduce el atributo `style-hover` del prototipo: mantiene los estilos
 * base inline (fidelidad 1:1 con los hex del diseño) y aplica el estilo de
 * hover exacto vía estado, cosa que `:hover` inline no permite.
 */
export function Hoverable({
  as = "div",
  style,
  hoverStyle,
  children,
  href,
  target,
  rel,
  type,
  ariaLabel,
  onClick,
}: HoverableProps) {
  const [hovered, setHovered] = useState(false);

  const merged: CSSProperties =
    hovered && hoverStyle ? { ...style, ...hoverStyle } : style;

  return createElement(
    as,
    {
      style: merged,
      href,
      target,
      rel,
      type,
      "aria-label": ariaLabel,
      onClick,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      onFocus: () => setHovered(true),
      onBlur: () => setHovered(false),
    },
    children,
  );
}
