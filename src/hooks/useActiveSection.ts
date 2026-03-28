'use client';

import { useEffect, useState } from 'react';

const SECTION_IDS = ['about', 'skills', 'projects', 'blogs', 'contact'];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.pageYOffset;
      let current = '';
      for (const id of SECTION_IDS) {
        const section = document.getElementById(id);
        if (!section) continue;
        const offsetTop = section.offsetTop - 80;
        const height = section.offsetHeight;
        if (scrollTop >= offsetTop && scrollTop < offsetTop + height) {
          current = id;
        }
      }
      setActiveSection(current);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return activeSection;
}
