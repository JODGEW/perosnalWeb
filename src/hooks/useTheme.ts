'use client';

import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const THEME_COLORS: Record<Theme, string> = {
  light: '#F7F6F3',
  dark: '#0e0e10',
};

function readTheme(): Theme {
  if (typeof document !== 'undefined') {
    const attr = document.documentElement.dataset.theme;
    if (attr === 'dark' || attr === 'light') return attr;
  }
  return 'light';
}

/**
 * Reads the theme applied by the pre-paint script in the document head,
 * keeps React in sync, and persists user toggles to localStorage.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');

  // Hydrate from the <html data-theme> the inline script already set.
  useEffect(() => {
    setTheme(readTheme());
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem('theme', next);
      } catch {
        /* private mode / storage disabled — ignore */
      }
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', THEME_COLORS[next]);
      return next;
    });
  };

  return { theme, toggle };
}
