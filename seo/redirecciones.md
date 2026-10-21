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

| URL vieja                                        | Producto viejo (H1 · SKU)                            | Ruta nueva                      | Acción | Nota                                                                                          |
| ------------------------------------------------ | ---------------------------------------------------- | ------------------------------- | ------ | --------------------------------------------------------------------------------------------- |
| `/producto/compost-organico/`                    | Compost Orgánico · COMPOST                           | `/productos/compost-paisajismo` | 301    | Confirmado por Ariel (21/10/2026): era compost en bolsa para jardín, va a Compost Paisajismo. |
| `/producto/chip/`                                | Chip · CHIP                                          | `/productos/chip`               | 301    |                                                                                               |
| `/producto/chip-mini/`                           | Chip Mini · CHIPMINI                                 | `/productos/minichip`           | 301    |                                                                                               |
| `/producto/pometina/`                            | Pometina · POMETINA                                  | `/productos/pometina`           | 301    |                                                                                               |
| `/producto/perlita/`                             | Perlita · PERLITA                                    | `/productos/perlite`            | 301    |                                                                                               |
| `/producto/vermiculita/`                         | Vermiculita · VERMICU                                | `/productos/vermiculite`        | 301    |                                                                                               |
| `/producto/turba/`                               | Turba · TURBA                                        | `/productos/sphagnum`           | 301    | La nueva es "Turba sphagnum natural de Tierra del Fuego".                                     |
| `/producto/sustrato-profesional-exterior-f546/`  | Sustrato Profesional Exterior F546 · SUSF546         | `/productos/outdoor`            | 301    |                                                                                               |
| `/producto/sustrato-profesional-interior-f556/`  | Sustrato Profesional Interior F556 · SUSF556         | `/productos/indoor`             | 301    |                                                                                               |
| `/producto/sustrato-para-techos-y-terrazas/`     | Sustrato para Techos y Terrazas · SUSTETE            | `/productos/greenroof`          | 301    |                                                                                               |
| `/producto/sustrato-floral-f546/`                | Sustrato de siembra F545 · SUSF545                   | `/productos`                    | 301    | Confirmado por Ariel (21/10/2026): no existe en el catálogo nuevo, va a `/productos`.         |
| `/producto/sustrato-floral-f590-tierra-compost/` | Sustrato Profesional Tierra + Compost F590 · SUSF590 | `/productos`                    | 301    | Confirmado por Ariel (21/10/2026): no existe en el catálogo nuevo, va a `/productos`.         |
| `/producto/tierra-negra-25-dm3-tamizada/`        | Tierra Negra Tamizada · TINEGT                       | `/productos`                    | 301    | Confirmado por Ariel (21/10/2026): no existe en el catálogo nuevo, va a `/productos`.         |
| `/producto/tierra-negra-a-granel-rotobateada/`   | Tierra Negra a granel (Rotobateada) · TING           | `/productos`                    | 301    | Confirmado por Ariel (21/10/2026): no existe en el catálogo nuevo, va a `/productos`.         |
| `/producto/sustrato-floral-f538/`                | Sustrato para Azaleas · SUSF538                      | `/productos`                    | 301    | Confirmado por Ariel (21/10/2026): no existe en el catálogo nuevo, va a `/productos`.         |
| `/producto/sustrato-formula-331-cactus-x-5dm/`   | Sustrato Formula 331 Cactus X 5DM · SF 331 X 5 DM3   | `/productos`                    | 301    | Confirmado por Ariel (21/10/2026): no existe en el catálogo nuevo, va a `/productos`.         |
| `/producto/humus/`                               | Humus (de lombriz) · HUMUS                           | `/productos`                    | 301    | Confirmado por Ariel (21/10/2026): no existe en el catálogo nuevo, va a `/productos`.         |

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

## 7. `.htaccess` final

Es el archivo completo, listo para copiar a `public/.htaccess` (Vite lo copia a `dist/`). Ya incluye el
servir el HTML prerenderizado y la página 404 de la tarea 4 de `APLICAR.md`.

**Probado en Docker** con Apache 2.4.69 y con OpenLiteSpeed 1.9.3, sobre un `dist/` simulado: 495 de 495
pedidos dieron lo esperado en los dos (detalle y cómo repetirlo en `pruebas/resultado.md`). **No está probado
en el hosting real** (LiteSpeed Enterprise de Hostinger detrás de Cloudflare): ver la lista de lo que solo se
confirma allá en `pruebas/resultado.md`.

