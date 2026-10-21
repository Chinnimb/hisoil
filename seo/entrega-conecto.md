# Borrador: aviso a Conecto

Cambió el 21/10/2026: el sitio ya no se sube al hosting de Hostinger, se publica en Cloudflare en una cuenta
del cliente (ver `cloudflare.md`). Las instrucciones de subida que había acá (zip, `public_html`,
`.htaccess`) ya no aplican. A Conecto solo hay que avisarle y pedirle el export del DNS. Revisarlo antes de
enviar (Ariel). Mandarlo antes del paso C de `cloudflare.md`.

---

Hola, les contamos un cambio en `hisoil.com.ar`: el sitio nuevo se va a publicar en Cloudflare, en una
cuenta a nombre de HiSoil. Para eso vamos a cambiar los nameservers del dominio en NIC.ar a esa cuenta.

**Los mails no cambian:** siguen en Hostinger, con las mismas casillas. En la zona nueva copiamos los
registros de mail que tiene hoy la zona (MX `mx1` y `mx2.hostinger.com.ar`, el SPF y los tres DKIM
`hostingermail-a`, `-b` y `-c`).

Les pedimos:

1. **El export de la zona DNS de `hisoil.com.ar`** en Cloudflare (DNS → Records → Export), para confirmar
   que no se nos escapa ningún registro. Si hay alguno que usen ustedes (verificaciones, subdominios), por
   favor avísennos.
2. **Que no den de baja el plan de Hostinger:** los mails viven ahí. Solo deja de usarse la parte web
   (WordPress); si quieren, después del cambio pueden hacer un backup y apagarlo.
3. **Nada más en Cloudflare:** cuando cambien los nameservers, la zona de su cuenta va a pasar a "Moved
   Away" y Cloudflare la borra sola a los 7 días. No hace falta que hagan nada.

Les avisamos el día del cambio. Gracias.
