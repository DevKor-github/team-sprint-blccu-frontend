'use client';

import { useMutation } from '@tanstack/react-query';
import { AlignLeft, ArrowDownToLine, Image, Type } from 'lucide-react';

import { type ImageUploadRequestDto } from '@/__generated__/data-contracts';
import { useCurrentImageIdStore } from '@/app/(signed-in-only)/write/_store/use-current-image-id-store';
import { useFocusedStore } from '@/app/(signed-in-only)/write/_store/use-focused-store';
import { useSelectedEditorStore } from '@/app/(signed-in-only)/write/_store/use-selected-editor-store';
import {
  EditorBottomNavBar,
  EditorBottomNavBarItem,
  EditorBottomNavBarItemButton,
} from '@/components/ui-unstable/editor-bottom-nav-bar';
import { api } from '@/lib/api';

const WriteModeMainToolbar = () => {
  const { focused, setFocused, setSubFocused } = useFocusedStore();
  const { selectedEditor } = useSelectedEditorStore();
  const { currentImageId, increaseImageId } = useCurrentImageIdStore();

  const uploadImage = async (file: ImageUploadRequestDto) => {
    return await api.articles.articlesCreateControllerCreatePrivateSticker(
      file,
    );
  };

  const mutation = useMutation({
    mutationFn: uploadImage,
    onSuccess: async ({ data }) => {
      await selectedEditor
        ?.chain()
        .focus()
        .setImage({
          src: data.imageUrl,
          alt: '이미지',
          //@ts-ignore
          id: currentImageId, // ???
        })
        .run();
      selectedEditor?.commands.createParagraphNear();
      increaseImageId();
    },
    onError: () => {
      console.log('error');
    },
  });

  const handleImageButtonClick = () => {
    setFocused('image');
    setSubFocused('init');
    document.getElementById('imageInput')?.click();
  };

  const handleImageInputChange = async (event: any) => {
    const file = await event.target.files[0];
    if (!file) {
      return;
    }
    mutation.mutate({ file: file });
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
            onChange={handleImageInputChange}
          />
        </EditorBottomNavBarItemButton>
      </EditorBottomNavBarItem>
      <EditorBottomNavBarItem>
        <EditorBottomNavBarItemButton
          isSelected={focused === 'text'}
          onClick={() => {
            setFocused('text');
            setSubFocused('init');
          }}
        >
          <Type className="h-6 w-6" />
          <p className="text-xs">텍스트</p>
        </EditorBottomNavBarItemButton>
      </EditorBottomNavBarItem>
      <EditorBottomNavBarItem>
        <EditorBottomNavBarItemButton
          isSelected={focused === 'align'}
          onClick={() => {
            setFocused('align');
            setSubFocused('init');
          }}
        >
          <AlignLeft className="h-6 w-6" />
          <p className="text-xs">정렬</p>
        </EditorBottomNavBarItemButton>
      </EditorBottomNavBarItem>
      <EditorBottomNavBarItem>
        <EditorBottomNavBarItemButton
          isSelected={focused === 'save'}
          onClick={() => {
            setFocused('save');
            setSubFocused('init');
          }}
        >
          <ArrowDownToLine className="h-6 w-6" />
          <p className="text-xs">임시 저장</p>
        </EditorBottomNavBarItemButton>
      </EditorBottomNavBarItem>
    </EditorBottomNavBar>
  );
};

export { WriteModeMainToolbar };
