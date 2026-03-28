import type { SkillCardData } from '@/types';

export const skillFilters = [
  { label: 'All Skills', value: 'all' },
  { label: 'Programming', value: 'languages' },
  { label: 'Libraries', value: 'libraries' },
  { label: 'Tools', value: 'tools' },
];

export const skills: SkillCardData[] = [
  {
    category: 'languages',
    icon: 'Monitor',
    heading: 'Programming',
    description:
      'Developing scalable solutions across low-level systems and high-level scripting.',
    proficiencies: [
      { label: 'Python', fillWidth: 90 },
      { label: 'TypeScript / JavaScript', fillWidth: 85 },
      { label: 'C / C++ / C#', fillWidth: 80 },
      { label: 'Java / Go', fillWidth: 80 },
      { label: 'PHP / Ruby / Swift', fillWidth: 75 },
    ],
    tags: [
      'Python', 'TypeScript', 'JavaScript', 'C', 'C++', 'C#',
      'Java', 'Go', 'PHP', 'Ruby', 'Scala', 'Swift',
    ],
  },
  {
    category: 'libraries',
    icon: 'Brain',
    heading: 'AI & Machine Learning',
    description:
      'Building intelligent systems with LLMs, RAG pipelines, and ML/DL frameworks for NLP and beyond.',
    proficiencies: [
      { label: 'LLMs / RAG', fillWidth: 90 },
      { label: 'NLP / Transformers', fillWidth: 90 },
      { label: 'TensorFlow', fillWidth: 90 },
      { label: 'PyTorch', fillWidth: 85 },
    ],
    tags: ['LLMs', 'RAG', 'NLP', 'Transformers', 'TensorFlow', 'PyTorch'],
  },
  {
    category: 'tools',
    icon: 'Cloud',
    heading: 'Cloud & DevOps',
    description:
      'Deploying and managing scalable, containerized applications on cloud platforms with IaC and orchestration.',
    proficiencies: [
      { label: 'AWS', fillWidth: 85 },
      { label: 'Terraform', fillWidth: 80 },
      { label: 'Docker / Kubernetes', fillWidth: 85 },
      { label: 'GCP', fillWidth: 80 },
      { label: 'Azure', fillWidth: 80 },
    ],
    tags: [
      'AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'Cognito', 'Textract',
      'Bedrock', 'CloudFront', 'SNS', 'SQS', 'Step Functions',
      'Terraform', 'Docker', 'Kubernetes', 'GCP', 'Azure',
    ],
  },
  {
    category: 'tools',
    icon: 'Code2',
    heading: 'Frontend & UI',
    description:
      'Developing dynamic, high-performance web and mobile applications with modern frameworks.',
    proficiencies: [
      { label: 'React / Next.js', fillWidth: 85 },
      { label: 'React Native / Expo', fillWidth: 85 },
      { label: 'Angular', fillWidth: 80 },
      { label: 'HTML / CSS / Tailwind', fillWidth: 85 },
    ],
    tags: [
      'React', 'Next.js', 'React Native', 'Angular',
      'HTML', 'CSS', 'Tailwind', 'Expo',
    ],
  },
  {
    category: 'tools',
    icon: 'Database',
    heading: 'Backend & Databases',
    description:
      'Designing secure, efficient backends with REST APIs, GraphQL, and relational/NoSQL databases.',
    proficiencies: [
      { label: '.NET / ASP.NET Core', fillWidth: 80 },
      { label: 'Node.js / Express', fillWidth: 85 },
      { label: 'Flask / Spring', fillWidth: 80 },
      { label: 'REST APIs / GraphQL', fillWidth: 85 },
      { label: 'SQL / NoSQL', fillWidth: 85 },
    ],
    tags: [
      '.NET', 'ASP.NET Core', 'Node.js', 'Express', 'Flask', 'Spring',
      'Ruby on Rails', 'REST APIs', 'GraphQL',
      'MySQL', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis',
    ],
  },
  {
    category: 'tools',
    icon: 'Wrench',
    heading: 'Deployment, Testing & Tools',
    description:
      'Streamlining CI/CD pipelines, testing, and developer workflows.',
    proficiencies: [
      { label: 'CI/CD', fillWidth: 85 },
      { label: 'Jest / pytest', fillWidth: 85 },
      { label: 'Git', fillWidth: 90 },
      { label: 'Jira / Datadog', fillWidth: 80 },
      { label: 'Figma', fillWidth: 85 },
      { label: 'Linux', fillWidth: 85 },
    ],
    tags: [
      'CI/CD', 'Jest', 'pytest', 'Git', 'Jira', 'Datadog', 'Figma', 'Linux',
    ],
  },
];
