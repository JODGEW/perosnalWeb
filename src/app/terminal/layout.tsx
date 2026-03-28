import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wenhao He - Terminal',
};

export default function TerminalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
