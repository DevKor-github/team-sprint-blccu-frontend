'use client';

import useModeStore from '@/app/(signed-in-only)/write/store/mode';
import Body from './body';
import Title from './title';

const Editor = () => {
  const mode = useModeStore((state: any) => state.mode);
  return (
    <div
      className="flex-1 px-[5%] pb-[25%] pt-[20%]"
      style={{ pointerEvents: mode === 'write' ? 'auto' : 'none' }}
    >
      <Title />
      <Body />
    </div>
  );
};

export default Editor;
