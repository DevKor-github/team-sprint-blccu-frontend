import { Scrollbar } from '@radix-ui/react-scroll-area';
import { useQuery } from '@tanstack/react-query';

import { StickerCategoryContent } from '@/app/(signed-in-only)/write/components/sheet/sticker-category-content';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { queries } from '@/queries';

const StickerContent = () => {
  const { data } = useQuery(queries.stickers.categories);

  // FIXME: BE response dto is not defined
  const categories = data?.data ?? [];

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
        <Button radius="full" size="sm" className="mb-4">
          스티커 추가
        </Button>
      </div>
      <TabsContent value="my-sticker">
        <ScrollArea className="h-60"></ScrollArea>
      </TabsContent>
      {categories.map((category) => (
        <StickerCategoryContent key={category.id} category={category} />
      ))}
    </Tabs>
  );
};

export { StickerContent };
