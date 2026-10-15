# Redirecciones: URL vieja → ruta nueva

Relevado el 15/10/2026 sobre https://hisoil.com.ar/ (WordPress 6.5.13 + WooCommerce 9.3.6 + Woodmart).
Fuente de URLs viejas: `wp-sitemap.xml` (el sitemap nativo de WordPress; no hay Yoast ni RankMath)
más los links del menú. Rutas nuevas: `src/app/App.tsx` y los slugs de `src/app/data/products.ts`.

Convenciones de la tabla:

- **Estado viejo**: lo que devolvió la URL vieja al pedirla (200 salvo que diga otra cosa).
- **Acción**: `301` a la ruta nueva, o `410` (Gone) para lo que no tiene equivalente y no vale la pena conservar.
- **⚠ Dudosa**: el destino es una propuesta; hay que confirmarlo con HiSoil antes de publicar.
- Las URLs viejas terminan en `/`. Las reglas tienen que aceptar con y sin barra final.
- No sé qué URLs tiene Google indexadas ni cuáles traen tráfico: no hay acceso a Search Console
  y el sitio no tiene analítica (ver `sitio-actual.md`). La prioridad real sale de ahí; conviene
  exportar el informe de Páginas de Search Console antes de migrar.

## 1. Páginas reales del sitio

| URL vieja                                                                 | Qué es hoy                                                                                                 | Ruta nueva             | Acción | Nota                                                                                                                                                               |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/`                                                                       | Home                                                                                                       | `/`                    | —      | Misma URL, no necesita regla.                                                                                                                                      |
| `/shop/`                                                                  | Catálogo WooCommerce (ítem "Productos" del menú)                                                           | `/productos`           | 301    |                                                                                                                                                                    |
| `/categoria-producto/productos/`                                          | Única categoría de producto                                                                                | `/productos`           | 301    |                                                                                                                                                                    |
| `/jardineria-profesional/`                                                | Página "Paisajismo" del menú                                                                               | `/productos`           | 301    | Se puede apuntar a `/productos#paisajismo` (ver nota de anclas abajo).                                                                                             |
| `/horticultura-profesional/`                                              | Página "Productores" del menú (ornamentales, ciclamen, tabaco, hortalizas, forestales, frutales)           | `/productos`           | 301    | Encaja con la línea `sustratos` (`/productos#sustratos`).                                                                                                          |
| `/hogar-y-jardin/`                                                        | Página "Viveros" del menú (H2: "Productos para Hogar y Jardín", "Productos para Horticultura Profesional") | `/productos`           | 301    | ⚠ Dudosa: mezcla paisajismo y sustratos; `/productos` sin ancla es lo más seguro.                                                                                  |
| `/servicios/`                                                             | Recepción y disposición de poda ("no quemes ni entierres tu poda")                                         | `/servicios`           | 301    | En el sitio nuevo corresponde a "Tratamiento de residuos orgánicos".                                                                                               |
| `/compost-organico/`                                                      | Página institucional de compost                                                                            | `/productos/compost`   | 301    | ⚠ Dudosa: podría ser `/productos/compost-paisajismo`. Elegí la línea agro porque es el compost que destaca la home nueva.                                          |
| `/techos-verdes/`                                                         | Página institucional de techos verdes                                                                      | `/productos/greenroof` | 301    |                                                                                                                                                                    |
| `/portfolio/`                                                             | Portfolio demo de Woodmart (imágenes placeholder)                                                          | `/portfolio`           | 301    | Solo cambia la barra final.                                                                                                                                        |
| `/privacy-policy/`                                                        | "Privacy Policy" (plantilla de WordPress, en inglés)                                                       | `/`                    | 301    | ⚠ Dudosa: cuando exista la página legal de privacidad, apuntar ahí.                                                                                                |
| `/blog/`                                                                  | Listado de 3 notas de 2020                                                                                 | `/`                    | 301    | ⚠ Dudosa: el sitio nuevo no tiene blog. Alternativa: 410.                                                                                                          |
| `/un-jardin-andino-disenado-para-exponer-la-magnificencia-de-los-cactus/` | Nota (11/2020)                                                                                             | —                      | 410    | ⚠ Dudosa. Son notas de terceros republicadas (imágenes con nombres tipo `3480607w1920.jpg`), sin relación con productos. Si HiSoil quiere conservarlas, 301 a `/`. |
| `/ambiente-la-argentina-obtuvo-fondos-para-fortalecer-la-ley-de-bosques/` | Nota (11/2020)                                                                                             | —                      | 410    | ⚠ Dudosa, ídem.                                                                                                                                                    |
| `/plastico-5-claves-para-reducir-el-impacto-ambiental/`                   | Nota (11/2020)                                                                                             | —                      | 410    | ⚠ Dudosa, ídem.                                                                                                                                                    |
| `/category/paisajismo/`                                                   | Archivo de notas                                                                                           | `/`                    | 301    |                                                                                                                                                                    |
| `/category/medio-ambiente/`                                               | Archivo de notas                                                                                           | `/`                    | 301    |                                                                                                                                                                    |
| `/author/carloslr/`                                                       | Archivo de autor ("Nothing Found")                                                                         | —                      | 410    | Expone el usuario de WordPress.                                                                                                                                    |
| `/author/jjk1978/`                                                        | Archivo de autor                                                                                           | —                      | 410    | Expone el usuario de WordPress.                                                                                                                                    |

