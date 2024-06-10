'use client';

import { redirect } from 'next/navigation';

import { type PropsWithChildren } from 'react';

import { useQuery } from '@tanstack/react-query';

import { ROUTES } from '@/constants/routes';
import { queries } from '@/queries';

const NotSignedInOnlyLayout = ({ children }: PropsWithChildren) => {
  const { isLoading, data } = useQuery({
    ...queries.users.me,
    retry: false,
  });

  if (isLoading) {
    return null;
  }

  const me = data?.data;

  if (me !== undefined) {
    redirect(ROUTES.ROOT);
  }

  return <>{children}</>;
};

export default NotSignedInOnlyLayout;
