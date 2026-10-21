// Sitio estático: Vite buildea a ../dist y Cloudflare sirve los archivos, sin código de Worker.
// La carpeta de assets está en wrangler.config.ts; las redirecciones, en public/_redirects.
export default {
  worker: {
    name: 'hisoil',
    compatibilityDate: '2026-10-21',
    assets: {
      // /nosotros sirve nosotros.html y /productos/chip sirve productos/chip.html.
      htmlHandling: 'auto-trailing-slash',
      // Lo que no existe devuelve 404 con 404.html (no la home con 200).
      notFoundHandling: '404-page',
    },
  },
};
