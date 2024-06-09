import { Image, RotateCw, Scissors, Trash2 } from 'lucide-react';

import {
  EditorBottomSubNavBar,
  EditorBottomSubNavBarItem,
  EditorBottomSubNavBarItemButton,
} from '@/components/ui-unstable/editor-bottom-sub-nav-bar';

const ImageToolbar = () => {
  return (
    <EditorBottomSubNavBar align="left">
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton>
          <Scissors className="h-6 w-6" />
          <p className="text-xs">자르기</p>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton>
          <RotateCw className="h-6 w-6" />
          <p className="text-xs">회전</p>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton>
          <Image className="h-6 w-6" />
          <p className="text-xs">대표 사진</p>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton>
          <Trash2 className="h-6 w-6" />
          <p className="text-xs">버리기</p>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
    </EditorBottomSubNavBar>
  );
};

export default ImageToolbar;