## 2. Productos (WooCommerce `/producto/<slug>/`)

| URL vieja                                        | Producto viejo (H1 · SKU)                            | Ruta nueva                      | Acción | Nota                                                                                                                           |
| ------------------------------------------------ | ---------------------------------------------------- | ------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `/producto/compost-organico/`                    | Compost Orgánico · COMPOST                           | `/productos/compost-paisajismo` | 301    | ⚠ Dudosa: era compost en bolsa para jardín (5 presentaciones). Si se prefiere la línea agro: `/productos/compost`.             |
| `/producto/chip/`                                | Chip · CHIP                                          | `/productos/chip`               | 301    |                                                                                                                                |
| `/producto/chip-mini/`                           | Chip Mini · CHIPMINI                                 | `/productos/minichip`           | 301    |                                                                                                                                |
| `/producto/pometina/`                            | Pometina · POMETINA                                  | `/productos/pometina`           | 301    |                                                                                                                                |
| `/producto/perlita/`                             | Perlita · PERLITA                                    | `/productos/perlite`            | 301    |                                                                                                                                |
| `/producto/vermiculita/`                         | Vermiculita · VERMICU                                | `/productos/vermiculite`        | 301    |                                                                                                                                |
| `/producto/turba/`                               | Turba · TURBA                                        | `/productos/sphagnum`           | 301    | La nueva es "Turba sphagnum natural de Tierra del Fuego".                                                                      |
| `/producto/sustrato-profesional-exterior-f546/`  | Sustrato Profesional Exterior F546 · SUSF546         | `/productos/outdoor`            | 301    |                                                                                                                                |
| `/producto/sustrato-profesional-interior-f556/`  | Sustrato Profesional Interior F556 · SUSF556         | `/productos/indoor`             | 301    |                                                                                                                                |
| `/producto/sustrato-para-techos-y-terrazas/`     | Sustrato para Techos y Terrazas · SUSTETE            | `/productos/greenroof`          | 301    |                                                                                                                                |
| `/producto/sustrato-floral-f546/`                | Sustrato de siembra F545 · SUSF545                   | `/productos/seed`               | 301    | ⚠ Dudosa: Seed es sustrato profesional de siembra; el viejo era de venta minorista. Ojo: el slug dice F546 y el producto F545. |
| `/producto/sustrato-floral-f590-tierra-compost/` | Sustrato Profesional Tierra + Compost F590 · SUSF590 | `/productos/tierra-fertil`      | 301    | ⚠ Dudosa.                                                                                                                      |
| `/producto/tierra-negra-25-dm3-tamizada/`        | Tierra Negra Tamizada · TINEGT                       | `/productos/tierra-fertil`      | 301    | ⚠ Dudosa: no hay "tierra negra" en el catálogo nuevo.                                                                          |
| `/producto/tierra-negra-a-granel-rotobateada/`   | Tierra Negra a granel (Rotobateada) · TING           | `/productos/tierra-fertil`      | 301    | ⚠ Dudosa: alternativa `/productos/level` (nivelación, a granel).                                                               |
| `/producto/sustrato-floral-f538/`                | Sustrato para Azaleas · SUSF538                      | `/productos`                    | 301    | ⚠ Sin equivalente. No hay sustrato ácido para azaleas en el catálogo nuevo.                                                    |
| `/producto/sustrato-formula-331-cactus-x-5dm/`   | Sustrato Formula 331 Cactus X 5DM · SF 331 X 5 DM3   | `/productos`                    | 301    | ⚠ Sin equivalente.                                                                                                             |
| `/producto/humus/`                               | Humus (de lombriz) · HUMUS                           | `/productos`                    | 301    | ⚠ Sin equivalente. Alternativa: `/productos/compost-paisajismo`.                                                               |

