import { stack } from '@/data/skills';
import SectionHead from './SectionHead';
import ScrollReveal from './ScrollReveal';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHead num="04" title="Stack" aside="What I work with" />

      {stack.map((row) => (
        <ScrollReveal key={row.label}>
          <div className="rule-row stack-row">
            <div className="rule-key">{row.label}</div>
            <div className="stack-items">{row.items}</div>
          </div>
        </ScrollReveal>
      ))}
    </section>
  );
}
