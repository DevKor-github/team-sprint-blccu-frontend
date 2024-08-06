'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useIntersectionObserver } from '@uidotdev/usehooks';

import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { Skeleton } from '@/components/ui/skeleton';
import { ROUTES } from '@/constants/routes';
import { api } from '@/lib/api';
import { queries } from '@/queries';

const AllArticleSection = () => {
  const { isLoading, data, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: queries.articles.all.queryKey,
      queryFn: ({ pageParam }) =>
        api.articles.articlesReadControllerFetchCursor({
          sort: 'DESC',
          take: 30,
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

  const articles = data?.pages.flatMap((page) => page.data.data) ?? [];

  return (
    <Section className="px-4">
      <SectionTitle>전체글</SectionTitle>
      <SectionContent>
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            0: 1,
            240: 2,
            540: 3,
          }}
        >
          <Masonry gutter="10px">
            {isLoading &&
              [...Array(30)].map((_, index) => (
                <Skeleton
                  key={index}
                  className="w-full"
                  style={{ height: Math.floor(Math.random() * 200) + 140 }}
                />
              ))}
            {articles.map((article) => (
              <Link
                href={ROUTES.ARTICLE_OF(article.user.handle, article.id)}
                key={article.id}
              >
                <Image
                  src={article.imageUrl}
                  alt="photo"
                  className="rounded-md shadow-blccu-secondary transition-transform active:scale-95"
                  width={300}
                  height={300}
                  loading="lazy"
                />
              </Link>
            ))}
            {!isFetchingNextPage && <div ref={ref} />}
          </Masonry>
        </ResponsiveMasonry>
      </SectionContent>
    </Section>
  );
};

export { AllArticleSection };
