'use client';

import { useEffect, useRef } from 'react';

import { Editor } from '@/app/(signed-in-only)/write/components/editor/editor';
import { StickerContainer } from '@/app/(signed-in-only)/write/components/stickerContainer';
import { Top } from '@/app/(signed-in-only)/write/components/top';
import { useEditorContentsStore } from '@/app/(signed-in-only)/write/store/editorContents';

const MainContent = () => {
  const mainContentRef = useRef(null);

  const { background, setMainContainerElement } = useEditorContentsStore();

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
            background !== null ? `url(${background.imageUrl})` : 'none',
        }}
      >
        <StickerContainer />
        <Editor />
      </div>
    </div>
  );
};

export { MainContent };
