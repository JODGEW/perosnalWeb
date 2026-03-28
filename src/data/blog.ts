import type { BlogData } from '@/types';

export const blogData: BlogData = {
  title: 'Technical Blog',
  statusText:
    'Recent: Debugging CORS and Rate Limiting in a Serverless App (3/14/2026)',
  description:
    'Deep dives into Machine Learning fundamentals and System Design patterns. From neural networks to transformers, and from video streaming to ticketing platforms, explore practical insights and architectural solutions.',
  features: [
    { icon: 'Brain', label: 'Machine Learning' },
    { icon: 'Network', label: 'System Design' },
    { icon: 'Settings', label: 'Engineering Solutions' },
  ],
  visitUrl: 'https://blog.wenhaohe.com',
  techBadges: ['Node.js', 'MongoDB', 'Vercel'],
};
