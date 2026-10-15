# Recomendaciones SEO para el sitio nuevo

Qué implementar en el sitio nuevo (Vite + React 18 SPA) para no perder lo que hoy tiene el WordPress, en
orden de prioridad. Es solo la propuesta: no se tocó código.

Punto de partida, en una línea: **el sitio actual tiene muy poco SEO para perder** (sin plugin SEO, sin meta
descriptions, sin Open Graph, sin H1 en las páginas principales, sin analítica). Lo que sí tiene valor son las
**URLs y su antigüedad** (dominio y fichas de producto desde 2020) y el **JSON-LD de producto** que genera
WooCommerce. El riesgo grande de la migración no es perder metadatos: es que las URLs viejas den 404 y que
la SPA se publique con el `<head>` genérico en todas las rutas.

## Prioridad 1 — Bloqueantes para el lanzamiento

### 1.1 Redirecciones 301 y 410

- Implementar la tabla de `redirecciones.md` (borrador de `.htaccess` incluido).
- Sin esto, las 17 fichas `/producto/…`, `/shop/` y las páginas del menú dan 404 desde el día uno.
- Confirmar con HiSoil las filas marcadas como dudosas (productos sin equivalente: azaleas, cactus, humus,
  tierra negra).
- Decidido (ver `APLICAR.md`): el sitio va al mismo Hostinger con LiteSpeed, así que `public/.htaccess`
  resuelve 301, 410, el HTML por ruta y la 404. El `.htaccess` final está probado en Docker (Apache y
  OpenLiteSpeed), no en el hosting.

### 1.2 HTML propio por ruta (prerender en el build)

Hoy el build emite un solo `index.html` con `<title>Hisoil Wireframes</title>` y una descripción en inglés de
Figma Make. Google renderiza JavaScript, pero:

- WhatsApp, Facebook, LinkedIn y X **no** ejecutan JS: toman el `<head>` del HTML tal cual. Sin prerender,
  cualquier link compartido muestra "Hisoil Wireframes".
- El render de JS de Google llega en una segunda pasada y es menos confiable para title, canonical y JSON-LD.
- Además resuelve la deuda de `CLAUDE.md`: "las rutas que no son `/` dan 404 al entrar directo". Cada ruta
  tiene su HTML (`dist/nosotros.html`, `dist/fichas/chip.html`) y el `.htaccess` los sirve en `/nosotros` y
  `/productos/chip`. No se usa `dist/<ruta>/index.html` porque fuerza la barra final (ver la sección 7 de
  `redirecciones.md`).

Opciones, de menor a mayor cambio:

1. **Script `postbuild` propio** (recomendado): después de `vite build`, lee las rutas fijas y los 33 slugs de
   `products.ts`, copia `dist/index.html` a `dist/<ruta>.html` (las fichas, a `dist/fichas/<slug>.html`) y
   reemplaza `<title>`, `description`,
   `canonical`, OG/Twitter y el JSON-LD de cada una. No toca el código de la app ni el scaffolding de Figma Make.
2. `vite-plugin-prerender` / `vite-react-ssg`: renderizan también el contenido (mejor para el texto visible),
   pero cambian el arranque de la app y pueden chocar con una regeneración desde Make.
3. Modo framework de React Router v7 con `prerender`: lo más completo, pero es cambiar la arquitectura.

### 1.3 Title y meta description por ruta, también al navegar

El prerender cubre la primera carga; al navegar dentro de la SPA, el título tiene que cambiar igual.
Con React 18, un hook chico (`useEffect` que setea `document.title` y la meta description) en cada `*Page.tsx`,
o `react-helmet-async`. Fuente única de los textos: un `seo.ts` que lean el hook **y** el script de prerender,
para que no se desincronicen.

Propuesta de títulos (≤ 60 caracteres) y descripciones (≤ 155), en rioplatense, partiendo de lo que hoy dice el
sitio viejo ("Sustratos de alta calidad para la agricultura, horticultura y jardinería"):

