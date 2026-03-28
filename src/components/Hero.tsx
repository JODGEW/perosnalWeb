import { personalInfo } from '@/data/personal';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="tech-particles" id="tech-particles"></div>
      <div className="container hero-content">
        <ScrollReveal>
          <div className="hero-eyebrow">{personalInfo.role}</div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h1 className="hero-title">
            {personalInfo.name}{' '}
            <span className="hero-accent">({personalInfo.nickname})</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <h2 className="hero-subtitle">Ready to Build, Scale, and Innovate</h2>
        </ScrollReveal>
        <ScrollReveal delay={3}>
          <p className="hero-text">{personalInfo.description}</p>
        </ScrollReveal>
        <ScrollReveal delay={4}>
          <div className="command-bar-inner">
            <a href="#projects" className="cmd-link cmd-primary">
              View Projects
            </a>
            <a href={personalInfo.resumePath} className="cmd-link" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            <a href="#about" className="cmd-link">
              About
            </a>
            <a href={personalInfo.blogUrl} target="_blank" rel="noopener noreferrer" className="cmd-link">
              Blog
            </a>
            <a href="#contact" className="cmd-link">
              Contact
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
