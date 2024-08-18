import { create } from 'zustand';

type CustomImageFocusState = {
  focusedCustomImage: number;
  setFocusedCustomImage: (focusedCustomImage: number) => void;
};

const useCustomImageFocusStore = create<CustomImageFocusState>()((set) => ({
  focusedCustomImage: -1,
  setFocusedCustomImage: (focusedCustomImage: number) =>
    set({ focusedCustomImage }),
}));

export { useCustomImageFocusStore };
