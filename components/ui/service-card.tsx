import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Hoverable } from "@/components/ui/hoverable";
import { HoverLink } from "@/components/ui/hover-link";
import type { ServiceItem } from "@/lib/content/home";

export function ServiceCard({ icon: Icon, title, href }: ServiceItem) {
  return (
    <Hoverable
      style={{
        background: "#fff",
        border: "1px solid #E6EBF2",
        borderRadius: 20,
        padding: "36px 32px",
        display: "flex",
        flexDirection: "column",
        transition: "transform .25s,box-shadow .25s,border-color .25s",
      }}
      hoverStyle={{
        transform: "translateY(-6px)",
        boxShadow: "0 22px 44px rgba(12,35,64,.12)",
        border: "1px solid #D3DEEC",
      }}
    >
      <span
        style={{
          width: 62,
          height: 62,
          borderRadius: 16,
          background: "#EAF1FB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
        }}
      >
        <Icon size={30} color="#0C2340" />
      </span>
      <h3 style={{ fontSize: 23, color: "#0C2340", flex: 1 }}>{title}</h3>
      <HoverLink
        href={href}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          marginTop: 26,
          color: "#0C2340",
          fontWeight: 700,
          fontSize: 15,
          transition: "gap .2s,color .2s",
        }}
        hoverStyle={{ gap: 14, color: "#25812F" }}
      >
        Ver más <ArrowRight size={17} />
      </HoverLink>
    </Hoverable>
  );
}
