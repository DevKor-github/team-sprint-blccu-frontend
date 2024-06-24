'use client';

import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';

import {
  Section,
  SectionContent,
  SectionTitle,
} from '@/components/ui-unstable/section';
import { StackedPostCard } from '@/components/ui-unstable/stacked-post-card';
import { Skeleton } from '@/components/ui/skeleton';
import { ROUTES } from '@/constants/routes';
import { useMeQuery } from '@/hooks/queries/use-me-query';
import { queries } from '@/queries';

const FollowingPostSection = () => {
  const { isSignedIn } = useMeQuery();
  const { isLoading, data } = useQuery(queries.posts.following);

  const posts = data?.data.data ?? [];

  if (!isSignedIn) {
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
          {posts.map((post) => (
            <Link
              href={ROUTES.POST_OF(post.user.handle, post.id)}
              key={post.id}
            >
              <div className="px-4 py-3">
                <StackedPostCard post={post} />
              </div>
            </Link>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
};

export { FollowingPostSection };
