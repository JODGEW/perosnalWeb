'use client';

import { useEffect, useState } from 'react';

const SECTION_IDS = [
  'about',
  'projects',
  'experience',
  'skills',
  'blogs',
  'contact',
];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    function onScroll() {
      let current = '';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 160 && rect.bottom > 160) current = id;
      }
      setActiveSection(current);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return activeSection;
}
