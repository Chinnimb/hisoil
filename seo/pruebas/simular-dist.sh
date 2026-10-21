#!/usr/bin/env bash
# Simula sobre un dist/ recién buildeado lo que va a generar el prerender de APLICAR.md (tarea 3),
# con la estructura de Cloudflare: una copia de index.html por ruta, con su <title> y su canonical.
#
# Uso (después de `npm run build`):
#   seo/pruebas/simular-dist.sh dist
#
# Genera:
#   dist/nosotros.html, servicios.html, productos.html, portfolio.html, contacto.html
#   dist/productos/<slug>.html   una por producto (los slugs de src/app/data/products.ts)
#   dist/404.html, dist/sitemap.xml, dist/robots.txt
#
# Es solo para probar el ruteo: se borra con el próximo `npm run build`. Cuando exista el prerender
# real, este script deja de hacer falta.

set -eu
DIST="${1:?Uso: simular-dist.sh <carpeta-dist>}"
RAIZ="$(cd "$(dirname "$0")/../.." && pwd)"
SITIO="https://hisoil.com.ar"
[ -f "$DIST/index.html" ] || {
  echo "Falta $DIST/index.html: corré npm run build antes" >&2
  exit 1
}

pagina() { # ruta archivo
  sed -e "s#<title>[^<]*</title>#<title>$1 (simulado)</title><link rel=\"canonical\" href=\"$SITIO$1\" />#" \
    "$DIST/index.html" >"$2"
}

# La home: canonical con barra (la raíz siempre la lleva).
tmp="$(mktemp)"
pagina / "$tmp" && mv "$tmp" "$DIST/index.html"

for r in nosotros servicios productos portfolio contacto; do
  pagina "/$r" "$DIST/$r.html"
done

mkdir -p "$DIST/productos"
slugs=$(grep -o "slug: '[^']*'" "$RAIZ/src/app/data/products.ts" | cut -d"'" -f2)
for s in $slugs; do
  pagina "/productos/$s" "$DIST/productos/$s.html"
done

sed -e 's#<meta name="robots" content="[^"]*" />#<meta name="robots" content="noindex" />#' \
  -e 's#<title>[^<]*</title>#<title>Página no encontrada (simulado)</title>#' \
  "$DIST/index.html" >"$DIST/404.html"

{
  echo '<?xml version="1.0" encoding="UTF-8"?>'
  echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  echo "  <url><loc>$SITIO/</loc></url>"
  for r in nosotros servicios productos portfolio contacto; do echo "  <url><loc>$SITIO/$r</loc></url>"; done
  for s in $slugs; do echo "  <url><loc>$SITIO/productos/$s</loc></url>"; done
  echo '</urlset>'
} >"$DIST/sitemap.xml"

printf 'User-agent: *\nAllow: /\nSitemap: %s/sitemap.xml\n' "$SITIO" >"$DIST/robots.txt"

echo "Simulado: $(find "$DIST" -type f | wc -l | tr -d ' ') archivos en $DIST ($(echo "$slugs" | wc -l | tr -d ' ') fichas)."
