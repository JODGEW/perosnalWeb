import type { TimelineItem } from '@/types';

export const experience: TimelineItem[] = [
  {
    date: 'December 2025 - Present',
    title: 'ResumeMatch (New York, NY)',
    subtitle: 'Founder & Software Engineer',
    bullets: [
      'Architected a multi-model AWS Bedrock pipeline routing parsing and scoring to Claude Haiku 4.5 and resume rewriting to Claude Sonnet 4.6, cutting semantically incorrect edits by 50% while keeping per-analysis cost under $0.05.',
      'Built a Python post-LLM validation layer with semantic and structural checks for umbrella terms, abbreviations, word boundaries, and token overlap to recover missed keyword matches and adjust scoring.',
      'Designed a DynamoDB cache with SHA-256 content hashing and gzip compression, reducing repeat-analysis latency from 25s to 19ms and eliminating Bedrock cost on cache hits.',
      'Shipped a Mock AI Interview feature using Lambda handlers for start, turn, end, and session retrieval, with DynamoDB session storage and Bedrock-generated STAR feedback.',
    ],
  },
  {
    date: 'Issued Feb 2026',
    title: 'AWS Certified Developer – Associate',
    subtitle: 'Amazon Web Services',
    bullets: [],
    revealDelay: 1,
  },
  {
    date: 'September 2024 - June 2025',
    title: 'Clipp (New York, NY)',
    subtitle: 'Software Engineer (AI/Full-Stack)',
    bullets: [
      'Built and shipped full-stack React, TypeScript, and GraphQL features across order management, customer accounts, and purchasing flows for a B2B wholesale platform serving daily production traffic.',
      'Integrated the Stream Chat API for real-time messaging, supporting 500+ concurrent users across web and mobile in production.',
      'Wrote Jest tests across ordering, products, promotions, vendors, POs, returns, accounting, and team modules, reaching 90%+ branch coverage and catching regressions before they hit production.',
      'Set up Husky pre-commit and pre-push hooks to enforce linting, formatting, and build checks across the team, catching issues before they entered code review.',
    ],
    revealDelay: 2,
  },
  {
    date: 'April 2024 - September 2024',
    title: 'CAN International (New York, NY)',
    subtitle: 'Software Engineer',
    bullets: [
      'Owned the React Native mobile app (JavaScript, Firebase, Azure) from kickoff through launch, delivering profile, rewards, payments, and job board features for 300+ members.',
      'Added job browsing, description pages, and a posting submission flow so members could find and share opportunities in-app.',
      'Plugged in Azure Form Recognizer to auto-extract fields from uploaded job description PDFs, saving users from re-typing everything manually.',
      'Compressed and resized profile images before writing them to Firebase, which dropped load times from minutes to seconds.',
    ],
    revealDelay: 3,
  },
  {
    date: 'Aug 2022 - May 2024',
    title: 'M.S. in Engineering Science (Artificial Intelligence)',
    subtitle: 'University at Buffalo, SUNY',
    bullets: [],
    revealDelay: 4,
  },
  {
    date: 'Aug 2018 - May 2022',
    title: 'B.S. in Computer Science',
    subtitle: 'University at Buffalo, SUNY',
    bullets: [],
    revealDelay: 5,
  },
];
