import { create } from 'zustand';

const useFocusedStore = create((set) => ({
  focused: 'init',
  setFocused: (newFocused: string) => set({ focused: newFocused }),
}));

export default useFocusedStore;
