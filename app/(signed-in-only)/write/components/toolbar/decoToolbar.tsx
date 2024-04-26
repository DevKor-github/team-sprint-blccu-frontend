'use-client';

import { ArrowDownToLine, File, Smile } from 'lucide-react';

import useFocusedStore from '@/app/(signed-in-only)/write/store/focused';
import {
  EditorBottomNavBar,
  EditorBottomNavBarItem,
  EditorBottomNavBarItemButton,
} from '@/components/ui-unstable/editor-bottom-nav-bar';

const DecoToolbar = () => {
  const focused = useFocusedStore((state: any) => state.focused);
  const setFocused = useFocusedStore((state: any) => state.setFocused);

  return (
    <EditorBottomNavBar>
      <EditorBottomNavBarItem>
        <EditorBottomNavBarItemButton
          isSelected={focused === 'text'}
          onClick={() => setFocused('sticker')}
        >
          <Smile className="h-6 w-6" />
          <p className="text-xs">스티커</p>
        </EditorBottomNavBarItemButton>
      </EditorBottomNavBarItem>
      <EditorBottomNavBarItem>
        <EditorBottomNavBarItemButton
          isSelected={focused === 'background'}
          onClick={() => setFocused('background')}
        >
          <File className="h-6 w-6" />
          <p className="text-xs">내지 수정</p>
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

export default DecoToolbar;
