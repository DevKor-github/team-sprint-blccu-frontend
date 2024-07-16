import { X } from 'lucide-react';

import { TermsOfUseContent } from '@/app/(signed-in-only)/settings/legal/terms-of-use/_components/terms-of-use-content';
import { IconButton } from '@/components/ui/icon-button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { type PropsWithTrigger } from '@/types/util';

const AgreeTermsOfServiceSheet = ({ trigger }: PropsWithTrigger) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="bottom" className="rounded-t-lg">
        <SheetHeader className="flex flex-row items-center justify-between px-4 py-2">
          <SheetTitle>서비스 이용약관</SheetTitle>
          <SheetClose asChild>
            <IconButton>
              <X className="h-6 w-6" />
            </IconButton>
          </SheetClose>
        </SheetHeader>
        <ScrollArea className="max-h-[70vh] overflow-y-scroll">
          <TermsOfUseContent />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export { AgreeTermsOfServiceSheet };
