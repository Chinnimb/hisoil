import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * Scrolls to the element matching location.hash after route changes.
 * Waits a tick so lazy-loaded content has time to render.
 */
export function ScrollToAnchor() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }
    const id = hash.slice(1);

    // scrollIntoView deja el posicionamiento al navegador; el offset del header
    // lo aporta scroll-margin-top en el destino (clase scroll-mt-*). Hacer la
    // cuenta a mano daba una posicion corrida.
    const irA = (behavior: ScrollBehavior) => {
      document.getElementById(id)?.scrollIntoView({ behavior, block: 'start' });
    };

    // Segunda pasada tras la animacion de reveal (.scroll-reveal dura 0.9s),
    // que hasta terminar desplaza el layout.
    const t1 = setTimeout(() => irA('instant'), 120);
    const t2 = setTimeout(() => irA('smooth'), 1100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname, hash]);

  return null;
}
