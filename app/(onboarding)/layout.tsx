'use client';

import { redirect } from 'next/navigation';

import { type PropsWithChildren } from 'react';

import { ROUTES } from '@/constants/routes';
import { useFetchMe } from '@/hooks/queries/use-fetch-me';

// FIXME: 일단 SignedInOnlyLayout과 동일한데, 동의 여부에 따라 분기하는 것으로 변경해야 함
const OnboardingLayout = ({ children }: PropsWithChildren) => {
  const { isLoading, isSignedIn } = useFetchMe();

  if (isLoading) {
    return null;
  }

  if (!isSignedIn) {
    redirect(ROUTES.SIGN_IN);
  }

  return <>{children}</>;
};

export default OnboardingLayout;
