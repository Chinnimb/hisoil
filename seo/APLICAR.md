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

1. **Redirecciones dudosas** (marcadas con ⚠ en `redirecciones.md`): compost viejo → `compost` o
   `compost-paisajismo`; Tierra Negra y F590 → `tierra-fertil`; F545 → `seed`; Azaleas, Cactus y Humus sin
   equivalente (→ `/productos`); notas del blog (410 o 301 a `/`). Mientras no se confirmen, implementá la
   propuesta de la tabla tal cual y listalas en el PR.
2. **Datos de contacto (NAP):** el sitio viejo usa `info@hisoil.com.ar`, (011) 4440 1919 / 2879 2466 y
   El Hornero 1180 - Edificio Alpina (1629) Pilar; el nuevo usa `administracion@hisoil.com.ar` y
   +54 9 11 4440-1919, sin dirección. En el JSON-LD de `Organization` dejá mail, teléfono y dirección
   **afuera** hasta que se defina; no elijas uno.
3. **Textos de title y description:** usá los de la tabla 1.3 de `recomendaciones.md`. `/portfolio` y
   `/nosotros` no tienen description: redactá una propuesta en rioplatense y marcala como borrador en el PR.

## Tareas, en orden

Una rama por tarea grande o una sola rama `seo-aplicar`, a elección; cada tarea con su verificación.

### 1. Fuente única de SEO: `src/app/data/seo.ts`

- Exporta `SITE_URL = 'https://hisoil.com.ar'`, el nombre `HiSoil`, la imagen OG por defecto y, por cada ruta
  fija, `{ title, description }`. Para `/productos/:slug`, una función que arme title
  (`{name} · {línea} | HiSoil`) y description (campo `short`) desde `products.ts`.
- Tiene que poder importarlo **tanto la app como el script de Node de la tarea 3**: nada de imports de
  imágenes ni de React en este archivo (si hace falta la foto del producto para OG, resolvela en el script
  desde el build).
- Verificación: `npm run typecheck`.

### 2. Title y description al navegar

- Un hook chico (`useSeo(ruta)` o similar) que en `useEffect` setee `document.title`, la meta description y
  el canonical leyendo `seo.ts`. Llamarlo desde cada `*Page.tsx` (son pura composición: una línea).
- Sin dependencias nuevas.
- Verificación: `npm run dev`, navegar entre rutas y comprobar en la pestaña que el título cambia.

### 3. HTML propio por ruta en el build (prerender del `<head>`)

- Script `scripts/prerender-head.mjs` (Node puro: el repo no tiene `tsx`) enganchado en
  `package.json` como `postbuild`. Lee `dist/index.html` y escribe un HTML por ruta con el `<head>` de esa
  ruta: `<title>`, description, `<link rel="canonical">` absoluto, Open Graph (`og:type`, `og:site_name`,
  `og:locale=es_AR`, `og:title`, `og:description`, `og:url`, `og:image` absoluta) y
  `twitter:card=summary_large_image`, más el JSON-LD de la tarea 5.
- Nombre de los archivos: **`dist/nosotros.html`, `dist/productos/chip.html`**, etc. (no
  `dist/nosotros/index.html`): así LiteSpeed no fuerza la barra final y las URLs quedan sin barra, como las
  rutas del router. La regla que los sirve va en el `.htaccess` (tarea 4).
- El `index.html` de la raíz conserva el `<head>` de la home.
- Verificación: `npm run build` y revisar 3 archivos generados (home, una ruta fija, una ficha) con
  `grep -E "<title>|canonical|og:" dist/...`.

### 4. `public/.htaccess`

Partí del borrador de la sección 7 de `redirecciones.md` y cambiá el final:

- Mantené el orden: 410 → 301 → quitar barra final → servir el `.html` prerenderizado → fallback.
- Servir el prerender, antes del fallback:
  ```apache
  RewriteCond %{REQUEST_FILENAME}.html -f
  RewriteRule ^(.+)$ /$1.html [L]
  ```