## 3. Etiquetas de producto (`/product-tag/…`)

Todas listan los mismos 17 productos; no tienen contenido propio.

| URL vieja                        | Ruta nueva           | Acción |
| -------------------------------- | -------------------- | ------ |
| `/product-tag/viveros/`          | `/productos`         | 301    |
| `/product-tag/paisajistas/`      | `/productos`         | 301    |
| `/product-tag/paisajismo/`       | `/productos`         | 301    |
| `/product-tag/sustratos/`        | `/productos`         | 301    |
| `/product-tag/agricultura/`      | `/productos`         | 301    |
| `/product-tag/compost/`          | `/productos/compost` | 301    |
| `/product-tag/compost-organico/` | `/productos/compost` | 301    |

## 4. WooCommerce / cuenta (sin equivalente, no indexables)

| URL vieja                                                                        | Estado hoy                                          | Acción propuesta |
| -------------------------------------------------------------------------------- | --------------------------------------------------- | ---------------- |
| `/cart/`, `/checkout/`                                                           | Ya redirigen a `/` (el sitio está en modo catálogo) | 301 → `/`        |
| `/my-account/` y subrutas (`/my-account/pedidos/`, `/my-account/lost-password/`) | 200 con `noindex, follow`                           | 301 → `/`        |
| `/wishlist/`, `/compare/`, `/track-order/`                                       | Páginas de WooCommerce/Woodmart en el sitemap       | 301 → `/`        |

## 5. Contenido demo de Woodmart (basura del tema)

El sitemap publica 247 URLs del contenido de demostración que trae Woodmart y nunca se borró.
El detalle de cada una está en `sitio-actual.json` (`demoWoodmart`). Propuesta: **410 Gone** para todo,
así Google las saca rápido y no se mezclan con el sitio nuevo. Ninguna tiene equivalente.

| Patrón                                                                                          | Cantidad en el sitemap | Ejemplos                                                                                                                                                                   | Acción |
| ----------------------------------------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Páginas demo del tema (sin contar `/compare/`, `/wishlist/` y `/track-order/`, que van con 301) | 117                    | `/home-fashion/`, `/home-cars/`, `/home-medical-marijuana/`, `/contact-us-2/`, `/faqs/`, `/about-us/`, `/maintenance/`, `/products-grid/`, `/sample-page/`, `/custom-404/` | 410    |
| Slides (`woodmart_slide`)                                                                       | 35                     | `/woodmart_slide/bike-slide-1/`                                                                                                                                            | 410    |
| Portfolio demo                                                                                  | 9                      | `/portfolio/potenti-parturient-parturie/`                                                                                                                                  | 410    |
| Categorías de proyecto demo                                                                     | 5                      | `/project-cat/furniture/`                                                                                                                                                  | 410    |
| Bloques HTML (`?cms_block=`)                                                                    | 59                     | `/?cms_block=footer-wine`                                                                                                                                                  | 410    |
| Plantillas Elementor (`?elementor_library=`)                                                    | 5                      | `/?elementor_library=pie-hisoil`                                                                                                                                           | 410    |
| Sliders (`?taxonomy=woodmart_slider&term=`)                                                     | 14                     | `/?taxonomy=woodmart_slider&term=bike-slider`                                                                                                                              | 410    |

