'use client';

import { redirect } from 'next/navigation';

import { type PropsWithChildren } from 'react';

import { ROUTES } from '@/constants/routes';
import { useFetchMe } from '@/hooks/queries/use-fetch-me';

const NotSignedInOnlyLayout = ({ children }: PropsWithChildren) => {
  const { isLoading, isSignedIn } = useFetchMe();

  if (isLoading) {
    return null;
  }

  if (isSignedIn) {
    redirect(ROUTES.ROOT);
  }

  return <>{children}</>;
};

export default NotSignedInOnlyLayout;
