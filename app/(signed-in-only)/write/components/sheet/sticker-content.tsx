import Image from 'next/image';

import { Scrollbar } from '@radix-ui/react-scroll-area';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';

import {
  type ImageUploadDto,
  type UpdateStickerInput,
} from '@/__generated__/data-contracts';
import { StickerCategoryContent } from '@/app/(signed-in-only)/write/components/sheet/sticker-category-content';
import useStickersStore from '@/app/(signed-in-only)/write/store/stickers';
import { FileUploader } from '@/components/ui-unstable/file-uploader';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SheetClose } from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';
import { queries } from '@/queries';

type PatchStickerProps = {
  id: number;
  dto: UpdateStickerInput;
};

const StickerContent = () => {
  const { data: publicStickerCategoriesData } = useQuery(
    queries.stickers.categories,
  );

  const { data: privateStickersData } = useQuery(queries.stickers.private);

  const queryClient = useQueryClient();

  const { mutate: patchStickerMutate } = useMutation({
    mutationFn: ({ id, dto }: PatchStickerProps) =>
      api.stickers.stickersControllerPatchSticker(id, dto),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queries.stickers.private.queryKey,
      });
    },

    onError: () => {
      toast.error(TOAST_MESSAGES.PATCH_STICKER_FAIL);
    },
  });

  const mutation = useMutation({
    mutationFn: (dto: ImageUploadDto) =>
      api.stickers.stickersControllerCreatePrivateSticker(dto),
    onSuccess: ({ data }) => {
      // FIXME: 원 기획과 다릅니다. 자동 재사용 설정을 하지 않습니다.
      patchStickerMutate({
        id: data.id,
        dto: { isReusable: true },
      });
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.UPLOAD_STICKER_FAIL);
    },
  });

  const { addSticker } = useStickersStore((state) => state);

  const categories = publicStickerCategoriesData?.data ?? [];

  return (
    <Tabs defaultValue="my-sticker">
      <div className="flex flex-wrap items-center justify-between">
        <TabsList className="mb-4">
          <ScrollArea className="max-w-[calc(100vw-48px)] whitespace-nowrap">
            <TabsTrigger value="my-sticker">내 스티커</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={String(category.id)}>
                {category.name}
              </TabsTrigger>
            ))}
            <Scrollbar orientation="horizontal" />
          </ScrollArea>
        </TabsList>
        <FileUploader
          uploadMutation={mutation}
          trigger={
            <Button radius="full" size="sm" className="mb-4">
              스티커 추가
            </Button>
          }
        />
      </div>
      <TabsContent value="my-sticker">
        <ScrollArea className="h-60">
          <div className="flex flex-wrap justify-between gap-1">
            {privateStickersData?.data.map((sticker) => (
              <SheetClose key={sticker.id}>
                <Image
                  className="h-28 w-28"
                  src={sticker.image_url}
                  width={500}
                  height={500}
                  alt="스티커"
                  onClick={() =>
                    addSticker({
                      clientId: uuidv4(),
                      src: sticker.image_url,
                      x: 100,
                      y: 100,
                      scale: 1,
                      angle: 0,
                    })
                  }
                />
              </SheetClose>
            ))}
          </div>
        </ScrollArea>
      </TabsContent>
      {categories.map((category) => (
        <StickerCategoryContent key={category.id} category={category} />
      ))}
    </Tabs>
  );
};

export { StickerContent };
