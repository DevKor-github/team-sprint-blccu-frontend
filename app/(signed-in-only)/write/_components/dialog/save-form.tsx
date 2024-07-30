import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import { toast } from 'sonner';

import { type ArticleDto } from '@/__generated__/data-contracts';
import { useCurrentImageIdStore } from '@/app/(signed-in-only)/write/_store/use-current-image-id-store';
import { useEditorContentsStore } from '@/app/(signed-in-only)/write/_store/use-editor-contents-store';
import {
  type Sticker,
  useStickersStore,
} from '@/app/(signed-in-only)/write/_store/use-stickers-store';
import { useTempLoadStore } from '@/app/(signed-in-only)/write/_store/use-temp-load-store';
import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { DialogClose } from '@/components/ui/dialog';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';
import { noop } from '@/lib/utils';
import { queries } from '@/queries';

const SaveForm = () => {
  const { setTitleContents, setBodyContents, setBackground } =
    useEditorContentsStore();
  const { setStickers } = useStickersStore();
  const { setTempLoad } = useTempLoadStore();
  const { setCurrentImageId } = useCurrentImageIdStore();

  const queryClient = useQueryClient();

  const { data } = useQuery(queries.articles.tempPosts);

  const tempArticles = data?.data ?? [];

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
    setCurrentImageId(tempArticle.currentImageId ?? 0);

    //@ts-ignore
    setBackground(tempArticle.articleBackground); // FIXME: swagger update가 아직 안되었음. background join 해서 넘겨줌.
    setTempLoad(true);
    toast.success(TOAST_MESSAGES.TEMP_LOAD_SUCCESS);
  };

  const { mutate } = useMutation({
    mutationFn: (articleId: number) =>
      api.articles.articlesDeleteControllerSoftDelete(articleId, {}),
    onSuccess: () => {
      toast.success(TOAST_MESSAGES.DELETE_POST_SUCCESS);
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.DELETE_POST_FAIL);
    },
  });

  const deleteTempArticle = async (tempArticleId: number) => {
    mutate(tempArticleId);
  };

  return (
    <div>
      <AppBar className="flex justify-between" shadow>
        <DialogClose>
          <AppBarBack onClick={noop} />
        </DialogClose>
        <AppBarTitle align="center">임시저장글</AppBarTitle>
      </AppBar>
      <div className="flex flex-col pt-16">
        {tempArticles.map((tempArticle) => {
          const formattedDate = format(
            tempArticle.dateUpdated,
            'yyyy.MM.dd HH:mm',
          );

          return (
            <div
              key={tempArticle.id}
              onClick={() => onClickHandler(tempArticle)}
              className="flex cursor-pointer items-center justify-between gap-2 px-3 py-2 hover:bg-blccu-neutral-100"
            >
              <div className="flex-col">
                <div className="font-medium">
                  {tempArticle.title === '' ? '제목 없음' : tempArticle.title}
                </div>
                <div className="text-sm">{formattedDate}</div>
              </div>
              <div
                className="text-sm"
                onClick={() => deleteTempArticle(tempArticle.id)}
              >
                삭제
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { SaveForm };
