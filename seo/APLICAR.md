# Aplicar el SEO al sitio nuevo — instrucciones para una sesión

Este documento es la orden de trabajo. Los datos están en los otros archivos de `seo/`:

- `sitio-actual.md` / `sitio-actual.json`: relevamiento del WordPress actual (15/10/2026).
- `redirecciones.md`: tabla URL vieja → ruta nueva y borrador de `.htaccess`.
- `recomendaciones.md`: el porqué de cada punto y los textos propuestos.

Leé primero el `CLAUDE.md` del repo y respetá sus restricciones (no tocar el scaffolding de Figma Make,
cambios quirúrgicos, `npm run validate` antes de dar algo por terminado, rama propia, no pushear sin OK).

## Contexto que ya está decidido

- **Dónde se publica:** en el mismo hosting donde hoy está el WordPress, en Hostinger (hosting compartido,
  servidor LiteSpeed, lee `.htaccess`), detrás de Cloudflare. Lo sube Conecto, el revendedor; nosotros no
  tenemos acceso al hosting. Por eso todo lo de servidor va en `public/.htaccess`, que Vite copia a `dist/`.
  Esto reemplaza la nota de `CLAUDE.md` de "no depender de rewrites": el servidor ya es conocido.
- **Los mails siguen en Hostinger.** No se toca nada del DNS (está en Cloudflare). Mismo dominio: no hace
  falta "cambio de dirección" en Search Console.
- **El sitio viejo casi no tiene SEO** (sin plugin, sin meta descriptions, sin OG, sin H1). Lo que vale son
  las URLs: el trabajo central son las 301 y que cada ruta nueva tenga su propio `<head>`.
- **Catálogo:** 33 productos en `src/app/data/products.ts` (el `CLAUDE.md` dice 37, está desactualizado).
  Rutas: `/`, `/nosotros`, `/servicios`, `/productos`, `/productos/:slug`, `/portfolio`, `/contacto`.
  Las rutas nuevas van **sin barra final**.

## No hacer

- **No sacar el `noindex, nofollow` de `index.html`.** Se saca recién en el build que se entrega para
  publicar, y lo decide Ariel. Dejalo preparado (tarea 7), no lo apliques.
- No modificar `vite.config.ts` (`figmaAssetResolver`), el nombre del paquete ni `src/app/components/ui/`.
- No inventar datos de negocio (mail, teléfono, dirección) ni destinos de redirección dudosos: usá lo que
  dice este documento y marcá lo pendiente.

## Pendiente de decisión (preguntale a Ariel antes de cerrar estos puntos)

1. **Redirecciones dudosas** (marcadas con ⚠ en `redirecciones.md`): compost viejo → `compost` o `compost-paisajismo`; notas del blog (410 o 301 a `/`). Mientras no se confirmen, implementá la
   propuesta de la tabla tal cual y listalas en el PR. Ya confirmado: todo producto viejo que no existe en el catálogo nuevo
   (Azaleas, Cactus, Humus, Tierra Negra, F590, F545) va a `/productos`.
2. **Datos de contacto (NAP):** el sitio viejo usa `info@hisoil.com.ar`, (011) 4440 1919 / 2879 2466 y
   El Hornero 1180 - Edificio Alpina (1629) Pilar; el nuevo usa `administracion@hisoil.com.ar` y
   +54 9 11 4440-1919, sin dirección. En el JSON-LD de `Organization` dejá mail, teléfono y dirección
   **afuera** hasta que se defina; no elijas uno.
3. **Textos de title y description:** usá los de la tabla 1.3 de `recomendaciones.md`. `/portfolio` y
   `/nosotros` no tienen description: redactá una propuesta en rioplatense y marcala como borrador en el PR.
4. **Title de las fichas:** los 33 `name` de `products.ts` ya empiezan con "HiSoil" ("HiSoil Compost"), así
   que `{name} · {línea} | HiSoil` repite la marca ("HiSoil Compost · Agricultura | HiSoil"). Opciones: sacar
   el sufijo `| HiSoil` en las fichas, o dejarlo. Mientras no se decida, usá el formato de la tabla.
