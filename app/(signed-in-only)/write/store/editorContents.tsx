import { create } from 'zustand';

type EditorContentsState = {
  titleContents: string;
  bodyContents: string;
  backgroundImage: string | null;
  setTitleContents: (titleContents: string) => void;
  setBodyContents: (bodyContents: string) => void;
  setBackgroundImage: (backgroundImage: string | null) => void;
};

const useEditorContentsStore = create<EditorContentsState>((set) => ({
  titleContents: '',
  bodyContents: '',
  backgroundImage: '',
  setTitleContents: (titleContents: string) => set({ titleContents }),
  setBodyContents: (bodyContents: string) => set({ bodyContents }),
  setBackgroundImage: (backgroundImage: string | null) =>
    set({ backgroundImage }),
}));

export default useEditorContentsStore;
