'use client';

import React from 'react';

import useFocusedStore from '@/app/(signed-in-only)/write/store/focused';
import useSelectedEditorStore from '@/app/(signed-in-only)/write/store/selectedEditor';

import useCurrentImageIdStore from '@/app/(signed-in-only)/write/store/imageId';

const EditorToolbar = () => {
  const focused = useFocusedStore((state: any) => state.focused);

  const selectedEditor = useSelectedEditorStore(
    (state: any) => state.selectedEditor,
  );

  const currentImageId = useCurrentImageIdStore(
    (state: any) => state.currentImageId,
  );

  const increaseImageId = useCurrentImageIdStore(
    (state: any) => state.increaseImageId,
  );

  const isFocused = (target: string | null) => {
    if (focused === target) {
      return 'text-[#FFFFFF]';
    }
    return 'text-[#A6A6A6]';
  };

  const setFocused = useFocusedStore((state: any) => state.setFocused);

  const imageOnClickHandler = () => {
    setFocused('image');
    document.getElementById('imageInput')?.click();
  };

  const imageInputOnChangeHandler = async (e: any) => {
    const url = 'https://picsum.photos/200/300';
    /*
        const files = e.target.files
        if (files === null) return ;
        const file = files[0];
        // 이미지 서버에 업로드 후 url 받아오는 코드 작성
        */
    if (url) {
      await selectedEditor
        ?.chain()
        .focus()
        .setImage({ src: url, id: currentImageId })
        .run();
      increaseImageId();
    }
  };

  return (
    <div className="fixed bottom-0 left-[50%] flex h-[10%] w-[100vw] max-w-lg -translate-x-[50%] items-center justify-center bg-[#1A1A1A]">
      <div className="m-auto">
        {/* <img src='' alt='사진' /> */}
        <div
          className={isFocused('image')}
          onClick={() => imageOnClickHandler()}
        >
          사진
        </div>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onClick={(e) => imageInputOnChangeHandler(e)}
        />
      </div>
      <div className="m-auto">
        {/* <img src='' alt='텍스트' /> */}
        <div className={isFocused('text')} onClick={() => setFocused('text')}>
          텍스트
        </div>
      </div>
      <div className="m-auto">
        {/* <img src='' alt='정렬' /> */}
        <div className={isFocused('align')} onClick={() => setFocused('align')}>
          정렬
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

export default EditorToolbar;
