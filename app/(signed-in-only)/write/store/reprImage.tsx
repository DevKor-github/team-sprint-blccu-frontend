import { create } from 'zustand';

type ReprImageState = {
  reprImageId: number | null;
  reprImageSrc: string | null;
  setReprImageId: (newReprImageId: number) => void;
  setReprImageSrc: (newReprImageSrc: string) => void;
};

const useReprImageStore = create<ReprImageState>()((set) => ({
  reprImageId: null,
  reprImageSrc: null,
  setReprImageId: (reprImageId: number) => set({ reprImageId }),
  setReprImageSrc: (reprImageSrc: string) => set({ reprImageSrc }),
}));

export { useReprImageStore };
