import { CarProfile, HardHat, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

export interface ServiceItem {
  icon: Icon;
  title: string;
  href: string;
}

export const SERVICES: ServiceItem[] = [
  {
    icon: CarProfile,
    title: "¿Tuviste un Accidente de Tránsito?",
    href: "/accidentes-transito",
  },
  {
    icon: HardHat,
    title: "¿Tuviste un Accidente de Trabajo?",
    href: "/accidentes-trabajo",
  },
  {
    icon: ShieldCheck,
    title: "Asesoramiento legal en materia de coberturas de seguros",
    href: "/contratos-seguros",
  },
];

export const AREAS: string[] = [
  "Legal",
  "Médico",
  "Automotriz",
  "Seguros",
  "Accidentes de tránsito",
];

export interface StatItem {
  n: string;
  l: string;
}

export const STATS: StatItem[] = [
  { n: "+50 años", l: "De trayectoria" },
  { n: "Todo el país", l: "Alcance nacional" },
  { n: "Consulta gratis", l: "Primer asesoramiento" },
];
