'use client';

import { ArrowDown, ArrowUpRight, Check, Copy } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

export default function Contact() {
  const { copy, copied } = useCopyToClipboard();

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-copy">
          <span className="contact-eyebrow">06 · Get in touch</span>
          <h2 className="contact-title">
            Let&rsquo;s build
            <br />
            something solid.
          </h2>
          <p className="contact-note">
            Open to software engineering roles in New York and remote, and
            always happy to talk about production AI, LLM evaluation, or
            event-driven backends.
          </p>
        </div>

        <div className="contact-actions">
          <button
            type="button"
            className="contact-action"
            aria-label={`Copy email address ${personalInfo.email}`}
            onClick={() => copy(personalInfo.email)}
          >
            <span>{copied ? 'Copied to clipboard' : personalInfo.email}</span>
            {copied ? <Check /> : <Copy />}
          </button>

          <a
            href={personalInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-action"
          >
            <span>LinkedIn</span>
            <ArrowUpRight />
          </a>

          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-action filled"
          >
            <span>Download résumé</span>
            <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
}
