import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
} from "@phosphor-icons/react/dist/ssr";
import { CONTACT } from "@/lib/site";
import { Hoverable } from "@/components/ui/hoverable";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      style={{
        background: "#0B1B30",
        color: "#8FA0B6",
        fontFamily: "var(--font-jakarta), system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(48px,6vw,72px) clamp(20px,5vw,48px) 40px",
          display: "flex",
          flexWrap: "wrap",
          gap: 40,
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: "1 1 280px", minWidth: 240 }}>
          <Link
            href="/"
            aria-label="Estudio SAO — Inicio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Image
              src="/logo-sao.png"
              alt="Estudio SAO &amp; Asoc."
              width={266}
              height={69}
              style={{
                height: 44,
                width: "auto",
                // Logo en negro sobre fondo oscuro → se invierte a blanco.
                filter: "brightness(0) invert(1)",
              }}
            />
          </Link>
          <p
            style={{
              marginTop: 18,
              fontSize: 15,
              maxWidth: "34ch",
              color: "#8394AB",
            }}
          >
            Estudio integral especialistas en seguros y accidentes. 50 años de
            trayectoria en todo el país.
          </p>
        </div>

        <div style={{ flex: "0 1 auto" }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "#5E708A",
            }}
          >
            Contacto
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginTop: 16,
              fontSize: 15,
            }}
          >
            <Hoverable
              as="a"
              href={CONTACT.telHref}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                color: "inherit",
              }}
              hoverStyle={{ color: "#fff" }}
            >
              <Phone size={17} color="#25D366" />
              {CONTACT.tel}
            </Hoverable>
            <Hoverable
              as="a"
              href={CONTACT.emailHref}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                color: "inherit",
              }}
              hoverStyle={{ color: "#fff" }}
            >
              <EnvelopeSimple size={17} color="#25D366" />
              {CONTACT.email}
            </Hoverable>
          </div>
        </div>

        <div style={{ flex: "0 1 auto" }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "#5E708A",
            }}
          >
            Nuestras redes sociales
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
            <Hoverable
              as="a"
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener"
              ariaLabel="Facebook"
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "rgba(255,255,255,.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background .2s",
                textDecoration: "none",
              }}
              hoverStyle={{ background: "#25D366" }}
            >
              <FacebookLogo size={20} weight="fill" color="#fff" />
            </Hoverable>
            <Hoverable
              as="a"
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener"
              ariaLabel="Instagram"
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "rgba(255,255,255,.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background .2s",
                textDecoration: "none",
              }}
              hoverStyle={{ background: "#25D366" }}
            >
              <InstagramLogo size={20} weight="fill" color="#fff" />
            </Hoverable>
            <Hoverable
              as="a"
              href={CONTACT.emailHref}
              ariaLabel="Email"
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "rgba(255,255,255,.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background .2s",
                textDecoration: "none",
              }}
              hoverStyle={{ background: "#25D366" }}
            >
              <EnvelopeSimple size={20} weight="fill" color="#fff" />
            </Hoverable>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "22px clamp(20px,5vw,48px)",
            fontSize: 13,
            color: "#5E708A",
            textAlign: "center",
          }}
        >
          © {year} Estudio SAO &amp; Asoc.® · Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}
