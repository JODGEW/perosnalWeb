'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({ children, delay, className = '' }: Props) {
  const { ref, active } = useScrollReveal();

  const classes = [
    'reveal',
    delay ? `reveal-delay-${delay}` : '',
    active ? 'active' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
