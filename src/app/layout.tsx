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
      suppressHydrationWarning
      className={`${instrumentSans.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.dataset.theme=t;var m=document.querySelector('meta[name=\"theme-color\"]');if(m)m.setAttribute('content',t==='dark'?'#0e0e10':'#F7F6F3');}catch(e){}})();",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
