import { ReactChildren } from 'react';

import { MainHead } from './main-head';

interface MainLayoutProps {
  children: ReactChildren;
}

const TITLE = `Validate Api Responses with Zod`;

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <MainHead titleText={TITLE} />
      {children}
    </>
  );
}