Supone esta estructura del build (la genera el prerender de la tarea 3 de `APLICAR.md`):

```
dist/index.html            home
dist/nosotros.html         una por ruta fija (servicios, productos, portfolio, contacto)
dist/fichas/chip.html      una por producto: /productos/chip
dist/404.html              página no encontrada, con noindex
dist/sitemap.xml, dist/robots.txt, dist/assets/…
```

```apache
# HiSoil: build estático de Vite en Hostinger (LiteSpeed, lee .htaccess) detrás de Cloudflare.
# Probado en Docker con Apache 2.4 y OpenLiteSpeed (ver seo/pruebas/resultado.md). No probado en el hosting real.

Options -MultiViews -Indexes
ErrorDocument 404 /404.html

<IfModule mod_headers.c>
  # Que el navegador revalide siempre el HTML (los .js y .css llevan hash en el nombre).
  <FilesMatch "\.html$">
    Header set Cache-Control "no-cache"
  </FilesMatch>
</IfModule>

RewriteEngine On

# --- 410: contenido demo y tipos internos expuestos por query string (/?cms_block=…) ---
RewriteCond %{QUERY_STRING} (^|&)(cms_block|elementor_library|taxonomy|woodmart_slide|portfolio|project-cat)= [NC]
RewriteRule ^$ - [G,L]

# --- 410: slides, portfolio demo, categorías demo, autores, feeds, WordPress ---
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

# Las 301 apuntan a https://%{HTTP_HOST}/… y no a /…: con un destino relativo, el servidor arma el
# Location con el esquema con el que le llega el pedido (http si Cloudflare habla con el origen por http)
# y se sumaría un salto http → https.

# --- 301: páginas ---
RewriteRule ^(shop|categoria-producto/productos|jardineria-profesional|horticultura-profesional|hogar-y-jardin)/?$ https://%{HTTP_HOST}/productos [R=301,L]
RewriteRule ^compost-organico/?$ https://%{HTTP_HOST}/productos/compost [R=301,L]
RewriteRule ^techos-verdes/?$ https://%{HTTP_HOST}/productos/greenroof [R=301,L]
RewriteRule ^(privacy-policy|blog|category/[^/]+)/?$ https://%{HTTP_HOST}/ [R=301,L]
RewriteRule ^(cart|checkout|wishlist|compare|track-order|my-account)(/.*)?$ https://%{HTTP_HOST}/ [R=301,L]

# --- 301: productos ---
RewriteRule ^producto/compost-organico/?$ https://%{HTTP_HOST}/productos/compost-paisajismo [R=301,L]
RewriteRule ^producto/chip/?$ https://%{HTTP_HOST}/productos/chip [R=301,L]
RewriteRule ^producto/chip-mini/?$ https://%{HTTP_HOST}/productos/minichip [R=301,L]
RewriteRule ^producto/pometina/?$ https://%{HTTP_HOST}/productos/pometina [R=301,L]
RewriteRule ^producto/perlita/?$ https://%{HTTP_HOST}/productos/perlite [R=301,L]
RewriteRule ^producto/vermiculita/?$ https://%{HTTP_HOST}/productos/vermiculite [R=301,L]
RewriteRule ^producto/turba/?$ https://%{HTTP_HOST}/productos/sphagnum [R=301,L]
RewriteRule ^producto/sustrato-profesional-exterior-f546/?$ https://%{HTTP_HOST}/productos/outdoor [R=301,L]
RewriteRule ^producto/sustrato-profesional-interior-f556/?$ https://%{HTTP_HOST}/productos/indoor [R=301,L]
RewriteRule ^producto/sustrato-para-techos-y-terrazas/?$ https://%{HTTP_HOST}/productos/greenroof [R=301,L]
RewriteRule ^producto/[^/]+/?$ https://%{HTTP_HOST}/productos [R=301,L]

# --- 301: etiquetas de producto ---
RewriteRule ^product-tag/compost(-organico)?/?$ https://%{HTTP_HOST}/productos/compost [R=301,L]
RewriteRule ^product-tag/[^/]+/?$ https://%{HTTP_HOST}/productos [R=301,L]

# --- 301: sitemaps viejos ---
RewriteRule ^(wp-sitemap.*|sitemap_index)\.xml$ https://%{HTTP_HOST}/sitemap.xml [R=301,L]

# --- Barra final: /nosotros/ → /nosotros (las rutas nuevas no la llevan) ---
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.+)/$ https://%{HTTP_HOST}/$1 [R=301,L]

# --- HTML prerenderizado ---
# Home explícita: así index.html le gana a un index.php que haya quedado del WordPress, aunque el
# servidor no lea DirectoryIndex del .htaccess (OpenLiteSpeed no lo lee).
RewriteRule ^$ /index.html [L]
# Fichas: /productos/chip → fichas/chip.html. Van en fichas/ y no en productos/ para que no exista una
# carpeta productos/ al lado de productos.html: con esa carpeta, Apache redirige /productos → /productos/
# (DirectorySlash) aunque la regla de abajo ya haya reescrito el pedido (OpenLiteSpeed lo hace a veces sí
# y a veces no). Si el slug no existe, fichas/<slug>.html no existe y da 404.
RewriteRule ^productos/([^/]+)$ /fichas/$1.html [L]
# Rutas fijas: /nosotros → nosotros.html
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^([^/]+)$ /$1.html [L]

# Sin fallback a index.html: lo que no existe cae en ErrorDocument 404 (404.html, con noindex).
```

