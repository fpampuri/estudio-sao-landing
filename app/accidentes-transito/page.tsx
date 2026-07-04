import {
  ChatCircleDots,
  WhatsappLogo,
  CheckCircle,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Hoverable } from "@/components/ui/hoverable";
import { TopicCard } from "@/components/ui/topic-card";
import { HeroBackground } from "@/components/ui/hero-background";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { WHATSAPP_GENERAL } from "@/lib/site";
import { STEPS, TOPICS, EXTRA } from "@/lib/content/transito";

export const metadata = {
  title: "Accidentes de Tránsito — Estudio SAO",
  description:
    "Inicie el reclamo sin gastos ni adelantos contra terceros y/o su compañía. Abogados y peritos especialistas en accidentes de tránsito. Cobramos honorarios cuando usted cobra.",
};

export default function TransitoPage() {
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
        <HeroBackground
          src="/fotos/hero-transito.jpg"
          overlay="linear-gradient(158deg, rgba(11,33,55,.85), rgba(18,58,99,.82))"
        />
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
            maxWidth: 900,
            margin: "0 auto",
            padding: "clamp(56px,8vw,96px) clamp(20px,5vw,48px)",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
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
            }}
          >
            Accidentes de tránsito
          </span>
          <p
            style={{
              fontSize: "clamp(16px,1.8vw,19px)",
              color: "#C3D0E0",
              marginTop: 22,
            }}
          >
            Abogados, Talleres, Peritos, Médicos/Accidentológicos, Especialistas
            en accidentes de transito a su disposición.
          </p>
          <h1
            style={{
              fontSize: "clamp(28px,4vw,44px)",
              color: "#fff",
              marginTop: 18,
            }}
          >
            Inicie el reclamo sin gastos ni adelantos contra terceros y/o contra
            su compañía por robo, choque, roturas, hurto, seguros todo riesgo,
            etc.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-newsreader), serif",
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: "clamp(22px,2.8vw,30px)",
              color: "#8FD9AC",
              marginTop: 22,
            }}
          >
            COBRAMOS HONORARIOS CUANDO UD. COBRA!
          </p>
        </div>
      </section>

      <section style={{ background: "#F4F7FB" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "clamp(56px,7vw,96px) clamp(20px,5vw,48px)",
          }}
        >
          {/* Intro */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #E6EBF2",
              borderRadius: 20,
              padding: "clamp(28px,4vw,44px)",
            }}
          >
            <h2 style={{ fontSize: 26, color: "#0C2340", marginBottom: 14 }}>
              ¿Tuviste un Accidente de Tránsito?
            </h2>
            <p style={{ fontSize: 17, color: "#3A4859", maxWidth: "74ch" }}>
              Si usted sufriera un accidente por culpa de otro conductor (sea que
              conduzca auto, moto, ciclomotor, micro o colectivo) ud. tiene
              derecho a la reparación integral de todos los daños sufridos ya
              sean físicos a su persona (lesiones) como materiales de su
              vehículo, daños psicológicos, daño moral, etc. sin importar si
              usted circulaba en carácter de peatón, conductor, titular o
              acompañante de su vehículo, o si se encontraba detenido y/o
              estacionado.
            </p>
          </div>

          {/* Topics */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: 22,
              marginTop: 26,
            }}
          >
            {TOPICS.map((t) => (
              <TopicCard key={t.title} {...t} />
            ))}
          </div>

          {/* Center pitch */}
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <p
              style={{
                fontFamily: "var(--font-newsreader), serif",
                fontSize: "clamp(22px,3vw,30px)",
                color: "#0C2340",
                maxWidth: "56ch",
                margin: "0 auto",
              }}
            >
              ¡No dejes que te engañen! Con nuestro equipo de profesionales
              abogados y peritos, te ofrecemos el Mejor Servicio para lograr el
              mejor resultado posible.
            </p>
            <Hoverable
              as="a"
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noopener"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginTop: 26,
                background: "#0C2340",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                padding: "15px 26px",
                borderRadius: 13,
                transition: "transform .2s",
              }}
              hoverStyle={{ transform: "translateY(-2px)" }}
            >
              <ChatCircleDots size={20} color="#25D366" />
              Consúltanos en forma gratuita por WhatsApp, e-mail, Instagram
            </Hoverable>
          </div>

          {/* Steps + side boxes */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 32,
              marginTop: 56,
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                flex: "1 1 380px",
                minWidth: 300,
                background: "#0C2340",
                color: "#fff",
                borderRadius: 20,
                padding: "clamp(28px,4vw,40px)",
              }}
            >
              <h3 style={{ fontSize: 24, color: "#fff", marginBottom: 20 }}>
                ¿Qué hacer ante un Accidente de Tránsito?
              </h3>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                {STEPS.map((step) => (
                  <div
                    key={step}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <CheckCircle
                      size={18}
                      weight="fill"
                      color="#25D366"
                      style={{ marginTop: 2, flexShrink: 0 }}
                    />
                    <p style={{ fontSize: 15, color: "#DCE5F0" }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                flex: "1 1 300px",
                minWidth: 280,
                display: "flex",
                flexDirection: "column",
                gap: 22,
              }}
            >
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #E6EBF2",
                  borderRadius: 18,
                  padding: 26,
                }}
              >
                <h3 style={{ fontSize: 20, color: "#0C2340" }}>
                  El Plazo para reclamar es de 3 años!
                </h3>
              </div>
              <div
                style={{
                  background: "#EAF1FB",
                  borderRadius: 18,
                  padding: 26,
                }}
              >
                <p style={{ fontSize: 16, color: "#0C2340", fontWeight: 600 }}>
                  Si en el momento del siniestro, Ud. iba o volvía de su trabajo;
                  tendrá derecho a reclamarle a la ART.!
                </p>
              </div>
              <Hoverable
                as="a"
                href={WHATSAPP_GENERAL}
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 9,
                  background: "#25D366",
                  color: "#08351B",
                  fontWeight: 700,
                  fontSize: 15,
                  padding: "14px 20px",
                  borderRadius: 12,
                  transition: "transform .2s",
                }}
                hoverStyle={{ transform: "translateY(-2px)" }}
              >
                <WhatsappLogo size={19} weight="fill" />
                Consúltanos en forma gratuita
              </Hoverable>
            </div>
          </div>

          {/* Extra */}
          <div style={{ marginTop: 56 }}>
            <h2
              style={{
                fontSize: 26,
                color: "#0C2340",
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              Abogados especialistas en accidentes
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                gap: 22,
                marginTop: 26,
              }}
            >
              {EXTRA.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  style={{
                    background: "#fff",
                    border: "1px solid #E6EBF2",
                    borderRadius: 18,
                    padding: 28,
                  }}
                >
                  <span
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 13,
                      background: "#EAF1FB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                    }}
                  >
                    <Icon size={24} color="#0C2340" />
                  </span>
                  <h3 style={{ fontSize: 19, color: "#0C2340" }}>{title}</h3>
                  <p
                    style={{ fontSize: 15, color: "#4A5766", marginTop: 10 }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <Hoverable
                as="a"
                href={WHATSAPP_GENERAL}
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  color: "#0C2340",
                  fontWeight: 700,
                  fontSize: 15,
                  borderBottom: "2px solid #25D366",
                  paddingBottom: 2,
                }}
              >
                Consúltenos urgente y sin cargo! <ArrowRight size={16} />
              </Hoverable>
            </div>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </>
  );
}
