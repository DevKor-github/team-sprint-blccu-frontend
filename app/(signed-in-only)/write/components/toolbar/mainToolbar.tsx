'use client';

import { DecoToolbar } from '@/app/(signed-in-only)/write/components/toolbar/decoToolbar';
import { EditorToolbar } from '@/app/(signed-in-only)/write/components/toolbar/editorToolbar';
import { useEditorModeStore } from '@/app/(signed-in-only)/write/store/mode';

const MainToolbar = () => {
  const { editorMode } = useEditorModeStore();

  return (
    <>
      {editorMode === 'deco' && <DecoToolbar />}
      {editorMode === 'write' && <EditorToolbar />}
    </>
  );
};

export { MainToolbar };
