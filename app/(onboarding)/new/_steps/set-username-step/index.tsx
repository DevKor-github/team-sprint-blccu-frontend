import { SetUsernameForm } from '@/app/(onboarding)/new/_steps/set-username-step/components/set-username-form';
import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/ui-unstable/app-bar';
import { type PropsWithOnNext } from '@/types/util';

const SetUsernameStep = (props: PropsWithOnNext) => {
  return (
    <>
      <AppBar shadow>
        <AppBarBack />
        <AppBarTitle>회원가입</AppBarTitle>
      </AppBar>
      <SetUsernameForm {...props} />
    </>
  );
};

export { SetUsernameStep };
