# Publicar en Cloudflare: decisiones y plan de mudanza

Escrito el 21/10/2026. Reemplaza el plan de Hostinger con `.htaccess`: el sitio se publica como Worker con
static assets en una cuenta de Cloudflare a nombre del cliente. Los mails **siguen en Hostinger**.

Lo que está acá se probó en local con `cf dev` (Wrangler por debajo) sobre un `dist/` simulado. Nada se
probó todavía contra una cuenta real: no hay cuenta, no se hizo login ni deploy.

## 1. Decisiones

### La configuración va en `deploy/`, no en la raíz

```
deploy/package.json          cf y wrangler, fijados; no tocan el package.json de la raíz
deploy/cloudflare.config.ts  Worker "hisoil", htmlHandling y notFoundHandling
deploy/wrangler.config.ts    assetsDirectory: "../dist"
deploy/redirect-rules.json   2 reglas de la zona (www y query strings), se cargan con cf (paso C3)
public/_redirects            las 301 del sitio viejo (Vite lo copia a dist/)
public/_headers              caché larga para dist/assets/
```

Por qué en `deploy/` (el mismo patrón que mano-work):

- **No toca el scaffolding de Make.** En la raíz, `cf build` detecta Vite y quiere instalar `cf` y
  `@cloudflare/vite-plugin` en el `package.json` de la raíz (probado en una copia del repo: lo modifica y
  después falla por un conflicto de versiones con Vite 6). Ese plugin se engancha en `vite.config.ts`, que
  no se puede tocar. En `deploy/` no hay Vite: `cf` le delega el build a Wrangler, que solo copia `../dist`.
- **No suma dependencias a la raíz.** `cf` y `wrangler` viven en `deploy/package.json`.
- **Una regeneración de Make no lo pisa** (salvo `public/_redirects` y `public/_headers`, que hay que
  revisar después de cada regeneración).

Lo único que cambia fuera de `deploy/` y `public/`: `eslint.config.js` ignora `deploy/` (sus `.ts` no
están en el `tsconfig` de la app y el lint tipado daba error) y `.gitignore` suma `.cloudflare` y
`.wrangler` (salida local de `cf`).

### Configuración de los assets

- `htmlHandling: 'auto-trailing-slash'`: `/nosotros` sirve `nosotros.html` y `/productos/chip` sirve
  `productos/chip.html`. `/nosotros.html` da 307 a `/nosotros`.
- `notFoundHandling: '404-page'`: lo que no existe devuelve **404** con `404.html`. No se usa
  `single-page-application`, que devolvería la home con 200 en cualquier URL.
- **El prerender ya no necesita `fichas/`.** Con Apache, una carpeta `productos/` al lado de `productos.html`
  hacía que `/productos` redirigiera a `/productos/`. Cloudflare no tiene ese problema (probado: `/productos`
  sirve `productos.html` con 200 y `/productos/chip`, `productos/chip.html`). Las fichas van en
  `dist/productos/<slug>.html`.
- **Sin prerender no se puede lanzar.** Con `404-page`, si el build tiene un solo `index.html`, todas las
  rutas salvo `/` dan 404 al entrar directo. El prerender (tareas 3 y 4 de `APLICAR.md`) es requisito.

### Redirecciones: qué hace cada capa

| Qué                                                     | Dónde                              | Cómo                                  |
| ------------------------------------------------------- | ---------------------------------- | ------------------------------------- |
| 301 de páginas, productos, demo, WordPress, barra final | `public/_redirects` (215 reglas)   | probado en local                      |
| `/?cms_block=…`, `?elementor_library=`, `?taxonomy=`…   | Redirect Rule de la zona (paso C3) | no probado: `cf dev` no tiene la zona |
| `www` → raíz (como hoy)                                 | Redirect Rule de la zona (paso C3) | no probado                            |
| Caché de `/assets/*` (1 año, `immutable`)               | `public/_headers`                  | probado en local                      |

