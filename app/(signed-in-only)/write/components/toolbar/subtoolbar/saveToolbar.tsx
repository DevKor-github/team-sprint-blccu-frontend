import { useMutation } from '@tanstack/react-query';
import { Download, Save } from 'lucide-react';

import { type ArticleCreateDraftRequestDto } from '@/__generated__/data-contracts';
import { SaveDialog } from '@/app/(signed-in-only)/write/dialog/save-dialog';
import useEditorContentsStore from '@/app/(signed-in-only)/write/store/editorContents';
import useStickersStore from '@/app/(signed-in-only)/write/store/stickers';
import {
  EditorBottomSubNavBar,
  EditorBottomSubNavBarItem,
  EditorBottomSubNavBarItemButton,
} from '@/components/ui-unstable/editor-bottom-sub-nav-bar';
import { api } from '@/lib/api';

const SaveToolbar = () => {
  const numberOfSaveFiles = 5;

  const { mutate } = useMutation({
    mutationFn: (dto: ArticleCreateDraftRequestDto) =>
      api.articles.articlesCreateControllerCreateDraft(dto),
    onSuccess: () => {
      console.log('success');
    },
    onError: () => {
      console.log('error');
    },
  });

  const { background, titleContents, bodyContents, mainContainerElement } =
    useEditorContentsStore((state) => state);
  const stickerBlocks = useStickersStore((state) => state.stickers);

  const stickerBlocksArray = Object.keys(stickerBlocks).map((key) => {
    const { src, ...rest } = stickerBlocks[key];
    return rest;
  });

  const handleSaveButtonClick = async () => {
    mutate({
      title: titleContents,
      content: bodyContents,
      articleBackgroundId: background?.id ?? null,
      stickerBlocks: stickerBlocksArray,
    });
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
