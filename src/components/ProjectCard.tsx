'use client';

import Image from 'next/image';
import { ExternalLink, FileText, Expand } from 'lucide-react';
import type { ProjectItem } from '@/types';
import { useLightbox } from './ImageLightbox';
import AudioPlayer from './AudioPlayer';
import ScrollReveal from './ScrollReveal';

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ExternalLink,
  Github: GithubIcon,
  FileText,
};

interface Props {
  project: ProjectItem;
}

export default function ProjectCard({ project }: Props) {
  const lightbox = useLightbox();

  return (
    <ScrollReveal>
      <div
        className="project-card"
        data-project-cat={project.categories.join(' ')}
      >
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
        </div>

        <div className="project-media">
          {project.mediaType === 'image' && project.imageSrc && (
            <div className="project-image-container">
              <Image
                src={project.imageSrc}
                alt={project.title}
                className="full-image"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <button
                className="expand-image-btn"
                onClick={() =>
                  lightbox.open(project.imageSrc!, `${project.title}`)
                }
              >
                <Expand />
              </button>
            </div>
          )}
          {project.mediaType === 'audio' && project.audioSrc && (
            <AudioPlayer
              src={project.audioSrc}
              id={`audio-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            />
          )}
        </div>

        <div className="project-body">
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            {project.links.map((link) => {
              const IconComp = iconMap[link.icon];
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="project-link"
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {IconComp && <IconComp />} {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="project-footer">
          <div className="project-tech-stack">
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-item">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
