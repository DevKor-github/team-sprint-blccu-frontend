import { create } from 'zustand';

type EditorMode = 'write' | 'deco';

type EditorModeState = {
  editorMode: EditorMode;
  setEditorMode: (editorMode: EditorMode) => void;
};

const useEditorModeStore = create<EditorModeState>()((set) => ({
  editorMode: 'write',
  setEditorMode: (editorMode: EditorMode) => set({ editorMode }),
}));

export { useEditorModeStore };
export type { EditorMode };
