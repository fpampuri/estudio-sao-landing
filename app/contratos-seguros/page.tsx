import { WhatsappLogo, Wrench, Buildings } from "@phosphor-icons/react/dist/ssr";
import { Hoverable } from "@/components/ui/hoverable";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { WHATSAPP_GENERAL } from "@/lib/site";

export const metadata = {
  title: "Contratos de Seguros — Estudio SAO",
  description:
    "Asesoramiento legal en materia de coberturas de seguros, contratos, consultoría en siniestros y estrategias de negociación.",
};

export default function SegurosPage() {
  return (
    <>
      <section style={{ background: "#fff" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "clamp(64px,9vw,120px) clamp(20px,5vw,48px)",
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(40px,6vw,80px)",
            alignItems: "center",
          }}
        >
          <div style={{ flex: "1 1 420px", minWidth: 300 }}>
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "#25812F",
              }}
            >
              Contratos de seguros
            </span>
            <h1
              style={{
                fontSize: "clamp(30px,4.2vw,48px)",
                color: "#0C2340",
                marginTop: 14,
                maxWidth: "20ch",
              }}
            >
              Asesoramiento legal en materia de coberturas de seguros
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "#3A4859",
                marginTop: 22,
                maxWidth: "56ch",
              }}
            >
              Ofrecemos asesoramiento en contratación de seguros de todo tipo,
              que se adapten a tus necesidades optimizando costos y tiempos de
              gestión!
            </p>
            <p
              style={{
                fontSize: 17,
                color: "#4A5766",
                marginTop: 18,
                maxWidth: "56ch",
              }}
            >
              Asesoramiento legal en materia de coberturas de seguros, contratos
              de seguros, consultoría en siniestros, estrategias de negociación.
            </p>
            <Hoverable
              as="a"
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noopener"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 11,
                marginTop: 30,
                background: "#25D366",
                color: "#08351B",
                fontWeight: 700,
                fontSize: 16,
                padding: "15px 26px",
                borderRadius: 13,
                boxShadow: "0 10px 26px rgba(37,211,102,.35)",
                transition: "transform .2s",
              }}
              hoverStyle={{ transform: "translateY(-2px)" }}
            >
              <WhatsappLogo size={20} weight="fill" />
              Contactenos ahora por WhatsApp
            </Hoverable>
          </div>

          <div
            style={{
              flex: "1 1 340px",
              minWidth: 280,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <div
              style={{
                background: "#F4F7FB",
                border: "1px solid #E6EBF2",
                borderRadius: 18,
                padding: 26,
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  background: "#0C2340",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Wrench size={22} color="#fff" />
              </span>
              <p style={{ fontSize: 16, color: "#3A4859" }}>
                Recomendación de nuestros talleres oficiales de reparación de
                vehículos aprobados por CESVI.
              </p>
            </div>
            <div
              style={{
                background: "#F4F7FB",
                border: "1px solid #E6EBF2",
                borderRadius: 18,
                padding: 26,
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  background: "#0C2340",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Buildings size={22} color="#fff" />
              </span>
              <p style={{ fontSize: 16, color: "#3A4859" }}>
                Talleres Integrales especializados en trato con compañías de
                seguros y peritos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </>
  );
}
