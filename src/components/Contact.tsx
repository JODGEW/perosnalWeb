'use client';

import { Mail } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import ScrollReveal from './ScrollReveal';

function LinkedinIcon() {
  return (
    <svg
      className="linkedin-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433A2.062 2.062 0 0 1 3.274 5.37a2.064 2.064 0 1 1 2.063 2.063zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Contact() {
  const { copy, copied } = useCopyToClipboard();

  return (
    <section className="section" id="contact">
      <ScrollReveal>
        <div className="section-inner">
          <div className="section-label">Get in touch</div>
          <h2>Contact Me</h2>
          <div className="contact-links">
            <a
              href="#"
              className={`contact-link ${copied ? 'copied' : ''}`}
              id="email-copy"
              aria-label="Copy email address to clipboard"
              title="Click to copy email"
              onClick={(e) => {
                e.preventDefault();
                copy(personalInfo.email);
              }}
            >
              <Mail />
              <span className="email-text">
                {copied ? 'Email Copied!' : personalInfo.email}
              </span>
            </a>
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="Connect on LinkedIn"
            >
              <LinkedinIcon />
              Wenhao He
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
