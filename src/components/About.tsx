import Image from 'next/image';
import { aboutInfo } from '@/data/personal';
import ScrollReveal from './ScrollReveal';
import Timeline from './Timeline';
import CodeBlock from './CodeBlock';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="bg-pattern dots"></div>
      <div className="section-inner">
        <ScrollReveal>
          <div className="section-label">Get to know me</div>
        </ScrollReveal>
        <ScrollReveal>
          <h2>About Me</h2>
        </ScrollReveal>

        <div className="about-grid">
          <ScrollReveal className="about-image">
            <div className="about-image-inner">
              <Image
                src="/images/profile.jpg"
                alt="Wenhao He"
                className="about-avatar"
                width={320}
                height={320}
                priority
                sizes="(max-width: 768px) 280px, 320px"
              />
            </div>
          </ScrollReveal>

          <div className="about-content">
            <ScrollReveal delay={1}>
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-buttons">
                    <div className="terminal-button terminal-button-close"></div>
                    <div className="terminal-button terminal-button-minimize"></div>
                    <div className="terminal-button terminal-button-maximize"></div>
                  </div>
                  <div className="terminal-title">About &mdash; Wenhao He</div>
                </div>
                <div className="terminal-content">
                  {aboutInfo.rows.map((row) => (
                    <div key={row.label} className="about-info-row">
                      <span className="about-info-label">{row.label}</span>
                      <span className="about-info-value">
                        {row.label === 'Name' || row.label === 'Focus' ? (
                          <strong>{row.value}</strong>
                        ) : row.label === 'Projects' ? (
                          <span
                            dangerouslySetInnerHTML={{
                              __html: row.value
                                .split(', ')
                                .map((item) => `<strong>${item}</strong>`)
                                .join(', '),
                            }}
                          />
                        ) : (
                          row.value
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal className="mt-lg">
          <h3>Experience</h3>
        </ScrollReveal>
        <Timeline />
        <CodeBlock />
      </div>
    </section>
  );
}
