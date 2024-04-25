import { create } from 'zustand';

const useReprImageStore = create((set) => ({
  reprImageId: '200',
  setReprImageId: (newReprImageId: string) =>
    set({ reprImageId: newReprImageId }),
}));

export default useReprImageStore;
