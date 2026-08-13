'use client';

import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { heroFacts, personalInfo, stats } from '@/data/personal';
import { scrollToSection } from '@/lib/scroll';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-top">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span>
              {personalInfo.role} · {personalInfo.location}
            </span>
          </div>

          <h1 className="hero-title">{personalInfo.name}</h1>

          <p className="hero-lede">{personalInfo.lede}</p>

          <p className="hero-sub">
            Engineer and founder at{' '}
            <a
              href="https://resumematchapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              ResumeMatch
            </a>
            , a live AWS
            product I designed, shipped, and operate solo, where a multi-pass
            Bedrock pipeline scores and rewrites résumés and a content-hashed
            cache answers repeats in 20ms. Before that, two years shipping
            full-stack web and mobile features at NYC startups.
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-solid"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
            >
              Selected work
              <ArrowDownRight />
            </a>
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Résumé
              <ArrowUpRight />
            </a>
            <a
              href="#contact"
              className="btn btn-quiet"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-side">
          <div className="hero-portrait">
            <Image
              src={personalInfo.portraitPath}
              alt={personalInfo.name}
              width={480}
              height={600}
              priority
              sizes="(max-width: 768px) 300px, 282px"
            />
          </div>

          <dl className="fact-list">
            {heroFacts.map((fact) => (
              <div key={fact.key} className="fact-row">
                <dt>{fact.key}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <ScrollReveal>
        <div className="stats">
          {stats.map((stat) => (
            <div key={stat.value + stat.source} className="stat">
              <div className="stat-n">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-src">{stat.source}</div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