La lista exacta de páginas demo está en la sección 7 (bloque `.htaccess`).

## 6. Otras URLs de WordPress que van a dejar de existir

| URL                                                          | Acción propuesta                                                                                                                               |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `/feed/`, `/comments/feed/`, `*/feed/`                       | 410                                                                                                                                            |
| `/wp-sitemap.xml`, `/wp-sitemap-*.xml`, `/sitemap_index.xml` | 301 → `/sitemap.xml` (el nuevo)                                                                                                                |
| `/wp-admin/`, `/wp-login.php`, `/xmlrpc.php`, `/wp-json/`    | 410 (o 404 natural)                                                                                                                            |
| `/wp-content/uploads/…` (imágenes)                           | Dejar que den 404. Si Google Imágenes trae tráfico (no verificable sin Search Console), evaluar 301 de las fotos de producto a la ficha nueva. |
| `http://` y `www.`                                           | Hoy Cloudflare ya redirige a `https://hisoil.com.ar/` (verificado con `curl -I`). Mantener esa regla en Cloudflare.                            |

## 7. Borrador de `.htaccess`

Pensado para LiteSpeed (lee `.htaccess` con sintaxis de Apache `mod_rewrite`). Es una propuesta: **no
está probado en el hosting**. Va en `public/.htaccess` para que Vite lo copie a `dist/`.

⚠ Ojo con `CLAUDE.md`: dice que producción "no tiene servidor propio" y que no hay que depender de
rewrites. El pedido de este relevamiento dice que el sitio nuevo reemplaza al WordPress en el mismo
Hostinger con LiteSpeed. Si eso se confirma, `.htaccess` es la vía; si el build se entrega a otro
hosting, las 301 hay que configurarlas donde corresponda (o en Cloudflare con _Bulk Redirects_).

