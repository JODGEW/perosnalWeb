'use client';

import Image from 'next/image';
import { ArrowUpRight, Expand } from 'lucide-react';
import type { ProjectItem } from '@/types';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLightbox } from './ImageLightbox';
import AudioPlayer from './AudioPlayer';

interface Props {
  project: ProjectItem;
  flip: boolean;
}

export default function ProjectRow({ project, flip }: Props) {
  const lightbox = useLightbox();
  const { ref, active } = useScrollReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`work-row reveal ${flip ? 'flip' : ''} ${active ? 'active' : ''}`}
    >
      <div className="work-media">
        {project.mediaType === 'image' && project.imageSrc && (
          <div className="work-frame">
            <div className="work-frame-inner">
              <Image
                src={project.imageSrc}
                alt={project.title}
                className={project.imageFit === 'cover' ? 'fit-cover' : undefined}
                width={900}
                height={540}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <button
              className="expand-btn"
              aria-label={`Expand ${project.title} screenshot`}
              onClick={() =>
                lightbox.open(
                  project.expandSrc ?? project.imageSrc!,
                  project.title
                )
              }
            >
              <Expand />
            </button>
          </div>
        )}

        {project.mediaType === 'audio' && project.audioSrc && (
          <AudioPlayer src={project.audioSrc} label="Cloned voice sample" />
        )}
      </div>

      <div className="work-text">
        <div className="work-kind">{project.kind}</div>
        <h3 className="work-title">{project.title}</h3>
        <p className="work-desc">{project.description}</p>

        <div className="chip-row">
          {project.techStack.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="work-links">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-link"
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              {link.label}
              <ArrowUpRight />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
