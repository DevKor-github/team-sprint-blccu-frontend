import { type Editor } from '@tiptap/react';
import { create } from 'zustand';

type SelectedEditorState = {
  selectedEditor: Editor | null;
  setSelectedEditor: (newSelectedEditor: Editor | null) => void;
};

const useSelectedEditorStore = create<SelectedEditorState>()((set) => ({
  selectedEditor: null,
  setSelectedEditor: (selectedEditor: Editor | null) => set({ selectedEditor }),
}));

export { useSelectedEditorStore };
