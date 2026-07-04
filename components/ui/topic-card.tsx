import { Hoverable } from "@/components/ui/hoverable";
import type { TopicItem } from "@/lib/content/transito";

export function TopicCard({ icon: Icon, title, body, highlight }: TopicItem) {
  return (
    <Hoverable
      style={{
        background: "#fff",
        border: "1px solid #E6EBF2",
        borderRadius: 18,
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        transition: "transform .25s,box-shadow .25s",
      }}
      hoverStyle={{
        transform: "translateY(-4px)",
        boxShadow: "0 18px 36px rgba(12,35,64,.1)",
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
        }}
      >
        <Icon size={24} color="#0C2340" />
      </span>
      <h3 style={{ fontSize: 19, color: "#0C2340" }}>{title}</h3>
      <p style={{ fontSize: 15, color: "#4A5766", flex: 1 }}>{body}</p>
      {highlight && (
        <p style={{ fontWeight: 700, color: "#25812F", fontSize: 15 }}>
          {highlight}
        </p>
      )}
    </Hoverable>
  );
}
