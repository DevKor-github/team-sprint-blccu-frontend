import { StickerContent } from '@/app/(signed-in-only)/write/components/sheet/sticker-content';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { type PropsWithTrigger } from '@/types/util';

const StickerSheet = ({ trigger }: PropsWithTrigger) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="bottom" className="rounded-t-lg">
        <StickerContent />
      </SheetContent>
    </Sheet>
  );
};

export { StickerSheet };
