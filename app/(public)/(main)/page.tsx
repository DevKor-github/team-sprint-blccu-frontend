'use client';

import { useQuery } from '@tanstack/react-query';

import { AllPostSection } from '@/app/(public)/(main)/_components/all-post-section';
import { BannerNotSignedIn } from '@/app/(public)/(main)/_components/banner-not-signed-in';
import { BannerSignedIn } from '@/app/(public)/(main)/_components/banner-signed-in';
import { FollowingPostSection } from '@/app/(public)/(main)/_components/following-post-section';
import { RootPageHeader } from '@/app/(public)/(main)/_components/root-page-header';
import { TrendingPostSection } from '@/app/(public)/(main)/_components/trending-post-section';
import { queries } from '@/queries';

const RootPage = () => {
  const { data } = useQuery({ ...queries.users.me, retry: false });

  const me = data?.data;

  const isSignedIn = me !== undefined;

  return (
    <div>
      <RootPageHeader />
      <div className="flex flex-col gap-3">
        {isSignedIn ? <BannerSignedIn user={me} /> : <BannerNotSignedIn />}
        <TrendingPostSection />
        {isSignedIn && <FollowingPostSection />}
        <AllPostSection />
      </div>
    </div>
  );
};

export default RootPage;
