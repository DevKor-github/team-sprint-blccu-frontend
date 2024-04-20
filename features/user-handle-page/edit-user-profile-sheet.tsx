'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '@/components/ui/sheet';
import { generateUser } from '@/lib/utils';
import { type PropsWithTrigger } from '@/types/props';

const me = generateUser();

const { username, description } = me;

const EditUserProfileSheet = ({ trigger }: PropsWithTrigger) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="bottom" className="rounded-t-lg">
        <div className="relative">
          <div className="absolute -z-10 h-32 w-full rounded-lg bg-blccu-neutral-400" />
          <div className="pt-24">
            <div className="mx-auto h-14 w-14 rounded-full bg-blccu-neutral-800" />
          </div>
        </div>
        {/**
         * @note
         * 바로 여기서 수정하게 하는 것은 좋은 UX가 아닌 것 같습니다.
         */}
        <div className="mt-4 flex flex-col items-center gap-2">
          <input
            defaultValue={username}
            className="w-full text-center text-lg"
          />
          <input
            defaultValue={description}
            className="w-full text-center text-sm"
          />
        </div>
        <SheetFooter className="mt-12">
          <SheetClose asChild>
            <Button type="submit" className="w-full">
              수정
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export { EditUserProfileSheet };
