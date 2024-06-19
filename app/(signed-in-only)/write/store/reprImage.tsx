import { create } from 'zustand';

const useReprImageStore = create((set) => ({
  reprImageId: null,
  reprImageSrc: null,
  setReprImageId: (newReprImageId: number) =>
    set({ reprImageId: newReprImageId }),
  setReprImageSrc: (newReprImageSrc: string) =>
    set({ reprImageSrc: newReprImageSrc }),
}));

export default useReprImageStore;