```apache
Options -MultiViews
RewriteEngine On

# --- 410: contenido demo y tipos internos expuestos por query string ---
RewriteCond %{QUERY_STRING} (^|&)(cms_block|elementor_library|taxonomy|woodmart_slide|portfolio|project-cat)= [NC]
RewriteRule ^$ - [G,L]

# --- 410: slides, portfolio demo, categorías demo, autores, feeds ---
RewriteRule ^woodmart_slide/ - [G,L]
RewriteRule ^portfolio/.+ - [G,L]
RewriteRule ^project-cat/ - [G,L]
RewriteRule ^author/ - [G,L]
RewriteRule (^|/)feed/?$ - [G,L]
RewriteRule ^(wp-admin|wp-login\.php|xmlrpc\.php|wp-json)(/|$) - [G,L]

# --- 410: notas viejas (⚠ confirmar; alternativa: 301 a /) ---
RewriteRule ^(un-jardin-andino-disenado-para-exponer-la-magnificencia-de-los-cactus|ambiente-la-argentina-obtuvo-fondos-para-fortalecer-la-ley-de-bosques|plastico-5-claves-para-reducir-el-impacto-ambiental)/?$ - [G,L]

# --- 410: páginas demo de Woodmart ---
RewriteRule ^home-[a-z0-9-]+/?$ - [G,L]
RewriteRule ^(sample-page|contact-us|contact-us-2|contact-us-3|contact-us-4|faqs|faqs-2|our-team|maintenance|maintenance-2|maintenance-3|christmas-maintenance|infobox|pricing-tables|images-gallery|titles|carousels|banners|google-maps|instagram|social-buttons|team-member|testimonials|countdown-timer|360-degree-view|menu-price|portfolio-element|blog-element|products-grid|products-widgets|animated-counter|ajax-products-tabs|button-with-popup|brands-element|section-dividers|gradients|recent-products|featured-products|products-by-id|products-category|products-categories|sale-products|top-rated-products|about-us|about-us-2|about-me|about-factory|demo-digitals|timeline|video|buttons|list-element|custom-404|custom-404-2|parallax-scrolling|image-hotspot|animations|sliders)/?$ - [G,L]

# --- 301: páginas ---
RewriteRule ^(shop|categoria-producto/productos|jardineria-profesional|horticultura-profesional|hogar-y-jardin)/?$ /productos [R=301,L]
RewriteRule ^servicios/$ /servicios [R=301,L]
RewriteRule ^portfolio/$ /portfolio [R=301,L]
RewriteRule ^compost-organico/?$ /productos/compost [R=301,L]
RewriteRule ^techos-verdes/?$ /productos/greenroof [R=301,L]
RewriteRule ^(privacy-policy|blog|category/[^/]+)/?$ / [R=301,L]
RewriteRule ^(cart|checkout|wishlist|compare|track-order|my-account)(/.*)?$ / [R=301,L]

# --- 301: productos ---
RewriteRule ^producto/compost-organico/?$ /productos/compost-paisajismo [R=301,L]
RewriteRule ^producto/chip/?$ /productos/chip [R=301,L]
RewriteRule ^producto/chip-mini/?$ /productos/minichip [R=301,L]
RewriteRule ^producto/pometina/?$ /productos/pometina [R=301,L]
RewriteRule ^producto/perlita/?$ /productos/perlite [R=301,L]
RewriteRule ^producto/vermiculita/?$ /productos/vermiculite [R=301,L]
RewriteRule ^producto/turba/?$ /productos/sphagnum [R=301,L]
RewriteRule ^producto/sustrato-profesional-exterior-f546/?$ /productos/outdoor [R=301,L]
RewriteRule ^producto/sustrato-profesional-interior-f556/?$ /productos/indoor [R=301,L]
RewriteRule ^producto/sustrato-para-techos-y-terrazas/?$ /productos/greenroof [R=301,L]
RewriteRule ^producto/sustrato-floral-f546/?$ /productos/seed [R=301,L]
RewriteRule ^producto/(sustrato-floral-f590-tierra-compost|tierra-negra-25-dm3-tamizada|tierra-negra-a-granel-rotobateada)/?$ /productos/tierra-fertil [R=301,L]
RewriteRule ^producto/[^/]+/?$ /productos [R=301,L]

# --- 301: etiquetas de producto ---
RewriteRule ^product-tag/compost(-organico)?/?$ /productos/compost [R=301,L]
RewriteRule ^product-tag/[^/]+/?$ /productos [R=301,L]

# --- 301: sitemaps viejos ---
RewriteRule ^(wp-sitemap.*|sitemap_index)\.xml$ /sitemap.xml [R=301,L]

# --- Barra final: /nosotros/ → /nosotros (las rutas nuevas no la llevan) ---
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.+)/$ /$1 [R=301,L]

# --- Fallback de la SPA (solo si no se prerenderiza cada ruta; ver recomendaciones.md) ---
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ /index.html [L]
```

Notas sobre el borrador:

- **Orden**: los 410 y 301 van antes del fallback; si no, el fallback se come todo y devuelve la home con 200.
- **Anclas**: si se quiere mandar `/jardineria-profesional/` a `/productos#paisajismo`, usar
  `RewriteRule ^jardineria-profesional/?$ /productos#paisajismo [R=301,NE,L]` (sin `NE`, el `#` sale como `%23`).
  Google ignora el ancla, así que no cambia el SEO; solo la experiencia.
- **Barra final con prerender**: si cada ruta se genera como `dist/<ruta>/index.html`, `/nosotros` es un
  directorio y LiteSpeed puede redirigir solo a `/nosotros/`. En ese caso hay que elegir una sola forma
  (con o sin barra) y alinear canonical, sitemap y esta regla. Verificar en el hosting.
- **Query strings**: `RewriteRule` conserva el query string del pedido original en el destino. No es un problema
  para estas URLs (no llevan parámetros), pero si aparecen `?add-to-cart=` o `?orderby=` en Search Console,
  sumar una regla que los descarte.
- **Probar antes de publicar**: con `curl -I` contra cada URL de las tablas, en un subdominio de prueba del
  mismo hosting.
