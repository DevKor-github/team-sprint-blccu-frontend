import Image from 'next/image';

import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

import { type StickerCategoryDto } from '@/__generated__/data-contracts';
import { useStickersStore } from '@/app/(signed-in-only)/write/store/stickers';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SheetClose } from '@/components/ui/sheet';
import { TabsContent } from '@/components/ui/tabs';
import { queries } from '@/queries';

type StickerCategoryContentProps = {
  category: StickerCategoryDto;
};

const StickerCategoryContent = ({
  category: { id },
}: StickerCategoryContentProps) => {
  const { data } = useQuery(queries.stickers.category(id));

  const { addSticker } = useStickersStore();

  const stickers = data?.data ?? [];

  return (
    <TabsContent value={String(id)}>
      <ScrollArea className="h-60">
        <div className="flex flex-wrap justify-between gap-1">
          {stickers.map((sticker) => (
            <SheetClose key={sticker.stickerId}>
              <Image
                className="h-28 w-28"
                src={sticker.sticker.imageUrl}
                width={500}
                height={500}
                alt="스티커"
                onClick={() =>
                  addSticker({
                    stickerId: sticker.stickerId,
                    clientId: uuidv4(),
                    src: sticker.sticker.imageUrl,
                    posX: 100,
                    posY: 100,
                    scale: 1,
                    angle: 0,
                    zindex: 0,
                  })
                }
              />
            </SheetClose>
          ))}
        </div>
      </ScrollArea>
    </TabsContent>
  );
};

export { StickerCategoryContent };
