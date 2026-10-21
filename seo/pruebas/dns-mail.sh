#!/usr/bin/env bash
# Lista los registros de mail de hisoil.com.ar que responde un nameserver (o el resolver por defecto).
# Sirve para comparar la zona vieja con la nueva antes de cambiar los NS, y para revisar después.
#
# Uso:
#   seo/pruebas/dns-mail.sh nicolas.ns.cloudflare.com              zona vieja (cuenta de Conecto)
#   seo/pruebas/dns-mail.sh <ns-nuevo>.ns.cloudflare.com           zona nueva (anda aunque esté pendiente)
#   diff <(seo/pruebas/dns-mail.sh nicolas.ns.cloudflare.com) <(seo/pruebas/dns-mail.sh <ns-nuevo>.ns.cloudflare.com)
#   seo/pruebas/dns-mail.sh                                        lo que ve Internet (después del cambio)

set -u
D=hisoil.com.ar
NS="${1:+@$1}"
for q in "MX $D" "TXT $D" "TXT _dmarc.$D" \
  "CNAME hostingermail-a._domainkey.$D" "CNAME hostingermail-b._domainkey.$D" \
  "CNAME hostingermail-c._domainkey.$D"; do
  # shellcheck disable=SC2086
  echo "$q: $(dig +short $q $NS | sort | tr '\n' ' ')"
done
