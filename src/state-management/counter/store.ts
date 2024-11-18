import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface CounterStore {
  count: number;
  max: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  max: 5,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set(() => ({ max: 10 })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Counter Store: ", useCounterStore);

export default useCounterStore;
