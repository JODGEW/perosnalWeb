'use client';

import { useEffect, useState } from 'react';

export function useScrollHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      const y = window.pageYOffset;
      setIsScrolled(y > 50);
      setShowBackToTop(y > 300);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { isScrolled, showBackToTop };
}
