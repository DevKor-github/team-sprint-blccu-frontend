import { create } from 'zustand';

// XXX
type Sticker = {
  stickerId: number;
  src: string;
  posX: number;
  posY: number;
  scale: number;
  angle: number;
  zindex: number;
  clientId: string;
};

type StickersState = {
  stickers: { [key: string]: Sticker };
  focused: string | null;
  setFocused: (focused: string | null) => void;
  setStickers: (stickers: { [key: string]: Sticker }) => void;
  addSticker: (sticker: Sticker) => void;
  deleteSticker: (sticker: Sticker) => void;
  editPosition: (params: {
    clientId: string;
    posX: number;
    posY: number;
  }) => void;
  editSize: (params: {
    clientId: string;
    scale: number;
    angle: number;
  }) => void;
};
const useStickersStore = create<StickersState>()((set) => ({
  stickers: {},
  focused: null,
  setFocused: (focused) => set({ focused }),
  setStickers: (stickers) => set({ stickers }),
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
  editPosition: ({ clientId, posX, posY }) =>
    set((state) => {
      const newStickers = { ...state.stickers };
      if (newStickers[clientId]) {
        newStickers[clientId].posX = posX;
        newStickers[clientId].posY = posY;
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

export { useStickersStore };
export type { Sticker };
