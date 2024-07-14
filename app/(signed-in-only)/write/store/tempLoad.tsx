import { create } from 'zustand';

type TempLoadState = {
  tempLoad: boolean;
  setTempLoad: (tempLoad: boolean) => void;
};

const useTempLoadStore = create<TempLoadState>((set) => ({
  tempLoad: false,
  setTempLoad: (newTempLoad: boolean) => set({ tempLoad: newTempLoad }),
}));

export default useTempLoadStore;
