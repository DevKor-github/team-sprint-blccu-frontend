import { EditArticleBackgroundContent } from '@/app/(signed-in-only)/write/_components/sheet/edit-article-background-content';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { type PropsWithTrigger } from '@/types/util';

const EditArticleBackgroundSheet = ({ trigger }: PropsWithTrigger) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="bottom" className="rounded-t-lg">
        <EditArticleBackgroundContent />
      </SheetContent>
    </Sheet>
  );
};

export { EditArticleBackgroundSheet };