- Página 404 real: agregá una ruta `*` en `App.tsx` con contenido de "página no encontrada" (texto en
  rioplatense), generá `dist/404.html` en el prerender con `noindex`, y en `.htaccess` reemplazá el fallback a
  `index.html` por `ErrorDocument 404 /404.html`. Así una URL inexistente devuelve 404 y no la home con 200.
- Verificación local: no hay LiteSpeed en la máquina. Si podés, levantá Apache en Docker
  (`httpd` con `AllowOverride All` y `mod_rewrite`) sirviendo `dist/` y probá con `curl -sI` una URL de cada
  bloque de `redirecciones.md` (301 con su destino, 410, ruta nueva 200, inexistente 404). Si no podés
  levantarlo, decilo en el PR: **no afirmes que las reglas andan sin haberlas probado.**

### 5. JSON-LD

- Home: `Organization` + `WebSite`, con `name`, `url`, `logo` y `sameAs` (Instagram `hisoil_` y Facebook,
  tomá las URLs del footer del sitio nuevo). Sin mail, teléfono ni dirección hasta que se defina el NAP.
- `/productos/:slug`: `Product` (`name`, `description`, `image` absoluta, `brand: HiSoil`, `category` = línea)
  - `BreadcrumbList` Inicio › Productos › {name}. Sin `offers`: el sitio no publica precios.
- Resto de las rutas: `BreadcrumbList`.
- Se genera solo en el prerender (tarea 3), no en el cliente.
- Verificación: pegar el HTML de una ficha en la Prueba de resultados enriquecidos de Google, o validar el
  JSON con un parser. Si no lo validaste contra Google, decilo.

### 6. `sitemap.xml` y `robots.txt`

- `dist/sitemap.xml` generado en el mismo `postbuild`: 7 rutas fijas + 33 fichas, URLs absolutas sin barra
  final, sin `lastmod` inventado.
- `public/robots.txt` con `Allow: /` y `Sitemap: https://hisoil.com.ar/sitemap.xml`. Ojo: mientras el
  `noindex` siga puesto, el robots.txt no lo contradice (el `noindex` manda), así que puede entrar ya.
- Verificación: `xmllint --noout dist/sitemap.xml` (o un parser) y contar 40 `<loc>`.

### 7. Checklist de lanzamiento (preparar, no ejecutar)

Dejá en el PR una checklist para el día de la publicación:

- [ ] Ariel confirma las redirecciones dudosas y el NAP.
- [ ] Sacar `noindex, nofollow` de `index.html` (y que el prerender no lo copie a las demás rutas).
- [ ] Antes de subir: exportar de Search Console el informe de rendimiento y de páginas (si HiSoil tiene
      acceso; si no, verificar la propiedad de dominio por TXT en Cloudflare).
- [ ] Conecto hace backup del WordPress y reemplaza `public_html` con el contenido de `dist/` (incluido el
      `.htaccess`, que empieza con punto y se pierde fácil al comprimir).
- [ ] Probar con `curl -sI` las URLs de `redirecciones.md` contra el sitio publicado.
- [ ] Enviar `sitemap.xml` en Search Console y revisar "Páginas" durante 4–6 semanas.
- [ ] Confirmar que Cloudflare Web Analytics sigue midiendo.

### 8. Ajustes menores (si queda tiempo, en PR aparte)

- Un solo `<h1>` por página: revisar cada `*Page.tsx`.
- `alt` descriptivo en fotos de producto (el `name` alcanza).
- `favicon.ico` en `public/`, apple-touch-icon 180×180 y `<meta name="theme-color">` con el color de marca
  de `src/styles/theme.css`.
- Imagen OG por defecto de 1200×630 en JPG o PNG (WhatsApp y LinkedIn no siempre leen WebP).

## Cómo cerrar

- `npm run validate` en verde y `npm run build` sin errores.
- PR en los dos repos (`Chinnimb/hisoil` y `shifrastudio/hisoil`), con la cuenta `shifrastudio`, solo después
  del OK de Ariel para pushear.
- En la descripción del PR: qué se hizo, qué quedó pendiente de decisión, y qué se verificó corriendo
  comandos y qué no.
