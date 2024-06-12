import { create } from 'zustand';

const useReprImageStore = create((set) => ({
  reprImageId: null,
  setReprImageId: (newReprImageId: number) =>
    set({ reprImageId: newReprImageId }),
}));

export default useReprImageStore;
