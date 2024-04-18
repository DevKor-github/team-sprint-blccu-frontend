import { AllPostSection } from '@/features/root-page/all-post-section';
import { BannerNotSignedIn } from '@/features/root-page/banner-not-signed-in';
import { BannerSignedIn } from '@/features/root-page/banner-signed-in';
import { FollowerPostSection } from '@/features/root-page/follower-post-section';
import { RootPageHeader } from '@/features/root-page/root-page-header';
import { TrendingPostSection } from '@/features/root-page/trending-post-section';

const RootPage = () => {
  const isSignedIn = false;

  return (
    <div>
      <RootPageHeader />
      {isSignedIn ? <BannerSignedIn /> : <BannerNotSignedIn />}
      <TrendingPostSection />
      <FollowerPostSection />
      <AllPostSection />
    </div>
  );
};

export default RootPage;
