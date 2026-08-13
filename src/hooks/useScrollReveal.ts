'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -12% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, active };
}
