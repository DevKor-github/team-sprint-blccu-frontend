'use-client';

import useFocusedStore from '@/app/(signed-in-only)/write/store/focused';
import useModeStore from '@/app/(signed-in-only)/write/store/mode';

import StickerBottomSheet from './stickerBottomSheet';

const DecoToolbar = () => {
  const focused = useFocusedStore((state: any) => state.focused);

  const isFocused = (target: string | null) => {
    if (focused === target) {
      return 'text-[#FFFFFF]';
    }
    return 'text-[#A6A6A6]';
  };

  const setFocused = useFocusedStore((state: any) => state.setFocused);

  return (
    <div className="fixed bottom-0 left-[50%] flex h-[10%] w-[100vw] max-w-lg -translate-x-[50%] items-center justify-center bg-[#1A1A1A]">
      <div className="m-auto">
        {/* <img src='' alt='스티커' /> */}
        <div
          className={isFocused('sticker')}
          onClick={() => setFocused('sticker')}
        >
          스티커
        </div>
      </div>
      <div className="m-auto">
        {/* <img src='' alt='내지 수정' /> */}
        <div
          className={isFocused('background')}
          onClick={() => setFocused('background')}
        >
          내지 수정
        </div>
      </div>
      <div className="m-auto">
        {/* <img src='' alt='임시저장' /> */}
        <div className={isFocused('save')} onClick={() => setFocused('save')}>
          임시 저장
        </div>
      </div>
    </div>
  );
};

export default DecoToolbar;
