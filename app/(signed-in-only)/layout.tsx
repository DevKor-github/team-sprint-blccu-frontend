'use client';

import { redirect } from 'next/navigation';

import { type PropsWithChildren } from 'react';

import { ROUTES } from '@/constants/routes';
import { useMeQuery } from '@/hooks/queries/use-me-query';

const SignedInOnlyLayout = ({ children }: PropsWithChildren) => {
  const { isLoading, isSignedIn } = useMeQuery();

  if (isLoading) {
    return null;
  }

  if (!isSignedIn) {
    redirect(ROUTES.SIGN_IN);
  }

  return <>{children}</>;
};

export default SignedInOnlyLayout;
