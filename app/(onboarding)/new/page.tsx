'use client';

import { useRouter } from 'next/navigation';

import { SetProfileStep } from '@/app/(onboarding)/new/_steps/set-profile-step';
import { SetUsernameStep } from '@/app/(onboarding)/new/_steps/set-username-step';
import { ROUTES } from '@/constants/routes';
import { FunnelStep, useFunnel } from '@/hooks/use-funnel';

enum NewPageFunnelSteps {
  SetUsername = 'set-username',
  SetProfile = 'set-profile',
}

const NewPage = () => {
  const { Funnel, setStep } = useFunnel({
    steps: [
      NewPageFunnelSteps.SetUsername,
      NewPageFunnelSteps.SetProfile,
    ] as const,
    initialStep: NewPageFunnelSteps.SetUsername,
  });

  const router = useRouter();

  return (
    <Funnel>
      <FunnelStep name={NewPageFunnelSteps.SetUsername}>
        <SetUsernameStep
          onNext={() => setStep(NewPageFunnelSteps.SetProfile)}
        />
      </FunnelStep>
      <FunnelStep name={NewPageFunnelSteps.SetProfile}>
        <SetProfileStep onNext={() => router.push(ROUTES.ROOT)} />
      </FunnelStep>
    </Funnel>
  );
};

export default NewPage;
