import { Download, Save } from 'lucide-react';

import {
  EditorBottomSubNavBar,
  EditorBottomSubNavBarItem,
  EditorBottomSubNavBarItemButton,
} from '@/components/ui-unstable/editor-bottom-sub-nav-bar';

const SaveToolbar = () => {
  const numberOfSaveFiles = 5;

  return (
    <EditorBottomSubNavBar align="right">
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton>
          <Save className="h-8 w-8" />
          <p className="text-xs">저장</p>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton>
          <Download className="h-8 w-8" />
          <p className="text-xs">불러오기 | {numberOfSaveFiles}</p>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
    </EditorBottomSubNavBar>
  );
};

export default SaveToolbar;
