import { Counter } from '@/features/counter';

export const metadata = {
  title: 'Next.js App - Zustand',
  description: 'Next.js App Dir with Zustand',
};

export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ fontSize: '2rem', fontFamily: 'sans-serif' }}>Home Page</h1>
      <hr style={{ width: '100%' }} />

      <Counter />
    </main>
  );
}
