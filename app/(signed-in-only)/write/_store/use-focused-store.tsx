import { create } from 'zustand';

type FocusedState = {
  focused: string;
  subFocused: string;
  setFocused: (focused: string) => void;
  setSubFocused: (subFocused: string) => void;
};

const useFocusedStore = create<FocusedState>()((set) => ({
  focused: 'init',
  subFocused: 'init',
  setFocused: (focused: string) => set({ focused }),
  setSubFocused: (subFocused: string) => set({ subFocused }),
}));

export { useFocusedStore };
