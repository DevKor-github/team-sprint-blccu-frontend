import { create } from 'zustand';

const useCurrentImageIdStore = create((set) => ({
  currentImageId: 0,
  increaseImageId: () =>
    set((state: any) => ({ currentImageId: state.currentImageId + 1 })),
}));

export default useCurrentImageIdStore;
