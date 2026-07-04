import {
  Medal,
  ArrowDown,
  WhatsappLogo,
  CheckCircle,
  Phone,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";
import { Hoverable } from "@/components/ui/hoverable";
import { ServiceCard } from "@/components/ui/service-card";
import { TintedPhoto } from "@/components/ui/tinted-photo";
import { HeroBackground } from "@/components/ui/hero-background";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { CONTACT, WHATSAPP_GENERAL } from "@/lib/site";
import { SERVICES, AREAS, STATS } from "@/lib/content/home";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        style={{
          position: "relative",
          background:
            "linear-gradient(158deg,#0B2137 0%,#0C2340 46%,#123A63 100%)",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        <HeroBackground src="/fotos/hero-inicio.jpg" />
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -120,
            width: 520,
            height: 520,
            background:
              "radial-gradient(circle,rgba(37,211,102,.16),transparent 62%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -140,
            width: 460,
            height: 460,
            background:
              "radial-gradient(circle,rgba(255,255,255,.05),transparent 60%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1200,
            margin: "0 auto",
            padding: "clamp(56px,8vw,104px) clamp(20px,5vw,48px)",
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(40px,6vw,72px)",
            alignItems: "center",
          }}
        >
          <div style={{ flex: "1 1 460px", minWidth: 300 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: "rgba(255,255,255,.08)",
                border: "1px solid rgba(201,162,75,.5)",
                color: "#E8D9B4",
                padding: "8px 16px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: ".03em",
              }}
            >
              <Medal size={16} weight="fill" color="#C9A24B" />
              50 años de trayectoria
            </span>
            <h1
              style={{
                fontSize: "clamp(38px,5.4vw,64px)",
                margin: "26px 0 0",
                color: "#fff",
                maxWidth: "15ch",
              }}
            >
              Estudio integral especialistas en seguros y accidentes
            </h1>
            <p
              style={{
                fontSize: "clamp(18px,2.2vw,23px)",
                color: "#B9C6D8",
                marginTop: 22,
                maxWidth: "34ch",
              }}
            >
              50 años de trayectoria en todo el país.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                marginTop: 38,
              }}
            >
              <Hoverable
                as="a"
                href={WHATSAPP_GENERAL}
                target="_blank"
                rel="noopener"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 11,
                  background: "#25D366",
                  color: "#08351B",
                  fontWeight: 700,
                  fontSize: 16,
                  padding: "16px 28px",
                  borderRadius: 14,
                  boxShadow: "0 12px 30px rgba(37,211,102,.4)",
                  transition: "transform .2s,box-shadow .2s",
                }}
                hoverStyle={{
                  transform: "translateY(-3px)",
                  boxShadow: "0 18px 40px rgba(37,211,102,.5)",
                }}
              >
                <WhatsappLogo size={22} weight="fill" />
                Contactenos ahora por WhatsApp
              </Hoverable>
              <Hoverable
                as="a"
                href="#servicios"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  background: "transparent",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 16,
                  padding: "16px 24px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,.28)",
                  transition: "background .2s,border-color .2s",
                }}
                hoverStyle={{
                  background: "rgba(255,255,255,.08)",
                  border: "1px solid rgba(255,255,255,.5)",
                }}
              >
                Ver servicios <ArrowDown size={18} />
              </Hoverable>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section style={{ background: "#0C2340" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 clamp(20px,5vw,48px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          }}
        >
          {STATS.map((s) => (
            <div
              key={s.l}
              style={{
                padding: "26px 20px",
                textAlign: "center",
                borderRight: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-newsreader), serif",
                  fontWeight: 600,
                  fontSize: "clamp(22px,2.6vw,30px)",
                  color: "#fff",
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#93A2B8",
                  marginTop: 4,
                  fontWeight: 500,
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICIOS ===== */}
      <section id="servicios" style={{ background: "#F4F7FB" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "clamp(64px,8vw,112px) clamp(20px,5vw,48px)",
          }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: 640,
              margin: "0 auto 54px",
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "#25812F",
              }}
            >
              Nuestros servicios
            </span>
            <h2
              style={{
                fontSize: "clamp(30px,4vw,46px)",
                color: "#0C2340",
                marginTop: 14,
              }}
            >
              ¿En qué te podemos ayudar?
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
              gap: 26,
            }}
          >
            {SERVICES.map((svc) => (
              <ServiceCard key={svc.title} {...svc} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== NOSOTROS ===== */}
      <section style={{ background: "#fff" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "clamp(64px,8vw,112px) clamp(20px,5vw,48px)",
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(40px,6vw,80px)",
            alignItems: "center",
          }}
        >
          <div
            style={{ flex: "1 1 380px", minWidth: 300, position: "relative" }}
          >
            <TintedPhoto
              src="/fotos/accidente-b.jpg"
              alt="Vehículo siniestrado trasladado en grúa"
              aspectRatio="5/6"
              border="1px solid #E6EBF2"
            />
            <div
              style={{
                position: "absolute",
                right: -16,
                top: -16,
                background: "#0C2340",
                color: "#fff",
                borderRadius: 16,
                padding: "18px 22px",
                boxShadow: "0 16px 36px rgba(12,35,64,.28)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-newsreader), serif",
                  fontWeight: 700,
                  fontSize: 30,
                  lineHeight: 1,
                }}
              >
                +50
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#B9C6D8",
                  fontWeight: 600,
                  letterSpacing: ".02em",
                }}
              >
                años en los rubros
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 440px", minWidth: 300 }}>
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "#25812F",
              }}
            >
              Sobre nosotros
            </span>
            <h2
              style={{
                fontSize: "clamp(30px,4vw,46px)",
                color: "#0C2340",
                marginTop: 14,
                maxWidth: "16ch",
              }}
            >
              Quiénes somos
            </h2>
            <p
              style={{
                fontSize: 19,
                color: "#3A4859",
                marginTop: 22,
                maxWidth: "52ch",
              }}
            >
              Somos un grupo de profesionales formados tanto en él área legal,
              médico, automotriz, seguros y accidentes de tránsito
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 22,
              }}
            >
              {AREAS.map((area) => (
                <span
                  key={area}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    background: "#F4F7FB",
                    border: "1px solid #E6EBF2",
                    color: "#33465C",
                    fontSize: 14,
                    fontWeight: 600,
                    padding: "8px 15px",
                    borderRadius: 999,
                  }}
                >
                  <CheckCircle size={15} weight="fill" color="#25D366" />
                  {area}
                </span>
              ))}
            </div>
            <div
              style={{
                marginTop: 30,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <p style={{ fontSize: 17, color: "#4A5766", maxWidth: "52ch" }}>
                Brindando asesoramiento eficaz y la solución más rápida posible
              </p>
              <p style={{ fontSize: 17, color: "#4A5766", maxWidth: "52ch" }}>
                Contamos con más de 50 años de experiencia en los rubros
              </p>
            </div>
            <p
              style={{
                fontFamily: "var(--font-newsreader), serif",
                fontSize: 22,
                fontStyle: "italic",
                color: "#0C2340",
                marginTop: 28,
                borderLeft: "3px solid #25D366",
                paddingLeft: 18,
              }}
            >
              Estamos para asesorarte, no dudes en consultar!
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        style={{
          position: "relative",
          background: "linear-gradient(158deg,#0C2340,#123A63)",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: "50%",
            width: 540,
            height: 540,
            transform: "translateX(-50%)",
            background:
              "radial-gradient(circle,rgba(37,211,102,.14),transparent 62%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 820,
            margin: "0 auto",
            padding: "clamp(64px,8vw,110px) clamp(20px,5vw,48px)",
            textAlign: "center",
            position: "relative",
          }}
        >
          <h2 style={{ fontSize: "clamp(34px,5vw,56px)", color: "#fff" }}>
            ¡Estamos para ayudarlo!
          </h2>
          <p
            style={{
              fontSize: "clamp(19px,2.4vw,26px)",
              color: "#C3D0E0",
              marginTop: 14,
            }}
          >
            Hace tu consulta gratis hoy.
          </p>
          <Hoverable
            as="a"
            href={WHATSAPP_GENERAL}
            target="_blank"
            rel="noopener"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              marginTop: 36,
              background: "#25D366",
              color: "#08351B",
              fontWeight: 700,
              fontSize: "clamp(16px,2vw,19px)",
              padding: "18px 34px",
              borderRadius: 15,
              boxShadow: "0 14px 36px rgba(37,211,102,.42)",
              transition: "transform .2s,box-shadow .2s",
            }}
            hoverStyle={{
              transform: "translateY(-3px)",
              boxShadow: "0 20px 46px rgba(37,211,102,.55)",
            }}
          >
            <WhatsappLogo size={24} weight="fill" />
            Contactenos ahora por WhatsApp
          </Hoverable>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 26,
              marginTop: 38,
              color: "#B9C6D8",
              fontSize: 15,
            }}
          >
            <Hoverable
              as="a"
              href={CONTACT.telHref}
              style={{ display: "flex", alignItems: "center", gap: 9 }}
              hoverStyle={{ color: "#fff" }}
            >
              <Phone size={18} color="#25D366" />
              {CONTACT.tel}
            </Hoverable>
            <Hoverable
              as="a"
              href={CONTACT.emailHref}
              style={{ display: "flex", alignItems: "center", gap: 9 }}
              hoverStyle={{ color: "#fff" }}
            >
              <EnvelopeSimple size={18} color="#25D366" />
              {CONTACT.email}
            </Hoverable>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </>
  );
}
