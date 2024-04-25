import { type Editor } from '@tiptap/react';
import { create } from 'zustand';

const useSelectedEditorStore = create((set) => ({
  selectedEditor: null,
  setSelectedEditor: (newSelectedEditor: Editor) =>
    set({ selectedEditor: newSelectedEditor }),
}));

export default useSelectedEditorStore;