| Ruta               | Title propuesto                                              | Meta description propuesta                                                                                                       |
| ------------------ | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `/`                | HiSoil · Enmiendas orgánicas, sustratos y servicios de suelo | Compost, sustratos profesionales y servicios de suelo para agro, viveros y paisajismo. Pilar, Buenos Aires. Pedí tu presupuesto. |
| `/productos`       | Productos · Compost, sustratos y materias primas \| HiSoil   | Catálogo HiSoil: enmiendas para agricultura, sustratos profesionales, materias primas, paisajismo e infraestructura verde.       |
| `/productos/:slug` | `{name}` · `{línea}` \| HiSoil                               | El campo `short` de `products.ts` (ya tiene el largo justo).                                                                     |
| `/servicios`       | Servicios de suelo y residuos orgánicos \| HiSoil            | Tratamiento de residuos orgánicos, compostaje a medida, restauración ambiental y asesoramiento técnico.                          |
| `/portfolio`       | Casos y proyectos \| HiSoil                                  | (a redactar con los casos reales del portfolio)                                                                                  |
| `/nosotros`        | Nosotros \| HiSoil                                           | (a redactar)                                                                                                                     |
| `/contacto`        | Contacto y presupuestos \| HiSoil                            | Escribinos por WhatsApp, mail o formulario. Te respondemos con una propuesta a medida.                                           |

Los textos son un punto de partida para que los revise quien lleve el copy.

### 1.4 Sacar el `noindex` al publicar (y solo ahí)

`index.html` tiene `noindex, nofollow` a propósito. Agregarlo a la checklist de lanzamiento: si se publica con
ese meta, Google desindexa todo el dominio. Al revés, mientras siga en Vercel de prueba, que se quede.

## Prioridad 2 — Primera semana

### 2.1 `sitemap.xml` y `robots.txt`

- Generar `dist/sitemap.xml` en el mismo `postbuild`: 6 rutas fijas + 33 fichas = 39 URLs. Sin `lastmod` inventado
  (o con la fecha del build si cambió el contenido).
- `public/robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://hisoil.com.ar/sitemap.xml
  ```
- El `robots.txt` viejo apunta a `/wp-sitemap.xml`: redirigirlo al nuevo (está en el borrador de `.htaccess`).

### 2.2 Search Console

- No encontré verificación de Google ni de Bing en el HTML ni en los TXT del DNS (solo el SPF de Hostinger).
  Puede estar verificada por archivo HTML o por otra vía que no se ve desde afuera: **preguntar a HiSoil**.
- Antes de migrar: verificar la propiedad de dominio (`hisoil.com.ar`) por TXT en Cloudflare y **exportar**
  el informe de rendimiento (consultas y páginas) y el de indexación. Es la única forma de saber qué URLs
  viejas importan de verdad.
- Después de migrar: enviar el sitemap nuevo y mirar "Páginas" y "Redirecciones" durante 4–6 semanas.
- No hace falta "Cambio de dirección": el dominio es el mismo.

### 2.3 JSON-LD

El sitio viejo solo tiene `Product` + `BreadcrumbList` (WooCommerce). Proponer:

