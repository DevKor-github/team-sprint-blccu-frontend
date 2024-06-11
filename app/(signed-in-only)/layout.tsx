'use client';

import { redirect } from 'next/navigation';

import { type PropsWithChildren } from 'react';

import { ROUTES } from '@/constants/routes';
import { useFetchMe } from '@/hooks/queries/use-fetch-me';

const SignedInOnlyLayout = ({ children }: PropsWithChildren) => {
  const { isLoading, isSignedIn } = useFetchMe();

  if (isLoading) {
    return null;
  }

  if (!isSignedIn) {
    redirect(ROUTES.SIGN_IN);
  }

  return <>{children}</>;
};

export default SignedInOnlyLayout;
