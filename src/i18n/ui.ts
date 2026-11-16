/** Textos en castellano (por defecto, en /) y catalán (en /ca). */
import type { Extra, Zona } from '../data/empresa';

export type Lang = 'es' | 'ca';
export const home = (lang: Lang) => (lang === 'ca' ? '/ca' : '/');
export const legalPath = (lang: Lang, k: 'avis' | 'priv') =>
  lang === 'ca' ? (k === 'avis' ? '/ca/avis-legal' : '/ca/privacitat') : k === 'avis' ? '/aviso-legal' : '/privacidad';

type Textos = {
  meta: { title: string; description: string };
  skip: string; demo: string; demoBy: string;
  nav: { cita: string; servicios: string; para: string; contacto: string; principal: string; idioma: string };
  hero: { eyebrow: string; t1: string; t2: string; text: string; cta: string; llamar: string };
  diag: {
    instruccion: string; aria: string;
    zonas: Record<Zona, { nom: string; sint: string }>;
    extras: Record<Extra, string>;
    titulo: string; num: string; fecha: string; vehiculo: string; placeholder: string; trabajos: string; opciones: string;
    vacio: string; cta: string; o: string; asunto: string;
    mail: (zonas: string[], extras: string[], vehiculo: string) => string;
  };
  servicios: { label: string; title: string; text: string; items: { t: string; d: string }[]; tambien: string[] };
  para: { label: string; title: string; items: { t: string; d: string }[]; red: string };
  contacto: { label: string; title: string; text: string; llegar: string; tel: string; email: string; asunto: string; zona: string };
  bar: { aria: string; email: string; llamar: string };
  footer: { avis: string; priv: string };
};

const es: Textos = {
  meta: {
    title: 'Talleres Jordan · Taller mecánico en Badalona',
    description: 'Mecánica, electricidad, chapa y pintura y neumáticos en el polígono de Guixeres, Badalona. Red Checkstar, vehículo de sustitución y trabajo con aseguradoras. Tel. 933 87 82 91.',
  },
  skip: 'Saltar al contenido', demo: 'Propuesta de diseño no oficial', demoBy: 'Preparada por Ammavaroo para',
  nav: { cita: 'Pide cita', servicios: 'Servicios', para: 'Particulares y flotas', contacto: 'Dónde estamos', principal: 'Principal', idioma: 'Idioma' },
  hero: {
    eyebrow: 'Badalona · Pol. Guixeres · Red Checkstar',
    t1: 'Tu taller de confianza', t2: 'en Badalona.',
    text: 'Mecánica, electricidad, chapa y pintura y neumáticos. Dinos qué le pasa a tu coche y te damos cita.',
    cta: 'Pide cita', llamar: 'Llamar',
  },
  diag: {
    instruccion: 'Toca el coche donde notas el problema', aria: 'Zonas del coche',
    zonas: {
      motor: { nom: 'Motor y mecánica', sint: 'Ruidos, pierde potencia, testigo encendido o toca revisión.' },
      electricidad: { nom: 'Electricidad y luces', sint: 'Batería, arranque, luces o avisos en el cuadro.' },
      chapa: { nom: 'Chapa y pintura', sint: 'Golpes, rayadas o abolladuras.' },
      frenos: { nom: 'Frenos y suspensión', sint: 'Chirrían, vibran o el coche se va hacia un lado.' },
      neumaticos: { nom: 'Neumáticos', sint: 'Desgaste, pinchazo o cambio de ruedas.' },
    },
    extras: { sustitucion: 'Necesito coche de sustitución', recogida: 'Que me recojáis el coche (Badalona)', seguro: 'Es un siniestro con el seguro' },
    titulo: 'Orden de reparación', num: 'Nº', fecha: 'Fecha', vehiculo: 'Vehículo', placeholder: 'Marca, modelo o matrícula',
    trabajos: 'Trabajos', opciones: 'Además',
    vacio: 'Aún no has marcado nada. Toca una zona del coche.',
    cta: 'Pedir cita por email', o: 'o llama al', asunto: 'Cita en el taller',
    mail: (z, x, v) =>
      ['Hola, quiero pedir cita en el taller.', v && `Vehículo: ${v}`, z.length ? `Qué le pasa:\n${z.map((s) => `- ${s}`).join('\n')}` : '', x.length ? `Además:\n${x.map((s) => `- ${s}`).join('\n')}` : '', '¿Qué día me podéis dar?']
        .filter(Boolean).join('\n\n'),
  },
  servicios: {
    label: 'Servicios', title: 'Todo lo que necesita tu coche, en un solo taller.',
    text: 'Reparación en general del automóvil: desde la revisión de siempre hasta un golpe de chapa.',
    items: [
      { t: 'Mecánica', d: 'Mantenimiento, revisiones y reparación general.' },
      { t: 'Electricidad', d: 'Batería, arranque, luces y sistemas eléctricos.' },
      { t: 'Chapa y pintura', d: 'Reparamos golpes y dejamos la pintura como estaba.' },
      { t: 'Neumáticos', d: 'Cambio, reparación y montaje de ruedas.' },
    ],
    tambien: ['Vehículo de sustitución', 'Trabajamos con aseguradoras', 'Servicios para flotas', 'Recogida y entrega en Badalona'],
  },
  para: {
    label: 'Para quién trabajamos', title: 'Particulares, empresas y seguros.',
    items: [
      { t: 'Particulares', d: 'Te recogemos el coche y te lo devolvemos dentro de Badalona. Si lo necesitas, te dejamos un coche de sustitución (consulta condiciones).' },
      { t: 'Empresas y flotas', d: 'Mantenimiento de coches y furgonetas de empresa, para que tu flota no se pare.' },
      { t: 'Aseguradoras', d: 'Trabajamos con las compañías de seguros. Si has tenido un golpe, tráenos el coche.' },
    ],
    red: 'Taller adherido a la red Checkstar de Magneti Marelli',
  },
  contacto: {
    label: 'Dónde estamos', title: 'Ven al taller.',
    text: 'Estamos en el polígono de Guixeres, en Badalona. Llámanos o escríbenos y te damos cita.',
    llegar: 'Cómo llegar', tel: 'Teléfono', email: 'Email', asunto: 'Cita en el taller', zona: 'Pol. Ind. Guixeres',
  },
  bar: { aria: 'Contacto rápido', email: 'Escribir', llamar: 'Llamar' },
  footer: { avis: 'Aviso legal', priv: 'Privacidad' },
};

