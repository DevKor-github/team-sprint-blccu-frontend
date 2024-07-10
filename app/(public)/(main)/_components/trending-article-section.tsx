'use client';

import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';

import { HorizontalScrollableArticleCard } from '@/components/ui-unstable/horizontal-scrollable-article-card';
import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { ROUTES } from '@/constants/routes';
import { queries } from '@/queries';

const TrendingArticleSection = () => {
  const { isLoading, data } = useQuery(queries.articles.trending);

  const articles = data?.data.data ?? [];

  return (
    <Section className="pl-4">
      <SectionTitle>인기글</SectionTitle>
      <SectionContent>
        <ScrollArea>
          <div className="mr-4 flex gap-3 pb-4">
            {isLoading &&
              [...Array(5)].map((_, index) => (
                <Skeleton key={index} className="h-48 w-32" />
              ))}
            {articles.map((article) => (
              <Link
                href={ROUTES.ARTICLE_OF(article.user.handle, article.id)}
                key={article.id}
              >
                <HorizontalScrollableArticleCard article={article} />
              </Link>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </SectionContent>
    </Section>
  );
};

export { TrendingArticleSection };
