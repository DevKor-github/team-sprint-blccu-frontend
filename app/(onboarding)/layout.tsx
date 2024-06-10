'use client';

import { redirect } from 'next/navigation';

import { type PropsWithChildren } from 'react';

import { useQuery } from '@tanstack/react-query';

import { ROUTES } from '@/constants/routes';
import { queries } from '@/queries';

// FIXME: 일단 SignedInOnlyLayout과 동일한데, 동의 여부에 따라 분기하는 것으로 변경해야 함
const OnboardingLayout = ({ children }: PropsWithChildren) => {
  const { isLoading, data } = useQuery({
    ...queries.users.me,
    retry: false,
  });

  if (isLoading) {
    return null;
  }

  const me = data?.data;

  if (me === undefined) {
    redirect(ROUTES.SIGN_IN);
  }

  return <>{children}</>;
};

export default OnboardingLayout;
