'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface LightboxState {
  open: (src: string, title: string) => void;
}

const LightboxContext = createContext<LightboxState>({ open: () => {} });

export function useLightbox() {
  return useContext(LightboxContext);
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [imageTitle, setImageTitle] = useState('');

  const open = useCallback((src: string, title: string) => {
    setImageSrc(src);
    setImageTitle(title);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
    setTimeout(() => {
      if (!document.querySelector('.image-modal.open')) {
        setImageSrc('');
      }
    }, 300);
  }, []);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) close();
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, close]);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      <div
        className={`image-modal ${isOpen ? 'open' : ''}`}
        id="image-modal"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="modal-content">
          <button className="close-modal" onClick={close}>
            &times;
          </button>
          <h3 className="modal-title">{imageTitle}</h3>
          <div className="modal-image-container">
            {imageSrc && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={imageSrc} alt={imageTitle} className="modal-image" />
            )}
          </div>
        </div>
      </div>
    </LightboxContext.Provider>
  );
}
