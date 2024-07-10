import Link from 'next/link';

import { useEffect } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useIntersectionObserver } from '@uidotdev/usehooks';

import { type UserPrimaryResponseDto } from '@/__generated__/data-contracts';
import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { StackedArticleCard } from '@/components/ui-unstable/stacked-article-card';
import { Skeleton } from '@/components/ui/skeleton';
import { ROUTES } from '@/constants/routes';
import { api } from '@/lib/api';
import { getArticlePageAllArticleSectionTitleDescriptor } from '@/lib/get-descriptor';
import { queries } from '@/queries';

type ArticlePageAllArticleSectionProps = {
  user: UserPrimaryResponseDto;
};

const ArticlePageAllArticleSection = ({
  user,
}: ArticlePageAllArticleSectionProps) => {
  const {
    isLoading: isPostLoading,
    data: articleData,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: queries.articles.userByCategory(user.id).queryKey,
    queryFn: ({ pageParam }) =>
      api.articles.articlesReadControllerFetchUserArticles({
        userId: user.id,
        sort: 'DESC',
        take: 5,
        cursor: pageParam,
      }),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: ({
      data: {
        meta: { hasNextData, customCursor },
      },
    }) => (hasNextData ? customCursor : undefined),
  });

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
  });

  const isIntersecting = entry?.isIntersecting ?? false;

  useEffect(() => {
    if (isIntersecting) {
      fetchNextPage();
    }
  }, [isIntersecting]);

  const titleDescriptor = getArticlePageAllArticleSectionTitleDescriptor(
    user.username,
  );

  const articles = articleData?.pages.flatMap((page) => page.data.data) ?? [];

  return (
    <Section>
      <SectionTitle className="mx-4">{titleDescriptor}</SectionTitle>
      <SectionContent>
        <div className="flex flex-col">
          {isPostLoading &&
            [...Array(5)].map((_, index) => (
              <div key={index} className="px-4 py-2">
                <Skeleton className="h-20 w-full" />
              </div>
            ))}
          {articles.map((article) => (
            <Link
              href={ROUTES.ARTICLE_OF(user.handle, article.id)}
              key={article.id}
            >
              <div className="px-4 py-3">
                <StackedArticleCard article={article} />
              </div>
            </Link>
          ))}
          {!isFetchingNextPage && <div ref={ref} />}
        </div>
      </SectionContent>
    </Section>
  );
};

export { ArticlePageAllArticleSection };
