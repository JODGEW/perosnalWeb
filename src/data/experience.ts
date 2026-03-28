import type { TimelineItem } from '@/types';

export const experience: TimelineItem[] = [
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
    revealDelay: 1,
  },
  {
    date: 'Aug 2022 - May 2024',
    title: 'M.S. in Engineering Science (Artificial Intelligence)',
    subtitle: 'University at Buffalo, SUNY',
    bullets: [],
    revealDelay: 2,
  },
  {
    date: 'Aug 2018 - May 2022',
    title: 'B.S. in Computer Science',
    subtitle: 'University at Buffalo, SUNY',
    bullets: [],
    revealDelay: 3,
  },
];
