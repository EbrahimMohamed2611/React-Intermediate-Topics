import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface CounterStore {
  counter: number;
  max: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  counter: 0, // INTAIL VALUE
  max: 5,
  increment: () => set((store) => ({ counter: store.counter + 1 })),
  //   reset: () => set({ counter: 0 }),
  reset: () => {
    console.log("Resetting");
    return set({ max: 10 });
  },
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Counter Store", useCounterStore);

export default useCounterStore;