- **Home**: `Organization` (o `LocalBusiness` si van a mostrar la planta de Pilar) + `WebSite`. Sin mail,
  teléfono ni dirección hasta que se defina el NAP (2.4); cuando se defina, se suman `email`, `telephone` y
  `address` (`PostalAddress`).
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HiSoil",
    "url": "https://hisoil.com.ar/",
    "logo": "https://hisoil.com.ar/hisoil-logo.png",
    "sameAs": [
      "https://www.instagram.com/hisoil_/",
      "https://www.facebook.com/p/Hi-Soil-100066773138615/"
    ]
  }
  ```
  Ojo con el `logo`: `hisoil-logo.png` mide 220×57 y Google pide al menos 112×112. Hace falta una versión
  cuadrada.
- **`/productos/:slug`**: `Product` con `name`, `description` (`short`), `image`,
  `brand` (`{ "@type": "Brand", "name": "HiSoil" }`) y
  `category` (la línea), más `BreadcrumbList` Inicio › Productos › {name}. Sin `offers`, porque el sitio nuevo no
  publica precios. Ojo: sin `offers`/`review`/`aggregateRating` Google no muestra fragmento enriquecido de
  producto; igual sirve para entender la página. El sitio viejo sí tenía `offers` con precios en ARS de 2022.
- **Resto**: `BreadcrumbList`.
- Validar cada plantilla en validator.schema.org antes de publicar. La Prueba de resultados enriquecidos de
  Google va a marcar el `Product` como no apto (por la falta de `offers`): es esperable.

### 2.4 Datos de negocio consistentes (NAP)

Hoy no coinciden entre sitios. Hay que elegir una versión y usarla igual en footer, contacto, JSON-LD y
Google Business Profile (si existe; no lo pude verificar):

| Dato      | Sitio viejo                                                                                  | Sitio nuevo                   |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------------- |
| Mail      | info@hisoil.com.ar                                                                           | administracion@hisoil.com.ar  |
| Teléfonos | (011) 4440 1919 · (011) 2879 2466                                                            | +54 9 11 4440-1919 (WhatsApp) |
| Dirección | El Hornero 1180 - Edificio Alpina (1629) Pilar - Buenos Aires · Colectora Panamericana km 56 | No aparece                    |
| Redes     | Ninguna enlazada                                                                             | Instagram `hisoil_`, Facebook |

## Prioridad 3 — Antes de difundir el sitio

### 3.1 Open Graph y Twitter cards

El sitio viejo no tiene ninguna. En el sitio nuevo, en cada HTML prerenderizado:
`og:type`, `og:site_name` (HiSoil), `og:locale` (`es_AR`), `og:title`, `og:description`, `og:url` (= canonical),
`og:image` (1200×630, absoluta) y `twitter:card=summary_large_image`. Para las fichas, la foto del producto
(en WebP funciona en la mayoría; para máxima compatibilidad con WhatsApp/LinkedIn conviene una versión JPG o PNG
de 1200×630).

### 3.2 Canonical

`<link rel="canonical">` absoluto por ruta, sin barra final (igual en canonical, sitemap, links internos y
`.htaccess`). La home es la excepción: `https://hisoil.com.ar/`. Hoy `index.html` no tiene canonical.

### 3.3 Íconos y `theme-color`

- El sitio viejo usa `favicon.ico` (2020) y `theme-color` vacío. El nuevo tiene `faviconV2.png` como icon y
  apple-touch-icon.
- Sumar `favicon.ico` en la raíz (lo piden algunos navegadores y lectores de feeds aunque no esté en el HTML),
  un apple-touch-icon de 180×180 y `<meta name="theme-color">` con el color de marca de `theme.css`.

### 3.4 Un solo H1 por página y `alt` en imágenes

- Viejo: la home, `/servicios/`, `/compost-organico/`, `/techos-verdes/` y las páginas del menú no tienen H1;
  casi todas las imágenes tienen `alt` vacío.
- Nuevo: revisar que cada `*Page.tsx` tenga exactamente un `<h1>` y que las fotos de producto tengan `alt`
  descriptivo (el `name` del producto alcanza como base).

### 3.5 Página 404 real

Con fallback de SPA, una URL inexistente devuelve la home con 200 ("soft 404"). Agregar una ruta `*` con
contenido de "no encontrada" y `noindex`. Con prerender + `ErrorDocument 404 /404.html` en `.htaccess`, el
servidor puede devolver 404 de verdad.

### 3.6 Analítica

El sitio viejo no tiene GA4, GTM ni píxeles. Solo aparece **Cloudflare Web Analytics** (beacon
`static.cloudflareinsights.com`), que lo inyecta Cloudflare y debería seguir funcionando con el sitio nuevo
sin tocar nada (verificarlo después del cambio). Si quieren medir conversiones (clicks a WhatsApp, envíos del
formulario), definir GA4 o similar antes del lanzamiento, junto con el banner de cookies que eso implique.

## Qué no hace falta conservar

- `hreflang`: el sitio viejo no tiene; el nuevo está solo en es-AR. `lang="es-AR"` ya está en `index.html`.
- Feeds RSS, `xmlrpc`, `wp-json`, `shortlink`, `generator`: son de WordPress.
- Precios en el JSON-LD: el sitio nuevo trabaja por presupuesto.
- El widget de Elfsight (no identifiqué cuál es; no afecta SEO).
