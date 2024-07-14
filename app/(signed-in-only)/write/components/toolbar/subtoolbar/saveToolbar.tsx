import { useMutation } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { Download, Save } from 'lucide-react';
import { toast } from 'sonner';

import { type ArticleCreateDraftRequestDto } from '@/__generated__/data-contracts';
import { SaveDialog } from '@/app/(signed-in-only)/write/dialog/save-dialog';
import useEditorContentsStore from '@/app/(signed-in-only)/write/store/editorContents';
import useStickersStore from '@/app/(signed-in-only)/write/store/stickers';
import {
  EditorBottomSubNavBar,
  EditorBottomSubNavBarItem,
  EditorBottomSubNavBarItemButton,
} from '@/components/ui-unstable/editor-bottom-sub-nav-bar';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';
import { queries } from '@/queries';

const SaveToolbar = () => {
  const { data } = useQuery(queries.articles.tempPosts);
  const numberOfSaveFiles = data?.data?.length ?? 0;

  const { mutate } = useMutation({
    mutationFn: (dto: ArticleCreateDraftRequestDto) =>
      api.articles.articlesCreateControllerCreateDraft(dto),
    onSuccess: () => {
      toast.success(TOAST_MESSAGES.SUCCESS_TEMP);
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.FAIL_TEMP);
    },
  });

  const { background, titleContents, bodyContents, mainContainerElement } =
    useEditorContentsStore((state) => state);
  const stickerBlocks = useStickersStore((state) => state.stickers);

  const stickerBlocksArray = Object.keys(stickerBlocks).map((key) => {
    const { src, ...rest } = stickerBlocks[key];
    return rest;
  });

  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  const handleSaveButtonClick = async () => {
    mutate({
      title: stripHtml(titleContents),
      htmlTitle: titleContents,
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
