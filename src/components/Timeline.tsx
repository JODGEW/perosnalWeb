import { experience } from '@/data/experience';
import ScrollReveal from './ScrollReveal';

export default function Timeline() {
  return (
    <div className="timeline">
      {experience.map((item) => (
        <ScrollReveal key={item.title} delay={item.revealDelay}>
          <div className="timeline-item">
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-title">{item.title}</div>
            <div className="timeline-subtitle">{item.subtitle}</div>
            {item.bullets.map((bullet, i) => (
              <p key={i}>{bullet}</p>
            ))}
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
