'use client';

import { EditUserProfileForm } from '@/app/(public)/(main)/users/[userHandle]/_components/edit-user-profile-form';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { type PropsWithTrigger } from '@/types/util';

const EditUserProfileSheet = ({ trigger }: PropsWithTrigger) => {
  const { me } = useMeQuery();

  if (me === undefined) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="bottom" className="rounded-t-3xl">
        <EditUserProfileForm user={me} defaultValues={me} />
      </SheetContent>
    </Sheet>
  );
};

export { EditUserProfileSheet };
