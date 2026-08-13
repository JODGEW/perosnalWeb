import { aboutRows } from '@/data/personal';
import SectionHead from './SectionHead';
import CodeBlock from './CodeBlock';

export default function About() {
  return (
    <section className="section" id="about">
      <SectionHead num="01" title="About" aside="Get to know me" />

      <div className="about-grid">
        <div className="about-panel">
          <div className="panel-bar">
            <div className="panel-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="panel-title">about / wenhao he</div>
          </div>
          <dl className="about-rows">
            {aboutRows.map((row) => (
              <div key={row.label} className="about-row">
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <CodeBlock />
      </div>
    </section>
  );
}
