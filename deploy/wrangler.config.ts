import { defineWranglerConfig } from 'wrangler/experimental-config';

// ../dist lo genera `npm run build` en la raíz: correrlo antes de `cf dev` o `cf deploy`.
export default defineWranglerConfig({
  types: {
    generate: false,
  },
  assetsDirectory: '../dist',
});
