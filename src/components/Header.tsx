'use client';

import { useState, useEffect, useCallback } from 'react';
import { Menu, ArrowUp } from 'lucide-react';
import { useScrollHeader } from '@/hooks/useScrollHeader';
import { useActiveSection } from '@/hooks/useActiveSection';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#blogs', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

function easeOutCubic(t: number, b: number, c: number, d: number) {
  t /= d;
  t--;
  return c * (t * t * t + 1) + b;
}

function smoothScroll(target: string, duration: number) {
  const element = document.querySelector(target);
  if (!element) return;

  const startPos = window.pageYOffset;
  const endPos = (element as HTMLElement).offsetTop - 70;
  const distance = endPos - startPos;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeOutCubic(timeElapsed, startPos, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  requestAnimationFrame(animation);
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isScrolled, showBackToTop } = useScrollHeader();
  const activeSection = useActiveSection();

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    smoothScroll(href, 600);
  };

  return (
    <>
      <header id="header" className={isScrolled ? 'scrolled' : ''}>
        <div className="container nav-container">
          <a href="#" className="logo" aria-label="Wenhao He Portfolio Home">
            <span className="logo-mark">W</span>
            <span className="logo-text">Wenhao He</span>
          </a>

          <button
            className="menu-toggle"
            id="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <Menu className="nav-icon" />
          </button>

          <nav id="main-nav" className={menuOpen ? 'active' : ''}>
            <ul>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={activeSection === href.slice(1) ? 'active' : ''}
                    onClick={(e) => handleNavClick(e, href)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <div
        className={`backdrop ${menuOpen ? 'active' : ''}`}
        id="backdrop"
        onClick={toggleMenu}
      />

      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        id="back-to-top"
        aria-label="Back to top"
        onClick={() => smoothScroll('#about', 800)}
      >
        <ArrowUp className="back-to-top-icon" />
      </button>
    </>
  );
}
