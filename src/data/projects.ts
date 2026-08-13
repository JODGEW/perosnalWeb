import type { ProjectItem } from '@/types';

export const projects: ProjectItem[] = [
  {
    title: 'ResumeMatch',
    kind: 'Live product',
    mediaType: 'image',
    imageSrc: '/images/resumematch.png',
    description:
      'A fully serverless AWS product I designed, shipped, and operate solo. A six-pass Bedrock pipeline routes schema extraction, keyword extraction, scoring, and gap analysis to Claude Haiku and missing-keyword ranking and rewriting to Claude Sonnet, behind a content-hashed DynamoDB cache that cut repeat analyses from a 34s median to 20ms. An offline harness caught the rewrite proposing keywords the source résumé never supported in 71% of edits, so a deterministic evidence guard now drops them at generation time. Around it sit a voice-first mock interview on Deepgram Nova-3 with per-session keyterm prompting and Bedrock STAR feedback, and a Kanban outreach tracker that scores whether an application is worth chasing.',
    links: [
      { label: 'Visit ResumeMatch', href: 'https://resumematchapp.com', external: true },
    ],
    techStack: ['Python', 'React', 'AWS Bedrock', 'Lambda', 'DynamoDB', 'Stripe'],
  },
  {
    title: 'Financial Document Intelligence Agent',
    kind: 'AI · governed RAG agent',
    mediaType: 'image',
    imageSrc: '/images/FDIA.png',
    description:
      'A governance-first ReAct agent answering questions over SEC filings and compliance policies on Claude Haiku via Bedrock, across a 10-handler document-format registry, with context-policy admission dropping chunks before the model sees them and a per-answer JSONL audit trail — 689 logged runs, 27% multi-hop. Then I caught my own answer-trust layer flagging correct answers: it scored claims against 700-char-capped audit excerpts, so figures deeper in a chunk read as unsupported. Fixing that moved a frozen 32-case baseline from 6.4% to 2.9% unsupported claims and 75% to 84% grounded.',
    links: [
      {
        label: 'View on GitHub',
        href: 'https://github.com/JODGEW/Financial-Document-Intelligence-Agent',
        external: true,
      },
    ],
    techStack: ['Python', 'AWS Bedrock', 'LangChain', 'Chroma', 'FastAPI', 'React'],
  },
  {
    title: 'Order Processing System',
    kind: 'Backend · event-driven',
    mediaType: 'image',
    imageSrc: '/images/order-processing-system.png',
    description:
      'A Spring Boot event-driven order processing system with a transactional outbox, making order-event publication from PostgreSQL to Kafka reliable across service outages. Consumers are idempotent through a processed_events ledger with uniqueness constraints, so retries and redeliveries never execute an event twice.',
    links: [
      {
        label: 'View on GitHub',
        href: 'https://github.com/JODGEW/Order-Processing-System',
        external: true,
      },
    ],
    techStack: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Audio Cloning on Historical Figures',
    kind: 'Research paper',
    mediaType: 'image',
    imageSrc: '/images/audio-cloning-paper.png',
    imageFit: 'cover',
    description:
      "A deep learning project cloning a judge's voice to narrate the decision from Brown v. Board of Education, using speech synthesis techniques for realistic voice generation. Written up with Dr. David Doermann at University at Buffalo.",
    links: [
      { label: 'Read the paper', href: '/files/AudioCloning_Paper.pdf', external: true },
    ],
    techStack: ['TensorFlow', 'Python', 'WaveNet', 'SV2TTS'],
  },
  {
    title: 'Monocular Depth Estimation',
    kind: 'Research paper',
    mediaType: 'image',
    imageSrc: '/images/MDE.png',
    description:
      'An encoder-decoder CNN that estimates 3D distance from a single 2D image, with applications in robotics, autonomous vehicles, and augmented reality.',
    links: [
      {
        label: 'Read the paper',
        href: '/files/monocular_depth_estimation.pdf',
        external: true,
      },
    ],
    techStack: ['PyTorch', 'Computer Vision', 'CNN', 'OpenCV'],
  },
];
