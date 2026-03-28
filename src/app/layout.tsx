import type { Metadata } from 'next';
import { Instrument_Sans, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-main',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-alt',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wenhaohe.com'),
  title: 'Wenhao He',
  description:
    'Wenhao He - AI & Software Engineer with expertise in Machine Learning, Computer Vision, and Full-Stack Development. UB graduate skilled in Python, TensorFlow, and cloud computing—building AI-driven, scalable solutions for real-world applications.',
  keywords: [
    'Software Engineer',
    'Machine Learning',
    'Data Analytics',
    'Python',
    'TensorFlow',
    'Software Development',
    'Computer Vision',
  ],
  authors: [{ name: 'Wenhao He' }],
  openGraph: {
    title: 'Wenhao He',
    description:
      'AI & Software Engineer leveraging ML, Deep Learning, and Full-Stack Development to build intelligent, scalable solutions.',
    url: 'https://wenhaohe.com',
    type: 'website',
  },
  other: {
    'theme-color': '#F7F6F3',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Wenhao He',
  url: 'https://wenhaohe.com',
  jobTitle: 'Software Engineer',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University at Buffalo',
  },
  knowsAbout: [
    'Machine Learning',
    'Data Analytics',
    'Software Development',
    'Computer Vision',
  ],
  skills: [
    'Python',
    'SQL',
    'JavaScript',
    'TensorFlow',
    'PyTorch',
    'React',
    'AWS',
    'Azure',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
