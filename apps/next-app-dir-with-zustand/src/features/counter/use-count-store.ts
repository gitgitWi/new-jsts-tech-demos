import { create } from 'zustand';

type CountState = {
  count: number;
};
type CountActions = {
  plusCount: () => void;
  minusCount: () => void;
};

export const useCountStore = create<CountState & CountActions>((set) => ({
  count: 0,
  plusCount: () => set((preState) => ({ count: preState.count + 1 })),
  minusCount: () => set((preState) => ({ count: preState.count - 1 })),
}));
