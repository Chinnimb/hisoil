# SEO del sitio actual (hisoil.com.ar)

Relevado el 15/10/2026. Datos completos por URL en `sitio-actual.json`; mapeo a rutas nuevas en
`redirecciones.md`; propuesta para el sitio nuevo en `recomendaciones.md`.

## Resumen

- **Stack**: WordPress 6.5.13 + WooCommerce 9.3.6 (modo catálogo) + tema Woodmart + Elementor/Elementor Pro +
  Slider Revolution, en Hostinger detrás de Cloudflare.
- **Plugin SEO: ninguno.** No hay Yoast, RankMath, AIOSEO ni SEOPress. Los títulos son los que arma WordPress
  (`{página} – Hi-Soil – Energía para Cultivos`) y el sitemap es el nativo (`/wp-sitemap.xml`).
- **URLs en el sitemap: 293**, pero solo **46 son de HiSoil**: home, 10 páginas, 17 productos, 3 notas de
  blog, 2 categorías de blog, 1 categoría y 7 etiquetas de producto, 2 autores y 3 de WooCommerce (cuenta,
  carrito, checkout). Las otras **247 son contenido demo de Woodmart** que nunca se borró (`/home-fashion/`,
  `/home-cars/`, `/home-medical-marijuana/`, slides, bloques HTML, portfolio en lorem ipsum): 169 dan 200 y son
  indexables, 59 dan error 500.
- **Metadatos casi vacíos**: ninguna URL tiene meta description, Open Graph, Twitter card ni hreflang. La home
  y las páginas principales no tienen H1. Casi todas las imágenes tienen `alt` vacío o ausente.
- **Datos estructurados**: solo los que genera WooCommerce: `Product` + `BreadcrumbList` en las 17 fichas y
  `BreadcrumbList` en los listados. No hay `Organization`, `LocalBusiness` ni `WebSite`.
- **Analítica y verificaciones**: no hay GA4, GTM, Meta Pixel ni verificación de Google/Bing/Facebook visibles
  (ni en el HTML ni en el DNS). Solo Cloudflare Web Analytics.

**Lo más valioso para conservar**

1. **Las URLs con historia**: las 17 fichas `/producto/…` (algunas actualizadas en 2025), `/shop/` y las
   páginas del menú (`/jardineria-profesional/`, `/horticultura-profesional/`, `/hogar-y-jardin/`,
   `/servicios/`, `/compost-organico/`, `/techos-verdes/`). Todas necesitan 301 (ver `redirecciones.md`).
2. **Los nombres de producto con los que la gente busca**: "Compost Orgánico", "Turba", "Perlita",
   "Vermiculita", "Chip", "Humus", "Tierra Negra", "Sustrato para Azaleas", "Sustrato para Techos y Terrazas".
   Varios cambian de nombre en el sitio nuevo (Perlite, Vermiculite, Sphagnum, MiniChip); conviene que el texto
   de la ficha nueva mencione el nombre en castellano.
3. **Las fichas técnicas** que hoy están en el JSON-LD (pH, CE, materia orgánica, densidad) de Compost, Chip,
   Humus y Sustrato para Azaleas.
4. **Los datos de negocio** (dirección en Pilar, teléfonos, mail), que hoy no coinciden con los del sitio nuevo.
5. **El dominio sin `www` y con HTTPS**, que Cloudflare ya fuerza con 301.

**Lo que no se pudo verificar**

- **Qué indexó Google y qué trae tráfico.** No hay acceso a Search Console ni analítica. Una búsqueda
  `site:hisoil.com.ar` en un buscador genérico no devolvió páginas del sitio, así que tampoco pude estimarlo.
- **`curl` está bloqueado por Cloudflare** (desafío "Just a moment...", incluso para `robots.txt`). Todo se
  relevó con un navegador real, pidiendo el HTML de cada URL desde la misma página. Los bots de buscadores
  verificados suelen pasar, pero no lo pude comprobar.
- **Verificación de Search Console**: no está por meta tag ni por TXT de DNS; puede estar por archivo HTML u
  otra vía.
