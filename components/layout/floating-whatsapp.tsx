import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { WHATSAPP_GENERAL } from "@/lib/site";

interface FloatingWhatsAppProps {
  /** Permite que la página de ART use su propio número. */
  href?: string;
}

export function FloatingWhatsApp({ href = WHATSAPP_GENERAL }: FloatingWhatsAppProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="Contactar por WhatsApp"
      style={{
        position: "fixed",
        right: 22,
        bottom: 22,
        zIndex: 60,
        width: 62,
        height: 62,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 10px 28px rgba(37,211,102,.5)",
        animation: "saoFloat 3.2s ease-in-out infinite",
        textDecoration: "none",
      }}
    >
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: "#25D366",
          animation: "saoPulse 2.4s ease-out infinite",
          zIndex: -1,
        }}
      />
      <WhatsappLogo size={34} weight="fill" color="#fff" />
    </a>
  );
}
