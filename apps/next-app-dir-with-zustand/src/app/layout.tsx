import type { PropsWithChildren } from 'react';

import './globals.css';

export const metadata = {
  title: 'Next.js App - Zustand',
  description: 'Next.js App Dir with Zustand',
};

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="ko,en">
      <body>{children}</body>
    </html>
  );
}
