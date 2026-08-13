'use client';

import { useCallback, useEffect, useState } from 'react';

/** What the user picked. `system` follows the OS rather than pinning a theme. */
export type ThemePreference = 'light' | 'dark' | 'system';
/** What is actually painted. `system` resolves to one of these. */
export type ResolvedTheme = 'light' | 'dark';

const THEME_COLORS: Record<ResolvedTheme, string> = {
  light: '#FAF8F4',
  dark: '#14130F',
};

const CYCLE: ThemePreference[] = ['light', 'dark', 'system'];

const DARK_QUERY = '(prefers-color-scheme: dark)';

function systemTheme(): ResolvedTheme {
  return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light';
}

function paint(theme: ResolvedTheme) {
  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', THEME_COLORS[theme]);
}

/**
 * Three-state theme control on top of the pre-paint script in `layout.tsx`.
 *
 * The script stamps `data-theme` before first paint, so this hook never paints
 * on mount — it reads back what the script decided and only writes on a toggle
 * or an OS change. A pinned choice is stored; `system` clears the key, which is
 * the same "no stored preference" state the script already falls back from.
 */
export function useTheme() {
  const [preference, setPreference] = useState<ThemePreference>('system');
  const [resolved, setResolved] = useState<ResolvedTheme>('light');

  // Hydrate from what the pre-paint script already read and applied.
  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem('theme');
    } catch {
      /* private mode / storage disabled — treat as no preference */
    }
    const pref: ThemePreference =
      stored === 'light' || stored === 'dark' ? stored : 'system';
    setPreference(pref);
    setResolved(pref === 'system' ? systemTheme() : pref);
  }, []);

  // While following the system, track it live — someone on macOS auto-appearance
  // crosses sunset with the tab open and the page should turn with it.
  useEffect(() => {
    if (preference !== 'system') return;
    const mq = window.matchMedia(DARK_QUERY);
    const sync = () => {
      const next: ResolvedTheme = mq.matches ? 'dark' : 'light';
      setResolved(next);
      paint(next);
    };
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, [preference]);

  const next = CYCLE[(CYCLE.indexOf(preference) + 1) % CYCLE.length];

  const cycle = useCallback(() => {
    setPreference(next);
    const theme = next === 'system' ? systemTheme() : next;
    setResolved(theme);
    paint(theme);
    try {
      if (next === 'system') localStorage.removeItem('theme');
      else localStorage.setItem('theme', next);
    } catch {
      /* storage disabled — the choice just won't survive a reload */
    }
  }, [next]);

  return { preference, resolved, next, cycle };
}
