import Head from 'next/head';

interface MainHeadProps {
  titleText: string;
  description?: string;
}

export function MainHead({ titleText, description = '' }: MainHeadProps) {
  return (
    <Head>
      <title>{titleText}</title>
      <meta name="description" content={description || titleText} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
