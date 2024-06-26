import { create } from 'zustand';

import { type PostBackground } from '@/__generated__/data-contracts';

type EditorContentsState = {
  titleContents: string;
  bodyContents: string;
  background: PostBackground | null;
  mainContainerElement: HTMLElement | null;
  setTitleContents: (titleContents: string) => void;
  setBodyContents: (bodyContents: string) => void;
  setBackground: (background: PostBackground | null) => void;
  setMainContainerElement: (element: HTMLElement) => void;
};

const useEditorContentsStore = create<EditorContentsState>((set) => ({
  titleContents: '',
  bodyContents: '',
  background: null,
  mainContainerElement: null,
  setTitleContents: (titleContents: string) => set({ titleContents }),
  setBodyContents: (bodyContents: string) => set({ bodyContents }),
  setBackground: (background: PostBackground | null) => set({ background }),
  setMainContainerElement: (element: HTMLElement) =>
    set({ mainContainerElement: element }),
}));

export default useEditorContentsStore;
