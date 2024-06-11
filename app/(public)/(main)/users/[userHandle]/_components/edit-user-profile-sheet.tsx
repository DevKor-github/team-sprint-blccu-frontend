'use client';

import { EditUserProfileForm } from '@/app/(public)/(main)/users/[userHandle]/_components/edit-user-profile-form';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useFetchMe } from '@/hooks/queries/use-fetch-me';
import { type PropsWithTrigger } from '@/types/util';

const EditUserProfileSheet = ({ trigger }: PropsWithTrigger) => {
  const { me } = useFetchMe();

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
