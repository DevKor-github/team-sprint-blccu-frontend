'use client';

import { useQuery } from '@tanstack/react-query';

import { AllPostSection } from '@/features/root-page/all-post-section';
import { BannerNotSignedIn } from '@/features/root-page/banner-not-signed-in';
import { BannerSignedIn } from '@/features/root-page/banner-signed-in';
import { FollowingPostSection } from '@/features/root-page/following-post-section';
import { RootPageHeader } from '@/features/root-page/root-page-header';
import { TrendingPostSection } from '@/features/root-page/trending-post-section';
import { queries } from '@/queries';

const RootPage = () => {
  const { data } = useQuery({ ...queries.users.me, retry: false });

  const me = data?.data;

  const isSignedIn = me !== undefined;

  return (
    <div>
      <RootPageHeader />
      {isSignedIn ? <BannerSignedIn user={me} /> : <BannerNotSignedIn />}
      <TrendingPostSection />
      {isSignedIn && <FollowingPostSection />}
      <AllPostSection />
    </div>
  );
};

export default RootPage;