Notas:

- **Orden**: 410 → 301 → barra final → HTML prerenderizado. Sin fallback a `index.html`: una URL que no
  existe devuelve 404 con `404.html`, no la home con 200.
- **Por qué `fichas/` y no `productos/`**: con `dist/productos.html` y una carpeta `dist/productos/` al lado,
  Apache respondió `/productos` con 301 a `/productos/` aunque la regla ya había reescrito a
  `productos.html` (es `DirectorySlash`, de `mod_dir`), y `/productos/` daba el listado de la carpeta o 404.
  En OpenLiteSpeed pasó lo mismo, pero solo a veces (dependía de qué se había pedido antes). Todas las 301
  que van a `/productos` caían ahí. Con las fichas en `fichas/` no hay carpeta que choque.
- **Destinos `https://%{HTTP_HOST}/…`**: con un destino relativo (`/productos`), Apache armó el `Location`
  con el esquema del pedido (`http://localhost:8080/productos` en la prueba). Si Cloudflare habla con el
  origen por http (modo SSL "Flexible"), cada 301 sumaría un salto http → https. Con el destino absoluto no
  depende de eso. Contra: el sitio solo se puede probar por https (en Docker el script compara solo el path).
- **Home explícita** (`RewriteRule ^$ /index.html`): con un `index.php` en la carpeta y `index.php` primero en
  `DirectoryIndex`, Apache sirvió el `index.php`; OpenLiteSpeed lo ejecutó. Con esta regla, los dos sirvieron
  `index.html`.
- **Lo que OpenLiteSpeed ignora del `.htaccess`**: solo lee las reglas de rewrite. `ErrorDocument`, `Options`
  y `Header` no los aplica (la 404 sale con su página genérica, no con `404.html`). LiteSpeed Enterprise, que
  es lo que usa Hostinger, se presenta como compatible con el `.htaccess` de Apache; no lo pude probar.
- **Query string `/?cms_block=…`**: la condición sobre `QUERY_STRING` con `^$` agarró las 78 URLs con
  `?cms_block=`, `?elementor_library=` y `?taxonomy=` (410) y dejó pasar `/?utm_source=…` (200, la home).
- **Duplicados que quedan accesibles**: `/nosotros.html`, `/fichas/chip.html`, `/index`, `/404` responden 200. Nadie los enlaza y cada uno tiene su canonical, así que no hace falta bloquearlos.
- **Anclas**: si se quiere mandar `/jardineria-profesional/` a `/productos#paisajismo`, usar
  `RewriteRule ^jardineria-profesional/?$ https://%{HTTP_HOST}/productos#paisajismo [R=301,NE,L]` (sin `NE`,
  el `#` sale como `%23`). Google ignora el ancla, así que no cambia el SEO; solo la experiencia.
- **Query strings en las 301**: `RewriteRule` conserva el query string del pedido (probado:
  `/productos?orderby=x` da 200). Si aparecen `?add-to-cart=` u `?orderby=` en Search Console, sumar una regla
  que los descarte.
- **Mayúsculas**: Docker en macOS sirve los archivos sin distinguir mayúsculas (`/PRODUCTOS` dio 200). En el
  hosting (Linux) `/PRODUCTOS` va a dar 404.
