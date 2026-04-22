import type { Metadata } from 'next';
import './globals.css';

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: 'RRA Tax Handbook',
  description: `Rwanda Revenue Authority Tax Handbook - Edition ${currentYear}`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