const ca: Textos = {
  meta: {
    title: 'Tallers Jordan · Taller mecànic a Badalona',
    description: 'Mecànica, electricitat, planxa i pintura i pneumàtics al polígon de Guixeres, Badalona. Xarxa Checkstar, vehicle de substitució i treball amb asseguradores. Tel. 933 87 82 91.',
  },
  skip: 'Salta al contingut', demo: 'Proposta de disseny no oficial', demoBy: 'Preparada per Ammavaroo per a',
  nav: { cita: 'Demana cita', servicios: 'Serveis', para: 'Particulars i flotes', contacto: 'On som', principal: 'Principal', idioma: 'Idioma' },
  hero: {
    eyebrow: 'Badalona · Pol. Guixeres · Xarxa Checkstar',
    t1: 'El teu taller de confiança', t2: 'a Badalona.',
    text: 'Mecànica, electricitat, planxa i pintura i pneumàtics. Digues-nos què li passa al cotxe i et donem cita.',
    cta: 'Demana cita', llamar: 'Truca',
  },
  diag: {
    instruccion: 'Toca el cotxe on notes el problema', aria: 'Zones del cotxe',
    zonas: {
      motor: { nom: 'Motor i mecànica', sint: 'Sorolls, perd potència, testimoni encès o toca revisió.' },
      electricidad: { nom: 'Electricitat i llums', sint: 'Bateria, arrencada, llums o avisos al quadre.' },
      chapa: { nom: 'Planxa i pintura', sint: 'Cops, ratllades o bonys.' },
      frenos: { nom: 'Frens i suspensió', sint: 'Grinyolen, vibren o el cotxe se’n va cap a un costat.' },
      neumaticos: { nom: 'Pneumàtics', sint: 'Desgast, punxada o canvi de rodes.' },
    },
    extras: { sustitucion: 'Necessito cotxe de substitució', recogida: 'Que em recolliu el cotxe (Badalona)', seguro: 'És un sinistre amb l’assegurança' },
    titulo: 'Ordre de reparació', num: 'Núm.', fecha: 'Data', vehiculo: 'Vehicle', placeholder: 'Marca, model o matrícula',
    trabajos: 'Feines', opciones: 'A més',
    vacio: 'Encara no has marcat res. Toca una zona del cotxe.',
    cta: 'Demanar cita per email', o: 'o truca al', asunto: 'Cita al taller',
    mail: (z, x, v) =>
      ['Hola, vull demanar cita al taller.', v && `Vehicle: ${v}`, z.length ? `Què li passa:\n${z.map((s) => `- ${s}`).join('\n')}` : '', x.length ? `A més:\n${x.map((s) => `- ${s}`).join('\n')}` : '', 'Quin dia em podeu donar?']
        .filter(Boolean).join('\n\n'),
  },
  servicios: {
    label: 'Serveis', title: 'Tot el que necessita el teu cotxe, en un sol taller.',
    text: 'Reparació en general de l’automòbil: des de la revisió de sempre fins a un cop de planxa.',
    items: [
      { t: 'Mecànica', d: 'Manteniment, revisions i reparació general.' },
      { t: 'Electricitat', d: 'Bateria, arrencada, llums i sistemes elèctrics.' },
      { t: 'Planxa i pintura', d: 'Reparem cops i deixem la pintura com estava.' },
      { t: 'Pneumàtics', d: 'Canvi, reparació i muntatge de rodes.' },
    ],
    tambien: ['Vehicle de substitució', 'Treballem amb asseguradores', 'Serveis per a flotes', 'Recollida i lliurament a Badalona'],
  },
  para: {
    label: 'Per a qui treballem', title: 'Particulars, empreses i assegurances.',
    items: [
      { t: 'Particulars', d: 'Et recollim el cotxe i te’l tornem dins de Badalona. Si el necessites, et deixem un cotxe de substitució (consulta’n les condicions).' },
      { t: 'Empreses i flotes', d: 'Manteniment de cotxes i furgonetes d’empresa, perquè la teva flota no s’aturi.' },
      { t: 'Asseguradores', d: 'Treballem amb les companyies d’assegurances. Si has tingut un cop, porta’ns el cotxe.' },
    ],
    red: 'Taller adherit a la xarxa Checkstar de Magneti Marelli',
  },
  contacto: {
    label: 'On som', title: 'Vine al taller.',
    text: 'Som al polígon de Guixeres, a Badalona. Truca’ns o escriu-nos i et donem cita.',
    llegar: 'Com arribar-hi', tel: 'Telèfon', email: 'Email', asunto: 'Cita al taller', zona: 'Pol. Ind. Guixeres',
  },
  bar: { aria: 'Contacte ràpid', email: 'Escriure', llamar: 'Trucar' },
  footer: { avis: 'Avís legal', priv: 'Privacitat' },
};

export const ui: Record<Lang, Textos> = { es, ca };
