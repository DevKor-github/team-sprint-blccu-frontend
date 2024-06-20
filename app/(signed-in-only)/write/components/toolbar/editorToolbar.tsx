'use client';

import { useMutation } from '@tanstack/react-query';
import { AlignLeft, ArrowDownToLine, Image, Type } from 'lucide-react';

import useFocusedStore from '@/app/(signed-in-only)/write/store/focused';
import useCurrentImageIdStore from '@/app/(signed-in-only)/write/store/imageId';
import useSelectedEditorStore from '@/app/(signed-in-only)/write/store/selectedEditor';
import {
  EditorBottomNavBar,
  EditorBottomNavBarItem,
  EditorBottomNavBarItemButton,
} from '@/components/ui-unstable/editor-bottom-nav-bar';
import { api } from '@/lib/api';

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

  const uploadImage = async (file: any) => {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return api.posts.postsControllerCreatePrivateSticker(file);
  };

  const mutation = useMutation({
    mutationFn: uploadImage,
    onSuccess: async ({ data }) => {
      await selectedEditor
        ?.chain()
        .focus()
        .setImage({ src: data.image_url, alt: '이미지', id: currentImageId })
        .run();
      selectedEditor.commands.createParagraphNear();
      increaseImageId();
    },
    onError: () => {
      console.log('error');
    },
  });

  const handleImageButtonClick = () => {
    setFocused('image');
    document.getElementById('imageInput')?.click();
  };

  const handleImageInputChange = (event: any) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    mutation.mutate(file);
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
