import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from 'lucide-react';

import { useSelectedEditorStore } from '@/app/(signed-in-only)/write/_store/use-selected-editor-store';
import {
  EditorBottomSubNavBar,
  EditorBottomSubNavBarItem,
  EditorBottomSubNavBarItemButton,
} from '@/components/ui-unstable/editor-bottom-sub-nav-bar';

const AlignSubToolbar = () => {
  const { selectedEditor } = useSelectedEditorStore();

  return (
    <EditorBottomSubNavBar>
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton
          onClick={() =>
            selectedEditor?.chain().focus().setTextAlign('left').run()
          }
        >
          <AlignLeft className="h-6 w-6" />
          <p className="text-xs">좌측</p>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton
          onClick={() =>
            selectedEditor?.chain().focus().setTextAlign('center').run()
          }
        >
          <AlignCenter className="h-6 w-6" />
          <p className="text-xs">중앙</p>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton
          onClick={() =>
            selectedEditor?.chain().focus().setTextAlign('right').run()
          }
        >
          <AlignRight className="h-6 w-6" />
          <p className="text-xs">우측</p>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton
          onClick={() =>
            selectedEditor?.chain().focus().setTextAlign('justify').run()
          }
        >
          <AlignJustify className="h-6 w-6" />
          <p className="text-xs">배분</p>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
    </EditorBottomSubNavBar>
  );
};

export { AlignSubToolbar };
