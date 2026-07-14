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
    // Delay so the target section has time to mount
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const header = document.querySelector('header');
        const offset = (header?.getBoundingClientRect().height ?? 80) + 16;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 120);
    return () => clearTimeout(t);
  }, [pathname, hash]);

  return null;
}
