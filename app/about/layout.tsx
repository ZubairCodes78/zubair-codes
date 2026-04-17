import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — Zubair Codes',
  description: 'Learn about the minds behind Zubair Codes - an AI systems agency building intelligent digital infrastructure for modern businesses.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
