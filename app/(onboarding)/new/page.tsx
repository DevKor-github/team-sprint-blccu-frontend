'use client';

import { useRouter } from 'next/navigation';

import { SetBackgroundImageStep } from '@/app/(onboarding)/new/_steps/set-background-image-step';
import { SetDescriptionStep } from '@/app/(onboarding)/new/_steps/set-description-step';
import { SetProfileImageStep } from '@/app/(onboarding)/new/_steps/set-profile-image-step';
import { SetUsernameStep } from '@/app/(onboarding)/new/_steps/set-username-step';
import { ROUTES } from '@/constants/routes';
import { FunnelStep, useFunnel } from '@/hooks/use-funnel';

enum NewPageFunnelSteps {
  SetUsername = 'set-username',
  SetProfileImage = 'set-profile-image',
  SetBackgroundImage = 'set-background-image',
  SetDescription = 'set-description',
}

const NewPage = () => {
  const { Funnel, setStep } = useFunnel({
    steps: [
      NewPageFunnelSteps.SetUsername,
      NewPageFunnelSteps.SetProfileImage,
      NewPageFunnelSteps.SetBackgroundImage,
      NewPageFunnelSteps.SetDescription,
    ] as const,
    initialStep: NewPageFunnelSteps.SetUsername,
  });

  const router = useRouter();

  return (
    <Funnel>
      <FunnelStep name={NewPageFunnelSteps.SetUsername}>
        <SetUsernameStep
          onNext={() => setStep(NewPageFunnelSteps.SetProfileImage)}
        />
      </FunnelStep>
      <FunnelStep name={NewPageFunnelSteps.SetProfileImage}>
        <SetProfileImageStep
          onNext={() => setStep(NewPageFunnelSteps.SetBackgroundImage)}
        />
      </FunnelStep>
      <FunnelStep name={NewPageFunnelSteps.SetBackgroundImage}>
        <SetBackgroundImageStep
          onNext={() => setStep(NewPageFunnelSteps.SetDescription)}
        />
      </FunnelStep>
      <FunnelStep name={NewPageFunnelSteps.SetDescription}>
        <SetDescriptionStep onNext={() => router.push(ROUTES.ROOT)} />
      </FunnelStep>
    </Funnel>
  );
};

export default NewPage;
