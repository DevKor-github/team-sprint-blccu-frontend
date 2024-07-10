import { AllArticleSection } from '@/app/(public)/(main)/_components/all-article-section';
import { Banner } from '@/app/(public)/(main)/_components/banner';
import { FollowingArticleSection } from '@/app/(public)/(main)/_components/following-article-section';
import { RootPageHeader } from '@/app/(public)/(main)/_components/root-page-header';
import { TrendingArticleSection } from '@/app/(public)/(main)/_components/trending-article-section';

const RootPage = () => {
  return (
    <div>
      <RootPageHeader />
      <div className="flex flex-col gap-3">
        <Banner />
        <TrendingArticleSection />
        <FollowingArticleSection />
        <AllArticleSection />
      </div>
    </div>
  );
};

export default RootPage;