- **Redes sociales**: el sitio viejo no enlaza ninguna. Las del sitio nuevo (Instagram `hisoil_`, Facebook)
  no se pudieron cruzar con nada del sitio viejo.
- **Widget de Elfsight**: está cargado en la home, no identifiqué qué es (no afecta SEO).
- **Sliders de Woodmart (`/?taxonomy=woodmart_slider&term=…`)**: el sitemap publica estas URLs con `&amp;` y así
  se pidieron; el resultado con `&` podría ser otro.

## Detalle

### Rastreo

- `robots.txt` (200):
  ```
  User-agent: *
  Disallow: /wp-content/uploads/wc-logs/
  Disallow: /wp-content/uploads/woocommerce_transient_files/
  Disallow: /wp-content/uploads/woocommerce_uploads/
  Disallow: /wp-admin/
  Allow: /wp-admin/admin-ajax.php

  Sitemap: https://hisoil.com.ar/wp-sitemap.xml
  ```
- `/wp-sitemap.xml` (200): índice con 13 sub-sitemaps. `/sitemap.xml` redirige ahí. `/sitemap_index.xml` da 404
  (confirma que no hay Yoast/RankMath).

| Sub-sitemap | URLs | Qué hay |
|---|---|---|
| `posts-page` | 134 | 10 páginas reales + ~120 páginas demo de Woodmart (2017–2020) + WooCommerce |
| `posts-product` | 17 | Fichas de producto reales |
| `posts-post` | 3 | Notas de blog (11/2020) |
| `posts-portfolio` | 9 | Demo (lorem ipsum) |
| `posts-woodmart_slide` | 35 | Demo |
| `posts-cms_block` | 59 | Demo (`/?cms_block=…`) |
| `posts-elementor_library` | 5 | Plantillas Elementor (`/?elementor_library=…`) |
| `taxonomies-category` | 2 | `/category/paisajismo/`, `/category/medio-ambiente/` |
| `taxonomies-product_cat` | 1 | `/categoria-producto/productos/` |
| `taxonomies-product_tag` | 7 | viveros, paisajistas, compost, compost-organico, paisajismo, sustratos, agricultura |
| `taxonomies-project-cat` | 5 | Demo (accessories, decor, furniture, kitchen, lighting) |
| `taxonomies-woodmart_slider` | 14 | Demo |
| `users` | 2 | `/author/carloslr/`, `/author/jjk1978/` (expone usuarios de WordPress) |

- Meta robots en todo el sitio: `max-image-preview:large` (indexable). Única excepción: `/my-account/` con
  `noindex, follow`.
- Canonical: presente en páginas, notas y fichas (autorreferente). **Ausente** en `/shop/`, `/blog/`,
  `/portfolio/`, categorías, etiquetas y autores.
- Redirecciones de dominio (Cloudflare): `http://` → `https://`, `www` → sin `www`, todas 301.
- `/cart/` y `/checkout/` redirigen a `/` (modo catálogo de WooCommerce).

### Páginas reales

| URL | Title | H1 | H2 | Canonical |
|---|---|---|---|---|
| `/` | Hi-Soil – Energía para Cultivos – Sustratos de alta calidad para la agricultura, horticultura y jardineria | — | — | sí |
| `/shop/` | Shop – Hi-Soil – Energía para Cultivos | Shop | — | no |
| `/jardineria-profesional/` (menú "Paisajismo") | Jardinería Profesional – Hi-Soil – Energía para Cultivos | — | Jardinería Profesional | sí |
| `/horticultura-profesional/` (menú "Productores") | Horticultura Profesional – Hi-Soil – Energía para Cultivos | — | Horticultura Profesional · Plantas Ornamentales · Ciclamen · Tabaco 01 · Hortalizas · Forestales · Frutales | sí |
| `/hogar-y-jardin/` (menú "Viveros") | Hogar y Jardín – Hi-Soil – Energía para Cultivos | — | Hogar y Jardín · Productos para Hogar Y Jardín · Productos para Horticultura Profesional | sí |
| `/servicios/` | Servicios – Hi-Soil – Energía para Cultivos | — | "Cuida el medio ambiente, no quemes ni entierres tu poda…" · CONTACTO | sí |
| `/compost-organico/` | Compost Orgánico – Hi-Soil – Energía para Cultivos | — | — | sí |
| `/techos-verdes/` | Techos verdes – Hi-Soil – Energía para Cultivos | — | — | sí |
| `/portfolio/` | Portfolio – Hi-Soil – Energía para Cultivos (demo, imágenes placeholder) | Portfolio | — | no |
| `/privacy-policy/` | Privacy Policy – Hi-Soil – Energía para Cultivos (plantilla en inglés) | Privacy Policy | — | sí |
| `/blog/` | Blog – Hi-Soil – Energía para Cultivos | Blog | — | no |

