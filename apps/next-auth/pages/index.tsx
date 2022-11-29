import Head from 'next/head';

const TITLE = `NextAuth Demo`;

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <main>
        <h1>{TITLE}</h1>
      </main>
    </>
  );
}
