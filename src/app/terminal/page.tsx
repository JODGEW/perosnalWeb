'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { banner, mobileBanner, help, startText } from '@/data/terminal';
import './terminal.css';

interface OutputLine {
  text: string;
  className: string;
}

export default function TerminalPage() {
  const [lines, setLines] = useState<OutputLine[]>([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [showCommand, setShowCommand] = useState(true);
  const [crtActive, setCrtActive] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const addLines = useCallback(
    (newLines: string[], className: string, delayMs: number) => {
      newLines.forEach((text, i) => {
        setTimeout(() => {
          setLines((prev) => [...prev, { text, className }]);
        }, i * delayMs);
      });
      return (newLines.length - 1) * delayMs;
    },
    []
  );

  // Show initial banner
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const bannerLines = isMobile ? mobileBanner : banner;
    addLines(bannerLines, '', 80);
    textareaRef.current?.focus();
  }, [addLines]);

  // Auto-scroll
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines]);

  // Override body styles for terminal page
  useEffect(() => {
    const prev = document.body.style.cssText;
    document.body.style.cssText =
      'margin:0;padding:0;height:100vh;overflow:hidden;background:#d8d8d8;';
    return () => {
      document.body.style.cssText = prev;
    };
  }, []);

  const processCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim().toLowerCase();

      setLines((prev) => [
        ...prev,
        {
          text: `visitor@wenhaohe:~$ ${cmd.trim()}`,
          className: 'no-animation',
        },
      ]);

      switch (trimmed) {
        case 'help':
          addLines(help, 'color2 margin', 80);
          break;
        case 'start': {
          setShowCommand(false);
          const duration = addLines(startText, 'color2 margin', 80);
          setTimeout(() => {
            setCrtActive(true);
            setTimeout(() => {
              window.location.href = '/';
            }, 1200);
          }, duration + 300);
          break;
        }
        case 'clear':
          setTimeout(() => setLines([]), 1);
          break;
        case 'banner': {
          const isMobile = window.innerWidth <= 768;
          addLines(isMobile ? mobileBanner : banner, '', 80);
          break;
        }
        default:
          setLines((prev) => [
            ...prev,
            {
              text: `<span class="inherit">Command not found. For a list of commands, type <span class="command-text">'help'</span>.</span>`,
              className: 'error',
            },
          ]);
          break;
      }
    },
    [addLines]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const cmd = input;
      setHistory((prev) => [...prev, cmd]);
      setHistoryIndex(history.length + 1);
      processCommand(cmd);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIdx = historyIndex - 1;
        setHistoryIndex(newIdx);
        setInput(history[newIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < history.length) {
        const newIdx = historyIndex + 1;
        setHistoryIndex(newIdx);
        setInput(history[newIdx] || '');
      }
    }
  };

  return (
    <div className="terminal-page">
      {/* CRT transition overlay */}
      <div className={`crt-transition ${crtActive ? 'active' : ''}`}>
        <div className="crt-scanline"></div>
        <div className="crt-text">
          Loading Portfolio<span className="crt-dots">...</span>
        </div>
      </div>

      <div className="window">
        <div className="titlebar">
          <div className="titlebar-buttons">
            <span className="btn btn-close"></span>
            <span className="btn btn-minimize"></span>
            <span className="btn btn-maximize"></span>
          </div>
          <div className="titlebar-title">
            visitor@wenhaohe — zsh — 80×24
          </div>
        </div>

        <div className="terminal-body" ref={bodyRef}>
          <div className="terminal">
            <div className="ascii-art">
              {lines.map((line, i) =>
                line.text === '<br>' ? (
                  <br key={i} />
                ) : (
                  <p
                    key={i}
                    className={`output-line ${line.className}`}
                    dangerouslySetInnerHTML={{ __html: line.text }}
                  />
                )
              )}
            </div>
          </div>

          {showCommand && (
            <div
              className="command"
              onClick={() => textareaRef.current?.focus()}
            >
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
              />
              <div className="liner">
                <span>{input}</span>
                <b className="cursor">█</b>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
