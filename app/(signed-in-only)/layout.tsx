'use client';

import { redirect } from 'next/navigation';

import { type PropsWithChildren } from 'react';

import { ROUTES } from '@/constants/routes';
import { useAgreementsQuery } from '@/hooks/queries/use-agreements-query';

const SignedInOnlyLayout = ({ children }: PropsWithChildren) => {
  const { isLoading, isSignedIn, isInitialUser } = useAgreementsQuery();

  if (isLoading) {
    return null;
  }

  if (!isSignedIn) {
    redirect(ROUTES.SIGN_IN);
  }

  if (isInitialUser) {
    redirect(ROUTES.NEW);
  }

  return <>{children}</>;
};

export default SignedInOnlyLayout;