5. **Logo para el JSON-LD:** `public/hisoil-logo.png` mide 220×57 y Google pide que el `logo` de
   `Organization` tenga al menos 112×112. Hace falta una versión cuadrada (o con más alto); hasta que exista,
   usá `hisoil-logo.png` y listalo en el PR.

## Tareas, en orden

Una rama por tarea grande o una sola rama `seo-aplicar`, a elección; cada tarea con su verificación.

### 1. Fuente única de SEO: `src/app/data/seo.ts`

- Exporta `SITE_URL = 'https://hisoil.com.ar'`, el nombre `HiSoil`, la imagen OG por defecto y, por cada ruta
  fija, `{ title, description }`. Para `/productos/:slug`, una función que arme title
  (`{name} · {línea} | HiSoil`) y description (campo `short`) desde `products.ts`.
- Lo importan la app y el script de la tarea 3. Ojo: Node **no** puede importar `products.ts` directo, ni
  con el soporte de TypeScript de Node 24: `products.ts` importa 33 `.webp` y `lucide-react`, y Node corta con
  `ERR_UNKNOWN_FILE_EXTENSION ".webp"` (probado). El script lo carga con Vite (ver tarea 3), así que `seo.ts`
  puede importar `products.ts` sin problema. Lo que no tiene que importar son componentes de React.
- Verificación: `npm run typecheck`.

### 2. Title y description al navegar

- Un hook chico (`useSeo(ruta)` o similar) que en `useEffect` setee `document.title`, la meta description y
  el canonical leyendo `seo.ts`. Llamarlo desde cada `*Page.tsx` (son pura composición: una línea).
- Sin dependencias nuevas.
- Verificación: `npm run dev`, navegar entre rutas y comprobar en la pestaña que el título cambia.

### 3. HTML propio por ruta en el build (prerender del `<head>`)

- Script `scripts/prerender-head.mjs` enganchado en `package.json` como `postbuild`. Para leer `seo.ts` y
  `products.ts` usa la API de Vite, que ya es dependencia y entiende TypeScript y los imports de imágenes
  (probado: devuelve los 33 productos):
  ```js
  import { createServer } from 'vite';
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'error',
  });
  const { products } = await vite.ssrLoadModule('/src/app/data/products.ts');
  // ... generar los HTML ...
  await vite.close();
  ```
  Ahí `product.image` vale `/src/imports/productos/chip.webp`; la URL publicada se saca buscando
  `dist/assets/chip-*.webp`. Usa `vite.config.ts` tal cual, sin modificarlo.
- Lee `dist/index.html` y escribe un HTML por ruta con el `<head>` de esa ruta: `<title>`, description, `<link rel="canonical">` absoluto, Open Graph (`og:type`, `og:site_name`,
  `og:locale=es_AR`, `og:title`, `og:description`, `og:url`, `og:image` absoluta) y
  `twitter:card=summary_large_image`, más el JSON-LD de la tarea 5.
- Nombre de los archivos: **`dist/nosotros.html`** para las rutas fijas y **`dist/fichas/chip.html`** para las
  fichas (no `dist/productos/chip.html` ni `dist/nosotros/index.html`). Una carpeta con el nombre de una ruta
  hace que el servidor redirija `/productos` → `/productos/` (probado en Apache y OpenLiteSpeed; el detalle
  está en la sección 7 de `redirecciones.md`). El `.htaccess` mapea `/productos/chip` → `fichas/chip.html`.
- El `index.html` de la raíz conserva el `<head>` de la home. Canonical y `og:url` de la home:
  `https://hisoil.com.ar/` (la raíz siempre lleva barra); el resto, sin barra final.
- Verificación: `npm run build` y revisar 3 archivos generados (home, una ruta fija, una ficha) con
  `grep -E "<title>|canonical|og:" dist/...`.

### 4. `public/.htaccess`

