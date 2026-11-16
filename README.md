# Talleres Jordan — propuesta de web

Demo de Ammavaroo para Talleres Jordan (Tallers Jordan), taller mecánico en el polígono de Guixeres, Badalona. **No es la web oficial.**

## Por qué

No tienen web propia: solo aparecen en su ficha de Xarxa Industrial y en la guía de talleres de FIATC. El email es de Gmail. Quien busca «taller en Badalona» no los encuentra.

## Idiomas

Castellano en `/` y catalán en `/ca` (textos en `src/i18n/ui.ts`). Su logo está en catalán («Tallers Jordan»), por eso hay versión catalana. Selector en la cabecera, `hreflang` entre versiones y páginas legales en los dos idiomas.

## Identidad

- **Logo:** su logo azul marino (#29368F, el coche con «TALLERS JORDAN») vectorizado con potrace a partir del vídeo de su ficha. No se usa el logo de Magneti Marelli: solo se menciona en texto que son taller de la red Checkstar.
- **Paleta:** el azul del logo, un azul noche de plano técnico, gris de nave y el amarillo de las líneas de seguridad del taller.
- **Tipografía:** Saira (condensada para titulares) y Figtree, autoalojadas.
- **Elemento interactivo:** en el hero, un coche dibujado como plano técnico. Se toca la zona donde está el problema (motor, electricidad, chapa, frenos, neumáticos) y se va rellenando una **orden de reparación** con el vehículo y extras (coche de sustitución, recogida, siniestro con seguro). El botón abre un email ya escrito para pedir cita. Todo ocurre en el navegador: no se envía nada hasta que el cliente manda el email.

## Contenido y fuentes

- Ficha de Xarxa Industrial: «Taller de mecánica en general. Adherido a la Red Magneti Marelli Checkstar. Mecánica · Electricidad · Plancha y Pintura · Neumáticos · Vehículo de sustitución · Trabajamos con las compañías aseguradoras · Servicios para flotas. Tu taller de confianza en Badalona.»
- Guía de talleres de FIATC: dirección (C/ Electrònica 30, Pol. Guixeres), teléfono, recogida y entrega en la población y vehículo de cortesía (consultar condiciones).
- **Sin fotos:** las de su ficha son de bancos de imágenes (Fotolia, SimpleFoto) o material de Magneti Marelli, y la de la fachada parece de Street View. Por eso la web va con ilustración propia.

## Pendiente

- [ ] Confirmar en Google Maps que siguen abiertos.
- [ ] Horario.
- [ ] NIF para el aviso legal.
- [ ] Fotos reales del taller y del equipo.
- [ ] Confirmar si quieren mostrar el sello de Checkstar (requiere permiso de la red).

## Stack

Astro (SSG) · TypeScript estricto · Tailwind 4 · JS mínimo. Modo demo con `PUBLIC_IS_DEMO` (por defecto activo: `noindex`, `robots.txt` cerrado y aviso visible). Lighthouse: rendimiento 99–100, accesibilidad 100, buenas prácticas 100 (SEO baja solo por el `noindex` del modo demo).

```bash
npm install
npm run dev
npm run build
```
