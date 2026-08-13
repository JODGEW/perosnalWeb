import type { BlogData } from '@/types';
import { latestBlog } from './generated/latestBlog';

export const blogData: BlogData = {
  latestPost: latestBlog,
  description:
    'Deep dives into machine learning fundamentals and system design patterns, from neural networks to transformers, and from video streaming to ticketing platforms.',
  topics: [
    { icon: 'Brain', label: 'Machine learning' },
    { icon: 'Network', label: 'System design' },
    { icon: 'Settings', label: 'Engineering solutions' },
  ],
  visitUrl: 'https://blog.wenhaohe.com',
  visitLabel: 'blog.wenhaohe.com',
};
