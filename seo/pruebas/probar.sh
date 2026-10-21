#!/usr/bin/env bash
# Prueba las redirecciones, los 404 y las rutas nuevas contra un servidor.
#
# Uso:
#   seo/pruebas/probar.sh <url-base> [carpeta-dist] > resultado.md
#
#   <url-base>      http://localhost:8787 (cf dev en deploy/) o https://hisoil.com.ar (publicado)
#   [carpeta-dist]  opcional: además pide cada archivo de esa carpeta (assets, imágenes) y espera 200.
#                   Los .html esperan 307 a su URL limpia (/nosotros.html → /nosotros): así los sirve
#                   Cloudflare con html_handling. _redirects y _headers no se sirven (Cloudflare los lee).
#
#   SIN_REGLA_QUERY=1  para probar en local: las URLs viejas con query string (/?cms_block=…) esperan
#                      200 (la home) y no 301. La 301 la hace una Redirect Rule de la zona, que
#                      wrangler dev no tiene (ver seo/cloudflare.md).
#
# Los casos están en casos.tsv (url, estado esperado, destino esperado, grupo). Para cada uno:
#   - pide la URL sin seguir redirecciones y compara el estado;
#   - si es 301, compara el path del Location y pide el destino: tiene que dar 200 (si no, hay cadena);
#   - si es una ruta nueva con 200, verifica que el HTML traiga su propio canonical
#     (https://hisoil.com.ar<ruta>), o sea que no cayó en otra página.
# Si Cloudflare responde con un desafío ("Just a moment..."), la fila sale como DESAFIO-CF: esa URL no
# se pudo probar con curl (probar desde un navegador o pedir que bajen la protección durante la prueba).
#
# Sale con código 1 si alguna fila falla.

set -u
BASE="${1:?Uso: probar.sh <url-base> [carpeta-dist]}"
BASE="${BASE%/}"
DIST="${2:-}"
CANONICAL_HOST="${CANONICAL_HOST:-https://hisoil.com.ar}"
CASOS="$(dirname "$0")/casos.tsv"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

total=0
ok=0
archivos=0
fallas=""

pedir() { # path -> imprime "estado|location|cf"
  local h="$TMP/h" b="$TMP/b"
  local st
  st=$(curl -s -o "$b" -D "$h" -w '%{http_code}' --max-time 20 "$BASE$1")
  local loc cf
  loc=$(grep -i '^location:' "$h" | head -1 | sed 's/^[Ll]ocation: *//; s/\r$//')
  cf=$(grep -ci '^cf-mitigated: *challenge' "$h")
  printf '%s|%s|%s' "$st" "$loc" "$cf"
}

solo_path() { # https://host/x?y -> /x?y
  sed -E 's#^[a-zA-Z]+://[^/]+##' <<<"$1"
}

fila() { # url esperado obtenido estado
  total=$((total + 1))
  if [ "$4" = "OK" ]; then ok=$((ok + 1)); else fallas="$fallas $1"; fi
  printf '| `%s` | %s | %s | %s |\n' "$1" "$2" "$3" "$4"
}

echo "| URL | Esperado | Obtenido | Resultado |"
echo "| --- | --- | --- | --- |"

while IFS=$'\t' read -r url esp dest grupo; do
  case "$url" in '#'* | '') continue ;; esac
  IFS='|' read -r st loc cf <<<"$(pedir "$url")"
  if [ "${SIN_REGLA_QUERY:-}" = 1 ] && [[ "$url" == '/?'* ]] && [ "$esp" = 301 ]; then
    esp=200 dest=-
  fi
  esperado="$esp"
  [ "$dest" != "-" ] && esperado="$esp → \`$dest\`"
  obtenido="$st"
  [ -n "$loc" ] && obtenido="$st → \`$(solo_path "$loc")\`"
  if [ "$cf" != "0" ]; then
    fila "$url" "$esperado" "$obtenido" "DESAFIO-CF"
    continue
  fi
  res="OK"
  if [ "$st" != "$esp" ]; then
    res="FALLA: estado"
  elif [ "$dest" != "-" ]; then
    p=$(solo_path "$loc")
    if [ "$p" != "$dest" ]; then
      res="FALLA: destino"
    else
      st2=$(cut -d'|' -f1 <<<"$(pedir "$dest")")
      if [ "$st2" != "200" ] && [ "$grupo" != "nueva:inexistente" ]; then
        res="FALLA: el destino da $st2"
        obtenido="$obtenido ($st2)"
      fi
    fi
  elif [ "$st" = "200" ] && [[ "$grupo" == nueva:ruta || "$grupo" == nueva:ficha || "$url" == "/" ]]; then
    can=$(grep -o '<link[^>]*rel="canonical"[^>]*>' "$TMP/b" | grep -o 'href="[^"]*"' | head -1)
    if [ "$can" != "href=\"$CANONICAL_HOST$url\"" ]; then
      res="FALLA: canonical ${can:-ausente}"
    fi
  fi
  fila "$url" "$esperado" "$obtenido" "$res"
done <"$CASOS"

if [ -n "$DIST" ]; then
  while IFS= read -r f; do
    rel="/${f#"$DIST"/}"
    case "$rel" in */.htaccess | /_redirects | /_headers) continue ;; esac
    IFS='|' read -r st loc _ <<<"$(pedir "$rel")"
    archivos=$((archivos + 1))
    esp=200 dest=""
    if [[ "$rel" == *.html ]]; then
      esp=307 dest="${rel%.html}"
      [ "$dest" = /index ] && dest=/
    fi
    # De los archivos de dist solo se listan los que fallan.
    if [ "$st" = "$esp" ] && [ "$(solo_path "$loc")" = "$dest" ]; then
      total=$((total + 1))
      ok=$((ok + 1))
    else
      fila "$rel" "$esp${dest:+ → \`$dest\`}" "$st${loc:+ → \`$(solo_path "$loc")\`}" "FALLA: estado"
    fi
  done < <(find "$DIST" -type f | sort)
  echo
  echo "Archivos de \`$DIST\` pedidos uno por uno (assets, imágenes, HTML): $archivos."
fi

echo
echo "**$ok de $total dieron lo esperado.**"
if [ -n "$fallas" ]; then
  echo
  echo "Fallan:$fallas"
  exit 1
fi
