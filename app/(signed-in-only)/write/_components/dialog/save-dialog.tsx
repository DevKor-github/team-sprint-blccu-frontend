import { SaveForm } from '@/app/(signed-in-only)/write/_components/dialog/save-form';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { type PropsWithTrigger } from '@/types/util';

const SaveDialog = ({ trigger }: PropsWithTrigger) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent fullScreen className="h-full w-full max-w-screen-sm p-0">
        <SaveForm />
      </DialogContent>
    </Dialog>
  );
};

export { SaveDialog };
