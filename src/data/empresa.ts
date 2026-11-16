/**
 * Dades publicades per Talleres Jordan a la seva fitxa de Xarxa Industrial
 * i a la guia de tallers de FIATC. No tenen web pròpia.
 */
export const empresa = {
  name: 'Talleres Jordan',
  nameCa: 'Tallers Jordan',
  street: 'C/ Electrònica, 30',
  area: 'Pol. Ind. Guixeres',
  postalCode: '08915',
  city: 'Badalona',
  region: 'Barcelona',
  phone: { display: '933 87 82 91', e164: '+34933878291' },
  email: 'talleres.jordan@gmail.com',
  maps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Talleres Jordan, Carrer de l’Electrònica 30, 08915 Badalona'),
} as const;

export const telUrl = `tel:${empresa.phone.e164}`;
export const mailUrl = (asunto: string, cos = '') =>
  `mailto:${empresa.email}?subject=${encodeURIComponent(asunto)}${cos ? `&body=${encodeURIComponent(cos)}` : ''}`;

/** Zones del cotxe que es poden marcar al diagnòstic. */
export const zonas = ['motor', 'electricidad', 'chapa', 'frenos', 'neumaticos'] as const;
export type Zona = (typeof zonas)[number];
export const extras = ['sustitucion', 'recogida', 'seguro'] as const;
export type Extra = (typeof extras)[number];
