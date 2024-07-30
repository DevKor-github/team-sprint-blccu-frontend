'use client';

import { Body } from '@/app/(signed-in-only)/write/components/editor/body';
import { Title } from '@/app/(signed-in-only)/write/components/editor/title';
import { useEditorModeStore } from '@/app/(signed-in-only)/write/store/mode';
import { cn } from '@/lib/utils';

const Editor = () => {
  const { editorMode } = useEditorModeStore();

  return (
    <div
      className={cn(
        'flex-1 px-[5%] pb-[25%] pt-[20%]',
        editorMode === 'write' ? 'pointer-events-auto' : 'pointer-events-none',
      )}
    >
      <Title />
      <Body />
    </div>
  );
};

export { Editor };
