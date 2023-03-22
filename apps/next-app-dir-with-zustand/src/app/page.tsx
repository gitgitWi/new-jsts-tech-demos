import { Counter } from '@/features/counter';

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
