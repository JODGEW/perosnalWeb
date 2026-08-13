import type { TimelineItem } from '@/types';

export const experience: TimelineItem[] = [
  {
    date: 'Nov 2025 - Present',
    title: 'ResumeMatch',
    subtitle: 'Software Engineer & Founder · New York',
    bullets: [
      'Built and operate resumematchapp.com solo on AWS serverless — Lambda, API Gateway, DynamoDB, S3, and CloudFront — with Cognito auth and per-plan usage limits enforced in the Lambdas rather than the client.',
      'Audited the frontend against Section 508 / WCAG 2.1 AA and published a conformance report stating its own limits. A re-run caught 44 untested contrast failures in the light theme, traced them to five design-token values, and cleared all five audited routes in both themes.',
      'Cut repeat analyses from a 34s median to 20ms with a DynamoDB cache (SHA-256 content hashing, gzip), measured across 140 production requests, and zeroed model cost on hits.',
      'Caught the AI rewrite proposing keywords the source resume did not support in 22 of 31 edits — 71% — using an offline harness I built (10 resumes, 3 configs, 60 runs). Shipped a deterministic evidence guard that drops those at generation time; 26 rejections in production.',
      'Ship through GitHub Actions, which gates every push on lint, tests, and build before the deploy job runs, then syncs to S3 and invalidates CloudFront over GitHub OIDC with no stored AWS keys.',
      'Shipped a Mock AI Interview feature on Deepgram Nova-3 speech-to-text with per-session keyterm prompting derived from the resume and job description, plus Bedrock per-turn STAR feedback and an end-of-session assessment.',
    ],
  },
  {
    date: 'Issued Feb 2026',
    title: 'AWS Certified Developer, Associate',
    subtitle: 'Amazon Web Services',
    bullets: [],
  },
  {
    date: 'Sep 2024 - Jun 2025',
    title: 'Clipp Inc.',
    subtitle: 'Full-Stack Software Engineer · New York',
    bullets: [
      'Eliminated N+1 queries and redundant frontend round-trips across ordering workflows by redesigning GraphQL schema and resolvers to batch nested order data.',
      'Built a modular Jest test framework spanning Payments, Purchase Orders, and Returns, using strict TypeScript contract validation to catch cross-service data mismatches before release.',
      'Fixed an invoice refund flow in the Next.js web app using shallow routing to keep URL query parameters in sync without remounting the page, inside a Yarn workspaces monorepo.',
    ],
  },
  {
    date: 'Apr 2024 - Sep 2024',
    title: 'CAN International Corp.',
    subtitle: 'Full-Stack Software Engineer · New York',
    bullets: [
      'Removed manual data entry from the document intake pipeline by integrating Azure Form Recognizer, converting unstructured PDF job descriptions into validated typed JSON records.',
      'Built and launched a React Native mobile app on Firebase and Azure supporting rewards, payments, and job board workflows.',
    ],
  },
  {
    date: 'Aug 2022 - Jun 2024',
    title: 'M.S. Engineering Science (Artificial Intelligence)',
    subtitle: 'University at Buffalo, SUNY',
    bullets: [],
  },
  {
    date: 'Aug 2018 - Jun 2022',
    title: 'B.S. Computer Science',
    subtitle: 'University at Buffalo, SUNY',
    bullets: [],
  },
];
