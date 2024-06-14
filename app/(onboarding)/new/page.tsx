'use client';

import { useRouter } from 'next/navigation';

import { toast } from 'sonner';

import { SetUsernameStep } from '@/app/(onboarding)/new/_steps/set-username-step';
import { TOAST_MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { useFunnel } from '@/hooks/use-funnel';
import { getValues } from '@/lib/utils';

const NEW_PAGE_FUNNEL_STEPS = {
  SET_USERNAME: 'set-username',
} as const;

const NewPage = () => {
  const { Funnel } = useFunnel({
    steps: getValues(NEW_PAGE_FUNNEL_STEPS),
    initialStep: NEW_PAGE_FUNNEL_STEPS.SET_USERNAME,
  });

  const router = useRouter();

  const handleStepComplete = () => {
    router.push(ROUTES.ROOT);

    toast.success(TOAST_MESSAGES.WELCOME);
  };

  return (
    <Funnel>
      <Funnel.Step name={NEW_PAGE_FUNNEL_STEPS.SET_USERNAME}>
        <SetUsernameStep onNext={handleStepComplete} />
      </Funnel.Step>
    </Funnel>
  );
};

export default NewPage;
