'use client';

import { redirect } from 'next/navigation';

import { type PropsWithChildren } from 'react';

import { ROUTES } from '@/constants/routes';
import { useAgreementsQuery } from '@/hooks/queries/use-agreements-query';

const PublicLayout = ({ children }: PropsWithChildren) => {
  const { isLoading, isInitialUser } = useAgreementsQuery();

  if (isLoading) {
    return null;
  }

  if (isInitialUser) {
    redirect(ROUTES.NEW);
  }

  return <>{children}</>;
};

export default PublicLayout;
