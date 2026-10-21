# Borrador: instrucciones para Conecto

Borrador para mandarle a Conecto junto con el `.zip` del sitio. Revisarlo antes de enviar (Ariel).

---

Hola, les pasamos el sitio nuevo de HiSoil para reemplazar el WordPress de `hisoil.com.ar` en Hostinger.
Es un sitio estático (HTML, JS e imágenes): no usa PHP ni base de datos. Los mails no se tocan.

**1. Backup.** Hagan un backup completo del WordPress (archivos de `public_html` y base de datos) por si hay
que volver atrás.

**2. Vaciar `public_html`.** Muevan **todo** lo que hay en `public_html` fuera de esa carpeta (o bórrenlo
después del backup), incluidos los archivos ocultos: `.htaccess`, `index.php`, `wp-config.php`,
`wp-content/`, etc. Si queda el `.htaccess` o el `index.php` del WordPress, el sitio nuevo no funciona.

**3. Subir el sitio.** Suban `hisoil-sitio.zip` a `public_html` y descomprímanlo ahí, con el administrador de
archivos de Hostinger. Los archivos tienen que quedar directo en `public_html` (`public_html/index.html`), no
en una subcarpeta.

**4. Comprobar el `.htaccess`.** En el administrador de archivos, activen "mostrar archivos ocultos" y
confirmen que existe `public_html/.htaccess`. Es el archivo que hace las redirecciones de las páginas viejas:
sin él, casi todo el sitio da error 404. No le agreguen ni le cambien reglas; si el hosting necesita alguna,
avísennos antes.

**5. Purgar cachés.** Purguen todo el caché de Cloudflare ("Purge Everything") y el caché de Hostinger (si
está activo el de LiteSpeed o el Cache Manager).

**6. Avisarnos.** Avísennos apenas esté subido para probar las redirecciones. Para eso necesitamos que, durante
la prueba, Cloudflare no nos devuelva el desafío "Just a moment..." (a veces lo hace con los pedidos que no
vienen de un navegador). Si pasa, les vamos a pedir una excepción para nuestra IP mientras probamos.

**Comprobación rápida** (la pueden hacer ustedes desde un navegador):

- `https://hisoil.com.ar/` muestra el sitio nuevo.
- `https://hisoil.com.ar/nosotros` abre la página "Nosotros" (no un error).
- `https://hisoil.com.ar/shop/` redirige a `https://hisoil.com.ar/productos`.
- `https://hisoil.com.ar/esta-pagina-no-existe` muestra "página no encontrada".

Si algo de esto falla, lo más probable es que falte el `.htaccess` o que haya quedado algo del WordPress.

**Para confirmar con ustedes:** ¿qué modo de SSL tiene Cloudflare para este dominio ("Flexible", "Full" o
"Full (strict)")? ¿Hay alguna regla de caché en Cloudflare ("Cache Everything") o APO activado?
