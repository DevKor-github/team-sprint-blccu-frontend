import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from 'lucide-react';

import useSelectedEditor from '@/app/(signed-in-only)/write/store/selectedEditor';
import {
  EditorBottomSubNavBar,
  EditorBottomSubNavBarItem,
  EditorBottomSubNavBarItemButton,
} from '@/components/ui-unstable/editor-bottom-sub-nav-bar';

const AlignToolbar = () => {
  const editor = useSelectedEditor((state: any) => state.selectedEditor);

  return (
    <EditorBottomSubNavBar>
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
        >
          <AlignLeft className="h-8 w-8" />
          <p className="text-xs">좌측</p>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
        >
          <AlignCenter className="h-8 w-8" />
          <p className="text-xs">중앙</p>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
        >
          <AlignRight className="h-8 w-8" />
          <p className="text-xs">우측</p>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        >
          <AlignJustify className="h-8 w-8" />
          <p className="text-xs">배분</p>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
    </EditorBottomSubNavBar>
  );
};

export default AlignToolbar;
