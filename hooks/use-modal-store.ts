import { create } from 'zustand';

type ModalType = 'sign-in';

type ModalData = any; // FIXME: any

type ModalStore = {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  open: (type: ModalType, data?: ModalData) => void;
  close: () => void;
};

const useModalStore = create<ModalStore>((set) => ({
  type: null,
  data: null,
  isOpen: false,
  open: (type, data) => set({ type, data, isOpen: true }),
  close: () => set({ type: null, data: null, isOpen: false }),
}));

export { useModalStore };
