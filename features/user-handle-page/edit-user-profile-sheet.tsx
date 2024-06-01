'use client';

import { useQuery } from '@tanstack/react-query';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { EditUserProfileForm } from '@/features/user-handle-page/edit-user-profile-form';
import { queries } from '@/queries';
import { type PropsWithTrigger } from '@/types/props';

const EditUserProfileSheet = ({ trigger }: PropsWithTrigger) => {
  const { data: meData } = useQuery({ ...queries.users.me, retry: false });

  if (!meData) {
    return null;
  }

  const me = meData.data;

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="bottom" className="rounded-t-lg">
        <EditUserProfileForm user={me} defaultValues={me} />
      </SheetContent>
    </Sheet>
  );
};

export { EditUserProfileSheet };
