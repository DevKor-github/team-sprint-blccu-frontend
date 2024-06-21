import Image from 'next/image';

import { useQuery } from '@tanstack/react-query';

import { type StickerCategory } from '@/__generated__/data-contracts';
import useStickersStore from '@/app/(signed-in-only)/write/store/stickers';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SheetClose } from '@/components/ui/sheet';
import { TabsContent } from '@/components/ui/tabs';
import { queries } from '@/queries';

type StickerCategoryContentProps = {
  category: StickerCategory;
};

const StickerCategoryContent = ({
  category: { id },
}: StickerCategoryContentProps) => {
  const { data } = useQuery(queries.stickers.category(id));

  const { addSticker } = useStickersStore((state) => state);

  const stickers = data?.data ?? [];

  return (
    <TabsContent value={String(id)}>
      <ScrollArea className="h-60">
        <div className="flex flex-wrap justify-between gap-1">
          {stickers.map((sticker: any) => (
            <SheetClose key={sticker.stickerId}>
              <Image
                className="h-28 w-28"
                src={sticker.sticker.image_url}
                width={500}
                height={500}
                alt="스티커"
                onClick={() =>
                  addSticker({
                    clientId: sticker.stickerId,
                    src: sticker.sticker.image_url,
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
  );
};

export { StickerCategoryContent };
