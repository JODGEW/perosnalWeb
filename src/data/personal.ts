import type { AboutRow, HeroFact, PersonalInfo, Stat } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Wenhao He',
  nickname: 'Jacky',
  role: 'Software Engineer',
  location: 'New York',
  email: 'wenhaohe8@gmail.com',
  lede: 'I build AWS-backed AI products that hold up in production, and I measure whether they do.',
  siteUrl: 'https://wenhaohe.com',
  linkedIn: 'https://www.linkedin.com/in/wenhao-he-77126a230/',
  blogUrl: 'https://blog.wenhaohe.com',
  resumePath: '/files/Wenhao_He.pdf',
  portraitPath: '/images/profile-cutout.png',
};

export const heroFacts: HeroFact[] = [
  { key: 'Role', value: 'SWE & Founder, ResumeMatch' },
  { key: 'Certified', value: 'AWS Developer, Assoc.' },
  { key: 'Education', value: 'M.S. AI · UB (SUNY)' },
  { key: 'Based in', value: 'New York, NY' },
];

export const stats: Stat[] = [
  {
    value: '20ms',
    label: 'Cached analysis, down from a 34s median across 140 requests',
    source: 'ResumeMatch',
  },
  {
    value: '71%',
    label:
      'Of AI rewrite edits proposed keywords the résumé never supported — caught offline, guarded at generation',
    source: 'ResumeMatch',
  },
  {
    value: '2.9%',
    label: 'Unsupported claims, down from 6.4% on a frozen 32-case baseline',
    source: 'Financial Document Agent',
  },
  {
    value: '44',
    label: 'Contrast failures a WCAG re-run caught, traced to five design tokens',
    source: 'ResumeMatch · 508 / 2.1 AA',
  },
];

export const aboutRows: AboutRow[] = [
  {
    label: 'Focus',
    value: 'AWS-backed AI products, LLM validation, and full-stack systems.',
  },
  {
    label: 'Currently',
    value: 'Software Engineer & Founder at ResumeMatch, New York.',
  },
  {
    label: 'Education',
    value:
      'M.S. Artificial Intelligence and B.S. Computer Science, University at Buffalo (SUNY).',
  },
  {
    label: 'Interests',
    value:
      'Production AI systems, LLM evaluation, RAG agents, event-driven backends, cloud cost optimization, and developer-quality tooling.',
  },
];
