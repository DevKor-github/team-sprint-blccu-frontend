'use client';

import Image from 'next/image';

import { useQuery } from '@tanstack/react-query';

import useEditorContentsStore from '@/app/(signed-in-only)/write/store/editorContents';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SheetClose } from '@/components/ui/sheet';
import { queries } from '@/queries';

const EditPostBackgroundContent = () => {
  const { data } = useQuery(queries.posts.background);

  const { setBackground } = useEditorContentsStore((state) => state);

  const backgrounds = data?.data ?? [];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-bold">내지 수정하기</h3>
        <p className="text-sm">게시물에 사용할 내지를 선택해주세요.</p>
      </div>
      <ScrollArea className="h-60">
        <div className="grid grid-cols-2 gap-2">
          <SheetClose>
            <div
              className="h-32 w-full rounded-3xl"
              onClick={() => setBackground(null)}
            ></div>
          </SheetClose>
          {backgrounds.map((background) => (
            <SheetClose key={background.id}>
              <Image
                key={background.id}
                src={background.image_url}
                alt="내지"
                className="h-32 w-full rounded-lg object-cover shadow-blccu-secondary"
                width={500}
                height={500}
                onClick={() => setBackground(background)}
              />
            </SheetClose>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export { EditPostBackgroundContent };
