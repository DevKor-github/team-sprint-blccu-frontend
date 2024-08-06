'use client';

import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';

import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { StackedArticleCard } from '@/components/ui-unstable/stacked-article-card';
import { Skeleton } from '@/components/ui/skeleton';
import { ROUTES } from '@/constants/routes';
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { queries } from '@/queries';

const FollowingArticleSection = () => {
  const { isSignedIn } = useMeQuery();
  const { isLoading, data } = useQuery(queries.articles.following);

  const articles = data?.data.data ?? [];

  if (!isSignedIn) {
    return null;
  }

  if (articles.length === 0) {
    return null;
  }

  return (
    <Section>
      <SectionTitle className="mx-4">팔로잉 최신글</SectionTitle>
      <SectionContent>
        <div className="flex flex-col">
          {isLoading &&
            [...Array(5)].map((_, index) => (
              <div key={index} className="px-4 py-2">
                <Skeleton className="h-20 w-full" />
              </div>
            ))}
          {articles.map((article) => (
            <Link
              href={ROUTES.ARTICLE_OF(article.user.handle, article.id)}
              key={article.id}
            >
              <div className="px-4 py-3">
                <StackedArticleCard article={article} />
              </div>
            </Link>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
};

export { FollowingArticleSection };