- Copiá **tal cual** el bloque de la sección 7 de `redirecciones.md`. Ya incluye servir el HTML
  prerenderizado, la home explícita y `ErrorDocument 404 /404.html` (sin fallback a `index.html`), y está
  probado en Docker. Si cambiás una redirección dudosa, cambiá también `seo/pruebas/casos.tsv`.
- Página 404 real: agregá una ruta `*` en `App.tsx` con contenido de "página no encontrada" (texto en
  rioplatense) y generá `dist/404.html` en el prerender, con `noindex` siempre (también después del
  lanzamiento). Así una URL inexistente devuelve 404 y no la home con 200.
- Verificación: levantá Apache en Docker sirviendo el `dist/` real y corré `seo/pruebas/probar.sh` (las
  instrucciones están en `seo/pruebas/resultado.md`). Tiene que dar todo OK. Si no podés levantarlo, decilo
  en el PR: **no afirmes que las reglas andan sin haberlas probado.**

### 5. JSON-LD

- Home: `Organization` + `WebSite`, con `name`, `url`, `logo` y `sameAs` (Instagram `hisoil_` y Facebook,
  tomá las URLs del footer del sitio nuevo). Sin mail, teléfono ni dirección hasta que se defina el NAP.
- `/productos/:slug`: `Product` (`name`, `description`, `image` absoluta, `brand` como
  `{ "@type": "Brand", "name": "HiSoil" }`, `category` = nombre visible de la línea), más un `BreadcrumbList`
  Inicio › Productos › {name}, con `item` absoluto en cada paso. Sin `offers`: el sitio no publica precios.
- Resto de las rutas: `BreadcrumbList`.
- Se genera solo en el prerender (tarea 3), no en el cliente. Un `<script type="application/ld+json">` por
  objeto, o uno solo con `@graph`.
- Verificación: validá cada plantilla en https://validator.schema.org/ (que el JSON sea schema.org válido).
  En la Prueba de resultados enriquecidos de Google, el `Product` sin `offers`, `review` ni
  `aggregateRating` va a salir como no apto para fragmento de producto: es esperable, no es un error a
  corregir. El `BreadcrumbList` sí tiene que salir válido ahí. Si no lo validaste contra Google, decilo.

### 6. `sitemap.xml` y `robots.txt`

- `dist/sitemap.xml` generado en el mismo `postbuild`: las 6 rutas fijas (`/`, `/nosotros`, `/servicios`,
  `/productos`, `/portfolio`, `/contacto`) + 33 fichas = **39 URLs**, absolutas, sin barra final salvo la home
  (`https://hisoil.com.ar/`), sin `lastmod` inventado. Sin `404.html`.
- `public/robots.txt` con `Allow: /` y `Sitemap: https://hisoil.com.ar/sitemap.xml`. Ojo: mientras el
  `noindex` siga puesto, el robots.txt no lo contradice (el `noindex` manda), así que puede entrar ya.
- Verificación: `xmllint --noout dist/sitemap.xml` (o un parser) y contar 39 `<loc>`.

### 7. Checklist de lanzamiento (preparar, no ejecutar)

Dejá en el PR una checklist para el día de la publicación:

- [ ] Ariel confirma las redirecciones dudosas y el NAP.
- [ ] Sacar `noindex, nofollow` de `index.html` (y que el prerender no lo copie a las demás rutas).
- [ ] Antes de subir: exportar de Search Console el informe de rendimiento y de páginas (si HiSoil tiene
      acceso; si no, verificar la propiedad de dominio por TXT en Cloudflare).
- [ ] Entrega a Conecto según la sección "Entrega" de abajo y `entrega-conecto.md`.
- [ ] Correr `seo/pruebas/probar.sh https://hisoil.com.ar dist` contra el sitio publicado.
- [ ] Enviar `sitemap.xml` en Search Console y revisar "Páginas" durante 4–6 semanas.
- [ ] Confirmar que Cloudflare Web Analytics sigue midiendo.

### 8. Ajustes menores (si queda tiempo, en PR aparte)

