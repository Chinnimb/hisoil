# Prueba del `.htaccess` en Docker

Fecha: 15/10/2026. Probado sobre un `dist/` simulado, **no** sobre el hosting real.

**Actualización 21/10/2026 (Cloudflare):** el sitio se publica en Cloudflare, no en Hostinger. Esta prueba
(Docker, `.htaccess`, `docker.sh`) queda como referencia. La prueba vigente es con `cf dev` sobre el `dist/`
que arma `simular-dist.sh`: 495 de 495 (sección 2 de `../cloudflare.md`).

**Actualización 21/10/2026:** cambiaron los destinos (los productos discontinuados van a `/productos` y todo lo
que antes era 410 ahora es 301 a la home). Se volvió a correr la prueba completa con `casos.tsv` actualizado:
495 de 495 en Apache y 495 de 495 en OpenLiteSpeed. Las tablas de abajo son de la corrida del 15/10.

## Qué se probó

- **Servidores**: Apache 2.4.69 (`httpd:2.4`, con `mod_rewrite`, `mod_headers` y `AllowOverride All`) y
  OpenLiteSpeed 1.9.3 (`litespeedtech/openlitespeed`, con `.htaccess` activado). Los dos con `index.php`
  antes que `index.html` en el índice, como un hosting que tenía WordPress.
- **Sitio**: el `dist/` de `npm run build` más lo que va a generar el prerender de `APLICAR.md`, simulado con
  copias de `index.html` con otro `<title>` y su canonical: `nosotros.html`, `servicios.html`,
  `productos.html`, `portfolio.html`, `contacto.html`, `fichas/<slug>.html` (los 33 slugs de
  `products.ts`), `404.html`, `sitemap.xml` (39 URLs) y `robots.txt`.
- **`.htaccess`**: el de la sección 7 de `redirecciones.md`.
- **Casos** (`casos.tsv`, 365): las 293 URLs de `sitio-actual.json` (29 páginas, 17 productos y 247 de demo
  de Woodmart, incluidas las 78 con `?cms_block=`, `?elementor_library=` y `?taxonomy=`), 18 variantes y URLs
  de WordPress (sin barra, feeds, sitemaps viejos, `wp-admin`, subrutas de `my-account`), las rutas nuevas
  con y sin barra final, las 33 fichas, inexistentes, query strings, `sitemap.xml` y `robots.txt`. Además,
  los 130 archivos del `dist/` simulado uno por uno (assets, imágenes de producto, HTML).
- **Qué mira el script**: el estado sin seguir redirecciones; en las 301, el path del `Location` y que el
  destino dé 200 (si no, es una cadena); en las rutas nuevas con 200, que el HTML tenga **su** canonical (o
  sea, que no cayó en otra página).

## Cómo repetirlo

```bash
npm run build                                # y el prerender, cuando exista
seo/pruebas/docker.sh up dist                # Apache en :8080, OpenLiteSpeed en :8090
seo/pruebas/probar.sh http://localhost:8080 dist > /tmp/apache.md
seo/pruebas/probar.sh http://localhost:8090 dist > /tmp/ols.md
seo/pruebas/docker.sh down
```

Contra el sitio publicado: `seo/pruebas/probar.sh https://hisoil.com.ar dist`. Sale con código 1 si algo
falla.

## Resultado

| `.htaccess`                                                                        | Apache         | OpenLiteSpeed                      |
| ---------------------------------------------------------------------------------- | -------------- | ---------------------------------- |
| Final (sección 7 de `redirecciones.md`, fichas en `fichas/`)                       | **495 de 495** | **495 de 495** (corrido dos veces) |
| Borrador anterior + cambios de la tarea 4 de `APLICAR.md` (fichas en `productos/`) | 478 de 495     | 485 de 495, varía entre corridas   |
| Sin `.htaccess` (como si se perdiera en la entrega)                                | 140 de 495     | no probado                         |

Lo que fallaba con el borrador anterior, y cómo se corrigió:

1. **`/productos` respondía 301 a `/productos/`** porque había una carpeta `productos/` (las fichas) al lado
   de `productos.html`. En Apache, el log de `mod_rewrite` muestra que la regla reescribía a
   `/productos.html` y aun así salía la 301 de `DirectorySlash`. `/productos/` daba el listado de la carpeta
   (Apache) o 404 (OpenLiteSpeed). Por eso las 13 URLs viejas que van a `/productos` (y la variante `/shop`) terminaban en una cadena
   301 → 301. En OpenLiteSpeed el mismo pedido daba 200 o 301 según lo que se había pedido antes.
   Corrección: las fichas van en `fichas/` y una regla mapea `/productos/<slug>` → `fichas/<slug>.html`.
2. **El `Location` de las 301 salía con `http://`** (el esquema del pedido). Corrección: destinos
   `https://%{HTTP_HOST}/…`.
3. **Con un `index.php` en la carpeta, `/` servía el `index.php`** (Apache lo mandó como texto, OpenLiteSpeed
   lo ejecutó). Corrección: `RewriteRule ^$ /index.html [L]`. Con esa regla sola, sin `DirectoryIndex`, los
   dos sirvieron `index.html`.

Lo que dio bien también con el borrador anterior: los 410 (incluidas las 78 URLs con query string: la
condición sobre `^$` las agarra y deja pasar `/?utm_source=…`), las 301 de productos y páginas, que ninguna
regla se coma un asset, y que no haya loops.