Notas de blog (11/2020, todas con canonical, H1 = título, sin description):

- `/un-jardin-andino-disenado-para-exponer-la-magnificencia-de-los-cactus/`
- `/ambiente-la-argentina-obtuvo-fondos-para-fortalecer-la-ley-de-bosques/`
- `/plastico-5-claves-para-reducir-el-impacto-ambiental/` (H2: los 5 puntos)

Por los nombres de las imágenes (`3480607w1920.jpg`, `2869154w1033.jpg`) parecen notas periodísticas
republicadas; si es así, aportan poco y pueden ser contenido duplicado.

### Productos

17 fichas. En todas: canonical propio, sin description, sin OG, H1 = nombre, H2 único "Valoraciones",
imagen principal con `alt=""`. El JSON-LD de cada una (bloque completo en `sitio-actual.json`):

| URL | Nombre (H1) | SKU | Descripción en JSON-LD | Última modificación |
|---|---|---|---|---|
| `/producto/compost-organico/` | Compost Orgánico | COMPOST | Ficha técnica completa | 2022-08-10 |
| `/producto/chip/` | Chip | CHIP | Ficha técnica completa | 2022-04-13 |
| `/producto/chip-mini/` | Chip Mini | CHIPMINI | Ficha técnica (igual a Chip) | 2022-04-13 |
| `/producto/pometina/` | Pometina | POMETINA | Solo el nombre | 2024-03-13 |
| `/producto/perlita/` | Perlita | PERLITA | Solo el nombre | 2022-04-13 |
| `/producto/vermiculita/` | Vermiculita | VERMICU | Solo el nombre | 2022-04-13 |
| `/producto/turba/` | Turba | TURBA | Solo el nombre | 2022-04-13 |
| `/producto/humus/` | Humus | HUMUS | Ficha técnica completa | 2022-04-13 |
| `/producto/sustrato-floral-f538/` | Sustrato para Azaleas | SUSF538 | Ficha técnica + componentes | 2025-05-25 |
| `/producto/sustrato-floral-f546/` | Sustrato de siembra F545 | SUSF545 | Solo el nombre | 2022-04-13 |
| `/producto/sustrato-profesional-exterior-f546/` | Sustrato Profesional Exterior F546 | SUSF546 | Solo el nombre | 2025-04-11 |
| `/producto/sustrato-profesional-interior-f556/` | Sustrato Profesional Interior F556 | SUSF556 | Solo el nombre | 2025-05-29 |
| `/producto/sustrato-floral-f590-tierra-compost/` | Sustrato Profesional Tierra + Compost F590 | SUSF590 | Solo el nombre | 2025-05-28 |
| `/producto/sustrato-para-techos-y-terrazas/` | Sustrato para Techos y Terrazas | SUSTETE | Solo el nombre | 2022-04-13 |
| `/producto/sustrato-formula-331-cactus-x-5dm/` | Sustrato Formula 331 Cactus X 5DM | SF 331 X 5 DM3 | Solo el nombre | 2024-08-09 |
| `/producto/tierra-negra-25-dm3-tamizada/` | Tierra Negra Tamizada | TINEGT | Solo el nombre | 2025-05-22 |
| `/producto/tierra-negra-a-granel-rotobateada/` | Tierra Negra a granel (Rotobateada) | TING | Solo el nombre | 2024-08-09 |

