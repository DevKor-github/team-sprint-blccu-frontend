'use client';

import { redirect } from 'next/navigation';

import { type PropsWithChildren } from 'react';

import { useQuery } from '@tanstack/react-query';

import { ROUTES } from '@/constants/routes';
import { queries } from '@/queries';

const SignedInOnlyLayout = ({ children }: PropsWithChildren) => {
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

export default SignedInOnlyLayout;
