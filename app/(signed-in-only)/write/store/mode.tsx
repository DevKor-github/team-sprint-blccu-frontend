import { create } from 'zustand';

const useModeStore = create((set) => ({
  mode: 'write',
  switchMode: (newMode: string) => set({ mode: newMode }),
}));

export default useModeStore;
