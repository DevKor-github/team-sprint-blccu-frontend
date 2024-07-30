import { create } from 'zustand';

type CurrentImageIdState = {
  currentImageId: number;
  setCurrentImageId: (currentImageId: number) => void;
  increaseImageId: () => void;
};

const useCurrentImageIdStore = create<CurrentImageIdState>()((set) => ({
  currentImageId: 0,
  setCurrentImageId: (currentImageId: number) => set({ currentImageId }),
  increaseImageId: () =>
    set((state) => ({ currentImageId: state.currentImageId + 1 })),
}));

export { useCurrentImageIdStore };
