// Datos institucionales del Estudio SAO — fuente única de verdad.
// Extraídos 1:1 del prototipo de diseño (Header/Footer/páginas .dc.html).

export const CONTACT = {
  tel: "+54 9 11 6465-1659",
  telHref: "tel:+5491164651659",
  email: "sao.estudio@hotmail.com",
  emailHref: "mailto:sao.estudio@hotmail.com",
  facebook: "https://www.facebook.com/people/Estudio-SAO/100091480642876/",
  instagram: "https://www.instagram.com/estudio.sao/?hl=es",
} as const;

// Link general de WhatsApp usado en casi todo el sitio.
export const WHATSAPP_GENERAL = "https://wa.link/p8lcte";

// La página de Accidentes de Trabajo (ART) usa otro número en el prototipo.
export const WHATSAPP_ART =
  "https://api.whatsapp.com/send/?phone=5491157529786&text&type=phone_number&app_absent=0";

export type PageKey = "inicio" | "transito" | "seguros" | "trabajo";

export interface NavItem {
  key: PageKey;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { key: "inicio", label: "Inicio", href: "/" },
  { key: "transito", label: "Accidentes de tránsito", href: "/accidentes-transito" },
  { key: "seguros", label: "Contratos de seguros", href: "/contratos-seguros" },
  { key: "trabajo", label: "Accidentes de trabajo", href: "/accidentes-trabajo" },
];
