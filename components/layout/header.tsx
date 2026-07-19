"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
  List,
} from "@phosphor-icons/react";
import { CONTACT, NAV_ITEMS, WHATSAPP_GENERAL, type PageKey } from "@/lib/site";
import { Hoverable } from "@/components/ui/hoverable";
import { HoverLink } from "@/components/ui/hover-link";

const MOBILE_BREAKPOINT = 860;

function activeKeyFor(pathname: string): PageKey {
  const match = NAV_ITEMS.find(
    (item) => item.href !== "/" && pathname.startsWith(item.href),
  );
  return match?.key ?? "inicio";
}

export function Header() {
  const pathname = usePathname();
  const active = activeKeyFor(pathname);

  // Replica la detección de ancho del prototipo (mobile < 860px).
  // `null` = aún sin medir → se asume desktop (igual que el default del prototipo).
  const [width, setWidth] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = width !== null && width < MOBILE_BREAKPOINT;
  const isDesktop = !isMobile;
  const mobileMenuOpen = isMobile && menuOpen;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #E6EBF2",
        fontFamily: "var(--font-jakarta), system-ui, sans-serif",
      }}
    >
      {isDesktop && (
        <div style={{ background: "#0B2137", color: "#B9C6D8", fontSize: 13 }}>
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "8px clamp(20px,5vw,48px)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 24,
            }}
          >
            <div style={{ display: "flex", gap: 26, alignItems: "center" }}>
              <a
                href={CONTACT.telHref}
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                  color: "#DCE5F0",
                  textDecoration: "none",
                }}
              >
                <Phone size={15} color="#25D366" />
                {CONTACT.tel}
              </a>
              <a
                href={CONTACT.emailHref}
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                  color: "#DCE5F0",
                  textDecoration: "none",
                }}
              >
                <EnvelopeSimple size={15} color="#25D366" />
                {CONTACT.email}
              </a>
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <span style={{ color: "#7E8EA3" }}>
                Todo el país · 50 años de trayectoria
              </span>
              <Hoverable
                as="a"
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener"
                style={{ color: "#B9C6D8", display: "flex" }}
                hoverStyle={{ color: "#fff" }}
              >
                <FacebookLogo size={16} weight="fill" />
              </Hoverable>
              <Hoverable
                as="a"
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener"
                style={{ color: "#B9C6D8", display: "flex" }}
                hoverStyle={{ color: "#fff" }}
              >
                <InstagramLogo size={16} weight="fill" />
              </Hoverable>
            </div>
          </div>
        </div>
      )}

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(20px,5vw,48px)",
          height: 74,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          aria-label="Estudio SAO — Inicio"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Image
            src="/logo-sao.png"
            alt="Estudio SAO &amp; Asoc."
            width={266}
            height={69}
            priority
            style={{ height: 46, width: "auto" }}
          />
        </Link>

        {isDesktop && (
          <nav style={{ display: "flex", alignItems: "center", gap: 34 }}>
            {NAV_ITEMS.map((item) => {
              const isActive = item.key === active;
              return (
                <HoverLink
                  key={item.key}
                  href={item.href}
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: isActive ? "#0C2340" : "#3A4859",
                    padding: "6px 0",
                    borderBottom: `2px solid ${isActive ? "#25D366" : "transparent"}`,
                    transition: "color .2s,border-color .2s",
                    textDecoration: "none",
                  }}
                  hoverStyle={{
                    color: "#0C2340",
                    borderBottom: "2px solid #25D366",
                  }}
                >
                  {item.label}
                </HoverLink>
              );
            })}
            <Hoverable
              as="a"
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noopener"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                background: "#25D366",
                color: "#08351B",
                fontWeight: 700,
                fontSize: 14,
                padding: "11px 20px",
                borderRadius: 999,
                boxShadow: "0 6px 18px rgba(37,211,102,.32)",
                transition: "transform .2s,box-shadow .2s",
                textDecoration: "none",
              }}
              hoverStyle={{
                transform: "translateY(-2px)",
                boxShadow: "0 10px 24px rgba(37,211,102,.45)",
              }}
            >
              <WhatsappLogo size={18} weight="fill" />
              WhatsApp
            </Hoverable>
          </nav>
        )}

        {isMobile && (
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menú"
            style={{
              border: "1px solid #D8E0EC",
              background: "#fff",
              width: 46,
              height: 46,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#0C2340",
            }}
          >
            <List size={24} />
          </button>
        )}
      </div>

      {mobileMenuOpen && (
        <div
          style={{
            borderTop: "1px solid #E6EBF2",
            background: "#fff",
            padding: "14px clamp(20px,5vw,48px) 22px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = item.key === active;
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: isActive ? "#0C2340" : "#3A4859",
                  padding: "12px 6px",
                  borderBottom: "1px solid #F0F3F8",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={WHATSAPP_GENERAL}
            target="_blank"
            rel="noopener"
            style={{
              marginTop: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 9,
              background: "#25D366",
              color: "#08351B",
              fontWeight: 700,
              fontSize: 15,
              padding: 14,
              borderRadius: 12,
              textDecoration: "none",
            }}
          >
            <WhatsappLogo size={19} weight="fill" />
            Contactenos por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
