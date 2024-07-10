'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { useEffect } from 'react';

import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import { ChevronDown } from 'lucide-react';

import { type UserDto } from '@/__generated__/data-contracts';
import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { StackedArticleCard } from '@/components/ui-unstable/stacked-article-card';
import { Skeleton } from '@/components/ui/skeleton';
import { QUERY_PARAMS } from '@/constants/constants';
import { ROUTES } from '@/constants/routes';
import { api } from '@/lib/api';
import { queries } from '@/queries';

type ArticleByCategorySectionProps = {
  user: UserDto;
};

const ArticleByCategorySection = ({ user }: ArticleByCategorySectionProps) => {
  const searchParams = useSearchParams();
  const categoryIdParam = searchParams.get(QUERY_PARAMS.CATEGORY_ID);
  const categoryId =
    categoryIdParam !== null ? Number(categoryIdParam) : undefined;

  const { data: categoryData } = useQuery({
    ...queries.users.category(categoryId),
    enabled: categoryId !== undefined,
  });

  const {
    isLoading: isPostLoading,
    data: articlesData,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: queries.articles.userByCategory(user.id, categoryId).queryKey,
    queryFn: ({ pageParam }) =>
      api.articles.articlesReadControllerFetchUserArticles({
        userId: user.id,
        sort: 'DESC',
        take: 5,
        categoryId,
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

  const categoryName = categoryData?.data.name ?? '전체글';
  const articles = articlesData?.pages.flatMap((page) => page.data.data) ?? [];

  return (
    <Section>
      <SectionTitle className="mx-4">
        <div className="flex items-center gap-0.5">
          <div>{categoryName}</div>
          <Link href={ROUTES.SELECT_CATEGORY_OF(user.handle)}>
            <div className="p-2">
              <ChevronDown className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </SectionTitle>
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

export { ArticleByCategorySection };