Límites de `_redirects` que obligaron a cambiar las reglas del `.htaccess`
([docs](https://developers.cloudflare.com/workers/static-assets/redirects/)):

- **Sin regex.** Cada alternativa del `.htaccess` es una línea. Hay `*` (una por regla) y `:nombre` (no
  cruza `/`). Tope: 2000 estáticas y 100 dinámicas; usamos 192 y 23.
- **Coincidencia exacta del path.** `/shop` no agarra `/shop/` (probado): cada regla va con y sin barra.
- **No mira el query string.** `/?cms_block=x` no se puede redirigir desde `_redirects`: sin la Redirect
  Rule, sirve la home con 200 (y su canonical a `/`). Por eso la regla de la zona: la decisión de Ariel es
  301 a la home.
- **Barra final.** Sin regla, Cloudflare manda `/productos/chip/` con **307** (no 301) y `/no-existe/` da 404.
  La última línea (`/*/ /:splat 301`) las pasa a 301, como el `.htaccess`.
- Las 301 conservan el query string: `/shop/?orderby=x` → `/productos?orderby=x` (probado). Igual que antes.
- Cambio menor: `/home-*`, `/woodmart_slide/*` y similares agarran también subrutas (`/home-x/y`), que antes
  daban 404. Van a la home, que es el criterio.

### Qué repo conectar a Workers Builds: `shifrastudio/hisoil`

- Producción cambia solo cuando Ariel sincroniza `shifrastudio/hisoil` (hoy los PRs se mergean primero en
  `Chinnimb/hisoil`). Si una regeneración de Make pisa el trabajo a mano en `Chinnimb`, no se publica sola.
- La app de GitHub de Cloudflare se instala en la cuenta dueña del repo: `shifrastudio` la maneja Ariel;
  para `Chinnimb` haría falta la diseñadora.

## 2. Pruebas en local

```bash
npm run build && seo/pruebas/simular-dist.sh dist   # simula el prerender (ver el script)
cd deploy && npm ci && npx cf dev                   # http://localhost:8787
# en otra terminal, desde la raíz:
SIN_REGLA_QUERY=1 seo/pruebas/probar.sh http://localhost:8787 dist
```

Resultado (21/10/2026, `cf` 1.0.0-beta.20, Wrangler 4.151.3): **495 de 495**: los 365 casos de `casos.tsv`
más los 130 archivos del `dist/` simulado.

Cambios en `probar.sh` (y por qué):

- `SIN_REGLA_QUERY=1`: las 78 URLs con `/?cms_block=` y similares esperan 200 en vez de 301. En local no
  hay Redirect Rule de zona. Sin la variable, el script espera la 301 (es lo que tiene que dar en
  producción): en local, sin la variable, fallan exactamente esas 78.
- Los `.html` del `dist/` esperan 307 a su URL limpia (`/nosotros.html` → `/nosotros`, `/index.html` → `/`):
  así se comporta `htmlHandling`. Antes esperaban 200.
- Se saltean `_redirects` y `_headers`: Cloudflare los lee y no los sirve (dan 404).

`casos.tsv` no cambió.

Probado a mano: `/no-existe` y `/PRODUCTOS` dan 404 con el contenido de `404.html`; `/fichas/chip` da 404;
el HTML sale con `Cache-Control: public, max-age=0, must-revalidate` (default de Cloudflare) y
`/assets/*.js` con `public, max-age=31536000, immutable`. `cf deploy --dry-run` en `deploy/` arma el Worker
sin errores.

## 3. Registros DNS

Relevado con `dig` el 21/10/2026 contra `nicolas.ns.cloudflare.com` (y `evelyn` da lo mismo). Sin DS en
`.ar`: hoy no hay DNSSEC.

**Se copian tal cual** (todos "DNS only", nube gris, TTL Auto):

| Tipo  | Nombre                       | Contenido                                     | Prioridad |
| ----- | ---------------------------- | --------------------------------------------- | --------- |
| MX    | `hisoil.com.ar`              | `mx1.hostinger.com.ar`                        | 5         |
| MX    | `hisoil.com.ar`              | `mx2.hostinger.com.ar`                        | 10        |
| TXT   | `hisoil.com.ar`              | `v=spf1 include:_spf.mail.hostinger.com ~all` |           |
| CNAME | `hostingermail-a._domainkey` | `hostingermail-a.dkim.mail.hostinger.com`     |           |
| CNAME | `hostingermail-b._domainkey` | `hostingermail-b.dkim.mail.hostinger.com`     |           |
| CNAME | `hostingermail-c._domainkey` | `hostingermail-c.dkim.mail.hostinger.com`     |           |

Los tres CNAME son el **DKIM** de Hostinger (no aparecía con los selectores comunes). Hoy `-a` tiene la
clave y `-b` y `-c` están vacías (`p=`): Hostinger rota entre las tres, hay que copiar las tres. Si un
CNAME de DKIM queda "Proxied", deja de funcionar: tienen que ir en gris.

**No se copian:**

| Registro                           | Por qué                                                                  |
| ---------------------------------- | ------------------------------------------------------------------------ |
| A y AAAA `hisoil.com.ar` (proxied) | Es el WordPress. Lo reemplaza el Custom Domain del Worker (paso D4).     |
| A y AAAA `www` (proxied)           | Lo reemplaza `AAAA www 100::` proxied + la Redirect Rule de www.         |
| A y AAAA `ftp` (proxied)           | FTP del hosting web, que deja de usarse. Proxied no anda para FTP igual. |

**Se agrega:** `AAAA www 100::` **proxied** (dirección "de descarte": existe solo para que la Redirect
Rule de www la atienda).

No probé: `_dmarc`, `autodiscover`, `autoconfig`, `mail`, `webmail`, `smtp`, `imap`, `pop`, `cpanel`,
`_acme-challenge`, SRV de mail y 30 selectores DKIM más: **no existen**. Un subdominio inventado no
responde (no hay comodín). `dig` no puede listar una zona entera: puede haber un registro con un nombre que
no se me ocurrió. Para estar seguros, pedirle a Conecto el export de la zona (Cloudflare: DNS → Records →
Export) o mirar en el panel de mail de Hostinger qué registros pide.

## 4. Pasos para Ariel, en orden

Requisitos antes de lanzar: prerender (tareas 1 a 6 de `APLICAR.md`) mergeado, y la decisión del `noindex`.
Los pasos A a C se pueden hacer días antes: no cambian nada de lo que se ve hoy.

### A. Cuenta y perfil `cf`

1. Crear la cuenta de Cloudflare con el mail del cliente (en una ventana de incógnito: el navegador normal
   tiene la sesión de Shifra).
2. Perfil atado a la carpeta (en el repo principal, no en un worktree):
   ```bash
   cd deploy && npm ci
   npx cf auth create hisoil            # login en el navegador de incógnito
   npx cf auth activate hisoil .        # desde acá, cf usa la cuenta del cliente
   npx cf auth whoami                   # confirmar la cuenta y anotar el account ID
   ```

### B. Primer deploy y Workers Builds

1. Deploy a mano a `workers.dev` (el sitio todavía tiene `noindex`):
   ```bash
   npm run build                        # en la raíz (con el prerender, cuando exista)
   (cd deploy && npx cf deploy)
   SIN_REGLA_QUERY=1 seo/pruebas/probar.sh https://hisoil.<subdominio>.workers.dev dist
   ```
   Tiene que dar todo OK (`workers.dev` no tiene Redirect Rules: por eso la variable).
2. Workers Builds, en el dashboard: Workers → `hisoil` → Settings → Builds → Connect. Repo
   `shifrastudio/hisoil`, rama `master`.
   - Root directory: `deploy`
   - Build command: `npm ci && cd .. && npm ci && npm run build`
   - Deploy command: **`npx cf deploy`** (el default `npx wrangler deploy` ignora `cloudflare.config.ts` y no
     aplica los dominios: es el gotcha de shifrastudio)
   - Builds de ramas que no son `master`: desactivarlos. El default (`npx wrangler preview`) falla porque
     la config no tiene bloque `previews` (pasó en shifrastudio).
3. Verificar: un merge a `master` en `shifrastudio/hisoil` publica.

### C. Zona nueva (sigue todo igual afuera hasta el paso D)

Los comandos `cf` de C1 a C3 se corren adentro de `deploy/` (ahí está atado el perfil); los de `seo/`, desde
la raíz.

1. Crear la zona por API, así Cloudflare no escanea e importa los registros proxied del WordPress (la
   documentación avisa que eso puede dar error 1000):
   ```bash
   npx cf zones create --body '{"name":"hisoil.com.ar","type":"full","account":{"id":"<ACCOUNT_ID>"}}'
   ```
   Anotar el `id` de la zona y los dos `name_servers` que devuelve (van a ser distintos de nicolas/evelyn).
2. Cargar los 7 registros (los 6 de mail y el de www):
   ```bash
   Z=<ZONE_ID>
   c() { npx cf dns records create -z "$Z" --body "$1"; }
   c '{"type":"MX","name":"hisoil.com.ar","content":"mx1.hostinger.com.ar","priority":5,"ttl":1,"proxied":false}'
   c '{"type":"MX","name":"hisoil.com.ar","content":"mx2.hostinger.com.ar","priority":10,"ttl":1,"proxied":false}'
   c '{"type":"TXT","name":"hisoil.com.ar","content":"\"v=spf1 include:_spf.mail.hostinger.com ~all\"","ttl":1}'
   c '{"type":"CNAME","name":"hostingermail-a._domainkey","content":"hostingermail-a.dkim.mail.hostinger.com","ttl":1,"proxied":false}'
   c '{"type":"CNAME","name":"hostingermail-b._domainkey","content":"hostingermail-b.dkim.mail.hostinger.com","ttl":1,"proxied":false}'
   c '{"type":"CNAME","name":"hostingermail-c._domainkey","content":"hostingermail-c.dkim.mail.hostinger.com","ttl":1,"proxied":false}'
   c '{"type":"AAAA","name":"www","content":"100::","ttl":1,"proxied":true}'
   ```
   (Con `--dry-run` muestran el pedido sin mandarlo. Se puede hacer lo mismo a mano en DNS → Records.)
3. Redirect Rules (www y query strings):
   ```bash
   npx cf rulesets entrypoint update http_request_dynamic_redirect -z "$Z" --body "$(cat redirect-rules.json)"
   ```
   O en el dashboard: Rules → Redirect Rules, copiando la expresión de cada regla del JSON. El plan Free
   permite 10.
4. SSL/TLS → Edge Certificates: activar "Always Use HTTPS". No hay origen, así que el modo SSL (Flexible,
   Full) no importa.
5. Comparar la zona nueva con la vieja: tiene que dar **igual** (los NS de una zona pendiente ya responden).
   ```bash
   diff <(seo/pruebas/dns-mail.sh nicolas.ns.cloudflare.com) <(seo/pruebas/dns-mail.sh <NS_NUEVO>) && echo IGUALES
   ```
6. Prueba de mail **antes**: mandar un mail desde Gmail a una casilla `@hisoil.com.ar` y otro desde esa
   casilla a Gmail. En Gmail, "Mostrar original" del que llegó: anotar SPF y DKIM (tienen que decir PASS).

### D. Día del lanzamiento

1. Mergear el prerender (y el cambio del `noindex`, si Ariel lo decide) y esperar que Workers Builds publique.
2. El cliente cambia los NS en NIC.ar (entra con su clave fiscal y hace el trámite de delegación de
   `hisoil.com.ar`): sacar `nicolas` y `evelyn` y cargar los dos de C1. No hace falta Conecto.
3. En Cloudflare, zona → Overview → "Re-check now" hasta que diga **Active**. La delegación de `.ar` tiene
   TTL de 2 horas (y el NS que publica Cloudflare, de 1 día): durante ese rato unos ven el WordPress y otros
   el sitio nuevo. Los mails andan con cualquiera de las dos zonas porque tienen los mismos registros. No
   sé si los NS viejos siguen respondiendo una vez que la zona vieja pasa a "Moved Away": si no, un
   servidor que tenga cacheados los NS viejos no resuelve el MX por un rato y reintenta (el mail se
   demora, no se pierde). Conviene hacerlo un día y horario de poco mail.
4. Con la zona activa (antes no se puede: error 2009 en shifrastudio), en `deploy/cloudflare.config.ts`
   sumar `domains: ['hisoil.com.ar']` y `workersDev: false` (así no queda una copia indexable en
   `workers.dev`), y publicar (merge o `npx cf deploy`). Eso crea el registro y el certificado del dominio.
   Entre el paso 3 y este, quien ya vea la zona nueva no tiene web: hacerlo enseguida.
5. Verificar:
   ```bash
   seo/pruebas/probar.sh https://hisoil.com.ar dist      # sin SIN_REGLA_QUERY: espera las 301 de query
   curl -sI https://www.hisoil.com.ar/nosotros | grep -i location   # https://hisoil.com.ar/nosotros
   seo/pruebas/dns-mail.sh                                # lo que ve Internet: igual que en C5
   ```
   Y repetir la prueba de mail de C6.

### E. Después

- **Zona vieja (cuenta de Conecto):** Cloudflare la marca "Moved Away" al ver el cambio de NS y la borra a
  los 7 días. Conecto no tiene que hacer nada; conviene avisarles (`entrega-conecto.md`).
- **Hosting de Hostinger:** que **no** lo den de baja: los mails viven ahí. Solo deja de usarse la web.
- **DNSSEC:** hoy no hay. Activarlo recién con todo estable (una o dos semanas): DNS → Settings → DNSSEC, y
  cargar el DS en NIC.ar si su trámite de delegación lo permite (no lo verifiqué). Antes del cambio de NS
  no: la documentación de Cloudflare pide moverse sin DNSSEC.
- **DMARC:** hoy no hay. Copiar tal cual es no tenerlo; sumar `_dmarc` TXT `v=DMARC1; p=none` es una
  mejora aparte, después de la mudanza.
- **Search Console:** verificar la propiedad de dominio con un TXT en la zona nueva.

### Si algo sale mal

- **Mails:** comparar `dns-mail.sh` contra la tabla de la sección 3 y corregir el registro. Un servidor que no
  resuelve el MX reintenta por días: un error de DNS demora el mail, no lo rebota de entrada.
- **Web:** volver a una versión anterior del Worker (Workers → `hisoil` → Deployments). Volver los NS a
  nicolas/evelyn **no está garantizado**: la zona vieja queda "Moved Away" y depende de Conecto.

## 5. Lo que solo se confirma en la cuenta real

- Que Workers Builds instale las dependencias de `deploy/` antes del build command (la documentación dice
  que instala, no en qué carpeta; por eso el build command corre `npm ci` en las dos).
- Las dos Redirect Rules (expresiones escritas, no probadas contra la API).
- Que `probar.sh` dé lo mismo contra `workers.dev` y contra `hisoil.com.ar`.
- Que Cloudflare no frene a `curl` ni a los bots de vistas previas (WhatsApp, Facebook, LinkedIn): en la
  zona nueva no hay reglas de seguridad salvo las de fábrica.

Nota: el bug de página en blanco al navegar (chunks viejos después de un deploy) sigue igual en Cloudflare:
un chunk que ya no existe da 404 en vez de `index.html`, pero el import falla igual.
