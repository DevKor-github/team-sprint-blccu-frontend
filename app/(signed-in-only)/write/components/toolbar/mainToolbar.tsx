'use client';

import useModeStore from '@/app/(signed-in-only)/write/store/mode';
import DecoToolbar from './decoToolbar';
import EditorToolbar from './editorToolbar';

const MainToolbar = () => {
  const mode = useModeStore((state: any) => state.mode);
  if (mode === 'deco') {
    return <DecoToolbar />;
  }
  return <EditorToolbar />;
};

export default MainToolbar;
