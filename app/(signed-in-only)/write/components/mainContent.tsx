'use client';

import { useEffect, useRef } from 'react';

import useEditorContentsStore from '@/app/(signed-in-only)/write/store/editorContents';

import Editor from './editor/editor';
import StickerContainer from './stickerContainer';
import Top from './top';

const MainContent = () => {
  const mainContentRef = useRef(null);

  const { background, setMainContainerElement } = useEditorContentsStore(
    (state) => state,
  );

  useEffect(() => {
    if (mainContentRef.current !== null) {
      setMainContainerElement(mainContentRef.current);
    }
  }, [mainContentRef.current, setMainContainerElement]);

  return (
    <div>
      <Top />
      <div
        ref={mainContentRef}
        className="min-h-dvh bg-cover bg-repeat-y"
        style={{
          backgroundImage:
            background !== null ? `url(${background.image_url})` : 'none',
        }}
      >
        <StickerContainer />
        <Editor />
      </div>
    </div>
  );
};

export default MainContent;
