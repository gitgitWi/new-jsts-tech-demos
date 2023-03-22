'use client';

import { useCountStore } from './use-count-store';

export const Counter = () => {
  const { count, plusCount, minusCount } = useCountStore();
  return (
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
  );
};
