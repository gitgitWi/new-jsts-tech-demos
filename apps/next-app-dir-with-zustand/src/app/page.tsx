'use client';

import { create } from 'zustand';

type CountState = {
  count: number;
};
type CountActions = {
  plusCount: () => void;
  minusCount: () => void;
};

const useCountStore = create<CountState & CountActions>((set) => ({
  count: 0,
  plusCount: () => set((preState) => ({ count: preState.count + 1 })),
  minusCount: () => set((preState) => ({ count: preState.count - 1 })),
}));

export default function Home() {
  const { count, plusCount, minusCount } = useCountStore();

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '600px',
        }}
      >
        <h2>Count: {count}</h2>
        <button onClick={plusCount}>Plus + 1 </button>
        <button onClick={minusCount}>Minus - 1 </button>
      </div>
    </main>
  );
}
