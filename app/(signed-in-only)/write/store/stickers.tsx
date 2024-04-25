import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useStickersStore = create(
  devtools((set) => ({
    stickers: {},
    addSticker: (sticker: any) =>
      set((state: any) => ({
        stickers: { ...state.stickers, [sticker.clientId]: sticker },
      })),
    deleteSticker: (sticker: any) =>
      set((state: any) => {
        const newStickers = { ...state.stickers };
        delete newStickers[sticker.clientId];
        return { stickers: newStickers };
      }),
    editPosition: ({
      clientId,
      x,
      y,
    }: {
      clientId: string;
      x: number;
      y: number;
    }) =>
      set((state: any) => {
        const newStickers = { ...state.stickers };
        if (newStickers[clientId]) {
          newStickers[clientId].x = x;
          newStickers[clientId].y = y;
        }
        return { stickers: newStickers };
      }),
    editSize: ({
      clientId,
      w,
      h,
    }: {
      clientId: string;
      w: number;
      h: number;
    }) =>
      set((state: any) => {
        const newStickers = { ...state.stickers };
        if (newStickers[clientId]) {
          newStickers[clientId].w = w;
          newStickers[clientId].h = h;
        }
        return { stickers: newStickers };
      }),
  })),
);

export default useStickersStore;
