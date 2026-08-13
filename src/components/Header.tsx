'use client';

import { useCallback, useEffect, useState } from 'react';
import { ArrowUp, Menu, Moon, Sun, X } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { useScrollHeader } from '@/hooks/useScrollHeader';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTheme } from '@/hooks/useTheme';
import { scrollToSection, scrollToTop } from '@/lib/scroll';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Stack' },
  { id: 'blogs', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { showBackToTop } = useScrollHeader();
  const activeSection = useActiveSection();
  const { theme, toggle: toggleTheme } = useTheme();

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      setMenuOpen(false);
      scrollToSection(id);
    },
    []
  );

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a
            href="#home"
            className="wordmark"
            aria-label={`${personalInfo.name} — home`}
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              scrollToTop();
            }}
          >
            <span className="wordmark-name">{personalInfo.name}</span>
            <span className="wordmark-alias">{personalInfo.nickname}</span>
          </a>

          <div className="header-right">
            <nav
              id="main-nav"
              className={`site-nav ${menuOpen ? 'open' : ''}`}
              aria-label="Section navigation"
            >
              {NAV_LINKS.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={activeSection === id ? 'active' : ''}
                  onClick={(e) => handleNavClick(e, id)}
                >
                  {label}
                </a>
              ))}
            </nav>

            <button
              className="icon-btn"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              onClick={toggleTheme}
            >
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>

            <button
              className="icon-btn menu-btn"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              aria-controls="main-nav"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />
      )}

      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        <ArrowUp />
      </button>
    </>
  );
}
