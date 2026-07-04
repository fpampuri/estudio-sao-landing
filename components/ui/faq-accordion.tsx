"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import type { FaqItem } from "@/lib/content/trabajo";

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  // El prototipo arranca con el primer ítem abierto.
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {faqs.map((faq, i) => {
        const isOpen = openFaq === i;
        return (
          <div
            key={faq.q}
            style={{
              background: "#fff",
              border: "1px solid #E6EBF2",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setOpenFaq((prev) => (prev === i ? -1 : i))}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                padding: "20px 24px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                color: "#0C2340",
                fontSize: 17,
                fontWeight: 600,
                fontFamily: "var(--font-jakarta), sans-serif",
              }}
            >
              <span>{faq.q}</span>
              <CaretDown
                size={18}
                color="#25812F"
                style={{
                  flexShrink: 0,
                  transition: "transform .2s",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>
            {isOpen && (
              <p
                style={{
                  padding: "0 24px 22px",
                  fontSize: 15,
                  color: "#4A5766",
                  lineHeight: 1.6,
                }}
              >
                {faq.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
