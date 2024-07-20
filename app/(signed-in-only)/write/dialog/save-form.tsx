import { useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { type ArticleDto } from '@/__generated__/data-contracts';
import useEditorContentsStore from '@/app/(signed-in-only)/write/store/editorContents';
import useStickersStore, {
  type Sticker,
} from '@/app/(signed-in-only)/write/store/stickers';
import useTempLoadStore from '@/app/(signed-in-only)/write/store/tempLoad';
import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { DialogClose } from '@/components/ui/dialog';
import { TOAST_MESSAGES } from '@/constants/messages';
import { noop } from '@/lib/utils';
import { queries } from '@/queries';

const SaveForm = () => {
  const queryClient = useQueryClient();

  const { isLoading, data } = useQuery(queries.articles.tempPosts);

  const tempArticles = data?.data ?? [];
  const setTitleContents = useEditorContentsStore(
    (state) => state.setTitleContents,
  );
  const setBodyContents = useEditorContentsStore(
    (state) => state.setBodyContents,
  );

  const setBackground = useEditorContentsStore((state) => state.setBackground);

  const setStickers = useStickersStore((state) => state.setStickers);

  const setTempLoad = useTempLoadStore((state) => state.setTempLoad);

  const onClickHandler = async (tempArticle: ArticleDto) => {
    const { data: tempData } = await queryClient.fetchQuery(
      queries.articles.stickers(tempArticle.id),
    );

    const rawStickerBlocks = tempData?.stickerBlocks;

    const stickerBlocks = rawStickerBlocks?.reduce(
      (acc, { clientId, sticker, ...rest }) => {
        acc[clientId] = { src: sticker.imageUrl, ...rest, clientId };

        return acc;
      },
      {} as Record<string, Sticker>, // tmp
    );

    setStickers(stickerBlocks);
    setTitleContents(tempArticle.title);
    setBodyContents(tempArticle.content ?? '');

    //@ts-ignore
    setBackground(tempArticle.articleBackground); // FIXME: swagger update가 아직 안되었음. background join 해서 넘겨줌.
    setTempLoad(true);
    toast.success(TOAST_MESSAGES.TEMP_LOAD_SUCCESS);
    noop;
  };

  return (
    <div>
      <AppBar className="flex justify-between" shadow>
        <DialogClose>
          <AppBarBack onClick={noop} />
        </DialogClose>
        <AppBarTitle align="center">임시저장글</AppBarTitle>
        <div>dummy</div>
      </AppBar>
      <div className="flex flex-col pt-16">
        {tempArticles.map((tempArticle) => {
          return (
            <div
              key={tempArticle.id}
              onClick={() => onClickHandler(tempArticle)}
              className="flex cursor-pointer items-center justify-between gap-2 px-3 py-2 hover:bg-blccu-neutral-100"
            >
              <div className="font-medium">
                {tempArticle.title === '' ? '제목 없음' : tempArticle.title}
              </div>
              <div className="text-sm">{tempArticle.dateUpdated}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { SaveForm };
