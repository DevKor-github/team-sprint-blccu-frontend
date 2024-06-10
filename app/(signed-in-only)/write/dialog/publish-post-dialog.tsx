import { PublishPostForm } from '@/app/(signed-in-only)/write/dialog/publish-post-form';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { type PropsWithTrigger } from '@/types/util';

const PublishPostDialog = ({ trigger }: PropsWithTrigger) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="h-full w-full max-w-screen-sm p-0">
        <PublishPostForm />
      </DialogContent>
    </Dialog>
  );
};

export { PublishPostDialog };
