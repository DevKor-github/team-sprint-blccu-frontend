import { create } from 'zustand';

type Sticker = {
  clientId: string;
  src: string;
  x: number;
  y: number;
  scale?: number;
  angle?: number;
};

type StickersState = {
  stickers: { [key: string]: Sticker };
  focused: string | null;
  setFocused: (focused: string | null) => void;
  addSticker: (sticker: Sticker) => void;
  deleteSticker: (sticker: Sticker) => void;
  editPosition: (params: { clientId: string; x: number; y: number }) => void;
  editSize: (params: {
    clientId: string;
    scale: number;
    angle: number;
  }) => void;
};
const useStickersStore = create<StickersState>((set) => ({
  stickers: {},
  focused: null,
  setFocused: (focused) => set({ focused }),
  addSticker: (sticker) =>
    set((state) => ({
      stickers: { ...state.stickers, [sticker.clientId]: sticker },
    })),
  deleteSticker: (sticker) =>
    set((state) => {
      const newStickers = { ...state.stickers };
      delete newStickers[sticker.clientId];
      return { stickers: newStickers };
    }),
  editPosition: ({ clientId, x, y }) =>
    set((state) => {
      const newStickers = { ...state.stickers };
      if (newStickers[clientId]) {
        newStickers[clientId].x = x;
        newStickers[clientId].y = y;
      }
      return { stickers: newStickers };
    }),
  editSize: ({ clientId, scale, angle }) =>
    set((state) => {
      const newStickers = { ...state.stickers };
      if (newStickers[clientId]) {
        newStickers[clientId].scale = scale;
        newStickers[clientId].angle = angle;
      }
      return { stickers: newStickers };
    }),
}));

export default useStickersStore;
