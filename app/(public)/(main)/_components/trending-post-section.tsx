'use client';

import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';

import { HorizontalScrollablePostCard } from '@/components/ui-unstable/horizontal-scrollable-post-card';
import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { ROUTES } from '@/constants/routes';
import { queries } from '@/queries';

const TrendingPostSection = () => {
  const { isLoading, data } = useQuery(queries.posts.trending);

  const posts = data?.data.data ?? [];

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
            {posts.map((post) => (
              <Link
                href={ROUTES.POST_OF(post.user.handle, post.id)}
                key={post.id}
              >
                <HorizontalScrollablePostCard post={post} />
              </Link>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </SectionContent>
    </Section>
  );
};

export { TrendingPostSection };
