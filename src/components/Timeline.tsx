import { experience } from '@/data/experience';
import SectionHead from './SectionHead';
import ScrollReveal from './ScrollReveal';

export default function Timeline() {
  return (
    <section className="section" id="experience">
      <SectionHead num="03" title="Experience & education" />

      {experience.map((item) => (
        <ScrollReveal key={item.title}>
          <div className="rule-row timeline-row">
            <div className="rule-key">{item.date}</div>
            <div>
              <div className="timeline-head">
                <h3>{item.title}</h3>
                <span className="org">{item.subtitle}</span>
              </div>
              {item.bullets.map((bullet) => (
                <p key={bullet.slice(0, 40)}>{bullet}</p>
              ))}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </section>
  );
}
