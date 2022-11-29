import Head from 'next/head';
import { useSession, signIn } from 'next-auth/react';

const TITLE = `NextAuth Demo`;

export default function Home() {
  const session = useSession();
  if (session.status === 'authenticated')
    console.info(`[INFO:::HOME] session`, session.data);

  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <main className=" w-full h-full m-0 p-4 bg-slate-700">
        <h1 className=" w-full my-4 text-center text-slate-100 text-2xl font-bold">
          {TITLE}
        </h1>

        <section className=" w-48 my-2 flex flex-col">
          <button
            onClick={() => signIn('google')}
            className=" px-4 py-2 rounded-xl bg-slate-400 text-slate-900"
          >
            Sign In with Google
          </button>

          <button
            onClick={() => signIn('naver')}
            className=" px-4 py-2 rounded-xl bg-slate-400 text-slate-900"
          >
            Sign In with Naver
          </button>
        </section>

        <div className="text-slate-200">
          <p>email : {session.data?.user?.email}</p>
          <p>expires : {session.data?.expires}</p>
          <p>accessToken:</p>
          {/* @ts-ignore */}
          <pre className=" w-5/6 overflow-auto">
            {' '}
            {session.data?.user?.access_token}
          </pre>
        </div>
      </main>
    </>
  );
}
