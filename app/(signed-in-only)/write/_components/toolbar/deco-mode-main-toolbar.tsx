'use-client';

import { ArrowDownToLine, File, Smile } from 'lucide-react';

import { EditArticleBackgroundSheet } from '@/app/(signed-in-only)/write/_components/sheet/edit-article-background-sheet';
import { StickerSheet } from '@/app/(signed-in-only)/write/_components/sheet/sticker-sheet';
import { useFocusedStore } from '@/app/(signed-in-only)/write/_store/use-focused-store';
import {
  EditorBottomNavBar,
  EditorBottomNavBarItem,
  EditorBottomNavBarItemButton,
} from '@/components/ui-unstable/editor-bottom-nav-bar';

const DecoModeMainToolbar = () => {
  const { focused, setFocused } = useFocusedStore();

  return (
    <EditorBottomNavBar>
      <EditorBottomNavBarItem>
        <StickerSheet
          trigger={
            <EditorBottomNavBarItemButton>
              <Smile className="h-6 w-6" />
              <p className="text-xs">스티커</p>
            </EditorBottomNavBarItemButton>
          }
        />
      </EditorBottomNavBarItem>
      <EditorBottomNavBarItem>
        <EditArticleBackgroundSheet
          trigger={
            <EditorBottomNavBarItemButton>
              <File className="h-6 w-6" />
              <p className="text-xs">내지 수정</p>
            </EditorBottomNavBarItemButton>
          }
        />
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

export { DecoModeMainToolbar };
