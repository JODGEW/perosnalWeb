import type { PersonalInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Wenhao He',
  nickname: 'Jacky',
  role: 'Software Engineer',
  email: 'wenhaohe8@gmail.com',
  description:
    'Software Engineer based in New York with nearly 2 years of startup experience across full-stack development, AWS-backed systems, and production feature delivery',
  siteUrl: 'https://wenhaohe.com',
  linkedIn: 'https://www.linkedin.com/in/wenhao-he-77126a230/',
  blogUrl: 'https://blog.wenhaohe.com',
  resumePath: '/files/Wenhao_He.pdf',
};

export const aboutInfo = {
  rows: [
    { label: 'Name', value: 'Wenhao He (Jacky)' },
    {
      label: 'Focus',
      value: 'AWS-backed AI products, LLM validation, and full-stack systems',
    },
    {
      label: 'Skills',
      value:
        'Python, TypeScript, JavaScript, Java, C++, Bash, React, Next.js, React Native, Angular, Flutter, Node.js, Express, GraphQL, Kafka, Flask, FastAPI, Spring, MySQL, PostgreSQL, MongoDB, DynamoDB, Redis, AWS Lambda, API Gateway, S3, Cognito, CloudFront, Textract, Bedrock, Azure, Docker, LangChain, Chroma, RAG, TensorFlow, PyTorch, Jest, Playwright, pytest, Datadog',
    },
    {
      label: 'Interests',
      value:
        'Production AI systems, LLM evaluation, RAG agents, event-driven backends, cloud cost optimization, and developer-quality tooling.',
    },
    {
      label: 'Projects',
      value:
        'Financial Document Intelligence Agent, Order Processing System, Movie Recommendation System, ML/CV research builds, and full-stack AI tooling.',
    },
  ],
};
