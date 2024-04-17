'use client';

import { useRouter } from 'next/navigation';

import { SetReasonStep } from '@/app/(signed-in-only)/settings/manage-account/leave/_steps/set-reason-step';
import { WatchRecordsStep } from '@/app/(signed-in-only)/settings/manage-account/leave/_steps/watch-records-step';
import { ROUTES } from '@/constants/routes';
import { FunnelStep, useFunnel } from '@/hooks/use-funnel';

enum LeavePageFunnelSteps {
  WatchRecords = 'watch-records-step',
  SetReason = 'set-reason-step',
}

const LeavePage = () => {
  const { Funnel, setStep } = useFunnel({
    steps: [
      LeavePageFunnelSteps.WatchRecords,
      LeavePageFunnelSteps.SetReason,
    ] as const,
    initialStep: LeavePageFunnelSteps.WatchRecords,
  });

  const router = useRouter();

  return (
    <Funnel>
      <FunnelStep name={LeavePageFunnelSteps.WatchRecords}>
        <WatchRecordsStep
          onNext={() => setStep(LeavePageFunnelSteps.SetReason)}
        />
      </FunnelStep>
      <FunnelStep name={LeavePageFunnelSteps.SetReason}>
        <SetReasonStep onNext={() => router.push(ROUTES.ROOT)} />
      </FunnelStep>
    </Funnel>
  );
};

export default LeavePage;
