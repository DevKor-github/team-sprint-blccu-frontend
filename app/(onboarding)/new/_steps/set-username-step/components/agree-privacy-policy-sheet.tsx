import { X } from 'lucide-react';

import { PrivacyPolicyContent } from '@/app/(signed-in-only)/settings/legal/privacy-policy/_components/privacy-policy-content';
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

const AgreePrivacyPolicySheet = ({ trigger }: PropsWithTrigger) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="bottom" className="rounded-t-lg">
        <SheetHeader className="flex flex-row items-center justify-between px-4 py-2">
          <SheetTitle>개인정보 처리방침</SheetTitle>
          <SheetClose asChild>
            <IconButton>
              <X className="h-6 w-6" />
            </IconButton>
          </SheetClose>
        </SheetHeader>
        <ScrollArea className="max-h-[70vh] overflow-y-scroll">
          <PrivacyPolicyContent />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export { AgreePrivacyPolicySheet };
