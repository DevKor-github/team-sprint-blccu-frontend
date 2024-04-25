import { create } from 'zustand';

const useEditorContentsStore = create((set) => ({
  titleContents: 'init',
  bodyContents: '',
  setTitleContents: (newTitleContents: JSON) =>
    set({ titleContents: newTitleContents }),
  setBodyContents: (newBodyContents: JSON) =>
    set({ bodyContents: newBodyContents }),
}));

export default useEditorContentsStore;
