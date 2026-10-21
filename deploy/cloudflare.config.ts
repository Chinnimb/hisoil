// Sitio estático: Vite buildea a ../dist y Cloudflare sirve los archivos, sin código de Worker.
// La carpeta de assets está en wrangler.config.ts; las redirecciones, en public/_redirects.
export default {
  worker: {
    name: 'hisoil',
    compatibilityDate: '2026-10-21',
    assets: {
      // /nosotros sirve nosotros.html y /productos/chip sirve productos/chip.html.
      htmlHandling: 'auto-trailing-slash',
      // Mientras no exista el prerender (seo/APLICAR.md), cualquier ruta sirve index.html y la SPA
      // resuelve. Con el prerender hecho, volver a '404-page' (404 real con 404.html).
      notFoundHandling: 'single-page-application',
    },
  },
};
