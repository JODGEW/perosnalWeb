import type { ProjectItem } from '@/types';

export const projectFilters = [
  { label: 'All Projects', value: 'all' },
  { label: 'AI/ML', value: 'ai' },
  { label: 'Web Development', value: 'web' },
];

export const projects: ProjectItem[] = [
  {
    title: 'Financial Document Intelligence Agent',
    categories: ['ai'],
    mediaType: 'image',
    imageSrc: '/images/FDIA.png',
    description:
      'Built a RAG-based financial document agent on Claude Haiku using the ReAct pattern, dynamically routing queries between Chroma and Tavily with local-first retrieval for finance and compliance questions.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/JODGEW/Financial-Document-Intelligence-Agent',
        icon: 'Github',
        external: true,
      },
    ],
    techStack: ['Python', 'AWS Bedrock', 'LangChain', 'Chroma', 'RAG'],
  },
  {
    title: 'Order Processing System',
    categories: ['web'],
    mediaType: 'image',
    imageSrc: '/images/order-processing-system.png',
    description:
      'Built a Spring Boot event-driven order processing system with a transactional outbox, PostgreSQL, and Kafka to reliably publish order events and avoid dual-write inconsistencies.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/JODGEW/Order-Processing-System',
        icon: 'Github',
        external: true,
      },
    ],
    techStack: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Movie Recommendation System',
    categories: ['ai', 'web'],
    mediaType: 'image',
    imageSrc: '/images/movie-recommendation-system.png',
    description:
      'Built an AI-powered movie recommendation system using Transformer models & TMDb metadata for personalized content. Engineered a scalable ML pipeline with AWS S3 & SageMaker for real-time inference & deployment.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/JODGEW/Movie-Recommendation',
        icon: 'Github',
        external: true,
      },
    ],
    techStack: ['Python', 'TensorFlow', 'Transformers', 'API Integration'],
  },
  {
    title: 'Audio Cloning',
    categories: ['ai'],
    mediaType: 'audio',
    audioSrc: '/files/BOE_Ginsburg.mp3',
    description:
      'Developed a deep learning project to clone a judge\'s voice, enabling it to narrate the decision from the Brown v. Board of Education civil rights case. Implemented advanced speech synthesis techniques for realistic voice generation.',
    links: [
      {
        label: 'Paper (PDF)',
        href: '/files/AudioCloning_Paper.pdf',
        icon: 'FileText',
        external: true,
      },
    ],
    techStack: ['TensorFlow', 'Python', 'Audio Processing', 'WaveNet', 'SV2TTS'],
  },
  {
    title: 'Monocular Depth Estimation',
    categories: ['ai'],
    mediaType: 'image',
    imageSrc: '/images/MDE.png',
    description:
      'Implemented encoder-decoder CNN architecture for estimating 3D distances from 2D images. The system can predict depth information from a single image, enabling applications in robotics, autonomous vehicles, and augmented reality.',
    links: [
      {
        label: 'Paper (PDF)',
        href: '/files/monocular_depth_estimation.pdf',
        icon: 'FileText',
        external: true,
      },
    ],
    techStack: ['PyTorch', 'Computer Vision', 'CNN', 'OpenCV'],
  },
  {
    title: 'Fruit/Vegetable Detection',
    categories: ['ai'],
    mediaType: 'image',
    imageSrc: '/images/CV.png',
    description:
      'Conducted a Computer Vision project to detect various fruits and vegetables in 2D images. The system can identify 30+ different produce items with high accuracy, supporting applications in retail automation and agricultural technology.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/JODGEW/Fruit-Classification',
        icon: 'Github',
        external: true,
      },
    ],
    techStack: ['Python', 'PyTorch', 'Computer Vision', 'Object Detection'],
  },
];
