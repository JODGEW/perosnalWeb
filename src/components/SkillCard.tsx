'use client';

import {
  Monitor, Brain, Cloud, Code2, Database, Wrench,
} from 'lucide-react';
import type { SkillCardData } from '@/types';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor, Brain, Cloud, Code2, Database, Wrench,
};

interface Props {
  skill: SkillCardData;
}

export default function SkillCard({ skill }: Props) {
  const { ref, active } = useScrollReveal();
  const IconComponent = iconMap[skill.icon];

  return (
    <div
      ref={ref}
      className={`skill-card reveal ${active ? 'active' : ''}`}
      data-skill-cat={skill.category}
    >
      <h3 className="skill-heading">
        {IconComponent && <IconComponent />} {skill.heading}
      </h3>
      <p className="skill-description">{skill.description}</p>

      {skill.proficiencies.map((prof) => (
        <div key={prof.label} className="skill-proficiency">
          <span className="skill-proficiency-label">{prof.label}</span>
          <div className="skill-proficiency-bar">
            <div
              className="skill-proficiency-fill"
              style={{ '--fill-width': `${prof.fillWidth}%` } as React.CSSProperties}
            />
          </div>
        </div>
      ))}

      <div className="skill-tags">
        {skill.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}
