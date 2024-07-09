import { Download, Save } from 'lucide-react';

import { SaveDialog } from '@/app/(signed-in-only)/write/dialog/save-dialog';
import {
  EditorBottomSubNavBar,
  EditorBottomSubNavBarItem,
  EditorBottomSubNavBarItemButton,
} from '@/components/ui-unstable/editor-bottom-sub-nav-bar';

const SaveToolbar = () => {
  const numberOfSaveFiles = 5;

  const handleSaveButtonClick = () => {
    console.log('save');
  };

  return (
    <EditorBottomSubNavBar align="right">
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton onClick={handleSaveButtonClick}>
          <Save className="h-6 w-6" />
          <p className="text-xs">저장</p>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
      <EditorBottomSubNavBarItem>
        <EditorBottomSubNavBarItemButton>
          <Download className="h-6 w-6" />
          <SaveDialog
            trigger={<p className="text-xs">불러오기 | {numberOfSaveFiles}</p>}
          ></SaveDialog>
        </EditorBottomSubNavBarItemButton>
      </EditorBottomSubNavBarItem>
    </EditorBottomSubNavBar>
  );
};

export default SaveToolbar;
