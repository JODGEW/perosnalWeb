'use client';

import { useState } from 'react';
import { projects, projectFilters } from '@/data/projects';
import ScrollReveal from './ScrollReveal';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <section className="section" id="projects">
      <div className="bg-pattern circuit"></div>
      <div className="section-inner">
        <ScrollReveal>
          <div className="section-label">Selected work</div>
        </ScrollReveal>
        <ScrollReveal>
          <h2>Projects</h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="project-filters">
            {projectFilters.map((filter) => (
              <button
                key={filter.value}
                className={`project-filter ${activeFilter === filter.value ? 'active' : ''}`}
                data-filter={filter.value}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="projects-grid">
          {projects
            .filter(
              (project) =>
                activeFilter === 'all' ||
                project.categories.includes(activeFilter)
            )
            .map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}