Pruebas puntuales (a mano, con el `.htaccess` final):

- Apache: `Cache-Control: no-cache` en los HTML (también en la 404); los `.js` sin ese header.
- Apache: una URL inexistente devuelve 404 con el contenido de `404.html`. OpenLiteSpeed devuelve 404 con su
  página genérica: no lee `ErrorDocument` del `.htaccess` (tampoco `Options` ni `Header`; lo dice su log:
  "Invalid rewrite directive").
- `/nosotros.html`, `/fichas/chip.html`, `/index` y `/404` responden 200 (duplicados con su canonical; nadie
  los enlaza). `/assets/` y `/fichas/` responden 403.
- `/PRODUCTOS` dio 200 porque Docker en macOS no distingue mayúsculas; en el hosting (Linux) va a dar 404.

## Lo que solo se puede confirmar en el hosting real

- Que LiteSpeed Enterprise se comporte como Apache con este `.htaccess`: OpenLiteSpeed **no** es LiteSpeed
  Enterprise (Hostinger usa Enterprise, que se presenta como compatible con `.htaccess` de Apache).
  En particular `ErrorDocument`, `Header` y `Options`, que OpenLiteSpeed ignora.
- Que el `.htaccess` llegue a `public_html` y que no quede nada del WordPress (`.htaccess` viejo, `index.php`).
- El modo SSL de Cloudflare, sus reglas de caché y el caché de LiteSpeed/Hostinger.
- Si Cloudflare desafía a `curl` (filas `DESAFIO-CF`) o a los bots de vistas previas (WhatsApp, Facebook,
  LinkedIn).
- El `<head>`, el JSON-LD y el `sitemap.xml` reales: acá son simulados, el prerender todavía no existe.

## Detalle (Apache, `.htaccess` final)

El resultado de OpenLiteSpeed es idéntico fila por fila. De los 130 archivos del `dist/` solo se listarían
los que fallan (ninguno).

