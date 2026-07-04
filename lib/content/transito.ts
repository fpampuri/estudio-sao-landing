import {
  FirstAidKit,
  Gavel,
  Handshake,
  UsersThree,
  PersonSimpleWalk,
  Motorcycle,
  Bus,
  Taxi,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

export const STEPS: string[] = [
  "Pedirle al otro conductor los datos de su licencia de conducir y su seguro",
  "Darle al otro conductor los datos de tu licencia de conducir y del seguro de tu auto.",
  "Llamar a una ambulancia o concurrir al centro de salud para que te revisen. Si interviene la policía, también tenés que darle los datos de tu licencia de conducir y del seguro del auto.",
  "Del auto con el que chocaste: patente, marca y nombre de la empresa de seguro.",
  "Del conductor: nombre, DNI, domicilio y teléfono.",
  "Del asegurado, si no es la persona que maneja el auto al momento del accidente: nombre, DNI, domicilio y teléfono.",
];

export interface TopicItem {
  icon: Icon;
  title: string;
  body: string;
  highlight?: string;
}

export const TOPICS: TopicItem[] = [
  {
    icon: FirstAidKit,
    title: "¿Tuviste Lesiones?",
    body: "Te recomendamos que llames a una ambulancia y a la Policía. Caso contrario, es indispensable que recibas atención médica a la brevedad (por más que consideres que sean golpes leves); de esa manera recibirás atención médica y tendrás constancia de haber pasado por una guardia y/o médico.-",
  },
  {
    icon: Gavel,
    title: "¿Quién tuvo la culpa en un accidente?",
    body: "Cada accidente tiene sus particularidades; por lo que te aconsejamos que nos consultes URGENTE así te asesoramos SIN compromiso! Podrías reclamar una indemnización!",
    highlight: "¡No te quedes con la duda!",
  },
  {
    icon: Handshake,
    title: "Negociación Rápida con las Aseguradoras",
    body: "CUIDADO! EN OCASIONES a las pocas horas de haber sido víctima de un accidente, las compañías de seguros contactan al accidentado, ofreciéndoles un supuesto arreglo económico superador! POR LO GENERAL ese acuerdo solo beneficiará a la Cia. de seguros!",
    highlight: "NO firme nada SIN ASESORARSE!",
  },
  {
    icon: UsersThree,
    title: "¡MUY IMPORTANTE! ¿Ibas de acompañante? ¿Sufriste Lesiones?",
    body: 'Los acompañantes o "terceros transportados" podrían reclamar una indemnización por las lesiones que sufrieron en un accidente de tránsito a todos los conductores participantes en el siniestro, y a sus aseguradoras, incluyendo al vehículo en el que viajaban!',
    highlight: "NO DUDES EN ASESORARTE!!!!",
  },
  {
    icon: PersonSimpleWalk,
    title: "Indemnización Peatón lesionado en Accidente de Tránsito",
    body: "Los peatones son, junto con los ciclistas, los más vulnerables en los accidentes de tránsito, especialmente los niños y las personas mayores. Su especial desprotección implica como consecuencia que en la mayoría de los casos la víctima sufre lesiones de gravedad, y en casos extremos, el fallecimiento. El número de atropellos en nuestro país ha crecido de manera alarmante, siendo lo más habitual que se produzcan en los núcleos urbanos.",
    highlight: "Consúltenos sin cargo!",
  },
];

export const EXTRA: TopicItem[] = [
  {
    icon: Motorcycle,
    title: "Accidente de Motos",
    body: "Si es peatón, ciclista o motociclista y fue atropellado por otro vehículo podría tener derecho a una justa indemnización por las lesiones sufridas. Somos abogados especialistas en Indemnización por Accidentes de Tránsito!! En este tipo de accidentes, los conductores y acompañantes de una moto o bicicleta suelen estar desprotegidos, razón por la cual las lesiones sufridas suelen ser mayores. Por esa razón es fundamental que tanto usted como su acompañante – si fuera el caso – busquen atención médica inmediatamente después del accidente, aunque no sientan que hubo heridas, dado que algunas lesiones no se hacen visibles hasta días o semanas después del accidente.",
  },
  {
    icon: Bus,
    title: "Accidentes en Colectivos",
    body: "Si sufre alguna lesión mientras es transportado/a en un colectivo sea al subir, bajar o en su interior deberá anotar: línea, interno y datos del chofer y conservar el boleto y/o la tarjeta magnética.",
  },
  {
    icon: Taxi,
    title: "Taxis, Remises, Cabify, Uber, Auto de alquiler",
    body: "Reclamos por Accidentes en Taxis y Remises, etc. Somos Especialistas en Reclamos Contra Aseguradoras de Todo tipo.",
  },
];
