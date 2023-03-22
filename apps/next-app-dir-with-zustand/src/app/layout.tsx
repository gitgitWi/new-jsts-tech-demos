import type { PropsWithChildren } from 'react';

import './globals.css';

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="ko,en">
      <body>{children}</body>
    </html>
  );
}
