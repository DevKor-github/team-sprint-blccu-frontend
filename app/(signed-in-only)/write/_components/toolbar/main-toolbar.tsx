'use client';

import { DecoModeMainToolbar } from '@/app/(signed-in-only)/write/_components/toolbar/deco-mode-main-toolbar';
import { WriteModeMainToolbar } from '@/app/(signed-in-only)/write/_components/toolbar/write-mode-main-toolbar';
import { useEditorModeStore } from '@/app/(signed-in-only)/write/_store/use-editor-mode-store';

const MainToolbar = () => {
  const { editorMode } = useEditorModeStore();

  return (
    <>
      {editorMode === 'write' && <WriteModeMainToolbar />}
      {editorMode === 'deco' && <DecoModeMainToolbar />}
    </>
  );
};

export { MainToolbar };
