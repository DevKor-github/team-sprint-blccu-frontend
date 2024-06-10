import { EditPostBackgroundContent } from '@/app/(signed-in-only)/write/components/sheet/edit-post-background-content';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { type PropsWithTrigger } from '@/types/util';

const EditPostBackgroundSheet = ({ trigger }: PropsWithTrigger) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="bottom" className="rounded-t-lg">
        <EditPostBackgroundContent />
      </SheetContent>
    </Sheet>
  );
};

export { EditPostBackgroundSheet };
