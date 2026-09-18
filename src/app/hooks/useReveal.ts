import { useEffect, useRef, useState } from 'react';

interface UseRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Hook that detects when an element enters the viewport.
 * Returns a ref to attach to the element and a boolean `isVisible`.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseRevealOptions = {},
): [React.RefObject<T>, boolean] {
  const { threshold = 0.15, rootMargin = '0px 0px -10% 0px', once = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        // boundingClientRect.top < 0 = el elemento quedo arriba del viewport.
        // Pasa al entrar por un ancla o al refrescar a media pagina: sin esto
        // el observer nunca lo marca visible y la seccion queda en opacity 0.
        const yaPasado = entry.boundingClientRect.top < 0;
        if (entry.isIntersecting || yaPasado) {
          setIsVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}