| URL                                                                       | Esperado                              | Obtenido                              | Resultado |
| ------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------- | --------- |
| `/`                                                                       | 200                                   | 200                                   | OK        |
| `/shop/`                                                                  | 301 → `/productos`                    | 301 → `/productos`                    | OK        |
| `/categoria-producto/productos/`                                          | 301 → `/productos`                    | 301 → `/productos`                    | OK        |
| `/jardineria-profesional/`                                                | 301 → `/productos`                    | 301 → `/productos`                    | OK        |
| `/horticultura-profesional/`                                              | 301 → `/productos`                    | 301 → `/productos`                    | OK        |
| `/hogar-y-jardin/`                                                        | 301 → `/productos`                    | 301 → `/productos`                    | OK        |
| `/servicios/`                                                             | 301 → `/servicios`                    | 301 → `/servicios`                    | OK        |
| `/compost-organico/`                                                      | 301 → `/productos/compost`            | 301 → `/productos/compost`            | OK        |
| `/techos-verdes/`                                                         | 301 → `/productos/greenroof`          | 301 → `/productos/greenroof`          | OK        |
| `/portfolio/`                                                             | 301 → `/portfolio`                    | 301 → `/portfolio`                    | OK        |
| `/privacy-policy/`                                                        | 301 → `/`                             | 301 → `/`                             | OK        |
| `/blog/`                                                                  | 301 → `/`                             | 301 → `/`                             | OK        |
| `/un-jardin-andino-disenado-para-exponer-la-magnificencia-de-los-cactus/` | 410                                   | 410                                   | OK        |
| `/ambiente-la-argentina-obtuvo-fondos-para-fortalecer-la-ley-de-bosques/` | 410                                   | 410                                   | OK        |
| `/plastico-5-claves-para-reducir-el-impacto-ambiental/`                   | 410                                   | 410                                   | OK        |
| `/category/paisajismo/`                                                   | 301 → `/`                             | 301 → `/`                             | OK        |
| `/category/medio-ambiente/`                                               | 301 → `/`                             | 301 → `/`                             | OK        |
| `/author/carloslr/`                                                       | 410                                   | 410                                   | OK        |
| `/author/jjk1978/`                                                        | 410                                   | 410                                   | OK        |
| `/cart/`                                                                  | 301 → `/`                             | 301 → `/`                             | OK        |
| `/checkout/`                                                              | 301 → `/`                             | 301 → `/`                             | OK        |
| `/my-account/`                                                            | 301 → `/`                             | 301 → `/`                             | OK        |
| `/product-tag/viveros/`                                                   | 301 → `/productos`                    | 301 → `/productos`                    | OK        |
| `/product-tag/paisajistas/`                                               | 301 → `/productos`                    | 301 → `/productos`                    | OK        |
| `/product-tag/compost/`                                                   | 301 → `/productos/compost`            | 301 → `/productos/compost`            | OK        |
| `/product-tag/compost-organico/`                                          | 301 → `/productos/compost`            | 301 → `/productos/compost`            | OK        |
| `/product-tag/paisajismo/`                                                | 301 → `/productos`                    | 301 → `/productos`                    | OK        |
| `/product-tag/sustratos/`                                                 | 301 → `/productos`                    | 301 → `/productos`                    | OK        |
| `/product-tag/agricultura/`                                               | 301 → `/productos`                    | 301 → `/productos`                    | OK        |
| `/producto/compost-organico/`                                             | 301 → `/productos/compost-paisajismo` | 301 → `/productos/compost-paisajismo` | OK        |
| `/producto/chip/`                                                         | 301 → `/productos/chip`               | 301 → `/productos/chip`               | OK        |
| `/producto/chip-mini/`                                                    | 301 → `/productos/minichip`           | 301 → `/productos/minichip`           | OK        |
| `/producto/pometina/`                                                     | 301 → `/productos/pometina`           | 301 → `/productos/pometina`           | OK        |
| `/producto/perlita/`                                                      | 301 → `/productos/perlite`            | 301 → `/productos/perlite`            | OK        |
| `/producto/sustrato-floral-f538/`                                         | 301 → `/productos`                    | 301 → `/productos`                    | OK        |
| `/producto/sustrato-floral-f546/`                                         | 301 → `/productos/seed`               | 301 → `/productos/seed`               | OK        |
| `/producto/sustrato-profesional-exterior-f546/`                           | 301 → `/productos/outdoor`            | 301 → `/productos/outdoor`            | OK        |
| `/producto/sustrato-profesional-interior-f556/`                           | 301 → `/productos/indoor`             | 301 → `/productos/indoor`             | OK        |
| `/producto/sustrato-floral-f590-tierra-compost/`                          | 301 → `/productos/tierra-fertil`      | 301 → `/productos/tierra-fertil`      | OK        |
| `/producto/sustrato-para-techos-y-terrazas/`                              | 301 → `/productos/greenroof`          | 301 → `/productos/greenroof`          | OK        |
| `/producto/turba/`                                                        | 301 → `/productos/sphagnum`           | 301 → `/productos/sphagnum`           | OK        |
| `/producto/vermiculita/`                                                  | 301 → `/productos/vermiculite`        | 301 → `/productos/vermiculite`        | OK        |
| `/producto/sustrato-formula-331-cactus-x-5dm/`                            | 301 → `/productos`                    | 301 → `/productos`                    | OK        |
| `/producto/tierra-negra-25-dm3-tamizada/`                                 | 301 → `/productos/tierra-fertil`      | 301 → `/productos/tierra-fertil`      | OK        |
| `/producto/tierra-negra-a-granel-rotobateada/`                            | 301 → `/productos/tierra-fertil`      | 301 → `/productos/tierra-fertil`      | OK        |
| `/producto/humus/`                                                        | 301 → `/productos`                    | 301 → `/productos`                    | OK        |
| `/compare/`                                                               | 301 → `/`                             | 301 → `/`                             | OK        |
| `/wishlist/`                                                              | 301 → `/`                             | 301 → `/`                             | OK        |
| `/track-order/`                                                           | 301 → `/`                             | 301 → `/`                             | OK        |
| `/sample-page/`                                                           | 410                                   | 410                                   | OK        |
| `/home-fashion/`                                                          | 410                                   | 410                                   | OK        |
| `/products-grid/`                                                         | 410                                   | 410                                   | OK        |
| `/products-widgets/`                                                      | 410                                   | 410                                   | OK        |
| `/products-by-id/`                                                        | 410                                   | 410                                   | OK        |
| `/products-category/`                                                     | 410                                   | 410                                   | OK        |
| `/products-categories/`                                                   | 410                                   | 410                                   | OK        |
| `/home-fashion-flat/`                                                     | 410                                   | 410                                   | OK        |
| `/home-fashion-color/`                                                    | 410                                   | 410                                   | OK        |
| `/home-electronics/`                                                      | 410                                   | 410                                   | OK        |
| `/home-furniture/`                                                        | 410                                   | 410                                   | OK        |
| `/home-cars/`                                                             | 410                                   | 410                                   | OK        |
| `/home-categories/`                                                       | 410                                   | 410                                   | OK        |
| `/home-basic/`                                                            | 410                                   | 410                                   | OK        |
| `/home-parallax/`                                                         | 410                                   | 410                                   | OK        |
| `/home-infinite-scrolling/`                                               | 410                                   | 410                                   | OK        |
| `/home-boxed/`                                                            | 410                                   | 410                                   | OK        |
| `/home-grid/`                                                             | 410                                   | 410                                   | OK        |
| `/home-video/`                                                            | 410                                   | 410                                   | OK        |
| `/home-fullscreen/`                                                       | 410                                   | 410                                   | OK        |
| `/home-lookbook/`                                                         | 410                                   | 410                                   | OK        |
| `/home-landing/`                                                          | 410                                   | 410                                   | OK        |
| `/contact-us/`                                                            | 410                                   | 410                                   | OK        |
| `/contact-us-2/`                                                          | 410                                   | 410                                   | OK        |
| `/contact-us-3/`                                                          | 410                                   | 410                                   | OK        |
| `/contact-us-4/`                                                          | 410                                   | 410                                   | OK        |
| `/faqs/`                                                                  | 410                                   | 410                                   | OK        |
| `/faqs-2/`                                                                | 410                                   | 410                                   | OK        |
| `/our-team/`                                                              | 410                                   | 410                                   | OK        |
| `/maintenance/`                                                           | 410                                   | 410                                   | OK        |
| `/maintenance-2/`                                                         | 410                                   | 410                                   | OK        |
| `/maintenance-3/`                                                         | 410                                   | 410                                   | OK        |
| `/infobox/`                                                               | 410                                   | 410                                   | OK        |
| `/pricing-tables/`                                                        | 410                                   | 410                                   | OK        |
| `/images-gallery/`                                                        | 410                                   | 410                                   | OK        |
| `/titles/`                                                                | 410                                   | 410                                   | OK        |
| `/carousels/`                                                             | 410                                   | 410                                   | OK        |
| `/banners/`                                                               | 410                                   | 410                                   | OK        |
| `/google-maps/`                                                           | 410                                   | 410                                   | OK        |
| `/instagram/`                                                             | 410                                   | 410                                   | OK        |
| `/social-buttons/`                                                        | 410                                   | 410                                   | OK        |
| `/team-member/`                                                           | 410                                   | 410                                   | OK        |
| `/testimonials/`                                                          | 410                                   | 410                                   | OK        |
| `/countdown-timer/`                                                       | 410                                   | 410                                   | OK        |
| `/360-degree-view/`                                                       | 410                                   | 410                                   | OK        |
| `/menu-price/`                                                            | 410                                   | 410                                   | OK        |
| `/portfolio-element/`                                                     | 410                                   | 410                                   | OK        |
| `/blog-element/`                                                          | 410                                   | 410                                   | OK        |
| `/animated-counter/`                                                      | 410                                   | 410                                   | OK        |
| `/ajax-products-tabs/`                                                    | 410                                   | 410                                   | OK        |
| `/button-with-popup/`                                                     | 410                                   | 410                                   | OK        |
| `/brands-element/`                                                        | 410                                   | 410                                   | OK        |
| `/section-dividers/`                                                      | 410                                   | 410                                   | OK        |
| `/gradients/`                                                             | 410                                   | 410                                   | OK        |
| `/recent-products/`                                                       | 410                                   | 410                                   | OK        |
| `/featured-products/`                                                     | 410                                   | 410                                   | OK        |
| `/sale-products/`                                                         | 410                                   | 410                                   | OK        |
| `/top-rated-products/`                                                    | 410                                   | 410                                   | OK        |
| `/about-us/`                                                              | 410                                   | 410                                   | OK        |
| `/about-us-2/`                                                            | 410                                   | 410                                   | OK        |
| `/about-me/`                                                              | 410                                   | 410                                   | OK        |
| `/home-watches/`                                                          | 410                                   | 410                                   | OK        |
| `/home-base/`                                                             | 410                                   | 410                                   | OK        |
| `/home-base-rtl/`                                                         | 410                                   | 410                                   | OK        |
| `/home-dark/`                                                             | 410                                   | 410                                   | OK        |
| `/home-food/`                                                             | 410                                   | 410                                   | OK        |
| `/about-factory/`                                                         | 410                                   | 410                                   | OK        |
| `/home-handmade/`                                                         | 410                                   | 410                                   | OK        |
| `/home-cosmetics/`                                                        | 410                                   | 410                                   | OK        |
| `/home-christmas/`                                                        | 410                                   | 410                                   | OK        |
| `/christmas-maintenance/`                                                 | 410                                   | 410                                   | OK        |
| `/demo-digitals/`                                                         | 410                                   | 410                                   | OK        |
| `/home-digital-portfolio/`                                                | 410                                   | 410                                   | OK        |
| `/timeline/`                                                              | 410                                   | 410                                   | OK        |
| `/video/`                                                                 | 410                                   | 410                                   | OK        |
| `/buttons/`                                                               | 410                                   | 410                                   | OK        |
| `/list-element/`                                                          | 410                                   | 410                                   | OK        |
| `/home-jewellery/`                                                        | 410                                   | 410                                   | OK        |
| `/home-sport/`                                                            | 410                                   | 410                                   | OK        |
| `/home-marketplace/`                                                      | 410                                   | 410                                   | OK        |
| `/home-lingerie/`                                                         | 410                                   | 410                                   | OK        |
| `/home-toys/`                                                             | 410                                   | 410                                   | OK        |
| `/home-shoes/`                                                            | 410                                   | 410                                   | OK        |
| `/home-mobile-app/`                                                       | 410                                   | 410                                   | OK        |
| `/home-hardware/`                                                         | 410                                   | 410                                   | OK        |
| `/home-electronics-2/`                                                    | 410                                   | 410                                   | OK        |
| `/home-books/`                                                            | 410                                   | 410                                   | OK        |
| `/custom-404/`                                                            | 410                                   | 410                                   | OK        |
| `/custom-404-2/`                                                          | 410                                   | 410                                   | OK        |
| `/home-magazine/`                                                         | 410                                   | 410                                   | OK        |
| `/home-corporate/`                                                        | 410                                   | 410                                   | OK        |
| `/parallax-scrolling/`                                                    | 410                                   | 410                                   | OK        |
| `/home-glasses/`                                                          | 410                                   | 410                                   | OK        |
| `/home-bikes/`                                                            | 410                                   | 410                                   | OK        |
| `/image-hotspot/`                                                         | 410                                   | 410                                   | OK        |
| `/animations/`                                                            | 410                                   | 410                                   | OK        |
| `/sliders/`                                                               | 410                                   | 410                                   | OK        |
| `/home-travel/`                                                           | 410                                   | 410                                   | OK        |
| `/home-retail/`                                                           | 410                                   | 410                                   | OK        |
| `/home-wine/`                                                             | 410                                   | 410                                   | OK        |
| `/home-decor/`                                                            | 410                                   | 410                                   | OK        |
| `/home-motorcycle/`                                                       | 410                                   | 410                                   | OK        |
| `/home-black-friday/`                                                     | 410                                   | 410                                   | OK        |
| `/home-landing-gadget/`                                                   | 410                                   | 410                                   | OK        |
| `/home-base-light/`                                                       | 410                                   | 410                                   | OK        |
| `/home-flowers/`                                                          | 410                                   | 410                                   | OK        |
| `/home-camping/`                                                          | 410                                   | 410                                   | OK        |
| `/home-retail-2/`                                                         | 410                                   | 410                                   | OK        |
| `/home-alternative-energy/`                                               | 410                                   | 410                                   | OK        |
| `/home-drinks/`                                                           | 410                                   | 410                                   | OK        |
| `/home-sweets-bakery/`                                                    | 410                                   | 410                                   | OK        |
| `/home-fashion-minimalism/`                                               | 410                                   | 410                                   | OK        |
| `/home-medical-marijuana/`                                                | 410                                   | 410                                   | OK        |
| `/home-medical/`                                                          | 410                                   | 410                                   | OK        |
| `/home-minimalism/`                                                       | 410                                   | 410                                   | OK        |
| `/home-grocery/`                                                          | 410                                   | 410                                   | OK        |
| `/home-tools/`                                                            | 410                                   | 410                                   | OK        |
| `/woodmart_slide/page-reserve-1/`                                         | 410                                   | 410                                   | OK        |
| `/woodmart_slide/page-reserve-2/`                                         | 410                                   | 410                                   | OK        |
| `/woodmart_slide/bike-slide-1/`                                           | 410                                   | 410                                   | OK        |
| `/woodmart_slide/bike-slide-1-2/`                                         | 410                                   | 410                                   | OK        |
| `/woodmart_slide/bike-slide-1-2-2/`                                       | 410                                   | 410                                   | OK        |
| `/woodmart_slide/infinite-scrolling-slide-1/`                             | 410                                   | 410                                   | OK        |
| `/woodmart_slide/infinite-scrolling-slide-1-2/`                           | 410                                   | 410                                   | OK        |
| `/woodmart_slide/basic-slide-1/`                                          | 410                                   | 410                                   | OK        |
| `/woodmart_slide/basic-slide-1-2/`                                        | 410                                   | 410                                   | OK        |
| `/woodmart_slide/main-slide-1/`                                           | 410                                   | 410                                   | OK        |
| `/woodmart_slide/main-slide-1-2/`                                         | 410                                   | 410                                   | OK        |
| `/woodmart_slide/main-slide-1-2-2/`                                       | 410                                   | 410                                   | OK        |
| `/woodmart_slide/dark-slide-1/`                                           | 410                                   | 410                                   | OK        |
| `/woodmart_slide/dark-slide-1-2/`                                         | 410                                   | 410                                   | OK        |
| `/woodmart_slide/dark-slide-1-2-2/`                                       | 410                                   | 410                                   | OK        |
| `/woodmart_slide/retail-slide-1/`                                         | 410                                   | 410                                   | OK        |
| `/woodmart_slide/retail-slide-1-2/`                                       | 410                                   | 410                                   | OK        |
| `/woodmart_slide/retail-slide-1-2-2/`                                     | 410                                   | 410                                   | OK        |
| `/woodmart_slide/decor-slide-1/`                                          | 410                                   | 410                                   | OK        |
| `/woodmart_slide/decor-slide-1-2/`                                        | 410                                   | 410                                   | OK        |
| `/woodmart_slide/motorcycle-slide-1/`                                     | 410                                   | 410                                   | OK        |
| `/woodmart_slide/motorcycle-slide-1-2/`                                   | 410                                   | 410                                   | OK        |
| `/woodmart_slide/base-light-slide-1/`                                     | 410                                   | 410                                   | OK        |
| `/woodmart_slide/base-light-slide-1-2/`                                   | 410                                   | 410                                   | OK        |
| `/woodmart_slide/base-light-slide-1-3/`                                   | 410                                   | 410                                   | OK        |
| `/woodmart_slide/flowers-slide-1/`                                        | 410                                   | 410                                   | OK        |
| `/woodmart_slide/flowers-slide-1-2/`                                      | 410                                   | 410                                   | OK        |
| `/woodmart_slide/flowers-slide-1-3/`                                      | 410                                   | 410                                   | OK        |
| `/woodmart_slide/camping-slider-1/`                                       | 410                                   | 410                                   | OK        |
| `/woodmart_slide/camping-slider-1-2/`                                     | 410                                   | 410                                   | OK        |
| `/woodmart_slide/retail-2-slide-1/`                                       | 410                                   | 410                                   | OK        |
| `/woodmart_slide/retail-2-slide-1-2/`                                     | 410                                   | 410                                   | OK        |
| `/woodmart_slide/alternative-energy-slide-1/`                             | 410                                   | 410                                   | OK        |
| `/woodmart_slide/alternative-energy-slide-1-2/`                           | 410                                   | 410                                   | OK        |
| `/woodmart_slide/alternative-energy-slide-1-3/`                           | 410                                   | 410                                   | OK        |
| `/portfolio/potenti-parturient-parturie/`                                 | 410                                   | 410                                   | OK        |
| `/portfolio/rhoncus-quisque-sollicitudin/`                                | 410                                   | 410                                   | OK        |
| `/portfolio/a-lacus-bibendum-pulvinar/`                                   | 410                                   | 410                                   | OK        |
| `/portfolio/leo-uteu-ullamcorper/`                                        | 410                                   | 410                                   | OK        |
| `/portfolio/venenatis-nam-phasellus/`                                     | 410                                   | 410                                   | OK        |
| `/portfolio/imperdiet-mauris-a-nontin/`                                   | 410                                   | 410                                   | OK        |
| `/portfolio/et-vestibulum-quis-a-suspendisse/`                            | 410                                   | 410                                   | OK        |
| `/portfolio/netus-eu-mollis-hac-dignis/`                                  | 410                                   | 410                                   | OK        |
| `/portfolio/suspendisse-quam-at-vestibulum/`                              | 410                                   | 410                                   | OK        |
| `/project-cat/accessories/`                                               | 410                                   | 410                                   | OK        |
| `/project-cat/decor/`                                                     | 410                                   | 410                                   | OK        |
| `/project-cat/furniture/`                                                 | 410                                   | 410                                   | OK        |
| `/project-cat/kitchen/`                                                   | 410                                   | 410                                   | OK        |
| `/project-cat/lighting/`                                                  | 410                                   | 410                                   | OK        |
| `/?cms_block=about-brand`                                                 | 410                                   | 410                                   | OK        |
| `/?cms_block=menu-category`                                               | 410                                   | 410                                   | OK        |
| `/?cms_block=menu-category-2`                                             | 410                                   | 410                                   | OK        |
| `/?cms_block=menu-category-3`                                             | 410                                   | 410                                   | OK        |
| `/?cms_block=menu-category-4`                                             | 410                                   | 410                                   | OK        |
| `/?cms_block=menu-category-5`                                             | 410                                   | 410                                   | OK        |
| `/?cms_block=menu-category-6`                                             | 410                                   | 410                                   | OK        |
| `/?cms_block=menu-category-7`                                             | 410                                   | 410                                   | OK        |
| `/?cms_block=menu-shop`                                                   | 410                                   | 410                                   | OK        |
| `/?cms_block=menu-blog`                                                   | 410                                   | 410                                   | OK        |
| `/?cms_block=promo-popup`                                                 | 410                                   | 410                                   | OK        |
| `/?cms_block=shipping-delivery`                                           | 410                                   | 410                                   | OK        |
| `/?cms_block=lamp-extra-content`                                          | 410                                   | 410                                   | OK        |
| `/?cms_block=stool-extra-content`                                         | 410                                   | 410                                   | OK        |
| `/?cms_block=prefooter`                                                   | 410                                   | 410                                   | OK        |
| `/?cms_block=header-link`                                                 | 410                                   | 410                                   | OK        |
| `/?cms_block=html-reserve-1`                                              | 410                                   | 410                                   | OK        |
| `/?cms_block=html-reserve-2`                                              | 410                                   | 410                                   | OK        |
| `/?cms_block=html-reserve-3`                                              | 410                                   | 410                                   | OK        |
| `/?cms_block=html-reserve-4`                                              | 410                                   | 410                                   | OK        |
| `/?cms_block=html-reserve-5`                                              | 410                                   | 410                                   | OK        |
| `/?cms_block=html-reserve-6`                                              | 410                                   | 410                                   | OK        |
| `/?cms_block=contact-us-popup`                                            | 410                                   | 410                                   | OK        |
| `/?cms_block=html-block-example`                                          | 410                                   | 410                                   | OK        |
| `/?cms_block=pre-footer-fashion`                                          | 410                                   | 410                                   | OK        |
| `/?cms_block=home-watches-header`                                         | 410                                   | 410                                   | OK        |
| `/?cms_block=header-handmade`                                             | 410                                   | 410                                   | OK        |
| `/?cms_block=pre-footer-christmas`                                        | 410                                   | 410                                   | OK        |
| `/?cms_block=header-digitals`                                             | 410                                   | 410                                   | OK        |
| `/?cms_block=pre-footer-handmade`                                         | 410                                   | 410                                   | OK        |
| `/?cms_block=shoes-header-banner`                                         | 410                                   | 410                                   | OK        |
| `/?cms_block=books-contact-us`                                            | 410                                   | 410                                   | OK        |
| `/?cms_block=pre-footer-magazine`                                         | 410                                   | 410                                   | OK        |
| `/?cms_block=pre-footer-retail`                                           | 410                                   | 410                                   | OK        |
| `/?cms_block=footer-retail`                                               | 410                                   | 410                                   | OK        |
| `/?cms_block=footer-wine`                                                 | 410                                   | 410                                   | OK        |
| `/?cms_block=pre-footer-decor`                                            | 410                                   | 410                                   | OK        |
| `/?cms_block=footer-decor`                                                | 410                                   | 410                                   | OK        |
| `/?cms_block=pre-footer-black-friday`                                     | 410                                   | 410                                   | OK        |
| `/?cms_block=footer-black-friday`                                         | 410                                   | 410                                   | OK        |
| `/?cms_block=footer-landing-pixel`                                        | 410                                   | 410                                   | OK        |
| `/?cms_block=footer-flowers`                                              | 410                                   | 410                                   | OK        |
| `/?cms_block=footer-camping`                                              | 410                                   | 410                                   | OK        |
| `/?cms_block=footer-retail-2`                                             | 410                                   | 410                                   | OK        |
| `/?cms_block=promo-popup-5-fashion-minimalism`                            | 410                                   | 410                                   | OK        |
| `/?cms_block=map-content-lookbook`                                        | 410                                   | 410                                   | OK        |
| `/?cms_block=pre-footer-minimalist`                                       | 410                                   | 410                                   | OK        |
| `/?cms_block=contact-us-map`                                              | 410                                   | 410                                   | OK        |
| `/?cms_block=grocery-menu-fresh-food`                                     | 410                                   | 410                                   | OK        |
| `/?cms_block=grocery-products`                                            | 410                                   | 410                                   | OK        |
| `/?cms_block=pre-footer-tools`                                            | 410                                   | 410                                   | OK        |
| `/?cms_block=footer-magazine`                                             | 410                                   | 410                                   | OK        |
| `/?cms_block=google-maps-contact-us`                                      | 410                                   | 410                                   | OK        |
| `/?cms_block=google-maps-contact-us-color`                                | 410                                   | 410                                   | OK        |
| `/?cms_block=buttons-newsletter-popup`                                    | 410                                   | 410                                   | OK        |
| `/?cms_block=buttons-gallery-popup`                                       | 410                                   | 410                                   | OK        |
| `/?cms_block=buttons-popup-with-products`                                 | 410                                   | 410                                   | OK        |
| `/?cms_block=buttons-popup`                                               | 410                                   | 410                                   | OK        |
| `/?cms_block=buttons-popup-text`                                          | 410                                   | 410                                   | OK        |
| `/?elementor_library=default-kit`                                         | 410                                   | 410                                   | OK        |
| `/?elementor_library=tabs`                                                | 410                                   | 410                                   | OK        |
| `/?elementor_library=foot`                                                | 410                                   | 410                                   | OK        |
| `/?elementor_library=foot-2`                                              | 410                                   | 410                                   | OK        |
| `/?elementor_library=pie-hisoil`                                          | 410                                   | 410                                   | OK        |
| `/?taxonomy=woodmart_slider&term=best-sellers`                            | 410                                   | 410                                   | OK        |
| `/?taxonomy=woodmart_slider&term=alternative-energy-slider`               | 410                                   | 410                                   | OK        |
| `/?taxonomy=woodmart_slider&term=retail-2-slider`                         | 410                                   | 410                                   | OK        |
| `/?taxonomy=woodmart_slider&term=camping-slider`                          | 410                                   | 410                                   | OK        |
| `/?taxonomy=woodmart_slider&term=flowers-slider`                          | 410                                   | 410                                   | OK        |
| `/?taxonomy=woodmart_slider&term=base-light-slider`                       | 410                                   | 410                                   | OK        |
| `/?taxonomy=woodmart_slider&term=motorcycle-slider`                       | 410                                   | 410                                   | OK        |
| `/?taxonomy=woodmart_slider&term=decor-slider`                            | 410                                   | 410                                   | OK        |
| `/?taxonomy=woodmart_slider&term=retail-slider`                           | 410                                   | 410                                   | OK        |
| `/?taxonomy=woodmart_slider&term=basic-slider`                            | 410                                   | 410                                   | OK        |
| `/?taxonomy=woodmart_slider&term=main-slider`                             | 410                                   | 410                                   | OK        |
| `/?taxonomy=woodmart_slider&term=dark-slider`                             | 410                                   | 410                                   | OK        |
| `/?taxonomy=woodmart_slider&term=bike-slider`                             | 410                                   | 410                                   | OK        |
| `/?taxonomy=woodmart_slider&term=infinite-scrolling-slider`               | 410                                   | 410                                   | OK        |
| `/shop`                                                                   | 301 → `/productos`                    | 301 → `/productos`                    | OK        |
| `/producto/chip`                                                          | 301 → `/productos/chip`               | 301 → `/productos/chip`               | OK        |
| `/servicios`                                                              | 200                                   | 200                                   | OK        |
| `/home-fashion`                                                           | 410                                   | 410                                   | OK        |
| `/my-account/pedidos/`                                                    | 301 → `/`                             | 301 → `/`                             | OK        |
| `/my-account/lost-password/`                                              | 301 → `/`                             | 301 → `/`                             | OK        |
| `/portfolio/potenti-parturient-parturie`                                  | 410                                   | 410                                   | OK        |
| `/feed/`                                                                  | 410                                   | 410                                   | OK        |
| `/comments/feed/`                                                         | 410                                   | 410                                   | OK        |
| `/blog/feed/`                                                             | 410                                   | 410                                   | OK        |
| `/wp-sitemap.xml`                                                         | 301 → `/sitemap.xml`                  | 301 → `/sitemap.xml`                  | OK        |
| `/wp-sitemap-posts-page-1.xml`                                            | 301 → `/sitemap.xml`                  | 301 → `/sitemap.xml`                  | OK        |
| `/sitemap_index.xml`                                                      | 301 → `/sitemap.xml`                  | 301 → `/sitemap.xml`                  | OK        |
| `/wp-admin/`                                                              | 410                                   | 410                                   | OK        |
| `/wp-login.php`                                                           | 410                                   | 410                                   | OK        |
| `/xmlrpc.php`                                                             | 410                                   | 410                                   | OK        |
| `/wp-json/`                                                               | 410                                   | 410                                   | OK        |
| `/wp-content/uploads/2020/11/favicon.ico`                                 | 404                                   | 404                                   | OK        |
| `/nosotros`                                                               | 200                                   | 200                                   | OK        |
| `/nosotros/`                                                              | 301 → `/nosotros`                     | 301 → `/nosotros`                     | OK        |
| `/servicios`                                                              | 200                                   | 200                                   | OK        |
| `/servicios/`                                                             | 301 → `/servicios`                    | 301 → `/servicios`                    | OK        |
| `/productos`                                                              | 200                                   | 200                                   | OK        |
| `/productos/`                                                             | 301 → `/productos`                    | 301 → `/productos`                    | OK        |
| `/portfolio`                                                              | 200                                   | 200                                   | OK        |
| `/portfolio/`                                                             | 301 → `/portfolio`                    | 301 → `/portfolio`                    | OK        |
| `/contacto`                                                               | 200                                   | 200                                   | OK        |
| `/contacto/`                                                              | 301 → `/contacto`                     | 301 → `/contacto`                     | OK        |
| `/productos/compost`                                                      | 200                                   | 200                                   | OK        |
| `/productos/biofert`                                                      | 200                                   | 200                                   | OK        |
| `/productos/humic`                                                        | 200                                   | 200                                   | OK        |
| `/productos/carbon`                                                       | 200                                   | 200                                   | OK        |
| `/productos/regenera`                                                     | 200                                   | 200                                   | OK        |
| `/productos/seed`                                                         | 200                                   | 200                                   | OK        |
| `/productos/plug`                                                         | 200                                   | 200                                   | OK        |
| `/productos/nursery`                                                      | 200                                   | 200                                   | OK        |
| `/productos/premium`                                                      | 200                                   | 200                                   | OK        |
| `/productos/forest`                                                       | 200                                   | 200                                   | OK        |
| `/productos/tobacco`                                                      | 200                                   | 200                                   | OK        |
| `/productos/berry`                                                        | 200                                   | 200                                   | OK        |
| `/productos/cannabis`                                                     | 200                                   | 200                                   | OK        |
| `/productos/citrus`                                                       | 200                                   | 200                                   | OK        |
| `/productos/turf`                                                         | 200                                   | 200                                   | OK        |
| `/productos/hydro`                                                        | 200                                   | 200                                   | OK        |
| `/productos/palm`                                                         | 200                                   | 200                                   | OK        |
| `/productos/chip`                                                         | 200                                   | 200                                   | OK        |
| `/productos/minichip`                                                     | 200                                   | 200                                   | OK        |
| `/productos/sphagnum`                                                     | 200                                   | 200                                   | OK        |
| `/productos/perlite`                                                      | 200                                   | 200                                   | OK        |
| `/productos/vermiculite`                                                  | 200                                   | 200                                   | OK        |
| `/productos/pometina`                                                     | 200                                   | 200                                   | OK        |
| `/productos/compost-paisajismo`                                           | 200                                   | 200                                   | OK        |
| `/productos/tierra-fertil`                                                | 200                                   | 200                                   | OK        |
| `/productos/level`                                                        | 200                                   | 200                                   | OK        |
| `/productos/outdoor`                                                      | 200                                   | 200                                   | OK        |
| `/productos/indoor`                                                       | 200                                   | 200                                   | OK        |
| `/productos/greenroof`                                                    | 200                                   | 200                                   | OK        |
| `/productos/restore`                                                      | 200                                   | 200                                   | OK        |
| `/productos/hydromulch`                                                   | 200                                   | 200                                   | OK        |
| `/productos/erosion`                                                      | 200                                   | 200                                   | OK        |
| `/productos/native`                                                       | 200                                   | 200                                   | OK        |
| `/productos/chip/`                                                        | 301 → `/productos/chip`               | 301 → `/productos/chip`               | OK        |
| `/?utm_source=test`                                                       | 200                                   | 200                                   | OK        |
| `/productos?orderby=x`                                                    | 200                                   | 200                                   | OK        |
| `/no-existe`                                                              | 404                                   | 404                                   | OK        |
| `/no-existe/`                                                             | 301 → `/no-existe`                    | 301 → `/no-existe`                    | OK        |
| `/productos/no-existe`                                                    | 404                                   | 404                                   | OK        |
| `/assets/no-existe.js`                                                    | 404                                   | 404                                   | OK        |
| `/sitemap.xml`                                                            | 200                                   | 200                                   | OK        |
| `/robots.txt`                                                             | 200                                   | 200                                   | OK        |
| `/hisoil-logo.png`                                                        | 200                                   | 200                                   | OK        |
| `/faviconV2.png`                                                          | 200                                   | 200                                   | OK        |

Archivos de `dist` pedidos uno por uno (assets, imágenes, HTML): 130.

**495 de 495 dieron lo esperado.**
