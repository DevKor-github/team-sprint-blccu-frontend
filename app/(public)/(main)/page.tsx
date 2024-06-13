import { AllPostSection } from '@/app/(public)/(main)/_components/all-post-section';
import { Banner } from '@/app/(public)/(main)/_components/banner';
import { FollowingPostSection } from '@/app/(public)/(main)/_components/following-post-section';
import { RootPageHeader } from '@/app/(public)/(main)/_components/root-page-header';
import { TrendingPostSection } from '@/app/(public)/(main)/_components/trending-post-section';

const RootPage = () => {
  return (
    <div>
      <RootPageHeader />
      <div className="flex flex-col gap-3">
        <Banner />
        <TrendingPostSection />
        <FollowingPostSection />
        <AllPostSection />
      </div>
    </div>
  );
};

export default RootPage;
