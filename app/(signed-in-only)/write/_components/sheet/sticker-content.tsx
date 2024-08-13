import Image from 'next/image';

import { type ChangeEventHandler, useRef, useState } from 'react';

import { Scrollbar } from '@radix-ui/react-scroll-area';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';

import { CreatePrivateStickerDialog } from '@/app/(signed-in-only)/write/_components/dialog/create-private-sticker-dialog';
import { StickerCategoryContent } from '@/app/(signed-in-only)/write/_components/sheet/sticker-category-content';
import { useStickersStore } from '@/app/(signed-in-only)/write/_store/use-stickers-store';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SheetClose } from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TOAST_MESSAGES } from '@/constants/messages';
import { api } from '@/lib/api';
import { queries } from '@/queries';

const StickerContent = () => {
  const { data: publicStickerCategoriesData } = useQuery(
    queries.stickers.categories,
  );

  const { data: privateStickersData } = useQuery(queries.stickers.private);

  const queryClient = useQueryClient();

  const [
    isCreatePrivateStickerDialogOpen,
    setIsCreatePrivateStickerDialogOpen,
  ] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  const ref = useRef<HTMLInputElement>(null);

  const handleUpload: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const file = evt.target.files?.[0];

    if (file === undefined) {
      return;
    }

    setIsCreatePrivateStickerDialogOpen(true);
    setFile(file);
  };

  const { mutate: deleteStickerMutate } = useMutation({
    mutationFn: (id: number) =>
      api.stickers.stickersControllerDeleteSticker(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queries.stickers.private.queryKey,
      });
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.DELETE_STICKER_FAIL);
    },
  });

  const { addSticker } = useStickersStore();

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
        <Button
          radius="full"
          size="sm"
          className="mb-4"
          onClick={() => ref.current?.click()}
        >
          스티커 추가
        </Button>
        <input
          ref={ref}
          type="file"
          className="hidden"
          onChange={handleUpload}
        />
        <CreatePrivateStickerDialog
          isOpen={isCreatePrivateStickerDialogOpen}
          setIsOpen={setIsCreatePrivateStickerDialogOpen}
          file={file}
        />
      </div>
      <TabsContent value="my-sticker">
        <ScrollArea className="h-60">
          <div className="flex flex-wrap justify-between gap-1">
            {privateStickersData?.data.map((sticker) => (
              <div key={sticker.id} className="relative">
                <IconButton
                  className="absolute -right-2 top-0 z-50 rounded-md bg-blccu-neutral-100"
                  onClick={() => deleteStickerMutate(sticker.id)}
                >
                  <X className="h-4 w-4" />
                </IconButton>
                <SheetClose asChild>
                  <Image
                    className="h-28 w-28"
                    src={sticker.imageUrl}
                    width={500}
                    height={500}
                    alt="스티커"
                    onClick={() =>
                      addSticker({
                        stickerId: sticker.id,
                        clientId: uuidv4(),
                        src: sticker.imageUrl,
                        posX: 100,
                        posY: 100,
                        scale: 1,
                        angle: 0,
                        zindex: 0,
                      })
                    }
                  />
                </SheetClose>
              </div>
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
