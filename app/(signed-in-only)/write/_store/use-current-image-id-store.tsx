import { create } from 'zustand';

type CurrentImageIdState = {
  currentImageId: number;
  increaseImageId: () => void;
};

const useCurrentImageIdStore = create<CurrentImageIdState>()((set) => ({
  currentImageId: 0,
  increaseImageId: () =>
    set((state) => ({ currentImageId: state.currentImageId + 1 })),
}));

export { useCurrentImageIdStore };