Las fichas publican precios en ARS (`AggregateOffer` o `Offer`, `InStock`) que parecen viejos (ej. Compost de
$157 a $1.908). Google puede estar mostrándolos en resultados.

Bloque JSON-LD de ejemplo, tal como sale en `/producto/compost-organico/`:

```json
{
  "@context": "https://schema.org/",
  "@graph": [
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"name": "Inicio", "@id": "https://hisoil.com.ar"}},
        {"@type": "ListItem", "position": 2, "item": {"name": "Productos", "@id": "https://hisoil.com.ar/categoria-producto/productos/"}},
        {"@type": "ListItem", "position": 3, "item": {"name": "Compost Orgánico", "@id": "https://hisoil.com.ar/producto/compost-organico/"}}
      ]
    },
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "@id": "https://hisoil.com.ar/producto/compost-organico/#product",
      "name": "Compost Orgánico",
      "url": "https://hisoil.com.ar/producto/compost-organico/",
      "description": "Resultado del proceso de compostaje, que consiste en la transformación biológica de restos vegetales y animales en un producto estable, homogéneo, de reducido tamaño de partícula. Por sus excelentes propiedades para la producción vegetal se usa como agregado en sustratos o mejorador de suelos enfermos o degradados.\r\nCARACTERÍSTICAS FÍSICAS\r\npH 7,0 – 7,50\r\nCe 1,80 – 2,50 mS/cm\r\nMateria orgánica 30 – 35%\r\nDensidad seca 0,320 – 0,350 g/cm3",
      "image": "https://hisoil.com.ar/wp-content/uploads/2021/04/COMPOST.jpg",
      "sku": "COMPOST",
      "offers": [{
        "@type": "AggregateOffer",
        "lowPrice": "157", "highPrice": "1908", "offerCount": 5,
        "priceCurrency": "ARS",
        "availability": "http://schema.org/InStock",
        "url": "https://hisoil.com.ar/producto/compost-organico/",
        "seller": {"@type": "Organization", "name": "Hi-Soil - Energía para Cultivos", "url": "https://hisoil.com.ar"}
      }]
    }
  ]
}
```

Listados (`/shop/`, `/categoria-producto/productos/`, `/product-tag/*`): solo `BreadcrumbList`. En las etiquetas
el nombre sale con entidades HTML mal escapadas (`Productos etiquetados &amp;ldquo;Viveros&amp;rdquo;`).

### Imágenes principales

| URL | Imagen | alt |
|---|---|---|
| `/` | `2020/11/slider1-foto.jpg`, `2021/08/Horticultura-slider.jpg`, `2021/08/vivero-slider.jpg` (Slider Revolution) | ausente |
| `/compost-organico/` | `2020/11/compost-tierra.png`, `compost-tierra-suelta.png`, `material-original.jpg` | ausente / vacío |
| `/techos-verdes/` | `2020/11/techos-verdes1.png`, `techos-verdes2.png`, `techos-tierra1.png` | vacío / ausente |
| `/horticultura-profesional/` | íconos `horticultura-ico1…5` | `horticultura-ico1`… (nombre de archivo) |
| Fichas de producto | `2021/04/{NOMBRE}.jpg` (ver tabla de JSON en el `.json`) | vacío |

Todas bajo `https://hisoil.com.ar/wp-content/uploads/`.

### Íconos, theme-color, verificaciones y analítica

| Ítem | Valor |
|---|---|
| `icon` 32×32 | `/wp-content/uploads/2020/11/favicon-150x147.ico` |
| `icon` 192×192, `apple-touch-icon`, `msapplication-TileImage` | `/wp-content/uploads/2020/11/favicon.ico` |
| `theme-color` | presente pero vacío (`content=""`) |
| `google-site-verification` | no hay (ni meta ni TXT de DNS) |
| `msvalidate.01` (Bing) | no hay |
| `facebook-domain-verification` | no hay |
| GA4 / UA / GTM / Google Ads | no hay |
| Meta Pixel / TikTok / LinkedIn / Hotjar / Clarity | no hay |
| Cloudflare Web Analytics | sí, beacon con token `07006f268f034951b24eb3d57f89ae62` (lo inyecta Cloudflare) |
| Terceros | Elfsight (widget `b49f5c8e-d650-48bb-be38-ecad3e461397`, tipo no identificado), Google Fonts |
| DNS TXT | solo `v=spf1 include:_spf.mail.hostinger.com ~all` |
| Otros `<head>` | `generator` WordPress 6.5.13, WooCommerce 9.3.6, Slider Revolution 6.2.23; feeds RSS; `shortlink`; `pingback`/`xmlrpc` |

