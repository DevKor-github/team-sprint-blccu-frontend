'use client';

import { BannerNotSignedIn } from '@/app/(public)/(main)/_components/banner-not-signed-in';
import { BannerSignedIn } from '@/app/(public)/(main)/_components/banner-signed-in';
import { Skeleton } from '@/components/ui/skeleton';
import { useMeQuery } from '@/hooks/queries/use-me-query';

const Banner = () => {
  const { isLoading, isSignedIn, me } = useMeQuery();

  if (isLoading) {
    return <Skeleton className="m-4 h-60" />;
  }

  return isSignedIn ? <BannerSignedIn user={me} /> : <BannerNotSignedIn />;
};

export { Banner };
