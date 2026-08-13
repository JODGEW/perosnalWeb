'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

interface LightboxState {
  open: (src: string, title: string) => void;
}

const LightboxContext = createContext<LightboxState>({ open: () => {} });

export function useLightbox() {
  return useContext(LightboxContext);
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [shot, setShot] = useState<{ src: string; title: string } | null>(null);

  const open = useCallback((src: string, title: string) => {
    setShot({ src, title });
    document.body.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    setShot(null);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    if (!shot) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [shot, close]);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {shot && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={shot.title}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="lightbox-panel">
            <div className="lightbox-title">{shot.title}</div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={shot.src} alt={shot.title} />
            <button className="lightbox-close" aria-label="Close" onClick={close}>
              ×
            </button>
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
}