### Datos de negocio que aparecen en el sitio

- **Nombre**: Hi-Soil ("Hi-Soil - Energía para Cultivos" como nombre del sitio y del `seller` en JSON-LD).
- **Bajada**: "Sustratos de alta calidad para la agricultura, horticultura y jardineria".
- **Dirección**: El Hornero 1180 - Edificio Alpina (1629) Pilar - Buenos Aires. Colectora ruta Panamericana km 56.
- **Teléfonos**: (011) 4440 1919 · (011) 2879 2466.
- **Email**: info@hisoil.com.ar (protegido por Cloudflare Email Obfuscation).
- **Redes**: ninguna enlazada.
- **Textos institucionales** del footer: "22 años en investigación y desarrollo"; "Trabajando con materiales
  renovables y recuperables".

Diferencias con el sitio nuevo: el nuevo usa `administracion@hisoil.com.ar` y `+54 9 11 4440-1919`, no muestra
dirección y enlaza Instagram y Facebook. Hay que unificar (ver `recomendaciones.md`, punto 2.4).

### Contenido demo de Woodmart

Se pidieron las 293 URLs del sitemap. **247 son demo** del tema o tipos internos que nunca se limpiaron:

| Grupo | URLs | Resultado | ¿Indexable? |
|---|---|---|---|
| Páginas demo (`/home-fashion/`, `/home-cars/`, `/home-medical-marijuana/`, `/contact-us-2/`, `/faqs/`, `/sample-page/`, `/products-grid/`, `/compare/`, `/wishlist/`…) | 120 | 200, title en inglés, canonical propio | Sí |
| Slides (`/woodmart_slide/…`) | 35 | 200, canonical propio | Sí |
| Portfolio demo (`/portfolio/potenti-parturient-parturie/`…) | 9 | 200, títulos en lorem ipsum | Sí |
| Categorías de proyecto (`/project-cat/furniture/`…) | 5 | 200, sin canonical | Sí |
| Bloques HTML (`/?cms_block=…`) | 59 | **500** "WordPress › Error", `noindex` | No |
| Plantillas Elementor (`/?elementor_library=…`) | 5 | Redirigen a `/` | No |
| Sliders (`/?taxonomy=woodmart_slider&term=…`) | 14 | 200 con el título del sitio, sin canonical | No verificado |

Es decir: el sitemap le ofrece a Google **169 páginas indexables de demo** (en inglés, de rubros como autos,
lencería, joyería o "medical marijuana") y 59 URLs que dan error 500. Eso diluye la relevancia del dominio y es
probable que parte esté indexada (no verificable sin Search Console). Con la migración se resuelve solo si
esas URLs devuelven 410 (ver `redirecciones.md`). La lista completa está en `sitio-actual.json` → `demoWoodmart`.

### Cómo se relevó

- `curl` recibe el desafío de Cloudflare en todas las URLs, así que se usó Chrome: se abrió la home y, desde esa
  página, se pidió el HTML de cada URL del sitemap con `fetch` (mismo origen), una por vez, con 700 ms de pausa
  más el tiempo de respuesta del servidor (entre 1 y 12 s por página). No se bajaron imágenes ni assets, no se
  hizo login ni se envió ningún formulario.
- Se analizó el HTML que entrega el servidor, sin ejecutar JavaScript (es lo que ve un bot sin render y lo que
  importa para title, meta y JSON-LD).
- `http://`, `www` y los TXT de DNS se revisaron con `curl -I` y `dig`.
