import { useQuery } from '@tanstack/react-query';

import { AppBar, AppBarBack } from '@/components/ui-unstable/app-bar';
import { Button } from '@/components/ui/button';
import { SetProfileForm } from '@/features/set-profile-step/set-profile-form';
import { queries } from '@/queries';
import { type PropsWithOnNext } from '@/types/props';

const SetProfileStep = ({ onNext }: PropsWithOnNext) => {
  const { data } = useQuery({ ...queries.users.me, retry: false });

  if (!data) {
    return null;
  }

  const me = data.data;

  return (
    <div className="flex h-dvh flex-col">
      <AppBar className="justify-between border-none">
        <AppBarBack />
        <Button variant="ghost" onClick={onNext}>
          건너뛰기
        </Button>
      </AppBar>
      <SetProfileForm defaultValues={me} onNext={onNext} />
    </div>
  );
};

export { SetProfileStep };
