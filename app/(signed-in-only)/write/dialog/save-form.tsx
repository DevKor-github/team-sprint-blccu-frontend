import { useQuery, useQueryClient } from '@tanstack/react-query';

import { type ArticleDto } from '@/__generated__/data-contracts';
import useEditorContentsStore from '@/app/(signed-in-only)/write/store/editorContents';
import useStickersStore from '@/app/(signed-in-only)/write/store/stickers';
import useTempLoadStore from '@/app/(signed-in-only)/write/store/tempLoad';
import { AppBarBack } from '@/components/ui-unstable/app-bar';
import { DialogClose } from '@/components/ui/dialog';
import { noop } from '@/lib/utils';
import { queries } from '@/queries';

const SaveForm = () => {
  const queryClient = useQueryClient();

  const { isLoading, data } = useQuery(queries.articles.tempPosts);

  const tempPosts = data?.data ?? [];
  const setTitleContents = useEditorContentsStore(
    (state) => state.setTitleContents,
  );
  const setBodyContents = useEditorContentsStore(
    (state) => state.setBodyContents,
  );

  const setBackground = useEditorContentsStore((state) => state.setBackground);

  const setStickers = useStickersStore((state) => state.setStickers);

  const setTempLoad = useTempLoadStore((state) => state.setTempLoad);

  const onClickHandler = async (temp: any) => {
    const { data: tempData } = await queryClient.fetchQuery(
      queries.articles.stickers(temp.id),
    );

    const rawStickerBlocks = tempData?.stickerBlocks;

    const stickerBlocks = rawStickerBlocks?.reduce(
      (acc: { [key: string]: any }, block) => {
        acc[block.clientId] = {
          stickerId: block.stickerId,
          src: block.sticker.imageUrl,
          posX: block.posX,
          posY: block.posY,
          scale: block.scale,
          angle: block.angle,
          zindex: block.zindex,
          clientId: block.clientId,
        };
        return acc;
      },
      {},
    );

    setStickers(stickerBlocks);
    setTitleContents(temp.title);
    setBodyContents(temp.content || '');
    setBackground(temp.articleBackground);
    setTempLoad(true);
    noop;
  };

  return (
    <div>
      <DialogClose>
        <AppBarBack
          onClick={() => {
            noop;
          }}
        />
      </DialogClose>
      <div className="flex-col">
        {tempPosts.map((temp) => {
          return (
            <div key={temp.id} onClick={() => onClickHandler(temp)}>
              <div>{temp.title}</div>
              <div>{temp.dateUpdated}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { SaveForm };
