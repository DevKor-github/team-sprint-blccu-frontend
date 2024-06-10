'use client';

import { useRouter } from 'next/navigation';

import { SetReasonStep } from '@/app/(signed-in-only)/leave/_steps/set-reason-step';
import { WatchRecordsStep } from '@/app/(signed-in-only)/leave/_steps/watch-records-step';
import { ROUTES } from '@/constants/routes';
import { useFunnel } from '@/hooks/use-funnel';
import { getValues } from '@/lib/utils';

const LEAVE_PAGE_FUNNEL_STEPS = {
  WATCH_RECORDS: 'watch-records',
  SET_REASON: 'set-reason',
} as const;

const LeavePage = () => {
  const { Funnel, setStep } = useFunnel({
    steps: getValues(LEAVE_PAGE_FUNNEL_STEPS),
    initialStep: LEAVE_PAGE_FUNNEL_STEPS.WATCH_RECORDS,
  });

  const router = useRouter();

  return (
    <Funnel>
      <Funnel.Step name={LEAVE_PAGE_FUNNEL_STEPS.WATCH_RECORDS}>
        <WatchRecordsStep
          onNext={() => setStep(LEAVE_PAGE_FUNNEL_STEPS.SET_REASON)}
        />
      </Funnel.Step>
      <Funnel.Step name={LEAVE_PAGE_FUNNEL_STEPS.SET_REASON}>
        <SetReasonStep />
      </Funnel.Step>
    </Funnel>
  );
};

export default LeavePage;
