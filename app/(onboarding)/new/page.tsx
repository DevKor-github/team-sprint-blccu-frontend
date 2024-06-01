'use client';

import { useRouter } from 'next/navigation';

import { SetProfileStep } from '@/app/(onboarding)/new/_steps/set-profile-step';
import { SetUsernameStep } from '@/app/(onboarding)/new/_steps/set-username-step';
import { ROUTES } from '@/constants/routes';
import { useFunnel } from '@/hooks/use-funnel';
import { getValues } from '@/lib/utils';

const NEW_PAGE_FUNNEL_STEPS = {
  SET_USERNAME: 'set-username',
  SET_PROFILE: 'set-profile',
} as const;

const NewPage = () => {
  const { Funnel, setStep } = useFunnel({
    steps: getValues(NEW_PAGE_FUNNEL_STEPS),
    initialStep: NEW_PAGE_FUNNEL_STEPS.SET_USERNAME,
  });

  const router = useRouter();

  return (
    <Funnel>
      <Funnel.Step name={NEW_PAGE_FUNNEL_STEPS.SET_USERNAME}>
        <SetUsernameStep
          onNext={() => setStep(NEW_PAGE_FUNNEL_STEPS.SET_PROFILE)}
        />
      </Funnel.Step>
      <Funnel.Step name={NEW_PAGE_FUNNEL_STEPS.SET_PROFILE}>
        <SetProfileStep onNext={() => router.push(ROUTES.ROOT)} />
      </Funnel.Step>
    </Funnel>
  );
};

export default NewPage;
