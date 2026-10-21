# Aplicar el SEO al sitio nuevo — instrucciones para una sesión

Este documento es la orden de trabajo. Los datos están en los otros archivos de `seo/`:

- `sitio-actual.md` / `sitio-actual.json`: relevamiento del WordPress actual (15/10/2026).
- `redirecciones.md`: tabla URL vieja → ruta nueva (el `.htaccess` de la sección 7 quedó como referencia).
- `cloudflare.md`: cómo se publica en Cloudflare, los registros DNS y el plan de mudanza.
- `recomendaciones.md`: el porqué de cada punto y los textos propuestos.

Leé primero el `CLAUDE.md` del repo y respetá sus restricciones (no tocar el scaffolding de Figma Make,
cambios quirúrgicos, `npm run validate` antes de dar algo por terminado, rama propia, no pushear sin OK).

## Contexto que ya está decidido

- **Dónde se publica:** en Cloudflare, como Worker con static assets, en una cuenta a nombre del cliente
  (cambió el 21/10/2026: antes era Hostinger con `.htaccess`). La configuración está en `deploy/` y lo de
  servidor en `public/_redirects` y `public/_headers`, que Vite copia a `dist/`. El detalle y el porqué, en
  `cloudflare.md`. Esto reemplaza la nota de `CLAUDE.md` de "no depender de rewrites": el servidor ya es
  conocido.
- **Los mails siguen en Hostinger.** El DNS se muda de la cuenta de Cloudflare de Conecto a la del cliente,
  copiando los registros de mail (`cloudflare.md`, sección 3). Mismo dominio: no hace falta "cambio de
  dirección" en Search Console.
- **El sitio viejo casi no tiene SEO** (sin plugin, sin meta descriptions, sin OG, sin H1). Lo que vale son
  las URLs: el trabajo central son las 301 y que cada ruta nueva tenga su propio `<head>`.
- **Catálogo:** 33 productos en `src/app/data/products.ts` (el `CLAUDE.md` dice 37, está desactualizado).
  Rutas: `/`, `/nosotros`, `/servicios`, `/productos`, `/productos/:slug`, `/portfolio`, `/contacto`.
  Las rutas nuevas van **sin barra final**.

## No hacer

- **No sacar el `noindex, nofollow` de `index.html`.** Se saca recién en el build que se entrega para
  publicar, y lo decide Ariel. Dejalo preparado (tarea 7), no lo apliques.
- No modificar `vite.config.ts` (`figmaAssetResolver`), el nombre del paquete ni `src/app/components/ui/`.
- No inventar datos de negocio (mail, teléfono, dirección) ni destinos de redirección nuevos: usá lo que
  dice este documento y marcá lo pendiente.

## Pendiente de decisión (preguntale a Ariel antes de cerrar estos puntos)

1. **Redirecciones:** ya están todas decididas. Implementá la tabla de `redirecciones.md` tal cual, sin
   preguntar.
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
- Nombre de los archivos: **`dist/nosotros.html`** para las rutas fijas y **`dist/productos/chip.html`** para
  las fichas (no `dist/nosotros/index.html`: con `htmlHandling: 'auto-trailing-slash'`, esa forma haría
  canónica `/nosotros/`). Cloudflare sirve `/nosotros` → `nosotros.html` y `/productos/chip` →
  `productos/chip.html` sin reglas. Ya no hace falta la carpeta `fichas/` del plan de Hostinger: Cloudflare no
  redirige `/productos` a `/productos/` aunque exista la carpeta `productos/` (probado con `cf dev`).
- El `index.html` de la raíz conserva el `<head>` de la home. Canonical y `og:url` de la home:
  `https://hisoil.com.ar/` (la raíz siempre lleva barra); el resto, sin barra final.
- Verificación: `npm run build` y revisar 3 archivos generados (home, una ruta fija, una ficha) con
  `grep -E "<title>|canonical|og:" dist/...`.

### 4. Redirecciones y 404

- Las redirecciones ya están en `public/_redirects` (traducción del `.htaccess` de la sección 7 de
  `redirecciones.md`) y las de query string y `www`, en `deploy/redirect-rules.json` (reglas de la zona).
  No hay `.htaccess`. Si cambiás una redirección, cambiá también `seo/pruebas/casos.tsv`.
