#!/usr/bin/env bash
# Levanta el build en Docker para probar el .htaccess:
#   Apache 2.4 (httpd) en http://localhost:8080  — mod_rewrite, mod_headers, AllowOverride All
#   OpenLiteSpeed       en http://localhost:8090  — .htaccess activado (solo lee las reglas de rewrite)
# Los dos con index.php antes que index.html en el índice, como un hosting que tenía WordPress.
#
# Uso:
#   seo/pruebas/docker.sh up <carpeta-dist>   (por ejemplo: dist)
#   seo/pruebas/probar.sh http://localhost:8080 dist
#   seo/pruebas/probar.sh http://localhost:8090 dist
#   seo/pruebas/docker.sh down
#
# La carpeta se monta en solo lectura: no se modifica nada del build.

set -eu
CONF="$(mktemp -d)"

case "${1:-}" in
  up)
    DIST="$(cd "${2:?Falta la carpeta dist}" && pwd)"
    [ -f "$DIST/.htaccess" ] || echo "Ojo: $DIST no tiene .htaccess" >&2

    docker run --rm httpd:2.4 cat /usr/local/apache2/conf/httpd.conf |
      sed -e 's/^#LoadModule rewrite_module/LoadModule rewrite_module/' \
        -e 's/^#LoadModule headers_module/LoadModule headers_module/' \
        -e 's/AllowOverride None/AllowOverride All/g' \
        -e 's/DirectoryIndex index.html/DirectoryIndex index.php index.html/' >"$CONF/httpd.conf"
    docker run -d --name seo-httpd -p 8080:80 \
      -v "$DIST":/usr/local/apache2/htdocs:ro \
      -v "$CONF/httpd.conf":/usr/local/apache2/conf/httpd.conf:ro httpd:2.4 >/dev/null

    cat >"$CONF/vhconf.conf" <<'EOF'
docRoot $VH_ROOT/html/
index {
  indexFiles index.php, index.html
  autoIndex 0
  useServer 0
}
rewrite {
  enable 1
  autoLoadHtaccess 1
}
EOF
    docker run -d --name seo-ols -p 8090:8088 \
      -v "$DIST":/usr/local/lsws/Example/html:ro \
      -v "$CONF/vhconf.conf":/usr/local/lsws/conf/vhosts/Example/vhconf.conf \
      litespeedtech/openlitespeed:latest >/dev/null

    sleep 6
    echo "Apache:        http://localhost:8080"
    echo "OpenLiteSpeed: http://localhost:8090"
    ;;
  down)
    docker rm -f seo-httpd seo-ols >/dev/null 2>&1 || true
    echo "Contenedores borrados."
    ;;
  *)
    echo "Uso: docker.sh up <carpeta-dist> | docker.sh down" >&2
    exit 1
    ;;
esac
