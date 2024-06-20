import { create } from 'zustand';

type CaptureModeState = {
  captureMode: boolean;
  setCaptureMode: (captureMode: boolean) => void;
};

const useCaptureModeStore = create<CaptureModeState>((set) => ({
  captureMode: false,
  setCaptureMode: (newCaptureMode: boolean) =>
    set({ captureMode: newCaptureMode }),
}));

export default useCaptureModeStore;