- Página 404 real: agregá una ruta `*` en `App.tsx` con contenido de "página no encontrada" (texto en
  rioplatense) y generá `dist/404.html` en el prerender, con `noindex` siempre (también después del
  lanzamiento). Así una URL inexistente devuelve 404 y no la home con 200.
- `deploy/cloudflare.config.ts` ya tiene `notFoundHandling: '404-page'`: Cloudflare sirve `404.html` con
  estado 404 en lo que no existe.
- Verificación: `npm run build`, `cd deploy && npx cf dev` y, en otra terminal,
  `SIN_REGLA_QUERY=1 seo/pruebas/probar.sh http://localhost:8787 dist` (sección 2 de `cloudflare.md`). Tiene
  que dar todo OK. Si no podés levantarlo, decilo en el PR: **no afirmes que las reglas andan sin haberlas
  probado.**

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

- [ ] Ariel confirma el NAP.
- [ ] Sacar `noindex, nofollow` de `index.html` (y que el prerender no lo copie a las demás rutas).
- [ ] Antes de publicar: exportar de Search Console el informe de rendimiento y de páginas (si HiSoil tiene
      acceso; si no, verificar la propiedad de dominio por TXT en la zona nueva de Cloudflare).
- [ ] Mudanza del DNS y publicación según la sección 4 de `cloudflare.md` (pasos A a D).
- [ ] Correr `seo/pruebas/probar.sh https://hisoil.com.ar dist` contra el sitio publicado.
- [ ] Enviar `sitemap.xml` en Search Console y revisar "Páginas" durante 4–6 semanas.
- [ ] Activar Cloudflare Web Analytics en la cuenta nueva (el de hoy está en la cuenta de Conecto).

### 8. Ajustes menores (si queda tiempo, en PR aparte)

- Un solo `<h1>` por página: revisar cada `*Page.tsx`.
- `alt` descriptivo en fotos de producto (el `name` alcanza).
- `favicon.ico` en `public/`, apple-touch-icon 180×180 y `<meta name="theme-color">` con el color de marca
  de `src/styles/theme.css`.
- Imagen OG por defecto de 1200×630 en JPG o PNG (WhatsApp y LinkedIn no siempre leen WebP).

## Publicación en Cloudflare (lo que se puede romper)

Ya no hay entrega a Conecto: se publica desde Workers Builds en la cuenta del cliente. El paso a paso está
en `cloudflare.md`. Lo que se puede romper:

- **Los mails**, si falta un registro al mudar el DNS. Es el riesgo número uno: la lista completa y cómo
  comparar la zona vieja con la nueva están en la sección 3 y el paso C5 de `cloudflare.md`.
- **El deploy command de Workers Builds**: tiene que ser `npx cf deploy`. El default (`npx wrangler deploy`)
  ignora `cloudflare.config.ts` y no aplica los dominios.
- **Una regeneración de Make** puede pisar `public/_redirects` y `public/_headers`. Revisarlos después de
  cada regeneración (sin `_redirects`, ninguna URL vieja redirige).
- **Desafío de Cloudflare a `curl`.** Durante el relevamiento la zona vieja respondía "Just a moment..." a
  `curl` (ver `sitio-actual.md`). Si aparece en la zona nueva, `probar.sh` marca esas filas como
  `DESAFIO-CF`. Revisar también que no frene a los bots de WhatsApp, Facebook y LinkedIn (las vistas previas
  de links): se ve con el Sharing Debugger de Facebook después de publicar.
- **Lo que solo se confirma en la cuenta real**: sección 5 de `cloudflare.md`.

## Cómo cerrar

- `npm run validate` en verde y `npm run build` sin errores.
- PR en los dos repos (`Chinnimb/hisoil` y `shifrastudio/hisoil`), con la cuenta `shifrastudio`, solo después
  del OK de Ariel para pushear.
- En la descripción del PR: qué se hizo, qué quedó pendiente de decisión, y qué se verificó corriendo
  comandos y qué no.