- Un solo `<h1>` por página: revisar cada `*Page.tsx`.
- `alt` descriptivo en fotos de producto (el `name` alcanza).
- `favicon.ico` en `public/`, apple-touch-icon 180×180 y `<meta name="theme-color">` con el color de marca
  de `src/styles/theme.css`.
- Imagen OG por defecto de 1200×630 en JPG o PNG (WhatsApp y LinkedIn no siempre leen WebP).

## Entrega a Conecto (lo que se puede romper en el traspaso)

No tenemos acceso al hosting ni vamos a poder depurar allá. Lo probado en Docker está en
`pruebas/resultado.md`; esto es lo que depende del traspaso. Las instrucciones para Conecto están en
`entrega-conecto.md`.

- **El `.htaccess` se pierde fácil.** Empieza con punto: el Finder no lo muestra, algunos clientes FTP no lo
  suben si no tienen activado "mostrar archivos ocultos", y al arrastrar la carpeta al administrador de
  archivos del hosting puede quedar afuera. Sin él, en Docker dieron lo esperado 140 de 495 pedidos: todas las
  rutas salvo `/` dan 404 y ninguna URL vieja redirige. Entregar un `.zip` armado desde adentro de `dist/`
  (`cd dist && zip -r ../hisoil-sitio.zip .`) y comprobar que esté adentro con `unzip -l ../hisoil-sitio.zip
| grep htaccess`.
- **Restos del WordPress en `public_html`.** Si queda el `.htaccess` viejo (bloques `# BEGIN WordPress` y
  `# BEGIN LiteSpeed`), manda todo a `index.php`; si queda `index.php`, en Docker le ganó a `index.html` hasta
  que se sumó la regla de la home al `.htaccess` (OpenLiteSpeed lo ejecutó). Pedir que muevan **todo** el
  contenido viejo fuera de `public_html` (backup), y que `public_html` quede solo con lo del zip.
- **Caché.** Cloudflare por defecto no cachea HTML, pero puede haber una regla "Cache Everything", APO, o el
  caché de LiteSpeed/Hostinger con páginas del WordPress. Después de subir: purgar todo en Cloudflare y en el
  caché de Hostinger.
- **Modo SSL de Cloudflare.** Las 301 apuntan a `https://` explícito, así que no dependen de él. Pero si el
  modo es "Flexible" y alguien agrega en el hosting una regla de "forzar https", el origen ve siempre http y
  redirige en loop (problema conocido de ese modo; no lo probé). Pedir que no
  agreguen reglas al `.htaccess` y que, si tienen que hacerlo, avisen.
- **Desafío de Cloudflare a `curl`.** Durante el relevamiento Cloudflare respondía "Just a moment..." a `curl`
  (ver `sitio-actual.md`); al revisar esto, tres pedidos con `curl` (`/`, `/robots.txt`, `/shop/`) dieron 200
  sin desafío. Si vuelve a aparecer, `probar.sh` marca esas filas como `DESAFIO-CF` (no probadas): pedir a
  quien administre Cloudflare que lo baje, o una excepción para nuestra IP, durante la prueba. Revisar también que no frene a los bots de WhatsApp, Facebook y LinkedIn (las vistas
  previas de links): se ve con el Sharing Debugger de Facebook después de publicar.
- **Lo que solo se confirma en el hosting real**: que LiteSpeed Enterprise lea `ErrorDocument`, `Options` y
  `Header` del `.htaccess` (OpenLiteSpeed no los lee), que el resultado de `probar.sh` sea el mismo que en Docker,
  el modo SSL de Cloudflare, los cachés y que Cloudflare Web Analytics siga midiendo.

## Cómo cerrar

- `npm run validate` en verde y `npm run build` sin errores.
- PR en los dos repos (`Chinnimb/hisoil` y `shifrastudio/hisoil`), con la cuenta `shifrastudio`, solo después
  del OK de Ariel para pushear.
- En la descripción del PR: qué se hizo, qué quedó pendiente de decisión, y qué se verificó corriendo
  comandos y qué no.
