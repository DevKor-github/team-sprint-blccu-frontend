import { create } from 'zustand';

const useFocusedStore = create((set) => ({
  focused: 'init',
  subFocused: 'init',
  setFocused: (newFocused: string) => set({ focused: newFocused }),
  setSubFocused: (newSubFocused: string) => set({ subFocused: newSubFocused }),
}));

export default useFocusedStore;
