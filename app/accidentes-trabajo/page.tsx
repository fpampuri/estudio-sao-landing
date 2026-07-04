import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Hoverable } from "@/components/ui/hoverable";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { HeroBackground } from "@/components/ui/hero-background";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { WHATSAPP_ART } from "@/lib/site";
import { FAQS } from "@/lib/content/trabajo";

export const metadata = {
  title: "Accidentes de Trabajo ART — Estudio SAO",
  description:
    "Abogados en Accidente de Trabajo ART. Si tuvo un accidente de trabajo y le quedaron secuelas, podemos reclamar su indemnización. Inicie el reclamo sin gastos ni adelantos.",
};

export default function TrabajoPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(158deg,#0B2137,#0C2340 55%,#123A63)",
          color: "#fff",
        }}
      >
        <HeroBackground
          src="/fotos/hero-trabajo.jpg"
          overlay="linear-gradient(158deg, rgba(11,33,55,.86), rgba(18,58,99,.82))"
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 900,
            margin: "0 auto",
            padding: "clamp(64px,9vw,120px) clamp(20px,5vw,48px)",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "#8FD9AC",
            }}
          >
            Accidentes de trabajo
          </span>
          <h1
            style={{
              fontSize: "clamp(30px,4.2vw,48px)",
              color: "#fff",
              marginTop: 14,
            }}
          >
            Abogados en Accidente de Trabajo ART
          </h1>
          <p style={{ fontSize: 18, color: "#C3D0E0", marginTop: 16 }}>
            Si Ud tuvo un accidente de trabajo y le quedaron secuelas, podemos
            reclamar su indemnización
          </p>
          <p
            style={{
              fontFamily: "var(--font-newsreader), serif",
              fontSize: "clamp(22px,3vw,30px)",
              color: "#fff",
              marginTop: 22,
            }}
          >
            Abogados Especialistas en Accidentes
          </p>
          <p style={{ fontSize: 16, color: "#B9C6D8", marginTop: 8 }}>
            Inicie el reclamo sin gastos ni adelantos.
          </p>
          <Hoverable
            as="a"
            href={WHATSAPP_ART}
            target="_blank"
            rel="noopener"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 11,
              marginTop: 28,
              background: "#25D366",
              color: "#08351B",
              fontWeight: 700,
              fontSize: 16,
              padding: "16px 28px",
              borderRadius: 14,
              boxShadow: "0 12px 30px rgba(37,211,102,.38)",
              transition: "transform .2s",
            }}
            hoverStyle={{ transform: "translateY(-3px)" }}
          >
            <WhatsappLogo size={22} weight="fill" />
            Contactenos ahora por WhatsApp sin costo
          </Hoverable>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section style={{ background: "#F4F7FB" }}>
        <div
          style={{
            maxWidth: 820,
            margin: "0 auto",
            padding: "clamp(56px,7vw,96px) clamp(20px,5vw,48px)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(26px,3.2vw,36px)",
              color: "#0C2340",
              textAlign: "center",
              marginBottom: 36,
            }}
          >
            ¿Tuviste un Accidente de Trabajo?
          </h2>
          <FaqAccordion faqs={FAQS} />
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
            maxWidth: 640,
            margin: "0 auto",
            padding: "clamp(56px,7vw,96px) clamp(20px,5vw,48px)",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", color: "#fff" }}>
            ¡Estamos para ayudarlo!
          </h2>
          <p style={{ fontSize: 17, color: "#C3D0E0", marginTop: 16 }}>
            Si querés saber cuando te corresponde indemnización, dejanos tus
            datos de contacto, tu teléfono y/o email y te responderemos a la
            brevedad.
          </p>
          <Hoverable
            as="a"
            href={WHATSAPP_ART}
            target="_blank"
            rel="noopener"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 11,
              marginTop: 28,
              background: "#25D366",
              color: "#08351B",
              fontWeight: 700,
              fontSize: 16,
              padding: "16px 30px",
              borderRadius: 14,
              boxShadow: "0 12px 30px rgba(37,211,102,.4)",
              transition: "transform .2s",
            }}
            hoverStyle={{ transform: "translateY(-2px)" }}
          >
            <WhatsappLogo size={20} weight="fill" />
            Enviar consulta
          </Hoverable>
        </div>
      </section>

      <FloatingWhatsApp href={WHATSAPP_ART} />
    </>
  );
}
