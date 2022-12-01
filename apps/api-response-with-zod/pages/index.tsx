import { MainLayout } from '@features/layouts';

export default function Home() {
  return (
    <MainLayout>
      <main className="w-full h-full m-0 p-4 bg-neutral-800">
        <h1 className="w-full text-3xl text-center text-neutral-100 font-mono">
          title
        </h1>
      </main>
    </MainLayout>
  );
}
