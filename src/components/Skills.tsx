'use client';

import { useState } from 'react';
import { skills, skillFilters } from '@/data/skills';
import ScrollReveal from './ScrollReveal';
import SkillCard from './SkillCard';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <section className="section" id="skills">
      <div className="bg-pattern grid"></div>
      <div className="section-inner">
        <ScrollReveal>
          <div className="section-label">What I work with</div>
        </ScrollReveal>
        <ScrollReveal>
          <h2>Skills</h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="skill-filters">
            {skillFilters.map((filter) => (
              <button
                key={filter.value}
                className={`skill-filter ${activeFilter === filter.value ? 'active' : ''}`}
                data-filter={filter.value}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="skills-grid">
          {skills
            .filter(
              (skill) =>
                activeFilter === 'all' || skill.category === activeFilter
            )
            .map((skill) => (
              <SkillCard key={skill.heading} skill={skill} />
            ))}
        </div>
      </div>
    </section>
  );
}
