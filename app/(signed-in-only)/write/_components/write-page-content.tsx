'use client';

import { useEffect, useRef } from 'react';

import { EditorLayer } from '@/app/(signed-in-only)/write/_components/editor-layer';
import { StickerLayer } from '@/app/(signed-in-only)/write/_components/sticker-layer';
import { WritePageAppBar } from '@/app/(signed-in-only)/write/_components/write-page-app-bar';
import { useEditorContentsStore } from '@/app/(signed-in-only)/write/_store/use-editor-contents-store';

const WritePageContent = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);

  const { background, setMainContainerElement } = useEditorContentsStore();

  useEffect(() => {
    if (mainContentRef.current !== null) {
      setMainContainerElement(mainContentRef.current);
    }
  }, [mainContentRef.current, setMainContainerElement]);

  return (
    <div>
      <WritePageAppBar />
      <div
        ref={mainContentRef}
        className="min-h-dvh bg-contain bg-repeat-y"
        style={{
          backgroundImage:
            background !== null ? `url(${background.imageUrl})` : 'none',
        }}
      >
        <StickerLayer height={mainContentRef.current?.clientHeight ?? 0} />
        <EditorLayer />
      </div>
    </div>
  );
};

export { WritePageContent };
