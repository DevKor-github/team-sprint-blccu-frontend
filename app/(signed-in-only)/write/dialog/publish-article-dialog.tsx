import { PublishArticleForm } from '@/app/(signed-in-only)/write/dialog/publish-article-form';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { type PropsWithTrigger } from '@/types/util';

const PublishArticleDialog = ({ trigger }: PropsWithTrigger) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent fullScreen className="h-full w-full max-w-screen-sm p-0">
        <PublishArticleForm />
      </DialogContent>
    </Dialog>
  );
};

export { PublishArticleDialog };
