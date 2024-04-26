'use client';

import { AlignLeft, ArrowDownToLine, Image, Type } from 'lucide-react';

import useFocusedStore from '@/app/(signed-in-only)/write/store/focused';
import useCurrentImageIdStore from '@/app/(signed-in-only)/write/store/imageId';
import useSelectedEditorStore from '@/app/(signed-in-only)/write/store/selectedEditor';
import {
  EditorBottomNavBar,
  EditorBottomNavBarItem,
  EditorBottomNavBarItemButton,
} from '@/components/ui-unstable/editor-bottom-nav-bar';

const EditorToolbar = () => {
  const focused = useFocusedStore((state: any) => state.focused);
  const setFocused = useFocusedStore((state: any) => state.setFocused);

  const selectedEditor = useSelectedEditorStore(
    (state: any) => state.selectedEditor,
  );

  const currentImageId = useCurrentImageIdStore(
    (state: any) => state.currentImageId,
  );

  const increaseImageId = useCurrentImageIdStore(
    (state: any) => state.increaseImageId,
  );

  const handleImageButtonClick = () => {
    setFocused('image');
    document.getElementById('imageInput')?.click();
  };

  const handleImageInputChange = async (e: any) => {
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
    <EditorBottomNavBar>
      <EditorBottomNavBarItem>
        <EditorBottomNavBarItemButton
          isSelected={focused === 'image'}
          onClick={handleImageButtonClick}
        >
          <Image className="h-6 w-6" />
          <p className="text-xs">사진</p>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            className="hidden"
            onClick={handleImageInputChange}
          />
        </EditorBottomNavBarItemButton>
      </EditorBottomNavBarItem>
      <EditorBottomNavBarItem>
        <EditorBottomNavBarItemButton
          isSelected={focused === 'text'}
          onClick={() => setFocused('text')}
        >
          <Type className="h-6 w-6" />
          <p className="text-xs">텍스트</p>
        </EditorBottomNavBarItemButton>
      </EditorBottomNavBarItem>
      <EditorBottomNavBarItem>
        <EditorBottomNavBarItemButton
          isSelected={focused === 'align'}
          onClick={() => setFocused('align')}
        >
          <AlignLeft className="h-6 w-6" />
          <p className="text-xs">정렬</p>
        </EditorBottomNavBarItemButton>
      </EditorBottomNavBarItem>
      <EditorBottomNavBarItem>
        <EditorBottomNavBarItemButton
          isSelected={focused === 'save'}
          onClick={() => setFocused('save')}
        >
          <ArrowDownToLine className="h-6 w-6" />
          <p className="text-xs">임시 저장</p>
        </EditorBottomNavBarItemButton>
      </EditorBottomNavBarItem>
    </EditorBottomNavBar>
  );
};

export default EditorToolbar;
