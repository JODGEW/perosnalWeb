'use client';

import {
  PenTool, Brain, Network, Settings, ExternalLink,
} from 'lucide-react';
import { blogData } from '@/data/blog';
import ScrollReveal from './ScrollReveal';

const featureIcons: Record<string, React.ComponentType> = {
  Brain, Network, Settings,
};

export default function Blog() {
  return (
    <section className="section" id="blogs">
      <div className="bg-pattern dots"></div>
      <div className="section-inner">
        <ScrollReveal>
          <div className="section-label">Writing &amp; thoughts</div>
        </ScrollReveal>
        <ScrollReveal>
          <h2>Blog</h2>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="blog-cta">
            <div className="blog-card">
              <div className="blog-card-header">
                <div className="blog-title-row">
                  <div className="blog-icon-wrapper">
                    <div className="blog-icon">
                      <PenTool />
                    </div>
                  </div>
                  <div className="blog-header-content">
                    <h3>{blogData.title}</h3>
                    <p>Machine learning, system design, and engineering notes.</p>
                  </div>
                </div>

                <div className="blog-latest">
                  <div className="blog-latest-meta">
                    <span className="status-indicator" aria-hidden="true"></span>
                    <span>Latest post</span>
                    {blogData.latestPost.dateText && (
                      <span className="blog-latest-date">
                        {blogData.latestPost.dateText}
                      </span>
                    )}
                  </div>
                  <div className="blog-latest-body">
                    <a
                      href={blogData.latestPost.url}
                      className="blog-latest-title"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{blogData.latestPost.title}</span>
                      <ExternalLink />
                    </a>
                  </div>
                </div>
              </div>

              <div className="blog-card-content">
                <p>{blogData.description}</p>
                <div className="blog-features">
                  {blogData.features.map((feature) => {
                    const Icon = featureIcons[feature.icon];
                    return (
                      <div key={feature.label} className="feature-item">
                        <div className="feature-icon">
                          {Icon && <Icon />}
                        </div>
                        <span>{feature.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="blog-card-footer">
                <a
                  href={blogData.visitUrl}
                  className="blog-visit-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Visit My Blog</span>
                  <ExternalLink />
                </a>
                <div className="blog-tech-stack">
                  {blogData.techBadges.map((badge) => (
                    <span key={badge} className="tech-badge">{badge}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
