import { SetProfileForm } from '@/app/(onboarding)/new/_steps/set-profile-step/components/set-profile-form';
import { AppBar, AppBarBack } from '@/components/ui-unstable/app-bar';
import { Button } from '@/components/ui/button';
import { useFetchMe } from '@/hooks/queries/use-fetch-me';
import { type PropsWithOnNext } from '@/types/util';

const SetProfileStep = ({ onNext }: PropsWithOnNext) => {
  const { me } = useFetchMe();

  if (me === undefined) {
    return null;
  }

  return (
    <div className="flex h-dvh flex-col">
      <AppBar className="justify-between border-none" shadow>
        <AppBarBack />
        <Button variant="ghost" onClick={onNext}>
          건너뛰기
        </Button>
      </AppBar>
      <SetProfileForm user={me} defaultValues={me} onNext={onNext} />
    </div>
  );
};

export { SetProfileStep };
