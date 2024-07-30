'use client';

import { BodyEditor } from '@/app/(signed-in-only)/write/_components/editor/body-editor';
import { TitleEditor } from '@/app/(signed-in-only)/write/_components/editor/title-editor';
import { useEditorModeStore } from '@/app/(signed-in-only)/write/_store/use-editor-mode-store';
import { cn } from '@/lib/utils';

const EditorLayer = () => {
  const { editorMode } = useEditorModeStore();

  return (
    <div
      className={cn(
        'flex-1 px-[5%] pb-[25%] pt-[20%]',
        editorMode === 'write' ? 'pointer-events-auto' : 'pointer-events-none',
      )}
    >
      <TitleEditor />
      <BodyEditor />
    </div>
  );
};

export { EditorLayer };
