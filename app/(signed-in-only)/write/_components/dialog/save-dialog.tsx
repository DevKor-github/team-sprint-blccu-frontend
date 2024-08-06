'use client';

import { useState } from 'react';

import { SaveForm } from '@/app/(signed-in-only)/write/_components/dialog/save-form';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { type PropsWithTrigger } from '@/types/util';

const SaveDialog = ({ trigger }: PropsWithTrigger) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        {trigger}
      </DialogTrigger>
      <DialogContent fullScreen className="h-full w-full max-w-screen-sm p-0">
        <SaveForm setDialogOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export { SaveDialog };
